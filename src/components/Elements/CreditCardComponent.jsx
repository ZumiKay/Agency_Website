import { useEffect, useState } from "react";
import { Apirequest } from "../util";
import { SecondaryButton } from "../Buttons/FullButton";

import ResponsiveDialog, { errorToast } from "./Modals";
import { Paymentoptioncard } from "./Paymentoptioncard";
import { RadioButton } from "../Buttons/RadioButton";
import "../../style/payment.css";

import { useLocation, useNavigate } from "react-router-dom";

const stateInitialize = {
  number: "",
  expiry: "",
  cvc: "",
  name: "",
  amount: 0,
  focus: "",
  issuer: "",
};

let toasted = false;

const PaymentForm = () => {
  const [openmodal, setopenmodal] = useState(false);
  const [message, setmessage] = useState(null);
  const [wscreen, setwscreen] = useState(window.innerWidth);
  const [loading, setloading] = useState(false);
  const [amount, setamount] = useState(0);

  const [datapost, setdatapost] = useState({
    req_time: "",
    merchant_id: "",
    tran_id: "",
    amount: 0,
    payment_option: "",
    return_url: "",
    continue_success_url: "",
    hash: "",
  });
  const [statedata, setstatedata] = useState({
    payment_option: "",
    amount: 0,
  });

  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);

  const [tranId, settranID] = useState(searchParams.get("tran_id"));

  const [state, setState] = useState(stateInitialize);

  const fetchClientAmount = async () => {
    if (tranId) {
      const request = await Apirequest("/api/getamount", "POST", { tranId });
      if (!request.success && !toasted) {
        toasted = true;
        if (request.status === 404) {
          navigate("/payment", { replace: true });
          return;
        }
        errorToast(request.message);

        return;
      }

      setstatedata((prev) => ({ ...prev, amount: request?.data?.data.amount }));
    }
  };

  useEffect(() => {
    fetchClientAmount();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setwscreen(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleInputChange = ({ target }) => {
    setmessage(null);
    if (target.name === "amount") {
      if (target.value.includes("-")) {
        return;
      }

      if (target.value.match(/\./g)) {
        const [, decimal] = target.value.split(".");

        if (decimal?.length > 2) {
          return;
        }
      }
    }

    setstatedata((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };

  const handleContinue = async () => {
    setmessage(""); // Reset message at the beginning

    // Validate input
    if (
      !amount
        ? !statedata.amount || statedata.amount <= 0
        : amount <= 0 || !amount
    ) {
      setmessage("Please enter a valid amount");
      return;
    }

    if (statedata.payment_option.length === 0) {
      setmessage("Please select a way to pay");
      return;
    }
    setloading(true);

    // Create Transaction
    const request = await Apirequest("/api/v1/createtransaction", "POST", {
      amount: parseFloat(statedata.amount),
      paymentoption: statedata.payment_option,
      tran_c: tranId,
    });
    setloading(false);

    if (!request.success) {
      errorToast(request.message);
      return;
    }

    if (request.data) {
      setdatapost(request.data?.data);

      const checkforstatus = await Apirequest(
        "/api/v1/updatetransaction",
        "POST",
        {
          tranid: request?.data?.data?.tran_id,
        }
      );

      if (!checkforstatus.success) {
        errorToast(request.message);
        return;
      }
    }
  };
  useEffect(() => {
    if (datapost && datapost.amount !== 0 && datapost.hash.length !== 0) {
      // eslint-disable-next-line no-undef
      AbaPayway?.checkout();
    }
  }, [datapost]);

  const showButton = () => {
    return (
      <>
        <SecondaryButton
          id={"checkout_button"}
          title={"CONTINUE"}
          loading={loading}
          onClick={() => handleContinue()}
          type={"button"}
          style={{ marginTop: "10px" }}
        />
      </>
    );
  };

  return (
    <div className="payment_container w-fit mt-2 h-full flex flex-row gap-x-5 smallscreen:flex-col-reverse">
      <div
        style={wscreen > 1024 ? { width: "800px" } : { width: "70vw" }}
        className="payment_element w-fit h-full flex flex-col items-center gap-y-10"
      >
        <form
          target="aba_webservice"
          method="POST"
          id="aba_merchant_request"
          action={import.meta.env.VITE_ABA_URL}
          className="w-full h-full flex flex-col gap-y-5"
        >
          <h3 className="text-lg text-red-500 font-medium min-h-[30px]">
            {message}
          </h3>
          <input name="hash" value={datapost.hash} type="hidden" />
          <input name="req_time" value={datapost.req_time} type="hidden" />
          <input
            name="merchant_id"
            value={datapost.merchant_id}
            type="hidden"
          />
          <input name="tran_id" value={datapost.tran_id} type="hidden" />
          <div className="amount_textfield flex flex-col gap-y-3 w-full h-fit">
            <h3 className="text-lg w-fit h-fit font-bold">
              Amount (USD){" "}
              <span className="text-lg font-bold text-red-600">*</span>
            </h3>
            <input
              className="numberinput w-full h-[50px] pl-2 outline outline-1 outline-gray-300 font-medium"
              type="number"
              placeholder="Amount(USD)"
              value={statedata.amount ? statedata.amount : ""}
              name="amount"
              onChange={handleInputChange}
              readOnly={tranId ? true : false}
              style={{
                minWidth: "260px",
                borderRadius: "10px",
              }}
            />
          </div>

          <input
            name="payment_option"
            value={datapost.payment_option}
            type="hidden"
          />
          <input name="return_url" value={datapost.return_url} type="hidden" />
          <input
            name="continue_success_url"
            value={datapost.continue_success_url}
            type="hidden"
          />
        </form>

        <div className="option_container w-full h-fit flex flex-col items-center gap-y-[10px] ">
          <h3 className="text-lg w-full h-fit font-bold">
            Choose way to pay{" "}
            <span className="text-lg font-bold text-red-600">*</span>
          </h3>
          <div className="w-full h-fit flex flex-row items-center gap-x-5 relative smallestscreen:gap-x-3 smallestscreen:-left-10">
            <RadioButton
              setselected={setstatedata}
              selected={statedata}
              value={"abapay_khqr"}
            />
            <Paymentoptioncard
              type={"abapay_khqr"}
              name={"ABA KHQR"}
              id={"payment_option"}
              setselected={setstatedata}
              selectedtype={statedata}
            />
          </div>
          <div className="w-full h-fit flex flex-row items-center gap-x-5 relative smallestscreen:gap-x-3 smallestscreen:-left-10">
            <RadioButton
              setselected={setstatedata}
              selected={statedata}
              value={"cards"}
            />
            <Paymentoptioncard
              type={"cards"}
              name={"Credit/Debit Card"}
              id={"payment_option"}
              setselected={setstatedata}
              selectedtype={statedata}
            />
          </div>
        </div>

        <div className="flex flex-row  justify-end gap-x-5 w-full h-fit pb-2">
          {showButton()}
        </div>
      </div>

      {openmodal && (
        <ResponsiveDialog
          open={openmodal}
          setopen={setopenmodal}
          amount={state.amount}
        />
      )}
    </div>
  );
};

export default PaymentForm;

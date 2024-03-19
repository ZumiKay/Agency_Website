import { useRef } from "react";
import {
  ArrowRight,
  Cardicon,
  Jcbicon,
  Khqr,
  Mastericon,
  Unionpayicon,
  Visaicon,
} from "../../assets/svg/PaymentAsset";
import PropTypes from "prop-types";

export const Paymentoptioncard = ({
  type,
  name,
  id,
  setselected,
  selectedtype,
}) => {
  const divRef = useRef(null);

  const ShowIcon = () => {
    return type === "abapay_khqr" || type === "abapay_khqr_deeplink" ? (
      <Khqr />
    ) : (
      <Cardicon />
    );
  };

  const ShowDescription = () => {
    return type === "abapay_khqr" ? (
      <div className="text-[11px] text-[#697386] w-[176px] h-[14px]">
        Scan to pay with any banking app
      </div>
    ) : (
      <>
        <Visaicon />
        <Mastericon />
        <Unionpayicon />
        <Jcbicon />
      </>
    );
  };

  //method
  const handleClick = () => {
    const id = divRef.current.id;

    setselected((prev) => ({
      ...prev,
      [id]: type,
    }));
  };

  return (
    <div
      ref={divRef}
      id={id}
      onClick={() => handleClick()}
      className={`paymentoptioncard h-full min-h-[56px] cursor-pointer p-1 min-w-[255px] w-[276px] bg-white transtiion duration-300 hover:bg-gray-100 flex flex-row items-center justify-start gap-x-[10px] rounded-lg shadow-md`}
    >
      <div className="logo w-fit h-fit">
        <ShowIcon />
      </div>
      <div className="detail w-full h-fit flex flex-col justify-center gap-y-[4px]">
        <div className="name text-[12px] font-[600] w-full h-[14px]">
          {" "}
          {name}{" "}
        </div>
        <div className="description w-full h-full flex flex-row gap-x-[4px] items-center">
          <ShowDescription />
        </div>
      </div>
      <ArrowRight />
    </div>
  );
};
Paymentoptioncard.propTypes = {
  type: PropTypes.any,
  name: PropTypes.any,
  id: PropTypes.any,
  setselected: PropTypes.func,
  selectedtype: PropTypes.any,
};

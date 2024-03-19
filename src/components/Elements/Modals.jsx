import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Checkmark from "../../assets/img/Checkmark.png";
import { Paymentoptioncard } from "./Paymentoptioncard";
import { Khqrcontainer } from "./Khqr";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

export default function ResponsiveDialog({ open, setopen, amount }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const price = parseFloat(amount).toFixed(2) ?? "0.00";

  const handleClose = () => {
    setopen(false);
    window.location.reload();
  };

  return (
    <React.Fragment>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle
          id="responsive-dialog-title"
          className="w-full grid place-content-center"
        >
          <img
            src={Checkmark}
            alt="checkmark"
            className="w-[50px] h-[50px] object-contain"
          />
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <h3 className="text-2xl w-full text-green-600 text-center font-light">
              Payment success
            </h3>

            <div className="w-full h-fit flex flex-row justify-evenly mt-10">
              <div className="title_container w-[200px] h-fit flex flex-col gap-y-5">
                <h3 className="text-lg font-bold w-full">Transaction ID</h3>
                <h3 className="text-lg font-bold w-full">Date</h3>
                <h3 className="text-lg font-bold w-full">Amount Paid</h3>
              </div>
              <div className="title_container w-full h-fit flex flex-col gap-y-5">
                <h3 className="text-lg font-normal w-full text-right">
                  6408483430
                </h3>
                <h3 className="text-lg font-normal w-full text-right">
                  03/03/2024
                </h3>
                <h3 className="text-lg font-normal w-full text-right">{`$${price}`}</h3>
              </div>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
ResponsiveDialog.propTypes = {
  open: PropTypes.any,
  setopen: PropTypes.func,
  amount: PropTypes.any,
};

export function PaymentoptionModal({ open, setopen, setstep, step }) {
  const fullScreen = useMediaQuery("(max-width:400px)");

  const handleClose = () => {
    setopen(false);
    step === "khqr" && setstep("none");
  };

  const handleBack = () => {
    setstep("none");
  };
  return (
    <React.Fragment>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        sx={{ borderRadius: "10px" }}
      >
        <DialogTitle id="responsive-dialog-title">
          <p className="w-full h-full text-lg font-medium">
            {step !== "khqr" ? "Choose way to pay" : "ABA KHQR"}
          </p>
        </DialogTitle>
        <DialogContent>
          {step !== "khqr" ? (
            <div className="min-w-[250px] w-full h-fit flex flex-col items-center gap-y-[10px]">
              <Paymentoptioncard
                type={"khqr"}
                name={"ABA KHQR"}
                handleClose={() => handleClose()}
                setstep={setstep}
              />
              <Paymentoptioncard
                type={"card"}
                name={"Credit/Debit Card"}
                setstep={setstep}
                handleClose={() => handleClose()}
              />
            </div>
          ) : (
            <Khqrcontainer />
          )}
        </DialogContent>
        <DialogActions>
          {step === "khqr" && (
            <Button onClick={() => handleBack()} autoFocus>
              Back
            </Button>
          )}
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
PaymentoptionModal.propTypes = {
  open: PropTypes.any,
  setopen: PropTypes.func,
  setstep: PropTypes.func,
  step: PropTypes.any,
};

export const successToast = (message) => {
  return toast.success(message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

export const errorToast = (message) => {
  return toast.error(message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

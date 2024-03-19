import styled from "styled-components";
import Paymentsidebar from "../components/Nav/Paymentsidebar";

import PaymentForm from "../components/Elements/CreditCardComponent";
import { useMetaTags } from "react-metatags-hook";
import { useEffect } from "react";
let loaded = false;
export default function PaymentPage() {
  useMetaTags(
    {
      title: "Payment",
      description: "Payment For IEG",
      charset: "utf8",
      lang: "en",
      metas: [{ name: "", content: "https://iegcambodia.com/payment" }],
    },
    []
  );
  useEffect(() => {
    if (loaded) {
      return;
    }
    const scriptId = "payway-checkout-script";

    if (document.getElementById(scriptId)) {
      // If the script with the specified ID already exists, don't append it again
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId; // Set the ID for the script tag
    script.src = "https://checkout.payway.com.kh/plugins/checkout2-0.js";
    script.async = true;
    document.body.appendChild(script);
    loaded = true;
    // Optional: Cleanup the script when the component unmounts
    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);
  return (
    <Paymentdiv>
      <Paymentsidebar />
      <div className="payment-body w-full h-full flex flex-col  items-center justify-start gap-y-5">
        <div className="paymentcard w-fit h-fit p-2 rounded-lg  mt-40 bg-white flex flex-col gap-y-5 items-center smallerscreen:w-full">
          <PaymentForm />
        </div>
      </div>
    </Paymentdiv>
  );
}

const Paymentdiv = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #fbfbfb;
  position: relative;
`;

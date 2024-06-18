"use client";
import React, { Suspense } from "react";
import Buy from "./Buy";
import { useRouter } from "next/navigation";
import Loading from "@/app/loading";

const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    if (document.getElementById("razorpay-script")) {
      return resolve(true);
    }
    const script = document.createElement("script");
    script.id = "razorpay-script";
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

const Payment = () => {
  const router = useRouter();

  const makePayment = async ({ productId = null, amount = 0 }) => {
    const scriptLoaded = await loadRazorpayScript();

    if (!scriptLoaded) {
      alert("Failed to load Razorpay SDK. Are you online?");
      return;
    }

    const key = process.env.RAZORPAY_API_KEY;
    console.log(key);

    // Make API call to the serverless API with the amount
    const data = await fetch(
      `http://localhost:3000/api/razorpay?amount=${amount}`
    );
    const { order } = await data.json();
    console.log(order.id);

    const options = {
      key: key,
      name: "BARKBUDDY",
      currency: order.currency,
      amount: order.amount,
      order_id: order.id,
      description: "Understanding RazorPay Integration",
      handler: async function (response) {
        console.log(response);

        // const data = await fetch("http://localhost:3000/api/paymentverify", {
        //   method: "POST",
        //   body: JSON.stringify({
        //     razorpay_payment_id: response.razorpay_payment_id,
        //     razorpay_order_id: response.razorpay_order_id,
        //     razorpay_signature: response.razorpay_signature,
        //   }),
        // });

        // const res = await data.json();

        // console.log("response verify==", res);

        // if (res?.message == "success") {
        //   console.log("redirected.......");
        //   router.push("/");
        // }
      },
      prefill: {
        name: "BARKBUDDY",
        email: "barkbyddy@gmail.com",
        contact: "000000000",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();

    paymentObject.on("payment.failed", function (response) {
      alert("Payment failed. Please try again. Contact support for help");
    });
  };

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Buy makePayment={makePayment} />
      </Suspense>
    </>
  );
};

export default Payment;

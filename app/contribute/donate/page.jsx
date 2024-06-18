"use client";
import React, { Suspense, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "@/app/loading";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";

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
  const { user } = useUser();
  console.log(user);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState(0);
  const [userDetails, setUserDetails] = useState({
    user: "",
    email: "",
    name: "",
    contact: "", // Make sure to add contact if required
  });

  useEffect(() => {
    if (user) {
      setUserDetails({
        user: user.id,
        name: user.fullName,
        email: user.emailAddresses[0].emailAddress, // Extract email correctly
        // contact: user.primaryPhoneNumber, // Add contact if available
      });
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const makePayment = async () => {
    const scriptLoaded = await loadRazorpayScript();

    if (!scriptLoaded) {
      alert("Failed to load Razorpay SDK. Are you online?");
      return;
    }

    const key = process.env.NEXT_PUBLIC_RAZORPAY_API_KEY;

    const data = await fetch(`/api/razorpay?amount=${amount}`);
    const { order } = await data.json();

    const options = {
      key: key,
      name: "BARKBUDDY",
      currency: order.currency,
      amount: order.amount,
      order_id: order.id,
      description: "BARKBUDDY Donation",
      handler: async function (response) {
        console.log(response);

        try {
          const res = await axios.post("/api/donate", {
            userDetails,
            amount,
            paymentId: response.razorpay_payment_id,
            orderId: response.razorpay_order_id,
            signature: response.razorpay_signature,
          });

          console.log(res.data);

          router.push(`donate/my-donations`);
        } catch (error) {
          console.error("Failed to save contribution details", error);
        }
      },
      prefill: {
        name: userDetails.name,
        email: userDetails.email,
        contact: userDetails.contact,
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
        <div className="flex flex-col items-center justify-center mt-[100px]">
          <h1 className="text-2xl">Donate to BARKBUDDY</h1>
          <form className="w-full max-w-lg">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="amount"
              >
                Donation Amount
              </label>
              <input
                type="number"
                name="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter donation amount"
                required
              />
            </div>
            <button
              type="button"
              onClick={() => {
                setIsLoading(true);
                makePayment().finally(() => setIsLoading(false));
              }}
              disabled={isLoading}
              className={`bg-blue-500 text-white font-semibold py-2 px-4 rounded ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? "Processing..." : "Donate Now"}
            </button>
          </form>
        </div>
      </Suspense>
    </>
  );
};

export default Payment;

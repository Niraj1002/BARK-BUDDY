"use client";
import React, { useState } from "react";

const Buy = ({ makePayment }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center mt-[100px]">
      <h1 className="text-2xl">Razor Pay Integration with NextJs 13</h1>
      <input
        type="number"
        name="number"
        id=""
        className="border-2"
        onChange={(e) => setAmount(e.target.value)} // Update amount state
        value={amount} // Ensure input value is controlled
      />
      <button
        onClick={() => {
          makePayment({ productId: "example_ebook", amount }); // Pass amount to makePayment
        }}
        disabled={isLoading}
        className={`bg-blue-500 text-white font-semibold mt-20 py-2 px-4 rounded ${
          isLoading ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {isLoading ? "Processing..." : "Buy Now"}
      </button>
    </div>
  );
};

export default Buy;

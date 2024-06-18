import Logo from "@/components/Navbar/Logo";
import Link from "next/link";
import React from "react";

const ThankYouPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
        <div className="flex justify-center">
          <Logo />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Thank You for Your Purchase!
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          We appreciate your order of our dog products.
        </p>
        <p className="mt-2 text-center text-sm text-gray-600">
          Your order will be delivered on time.
        </p>
        <div className="mt-8 space-y-4">
          <Link href={`/buy`}>
            <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;

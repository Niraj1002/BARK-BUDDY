// pages/CartPage.js
"use client";
import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";

const CartPage = () => {
  const cart = useSelector((state) => state.cart.cartItems);
  const products = useSelector((state) => state.products);

  console.log("Cart:", cart); // Add this
  console.log("Products:", products); // Add this

  const calculateTotal = () => {
    return Object.entries(cart || {})
      .reduce((total, [productId, quantity]) => {
        const product = products.find((p) => p.id === parseInt(productId));
        return product ? total + product.price * quantity : total;
      }, 0)
      .toFixed(2);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Cart</h1>
      {Object.keys(cart || {}).length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {Object.entries(cart || {}).map(([productId, quantity]) => {
            const product = products.find((p) => p.id === parseInt(productId));
            return product ? (
              <div key={productId} className="flex items-center mb-4">
                <img
                  src={`/images/${product.image}`}
                  alt={product.name}
                  className="w-16 h-16 object-cover mr-4"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-600">${product.price}</p>
                  <p className="text-sm text-gray-500">Quantity: {quantity}</p>
                </div>
                <p className="text-lg font-bold">
                  ${(product.price * quantity).toFixed(2)}
                </p>
              </div>
            ) : null;
          })}
          <div className="font-bold mt-4">Total: ${calculateTotal()}</div>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4">
            Proceed to Pay
          </button>
        </>
      )}
      <Link href="/buy" className="block mt-4 text-blue-500 hover:underline">
        Back to Products
      </Link>
    </div>
  );
};

export default CartPage;

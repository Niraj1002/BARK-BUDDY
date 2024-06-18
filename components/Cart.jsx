// components/Cart.js
import React from "react";

const Cart = ({ cart, calculateTotal, products }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Cart</h2>
      {Object.entries(cart).map(([productId, quantity]) => {
        const product = products.find((p) => p.id === parseInt(productId));
        if (product) {
          return (
            <div key={productId} className="flex items-center mb-2">
              <span className="mr-2">
                {product.name} (x{quantity})
              </span>
              <span>${(product.price * quantity).toFixed(2)}</span>
            </div>
          );
        } else {
          return null;
        }
      })}
      <div className="font-bold mt-2">Total: ${calculateTotal()}</div>
    </div>
  );
};

export default Cart;

// pages/ProductPage.js
"use client";
import React, { useState, useEffect } from "react";
import ProductList from "@/components/ProductList";
import Filter from "@/components/Filter";
import { initialProducts } from "@/constants";
import { useRouter } from "next/navigation";

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

const ProductPage = () => {
  const router = useRouter();
  const [products, setProducts] = useState(initialProducts);
  const [cart, setCart] = useState({});
  const [filters, setFilters] = useState({
    category: "",
    minPrice: 0,
    maxPrice: 10000,
    searchTerm: "",
  });

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const makePayment = async () => {
    const scriptLoaded = await loadRazorpayScript();

    if (!scriptLoaded) {
      alert("Failed to load Razorpay SDK. Are you online?");
      return;
    }

    const key = process.env.RAZORPAY_API_KEY;

    const data = await fetch(`/api/razorpay?amount=${cartTotal()}`);
    const { order } = await data.json();

    const options = {
      key: key,
      name: "Your Store Name",
      currency: order.currency,
      amount: order.amount,
      order_id: order.id,
      description: "Order Payment",
      handler: async function (response) {
        console.log(response);
        console.log(response.razorpay_order_id);
        router.push(`/buy/${response.razorpay_order_id}`);
      },
      prefill: {
        name: "Your Customer Name",
        email: "customer@example.com",
        contact: "1234567890",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();

    paymentObject.on("payment.failed", function (response) {
      alert("Payment failed. Please try again. Contact support for help");
    });
  };

  const handleAddToCart = (productId) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[productId]) {
        updatedCart[productId]++;
      } else {
        updatedCart[productId] = 1;
      }
      return updatedCart;
    });
  };

  const getCartItemCount = () => {
    return Object.values(cart).reduce((total, count) => total + count, 0);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const filteredProducts = products.filter((product) => {
    return (
      (filters.category === "" || product.category === filters.category) &&
      product.price >= filters.minPrice &&
      product.price <= filters.maxPrice &&
      (filters.searchTerm === "" ||
        product.name.toLowerCase().includes(filters.searchTerm.toLowerCase()))
    );
  });

  const cartTotal = () => {
    return Object.keys(cart)
      .reduce((total, productId) => {
        const product = products.find((p) => p.id === parseInt(productId));
        return total + product.price * cart[productId];
      }, 0)
      .toFixed(2);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Product Page</h1>
      </div>
      <input
        type="text"
        placeholder="Search products..."
        value={filters.searchTerm}
        onChange={(e) => setFilters({ ...filters, searchTerm: e.target.value })}
        className="w-full px-3 py-2 border rounded mb-4"
      />
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/4 pr-4">
          <div className="bg-white p-4 rounded shadow-md mb-4">
            <h2 className="text-xl font-bold mb-4">Filter</h2>
            <Filter filters={filters} onFilterChange={handleFilterChange} />
          </div>
        </div>
        <div className="w-full lg:w-2/4 pr-4">
          <ProductList
            products={filteredProducts}
            handleAddToCart={handleAddToCart}
            handleAddProduct={(newProduct) =>
              setProducts([...products, newProduct])
            }
          />
        </div>
        <div className="w-full lg:w-1/4 pl-4">
          <div className="bg-white p-4 rounded shadow-md">
            <h2 className="text-xl font-bold mb-4">Cart</h2>
            <ul>
              {Object.keys(cart).map((productId) => {
                const product = products.find(
                  (p) => p.id === parseInt(productId)
                );
                return (
                  <li key={productId} className="mb-2">
                    {product.name} x {cart[productId]}
                  </li>
                );
              })}
            </ul>
            <div className="mt-4 font-bold">Total: ₹{cartTotal()}</div>
            <button
              onClick={makePayment}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded mt-4"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

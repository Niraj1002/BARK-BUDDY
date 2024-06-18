// StoreProvider.js
"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore } from "@/lib/store/store";
import { addToCart } from "@/lib/store/features/cart/cartSlice";

const StoreProvider = ({ children }) => {
  const storeRef = useRef(null);

  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore(); // Assuming makeStore() creates your Redux store
    // You can dispatch actions or perform any initial setup here
    storeRef.current.dispatch(addToCart("count")); // Example of dispatching an action
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default StoreProvider;

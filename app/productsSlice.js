// store/productsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Smartphone",
    price: 299.99,
    image: "smartphone.jpg",
    description: "Latest model with advanced features",
    category: "Electronics",
  },
  {
    id: 2,
    name: "Laptop",
    price: 799.99,
    image: "laptop.jpg",
    description: "Powerful laptop for work and play",
    category: "Electronics",
  },
  // Add all other products here
];

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
    setProducts: (state, action) => {
      return action.payload;
    },
  },
});

export const { addProduct, setProducts } = productsSlice.actions;

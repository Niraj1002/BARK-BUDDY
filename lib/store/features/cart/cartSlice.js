import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  values: [], // Initialize values as an empty array
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // Push the payload (item) into the values array
      state.values.push(action.payload);
    },
  },
});

// Export action creators
export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;

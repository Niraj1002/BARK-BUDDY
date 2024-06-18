import mongoose, { Schema } from "mongoose";

const cartSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: [true, "User ID is required."],
    },
    items: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          required: [true, "Product ID is required."],
        },
        quantity: {
          type: Number,
          required: [true, "Quantity is required."],
          min: [1, "Quantity must be greater than 0."],
        },
      },
    ],
  },
  { timestamps: true }
);

const Cart = mongoose.model("Cart", cartSchema);

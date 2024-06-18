import mongoose, { Schema } from "mongoose";

const buySchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required."],
    trim: true,
    minLength: [2, "Name must be larger than 2 characters"],
    maxLength: [50, "Name must be lesser than 50 characters"],
  },

  email: {
    type: String,
    required: [true, "Email is required."],
    match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"],
  },

  phone: {
    type: String,
    required: [true, "Phone is required."],
    match: [/^\d{10}$/, "Invalid phone number"],
  },

  address: {
    type: String,
    required: [true, "Address is required."],
  },

  city: {
    type: String,
    required: [true, "City is required."],
  },

  state: {
    type: String,
    required: [true, "State is required."],
  },

  zip: {
    type: String,
    required: [true, "Zip is required."],
    match: [/^\d{6}$/, "Invalid zip code"],
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

const Buy = mongoose.models.Buy || mongoose.model("Buy", buySchema);

export default Buy;

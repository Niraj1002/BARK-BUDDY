import mongoose from "mongoose";

const DonateSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

module.exports =
  mongoose.models.Donate || mongoose.model("Donate", DonateSchema);

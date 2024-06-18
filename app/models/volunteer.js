import mongoose from "mongoose";

const VolunteerSchema = new mongoose.Schema({
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
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});

module.exports =
  mongoose.models.Volunteer || mongoose.model("Volunteer", VolunteerSchema);

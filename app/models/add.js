import mongoose, { Schema } from "mongoose";

const dogSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required."],
    trim: true,
    minLength: [2, "Name must be larger than 2 characters"],
    maxLength: [50, "Name must be lesser than 50 characters"],
  },
  place: {
    type: String,
    required: [true, "Place is required."],
  },
  story: {
    type: String,
    required: [true, "Story is required."],
  },
  canLiveWithChildren: {
    type: Boolean,
    required: [true, "Can live with children information is required."],
  },
  isVaccinated: {
    type: Boolean,
    required: [true, "Vaccination status is required."],
  },
  training: {
    type: String,
    required: [true, "Training information is required."],
  },
  gender: {
    type: String,
    required: [true, "Gender is required."],
    enum: ["Male", "Female"],
  },
  breed: {
    type: String,
    required: [true, "Breed is required."],
  },
  age: {
    type: String,
    required: [true, "Age is required."],
  },
  color: {
    type: String,
    required: [true, "Color is required."],
  },
  weight: {
    type: Number,
    required: [true, "Weight is required."],
  },
  height: {
    type: Number,
    required: [true, "Height is required."],
  },
  pictureURL: {
    type: String,
    required: [true, "URL for picture is required."],
    match: [
      /^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/,
      "Invalid URL for picture",
    ],
  },
});

const Dog = mongoose.models.Dog || mongoose.model("Dog", dogSchema);

export default Dog;

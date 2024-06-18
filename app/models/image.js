import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema(
  {
    image_url: {
      type: String,
      required: true,
    },
    public_id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const ImageGallery =
  mongoose.models.image || mongoose.model("image", ImageSchema);

export default ImageGallery;

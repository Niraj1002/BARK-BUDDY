import { v2 as cloudinary } from "cloudinary";
import mongoose from "mongoose";
import multer from "multer";
import nextConnect from "next-connect";
import fs from "fs";

const upload = multer({ dest: "/tmp" });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const handler = nextConnect()
  .use(upload.single("file"))
  .post(async (req, res) => {
    try {
      if (!req.file) {
        throw new Error("No file uploaded");
      }

      const filePath = req.file.path;

      // Upload file to Cloudinary
      const result = await cloudinary.uploader.upload(filePath, {
        folder: "uploads",
      });

      // Connect to MongoDB
      await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      const ImageSchema = new mongoose.Schema({
        url: String,
        createdAt: {
          type: Date,
          default: Date.now,
        },
      });

      const Image =
        mongoose.models.Image || mongoose.model("Image", ImageSchema);

      const image = new Image({ url: result.secure_url });
      await image.save();

      // Delete temporary file after upload
      fs.unlinkSync(filePath);

      res.status(200).json({ success: true, url: result.secure_url });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: error.message });
    }
  });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;

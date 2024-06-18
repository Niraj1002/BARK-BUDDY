import cloudinary from "./cloudinary";
import { Buffer } from "buffer";

const UploadImage = async (file, folder) => {
  const buffer = await file.arrayBuffer();
  const bytes = Buffer.from(buffer);

  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { resource_type: "auto", folder: folder },
      (err, result) => {
        if (err) {
          return reject(err.message);
        }
        return resolve(result);
      }
    );
    stream.end(bytes);
  });
};

export default UploadImage;

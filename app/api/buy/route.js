import connectDB from "@/app/lib/mongodb";
import Buy from "@/app/models/buy";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function POST(req) {
  const { name, email, message, phone, address, city, state, zip } =
    await req.json();

  try {
    await connectDB();

    // Create a new contact
    await Buy.create({
      name,
      email,
      message,
      phone,
      address,
      city,
      state,
      zip,
    });

    return NextResponse.json({
      msg: "Message sent successfully",
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      // Extract validation error messages
      const errorList = Object.values(error.errors).map((err) => err.message);
      return NextResponse.json({ msg: errorList });
    } else {
      console.error("Error:", error);
      return NextResponse.json({ msg: ["Unable to send message."] });
    }
  }
}

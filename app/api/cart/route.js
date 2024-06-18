import connectDB from "@/app/lib/mongodb";
import Cart from "@/app/models/cart";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function POST(req) {
  const { userId, items } = await req.json();

  try {
    await connectDB();
    await Cart.create({
      userId,
      items,
    });

    return NextResponse.json({
      msg: ["Cart added successfully"],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      console.log(errorList);
      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json({ msg: ["Unable to add cart."] });
    }
  }
}

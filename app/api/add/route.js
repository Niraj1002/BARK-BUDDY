import connectDB from "@/app/lib/mongodb";
import Add from "@/app/models/add";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function POST(req) {
  const {
    name,
    place,
    story,
    canLiveWithChildren,
    isVaccinated,
    training,
    gender,
    breed,
    age,
    color,
    weight,
    height,
    pictureURL,
  } = await req.json();

  try {
    await connectDB();
    await Add.create({
      name,
      place,
      story,
      canLiveWithChildren,
      isVaccinated,
      training,
      gender,
      breed,
      age,
      color,
      weight,
      height,
      pictureURL,
    });

    return NextResponse.json({
      msg: ["Pet added successfully"],
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
      return NextResponse.json({ msg: ["Unable to add pet."] });
    }
  }
}
export async function GET() {
  try {
    await connectDB();
    const dogs = await Add.find({}); // Retrieve all dogs from the database
    return NextResponse.json({
      dogs,
      success: true,
    });
  } catch (error) {
    return NextResponse.json({ msg: ["Unable to retrieve dogs."] });
  }
}

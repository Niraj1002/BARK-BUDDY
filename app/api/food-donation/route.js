import { NextResponse } from "next/server";
import connectDB from "@/app/lib/mongodb";
import Food from "@/app/models/contributions/food"; // Ensure correct import

export const POST = async (req) => {
  await connectDB();

  try {
    const body = await req.json();
    const { userDetails, date, time, foodType, quantity, location, notes } =
      body;
    console.log("Received userDetails:", userDetails);

    const foodContribution = new Food({
      user: userDetails.user,
      name: userDetails.name,
      email: userDetails.email,
      date,
      time,
      foodType,
      quantity,
      location,
      notes,
    });

    console.log("Prepared food contribution:", foodContribution);

    await foodContribution.save();

    return NextResponse.json(
      { success: true, message: "Food donation submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error saving food contribution:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

export const GET = async (req) => {
  await connectDB();

  const userId = req.nextUrl.searchParams.get("user");

  if (!userId) {
    return NextResponse.json({ error: "User ID is required" }, { status: 400 });
  }

  try {
    const feeding = await Food.find({ user: userId });

    return NextResponse.json({
      feeding,
      success: true,
    });
  } catch (error) {
    console.error("Error fetching food donations:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

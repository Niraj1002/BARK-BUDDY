import { NextResponse } from "next/server";
import connectDB from "@/app/lib/mongodb";
import volunteer from "@/app/models/volunteer";

export const POST = async (req) => {
  await connectDB();

  try {
    const body = await req.json();
    const { userDetails, date, time } = body;
    console.log("Received userDetails:", userDetails);

    const volunteering = new volunteer({
      user: userDetails.user,
      name: userDetails.name,
      email: userDetails.email,
      date,
      time,
    });

    console.log("Prepared volunteer contribution:", volunteering);

    await volunteering.save();

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error saving volunteer contribution:", error.message);
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
    const volunteerings = await volunteer.find({ user: userId });

    return NextResponse.json({
      volunteerings,
      success: true,
    });
  } catch (error) {
    console.error("Error fetching volunteerings:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

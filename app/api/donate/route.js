import { NextResponse } from "next/server";
import connectDB from "@/app/lib/mongodb";
import donate from "@/app/models/donate";

export const POST = async (req) => {
  await connectDB();

  try {
    const body = await req.json();
    const { userDetails, amount, paymentId, orderId, signature } = body;

    console.log("Received userDetails:", userDetails);

    const donation = new donate({
      user: userDetails.user,
      name: userDetails.name,
      email: userDetails.email,
      amount,
    });

    console.log("Prepared donation:", donation);

    await donation.save();
    console.log("Contribution saved successfully");

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error saving contribution:", error.message);
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
    const donations = await donate.find({ user: userId });

    return NextResponse.json({
      donations,
      success: true,
    });
  } catch (error) {
    console.error("Error fetching donations:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

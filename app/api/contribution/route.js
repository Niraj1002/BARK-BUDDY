import { NextResponse } from "next/server";
import connectDB from "@/app/lib/mongodb";
import Contribution from "@/app/models/Contribution";

export const POST = async (req) => {
  await connectDB();

  try {
    const body = await req.json();
    const { userDetails, amount, paymentId, orderId, signature } = body;

    console.log("Received data:", body);

    const contribution = new Contribution({
      user: userDetails,
      amount,
      paymentId,
      orderId,
      signature,
    });

    await contribution.save();
    console.log("Contribution saved successfully");
    return NextResponse.json({ message: "Contribution saved successfully" });
  } catch (error) {
    console.error("Error saving contribution:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

export const GET = async (req) => {
  await connectDB();

  //   const userId = req.nextUrl.searchParams.get("userId");

  //   if (!userId) {
  //     return NextResponse.json({ error: "User ID is required" }, { status: 400 });
  //   }

  try {
    const contributions = await Contribution.find({ "user.email": userId });
    return NextResponse.json(contributions);
  } catch (error) {
    console.error("Error retrieving contributions:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

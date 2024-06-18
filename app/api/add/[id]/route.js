import connectDB from "@/app/lib/mongodb";
import Add from "@/app/models/add";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { id } = params;

  try {
    await connectDB();
    const dog = await Add.findById(id);
    if (!dog) {
      return NextResponse.json({ msg: "Dog not found.", success: false });
    }
    return NextResponse.json({ dog, success: true });
  } catch (error) {
    return NextResponse.json({ msg: "Unable to fetch dog.", success: false });
  }
}

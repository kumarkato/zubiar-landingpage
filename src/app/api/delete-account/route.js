import { NextResponse } from "next/server";
import dbConnect from "@/app/utils/dbConnect";
import DeleteRequest from "@/app/models/AccountDeletionRequest";

export async function POST(req) {
  try {
    await dbConnect();

    const body = await req.json();
    const { name, phone, email, description } = body;

    if (!name || !phone || !email || !description) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const newRequest = new DeleteRequest(body);
    
    await newRequest.save();

    return NextResponse.json(
      { message: "Account deletion request submitted successfully!" },
      { status: 201 }
    );
    
  } catch (error) {
    console.error("Error submitting account deletion request:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

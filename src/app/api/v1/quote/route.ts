import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import { QuoteModel } from "@/models/Quote.model";

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    const data = await request.json();
    if (
      !data.fullName ||
      !data.email ||
      !data.projectType ||
      !data.details ||
      typeof data.consent !== "boolean"
    ) {
      return NextResponse.json(
        { message: "Invalid input", success: false },
        { status: 400 },
      );
    }
    const quote = new QuoteModel({
      fullName: data.fullName.trim(),
      details: data.details.trim(),
      email: data.email.toLowerCase().trim(),
      projectType: data.projectType,
      budget: data.budget,
      consent: data.consent,
    });
    await quote.save();
    return NextResponse.json(
      {
        message: "Quote request submitted successfully",
        success: true,
      },
      { status: 201 },
    );
  } catch (error: any) {
    console.error("Error submitting quote:", error);
    return NextResponse.json(
      {
        message: error.message || "Failed to submit quote request",
        success: false,
      },
      { status: 500 },
    );
  }
}

"use server";

import dbConnect from "@/lib/mongodb";
import { QuoteModel } from "@/models/Quote.model";

export async function submitQuote(formData: FormData) {
  try {
    await dbConnect();
    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const projectType = formData.get("projectType") as string;
    const budget = formData.get("budget") as string;
    const details = formData.get("details") as string;
    const consent = formData.get("consent") === "on";

    if (
      !fullName ||
      !email ||
      !projectType ||
      !details ||
      typeof consent !== "boolean"
    ) {
      return { success: false, message: "Invalid input" };
    }

    const quote = new QuoteModel({
      fullName: fullName.trim(),
      details: details.trim(),
      email: email.toLowerCase().trim(),
      projectType,
      budget,
      consent,
    });
    await quote.save();
    return { success: true, message: "Quote request submitted successfully" };
  } catch (error: any) {
    console.error("Error submitting quote:", error);
    return { success: false, message: "Failed to submit quote request" };
  }
}
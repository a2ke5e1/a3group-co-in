import dbConnect from "@/lib/dbConnect";
import { AppStats } from "@/models/AppStats";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const appIds = [
    "com.a3.yearlyprogess",
    "com.a3.eyecare",
    "com.a3.soundprofiles",
  ];
  await dbConnect();
  const appDetails = await AppStats.find();
  return NextResponse.json(
    appDetails.map((app) => {
      return {
        appId: app.appId,
        downloads: app.downloads,
        reviews: app.reviews,
        rating: app.rating,
        lastUpdated: app.lastUpdated,
      };
    })
  );
}

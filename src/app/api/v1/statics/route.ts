import dbConnect from "@/lib/dbConnect";
import { AppStats, IAppStats } from "@/models/AppStats";
import { NextRequest, NextResponse } from "next/server";
import gplay from "google-play-scraper";

const appIds = [
  "com.a3.yearlyprogess",
  "com.a3.eyecare",
  "com.a3.soundprofiles",
];

const getLatestAppDetails = async (appId: string) => {
  const data = await gplay.app({ appId: appId });
  return {
    appId: appId,
    downloads: data.minInstalls,
    reviews: data.ratings ?? 0,
    rating: data.score ?? 0,
  };
};

export async function GET(request: NextRequest) {
  await dbConnect();

  // Get Current Date
  const date = new Date();
  const appDetails = await AppStats.find();

  if (appDetails.length !== appIds.length) { 

    await AppStats.deleteMany({});

    const scrapedDetails = await Promise.all(
      appIds.map((appId) => getLatestAppDetails(appId))
    );
    
    scrapedDetails.forEach(async (app) => {
      await AppStats.create({
        appId: app.appId,
        downloads: app.downloads,
        reviews: app.reviews,
        rating: app.rating,
      });
    });
    
    const appDetailsFinal = await AppStats.find();
    return NextResponse.json(
      appDetailsFinal.map((app: IAppStats) => {
        return {
          appId: app.appId,
          downloads: app.downloads,
          reviews: app.reviews,
          rating: app.rating,
          updatedAt: app.updatedAt,
        };
      })
    );

  }


  // Check if any of the data is older than a month
  const isDataOld = appDetails.some((app) => {
    const lastUpdated = new Date(app.updatedAt);
    const diffTime = Math.abs(date.getTime() - lastUpdated.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 30;
  });

  // If data is older than a month, scrape the latest data
  if (isDataOld) {
    const scrapedDetails = await Promise.all(
      appIds.map((appId) => getLatestAppDetails(appId))
    );
    scrapedDetails.forEach(async (app) => {
      const newAppStat = app;
      const appStat = await AppStats.findOne({ appId: app.appId });

      if (appStat === null) {
        const newAppStat = new AppStats({
          appId: app.appId,
          downloads: app.downloads,
          reviews: app.reviews,
          rating: app.rating,
        });
        await AppStats.updateOne({ appId: app.appId }, newAppStat, {
          upsert: true,
        });
      }

      if (newAppStat.downloads > appStat!.downloads) {
        appStat!.downloads = newAppStat.downloads;
      }

      if (newAppStat.reviews > appStat!.reviews) {
        appStat!.reviews = newAppStat.reviews;
      }

      if (newAppStat.rating > appStat!.rating) {
        appStat!.rating = newAppStat.rating;
      }

      await AppStats.updateOne({ appId: app.appId }, appStat!);
    });
  }
  const appDetailsFinal = await AppStats.find();
  return NextResponse.json(
    appDetailsFinal.map((app) => {
      return {
        appId: app.appId,
        downloads: app.downloads,
        reviews: app.reviews,
        rating: app.rating,
        updatedAt: app.updatedAt,
      };
    })
  );
}

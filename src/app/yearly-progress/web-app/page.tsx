import YearlyProgressWidget from "@/components/YearlyProgressWidget";
import info from "../../../../info/yearly-progress.json";
import { Metadata } from "next";
import YearlyProgressDaylightWidget from "@/components/YearlyProgressDaylightWidget";
import YearlyProgressNightWidget from "@/components/YearlyProgressNightWidget";
import Link from "next/link";
import { ArrowBack } from "@mui/icons-material";
import { BackButton } from "@/components/BackButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://a3group.co.in"),
  title: info.name,
  description: info.desc.about,
  icons: "/yearly-progress/favicon/android-chrome-192x192.png",
};

export default async function YearlyProgressWebApp() {
  return (
    <div className="2xl:mx-0 mx-2 my-8 min-h-[80vh]">
      <BackButton />
      <div className="my-4">
        <h1 className="text-display-small font-bold">
          Yearly Progress{" "}
          <span className="text-primary text-label-medium">v0.04</span>
        </h1>
        <p className="text-secondary text-body-medium">
          Yearly Progress but in the web.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-4 grid-cols-1">
        <YearlyProgressWidget type="year" />
        <YearlyProgressWidget type="month" />
        <YearlyProgressWidget type="week" />
        <YearlyProgressWidget type="day" />
        <YearlyProgressDaylightWidget />
        <YearlyProgressNightWidget />
      </div>
      <p className="text-on-surface text-label-medium font-normal mt-4">
        Daylight and Night Widget needs your location to get sunset and surise
        time.
        <br />
        For accurate results, Allow location permission in your browser.
      </p>
    </div>
  );
}

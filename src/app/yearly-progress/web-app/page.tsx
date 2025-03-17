import YearlyProgressWidget from "@/components/YearlyProgressWidget";
import { Metadata } from "next";
import YearlyProgressDaylightWidget from "@/components/YearlyProgressDaylightWidget";
import YearlyProgressNightWidget from "@/components/YearlyProgressNightWidget";
import { BackButton } from "@/components/BackButton";
import YearlyProgressInfo from "@/docs/yearly-progress/info.json";

export const metadata: Metadata = {
  metadataBase: new URL("https://a3group.co.in"),
  title: YearlyProgressInfo.name,
  description: YearlyProgressInfo.desc,
  icons: YearlyProgressInfo.images.icon,
};

export default async function YearlyProgressWebApp() {
  return (
    <div className="mx-2 my-8 min-h-[80vh] 2xl:mx-0">
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
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <YearlyProgressWidget type="year" />
        <YearlyProgressWidget type="month" />
        <YearlyProgressWidget type="week" />
        <YearlyProgressWidget type="day" />
        <YearlyProgressDaylightWidget />
        <YearlyProgressNightWidget />
      </div>
      <p className="text-on-surface text-label-medium mt-4 font-normal">
        Daylight and Night Widget needs your location to get sunset and surise
        time.
        <br />
        For accurate results, Allow location permission in your browser.
      </p>
    </div>
  );
}

import YearlyProgressWidget from "@/components/YearlyProgressWidget";
import info from "../../../../info/yearly-progress.json";
import { Metadata } from "next";
import YearlyProgressDaylightWidget from "@/components/YearlyProgressDaylightWidget";
import YearlyProgressNightWidget from "@/components/YearlyProgressNightWidget";


export const metadata: Metadata = {
  metadataBase: new URL("https://a3group.co.in"),
  title: info.name,
  description: info.desc.about,
  icons: "/yearly-progress/favicon/android-chrome-192x192.png",
};



export default async function YearlyProgressWebApp() {
  

  return (
    <div className="2xl:mx-0 mx-2 my-2">
      <div className="my-4">
        <h1 className="font-bold text-2xl ">
          Yearly Progress <span className="text-sm text-blue-800">v0.04</span>
        </h1>
        <p className="ml-1 text-gray-700 font-light">
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
      <p className="text-sm text-gray-600">Daylight and Night Widget needs your location to get sunset and surise time.</p>
    </div>
  );
}

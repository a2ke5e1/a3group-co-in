import YearlyProgressWidget from "@/components/YearlyProgressWidget";
import info from "../../../../info/yearly-progress.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://a3group.co.in"),
  title: info.name,
  description: info.desc.about,
  icons: "/yearly-progress/favicon/android-chrome-192x192.png",
};

export default function YearlyProgressWebApp() {
  return (
    <div className="">
      <div className="flex flex-col flex-grow gap-2 my-4">
        <YearlyProgressWidget type="year" />
        <YearlyProgressWidget type="month" />
        <YearlyProgressWidget type="week" />
        <YearlyProgressWidget type="day" />
      </div>
    </div>
  );
}

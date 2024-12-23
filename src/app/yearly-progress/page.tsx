import type { Metadata, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Article from "@/components/Article";
import info from "../../../info/yearly-progress.json";
import {
  Cover,
  AppInfo,
  ScreenshotGallery,
} from "@/components/app-pages/app-header";
import { BASE_URL } from "@/lib/utils";
import { IAppStats } from "@/models/AppStats";
import { AppStats } from "@/components/app-pages/app-stats";

export const metadata: Metadata = {
  metadataBase: new URL("https://a3group.co.in"),
  title: info.name,
  description: info.desc.about,
  icons: "/yearly-progress/favicon/android-chrome-192x192.png",
};

// Usage in the Home page
const Home: React.FC = async () => {
  const allAppStats = await fetch(`${BASE_URL}/api/v1/statics`).then((res) =>
    res.json()
  );
  const yearlyProgressStats = allAppStats.find(
    (app: IAppStats) => app.appId === "com.a3.yearlyprogess"
  );

  return (
    <div className="flex flex-col gap-4 py-2">
      <Cover
        src="/yearly-progress/images/cover-banner.webp"
        alt={info.name}
        className="bg-[#e8f4f0]"
        dynamic={false}
      />

      <AppInfo
        appIcon="https://play-lh.googleusercontent.com/SxZPrpX_9O2WxFiI067oHMRxsRS0Ozz6clBvao5lrH2SA-lG7vXs8rU_Rf7BHz0CZ0YO=w240-h480-rw"
        appName={info.name}
        appPublisher="A3."
        playStoreLink="https://play.google.com/store/apps/details?id=com.a3.yearlyprogess&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
        playStoreBadge="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
      />

      <AppStats
        downloads={yearlyProgressStats.downloads}
        rating={yearlyProgressStats.rating}
        reviews={yearlyProgressStats.reviews}
      />

      <main className="max-w-xl">
        <Article title="About App">
          <div>
            {`Yearly Progress is a powerful Android app designed to enhance your time management and tracking experience. With beautifully designed widgets, you can monitor the progress of your day, week, month, and year directly from your home screen. The app also includes features to track custom events and visualize daylight and nightlight progress, making it a versatile tool for everyday use.`}
          </div>

          <ScreenshotGallery
            screenshots={[...Array(8).keys()].map((i) => ({
              src: `/yearly-progress/images/ss/${i}.png`,
              alt: `Screenshot ${i + 1}`,
            }))}
          />

          <div>
            <strong>Key Features</strong>
            <ul className="list-disc pl-4 flex flex-col gap-2 my-4">
              <li>
                <strong>All-In-One Widget: </strong>
                {`A sleek widget that combines essential information, including the date, week, month, and year progress, all in one place. Perfect for decluttering your home screen while staying informed.`}
              </li>
              <li>
                <strong>Custom Event Tracking: </strong>
                {`Keep track of your special milestones and personal events with ease. Whether it’s an important deadline or a meaningful celebration, Yearly Progress ensures you never lose sight of what matters most.`}
              </li>
              <li>
                <strong>Daylight and Nightlight Progress: </strong>
                {`Visualize the natural rhythms of your day with widgets that display the progress of daylight and nightlight, providing a unique perspective on time.`}
              </li>
              <li>
                <strong>Adaptive Theming: </strong>
                {`Enjoy beautifully crafted widgets that adapt to your device’s theme, creating a cohesive and modern look for your home screen.`}
              </li>{" "}
            </ul>
          </div>
        </Article>
      </main>
    </div>
  );
};

export default Home;

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

export const metadata: Metadata = {
  metadataBase: new URL("https://a3group.co.in"),
  title: info.name,
  description: info.desc.about,
  icons: "/yearly-progress/favicon/android-chrome-192x192.png",
};

// Usage in the Home page
const Home: React.FC = () => {
  return (
    <>
      <Cover src="/yearly-progress/images/cover.webp" alt={info.name} className="bg-[#e8f4f0]" />

      <AppInfo
        appIcon="https://play-lh.googleusercontent.com/SxZPrpX_9O2WxFiI067oHMRxsRS0Ozz6clBvao5lrH2SA-lG7vXs8rU_Rf7BHz0CZ0YO=w240-h480-rw"
        appName={info.name}
        appPublisher="A3."
        playStoreLink="https://play.google.com/store/apps/details?id=com.a3.yearlyprogess&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
        playStoreBadge="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
      />

      <main className="max-w-xl">
        <Article title="About App">
          <div>{info.desc.about}</div>

          <ScreenshotGallery
            screenshots={[
              {
                src: "/yearly-progress/images/ss/Screenshot_20221002_014215.webp",
                alt: "Yearly Progress Screenshot 1",
              },
              {
                src: "/yearly-progress/images/ss/Screenshot_20221002_014317.webp",
                alt: "Yearly Progress Screenshot 2",
              },
              {
                src: "/yearly-progress/images/ss/Screenshot_20221002_014407.webp",
                alt: "Yearly Progress Screenshot 3",
              },
              {
                src: "/yearly-progress/images/ss/Screenshot_20221002_014414.webp",
                alt: "Yearly Progress Screenshot 4",
              },
              {
                src: "/yearly-progress/images/ss/Screenshot_20221002-014123.webp",
                alt: "Yearly Progress Screenshot 5",
              },
            ]}
          />

          <div>
            <strong>New Features</strong>
            <h2 className="mt-2 font-bold">All In One Widget</h2>
            <p>
              Now, You can use all in one widget which let to see the
              information with having add multiple widget to the homescreen of
              your android device.
            </p>
            <Image
              className="my-2"
              alt="All In One Widget"
              width={400}
              height={260}
              src="/yearly-progress/images/ss/Screenshot_20221002_015212.webp"
            />
            <p>
              You can see a preview of the widget above, It contains all the
              information that one might need such as date, week, month and year
              with their respective progress.
            </p>
          </div>
        </Article>
      </main>
    </>
  );
};

export default Home;

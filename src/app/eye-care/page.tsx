import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import info from "../../../info/eye-care.json";
import Link from "next/link";
import Article from "../../components/Article";
import {
  Cover,
  AppInfo,
  ScreenshotGallery,
} from "@/components/app-pages/app-header";
import { BASE_URL } from "@/lib/utils";
import { IAppStats } from "@/models/AppStats";
import { AppStats } from "@/components/app-pages/app-stats";

export async function generateMetadata() {
  const title: String = "Eye Care";
  const description: String = "Eye Care - Your Vision Health Companion";

  return {
    metadataBase: new URL("https://a3group.co.in"),
    title: title,
    description: description,
    icons: "/eye-care/favicon/favicon.ico",
    twitter: {
      images:
        "https://www.a3group.co.in/eye-care/images/ss/Screenshot_1691238815.png",
    },
  };
}

const EyeCareHome: NextPage = async () => {
  const allAppStats = await fetch(`${BASE_URL}/api/v1/statics`).then((res) =>
    res.json()
  );
  const eyeCareStats = allAppStats.find(
    (app: IAppStats) => app.appId === "com.a3.eyecare"
  );

  return (
    <div className="flex flex-col gap-4 py-2">
      {/* TODO: Added a proper 4.5/1 ratio cover page for Eye Care */}
      <Cover
        src="/eye-care/images/cover.png"
        alt={info.name}
        className="bg-[#b5c9ff]"
      />

      <AppInfo
        appIcon="https://play-lh.googleusercontent.com/MhkvnZGvvVQYwBKwxoeP7MhO_lwO7SIOF0ci5J9QAxoWGkWRBtldT5etyjcHEK3WfU4=w240-h480-rw"
        appName={info.name}
        appPublisher="A3."
        playStoreLink="https://play.google.com/store/apps/details?id=com.a3.eyecare&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
        playStoreBadge="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
      />

      <AppStats
        downloads={eyeCareStats.downloads}
        rating={eyeCareStats.rating}
        reviews={eyeCareStats.reviews}
      />

      <main className={`max-w-xl`}>
        <Article title="What is Eye Care?">
          <p className="max-w-xl">
            Eye Care is an app which is beautifully designed to help you to take
            care of your eyes. It provides you a way to keep records of their
            prescription in the cloud and access them from anywhere.
          </p>

          <p className="max-w-xl">
            <strong>
              Features:
              <br />
            </strong>
            Personalized Eye Report Tables: Create and manage personalized eye
            report tables with ease. Keep track of prescribed eyeglass
            prescriptions. Easily update, modify, or delete data as your eye
            health journey progresses.
            <br />
            <br />
            Secure and Cloud-Synchronized: Your eye health data is stored
            securely in the cloud. Access your eye reports anytime, anywhere,
            from multiple device.
            <br />
            <br />
            Shareable Eye Reports for Better Communication: Enhance
            communication with your eye care specialist by generating shareable
            eye reports as screenshots.
            <br />
            <br />
            User-Friendly and Intuitive Interface: Eye Care is designed to cater
            to users of all levels, from tech-savvy individuals to those new to
            mobile apps. The clean and intuitive layout makes it easy to access
            eye reports, update information, and view your eye health progress
            effortlessly.
            <br />
            <br />
            Suitable for Everyone: Eye Care is ideal for individuals seeking to
            manage personal vision health, parents keeping track of their
            children&apos;s eye check-ups, or anyone interested in proactive eye
            care. Customize the app to suit your specific needs and take charge
            of your vision health with confidence.
          </p>
          <div>
            <ScreenshotGallery
              screenshots={[
                {
                  src: "/eye-care/images/ss/Screenshot_1691238815.png",
                  alt: "Eye Care home screen screenshot",
                },
                {
                  src: "/eye-care/images/ss/Screenshot_1691238836.png",
                  alt: "Eye Care recent screen screenshot",
                },
                {
                  src: "https://play-lh.googleusercontent.com/scjasM7xzNrzFEQSCDKywfESwBgOagc5Xotz35SF1YXPU00gkz6nvpQ2JSxWhHCniJE=w526-h296-rw",
                  alt: "Eye Care home screen screenshot in dark mode",
                },
                {
                  src: "https://play-lh.googleusercontent.com/1wovtsQNjdTYFwqkKPNWyrQ4VWmOBaRgTfvK5iJnJD7v6cOU_S5yGv1-Cl9I1EqZGQ=w526-h296-rw",
                  alt: "Eye Care add reports screen screenshot in dark mode",
                },
              ]}
            />
          </div>
          <div className="max-w-xl">
            <strong>
              Upcoming Features:
              <br />
            </strong>
            <ol>
              <li>
                You will be able to set reminders to remind to drop your eye
                drops, medication, etc.
              </li>
              <li>
                You will be able to set reminders to remind to take breaks from
                your screen.
              </li>
            </ol>
          </div>
          <p className="max-w-xl">
            <strong>Have suggestion?</strong> <br />
            You can send your suggesion through our email at{" "}
            <Link
              href="mailto:support@a3group.co.in"
              className="underline text-primary"
            >
              support@a3group.co.in.
            </Link>
            <br />
            or you can join our telegram community{" "}
            <Link href="https://t.me/phycalc/651">here.</Link>
          </p>
        </Article>
      </main>
    </div>
  );
};

export default EyeCareHome;

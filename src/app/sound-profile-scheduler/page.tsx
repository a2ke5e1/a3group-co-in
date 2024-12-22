import type { Metadata, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Article from "@/components/Article";
import styles from "@styles/sound-profile-scheduler/index.module.scss";
import {
  AppInfo,
  Cover,
  ScreenshotGallery,
} from "@/components/app-pages/app-header";
import { BASE_URL } from "@/lib/utils";
import { IAppStats } from "@/models/AppStats";
import { AppStats } from "@/components/app-pages/app-stats";

export async function generateMetadata() {
  const title: String = "Sound Profile Scheduler";
  const description: String = "";

  return {
    metadataBase: new URL("https://a3group.co.in"),
    title: title,
    description: description,
    icons: "/sound-profile-scheduler/favicon/favicon.ico",
    // twitter: {
    //   images:
    //     "https://www.a3group.co.in/yearly-progress/images/ss/Screenshot_1691238815.png",
    // },
  };
}
const Home: NextPage = async () => {
  const allAppStats = await fetch(`${BASE_URL}/api/v1/statics`).then((res) =>
    res.json()
  );
  const soundProfileSchedularStats = allAppStats.find(
    (app: IAppStats) => app.appId === "com.a3.soundprofiles"
  );

  return (
    <div className="flex flex-col gap-4 py-2">
      <Cover
        src="/sound-profile-scheduler/images/cover.png"
        alt={"Sound Profile Scheduler"}
        dynamic={false}
        className="bg-[#fadbba]"
      />

      <AppInfo
        appIcon="/sound-profile-scheduler/favicon/android-chrome-512x512.png"
        appName={"Sound Profile Scheduler"}
        appPublisher="A3."
        playStoreLink="https://play.google.com/store/apps/details?id=com.a3.soundprofiles"
        playStoreBadge="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
      />

      <AppStats
        downloads={soundProfileSchedularStats.downloads}
        rating={soundProfileSchedularStats.rating}
        reviews={soundProfileSchedularStats.reviews}
      />

      <main className={`max-w-xl`}>
        <Article title={"About App"}>
          <p>Schedule and automate ring, alarm, media volume, etc.</p>
          <p>
            Introducing our versatile audio profile scheduler app, designed to
            give you full control over your device's sound settings with
            precision. Whether you need your phone to be quiet during meetings,
            loud for alarms, or at a moderate volume for media, this app lets
            you automate these changes just like setting an alarm clock.{" "}
          </p>

          <ScreenshotGallery
            screenshots={[
              {
                src: "/sound-profile-scheduler/images/Screenshot_20240819_121800.png",
                alt: "Sound Profile Scheduler Screenshots",
              },
              {
                src: "/sound-profile-scheduler/images/Screenshot_20240819_121813.png",
                alt: "",
              },
              {
                src: "/sound-profile-scheduler/images/Screenshot_20240819_121824.png",
                alt: "",
              },
            ]}
          />
          <p>
            You can schedule your audio profiles by day, week, hour, or even
            minute, tailoring the volume levels for ringtones, alarms, and media
            to fit your lifestyle. Create multiple schedules for different days
            or events, and let the app automatically adjust your sound settings,
            ensuring your device's volume is always just right. Perfect for
            those who need a flexible solution to manage sound in various
            environments without manual adjustments.
          </p>
          <div>
            <strong>
              Features include: <br />
            </strong>
            Customizable schedules for ringtone, alarm, and media volumes.
            Time-based triggers: set profiles by weeks, days, hours, or minutes.
            Easy-to-use interface with options to create, edit, or delete
            schedules. Automatic switching of audio profiles based on your
            predefined rules. Ideal for busy professionals, students, and anyone
            needing seamless sound management. Experience a smarter way to
            manage your device's audio with our profile scheduler app!
          </div>
        </Article>
      </main>
    </div>
  );
};

export default Home;

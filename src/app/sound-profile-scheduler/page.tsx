import type { Metadata, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Article from "@/components/Article";
import styles from "@styles/sound-profile-scheduler/index.module.scss";

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
const Home: NextPage = () => {
  return (
    <>
      <section className={styles["head-container"]}>
        <img
          src={"/sound-profile-scheduler/favicon/android-chrome-512x512.png"}
          className={styles.logo}
        />
        <h1 className={styles["title"]}>Sound Profile Scheduler</h1>
        <a>A3.</a>
        <div className={"flex flex-col items-center mt-6"}>
          <Link href="https://play.google.com/store/apps/details?id=com.a3.soundprofiles">
            <Image
              alt="Get it on Google Play"
              width={160}
              height={62}
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
            />
          </Link>
          <a className={styles["legal-dist"]}>
            Google Play and the Google Play logo are trademarks of Google LLC.
          </a>
        </div>
        <div className="my-8">
          <Link
            href={"#about"}
            className="font-extralight text-sm"
          >
            Learn More
          </Link>
        </div>
      </section>
      <main
        className={`${styles["main"]} mx-4 2xl:mx-0 my-8 flex flex-col gap-2`}
        id="about"
      >
        <Article title={"About The App"}>
          <p className="my-1 max-w-xl">
            Schedule and automate ring, alarm, media volume, etc.
          </p>
          <p className="my-2 max-w-xl">
            Introducing our versatile audio profile scheduler app, designed to
            give you full control over your device's sound settings with
            precision. Whether you need your phone to be quiet during meetings,
            loud for alarms, or at a moderate volume for media, this app lets
            you automate these changes just like setting an alarm clock.{" "}
          </p>
        </Article>
        <div className={styles.ss_container}>
          <Image
            src="/sound-profile-scheduler/images/Screenshot_20240819_121800.png"
            width={120}
            quality={100}
            height={260}
            alt="Yearly Progress Screenshot 1"
          />
          <Image
            src="/sound-profile-scheduler/images/Screenshot_20240819_121813.png"
            width={120}
            quality={100}
            height={260}
            alt="Yearly Progress Screenshot 2"
          />
          <Image
            src="/sound-profile-scheduler/images/Screenshot_20240819_121824.png"
            width={120}
            quality={100}
            height={260}
            alt="Yearly Progress Screenshot 3"
          />
        </div>
        <Article title={""}>
          <p className="my-2 max-w-xl">
            You can schedule your audio profiles by day, week, hour, or even
            minute, tailoring the volume levels for ringtones, alarms, and media
            to fit your lifestyle. Create multiple schedules for different days
            or events, and let the app automatically adjust your sound settings,
            ensuring your device's volume is always just right. Perfect for
            those who need a flexible solution to manage sound in various
            environments without manual adjustments.
          </p>
          <h2 className="mt-2 font-bold">Features include</h2>
          <p className="my-2 max-w-xl">
            Customizable schedules for ringtone, alarm, and media volumes.
            Time-based triggers: set profiles by weeks, days, hours, or minutes.
            Easy-to-use interface with options to create, edit, or delete
            schedules. Automatic switching of audio profiles based on your
            predefined rules. Ideal for busy professionals, students, and anyone
            needing seamless sound management. Experience a smarter way to
            manage your device's audio with our profile scheduler app!
          </p>
        </Article>
      </main>
    </>
  );
};

export default Home;

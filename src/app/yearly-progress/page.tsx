import type { Metadata, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Article from "@/components/Article";
import styles from "@styles/yearly-progress/index.module.scss";
import info from "../../../info/yearly-progress.json";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://a3group.co.in"),
  title: info.name,
  description: info.desc.about,
  icons: "/yearly-progress/favicon/android-chrome-192x192.png",
};

const Home: NextPage = () => {
  return (
    <>
      <section className={styles["head-container"]}>
        <img
          src={
            "https://play-lh.googleusercontent.com/SxZPrpX_9O2WxFiI067oHMRxsRS0Ozz6clBvao5lrH2SA-lG7vXs8rU_Rf7BHz0CZ0YO=w240-h480-rw"
          }
          className={styles.logo}
        />
        <h1 className={styles["title"]}>{info.name}</h1>
        <a>A3.</a>
        <div className={"flex flex-col items-center mt-6"}>
          <Link href="https://play.google.com/store/apps/details?id=com.a3.yearlyprogess&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
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
          <Link href={"#about-yearly-progress"} className="font-extralight text-sm">Learn More</Link>
        </div>
      </section>
      <main className={`${styles["main"]} mx-4 2xl:mx-0 my-8 flex flex-col gap-2`} id="about-yearly-progress">
        <Article title={"About The App"}>
          <p className="my-1 max-w-xl">{info.desc.about}</p>
        </Article>
        <section>
          <h1 className="font-bold uppercase text-xs">Screenshot</h1>
          <div className={styles.ss_container}>
            <Image
              src="/yearly-progress/images/ss/Screenshot_20221002_014215.webp"
              width={120}
              quality={100}
              height={260}
              alt="Yearly Progress Screenshot 1"
            />
            <Image
              src="/yearly-progress/images/ss/Screenshot_20221002_014317.webp"
              width={120}
              quality={100}
              height={260}
              alt="Yearly Progress Screenshot 2"
            />
            <Image
              src="/yearly-progress/images/ss/Screenshot_20221002_014407.webp"
              width={120}
              quality={100}
              height={260}
              alt="Yearly Progress Screenshot 3"
            />
            <Image
              src="/yearly-progress/images/ss/Screenshot_20221002_014414.webp"
              width={120}
              quality={100}
              height={260}
              alt="Yearly Progress Screenshot 4"
            />
            <Image
              src="/yearly-progress/images/ss/Screenshot_20221002-014123.webp"
              width={120}
              quality={100}
              height={260}
              alt="Yearly Progress Screenshot 5"
            />
          </div>
        </section>
        <Article title={"New Features"}>
          <h2 className="mt-2 font-bold">All In One Widget</h2>
          <p className="max-w-xl">
            Now, You can use all in one widget which let to see the information
            with having add multiple widget to the homescreen of your android
            device.
          </p>
          <img
            className={styles["widget-img"]}
            src="/yearly-progress/images/ss/Screenshot_20221002_015212.webp"
          />
          <p className="max-w-xl">
            You can see a preview of the widget above, It contains all the
            information that one might need such as date, week, month and year
            with their respective progress.
          </p>
        </Article>
      </main>
    </>
  );
};

export default Home;

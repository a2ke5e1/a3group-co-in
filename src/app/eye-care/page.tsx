import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import info from "../../../info/eye-care.json";
import Footer from "../../components/Footer";
import styles from "../../../styles/eye-care/index.module.scss";
import Link from "next/link";
import Article from "../../components/Article";

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

const EyeCareHome: NextPage = () => {
  return (
    <>
      <section className={styles["head-container"]}>
        <Image
          src={
            "https://play-lh.googleusercontent.com/MhkvnZGvvVQYwBKwxoeP7MhO_lwO7SIOF0ci5J9QAxoWGkWRBtldT5etyjcHEK3WfU4=w240-h480-rw"
          }
          alt=""
          width={60}
          height={60}
          className={styles.logo}
        />
        <h1 className={styles["title"]}>{info.name}</h1>
        <a>A3.</a>
        <div className={"flex flex-col items-center mt-6"}>
          <Link
            className={""}
            href="https://play.google.com/store/apps/details?id=com.a3.eyecare&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
          >
            <Image
              className={""}
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
          <Link href={"#what-is-eye-care"} className="font-extralight text-sm">
            Learn More
          </Link>
        </div>
      </section>
      <main
        className={`${styles["main"]} mx-4 2xl:mx-0 my-8 flex flex-col gap-8`}
        id="what-is-eye-care"
      >
        <Article title="What is Eye Care?">
          <p className="max-w-xl">
            Eye Care is an app which is beautifully designed to help you to take
            care of your eyes. It provides you a way to keep records of their
            prescription in the cloud and access them from anywhere.
          </p>
          <h2 className="font-bold mt-2">Features: </h2>
          <div className="flex flex-col gap-2">
            <p className="max-w-xl">
              Personalized Eye Report Tables: Create and manage personalized eye
              report tables with ease. Keep track of prescribed eyeglass
              prescriptions. Easily update, modify, or delete data as your eye
              health journey progresses.
            </p>

            <p className="max-w-xl">
              Secure and Cloud-Synchronized: Your eye health data is stored
              securely in the cloud. Access your eye reports anytime, anywhere,
              from multiple device.
            </p>

            <p className="max-w-xl">
              Shareable Eye Reports for Better Communication: Enhance
              communication with your eye care specialist by generating
              shareable eye reports as screenshots.
            </p>

            <p className="max-w-xl">
              User-Friendly and Intuitive Interface: Eye Care is designed to
              cater to users of all levels, from tech-savvy individuals to those
              new to mobile apps. The clean and intuitive layout makes it easy
              to access eye reports, update information, and view your eye
              health progress effortlessly.
            </p>

            <p className="max-w-xl">
              Suitable for Everyone: Eye Care is ideal for individuals seeking
              to manage personal vision health, parents keeping track of their
              children&apos;s eye check-ups, or anyone interested in proactive
              eye care. Customize the app to suit your specific needs and take
              charge of your vision health with confidence.
            </p>
          </div>
        </Article>
        <Article title="Screenshots">
          <div className={styles.ss_container}>
            <Image
              src="/eye-care/images/ss/Screenshot_1691238815.png"
              width={120}
              height={260}
              quality={100}
              alt="Eye Care home screen screenshot"
            />
            <Image
              src="/eye-care/images/ss/Screenshot_1691238836.png"
              width={120}
              height={260}
              quality={100}
              alt="Eye Care recent screen screenshot"
            />
            <Image
              src="https://play-lh.googleusercontent.com/scjasM7xzNrzFEQSCDKywfESwBgOagc5Xotz35SF1YXPU00gkz6nvpQ2JSxWhHCniJE=w526-h296-rw"
              width={120}
              height={260}
              quality={100}
              alt="Eye Care home screen screenshot in dark mode"
            />
            <Image
              src="https://play-lh.googleusercontent.com/1wovtsQNjdTYFwqkKPNWyrQ4VWmOBaRgTfvK5iJnJD7v6cOU_S5yGv1-Cl9I1EqZGQ=w526-h296-rw"
              width={120}
              height={260}
              quality={100}
              alt="Eye Care add reports screen screenshot in dark mode"
            />
          </div>
        </Article>
        <Article title="Upcoming Features: ">
          <ol>
            <li>
              <p className="max-w-xl">
                You will be able to set reminders to remind to drop your eye
                drops, medication, etc.
              </p>
            </li>
            <li>
              <p className="max-w-xl">
                You will be able to set reminders to remind to take breaks from
                your screen.
              </p>
            </li>
          </ol>
        </Article>
        <Article title={"Have suggestion? "}>
          <p className="max-w-xl">
            You can send your suggesion through our email at{" "}
            <Link href="mailto:support@a3group.co.in" className="underline">
              support@a3group.co.in.
            </Link>
            <br />
            or you can join our telegram community{" "}
            <Link href="https://t.me/phycalc/651">here.</Link>
          </p>
        </Article>
      </main>
    </>
  );
};

export default EyeCareHome;

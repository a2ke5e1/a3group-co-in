import { NextPage } from "next";
import styles from "../../../../styles/yearly-progress/Privacy.module.scss";
import Image from "next/image";
import TermsOfService from "@/docs/sound-profile-scheduler/tos.mdx";
import { LegalDocument } from "@/components/LegalDocument";
import { BackButton } from "@/components/BackButton";

export async function generateMetadata() {
  const title: String = "Sound Profile Scheduler - Terms of Service";
  const description: String =
    "";

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

const TOS: NextPage = () => {
  return (
    <div>
      <main className={"2xl:mx-0 mx-2 my-8"}>
        <BackButton />
        <div className="my-2 w-fit mx-auto justify-center flex flex-col items-center">
          <Image
            src={
              "/sound-profile-scheduler/favicon/android-chrome-512x512.png"
            }
            width={50}
            height={50}
            alt="Sound Profile Scheduler Logo"
            className={styles.shadow + " rounded-md"}
          />
          <h1 className="text-lg font-bold text-center mt-2">
            Sound Profile Scheduler
          </h1>
        </div>

        <LegalDocument title="Terms of Service">
          <TermsOfService />
        </LegalDocument>
      </main>
    </div>
  );
};

export default TOS;

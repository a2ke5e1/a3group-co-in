import {NextPage} from "next";
import styles from "@styles/yearly-progress/Privacy.module.scss"
import Head from "next/head";
import info from '../../../../info/indian-university.json'
import PrivacyPolicy from "@/docs/indian-university/privacy-policy.mdx";
import {LegalDocument} from "@/components/LegalDocument";
import {BackButton} from "@/components/BackButton";
import Image from "next/image";


export async function generateMetadata() {
  const title: String = "Indian University - Privacy Policy";
  const description: String = "Navigate your dream university and share the details";

  return {
    metadataBase: new URL("https://a3group.co.in"),
    title: title,
    description: description,
    icons: "/indian-university/favicon/favicon.ico",
    twitter: {
      images:
        "/indian-university/ss/cover.png",
    },
  };
}


const EyeCarePrivacyPolicy: NextPage = () => {
  return (
    <div>
      <main className={"2xl:mx-0 mx-2 my-8"}>
        <BackButton/>
        <div className="my-2 w-fit mx-auto justify-center flex flex-col items-center">
          <Image
            src={"/indian-university/favicon/icon-512-maskable.png"}
            width={50}
            height={50}
            alt="Eye Care Logo"
            className={styles.shadow + " rounded-md"}
          />
          <h1 className="text-lg font-bold text-center mt-2">Indian University</h1>
        </div>

        <LegalDocument title="Privacy Policy">
          <PrivacyPolicy/>
        </LegalDocument>
      </main>
    </div>

  )
}

export default EyeCarePrivacyPolicy; 
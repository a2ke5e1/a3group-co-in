import { NextPage } from "next";
import styles from "../../../../styles/yearly-progress/Privacy.module.scss";
import Image from "next/image";
import TermsOfService from "@/docs/yearly-progress/tos.mdx";
import { LegalDocument } from "@/components/LegalDocument";
import { ArrowBack } from "@mui/icons-material";
import Link from "next/link";

export async function generateMetadata() {
  const title: String = "Yearly Progress - Terms and Service";
  const description: String =
    "Yearly Progress is an android app which provides beautiful widgets, which shows the progress of day, week, month and year.";

  return {
    metadataBase: new URL("https://a3group.co.in"),
    title: title,
    description: description,
    icons: "/yearly-progress/favicon/favicon.ico",
    twitter: {
      images:
        "https://www.a3group.co.in/yearly-progress/images/ss/Screenshot_1691238815.png",
    },
  };
}

const TOS: NextPage = () => {
  return (
    <div>
      <main className={"2xl:mx-0 mx-2 my-8"}>
        <Link
          href="/yearly-progress/"
          aria-description="Go Back"
          className="hover:bg-blue-50 hover:rounded-full"
        >
          <ArrowBack />
        </Link>
        <div className="my-2 w-fit mx-auto justify-center flex flex-col items-center">
          <Image
            src={
              "https://play-lh.googleusercontent.com/SxZPrpX_9O2WxFiI067oHMRxsRS0Ozz6clBvao5lrH2SA-lG7vXs8rU_Rf7BHz0CZ0YO=w240-h480-rw"
            }
            width={50}
            height={50}
            alt="Yearly Progress Logo"
            className={styles.shadow + " rounded-md"}
          />
          <h1 className="text-lg font-bold text-center mt-2">
            Yearly Progress
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

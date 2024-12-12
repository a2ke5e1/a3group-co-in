import { NextPage } from "next";
import PrivacyPolicy from "@/docs/eye-care/privacy-policy.mdx";
import Image from "next/image";
import Link from "next/link";
import { LegalDocument } from "@/components/LegalDocument";
import { BackButton } from "@/components/BackButton";

export async function generateMetadata() {
  const title: String = "Eye Care - Privacy Policy";
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

const EyeCarePrivacyPolicy: NextPage = () => {
  return (
    <div>
      <main className={"2xl:mx-0 mx-2 my-8"}>
        <BackButton />
        <div className="my-2 w-fit mx-auto justify-center flex flex-col items-center">
          <Image
            src={"/eye-care/favicon/icon-512-maskable.png"}
            width={50}
            height={50}
            alt="Eye Care Logo"
            className={" rounded-md"}
          />
          <h1 className="text-lg font-bold text-center mt-2">Eye Care</h1>
        </div>

        <LegalDocument title="Privacy Policy">
          <PrivacyPolicy />
        </LegalDocument>
      </main>
    </div>
  );
};

export default EyeCarePrivacyPolicy;

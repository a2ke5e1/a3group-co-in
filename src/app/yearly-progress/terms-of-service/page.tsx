import { NextPage } from "next";
import Image from "next/image";
import TermsOfService from "@/docs/yearly-progress/tos.mdx";
import { LegalDocument } from "@/components/LegalDocument";
import { BackButton } from "@/components/BackButton";

import { Cover } from "@/components/app-pages/app-header";
import { DocsAppHeader } from "@/components/v3/common/app-header/docs-app-header";

import YearProgressInfo from "@/docs/yearly-progress/info.json";

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
    <>
      <section className="flex flex-col gap-4">
        <Cover
          src={YearProgressInfo.images.banner}
          alt={YearProgressInfo.name}
          className="bg-[#e8f4f0]"
        />
        <DocsAppHeader
          title="Terms and Conditions"
          appname={YearProgressInfo.name}
          icon={YearProgressInfo.images.icon}
          lastUpdate={new Date(2025, 3, 1)}
        />
      </section>
      <LegalDocument>
        <TermsOfService />
      </LegalDocument>
    </>
  );
};

export default TOS;

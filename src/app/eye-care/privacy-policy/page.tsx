import { NextPage } from "next";
import PrivacyPolicy from "@/docs/eye-care/privacy-policy.mdx";
import { LegalDocument } from "@/components/LegalDocument";

import EyeCareInfo from "@/docs/eye-care/info.json";
import { DocsAppHeader } from "@/components/v3/common/app-header/docs-app-header";
import { Cover } from "@/components/app-pages/app-header";

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
    <>
      <section className="flex flex-col gap-4">
        <Cover
          src={EyeCareInfo.images.cover}
          alt={EyeCareInfo.name}
          className="bg-[#b5c9ff]"
          dynamic={true}
        />
        <DocsAppHeader
          title="Privacy Policy"
          appname={EyeCareInfo.name}
          icon={EyeCareInfo.images.icon}
          lastUpdate={new Date(2024, 0, 1)}
        />
      </section>
      <LegalDocument>
        <PrivacyPolicy />
      </LegalDocument>
    </>
  );
};

export default EyeCarePrivacyPolicy;

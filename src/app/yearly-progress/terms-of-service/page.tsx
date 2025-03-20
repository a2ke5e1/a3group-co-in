import { Metadata, NextPage } from "next";
import TermsOfService from "@/docs/yearly-progress/tos.mdx";
import { LegalDocument } from "@/components/LegalDocument";

import { Cover } from "@/components/app-pages/app-header";
import { DocsAppHeader } from "@/components/v3/common/app-header/docs-app-header";

import YearProgressInfo from "@/docs/yearly-progress/info.json";

export const metadata: Metadata = {
  metadataBase: new URL("https://a3group.co.in"),
  title: `${YearProgressInfo.name} - Terms and Conditions`,
  description: YearProgressInfo.desc,
  icons: YearProgressInfo.images.icon,
};

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

import { Metadata, NextPage } from "next";
import PrivacyPolicy from "@/docs/yearly-progress/privacy-policy.mdx";
import { LegalDocument } from "@/components/LegalDocument";
import { DocsAppHeader } from "@/components/v3/common/app-header/docs-app-header";
import YearProgressInfo from "@/docs/yearly-progress/info.json";
import { Cover } from "@/components/app-pages/app-header";

export const metadata: Metadata = {
  metadataBase: new URL("https://a3group.co.in"),
  title: `${YearProgressInfo.name} - Privacy Policy`,
  description: YearProgressInfo.desc,
  icons: YearProgressInfo.images.icon,
};

const Privacy_policy: NextPage = () => {
  return (
    <>
      <section className="flex flex-col gap-4">
        <Cover
          src={YearProgressInfo.images.banner}
          alt={YearProgressInfo.name}
          className="bg-[#e8f4f0]"
        />
        <DocsAppHeader
          title="Privacy Policy"
          appname={YearProgressInfo.name}
          icon={YearProgressInfo.images.icon}
          lastUpdate={new Date(2024, 0, 1)}
        />
      </section>
      <LegalDocument>
        <PrivacyPolicy />
      </LegalDocument>
    </>
  );
};

export default Privacy_policy;

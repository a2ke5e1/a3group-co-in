import { Metadata, NextPage } from "next";
import TermsOfService from "@/docs/terms-of-service.mdx";
import { LegalDocument } from "@/components/LegalDocument";

import { Cover } from "@/components/app-pages/app-header";
import { DocsAppHeader } from "@/components/v3/common/app-header/docs-app-header";
import Footer from "@/components/v3/common/footer/footer";

export const metadata: Metadata = {
  title: "A3 Group",
  description: "A3 Group is a group of friends trying to make some apps.",
  icons: "/favicon.ico",
};

const TOS: NextPage = () => {
  return (
    <>
      <section className="flex flex-col gap-4">
        <DocsAppHeader
          title="Terms of Service"
          appname={""}
          icon={"/images/a3_logo.png"}
          lastUpdate={new Date(2025, 2, 21)}
        />
      </section>
      <LegalDocument>
        <TermsOfService />
      </LegalDocument>
    </>
  );
};

export default TOS;

import { Metadata, NextPage } from "next";
import PrivacyPolicy from "@/docs/privacy-policy.mdx";
import { LegalDocument } from "@/components/LegalDocument";

import { Cover } from "@/components/app-pages/app-header";
import { DocsAppHeader } from "@/components/v3/common/app-header/docs-app-header";
import Footer from "@/components/v3/common/footer/footer";

export const metadata: Metadata = {
  title: "A3 Group - Privacy Policy",
  description: "A3 Group is a group of friends trying to make some apps.",
  icons: "/favicon.ico",
};

const PrivacyPolicyPage: NextPage = () => {
  return (
    <>
      <main className="max-w-screen-desktop bg-surface desktop:px-0 mx-auto mt-2 mb-12 flex flex-col gap-[4.5rem] px-2">
        <section className="flex flex-col gap-4">
          <DocsAppHeader
            title="Privacy Policy"
            appname={""}
            icon={"/images/a3_logo.png"}
            lastUpdate={new Date(2025, 2, 21)}
          />
        </section>
        <LegalDocument>
          <PrivacyPolicy />
        </LegalDocument>
      </main>
      <Footer
        termsOfService="/terms-of-service"
        privacyPolicy="/privacy-policy"
      />
    </>
  );
};

export default PrivacyPolicyPage;

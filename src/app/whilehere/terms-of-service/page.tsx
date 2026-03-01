import { Metadata, NextPage } from "next";
import Footer from "@/components/v3/common/footer/footer";
import { Cover } from "@/components/app-pages/app-header";
import { DocsAppHeader } from "@/components/v3/common/app-header/docs-app-header";
import { LegalDocument } from "@/components/LegalDocument";
import TermsOfService from "@/docs/whilehere-tos.mdx";

export const metadata: Metadata = {
  metadataBase: new URL("https://a3group.co.in"),
  title: "WhileHere Terms of Service",
  description: "Terms of Service for WhileHere.",
  icons: "/while-here/while-here-icon.png",
};

const WhileHereTermsOfServicePage: NextPage = () => {
  return (
    <>
      <div className="max-w-screen-desktop bg-surface desktop:px-0 mx-auto my-12 flex flex-col gap-[4.5rem] px-2">
        <section className="flex flex-col gap-4">
          <Cover
            src="/while-here/while-here-img.png"
            alt="WhileHere app preview"
            className="bg-[#e8f4f0]"
          />
          <DocsAppHeader
            title="Terms of Service"
            appname="WhileHere"
            icon="/while-here/while-here-icon.png"
            lastUpdate={new Date(2026, 2, 1)}
          />
        </section>
        <LegalDocument>
          <TermsOfService />
        </LegalDocument>
      </div>
      <Footer
        termsOfService="/whilehere/terms-of-service"
        privacyPolicy="/whilehere/privacy-policy"
      />
    </>
  );
};

export default WhileHereTermsOfServicePage;

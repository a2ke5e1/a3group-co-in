import type { Metadata } from "next";
import { Cover } from "@/components/app-pages/app-header";
import { AppHeader } from "@/components/v3/common/app-header/app-header";
import { Testimonials } from "@/components/v3/common/testimonials/testimonials";

import YearProgressInfo from "@/docs/yearly-progress/info.json";
import { Screenshots } from "@/components/v3/common/screenshots-container/screenshots-holder";
import { Features } from "@/components/v3/common/features/features";
import { Accordion } from "@/components/v3/common/accordion/accordion";
import { cn } from "@/lib/utils";
import { FAQList } from "@/components/v3/common/faq-list/faq-list";

export const metadata: Metadata = {
  metadataBase: new URL("https://a3group.co.in"),
  title: YearProgressInfo.name,
  description: YearProgressInfo.desc,
  icons: YearProgressInfo.images.icon,
};

// Usage in the Home page
const Home: React.FC = async () => {
  return (
    <>
      <section className="flex flex-col gap-4">
        <Cover
          src={YearProgressInfo.images.banner}
          alt={YearProgressInfo.name}
          className="bg-[#e8f4f0]"
        />
        <AppHeader
          name={YearProgressInfo.name}
          description={YearProgressInfo.desc}
          icon={YearProgressInfo.images.icon}
          stats={YearProgressInfo.stats}
          links={{
            download: YearProgressInfo.links.download,
            terminalApp: YearProgressInfo.links.terminalApp,
            sourceCode: YearProgressInfo.links.sourceCode,
            webApp: YearProgressInfo.links.webApp,
          }}
        />
        <Features features={YearProgressInfo.features} />
      </section>

      <Screenshots screenshots={YearProgressInfo.images.screenshots} />

      <Testimonials testimonials={YearProgressInfo.reviews} />

      <section className="flex flex-col gap-4">
        <h1 className="text-title-large text-on-surface">FAQs</h1>
        <FAQList items={YearProgressInfo.faqs} />
      </section>
    </>
  );
};

export default Home;

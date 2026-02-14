import type { Metadata } from "next";
import { Cover } from "@/components/app-pages/app-header";
import { AppHeader } from "@/components/v3/common/app-header/app-header";
import { Testimonials } from "@/components/v3/common/testimonials/testimonials";

import YearProgressInfo from "@/docs/yearly-progress/info.json";
import { Screenshots } from "@/components/v3/common/screenshots-container/screenshots-holder";
import { Features } from "@/components/v3/common/features/features";
import { Accordion } from "@/components/v3/common/accordion/accordion";
import { cn } from "@/lib/utils";

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
        <div className="flex flex-col gap-0.5">
          {YearProgressInfo.faqs.map((faq, index, arr) => {
            const isFirst = index === 0;
            const isLast = index === arr.length - 1;

            const radiusClass =
              arr.length > 1
                ? isFirst
                  ? "rounded-t-[12px]! rounded-b-[4px]!"
                  : isLast
                    ? "rounded-b-[12px]! rounded-t-[4px]!"
                    : "rounded-[4px]!"
                : "";

            return (
              <Accordion
                key={index}
                question={faq.question}
                answer={faq.answer}
                className={radiusClass}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Home;

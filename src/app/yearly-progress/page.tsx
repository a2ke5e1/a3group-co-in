import type { Metadata } from "next";
import { Cover } from "@/components/app-pages/app-header";
import { AppHeader } from "@/components/v3/common/app-header/app-header";
import { Testimonials } from "@/components/v3/common/testimonials/testimonials";

import YearProgressInfo from "@/docs/yearly-progress/info.json";
import { Screenshots } from "@/components/v3/common/screenshots-container/screenshots-holder";
import { Features } from "@/components/v3/common/features/features";

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
          src="/yearly-progress/images/cover-banner.webp"
          alt={YearProgressInfo.name}
          className="bg-[#e8f4f0]"
          dynamic={false}
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
    </>
  );
};

export default Home;

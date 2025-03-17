import type { NextPage } from "next";
import { Cover } from "@/components/app-pages/app-header";

import EyeCareInfo from "@/docs/eye-care/info.json";
import { Screenshots } from "@/components/v3/common/screenshots-container/screenshots-holder";
import { Features } from "@/components/v3/common/features/features";
import { Accordion } from "@/components/v3/common/accordion/accordion";
import { AppHeader } from "@/components/v3/common/app-header/app-header";

export async function generateMetadata() {
  return {
    metadataBase: new URL("https://a3group.co.in"),
    title: EyeCareInfo.name,
    description: EyeCareInfo.desc,
    icons: EyeCareInfo.images.icon,
  };
}

const EyeCareHome: NextPage = async () => {
  return (
    <>
      <section className="flex flex-col gap-4">
        <Cover
          src={EyeCareInfo.images.cover}
          alt={EyeCareInfo.name}
          className="bg-[#b5c9ff]"
          dynamic={true}
        />
        <AppHeader
          name={EyeCareInfo.name}
          description={EyeCareInfo.desc}
          icon={EyeCareInfo.images.icon}
          stats={EyeCareInfo.stats}
          links={{
            download: EyeCareInfo.links.download,
          }}
        />
        <Features features={EyeCareInfo.features} />
      </section>

      <Screenshots screenshots={EyeCareInfo.images.screenshots} />

      <section className="flex flex-col gap-4">
        <h1 className="text-title-large text-on-surface">FAQs</h1>
        <div className="flex flex-col gap-2">
          {EyeCareInfo.faqs.map((faq, index) => (
            <Accordion
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default EyeCareHome;

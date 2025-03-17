import type { NextPage } from "next";
import { Cover } from "@/components/app-pages/app-header";

import SoundProfilesInfo from "@/docs/sound-profile-scheduler/info.json";
import { Screenshots } from "@/components/v3/common/screenshots-container/screenshots-holder";
import { Features } from "@/components/v3/common/features/features";
import { Accordion } from "@/components/v3/common/accordion/accordion";
import { AppHeader } from "@/components/v3/common/app-header/app-header";

export async function generateMetadata() {
  return {
    metadataBase: new URL("https://a3group.co.in"),
    title: SoundProfilesInfo.name,
    description: SoundProfilesInfo.desc,
    icons: SoundProfilesInfo.images.icon,
  };
}
const Home: NextPage = async () => {
  return (
    <>
      <section className="flex flex-col gap-4">
        <Cover
          src={SoundProfilesInfo.images.banner}
          alt={SoundProfilesInfo.name}
          className="bg-[#fadbba]"
        />
        <AppHeader
          name={SoundProfilesInfo.name}
          description={SoundProfilesInfo.desc}
          icon={SoundProfilesInfo.images.icon}
          stats={SoundProfilesInfo.stats}
          links={{
            download: SoundProfilesInfo.links.download,
          }}
        />
        <Features features={SoundProfilesInfo.features} />
      </section>

      <Screenshots screenshots={SoundProfilesInfo.images.screenshots} />

      <p>{SoundProfilesInfo.features_extra}</p>

      <section className="flex flex-col gap-4">
        <h1 className="text-title-large text-on-surface">FAQs</h1>
        <div className="flex flex-col gap-2">
          {SoundProfilesInfo.faqs.map((faq, index) => (
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

export default Home;

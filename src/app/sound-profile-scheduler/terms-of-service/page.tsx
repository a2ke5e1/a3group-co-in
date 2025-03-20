import { NextPage } from "next";
import Image from "next/image";
import TermsOfService from "@/docs/sound-profile-scheduler/tos.mdx";
import { LegalDocument } from "@/components/LegalDocument";
import { DocsAppHeader } from "@/components/v3/common/app-header/docs-app-header";
import SoundProfilesInfo from "@/docs/sound-profile-scheduler/info.json";
import { Cover } from "@/components/app-pages/app-header";

export async function generateMetadata() {
  const title: String = "Sound Profile Scheduler - Terms of Service";

  return {
    metadataBase: new URL("https://a3group.co.in"),
    title: title,
    description: SoundProfilesInfo.desc,
    icons: SoundProfilesInfo.images.icon,
  };
}

const TOS: NextPage = () => {
  return (
    <>
      <section className="flex flex-col gap-4">
        <Cover
          src={SoundProfilesInfo.images.banner}
          alt={SoundProfilesInfo.name}
          className="bg-[#fadbba]"
        />
        <DocsAppHeader
          title="Terms and Conditions"
          appname={SoundProfilesInfo.name}
          icon={SoundProfilesInfo.images.icon}
          lastUpdate={new Date(2024, 7, 19)}
        />
      </section>

      <LegalDocument>
        <TermsOfService />
      </LegalDocument>
    </>
  );
};

export default TOS;

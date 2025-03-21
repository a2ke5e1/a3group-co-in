import { NextPage } from "next";
import PrivacyPolicy from "@/docs/sound-profile-scheduler/privacy-policy.mdx";
import { LegalDocument } from "@/components/LegalDocument";
import { DocsAppHeader } from "@/components/v3/common/app-header/docs-app-header";
import SoundProfilesInfo from "@/docs/sound-profile-scheduler/info.json";
import { Cover } from "@/components/app-pages/app-header";

export async function generateMetadata() {
  const title: String = "Sound Profile Scheduler - Privacy Policy";

  return {
    metadataBase: new URL("https://a3group.co.in"),
    title: title,
    description: SoundProfilesInfo.desc,
    icons: SoundProfilesInfo.images.icon,
  };
}

const Privacy_policy: NextPage = () => {
  return (
    <>
      <section className="flex flex-col gap-4">
        <Cover
          src={SoundProfilesInfo.images.banner}
          alt={SoundProfilesInfo.name}
          className="bg-[#fadbba]"
        />
        <DocsAppHeader
          title="Privacy Policy"
          appname={SoundProfilesInfo.name}
          icon={SoundProfilesInfo.images.icon}
          lastUpdate={new Date(2024, 7, 19)}
        />
      </section>

      <LegalDocument>
        <PrivacyPolicy />
      </LegalDocument>
    </>
  );
};

export default Privacy_policy;

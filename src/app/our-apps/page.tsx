import Footer from "@/components/v3/common/footer/footer";
import FeaturedVideo from "@/components/v3/home/featured-video";
import { Metadata } from "next";
import { AppHeader } from "@/components/v3/common/app-header/app-header";
import { Testimonials } from "@/components/v3/common/testimonials/testimonials";
import { AppCard } from "@/components/v3/common/app-card/app-card";

import YearProgressInfo from "@/docs/yearly-progress/info.json";
import EyeCareInfo from "@/docs/eye-care/info.json";
import SoundProfileInfo from "@/docs/sound-profile-scheduler/info.json";
import { ElevatedButton, FilledButton } from "@/components/button/button";
import { Icon } from "@/components/icon/icon";

export const metadata: Metadata = {
  title: "Our Apps | A3 Group",
  icons: "/favicon.ico",
};

export default function Home() {
  return (
    <>
      <main className="max-w-screen-desktop bg-surface desktop:px-0 mx-auto mt-2 mb-12 flex flex-col gap-[4.5rem] px-2">
        <div className="flex flex-col items-start justify-start gap-2 self-stretch">
          <div className="text-on-surface text-display-large">Our apps</div>
          <div className="text-on-surface-variant text-body-large">
            We craft apps designed to make your life easier and more seamless.
          </div>
        </div>
        <AppCard
          name={YearProgressInfo.name}
          description={YearProgressInfo.desc}
          coverImage={YearProgressInfo.images.cover}
          links={{
            download: YearProgressInfo.links.download,
            learnMore: YearProgressInfo.links.learnMore,
          }}
        />
        <AppCard
          name={EyeCareInfo.name}
          description={EyeCareInfo.desc}
          coverImage={EyeCareInfo.images.cover}
          links={{
            download: EyeCareInfo.links.download,
            learnMore: EyeCareInfo.links.learnMore,
          }}
          reverseImage={true}
        />
        <AppCard
          name={SoundProfileInfo.name}
          description={SoundProfileInfo.desc}
          coverImage={SoundProfileInfo.images.cover}
          links={{
            download: SoundProfileInfo.links.download,
            learnMore: SoundProfileInfo.links.learnMore,
          }}
        />
        <div className="bg-secondary-container inline-flex h-[363px] flex-col items-center justify-center gap-6 overflow-hidden rounded-2xl px-8">
          <div className="flex flex-col items-center justify-start gap-1">
            <div className="text-on-secondary-container text-display-large justify-center text-center">
              Have suggestions?
            </div>
            <div className="text-Schemes-On-Secondary-Container text-body-large justify-center text-center">
              If you have an idea for an app and want to make a reality.
            </div>
          </div>
          <ElevatedButton href="/contact-us">
            <Icon slot="icon">quick_phrases</Icon>
            Contact Us
          </ElevatedButton>
        </div>
      </main>
      <Footer
        termsOfService="/terms-of-service"
        privacyPolicy="/privacy-policy"
      />
    </>
  );
}

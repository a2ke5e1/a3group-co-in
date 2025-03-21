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
  title: "A3 Group",
  description: "A3 Group is a group of friends trying to make some apps.",
  icons: "/favicon.ico",
};

export default function Home() {
  return (
    <>
      <main className="max-w-screen-desktop bg-surface desktop:px-0 mx-auto mt-2 mb-12 flex flex-col gap-[4.5rem] px-2">
        <section className="flex flex-col gap-4">
          <FeaturedVideo videoId="aFEbt4asETc" />
          <AppHeader
            name={YearProgressInfo.name}
            description={YearProgressInfo.desc}
            icon={YearProgressInfo.images.icon}
            links={{
              download: YearProgressInfo.links.download,
              learnMore: YearProgressInfo.links.learnMore,
            }}
          />
          <Testimonials testimonials={YearProgressInfo.reviews} />
        </section>
        <div className="flex flex-col items-start justify-start gap-2 self-stretch">
          <div className="text-on-surface text-display-large">More from Us</div>
          <div className="text-on-surface-variant text-body-large">
            We craft apps designed to make your life easier and more seamless.
          </div>
        </div>
        <AppCard
          name={EyeCareInfo.name}
          description={EyeCareInfo.desc}
          coverImage={EyeCareInfo.images.cover}
          links={{
            download: EyeCareInfo.links.download,
            learnMore: EyeCareInfo.links.learnMore,
          }}
        />
        <AppCard
          name={SoundProfileInfo.name}
          description={SoundProfileInfo.desc}
          coverImage={SoundProfileInfo.images.cover}
          links={{
            download: SoundProfileInfo.links.download,
            learnMore: SoundProfileInfo.links.learnMore,
          }}
          reverseImage={true}
        />
        <div className="bg-secondary-container inline-flex h-[363px] flex-col items-center justify-center gap-6 overflow-hidden rounded-2xl">
          <div className="flex flex-col items-center justify-start">
            <div className="text-on-secondary-container text-display-large justify-center text-center">
              Join us on telegram
            </div>
            <div className="text-Schemes-On-Secondary-Container text-body-large justify-center text-center">
              Have suggestion or need help? just telegram us.
            </div>
          </div>
          <ElevatedButton href="https://t.me/phycalc">
            <Icon slot="icon">
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.99997 1.21997C13.5731 1.21997 17.28 4.92689 17.28 9.49997C17.28 14.0731 13.5731 17.78 8.99997 17.78C4.42689 17.78 0.719971 14.0731 0.719971 9.49997C0.719971 4.92689 4.42689 1.21997 8.99997 1.21997ZM11.8562 12.875C12.0085 12.4077 12.722 7.75073 12.8102 6.83309C12.8369 6.55517 12.749 6.37049 12.5769 6.28805C12.3689 6.18797 12.0607 6.23801 11.7032 6.36689C11.2129 6.54365 4.94457 9.20513 4.58241 9.35921C4.23897 9.50501 3.91425 9.66413 3.91425 9.89453C3.91425 10.0565 4.01037 10.1476 4.27533 10.2423C4.55109 10.3406 5.24553 10.5512 5.65557 10.6642C6.05049 10.7733 6.50013 10.6786 6.75213 10.522C7.01925 10.3561 10.1019 8.29325 10.3233 8.11253C10.5444 7.93181 10.7208 8.16329 10.5401 8.34437C10.3593 8.52509 8.24325 10.5789 7.96425 10.8633C7.62549 11.2085 7.86597 11.5664 8.09313 11.7097C8.35269 11.8731 10.2193 13.1252 10.5005 13.326C10.7816 13.5269 11.0667 13.618 11.3277 13.618C11.5887 13.618 11.7262 13.2742 11.8562 12.875Z"
                  fill="#00696D"
                />
              </svg>
            </Icon>
            Join
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

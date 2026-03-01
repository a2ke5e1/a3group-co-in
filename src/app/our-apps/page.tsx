import Footer from "@/components/v3/common/footer/footer";
import { Metadata } from "next";
import { AppCard } from "@/components/v3/common/app-card/app-card";
import Image from "next/image";

import YearProgressInfo from "@/docs/yearly-progress/info.json";
import EyeCareInfo from "@/docs/eye-care/info.json";
import SoundProfileInfo from "@/docs/sound-profile-scheduler/info.json";
import { Icon } from "@/components/icon/icon";
import Link from "next/link";
import ElevatedButton from "@/components/common/button/ElevatedButton";
import OutlinedButton from "@/components/common/button/OutlinedButton";

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
        <section className="@container/app-card flex flex-row flex-wrap-reverse gap-6">
          <div className="flex flex-1 flex-col">
            <div className="flex flex-col gap-[10px]">
              <h1 className="text-headline-large">WhileHere</h1>
              <p className="text-on-surface-variant text-body-large text-justify leading-5">
                A location-based task reminder app that helps you remember what
                to do exactly where it matters. Save places for your tasks, set
                a trigger radius, and get timely nudges when you are nearby.
              </p>
            </div>
            <div className="my-4 flex flex-row flex-wrap gap-4">
              <Link href="/whilehere">
                <OutlinedButton>Learn More</OutlinedButton>
              </Link>
            </div>
          </div>

          <div className="@[845px]/app-card:w-[456.89px] flex w-full items-center justify-center">
            <Image
              src="/while-here/while-here-img.png"
              alt="WhileHere app preview"
              width={1536}
              height={1024}
              className="h-auto w-full rounded-lg object-contain shadow-none"
            />
          </div>
        </section>
        <div className="bg-secondary-container inline-flex min-h-[363px] flex-col items-center justify-center gap-6 overflow-hidden rounded-2xl px-8">
          <div className="flex flex-col items-center justify-start gap-1">
            <div className="text-on-secondary-container text-display-large justify-center text-center">
              Have suggestions?
            </div>
            <div className="text-Schemes-On-Secondary-Container text-body-large justify-center text-center">
              If you have an idea for an app and want to make a reality.
            </div>
          </div>
          <Link href="/contact-us">
            <ElevatedButton>
              <Icon slot="icon">quick_phrases</Icon>
              Contact Us
            </ElevatedButton>
          </Link>
        </div>
      </main>
      <Footer
        termsOfService="/terms-of-service"
        privacyPolicy="/privacy-policy"
      />
    </>
  );
}

import Footer from "@/components/Footer";
import { Metadata } from "next";
import Image from "next/image";

import YearlyProgressInfo from "../../info/yearly-progress.json";
import EyeCareInfo from "../../info/eye-care.json";
import Link from "next/link";

import { Shop, Terminal, Language as WebBrowser } from "@mui/icons-material";
import { FilledTonalButton, TextButton } from "@/components/button/button";
import { Icon } from "@/components/icon/icon";
import { ProjectCard } from "@/components/project-card";

export const metadata: Metadata = {
  title: "A3 Group",
  description: "A3 Group is a group of friends trying to make some apps.",
};

export default function Home() {
  return (
    <>
      <main  className="my-8 min-h-[80vh]">
        <div className="max-w-screen-xl xl:mx-auto mx-8 my-2">
          <div className="my-8 w-fit mx-auto justify-center flex flex-col items-center gap-4">
            <Image
              src="/images/a3_logo.png"
              alt="A3 Group"
              width={60}
              height={50}
            />
            <p className="text-label-large text-center ">
              A3 Group is a group of friends trying to make some apps.
            </p>
          </div>

          <div className="flex flex-col gap-10">
            <ProjectCard
              title={YearlyProgressInfo.name}
              description={YearlyProgressInfo.desc.about}
              coverImage={"/yearly-progress/images/cover.webp"}
              links={{
                learnMore: "/yearly-progress#about-yearly-progress",
                playStore:
                  "https://play.google.com/store/apps/details?id=com.a3.yearlyprogess",
                sourceCode: "https://github.com/a2ke5e1/yearly-progress",
                webApp: "/yearly-progress/web-app",
                terminalApp: "https://github.com/a2ke5e1/yearly-progress-cli-py/"
              }}
            />
            <ProjectCard
              title={EyeCareInfo.name}
              description={EyeCareInfo.desc.about_long}
              coverImage={"/eye-care/images/cover.png"}
              links={{
                learnMore: "/eye-care#what-is-eye-care",
                playStore:
                  "https://play.google.com/store/apps/details?id=com.a3.eyecare",
              }}
              reverseImage
            />
            <ProjectCard
              title={"Sound Profile Scheduler"}
              description={
                "It is an audio profile scheduler app, designed to give you full control over your device's sound settings with precision. Whether you need your phone to be quiet during meetings, loud for alarms, or at a moderate volume for media, this app lets you automate these changes just like setting an alarm clock."
              }
              coverImage={"/sound-profile-scheduler/images/cover.png"}
              links={{
                learnMore: "/sound-profile-scheduler#about",
                playStore:
                  "https://play.google.com/store/apps/details?id=com.a3.soundprofiles",
                sourceCode: "https://github.com/a2ke5e1/Sound-Profiles-Manager",
              }}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

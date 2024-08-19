import Footer from "@/components/Footer";
import { Metadata } from "next";
import Image from "next/image";

import YearlyProgressInfo from "../../info/yearly-progress.json";
import EyeCareInfo from "../../info/eye-care.json";
import Link from "next/link";

import { Shop, Terminal, Language as WebBrowser } from "@mui/icons-material";

export const metadata: Metadata = {
  title: "A3 Group",
  description: "A3 Group is a group of friends trying to make some apps.",
};

const YearlyProgressTrailerViedoEmbed = () => (
  <iframe
    className="w-full aspect-video rounded-2xl border-0"
    src="https://www.youtube.com/embed/80zdg8umFQo"
    title="Yearly Progress"
    frameBorder={0}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  ></iframe>
);

export default function Home() {
  return (
    <>
      <main>
        <div className="max-w-screen-2xl xl:mx-auto mx-2 my-2">
          <div className="my-8 w-fit mx-auto justify-center flex flex-col items-center gap-4">
            <Image
              src="/images/a3_logo.png"
              alt="A3 Group"
              width={60}
              height={50}
            />
            <p className="text-sm text-center dark:text-white">
              A3 Group is a group of friends trying to make some apps.
            </p>
          </div>

          <div>
            <h1 className="text-md uppercase font-mono font-bold text-center mt-12">
              Our Apps
            </h1>
            <div className="grid md:grid-flow-col grid-flow-row md:gap-4 gap-2 mx-auto w-fit my-8">
              <Image
                src="/yearly-progress/images/cover.webp"
                alt="Yearly Progress Cover"
                width={400}
                height={225}
                className="rounded-2xl md:w-[400px] w-full"
              />
              <div className="max-w-2xl">
                <h1 className="font-semibold md:text-4xl text-3xl text-blue-800 dark:text-blue-600">
                  {YearlyProgressInfo.name}
                </h1>
                <p className="text-gray-800 md:ml-2 ml-1 mt-1 md:text-base text-sm dark:text-gray-300">
                  {YearlyProgressInfo.desc.about}
                  <span className="text-blue-500 dark:text-blue-800">
                    <Link href="/yearly-progress#about-yearly-progress">
                      {" "}
                      Learn More
                    </Link>
                  </span>
                </p>
                <p className="text-gray-800 dark:text-gray-300 mt-5 md:ml-2 ml-1 md:text-base text-sm gap-2 flex flex-col">
                  <span>
                    <Link
                      href={
                        "https://play.google.com/store/apps/details?id=com.a3.yearlyprogess"
                      }
                    >
                      {<Shop />} Get Play Store
                    </Link>
                  </span>
                  <span>
                    <Link
                      href={"https://github.com/a2ke5e1/yearly-progress-cli-py"}
                    >
                      {<Terminal />} Get on Terminal
                    </Link>
                  </span>
                  <span>
                    <Link href={"/yearly-progress/web-app"} className="">
                      {<WebBrowser />} Get on Web
                    </Link>
                  </span>
                </p>
              </div>
            </div>
            <div className="grid md:grid-flow-col grid-flow-row md:gap-4 gap-2 mx-auto w-fit my-8">
              <Image
                src="/eye-care/images/cover.png"
                alt="Eye Care Cover"
                width={400}
                height={225}
                className="rounded-2xl md:w-[400px] w-full md:hidden"
              />

              <div className="max-w-2xl">
                <h1 className="font-semibold md:text-4xl text-3xl text-blue-800">
                  {EyeCareInfo.name}
                </h1>
                <p className="text-gray-800 md:ml-0.5 ml-1 mt-1 md:text-base text-sm dark:text-gray-300">
                  {EyeCareInfo.desc.about_long}
                  <span className="text-blue-500 dark:text-blue-800">
                    <Link href="/eye-care#what-is-eye-care"> Learn More</Link>
                  </span>
                </p>
                <p className="text-gray-800  dark:text-gray-300 mt-5 md:ml-0.5 ml-1 md:text-base text-sm gap-2 flex flex-col">
                  <span>
                    <Link
                      href={
                        "https://play.google.com/store/apps/details?id=com.a3.eyecare"
                      }
                    >
                      {<Shop />} Get Play Store
                    </Link>
                  </span>
                </p>
              </div>

              <Image
                src="/eye-care/images/cover.png"
                alt="Eye Care Cover"
                width={400}
                height={225}
                className="rounded-2xl md:w-[400px] w-full hidden md:block"
              />
            </div>
            <div className="grid md:grid-flow-col grid-flow-row md:gap-4 gap-2 mx-auto w-fit my-8">
              <Image
                src="/sound-profile-scheduler/images/cover.png"
                alt="Sound Profile Scheduler Cover"
                width={400}
                height={225}
                className="rounded-2xl md:w-[400px] w-full"
              />
              <div className="max-w-2xl">
                <h1 className="font-semibold md:text-4xl text-3xl text-blue-800 dark:text-blue-600">
                  {"Sound Profile Scheduler"}
                </h1>
                <p className="text-gray-800 md:ml-2 ml-1 mt-1 md:text-base text-sm dark:text-gray-300">
                  {
                    "Introducing our versatile audio profile scheduler app, designed to give you full control over your device's sound settings with precision. Whether you need your phone to be quiet during meetings, loud for alarms, or at a moderate volume for media, this app lets you automate these changes just like setting an alarm clock."
                  }
                  <span className="text-blue-500 dark:text-blue-800">
                    <Link href="/sound-profile-scheduler#about">
                      {" "}
                      Learn More
                    </Link>
                  </span>
                </p>
                <p className="text-gray-800 dark:text-gray-300 mt-5 md:ml-2 ml-1 md:text-base text-sm gap-2 flex flex-col">
                  <span>
                    <Link
                      href={
                        "https://play.google.com/store/apps/details?id=com.a3.soundprofiles"
                      }
                    >
                      {<Shop />} Get Play Store
                    </Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

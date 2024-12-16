import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { GitHub, LinkedIn, Web, X } from "@mui/icons-material";
import { BackButton } from "@/components/BackButton";
import { IconButton } from "@/components/button/button";
import { Icon } from "@/components/icon/icon";

type MemeberCardsProps = {
  name: string;
  description: string;
  imgSrc: string;
  links?: LinkProps;
};

type LinkProps = {
  github?: string;
  linkedin?: string;
  x?: string;
  website?: string;
};

const MemeberCards = ({
  name,
  description,
  imgSrc,
  links,
}: MemeberCardsProps) => (
  <div className="bg-surface-container-low rounded-2xl p-2 flex flex-row items-center gap-4 ">
    <Image
      src={imgSrc}
      alt={name}
      className="rounded-full h-24 w-24"
      width={80}
      height={80}
    />
    <div className="max-w-md">
      <div className="mt-4">
        <h2 className="font-bold text-body-large text-primary">{name}</h2>
        <p className="text-body-medium text-on-surface-variant">
          {description}
        </p>
      </div>

      <div className="flex flex-row gap-2 my-2 -ml-2">
        {links?.github && (
          <IconButton href={links.github}>
            <Icon>
              <GitHub />
            </Icon>
          </IconButton>
        )}
        {links?.linkedin && (
          <IconButton href={links.linkedin}>
            <Icon>
              <LinkedIn />
            </Icon>
          </IconButton>
        )}
        {links?.x && (
          <IconButton href={links.x}>
            <Icon>
              <X />
            </Icon>
          </IconButton>
        )}
        {links?.website && (
          <IconButton href={links.website}>
            <Icon>
              <Web />
            </Icon>
          </IconButton>
        )}
      </div>
    </div>
  </div>
);

const AboutUs: NextPage = () => {
  return (
    <main className="2xl:mx-0 mx-2 my-8 min-h-[80vh]">
      <BackButton />
      <div className="my-2 w-fit mx-auto justify-center flex flex-col items-center">
        <Link href="/" aria-label="Home">
          <Image
            src="/images/a3_logo.png"
            alt="A3 Group"
            width={60}
            height={50}
            className="my-2"
          />
        </Link>
        <h1 className="font-bold text-headline-large ">About Us</h1>
        <p className="text-center text-body-large">
          A3 Group is a group of friends trying to make some apps. <br /> <br />
        </p>
      </div>

      <h2 className="my-4 text-title-large text-center text-primary">Our Team</h2>
      <div className="grid grid-flow-row md:grid-cols-2  grid-cols-1  gap-4 ">
        <MemeberCards
          name="a2ke5e1"
          description="Web and App Developer + Designer"
          imgSrc="/images/a2k.webp"
          links={{
            github: "https://www.github.com/a2ke5e1",
            linkedin: "https://www.linkedin.com/in/a2ke5e1",
            x: "https://www.twitter.com/a2ke5e1",
            website: "https://a2ke5e1.com",
          }}
        />
        <MemeberCards
          name="ADK"
          description="Web Developer + Angular"
          imgSrc="/images/adk.webp"
          links={{
            github: "https://www.github.com/ADKANK",
            linkedin: "https://www.linkedin.com/in/anand-kumar-808ba0194",
          }}
        />
        <MemeberCards
          name="FCatilizer"
          description="Full Stack Developer"
          imgSrc="/images/asg.webp"
          links={{
            github: "https://www.github.com/Fcatilizer",
            linkedin: "https://www.linkedin.com/in/ashish-gaurav03",
            x: "https://www.twitter.com/FeatherCatlizer",
          }}
        />
      </div>
    </main>
  );
};

export default AboutUs;

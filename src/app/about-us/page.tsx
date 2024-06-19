import type { NextPage } from "next";
import Head from "next/head";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import {GitHub, X, LinkedIn, Web} from "@mui/icons-material"

type MemeberCardsProps = {
  name: string;
  description: string;
  imgSrc: string;
  links?: LinkProps;
};

type LinkProps = {
  github: string;
  linkedin: string;
  x: string;
  website: string;
}

const MemeberCards = ({ name, description, imgSrc, links }: MemeberCardsProps) => (
  <div className="bg-blue-50 rounded-2xl p-2 flex flex-row items-center gap-2">
    <Image
      src={imgSrc}
      alt={name}
      className="rounded-full"
      width={80}
      height={80}
    />
    <div className="h-fit">
      <h2 className="font-bold text-lg">{name}</h2>
      <p>{description}</p>

      <div className="flex flex-row gap-2">
        {links?.github && (<Link href={links.github}><GitHub /></Link>)}
        {links?.linkedin && (<Link href={links.linkedin}><LinkedIn /></Link>)}
        {links?.x && (<Link href={links.x}><X /></Link>)}
        {links?.website && (<Link href={links.website}><Web /></Link>)}
      </div>
    </div>
  </div>
);

const AboutUs: NextPage = () => {
  return (
    <>
      <h1 className="font-bold text-2xl ">About Us</h1>
      <p className="">
        We are a group of developers who are passionate about building software
        applications.
      </p>
      <h2 className="font-bold text-lg my-2">Our Team</h2>
      <div className="grid md:grid-flow-col gap-2">
        <MemeberCards
          name="a2ke5e1"
          description="Full Stack Developer"
          imgSrc="/images/a2k.jpg"
          links={{
            github: "https://www.github.com/a2ke5e1",
            linkedin: "https://www.linkedin.com/in/a2ke5e1",
            x: "https://www.twitter.com/a2ke5e1",
            website: "https://www.a2krocks.com",
          }}
        />
        <MemeberCards
          name="ADK"
          description="Full Stack Developer"
          imgSrc="/images/a2k.jpg"
        />
        <MemeberCards
          name="FCatilizer"
          description="Full Stack Developer"
          imgSrc="/images/a2k.jpg"
        />
      </div>
      <p className="my-2 text-sm">
        Aliquam dignissim justo magna, eget vulputate urna tincidunt et.
        Maecenas vulputate, erat vitae venenatis maximus, orci diam lobortis
        lorem, non eleifend nunc quam ac erat. Suspendisse potenti. Suspendisse
        dui sapien, pharetra vel augue vitae, volutpat convallis justo. Nam
        volutpat consectetur lectus, eget congue ex efficitur id. Cras in neque
        sit amet magna commodo dignissim id et ante. Duis posuere erat sem. Nam
        molestie hendrerit nisi ut elementum. Vivamus nisi purus, sollicitudin
        id turpis nec, iaculis dictum quam. Sed sagittis non lectus nec blandit.
      </p>
    </>
  );
};

export default AboutUs;

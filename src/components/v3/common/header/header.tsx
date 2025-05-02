import Link from "next/link";
import Image from "next/image";
import { TextButton } from "@/components/button/button";

export default function Header() {
  return (
    <header className="bg-surface">
      <div className="max-w-screen-desktop bg-surface desktop:px-0 mx-auto flex min-h-[72px] flex-row items-center justify-between px-2 py-5">
        <Link href={"/"}>
          <Image
            src="/images/a3_logo.png"
            width={60}
            height={32}
            alt="A3 Group Logo"
          />
        </Link>
        <section className="flex h-fit flex-row">
          <TextButton href="/our-apps">Our Apps</TextButton>
          <TextButton href="/contact-us">Contact Us</TextButton>
          <TextButton href="/about-us">About Us</TextButton>
        </section>
      </div>
    </header>
  );
}

"use client";

import TextButton from "@/components/common/button/TextButton";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const whileHereRoutes = new Set([
    "/whilehere",
    "/whilehere-privacy-policy",
    "/whilehere-terms-of-service",
    "/whilehere/privacy-policy",
  ]);
  const isWhileHereRoute = whileHereRoutes.has(pathname);

  if (isWhileHereRoute) {
    return null;
  }

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
          <Link href="/our-apps">
            <TextButton>Our Apps</TextButton>
          </Link>
          <Link href="/contact-us">
            <TextButton>Contact Us</TextButton>
          </Link>
          <Link href="/about-us">
            <TextButton>About Us</TextButton>
          </Link>
        </section>
      </div>
    </header>
  );
}

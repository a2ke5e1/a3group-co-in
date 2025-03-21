import Link from "next/link";
import Image from "next/image";

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
        <section className="*:text-label-large *:text-on-surface-variant flex h-fit flex-row gap-8 *:hover:underline">
          <Link href="/our-apps">Our Apps</Link>
          <Link href="/contact-us">Contact Us</Link>
          <Link href="/about-us">About Us</Link>
        </section>
      </div>
    </header>
  );
}

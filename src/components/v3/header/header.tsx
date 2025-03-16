import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-surface">
      <div className="max-w-screen-desktop bg-surface mx-auto flex flex-row items-start justify-between py-5">
        <Link href={"/"}>
          <Image
            src="/images/a3_logo.png"
            width={92}
            height={32}
            alt="A3 Group Logo"
          />
        </Link>
        <section className="*:text-label-large *:text-on-surface-variant flex flex-row gap-8 *:hover:underline">
          <Link href="/our-apps">Our Apps</Link>
          <Link href="/contact-us">Contact Us</Link>
          <Link href="/about-us">About Us</Link>
        </section>
      </div>
    </header>
  );
}

import Link from "next/link";
import Image from "next/image";

type FooterProps = {
  termsOfService: string;
  privacyPolicy: string;
};

export default function Footer({
  privacyPolicy: policy_url,
  termsOfService: terms_of_service_url,
}: FooterProps) {
  return (
    <footer className="bg-surface-container-low py-5">
      <div className="max-w-screen-desktop mx-auto flex flex-row items-start justify-between py-5">
        <section className="flex flex-col gap-[0.625rem]">
          <Link href={"/"}>
            <Image
              src="/images/a3_logo.png"
              width={92}
              height={32}
              alt="A3 Group Logo"
            />
          </Link>
          <p className="text-on-surface-variant text-label-medium">
            © 2018 - 2025 A3 Group, All right reserved.
          </p>
        </section>

        <section className="*:text-label-large *:text-on-surface-variant flex flex-col *:hover:underline">
          <Link href={terms_of_service_url}>Terms of Service</Link>
          <Link href={policy_url}>Privacy Policy</Link>
          <Link href="/contact-us">Contact Us</Link>
        </section>
      </div>
    </footer>
  );
}

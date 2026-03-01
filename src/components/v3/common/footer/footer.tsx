"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

type FooterProps = {
  termsOfService: string;
  privacyPolicy: string;
};

export default function Footer({
  privacyPolicy: policy_url,
  termsOfService: terms_of_service_url,
}: FooterProps) {
  const pathname = usePathname();
  const whileHereRoutes = new Set([
    "/whilehere",
    "/whilehere/terms-of-service",
    "/whilehere/privacy-policy",
  ]);
  const isWhileHereRoute = whileHereRoutes.has(pathname);

  return (
    <footer className="bg-surface-container-low py-5">
      <div className="max-w-screen-desktop desktop:px-0 mx-auto flex flex-col items-start justify-between gap-8 px-2 py-5 md:flex-row md:gap-0">
        <section className="flex flex-col gap-[0.625rem]">
          {!isWhileHereRoute && (
            <Link href={"/"}>
              <Image
                src="/images/a3_logo.png"
                width={92}
                height={32}
                alt="A3 Group Logo"
              />
            </Link>
          )}
          <p className="text-on-surface-variant text-label-medium">
            {isWhileHereRoute
              ? `© ${new Date().getFullYear()} Anand Kumar. All rights reserved.`
              : `© 2018 - ${new Date().getFullYear()} A3 Group, All right reserved.`}
          </p>
        </section>

        <section className="*:text-label-large *:text-on-surface-variant flex flex-col *:hover:underline">
          <Link href={terms_of_service_url}>Terms of Service</Link>
          <Link href={policy_url}>Privacy Policy</Link>
          {!isWhileHereRoute && <Link href="/contact-us">Contact Us</Link>}
        </section>
      </div>
    </footer>
  );
}

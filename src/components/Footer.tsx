import Link from "next/link";
import Image from "next/image";

type FooterProps = {
  terms_of_service_url?: string;
  policy_url?: string;
  delete_data_url?: string;
  apps?: boolean;
};

export default function Footer({
  policy_url,
  delete_data_url,
  apps,
  terms_of_service_url,
}: FooterProps) {
  return (
    <footer className="bg-surface-container-low px-4 py-8">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:md:grid-cols-2 grid-cols-1 align-top justify-between gap-4">
          <section>
            <Link href={"/"}>
              <Image
                src="/images/a3_logo.png"
                width={60}
                height={21}
                alt="A3 Group Logo"
              />
            </Link>
            <p className="my-2 text-label-medium">
              © 2018 - 2024 A3 Group, All right reserved.
            </p>
          </section>

          <section className="">
            <p className="text-label-small uppercase ">JOIN OUR COMMUNITY</p>
            <Link
              href={"https://t.me/phycalc"}
              className=" my-2 text-body-medium hover:underline"
            >
              Telegram
            </Link>
          </section>

          {delete_data_url && (
            <section className="">
              <p className="text-label-small uppercase">MANAGE YOUR DATA</p>
              <Link
                href={delete_data_url}
                className=" my-2 text-body-medium hover:underline"
              >
                Delete Your Account
              </Link>
            </section>
          )}

          {apps && (
            <section className="">
              <p className="text-label-small uppercase">Apps</p>
              <div className="grid grid-cols-1  my-2 text-body-medium">
                <Link href="/yearly-progress" className="hover:underline">
                  Yearly Progress
                </Link>
                <Link href="/eye-care" className="hover:underline">
                  Eye Care
                </Link>
              </div>
            </section>
          )}

          <section className="">
            <p className="text-label-small uppercase">Others</p>
            <div className="grid grid-cols-1 my-2 text-body-medium">
              {terms_of_service_url && (
                <Link href={terms_of_service_url} className="hover:underline">
                  Terms of Service
                </Link>
              )}
              {policy_url && (
                <Link href={policy_url} className="hover:underline">
                  Privacy Policy
                </Link>
              )}
              <Link href="/about-us" className="hover:underline">
                About Us
              </Link>
            </div>
          </section>
        </div>
      </div>
    </footer>
  );
}

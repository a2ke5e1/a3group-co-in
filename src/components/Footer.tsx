import styles from "@styles/components/footer.module.scss";
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
    <footer className="bg-blue-50 px-4 py-8">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid md:grid-cols-3 sm:md:grid-cols-2 grid-cols-1 align-top justify-between gap-4">
          <section>
            <Link href={"/"}>
              <Image
                src="/images/a3_logo.png"
                width={"60"}
                height={"21"}
                alt="A3 Group Logo"
              />
            </Link>
            <p className="my-2 font-light text-sm">
              © 2018 - 2024 A3 Group, All right reserved.
            </p>
          </section>

          <section>
            <p className="text-xs uppercase font-light">JOIN OUR COMMUNITY</p>
            <Link href={"https://t.me/phycalc"}>Telegram</Link>
          </section>

          {delete_data_url && (
            <section>
              <p className="text-xs uppercase font-light">MANAGE YOUR DATA</p>
              <Link href={delete_data_url}>Delete Your Account</Link>
            </section>
          )}

          {apps && (
            <section>
              <p className="text-xs uppercase font-light">Apps</p>
              <div className="grid grid-cols-1">
                <Link href="/yearly-progress">Yearly Progress</Link>
                <Link href="/eye-care">Eye Care</Link>
              </div>
            </section>
          )}

          <section>
            <p className="text-xs uppercase font-light">Others</p>
            <div className="grid grid-cols-1">
              {terms_of_service_url && (
                <Link href={terms_of_service_url}>Terms of Service</Link>
              )}
              {policy_url && <Link href={policy_url}>Privacy Policy</Link>}
              <Link href="/about-us">About Us</Link>
            </div>
          </section>
        </div>
      </div>
    </footer>
  );
}

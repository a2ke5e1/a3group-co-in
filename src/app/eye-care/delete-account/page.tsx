import type { Metadata, NextPage } from "next";
import info from "@/docs/eye-care/info.json";
import Image from "next/image";
import Link from "next/link";
import { BackButton } from "@/components/BackButton";

export async function generateMetadata() {
  const title: String = "Eye Care - Delete Your Account";
  const description: String = "Eye Care - Your Vision Health Companions";

  return {
    metadataBase: new URL("https://a3group.co.in"),
    title: title,
    description: description,
    icons: info.images.icon,
  };
}

const DeletePage: NextPage = () => {
  return (
    <>
      <main className={"mx-2 my-8 min-h-[80vh] 2xl:mx-0"}>
        <BackButton />
        <div className={`my-2 flex flex-wrap items-center gap-4`}>
          <Image
            src={"/eye-care/favicon/icon-512-maskable.png"}
            height={60}
            width={60}
            alt="Eye Care Logo"
          />
          <h1 className="text-display-small">{info.name}</h1>
        </div>
        <h2 className="text-headline-large mt-8">Delete your account</h2>
        <p className="text-body-large">
          In order to delete your account, contact us{" "}
          <span>
            <Link
              className="text-primary underline"
              href="mailto:support@a3group.co.in"
            >
              support@a3group.co.in
            </Link>
          </span>
        </p>
        <p className={"text-label-small text-on-surface-variant my-8"}>
          Your account will be deleted in 1 month after your intial data
          deletion request.
          <br />
          We will send confirmation email after we recive your request.
        </p>
      </main>
    </>
  );
};

export default DeletePage;

import type { Metadata, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import EyeCareInfo from "@/docs/eye-care/info.json";
import { Features } from "@/components/v3/common/features/features";
import { AppHeader } from "@/components/v3/common/app-header/app-header";
import { Cover } from "@/components/app-pages/app-header";

export async function generateMetadata() {
  const title: String = "Eye Care - Delete Your Account";
  const description: String = "Eye Care - Your Vision Health Companions";

  return {
    metadataBase: new URL("https://a3group.co.in"),
    title: title,
    description: description,
    icons: EyeCareInfo.images.icon,
  };
}

const DeletePage: NextPage = () => {
  return (
    <>
      <main className={"mx-2 my-8 min-h-[80vh] 2xl:mx-0"}>
        <section className="flex flex-col gap-4">
          <Cover
            src={EyeCareInfo.images.cover}
            alt={EyeCareInfo.name}
            className="bg-[#b5c9ff]"
            dynamic={true}
          />
        </section>

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

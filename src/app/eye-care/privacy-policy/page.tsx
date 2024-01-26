import { NextPage } from "next";
import styles from "../../../../styles/yearly-progress/Privacy.module.scss";
import PrivacyPolicy from "@/docs/eye-care/privacy-policy.mdx";
import Image from "next/image";

export async function generateMetadata() {
  const title: String = "Eye Care - Privacy Policy";
  const description: String = "Eye Care - Your Vision Health Companion";

  return {
    metadataBase: new URL('https://a3group.co.in'),
    title: title,
    description: description,
    icons: "/eye-care/favicon/favicon.ico",
    twitter: {
      images:
        "https://www.a3group.co.in/eye-care/images/ss/Screenshot_1691238815.png",
    },
  };
}

const EyeCarePrivacyPolicy: NextPage = () => {
  return (
    <div>
      <main className={"mt-6"}>
        <div>
          <div className={styles.sup_title}>
            <div className={styles.title}>
              <Image
                src={"/eye-care/favicon/icon-512-maskable.png"}
                width={50}
                height={50}
                alt=""
                className={styles.shadow + " rounded-md"}
              />
              <div>
                <h1 className="text-xl font-bold">Eye Care</h1>
                <h2></h2>
              </div>
            </div>
          </div>
        </div>
        <div className="prose prose-sm only prose-h1:mt-0 mt-5">
          <PrivacyPolicy />
        </div>
      </main>
    </div>
  );
};

export default EyeCarePrivacyPolicy;

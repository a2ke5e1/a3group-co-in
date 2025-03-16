import Footer from "@/components/v3/footer/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "A3 Group",
  description: "A3 Group is a group of friends trying to make some apps.",
  icons: "/favicon.ico",
};

export default function Home() {
  return (
    <>
      <Footer
        termsOfService="/terms-of-service"
        privacyPolicy="/privacy-poilicy"
      />
    </>
  );
}

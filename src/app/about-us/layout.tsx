import Footer from "@/components/v3/common/footer/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | A3 Group",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="mx-4 my-8 max-w-screen-xl xl:mx-auto">{children}</div>
      <Footer
        termsOfService="/terms-of-service"
        privacyPolicy="/privacy-policy"
      />
    </>
  );
}

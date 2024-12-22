import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - A3 Group",
  description: "About A3 Group",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="xl:mx-auto max-w-screen-xl mx-4 my-8">{children}</div>
      <Footer />
    </>
  );
}

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
        <main className="2xl:mx-auto max-w-screen-2xl my-2 mx-2">{children}</main>
        <Footer />
      </>
    );
  }
  
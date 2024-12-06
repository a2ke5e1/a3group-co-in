import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeToggleButton } from "@/components/button/button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "A3 Group",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <body className={`${inter.className} `}>
        <div className="m-2 absolute top-0 right-0"><ThemeToggleButton /></div>
        <main>{children}</main>
      </body>
    </html>
  );
}

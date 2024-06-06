import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "A3 Group",
  description: "This is a blog page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} "container mx-auto px-4`}>
        <main className="mx-auto max-w-screen-xl">{children}</main>
      </body>
    </html>
  );
}

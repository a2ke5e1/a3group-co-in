import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
      <head>
        <script
          async={true}
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5701438671181854"
          crossOrigin={"anonymous"}
        ></script>
      </head>
      <body className={`${inter.className} dark:bg-black dark:text-white`}>
        <main>{children}</main>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  display: "swap",
});

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
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}

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
      <div className="mx-4 my-8 max-w-screen-xl xl:mx-auto">{children}</div>
    </>
  );
}

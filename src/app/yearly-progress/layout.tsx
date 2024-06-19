import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="mx-auto max-w-screen-2xl">{children}</div>
      <Footer
        terms_of_service_url="/yearly-progress/TOS"
        policy_url="/yearly-progress/privacy-policy"
      />
    </>
  );
}

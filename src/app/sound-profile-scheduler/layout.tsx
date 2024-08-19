import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="2xl:mx-auto max-w-screen-2xl m-2">{children}</div>
      <Footer
        terms_of_service_url="/sound-profile-scheduler/terms-of-service"
        policy_url="/sound-profile-scheduler/privacy-policy"
      />
    </>
  );
}

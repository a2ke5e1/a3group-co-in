import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="xl:mx-auto max-w-screen-xl mx-2 my-8">{children}</div>
      <Footer
        terms_of_service_url="/sound-profile-scheduler/terms-of-service"
        policy_url="/sound-profile-scheduler/privacy-policy"
      />
    </>
  );
}

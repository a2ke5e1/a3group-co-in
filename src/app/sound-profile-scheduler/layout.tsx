import Footer from "@/components/v3/common/footer/footer";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="max-w-screen-desktop bg-surface mx-auto my-12 flex flex-col gap-8">
        {children}
      </div>
      <Footer
        termsOfService="/sound-profile-scheduler/terms-of-service"
        privacyPolicy="/sound-profile-scheduler/privacy-policy"
      />
    </>
  );
}

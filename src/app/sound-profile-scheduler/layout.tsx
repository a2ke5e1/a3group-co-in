import Footer from "@/components/v3/common/footer/footer";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="max-w-screen-desktop bg-surface desktop:px-0 mx-auto my-12 flex flex-col gap-[4.5rem] px-2">
        {children}
      </div>
      <Footer
        termsOfService="/sound-profile-scheduler/terms-of-service"
        privacyPolicy="/sound-profile-scheduler/privacy-policy"
      />
    </>
  );
}

import Footer from "@/components/Footer";
import styles from "@styles/yearly-progress/index.module.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main>
        {children}
        <Footer policy_url="/yearly-progress/privacy-policy" />
      </main>
    </>
  );
}

import Footer from "@/components/Footer";
import styles from "@styles/yearly-progress/index.module.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="2xl:mx-auto max-w-screen-2xl m-2">{children}</div>
      <Footer
        policy_url="/eye-care/privacy-policy"
        delete_data_url="/eye-care/delete-account"
      />
    </>
  );
}

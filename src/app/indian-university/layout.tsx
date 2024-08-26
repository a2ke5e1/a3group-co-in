import Footer from "@/components/Footer";
import styles from "@styles/yearly-progress/index.module.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="mx-auto max-w-screen-2xl">{children}</div>
      <Footer policy_url="/indian-university/privacy-policy" terms_of_service_url="/indian-university/tos" delete_data_url="/indian-university/delete-account" />
    </>
  );
}

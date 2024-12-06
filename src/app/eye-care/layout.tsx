import Footer from "@/components/Footer";
import styles from "@styles/yearly-progress/index.module.scss";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <>
            <div className="xl:mx-auto max-w-screen-xl m-2">{children}</div>
            <Footer
                policy_url="/eye-care/privacy-policy"
                delete_data_url="/eye-care/delete-account"
            />
        </>
    );
}

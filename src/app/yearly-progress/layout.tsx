import Footer from "@/components/Footer";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <>
            <div className="xl:mx-auto max-w-screen-xl m-2">{children}</div>
            <Footer
                terms_of_service_url="/yearly-progress/terms-of-service"
                policy_url="/yearly-progress/privacy-policy"
            />
        </>
    );
}

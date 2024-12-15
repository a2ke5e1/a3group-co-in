import Footer from "@/components/Footer";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <>
            <div className="2xl:mx-auto max-w-screen-xl mx-2 my-8">{children}</div>
            <Footer
                terms_of_service_url="/yearly-progress/terms-of-service"
                policy_url="/yearly-progress/privacy-policy"
            />
        </>
    );
}

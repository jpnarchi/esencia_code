import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import WhatsAppButton from "@/components/whatsapp-button";

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="w-full relative">
            <Navbar />
            {children}
            <Footer />
            <WhatsAppButton />
        </main>
    );
};

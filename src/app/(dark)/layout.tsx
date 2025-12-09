import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function DarkLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-charcoal text-white selection:bg-creati-blue/30">
            <Navbar theme="dark" />
            <main>
                {children}
            </main>
            <Footer theme="dark" />
        </div>
    );
}

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function LightLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-white text-charcoal selection:bg-creati-blue/20">
            <Navbar theme="light" />
            <main className="pt-[var(--header-height)]">
                {children}
            </main>
            <Footer theme="light" />
        </div>
    );
}

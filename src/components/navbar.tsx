"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/data/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavbarProps {
    theme?: "dark" | "light";
}

export function Navbar({ theme = "dark" }: NavbarProps) {
    const pathname = usePathname();
    const isDark = theme === "dark";

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 flex h-[var(--header-height)] items-center justify-between px-4 sm:px-10 transition-colors duration-300 backdrop-blur-md",
                isDark ? "bg-[#050505]/80 text-white" : "bg-white/80 text-charcoal border-b border-gray-100"
            )}
        >
            {/* Logo Area */}
            <Link href="/" className="flex items-center gap-2">
                <div className="text-2xl font-bold tracking-tighter">
                    creati<span className="text-[#2957FF]">.</span>studio
                </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
                {NAV_LINKS.map((link) => {
                    const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "relative flex h-11 items-center justify-center px-4 text-sm font-medium transition-colors hover:opacity-70",
                                isDark ? "text-white" : "text-charcoal",
                                isActive && "opacity-100"
                            )}
                        >
                            {link.label}
                            {link.isNew && (
                                <div className="absolute -right-1 top-1.5 flex h-4 items-center rounded bg-white/10 px-1">
                                    <span className="text-[10px] font-bold italic new-badge-gradient">
                                        NEW
                                    </span>
                                </div>
                            )}
                        </Link>
                    );
                })}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
                <Button
                    className="rounded-full bg-gradient-to-r from-[#2957FF] to-[#00C2FF] text-white font-semibold hover:opacity-90 transition-opacity"
                    size="sm"
                    href="#create"
                >
                    Go Create
                </Button>
            </div>
        </header>
    );
}

export default Navbar;

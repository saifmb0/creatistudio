"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/data/navigation";
import { ASSETS } from "@/data/assets";
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
                "fixed top-0 left-0 right-0 z-50 flex h-[var(--header-height)] items-center justify-between px-4 sm:px-10 transition-colors duration-300",
                isDark
                    ? "bg-[#100f14]/80 backdrop-blur-[10px] text-white"
                    : "bg-white/80 backdrop-blur-[10px] text-charcoal border-b border-gray-100"
            )}
        >
            {/* Logo Area */}
            <Link href="/" className="flex items-center gap-2">
                <div className="text-xl font-bold tracking-tight font-[var(--font-heading)]">
                    creati<span className="text-[#2a64f2]">.</span>studio
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
                                <span className="absolute -right-3 top-1 scale-75 bg-white/10 px-2 py-0.5 rounded text-[10px] font-bold italic tracking-wider new-badge-gradient">
                                    NEW
                                </span>
                            )}
                        </Link>
                    );
                })}
            </nav>

            {/* Actions - Go Create Button with gradient haze effect */}
            <div className="flex items-center gap-4">
                <Link
                    href="#create"
                    className="gradient-shadow flex-center relative h-9 sm:h-10 gap-2 rounded-full border border-white/20 bg-[#0c1011] px-2.5 sm:px-5 py-1 font-heading text-sm font-medium text-white hover:bg-[#0c1011]/80 transition-colors"
                >
                    <Image src={ASSETS.ui.sparkle} alt="" width={16} height={16} className="w-4 h-4" />
                    Go Create
                </Link>
            </div>
        </header>
    );
}

export default Navbar;

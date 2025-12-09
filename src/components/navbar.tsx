"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/data/navigation";
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
                    ? "bg-[#050505]/80 backdrop-blur-[20px] text-white"
                    : "bg-white/80 backdrop-blur-[20px] text-charcoal border-b border-gray-100"
            )}
        >
            {/* Logo Area */}
            <Link href="/" className="flex items-center gap-2">
                <div className="text-xl font-bold tracking-tight">
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
                                <span className="absolute -right-3 top-1 scale-75 bg-white/10 px-2 py-0.5 rounded text-[10px] font-bold italic tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#F7C6A8] via-[#DDE6D0] to-[#2F9FC4]">
                                    NEW
                                </span>
                            )}
                        </Link>
                    );
                })}
            </nav>

            {/* Actions - Go Create Button with gradient border */}
            <div className="flex items-center gap-4">
                <div className="relative rounded-full p-[1px] bg-gradient-to-r from-[#2862f4] via-[#02b1e9] via-[#f7c6a8] to-[#f1567b]">
                    <Link
                        href="#create"
                        className="flex h-10 px-5 rounded-full bg-[#0c1011] text-white font-medium text-sm items-center justify-center hover:bg-[#0c1011]/80 transition-colors"
                    >
                        Go Create
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Navbar;

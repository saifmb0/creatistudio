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
                    ? "bg-[#100f14]/80 backdrop-blur-[10px] text-white"
                    : "bg-white/80 backdrop-blur-[10px] text-charcoal border-b border-gray-100"
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
                                <div className="absolute -right-2 top-1 flex h-5 w-9 items-center justify-center rounded-[5px] bg-white/10 scale-90">
                                    <span className="text-xs font-bold italic new-badge-gradient">
                                        NEW
                                    </span>
                                </div>
                            )}
                        </Link>
                    );
                })}
            </nav>

            {/* Actions - Go Create Button with gradient border */}
            <div className="flex items-center gap-4">
                <Link
                    href="#create"
                    className="relative h-10 px-5 rounded-full bg-[#0c1011] text-white font-medium text-sm flex items-center justify-center overflow-hidden group"
                >
                    {/* Gradient border effect */}
                    <span className="absolute inset-0 rounded-full p-[1px] go-create-gradient opacity-70 group-hover:opacity-100 transition-opacity" />
                    <span className="relative z-10 bg-[#0c1011] rounded-full px-4 h-[calc(100%-2px)] flex items-center">
                        Go Create
                    </span>
                </Link>
            </div>
        </header>
    );
}

export default Navbar;

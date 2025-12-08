"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/navigation";
import { ArrowRight } from "lucide-react";

export default function NavBar() {
    const pathname = usePathname();

    // Determine if we're on a light theme page
    const isLightTheme = pathname === "/plan" || pathname === "/company";

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isLightTheme
                    ? "bg-white border-b border-gray-100"
                    : "bg-black/20 backdrop-blur-xl border-b border-white/5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <span
                            className={`text-xl font-bold tracking-tight ${isLightTheme ? "text-gray-900" : "text-white"
                                }`}
                        >
                            creati studio
                        </span>
                    </Link>

                    {/* Center Navigation Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative text-sm font-medium transition-colors duration-200 ${isLightTheme
                                        ? "text-gray-600 hover:text-gray-900"
                                        : "text-gray-300 hover:text-white"
                                    } ${pathname === link.href ? (isLightTheme ? "text-gray-900" : "text-white") : ""}`}
                            >
                                <span className="flex items-center gap-1.5">
                                    {link.name}
                                    {link.isNew && (
                                        <span className="bg-blue-100 text-blue-600 text-[10px] font-semibold px-1.5 py-0.5 rounded">
                                            NEW
                                        </span>
                                    )}
                                </span>
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <Link
                        href="#create"
                        className={`group flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${isLightTheme
                                ? "bg-gray-900 text-white hover:bg-gray-800"
                                : "glass gradient-border text-white hover:bg-white/10"
                            }`}
                    >
                        Go Create
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                </div>
            </div>
        </nav>
    );
}

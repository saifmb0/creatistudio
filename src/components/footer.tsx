"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { footerLinks } from "@/data/navigation";

export default function Footer() {
    const pathname = usePathname();

    // Determine if we're on a light theme page
    const isLightTheme = pathname === "/plan" || pathname === "/company";

    return (
        <footer
            className={`py-16 ${isLightTheme ? "bg-white border-t border-gray-100" : "bg-[#100f14] border-t border-white/5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Logo & Description */}
                    <div className="md:col-span-1">
                        <Link href="/" className="inline-block">
                            <span
                                className={`text-xl font-bold tracking-tight ${isLightTheme ? "text-gray-900" : "text-white"
                                    }`}
                            >
                                creati studio
                            </span>
                        </Link>
                        <p
                            className={`mt-4 text-sm leading-relaxed ${isLightTheme ? "text-gray-500" : "text-gray-400"
                                }`}
                        >
                            Transform your ideas into viral videos with AI-powered generation.
                        </p>
                    </div>

                    {/* Follow Us */}
                    <div>
                        <h4
                            className={`text-sm font-semibold mb-4 ${isLightTheme ? "text-gray-900" : "text-white"
                                }`}
                        >
                            Follow Us
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.followUs.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className={`text-sm transition-colors ${isLightTheme
                                                ? "text-gray-500 hover:text-gray-900"
                                                : "text-gray-400 hover:text-white"
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4
                            className={`text-sm font-semibold mb-4 ${isLightTheme ? "text-gray-900" : "text-white"
                                }`}
                        >
                            Company
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className={`text-sm transition-colors ${isLightTheme
                                                ? "text-gray-500 hover:text-gray-900"
                                                : "text-gray-400 hover:text-white"
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4
                            className={`text-sm font-semibold mb-4 ${isLightTheme ? "text-gray-900" : "text-white"
                                }`}
                        >
                            Resources
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className={`text-sm transition-colors ${isLightTheme
                                                ? "text-gray-500 hover:text-gray-900"
                                                : "text-gray-400 hover:text-white"
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div
                    className={`mt-12 pt-8 border-t ${isLightTheme ? "border-gray-100" : "border-white/5"
                        }`}
                >
                    <p
                        className={`text-sm ${isLightTheme ? "text-gray-400" : "text-gray-500"
                            }`}
                    >
                        © 2025 All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
}

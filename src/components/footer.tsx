"use client";

import Link from "next/link";
import { footerLinks } from "@/data/navigation";
import { cn } from "@/lib/utils";

interface FooterProps {
    theme?: "dark" | "light";
}

export function Footer({ theme = "dark" }: FooterProps) {
    const isDark = theme === "dark";

    return (
        <footer
            className={cn(
                "py-16",
                isDark ? "bg-charcoal border-t border-white/5" : "bg-white border-t border-gray-100"
            )}
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Logo & Description */}
                    <div className="md:col-span-1">
                        <Link href="/" className="inline-block">
                            <span
                                className={cn(
                                    "text-xl font-bold tracking-tight",
                                    isDark ? "text-white" : "text-charcoal"
                                )}
                            >
                                creati<span className="text-creati-blue">.</span>studio
                            </span>
                        </Link>
                        <p
                            className={cn(
                                "mt-4 text-sm leading-relaxed",
                                isDark ? "text-gray-400" : "text-gray-500"
                            )}
                        >
                            Transform your ideas into viral videos with AI-powered generation.
                        </p>
                    </div>

                    {/* Follow Us */}
                    <div>
                        <h4
                            className={cn(
                                "text-sm font-semibold mb-4",
                                isDark ? "text-white" : "text-charcoal"
                            )}
                        >
                            Follow Us
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.followUs.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className={cn(
                                            "text-sm transition-colors",
                                            isDark
                                                ? "text-gray-400 hover:text-white"
                                                : "text-gray-500 hover:text-charcoal"
                                        )}
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
                            className={cn(
                                "text-sm font-semibold mb-4",
                                isDark ? "text-white" : "text-charcoal"
                            )}
                        >
                            Company
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className={cn(
                                            "text-sm transition-colors",
                                            isDark
                                                ? "text-gray-400 hover:text-white"
                                                : "text-gray-500 hover:text-charcoal"
                                        )}
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
                            className={cn(
                                "text-sm font-semibold mb-4",
                                isDark ? "text-white" : "text-charcoal"
                            )}
                        >
                            Resources
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className={cn(
                                            "text-sm transition-colors",
                                            isDark
                                                ? "text-gray-400 hover:text-white"
                                                : "text-gray-500 hover:text-charcoal"
                                        )}
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
                    className={cn(
                        "mt-12 pt-8 border-t",
                        isDark ? "border-white/5" : "border-gray-100"
                    )}
                >
                    <p
                        className={cn(
                            "text-sm",
                            isDark ? "text-gray-500" : "text-gray-400"
                        )}
                    >
                        © 2025 All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

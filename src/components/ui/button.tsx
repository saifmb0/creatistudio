import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "glass" | "outline";
    size?: "sm" | "md" | "lg" | "icon";
    href?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", href, children, ...props }, ref) => {
        const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none";

        const variants = {
            primary: "bg-creati-blue text-white hover:bg-blue-600 shadow-lg shadow-blue-500/20",
            secondary: "bg-white text-charcoal hover:bg-gray-100",
            glass: "glass text-white hover:bg-white/10 border border-white/10",
            outline: "border border-white/20 hover:bg-white/5 text-white",
        };

        const sizes = {
            sm: "h-9 px-4 text-sm",
            md: "h-11 px-6 text-base",
            lg: "h-14 px-8 text-lg",
            icon: "h-10 w-10 p-0",
        };

        const combinedClassName = cn(baseStyles, variants[variant], sizes[size], className);

        if (href) {
            return (
                <Link href={href} className={combinedClassName}>
                    {children}
                </Link>
            );
        }

        return (
            <button ref={ref} className={combinedClassName} {...props}>
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";

export default Button;

import { ButtonHTMLAttributes, forwardRef } from "react";
import { ArrowRight } from "lucide-react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "glass" | "outline";
    size?: "sm" | "md" | "lg";
    withArrow?: boolean;
    isLight?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className = "",
            variant = "primary",
            size = "md",
            withArrow = false,
            isLight = false,
            children,
            ...props
        },
        ref
    ) => {
        const baseStyles =
            "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

        const sizeStyles = {
            sm: "px-4 py-2 text-xs",
            md: "px-5 py-2.5 text-sm",
            lg: "px-8 py-3.5 text-base",
        };

        const getVariantStyles = () => {
            if (isLight) {
                switch (variant) {
                    case "primary":
                        return "bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-900";
                    case "secondary":
                        return "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-300";
                    case "outline":
                        return "border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white focus:ring-gray-900";
                    case "glass":
                        return "bg-white/80 backdrop-blur-xl border border-gray-200 text-gray-900 hover:bg-white focus:ring-gray-300";
                    default:
                        return "";
                }
            }
            // Dark theme styles
            switch (variant) {
                case "primary":
                    return "glass gradient-border text-white hover:bg-white/10 focus:ring-white/20";
                case "secondary":
                    return "bg-white/10 text-white hover:bg-white/20 focus:ring-white/20";
                case "outline":
                    return "border-2 border-white/20 text-white hover:bg-white/10 focus:ring-white/20";
                case "glass":
                    return "glass gradient-border text-white hover:bg-white/10 focus:ring-white/20";
                default:
                    return "";
            }
        };

        return (
            <button
                ref={ref}
                className={`group ${baseStyles} ${sizeStyles[size]} ${getVariantStyles()} ${className}`}
                {...props}
            >
                {children}
                {withArrow && (
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                )}
            </button>
        );
    }
);

Button.displayName = "Button";

export default Button;

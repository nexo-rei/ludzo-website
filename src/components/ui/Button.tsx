"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline" | "telegram";
  size?: "sm" | "md" | "lg" | "xl";
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  href?: string;
  target?: string;
  as?: "button" | "a";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      loading = false,
      icon,
      iconPosition = "left",
      children,
      className,
      disabled,
      href,
      target,
      as: Tag = "button",
      ...props
    },
    ref
  ) => {
    const base =
      "relative inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 cursor-pointer select-none overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/70 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary:
        "bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-neon hover:shadow-neon-lg hover:from-purple-500 hover:to-violet-500 active:scale-[0.98]",
      secondary:
        "bg-white/10 text-white border border-white/20 hover:bg-white/15 hover:border-white/30 active:scale-[0.98] backdrop-blur-sm",
      ghost:
        "text-purple-300 hover:text-white hover:bg-purple-500/15 active:scale-[0.98]",
      outline:
        "border border-purple-500/50 text-purple-300 hover:border-purple-400 hover:text-white hover:bg-purple-500/10 active:scale-[0.98]",
      telegram:
        "bg-[#229ED9] text-white hover:bg-[#1d8fbf] shadow-[0_0_20px_rgba(34,158,217,0.4)] hover:shadow-[0_0_35px_rgba(34,158,217,0.6)] active:scale-[0.98]",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm h-9",
      md: "px-5 py-2.5 text-sm h-10",
      lg: "px-7 py-3 text-base h-12",
      xl: "px-9 py-4 text-lg h-14",
    };

    const classes = cn(base, variants[variant], sizes[size], className);

    const content = (
      <>
        {/* Shimmer overlay for primary */}
        {variant === "primary" && (
          <span className="absolute inset-0 shimmer-bg opacity-0 hover:opacity-100 transition-opacity duration-300" />
        )}
        {loading && (
          <svg
            className="animate-spin -ml-1 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        )}
        {icon && iconPosition === "left" && !loading && icon}
        <span className="relative z-10">{children}</span>
        {icon && iconPosition === "right" && !loading && icon}
      </>
    );

    if (href) {
      return (
        <a
          href={href}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className={classes}
        >
          {content}
        </a>
      );
    }

    return (
      <button ref={ref} disabled={disabled || loading} className={classes} {...props}>
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";

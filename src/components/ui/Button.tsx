import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "glass" | "sunset";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 select-none disabled:opacity-50 disabled:pointer-events-none rounded-xl active:scale-[0.98]";

    const sizeStyles = {
      sm: "h-9 px-3.5 text-xs tracking-wider uppercase font-semibold gap-1.5",
      md: "h-11 px-5 text-sm font-medium gap-2",
      lg: "h-13 px-7 text-base font-medium gap-2.5",
    };

    const variantStyles = {
      primary:
        "bg-gradient-to-r from-sky-500 to-cyan-400 hover:from-sky-400 hover:to-cyan-300 text-slate-950 font-semibold shadow-[0_0_20px_-3px_rgba(0,210,255,0.4)] hover:shadow-[0_0_28px_0_rgba(0,210,255,0.6)] border border-cyan-300/30",
      secondary:
        "bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-semibold shadow-[0_0_20px_-3px_rgba(139,92,246,0.35)] hover:shadow-[0_0_28px_0_rgba(139,92,246,0.55)] border border-violet-400/25",
      outline:
        "border border-slate-700/80 hover:border-cyan-400/60 bg-slate-950/40 hover:bg-slate-900/60 text-slate-200 hover:text-cyan-300 backdrop-blur-sm",
      ghost:
        "text-slate-300 hover:text-white hover:bg-white/5 active:bg-white/10",
      glass:
        "glass-panel hover:bg-slate-900/80 text-slate-100 hover:text-cyan-200 hover:border-cyan-400/30 shadow-lg",
      sunset:
        "bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 hover:from-amber-400 hover:to-rose-400 text-slate-950 font-semibold shadow-[0_0_22px_-4px_rgba(249,115,22,0.45)] border border-amber-300/30",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
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
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            ></path>
          </svg>
        )}
        {!isLoading && leftIcon}
        <span>{children}</span>
        {!isLoading && rightIcon}
      </button>
    );
  }
);

Button.displayName = "Button";

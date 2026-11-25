import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "electric" | "violet" | "sunset" | "neutral" | "emerald";
  size?: "sm" | "md";
  dot?: boolean;
}

export function Badge({
  className,
  variant = "electric",
  size = "md",
  dot = false,
  children,
  ...props
}: BadgeProps) {
  const sizeStyles = {
    sm: "px-2 py-0.5 text-[10px] tracking-wider uppercase font-semibold",
    md: "px-3 py-1 text-xs tracking-wider uppercase font-medium",
  };

  const variantStyles = {
    electric:
      "bg-cyan-950/70 text-cyan-300 border border-cyan-500/30 shadow-[0_0_12px_-2px_rgba(0,210,255,0.2)]",
    violet:
      "bg-purple-950/70 text-purple-300 border border-purple-500/30 shadow-[0_0_12px_-2px_rgba(168,85,247,0.2)]",
    sunset:
      "bg-amber-950/70 text-orange-300 border border-orange-500/30 shadow-[0_0_12px_-2px_rgba(249,115,22,0.2)]",
    neutral:
      "bg-slate-900/80 text-slate-300 border border-slate-700/60",
    emerald:
      "bg-emerald-950/70 text-emerald-300 border border-emerald-500/30 shadow-[0_0_12px_-2px_rgba(16,185,129,0.2)]",
  };

  const dotColors = {
    electric: "bg-cyan-400 shadow-[0_0_6px_#00d2ff]",
    violet: "bg-purple-400 shadow-[0_0_6px_#c084fc]",
    sunset: "bg-orange-400 shadow-[0_0_6px_#f97316]",
    neutral: "bg-slate-400",
    emerald: "bg-emerald-400 shadow-[0_0_6px_#34d399]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full select-none backdrop-blur-sm",
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {dot && <span className={cn("h-1.5 w-1.5 rounded-full animate-pulse", dotColors[variant])} />}
      {children}
    </span>
  );
}

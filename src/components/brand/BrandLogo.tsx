import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface BrandLogoProps {
  className?: string;
  variant?: "full" | "compact" | "mark-only";
  size?: "sm" | "md" | "lg";
}

export function BrandLogo({
  className,
  variant = "full",
  size = "md",
}: BrandLogoProps) {
  const sizeMap = {
    sm: { emblem: "h-8 w-8 text-xs", title: "text-lg", subtitle: "text-[9px]" },
    md: { emblem: "h-10 w-10 text-sm", title: "text-xl", subtitle: "text-[10px]" },
    lg: { emblem: "h-14 w-14 text-base", title: "text-2xl sm:text-3xl", subtitle: "text-xs" },
  };

  const currentSize = sizeMap[size];

  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-3 select-none transition-transform active:scale-[0.98]",
        className
      )}
      aria-label="MAGICA Homepage"
    >
      {/* Brand Emblem Container (accommodates original tiger artwork when placed) */}
      <div
        className={cn(
          "relative flex items-center justify-center rounded-xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 border border-cyan-400/30 shadow-[0_0_15px_-3px_rgba(0,210,255,0.3)] group-hover:border-cyan-400/60 group-hover:shadow-[0_0_22px_-2px_rgba(0,210,255,0.5)] transition-all duration-300 overflow-hidden",
          currentSize.emblem
        )}
      >
        {/* Subtle geometric Himalayan crest lines */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-400/20 via-transparent to-transparent opacity-70" />
        <span className="font-mono font-black tracking-tighter text-cyan-300 drop-shadow-[0_0_8px_rgba(0,210,255,0.7)]">
          M
        </span>
      </div>

      {variant !== "mark-only" && (
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span
              className={cn(
                "font-black tracking-[0.22em] uppercase text-white font-sans transition-colors group-hover:text-cyan-200",
                currentSize.title
              )}
            >
              MAGICA
            </span>
          </div>

          {variant === "full" && (
            <span
              className={cn(
                "font-medium tracking-[0.18em] uppercase text-slate-400 group-hover:text-slate-300 transition-colors",
                currentSize.subtitle
              )}
            >
              Powered by Oh Magic View
            </span>
          )}
        </div>
      )}
    </Link>
  );
}

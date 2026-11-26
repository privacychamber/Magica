import React from "react";
import { Info } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ProvisionalBannerProps {
  label?: string;
  message: string;
  className?: string;
}

export function ProvisionalBanner({
  label = "Provisional Notice",
  message,
  className,
}: ProvisionalBannerProps) {
  return (
    <div
      className={cn(
        "p-4 rounded-2xl bg-slate-900/80 border border-slate-700/60 backdrop-blur-md flex items-start gap-3 text-xs text-slate-300",
        className
      )}
    >
      <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0 mt-0.5">
        <Info className="h-4 w-4" />
      </div>
      <div>
        <span className="font-semibold uppercase tracking-wider text-cyan-300 font-mono mr-2">
          [{label}]
        </span>
        <span>{message}</span>
      </div>
    </div>
  );
}

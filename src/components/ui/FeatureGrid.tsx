import React from "react";
import { cn } from "@/lib/utils";

export interface FeatureItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export interface FeatureGridProps {
  features: FeatureItem[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export function FeatureGrid({
  features,
  columns = 3,
  className,
}: FeatureGridProps) {
  const colStyles = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={cn("grid gap-4 sm:gap-6", colStyles[columns], className)}>
      {features.map((feature) => {
        const Icon = feature.icon;
        return (
          <div
            key={feature.title}
            className="p-5 sm:p-6 rounded-2xl glass-card hover:border-cyan-400/30 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="h-10 w-10 rounded-xl bg-slate-900/90 border border-slate-700/70 flex items-center justify-center text-cyan-400 mb-4 shadow-sm">
                <Icon className="h-5 w-5" />
              </div>
              <h4 className="text-base font-bold text-white mb-1.5">
                {feature.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
                {feature.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

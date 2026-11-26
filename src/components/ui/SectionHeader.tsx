import React from "react";
import { Badge, BadgeProps } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export interface SectionHeaderProps {
  badge?: string;
  badgeVariant?: BadgeProps["variant"];
  title: string;
  titleHighlight?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  action?: React.ReactNode;
}

export function SectionHeader({
  badge,
  badgeVariant = "electric",
  title,
  titleHighlight,
  description,
  align = "left",
  className,
  action,
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col mb-12",
        isCenter ? "items-center text-center max-w-3xl mx-auto" : "max-w-2xl",
        className
      )}
    >
      <div className="flex items-center justify-between w-full">
        <div className={cn("space-y-3", isCenter && "w-full")}>
          {badge && (
            <Badge variant={badgeVariant} size="md" dot>
              {badge}
            </Badge>
          )}

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight">
            {title}{" "}
            {titleHighlight && (
              <span className="text-gradient-electric">{titleHighlight}</span>
            )}
          </h2>

          {description && (
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              {description}
            </p>
          )}
        </div>

        {action && !isCenter && <div className="hidden sm:block shrink-0">{action}</div>}
      </div>

      {action && !isCenter && <div className="sm:hidden mt-4">{action}</div>}
    </div>
  );
}

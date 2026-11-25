"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { NAV_LINKS } from "@/components/layout/Navbar";
import { X, Sparkles, MapPin, QrCode, UserCheck } from "lucide-react";

export interface MobileNavDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNavDrawer({ isOpen, onClose }: MobileNavDrawerProps) {
  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex lg:hidden">
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Slide-out Drawer Panel */}
      <div className="relative ml-auto flex h-full w-full max-w-sm flex-col bg-slate-950 border-l border-white/10 p-6 shadow-2xl overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-white/5">
          <BrandLogo size="sm" variant="full" />
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Location & Regional Indicator */}
        <div className="my-5 p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
            <MapPin className="h-4 w-4 text-cyan-400" />
            <span>Kasol, Parvati Valley</span>
          </div>
          <Badge variant="neutral" size="sm">
            Himalayan Stay
          </Badge>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-1.5 flex-1">
          {NAV_LINKS.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={onClose}
                className="group flex items-center justify-between p-3 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/5 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-slate-300 group-hover:text-cyan-400 group-hover:border-cyan-400/30 transition-all">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white group-hover:text-cyan-200 transition-colors">
                      {link.name}
                    </p>
                    <p className="text-[11px] text-slate-400 line-clamp-1">
                      {link.description}
                    </p>
                  </div>
                </div>
                <Badge variant="neutral" size="sm">
                  {link.badge}
                </Badge>
              </Link>
            );
          })}
        </nav>

        {/* Quick Action Buttons */}
        <div className="pt-6 space-y-2.5 border-t border-white/5">
          <Link href="/eat" onClick={onClose} className="block w-full">
            <Button
              variant="outline"
              size="md"
              className="w-full"
              leftIcon={<QrCode className="h-4 w-4 text-amber-400" />}
            >
              QR Table Food Order
            </Button>
          </Link>

          <Link href="/stay" onClick={onClose} className="block w-full">
            <Button
              variant="primary"
              size="md"
              className="w-full"
              leftIcon={<Sparkles className="h-4 w-4" />}
            >
              Book Stay / Bed
            </Button>
          </Link>

          <Link href="/account" onClick={onClose} className="block w-full">
            <Button
              variant="ghost"
              size="sm"
              className="w-full text-slate-400"
              leftIcon={<UserCheck className="h-4 w-4" />}
            >
              My Tickets & Bookings
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

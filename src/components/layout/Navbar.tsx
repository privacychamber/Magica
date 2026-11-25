"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { Button } from "@/components/ui/Button";
import { MobileNavDrawer } from "@/components/layout/MobileNavDrawer";
import {
  Menu,
  Sparkles,
  CalendarDays,
  Compass,
  UtensilsCrossed,
  Music,
  BedDouble,
  UserCheck,
} from "lucide-react";

export const NAV_LINKS = [
  {
    name: "Stay",
    href: "/stay",
    icon: BedDouble,
    badge: "Riverside",
    description: "Boutique dorms & private mountain suites",
  },
  {
    name: "Eat",
    href: "/eat",
    icon: UtensilsCrossed,
    badge: "Cafe & QR",
    description: "Parvati Valley cafe, organic bites & table ordering",
  },
  {
    name: "Celebrate",
    href: "/celebrate",
    icon: CalendarDays,
    badge: "Events",
    description: "Underground electronic music nights & parties",
  },
  {
    name: "Explore",
    href: "/explore",
    icon: Compass,
    badge: "Treks",
    description: "Guided Himalayan expeditions & transport",
  },
  {
    name: "Music",
    href: "/music",
    icon: Music,
    badge: "DJ Sets",
    description: "KingUrjapati audio hub & exclusive releases",
  },
];

export function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full glass-panel border-b border-white/5 transition-all duration-200">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Brand Identity */}
          <div className="flex items-center gap-6">
            <BrandLogo size="md" variant="full" />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_LINKS.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group relative flex items-center gap-2 px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-xl hover:bg-white/5 transition-all duration-200"
                >
                  <Icon className="h-4 w-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center gap-3">
            {/* Live Kasol Vibe Pill (Desktop) */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/60 border border-slate-700/50 text-[11px] font-medium text-slate-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
              <span>Kasol • Parvati Valley</span>
            </div>

            {/* Account / Bookings Link */}
            <Link href="/account" className="hidden sm:inline-flex">
              <Button
                variant="ghost"
                size="sm"
                leftIcon={<UserCheck className="h-4 w-4 text-slate-300" />}
              >
                My Bookings
              </Button>
            </Link>

            {/* Quick Primary Action */}
            <Link href="/stay">
              <Button
                variant="primary"
                size="sm"
                leftIcon={<Sparkles className="h-3.5 w-3.5" />}
              >
                Book Now
              </Button>
            </Link>

            {/* Mobile Menu Trigger */}
            <button
              type="button"
              onClick={() => setIsMobileOpen(true)}
              className="lg:hidden flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900/80 border border-slate-700/60 text-slate-200 hover:text-white hover:border-cyan-400/40 focus:outline-none transition-colors"
              aria-label="Open mobile menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileNavDrawer
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
      />
    </>
  );
}

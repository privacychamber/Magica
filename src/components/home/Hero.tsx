"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Sparkles,
  BedDouble,
  UtensilsCrossed,
  CalendarDays,
  Compass,
  ArrowRight,
  Music,
} from "lucide-react";

export function Hero() {
  const [activeTab, setActiveTab] = useState<"stay" | "eat" | "celebrate" | "explore">("stay");

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-12 pb-24">
      {/* Cinematic Ambient Himalayan Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-cyan-500/15 via-violet-600/10 to-transparent blur-[120px] pointer-events-none -z-10" />
      <div className="absolute -top-20 right-0 w-[450px] h-[450px] bg-amber-500/10 blur-[140px] pointer-events-none -z-10" />

      {/* Subtle Himalayan Mountain Silhouette Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] opacity-25 pointer-events-none -z-10" />

      <Container className="relative z-10 text-center">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6">
          <Badge variant="electric" size="md" dot>
            Kasol • Parvati Valley
          </Badge>
          <Badge variant="violet" size="md">
            Underground Sound & Stays
          </Badge>
          <Badge variant="sunset" size="md">
            Kasol Elevation: ~1,580m
          </Badge>
        </div>

        {/* Main Brand Title & Tagline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white mb-6">
          <span className="block text-gradient-electric">Stay. Eat. Celebrate.</span>
          <span className="block text-white/95 mt-1 sm:mt-2">Feel the Magic.</span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed font-light mb-10">
          Where ancient Himalayan pine forests meet underground electronic music and boutique hospitality.
          Book your riverside bed, order cafe dishes to your table via QR, and embark on high-altitude treks.
        </p>

        {/* Primary CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link href="/stay" className="w-full sm:w-auto">
            <Button
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
              leftIcon={<Sparkles className="h-4 w-4" />}
            >
              Explore Stays & Dorms
            </Button>
          </Link>
          <Link href="/eat" className="w-full sm:w-auto">
            <Button
              variant="glass"
              size="lg"
              className="w-full sm:w-auto"
              leftIcon={<UtensilsCrossed className="h-4 w-4 text-amber-400" />}
            >
              Cafe & QR Dining
            </Button>
          </Link>
          <Link href="/music" className="w-full sm:w-auto">
            <Button
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
              leftIcon={<Music className="h-4 w-4 text-purple-300" />}
            >
              KingUrjapati Hub
            </Button>
          </Link>
        </div>

        {/* Quick Booking & Discovery Strip (Demonstration) */}
        <div className="mx-auto max-w-4xl glass-panel-elevated rounded-2xl p-4 sm:p-5 text-left">
          {/* Tab Selection */}
          <div className="flex items-center gap-2 pb-4 border-b border-white/5 overflow-x-auto">
            <button
              type="button"
              onClick={() => setActiveTab("stay")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all ${
                activeTab === "stay"
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-[0_0_12px_rgba(0,210,255,0.25)]"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <BedDouble className="h-4 w-4" />
              <span>Rooms & Beds</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("eat")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all ${
                activeTab === "eat"
                  ? "bg-amber-500/20 text-orange-300 border border-orange-400/40 shadow-[0_0_12px_rgba(249,115,22,0.25)]"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <UtensilsCrossed className="h-4 w-4" />
              <span>Table Ordering</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("celebrate")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all ${
                activeTab === "celebrate"
                  ? "bg-purple-500/20 text-purple-300 border border-purple-400/40 shadow-[0_0_12px_rgba(139,92,246,0.25)]"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <CalendarDays className="h-4 w-4" />
              <span>Party Passes</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("explore")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all ${
                activeTab === "explore"
                  ? "bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 shadow-[0_0_12px_rgba(16,185,129,0.25)]"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <Compass className="h-4 w-4" />
              <span>Treks & Tours</span>
            </button>
          </div>

          {/* Interactive Form Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 items-end">
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                {activeTab === "stay"
                  ? "Check-In / Out"
                  : activeTab === "eat"
                  ? "Dining Mode"
                  : activeTab === "celebrate"
                  ? "Event Date"
                  : "Experience"}
              </label>
              <div className="h-11 px-3.5 rounded-xl bg-slate-900/90 border border-slate-700/70 flex items-center text-sm text-slate-200">
                {activeTab === "stay"
                  ? "Select travel dates"
                  : activeTab === "eat"
                  ? "Dine-in (QR Table) / Takeaway"
                  : activeTab === "celebrate"
                  ? "This Weekend / DJ Night"
                  : "Grahan Village / Kheerganga"}
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                {activeTab === "stay"
                  ? "Accommodation"
                  : activeTab === "eat"
                  ? "Table / Guest Count"
                  : activeTab === "celebrate"
                  ? "Ticket Tier"
                  : "Group Size"}
              </label>
              <div className="h-11 px-3.5 rounded-xl bg-slate-900/90 border border-slate-700/70 flex items-center text-sm text-slate-200">
                {activeTab === "stay"
                  ? "Dorm Bed / Private Room"
                  : activeTab === "eat"
                  ? "Table # (Scan QR on table)"
                  : activeTab === "celebrate"
                  ? "General / VIP Deck"
                  : "1 - 8 Trekkers"}
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                Guests / Contact
              </label>
              <div className="h-11 px-3.5 rounded-xl bg-slate-900/90 border border-slate-700/70 flex items-center text-sm text-slate-200">
                1 Adult Guest
              </div>
            </div>

            <div>
              <Link
                href={
                  activeTab === "stay"
                    ? "/stay"
                    : activeTab === "eat"
                    ? "/eat"
                    : activeTab === "celebrate"
                    ? "/celebrate"
                    : "/explore"
                }
              >
                <Button variant="primary" size="md" className="w-full">
                  <span>Search Availability</span>
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

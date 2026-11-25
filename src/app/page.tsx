import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { ExperiencePillars } from "@/components/home/ExperiencePillars";
import { MusicFeature } from "@/components/home/MusicFeature";
import { EventsPreview } from "@/components/home/EventsPreview";
import { DestinationGuide } from "@/components/home/DestinationGuide";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Sticky Global Navigation Header */}
      <Navbar />

      {/* Main Page Sections */}
      <main className="flex-1">
        <Hero />
        <ExperiencePillars />
        <MusicFeature />
        <EventsPreview />
        <DestinationGuide />
      </main>

      {/* Persistent Global Footer */}
      <Footer />
    </div>
  );
}

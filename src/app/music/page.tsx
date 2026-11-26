"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProvisionalBanner } from "@/components/ui/ProvisionalBanner";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import {
  Disc3,
  Play,
  Pause,
  Radio,
  Volume2,
  CalendarDays,
  Flame,
  Waves,
  Headphones,
} from "lucide-react";

export default function MusicPage() {
  const [activeTrack, setActiveTrack] = useState<string>("track-1");
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const releases = [
    {
      id: "track-1",
      title: "Hypnotic Echoes of Kasol",
      type: "Live Recorded Set",
      genre: "Peak Time Psytech",
      duration: "1h 12m",
      bpm: 138,
      key: "F# Minor",
      year: "2026",
      description:
        "Recorded live during the autumn equinox at MAGICA Riverside Deck. Merges deep rolling sub-basslines, hypnotic acid sequences, and authentic mountain stream acoustics.",
    },
    {
      id: "track-2",
      title: "Parvati Solstice Ritual",
      type: "Original Mix",
      genre: "Forest Progressive",
      duration: "8m 45s",
      bpm: 134,
      key: "A Minor",
      year: "2026",
      description:
        "Organic percussion, Tibetan singing bowl resonances, and driving psychedelic rhythms created in the MAGICA studio chalets at 1,580 meters elevation.",
    },
    {
      id: "track-3",
      title: "Midnight River Resonance",
      type: "Downtempo EP",
      genre: "Ambient & Chillout",
      duration: "34m 20s",
      bpm: 105,
      key: "D Minor",
      year: "2026",
      description:
        "Designed for late-night bonfire contemplation, deep listening, and restorative post-trek unwinding by the cold glacial waters.",
    },
    {
      id: "track-4",
      title: "Grahan Morning Frequencies",
      type: "Extended Set",
      genre: "Organic Melodic Techno",
      duration: "1h 48m",
      bpm: 126,
      key: "E Minor",
      year: "2026",
      description:
        "Sunrise melodic frequencies capturing the first morning light illuminating the snow peaks above the Parvati Valley ridge.",
    },
  ];

  const musicSpecs = [
    {
      icon: Headphones,
      title: "24-Bit Audiophile Mastering",
      description: "Sets and studio releases mixed and mastered to preserve dynamic range and crystal clarity at peak festival decibels.",
    },
    {
      icon: Radio,
      title: "Custom Sound System",
      description: "Proprietary acoustic tuning engineered specifically to harmonize with the natural sound of rushing river water.",
    },
    {
      icon: Flame,
      title: "Valley Residency",
      description: "Resident performances at MAGICA DJ nights, full moon gatherings, and exclusive electronic music retreats.",
    },
    {
      icon: Waves,
      title: "Organic Mountain Sampling",
      description: "Field recordings of Himalayan thunder, temple bells, mountain pine breezes, and glacial stream flows embedded into track architecture.",
    },
  ];

  const musicFAQs = [
    {
      question: "Where can I listen to KingUrjapati's full DJ sets?",
      answer:
        "Full-length sets, studio releases, and live festival recordings will be integrated into the MAGICA audio player and streamed across SoundCloud, Spotify, and YouTube upon launch.",
    },
    {
      question: "Does KingUrjapati perform at every MAGICA event?",
      answer:
        "DJ Pratap (KingUrjapati) performs as resident artist at all signature MAGICA gatherings, solstices, and curated electronic weekend nights, alongside visiting guest artists.",
    },
    {
      question: "Are guest producer collaborations and demo submissions accepted?",
      answer:
        "Yes, MAGICA is an open creative ecosystem for electronic music artists. Dedicated guest DJ showcase nights and artist residency slots are hosted every season.",
    },
  ];

  const currentTrackData = releases.find((r) => r.id === activeTrack) || releases[0];

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Navbar />

      <main className="flex-1 py-12 sm:py-16">
        <Container>
          {/* Provisional Banner */}
          <ProvisionalBanner
            label="Artist Demonstration Notice"
            message="Audio playback bar and tracklists below represent our demonstration music player showcase. Official release masters, live stream links, and downloadable sets will be hosted upon seasonal premiere."
            className="mb-10"
          />

          {/* Hero Header */}
          <SectionHeader
            badge="Resident Artist & Founder"
            title="DJ Pratap •"
            titleHighlight="KingUrjapati"
            description="High-altitude soundscapes, hypnotic basslines, and organic mountain frequencies at 1,580m elevation. MAGICA serves as the physical home, testing ground, and sanctuary for KingUrjapati releases and underground gatherings."
          />

          {/* Featured Audio Player Card (Demonstration) */}
          <div className="p-8 sm:p-10 rounded-3xl glass-panel-elevated border border-white/10 mb-20 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Graphic Vinyl Visualizer */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center">
                <div className="relative aspect-square w-full max-w-[280px] rounded-3xl bg-gradient-to-br from-purple-950 via-slate-900 to-slate-950 border border-purple-500/30 shadow-[0_0_40px_rgba(139,92,246,0.25)] flex items-center justify-center overflow-hidden">
                  <div
                    className={`h-40 w-40 rounded-full border-2 border-purple-400/40 flex items-center justify-center transition-transform duration-1000 ${
                      isPlaying ? "animate-spin" : ""
                    }`}
                  >
                    <Disc3 className="h-28 w-28 text-purple-300" />
                  </div>
                  <div className="absolute bottom-3 left-4 text-[11px] font-mono text-purple-300">
                    MAGICA SOUND VAULT
                  </div>
                </div>
              </div>

              {/* Player Controls & Track Info */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="violet" size="sm">
                      {currentTrackData.genre}
                    </Badge>
                    <span className="text-xs text-slate-400 font-mono">
                      {currentTrackData.type} • {currentTrackData.year}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    {currentTrackData.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed font-light mt-2">
                    {currentTrackData.description}
                  </p>
                </div>

                {/* Technical Meta */}
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 pt-1">
                  <span>Tempo: <strong className="text-white">{currentTrackData.bpm} BPM</strong></span>
                  <span>•</span>
                  <span>Root Key: <strong className="text-white">{currentTrackData.key}</strong></span>
                  <span>•</span>
                  <span>Duration: <strong className="text-white">{currentTrackData.duration}</strong></span>
                </div>

                {/* Progress Bar */}
                <div className="space-y-1.5">
                  <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 rounded-full transition-all duration-300"
                      style={{ width: isPlaying ? "46%" : "0%" }}
                    />
                  </div>
                  <div className="flex justify-between text-[11px] font-mono text-slate-400">
                    <span>{isPlaying ? "32:15" : "00:00"}</span>
                    <span>{currentTrackData.duration}</span>
                  </div>
                </div>

                {/* Action Controls */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-4">
                    <button
                      type="button"
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_25px_rgba(139,92,246,0.5)] hover:shadow-purple-500/75 active:scale-95 transition-all"
                      aria-label={isPlaying ? "Pause stream" : "Play stream"}
                    >
                      {isPlaying ? (
                        <Pause className="h-6 w-6" />
                      ) : (
                        <Play className="h-6 w-6 ml-0.5" />
                      )}
                    </button>
                    <div className="text-xs text-slate-200">
                      <span className="font-bold block text-sm">
                        {isPlaying ? "Streaming Demonstration Set" : "Listen to Stream Preview"}
                      </span>
                      <span className="text-slate-400 text-xs font-mono">
                        Master Studio Sound Demo
                      </span>
                    </div>
                  </div>

                  <Link href="/celebrate">
                    <Button variant="outline" size="sm" rightIcon={<CalendarDays className="h-4 w-4" />}>
                      Live Dates
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Discography & Sound Vault List */}
          <div className="mb-20">
            <SectionHeader
              badge="Sound Vault"
              title="Releases &"
              titleHighlight="Recorded Sets"
              description="Explore the sonic discography of DJ Pratap (KingUrjapati), ranging from high-energy midnight techno to ambient riverside dawn sessions."
            />

            <div className="space-y-4">
              {releases.map((track) => (
                <div
                  key={track.id}
                  onClick={() => {
                    setActiveTrack(track.id);
                    setIsPlaying(true);
                  }}
                  className={`p-5 sm:p-6 rounded-2xl glass-card border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                    activeTrack === track.id
                      ? "border-purple-400/50 bg-purple-950/20 shadow-[0_0_20px_rgba(139,92,246,0.15)]"
                      : "border-white/5 hover:border-white/10"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`h-10 w-10 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                        activeTrack === track.id
                          ? "bg-purple-600 text-white shadow-md"
                          : "bg-slate-900 border border-slate-700/60 text-slate-400"
                      }`}
                    >
                      {activeTrack === track.id && isPlaying ? (
                        <Volume2 className="h-5 w-5 animate-pulse" />
                      ) : (
                        <Play className="h-5 w-5 ml-0.5" />
                      )}
                    </div>

                    <div>
                      <h4 className="text-base font-bold text-white">
                        {track.title}
                      </h4>
                      <p className="text-xs text-slate-400 font-mono mt-0.5">
                        {track.genre} • {track.bpm} BPM • {track.duration}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0 sm:self-center">
                    <Badge variant="violet" size="sm">
                      {track.type}
                    </Badge>
                    <span className="text-xs text-cyan-300 font-mono font-semibold">
                      {activeTrack === track.id ? "Now Playing" : "Tap to Play"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sound Architecture Highlights */}
          <div className="mb-20">
            <SectionHeader
              align="center"
              badge="Engineering"
              title="Acoustic Art &"
              titleHighlight="Production Philosophy"
              description="Fusing ancient Himalayan vibration with modern modular synthesis and high-precision electronic mastering."
            />
            <FeatureGrid features={musicSpecs} columns={4} />
          </div>

          {/* Music FAQs */}
          <div className="max-w-3xl mx-auto mb-16">
            <SectionHeader
              align="center"
              badge="Artist Information"
              title="Music & Bookings"
              titleHighlight="FAQ"
              description="Learn more about artist appearances, guest collaborations, and sound design."
            />
            <FAQAccordion items={musicFAQs} />
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}

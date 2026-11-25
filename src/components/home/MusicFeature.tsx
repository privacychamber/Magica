"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Play,
  Pause,
  Radio,
  Disc3,
  Sparkles,
  Volume2,
} from "lucide-react";

export function MusicFeature() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-24 relative overflow-hidden bg-slate-950/80">
      {/* Ambient Violet/Electric Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 blur-[150px] pointer-events-none -z-10" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Artist Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <Badge variant="violet" size="md" dot>
                Resident Artist & Founder
              </Badge>
              <Badge variant="neutral" size="md">
                Parvati Sound System
              </Badge>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              DJ Pratap <span className="text-gradient-mystic">KingUrjapati</span>
            </h2>

            <p className="text-base text-slate-300 leading-relaxed font-light">
              Crafting sonic journeys at 1,580 meters elevation. KingUrjapati merges hypnotic basslines,
              psychedelic soundscapes, organic mountain rhythms, and driving underground techno. MAGICA serves
              as the physical sanctuary and testing ground for his releases, sets, and curated electronic nights.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl glass-card">
                <span className="block text-2xl font-black text-white">100+</span>
                <span className="text-xs text-slate-400 uppercase tracking-wider font-mono">
                  Valley Sets
                </span>
              </div>
              <div className="p-4 rounded-2xl glass-card">
                <span className="block text-2xl font-black text-cyan-400">138</span>
                <span className="text-xs text-slate-400 uppercase tracking-wider font-mono">
                  Peak BPM
                </span>
              </div>
              <div className="p-4 rounded-2xl glass-card">
                <span className="block text-2xl font-black text-purple-400">24 Bit</span>
                <span className="text-xs text-slate-400 uppercase tracking-wider font-mono">
                  Audiophile Sound
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link href="/music">
                <Button
                  variant="secondary"
                  size="md"
                  leftIcon={<Disc3 className="h-4 w-4" />}
                >
                  Listen to KingUrjapati
                </Button>
              </Link>
              <Link href="/celebrate">
                <Button
                  variant="outline"
                  size="md"
                  leftIcon={<Sparkles className="h-4 w-4 text-cyan-400" />}
                >
                  See Next Live Performance
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Sound Player Card (Demonstration) */}
          <div className="lg:col-span-5">
            <div className="glass-panel-elevated rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <Radio className="h-4 w-4 text-purple-400 animate-pulse" />
                  <span>DEMONSTRATION PLAYER</span>
                </div>
                <Badge variant="violet" size="sm">
                  Parvati Mix #04
                </Badge>
              </div>

              {/* Graphic Vinyl / Frequency Visual */}
              <div className="relative aspect-video rounded-2xl bg-gradient-to-br from-purple-950/60 via-slate-900 to-slate-950 border border-white/10 flex items-center justify-center overflow-hidden mb-6">
                <div
                  className={`h-24 w-24 rounded-full border-2 border-purple-400/40 flex items-center justify-center transition-transform duration-1000 ${
                    isPlaying ? "animate-spin" : ""
                  }`}
                >
                  <Disc3 className="h-16 w-16 text-purple-300" />
                </div>
                <div className="absolute bottom-3 left-3 text-[11px] font-mono text-slate-400">
                  KingUrjapati • Parvati Solstice Live
                </div>
              </div>

              {/* Track Details */}
              <div className="mb-4">
                <h4 className="text-lg font-bold text-white">
                  Hypnotic Echoes of Kasol (Live Set)
                </h4>
                <p className="text-xs text-slate-400 font-mono mt-0.5">
                  KingUrjapati • Psychedelic Techno • 138 BPM
                </p>
              </div>

              {/* Timeline bar */}
              <div className="space-y-1.5 mb-6">
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full transition-all duration-300"
                    style={{ width: isPlaying ? "42%" : "0%" }}
                  />
                </div>
                <div className="flex justify-between text-[10px] font-mono text-slate-400">
                  <span>{isPlaying ? "28:14" : "00:00"}</span>
                  <span>1:12:45</span>
                </div>
              </div>

              {/* Player Controls */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg hover:shadow-purple-500/25 active:scale-95 transition-all"
                    aria-label={isPlaying ? "Pause track" : "Play track"}
                  >
                    {isPlaying ? (
                      <Pause className="h-5 w-5" />
                    ) : (
                      <Play className="h-5 w-5 ml-0.5" />
                    )}
                  </button>
                  <div className="text-xs text-slate-300 font-medium">
                    {isPlaying ? "Playing Demo Stream" : "Tap to Preview Demo"}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-slate-400 text-xs">
                  <Volume2 className="h-4 w-4" />
                  <span className="font-mono text-[11px]">Demo Audio</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

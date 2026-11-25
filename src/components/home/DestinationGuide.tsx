import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Compass,
  Mountain,
  Sun,
  PhoneCall,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";

export function DestinationGuide() {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-950/60 border-t border-white/5">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Geographic & Spiritual Overview */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <Badge variant="electric" size="md">
                Parvati Valley Destination
              </Badge>
              <Badge variant="neutral" size="md">
                Himachal Pradesh
              </Badge>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
              Kasol & The Mystical Parvati Valley
            </h2>

            <p className="text-base text-slate-300 leading-relaxed font-light">
              Nestled along the glacial waters of the Parvati River, Kasol is a global sanctuary for free spirits,
              backpackers, trekkers, and lovers of underground electronic frequencies.
              Surrounded by pine-scented peaks and snow-capped Himalayan ridges, MAGICA is situated to offer
              peaceful riverside seclusion while remaining minutes from the village hub.
            </p>

            {/* Travel Essentials Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl glass-card">
                <div className="flex items-center gap-2 text-cyan-400 mb-1">
                  <Compass className="h-4 w-4" />
                  <span className="text-xs font-mono font-semibold uppercase">Kasol Center</span>
                </div>
                <p className="text-sm font-bold text-white font-mono">32.0100° N, 77.3150° E</p>
                <p className="text-[11px] text-slate-400">Kasol Valley Elevation: ~1,580m</p>
              </div>

              <div className="p-4 rounded-2xl glass-card">
                <div className="flex items-center gap-2 text-amber-400 mb-1">
                  <Sun className="h-4 w-4" />
                  <span className="text-xs font-mono font-semibold uppercase">Atmosphere</span>
                </div>
                <p className="text-sm font-bold text-white">Pleasant to Crisp</p>
                <p className="text-[11px] text-slate-400">Clear mountain nights</p>
              </div>

              <div className="p-4 rounded-2xl glass-card">
                <div className="flex items-center gap-2 text-purple-400 mb-1">
                  <Mountain className="h-4 w-4" />
                  <span className="text-xs font-mono font-semibold uppercase">Gateway</span>
                </div>
                <p className="text-sm font-bold text-white">Kheerganga & Grahan</p>
                <p className="text-[11px] text-slate-400">Direct trailhead access</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="/explore">
                <Button
                  variant="primary"
                  size="md"
                  rightIcon={<ArrowRight className="h-4 w-4" />}
                >
                  Explore Guided Treks & Transport
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="md"
                  leftIcon={<PhoneCall className="h-4 w-4" />}
                >
                  How to Reach Us
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: High-Impact Valley Info Panel */}
          <div className="lg:col-span-5">
            <div className="glass-panel-elevated rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-white">
                Getting to MAGICA
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-300 font-mono font-bold text-xs shrink-0">
                    1
                  </span>
                  <div>
                    <h5 className="font-semibold text-white">By Air (Bhuntar / KUU)</h5>
                    <p className="text-slate-400 text-xs mt-0.5">
                      Kullu-Manali Airport (Bhuntar) is 31 km away (~1 hour taxi drive along the river).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-300 font-mono font-bold text-xs shrink-0">
                    2
                  </span>
                  <div>
                    <h5 className="font-semibold text-white">By Road from Delhi / Chandigarh</h5>
                    <p className="text-slate-400 text-xs mt-0.5">
                      Overnight Volvo bus from Delhi to Bhuntar, followed by a scenic local cab or direct Magica transfer.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-300 font-mono font-bold text-xs shrink-0">
                    3
                  </span>
                  <div>
                    <h5 className="font-semibold text-white">At the Property</h5>
                    <p className="text-slate-400 text-xs mt-0.5">
                      Riverside location with secure luggage hold, 24/7 reception, high-speed Wi-Fi, and cafe.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center gap-3 text-xs text-amber-200">
                <ShieldAlert className="h-5 w-5 shrink-0 text-amber-400" />
                <span>
                  Mountain advice: Carry warm layers for evening DJ nights, comfortable trekking boots, and government-issued ID for check-in.
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

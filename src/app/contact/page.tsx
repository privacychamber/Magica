import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { MapPin, ArrowLeft, PhoneCall } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Navbar />
      <main className="flex-1 py-20">
        <Container>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <Badge variant="sunset" size="md" dot>
                Phase 1 Preview • CONTACT & LOCATION
              </Badge>
              <h1 className="text-4xl sm:text-6xl font-black uppercase text-white tracking-tight">
                Connect with MAGICA
              </h1>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
                Kasol, Parvati Valley, Himachal Pradesh, India
              </p>
            </div>

            <div className="p-8 rounded-3xl glass-panel-elevated border border-white/10 space-y-6 text-sm text-slate-300 leading-relaxed">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl glass-card space-y-2">
                  <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                    <MapPin className="h-4 w-4" />
                    <span>Property Destination</span>
                  </div>
                  <p className="text-xs text-slate-300">Kasol, Parvati Valley, Himachal Pradesh 175105, India</p>
                  <p className="text-[11px] font-mono text-slate-400">Kasol Center: 32.0100° N, 77.3150° E</p>
                </div>

                <div className="p-4 rounded-2xl glass-card space-y-2">
                  <div className="flex items-center gap-2 text-amber-400 font-semibold">
                    <PhoneCall className="h-4 w-4" />
                    <span>Official Communications</span>
                  </div>
                  <p className="text-xs text-slate-300">Official contact channels and emergency desk open at platform launch.</p>
                  <p className="text-[11px] font-mono text-slate-400">Kasol Regional Elevation: ~1,580m</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-500/20 text-xs text-amber-200">
                Direct WhatsApp booking concierge and reception desk numbers will be published upon operational launch.
              </div>
            </div>

            <div className="text-center pt-4">
              <Link href="/">
                <Button variant="outline" size="md" leftIcon={<ArrowLeft className="h-4 w-4" />}>
                  Back to Homepage
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

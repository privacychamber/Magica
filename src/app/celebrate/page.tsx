import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Ticket, ArrowLeft, CheckCircle2 } from "lucide-react";

export default function CelebratePage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Navbar />
      <main className="flex-1 py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="violet" size="md" dot>
              Phase 1 Preview • CELEBRATE Module
            </Badge>

            <h1 className="text-4xl sm:text-6xl font-black uppercase text-white tracking-tight">
              Events, Parties & Festival Passes
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
              Underground electronic gatherings, DJ nights, and mountain bonfires. Tiered ticketing with QR wallet delivery and fraud-proof gate validation.
            </p>

            <div className="p-8 rounded-3xl glass-panel-elevated border border-white/10 text-left space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Ticket className="h-5 w-5 text-purple-400" />
                <span>Ticketing & Check-in System (Phase 2/3)</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-300">
                <div className="p-4 rounded-2xl glass-card">
                  <h4 className="font-bold text-white">Tiered Ticket Engine</h4>
                  <p className="text-xs text-slate-400 mt-1">Early Bird, Phase 1, VIP Deck, and Group Passes with hard capacity limits.</p>
                  <p className="text-purple-300 font-bold mt-2">Instant QR Pass Delivery</p>
                </div>

                <div className="p-4 rounded-2xl glass-card">
                  <h4 className="font-bold text-white">Gatekeeper Scanner Mode</h4>
                  <p className="text-xs text-slate-400 mt-1">Mobile QR check-in scanner for staff to prevent ticket duplication.</p>
                  <p className="text-purple-300 font-bold mt-2">Real-time attendance roster</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-500/20 text-xs text-purple-200 flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-purple-400 mt-0.5" />
                <span>
                  Built-in ticket capacity locking and HMAC-signed webhook confirmation scheduled for upcoming phases.
                </span>
              </div>
            </div>

            <div className="pt-4">
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

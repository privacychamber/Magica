import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { BedDouble, ArrowLeft, CheckCircle2 } from "lucide-react";

export default function StayPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Navbar />
      <main className="flex-1 py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="electric" size="md" dot>
              Phase 1 Preview • STAY Module
            </Badge>

            <h1 className="text-4xl sm:text-6xl font-black uppercase text-white tracking-tight">
              Riverside Stays & Boutique Dorms
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
              Experience the roar of the Parvati River from luxury mixed dorms, female-only sanctuaries,
              and private balcony suites. Built with zero double-booking concurrency control.
            </p>

            <div className="p-8 rounded-3xl glass-panel-elevated border border-white/10 text-left space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <BedDouble className="h-5 w-5 text-cyan-400" />
                <span>Upcoming Inventory Catalog (Phase 2)</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-300">
                <div className="p-4 rounded-2xl glass-card">
                  <h4 className="font-bold text-white">6-Bed Parvati Mixed Dorm</h4>
                  <p className="text-xs text-slate-400 mt-1">High-speed Wi-Fi, personal locker, orthopaedic mattress.</p>
                  <p className="text-cyan-300 font-bold mt-2">Provisional Demo Rate: ₹800 / night</p>
                </div>

                <div className="p-4 rounded-2xl glass-card">
                  <h4 className="font-bold text-white">Parvati Riverside Balcony Suite</h4>
                  <p className="text-xs text-slate-400 mt-1">King bed, private mountain balcony, attached stone bath.</p>
                  <p className="text-cyan-300 font-bold mt-2">Provisional Demo Rate: ₹3,400 / night</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/20 text-xs text-cyan-200 flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-400 mt-0.5" />
                <span>
                  Anti-double-booking engine with 10-minute provisional holds and integer minor units (paise) ready for Phase 2 implementation.
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

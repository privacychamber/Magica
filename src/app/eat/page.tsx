import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { QrCode, ArrowLeft, CheckCircle2 } from "lucide-react";

export default function EatPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Navbar />
      <main className="flex-1 py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="sunset" size="md" dot>
              Phase 1 Preview • EAT Module
            </Badge>

            <h1 className="text-4xl sm:text-6xl font-black uppercase text-white tracking-tight">
              Parvati Cafe & QR Table Ordering
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
              Wood-fired pizzas, Tibetan specials, and mountain chai. Scan the QR code on your table for instant kitchen dispatch (KOT) with live status tracking.
            </p>

            <div className="p-8 rounded-3xl glass-panel-elevated border border-white/10 text-left space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <QrCode className="h-5 w-5 text-amber-400" />
                <span>QR Table Ordering Workflow (Phase 2/3)</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-300">
                <div className="p-4 rounded-2xl glass-card">
                  <h4 className="font-bold text-white">Dine-In Table Orders</h4>
                  <p className="text-xs text-slate-400 mt-1">Scan table QR (`?table=T07`) to bind order to your physical seat.</p>
                  <p className="text-amber-300 font-bold mt-2">Pay online or at counter</p>
                </div>

                <div className="p-4 rounded-2xl glass-card">
                  <h4 className="font-bold text-white">Takeaway Dispatch</h4>
                  <p className="text-xs text-slate-400 mt-1">Pre-order for trail walks and pick up from the cafe counter.</p>
                  <p className="text-amber-300 font-bold mt-2">Live KDS status updates</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-500/20 text-xs text-amber-200 flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-amber-400 mt-0.5" />
                <span>
                  Digital menu categories, modifiers, and Kitchen Order Display (KOT) workflows scheduled for Phase 2.
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

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowLeft } from "lucide-react";

export default function OrderStatusPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Navbar />
      <main className="flex-1 py-20">
        <Container>
          <div className="max-w-3xl mx-auto space-y-6 text-center">
            <Badge variant="sunset" size="md">
              Phase 1 Preview • KITCHEN ORDER TRACKER
            </Badge>
            <h1 className="text-3xl sm:text-5xl font-black uppercase text-white">
              Live Order Tracker
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Track the preparation and delivery of your Parvati cafe dishes in real-time.
            </p>
            <div className="p-8 rounded-3xl glass-panel-elevated border border-white/10 text-left space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-slate-400">ORDER #DEMO-001</span>
                  <h4 className="text-lg font-bold text-white">Table T-07 • Riverside Deck</h4>
                </div>
                <Badge variant="sunset" size="sm">
                  In Kitchen
                </Badge>
              </div>

              {/* Status Stepper */}
              <div className="grid grid-cols-4 gap-2 text-center text-xs">
                <div className="p-2.5 rounded-xl bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 font-semibold">
                  1. Received
                </div>
                <div className="p-2.5 rounded-xl bg-amber-950/60 border border-amber-500/40 text-amber-300 font-semibold">
                  2. In Kitchen
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-500">
                  3. Ready
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-500">
                  4. Served
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-500/20 text-xs text-amber-200">
                Live Kitchen Display System (KDS) and WebSocket order status sync scheduled for Phase 3/5.
              </div>
            </div>
            <div className="pt-4">
              <Link href="/eat">
                <Button variant="outline" size="md" leftIcon={<ArrowLeft className="h-4 w-4" />}>
                  Back to Cafe
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

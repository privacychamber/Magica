import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, QrCode } from "lucide-react";

export default function TicketWalletPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Navbar />
      <main className="flex-1 py-20">
        <Container>
          <div className="max-w-3xl mx-auto space-y-6 text-center">
            <Badge variant="violet" size="md">
              Phase 1 Preview • TICKET WALLET
            </Badge>
            <h1 className="text-3xl sm:text-5xl font-black uppercase text-white">
              Ticket & Pass Wallet
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Your verified offline QR passes for DJ nights, music festivals, and party entries.
            </p>
            <div className="p-8 rounded-3xl glass-panel-elevated border border-white/10 text-left space-y-4">
              <div className="flex items-center gap-2 text-purple-400 font-semibold">
                <QrCode className="h-5 w-5" />
                <span>Active Passes (Demo View)</span>
              </div>
              <p className="text-xs text-slate-400">
                Purchased tickets generate a unique cryptographic QR token displayed here and delivered to email/WhatsApp.
                Gate staff scan this code to grant instant entry.
              </p>
              <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-500/20 text-xs text-purple-200">
                Full ticket wallet with encrypted QR rendering scheduled for Phase 3.
              </div>
            </div>
            <div className="pt-4">
              <Link href="/account">
                <Button variant="outline" size="md" leftIcon={<ArrowLeft className="h-4 w-4" />}>
                  Back to Account
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

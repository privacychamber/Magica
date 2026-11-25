import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowLeft } from "lucide-react";

export default function CancellationPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Navbar />
      <main className="flex-1 py-20">
        <Container>
          <div className="max-w-3xl mx-auto space-y-6">
            <Badge variant="neutral" size="md">
              Refund Guidelines
            </Badge>
            <h1 className="text-3xl sm:text-5xl font-black uppercase text-white">
              Cancellation & Refunds
            </h1>
            <div className="p-8 rounded-3xl glass-panel-elevated border border-white/10 text-sm text-slate-300 space-y-4 leading-relaxed">
              <h3 className="text-lg font-bold text-white">1. Stay Cancellations</h3>
              <p>
                Cancellations made 48 hours prior to check-in are eligible for a partial refund or date reschedule, subject to seasonal demand.
              </p>
              <h3 className="text-lg font-bold text-white">2. Event Passes & Treks</h3>
              <p>
                Event tickets are non-refundable unless an event is officially postponed. In cases of severe weather road closures in Parvati Valley,
                trek bookings may be rescheduled without penalty.
              </p>
            </div>
            <div className="pt-4">
              <Link href="/policies">
                <Button variant="outline" size="md" leftIcon={<ArrowLeft className="h-4 w-4" />}>
                  Back to Policies
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

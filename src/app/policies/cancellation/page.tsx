import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowLeft } from "lucide-react";

export default function CancellationPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Navbar />

      <main className="flex-1 py-12 sm:py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Link href="/policies" className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 mb-6">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Policies Hub</span>
            </Link>

            <SectionHeader
              badge="Financial Transparency"
              title="Cancellation &"
              titleHighlight="Refund Policies"
              description="Last updated: November 2026 • Rules governing cancellations across accommodation, event passes, and trekking tours."
            />

            <div className="p-8 sm:p-10 rounded-3xl glass-panel-elevated border border-white/10 space-y-8 text-sm text-slate-300 leading-relaxed font-light">
              <section className="space-y-3">
                <h3 className="text-xl font-bold text-white">1. Stay & Room Cancellations</h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li><strong>Up to 48 Hours Prior to Check-In:</strong> Eligible for a 90% refund or 100% credit towards a future booking within 6 months.</li>
                  <li><strong>Within 48 Hours of Check-In:</strong> The first night’s tariff is non-refundable; subsequent nights are eligible for a 50% refund.</li>
                  <li><strong>No-Shows:</strong> 100% of the booking amount is forfeited.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h3 className="text-xl font-bold text-white">2. Event Passes & Festival Tickets</h3>
                <p>
                  Standard festival passes and DJ night tickets are non-refundable. However, tickets are fully transferable to another attendee
                  via the customer ticket wallet up to 4 hours prior to gate opening.
                </p>
                <p>
                  In the event that a gathering is officially canceled due to severe mountain weather road closures, full refunds or credits are issued automatically.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-xl font-bold text-white">3. Trekking & Expeditions</h3>
                <p>
                  Guided hikes to Grahan or Kheerganga canceled 24 hours prior are eligible for a full refund. Same-day cancellations due to
                  mountain safety advisories (heavy rain, landslides) receive complimentary rescheduling.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-xl font-bold text-white">4. Refund Processing Time</h3>
                <p>
                  Approved refunds are processed through the original payment method via Razorpay within 5–7 business days.
                </p>
              </section>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}

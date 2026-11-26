import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
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
              badge="Data Security"
              title="Privacy"
              titleHighlight="Policy"
              description="Last updated: November 2026 • How MAGICA safeguards customer identities, payments, and guest records."
            />

            <div className="p-8 sm:p-10 rounded-3xl glass-panel-elevated border border-white/10 space-y-8 text-sm text-slate-300 leading-relaxed font-light">
              <section className="space-y-3">
                <h3 className="text-xl font-bold text-white">1. Information We Collect</h3>
                <p>
                  We collect personal information necessary to deliver hospitality and ticketing services: full name, email address,
                  telephone number, government ID for check-in compliance, and cafe table order selections.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-xl font-bold text-white">2. Payment Secrecy & PCI-DSS Compliance</h3>
                <p>
                  <strong>We do not store credit card numbers, CVVs, or bank account credentials on our servers.</strong> All payment
                  transactions are processed through authorized, PCI-DSS Level 1 certified gateways (Razorpay). Webhooks are authenticated
                  using backend cryptographic signatures before updating any reservation state.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-xl font-bold text-white">3. Zero Third-Party Selling</h3>
                <p>
                  We will never sell, rent, or trade your personal data to advertisers or third-party marketing brokers. Your information
                  is used solely for property reservations, QR pass delivery, and vital safety updates in Parvati Valley.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-xl font-bold text-white">4. Data Retention & Deletion</h3>
                <p>
                  Guests can request the deletion of their customer profile and past booking metadata at any time by contacting
                  our data privacy desk, subject to statutory tax and hospitality compliance retention requirements.
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

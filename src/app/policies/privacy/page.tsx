import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Navbar />
      <main className="flex-1 py-20">
        <Container>
          <div className="max-w-3xl mx-auto space-y-6">
            <Badge variant="neutral" size="md">
              Data Protection
            </Badge>
            <h1 className="text-3xl sm:text-5xl font-black uppercase text-white">
              Privacy Policy
            </h1>
            <div className="p-8 rounded-3xl glass-panel-elevated border border-white/10 text-sm text-slate-300 space-y-4 leading-relaxed">
              <h3 className="text-lg font-bold text-white">1. Information We Collect</h3>
              <p>
                Guest names, phone numbers, and check-in government identification are collected strictly for hospitality compliance,
                ticket gate validation, and cafe order routing.
              </p>
              <h3 className="text-lg font-bold text-white">2. Payment Data</h3>
              <p>
                We do not store credit card or banking secrets on our servers. All financial transactions are processed securely via
                PCI-DSS certified payment gateways (Razorpay).
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

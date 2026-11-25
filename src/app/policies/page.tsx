import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowLeft } from "lucide-react";

export default function PoliciesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Navbar />
      <main className="flex-1 py-20">
        <Container>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <Badge variant="neutral" size="md">
                Phase 1 Preview • POLICIES
              </Badge>
              <h1 className="text-4xl sm:text-6xl font-black uppercase text-white tracking-tight">
                Platform Policies
              </h1>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
                Terms of Service, Guest Privacy, and Cancellation & Refund Frameworks
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Link href="/policies/terms" className="p-6 rounded-2xl glass-card hover:border-cyan-400/40 transition-all block">
                <h3 className="font-bold text-white text-lg mb-2">Terms & Conditions</h3>
                <p className="text-xs text-slate-400">Rules governing accommodation, cafe orders, and event passes.</p>
              </Link>

              <Link href="/policies/privacy" className="p-6 rounded-2xl glass-card hover:border-cyan-400/40 transition-all block">
                <h3 className="font-bold text-white text-lg mb-2">Privacy Policy</h3>
                <p className="text-xs text-slate-400">Data protection, guest identification, and zero secret leakage.</p>
              </Link>

              <Link href="/policies/cancellation" className="p-6 rounded-2xl glass-card hover:border-cyan-400/40 transition-all block">
                <h3 className="font-bold text-white text-lg mb-2">Refund Policy</h3>
                <p className="text-xs text-slate-400">Room hold expirations, bad weather trek policies, and ticket rules.</p>
              </Link>
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

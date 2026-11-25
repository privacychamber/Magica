import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Navbar />
      <main className="flex-1 py-20">
        <Container>
          <div className="max-w-3xl mx-auto space-y-6">
            <Badge variant="neutral" size="md">
              Legal Framework
            </Badge>
            <h1 className="text-3xl sm:text-5xl font-black uppercase text-white">
              Terms & Conditions
            </h1>
            <div className="p-8 rounded-3xl glass-panel-elevated border border-white/10 text-sm text-slate-300 space-y-4 leading-relaxed">
              <h3 className="text-lg font-bold text-white">1. General Overview</h3>
              <p>
                By using MAGICA (powered by Oh Magic View), guests agree to comply with Himachal Pradesh tourism regulations,
                respect mountain ecology, and follow venue guidelines during late-night music events.
              </p>
              <h3 className="text-lg font-bold text-white">2. Booking Integrity</h3>
              <p>
                Room and event tickets are provisional until authoritative payment capture is verified by the backend.
                Unpaid provisional holds release automatically after 10 minutes.
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

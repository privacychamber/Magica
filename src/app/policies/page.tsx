import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FileText, Shield, AlertCircle, ArrowRight } from "lucide-react";

export default function PoliciesPage() {
  const policyCards = [
    {
      title: "Terms & Conditions",
      icon: FileText,
      href: "/policies/terms",
      badge: "Governance",
      description:
        "General terms governing accommodation reservations, cafe ordering, event attendance, and community code of conduct at MAGICA.",
    },
    {
      title: "Privacy Policy",
      icon: Shield,
      href: "/policies/privacy",
      badge: "Security",
      description:
        "Our strict policy on guest data protection, payment secrecy, encrypted communication, and zero third-party commercial data leakage.",
    },
    {
      title: "Cancellation & Refunds",
      icon: AlertCircle,
      href: "/policies/cancellation",
      badge: "Financial",
      description:
        "Clear rules regarding room hold expirations, 48-hour stay cancellations, weather road closures, and event ticket rescheduling.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Navbar />

      <main className="flex-1 py-12 sm:py-16">
        <Container>
          <SectionHeader
            badge="Platform Governance"
            title="Legal & Operational"
            titleHighlight="Policies"
            description="MAGICA operates with complete transparency and business integrity. Review our terms of service, guest data privacy, and cancellation frameworks."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {policyCards.map((card) => {
              const Icon = card.icon;
              return (
                <Link
                  key={card.title}
                  href={card.href}
                  className="group p-8 rounded-3xl glass-panel border border-white/10 hover:border-cyan-400/40 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="h-12 w-12 rounded-2xl bg-slate-900 border border-slate-700/60 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                        <Icon className="h-6 w-6" />
                      </div>
                      <Badge variant="neutral" size="sm">
                        {card.badge}
                      </Badge>
                    </div>

                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-200 transition-colors">
                      {card.title}
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed font-light">
                      {card.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/5 flex items-center justify-between mt-6 text-xs font-mono text-cyan-300">
                    <span>Read Policy</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}

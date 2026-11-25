import React from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { MapPin, Mail, Compass } from "lucide-react";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="border-t border-white/5 bg-slate-950/95 text-slate-400 pt-16 pb-12 mt-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/5">
          {/* Column 1: Brand Info & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo size="lg" variant="full" />
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              An integrated Himalayan hospitality, underground electronic music,
              and local experiences ecosystem in the heart of Parvati Valley.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <Badge variant="violet" size="sm">
                DJ Pratap • KingUrjapati
              </Badge>
              <Badge variant="neutral" size="sm">
                Kasol Elevation: ~1,580m
              </Badge>
            </div>
          </div>

          {/* Column 2: Pillars */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-200">
              Platform Pillars
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/stay" className="hover:text-cyan-300 transition-colors">
                  Stay • Rooms & Dorms
                </Link>
              </li>
              <li>
                <Link href="/eat" className="hover:text-cyan-300 transition-colors">
                  Eat • Parvati Cafe & QR
                </Link>
              </li>
              <li>
                <Link href="/celebrate" className="hover:text-cyan-300 transition-colors">
                  Celebrate • Events & Passes
                </Link>
              </li>
              <li>
                <Link href="/explore" className="hover:text-cyan-300 transition-colors">
                  Explore • Treks & Guides
                </Link>
              </li>
              <li>
                <Link href="/music" className="hover:text-cyan-300 transition-colors">
                  Music • KingUrjapati Hub
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Guest & Operations */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-200">
              Guest Operations
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/account" className="hover:text-cyan-300 transition-colors">
                  Guest Dashboard
                </Link>
              </li>
              <li>
                <Link href="/account/tickets" className="hover:text-cyan-300 transition-colors">
                  Ticket & Pass Wallet
                </Link>
              </li>
              <li>
                <Link href="/eat/order-status" className="hover:text-cyan-300 transition-colors">
                  Live Kitchen Order Tracker
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-cyan-300 transition-colors">
                  About MAGICA
                </Link>
              </li>
              <li>
                <Link href="/policies" className="hover:text-cyan-300 transition-colors">
                  Booking & Refund Policies
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-200">
              Destination & Regional Center
            </h4>
            <div className="space-y-2.5 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Kasol, Parvati Valley, Himachal Pradesh 175105, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Compass className="h-4 w-4 text-slate-400 shrink-0" />
                <span className="font-mono text-xs">Kasol Center: 32.0100° N, 77.3150° E</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-slate-400 shrink-0" />
                <span className="text-xs text-slate-400 font-mono">Official contact channels open at launch</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} MAGICA. Powered by Oh Magic View. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/policies/terms" className="hover:text-slate-300 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/policies/privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/policies/cancellation" className="hover:text-slate-300 transition-colors">
              Cancellation & Refunds
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

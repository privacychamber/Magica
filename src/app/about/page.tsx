import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowLeft } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Navbar />
      <main className="flex-1 py-20">
        <Container>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <Badge variant="electric" size="md" dot>
                Phase 1 Preview • ABOUT MAGICA
              </Badge>
              <h1 className="text-4xl sm:text-6xl font-black uppercase text-white tracking-tight">
                The MAGICA Story
              </h1>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
                Stay. Eat. Celebrate. Feel the Magic.
              </p>
            </div>

            <div className="p-8 rounded-3xl glass-panel-elevated border border-white/10 space-y-6 text-sm text-slate-300 leading-relaxed">
              <h3 className="text-xl font-bold text-white">
                Powered by Oh Magic View • Kasol, Parvati Valley
              </h3>
              <p>
                Conceived by DJ Pratap (KingUrjapati) and the Oh Magic View family, MAGICA is an integrated hospitality,
                music, and mountain-experiences destination nestled along the roaring glacial waters of the Parvati River.
              </p>
              <p>
                We unite comfortable boutique stays, authentic mountain dining with digital QR ordering, underground electronic
                music gatherings, and certified Himalayan expeditions into one unified digital operating platform.
              </p>
              <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/20 text-xs text-cyan-200">
                Full editorial brand documentary, artist interviews, and history scheduled for publication in Phase 2.
              </div>
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

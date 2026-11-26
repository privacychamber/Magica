import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import { Mountain, Flame, Radio, HeartHandshake } from "lucide-react";

export default function AboutPage() {
  const pillars = [
    {
      icon: Mountain,
      title: "Himalayan Sanctuary",
      description: "Nestled along the glacial Parvati River, designed as a peaceful haven for travelers, creators, and nature lovers.",
    },
    {
      icon: Radio,
      title: "Underground Sound",
      description: "Founded by DJ Pratap (KingUrjapati) to foster cutting-edge electronic music, high-fidelity sound, and creative freedom.",
    },
    {
      icon: Flame,
      title: "Community Warmth",
      description: "Nightly cedar bonfires, shared dinners, and soulful conversations bridging cultures from around the world.",
    },
    {
      icon: HeartHandshake,
      title: "Conscious Tourism",
      description: "Partnering with native valley guides, local farmers, and practicing strict zero-plastic environmental stewardship.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Navbar />

      <main className="flex-1 py-12 sm:py-16">
        <Container>
          {/* Header */}
          <SectionHeader
            badge="The MAGICA Story"
            title="Where Sacred Peaks Meet"
            titleHighlight="Electronic Frequencies"
            description="MAGICA was born from a singular passion: uniting boutique Himalayan hospitality with underground electronic sound culture, organic dining, and sacred mountain exploration."
          />

          {/* Narrative Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            <div className="lg:col-span-7 space-y-6 text-sm sm:text-base text-slate-300 leading-relaxed font-light">
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Powered by Oh Magic View • Kasol Heritage
              </h3>
              <p>
                For years, travelers have journeyed to Parvati Valley in search of spiritual clarity, pine-scented seclusion,
                and high-energy music gatherings. Yet, finding a place that seamlessly bridges comfortable, modern accommodation
                with genuine underground culture remained rare.
              </p>
              <p>
                Founded by artist and producer <strong>DJ Pratap (KingUrjapati)</strong> alongside the hospitality veterans of
                <strong> Oh Magic View</strong>, MAGICA was created to be that sanctuary. A digital operating platform and physical
                destination where you can wake up to the roar of glacial river water, work comfortably with creator-speed fiber internet,
                savor wood-fired farm-fresh food, and dance to world-class electronic sound beneath millions of stars.
              </p>
              <p>
                Every facet of our operation is anchored to the sacred geography of Parvati Valley. We support native village guides,
                source organic produce from local orchards, and maintain a strict zero-trace mountain ethic.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="p-8 rounded-3xl glass-panel-elevated border border-white/10 space-y-6">
                <div className="flex items-center gap-2">
                  <Badge variant="electric" size="sm">
                    Kasol • Altitude 1,580m
                  </Badge>
                  <Badge variant="violet" size="sm">
                    Est. 2026
                  </Badge>
                </div>

                <div className="space-y-4">
                  <div className="border-l-2 border-cyan-400 pl-4 py-1">
                    <span className="block text-xs font-mono text-cyan-300 uppercase">Our Motto</span>
                    <p className="text-lg font-bold text-white mt-0.5">
                      Stay. Eat. Celebrate. Feel the Magic.
                    </p>
                  </div>

                  <div className="border-l-2 border-purple-400 pl-4 py-1">
                    <span className="block text-xs font-mono text-purple-300 uppercase">Core Ethos</span>
                    <p className="text-sm text-slate-300 mt-0.5">
                      Authentic underground electronic sound paired with boutique comfort and zero double-booking reliability.
                    </p>
                  </div>

                  <div className="border-l-2 border-amber-400 pl-4 py-1">
                    <span className="block text-xs font-mono text-amber-300 uppercase">Mountain Stewardship</span>
                    <p className="text-sm text-slate-300 mt-0.5">
                      Preserving the fragile ecology of the Parvati basin through conscious practices and native partnerships.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pillars */}
          <div className="mb-20">
            <SectionHeader
              align="center"
              badge="Founding Values"
              title="Built on Four"
              titleHighlight="Cornerstones"
              description="The foundational principles that guide our hospitality, musical curation, and mountain expeditions."
            />
            <FeatureGrid features={pillars} columns={4} />
          </div>

          {/* Call to Action */}
          <div className="p-8 sm:p-12 rounded-3xl glass-panel-elevated border border-white/10 text-center max-w-3xl mx-auto space-y-6">
            <h3 className="text-2xl sm:text-4xl font-black text-white uppercase">
              Join the MAGICA Journey
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              Whether you are hiking the old Grahan trails, seeking creative solitude, or coming to celebrate sound beneath the pine canopy, our doors are open.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link href="/stay">
                <Button variant="primary" size="md">
                  Explore Stays
                </Button>
              </Link>
              <Link href="/celebrate">
                <Button variant="secondary" size="md">
                  Upcoming Gatherings
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

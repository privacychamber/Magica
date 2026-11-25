import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  BedDouble,
  UtensilsCrossed,
  CalendarDays,
  Compass,
  ArrowUpRight,
} from "lucide-react";

export function ExperiencePillars() {
  const pillars = [
    {
      id: "stay",
      title: "STAY",
      badge: "Hospitality",
      variant: "electric" as const,
      icon: BedDouble,
      tagline: "Riverside Dorms & Himalayan Suites",
      description:
        "Thoughtfully designed accommodations with high-speed Wi-Fi, mountain-view balconies, hot showers, and vibrant communal spaces for travelers and creators.",
      features: ["Single Dorm Beds", "Private Balcony Rooms", "River Sound View", "Zero Double-Booking Guard"],
      cta: "Explore Rooms",
      href: "/stay",
      gradient: "from-sky-500/20 via-cyan-500/10 to-transparent",
    },
    {
      id: "eat",
      title: "EAT",
      badge: "Parvati Cafe",
      variant: "sunset" as const,
      icon: UtensilsCrossed,
      tagline: "Mountain Kitchen & QR Table Service",
      description:
        "Fresh Himalayan trout, artisanal pizzas, authentic Tibetan thukpa, and organic Parvati herbal teas. Scan the QR code on your table for instant kitchen dispatch.",
      features: ["QR Table Ordering", "Takeaway Pickup", "Organic Mountain Tea", "Late-Night Munchies"],
      cta: "View Cafe Menu",
      href: "/eat",
      gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    },
    {
      id: "celebrate",
      title: "CELEBRATE",
      badge: "Underground Culture",
      variant: "violet" as const,
      icon: CalendarDays,
      tagline: "Electronic DJ Nights & Festivals",
      description:
        "Immersive audio gatherings curated by DJ Pratap (KingUrjapati) and international guest artists. Verified QR passes, crystal-clear acoustics, and mountain bonfires.",
      features: ["Verified QR Passes", "Tiered Event Tickets", "Curated Sound System", "No-Queue Gate Check-in"],
      cta: "Upcoming Events",
      href: "/celebrate",
      gradient: "from-purple-500/20 via-violet-500/10 to-transparent",
    },
    {
      id: "explore",
      title: "EXPLORE",
      badge: "Mountain Tours",
      variant: "emerald" as const,
      icon: Compass,
      tagline: "Treks, Guides & Himalayan Expeditions",
      description:
        "Ascend to Kheerganga, discover ancient Grahan village, or explore hidden waterfalls with certified local guides and reliable Parvati Valley transport coordination.",
      features: ["Certified Local Guides", "Day & Multi-Day Treks", "Bhuntar / Delhi Pickups", "Safety & Gear Support"],
      cta: "Discover Treks",
      href: "/explore",
      gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="electric" size="md" className="mb-3">
            The 4 Core Pillars
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
            An Integrated Himalayan Ecosystem
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Everything you need for an unforgettable Parvati Valley journey, seamlessly managed under one digital operating roof.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="group relative rounded-3xl glass-panel p-8 sm:p-10 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle Ambient Background Gradient */}
                <div
                  className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl ${pillar.gradient} blur-3xl pointer-events-none -z-10`}
                />

                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900/90 border border-slate-700/80 text-white group-hover:text-cyan-300 group-hover:border-cyan-400/40 transition-all">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <span className="text-xs font-mono tracking-widest text-slate-400 uppercase">
                          MODULE {pillar.title}
                        </span>
                        <h3 className="text-2xl font-black tracking-tight text-white">
                          {pillar.title}
                        </h3>
                      </div>
                    </div>
                    <Badge variant={pillar.variant} size="sm">
                      {pillar.badge}
                    </Badge>
                  </div>

                  {/* Tagline & Description */}
                  <h4 className="text-lg font-semibold text-slate-100 mb-3">
                    {pillar.tagline}
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6 font-light">
                    {pillar.description}
                  </p>

                  {/* Feature Chips */}
                  <div className="grid grid-cols-2 gap-2.5 mb-8">
                    {pillar.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-xs text-slate-300 font-medium"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-mono">
                    Instant confirmation
                  </span>
                  <Link href={pillar.href}>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="group-hover:text-cyan-300"
                      rightIcon={<ArrowUpRight className="h-4 w-4" />}
                    >
                      {pillar.cta}
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProvisionalBanner } from "@/components/ui/ProvisionalBanner";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import { formatCurrency } from "@/lib/utils";
import {
  CalendarDays,
  Clock,
  MapPin,
  Flame,
  Radio,
  ShieldCheck,
  Disc3,
  Users,
  QrCode,
} from "lucide-react";

export default function CelebratePage() {
  const events = [
    {
      id: "ev-solstice-techno",
      title: "Solstice Resonance: Underground Techno Night",
      genre: "Peak Time & Hypnotic Techno",
      dateFormatted: "Friday, Dec 12, 2026",
      time: "8:00 PM – 4:00 AM IST",
      location: "MAGICA Riverside Courtyard, Kasol",
      headliner: "KingUrjapati + Guest Artists",
      description:
        "Deep driving basslines, custom-tuned high-fidelity sound, and mountain bonfires along the rushing Parvati River. An immersive sonic journey celebrating the winter solstice.",
      tiers: [
        { name: "Early Bird Pass", pricePaise: 80000, status: "Limited" },
        { name: "Phase 1 General Pass", pricePaise: 110000, status: "Available" },
        { name: "VIP Deck & Bonfire Lounge", pricePaise: 220000, status: "Available" },
      ],
    },
    {
      id: "ev-forest-psy",
      title: "Parvati Mystics: Psychedelic Forest Gathering",
      genre: "Forest Psy & Dark Progressive",
      dateFormatted: "Saturday, Dec 20, 2026",
      time: "9:00 PM – Sunrise IST",
      location: "MAGICA Main Stage & Pine Deck",
      headliner: "KingUrjapati & Valley Collective",
      description:
        "High-frequency electronic exploration nestled deep among ancient deodar pine trees. Crystal clear acoustics, UV visionary stage art, and warm Himalayan chai stations.",
      tiers: [
        { name: "Early Bird Pass", pricePaise: 120000, status: "Selling Fast" },
        { name: "General Pass", pricePaise: 160000, status: "Available" },
        { name: "Couple Pass", pricePaise: 260000, status: "Available" },
      ],
    },
    {
      id: "ev-sunset-bonfire",
      title: "Acoustic Sunset & Mountain Bonfire Session",
      genre: "Ambient, Downtempo & Live Guitars",
      dateFormatted: "Sunday, Dec 28, 2026",
      time: "5:30 PM – 10:00 PM IST",
      location: "MAGICA Cafe Riverside Terrace",
      headliner: "Acoustic Duo + Cafe Specials",
      description:
        "A gentle mountain evening with soulful live acoustic guitars, organic downtempo beats, steaming Parvati teas, and warm cedar fires as the sun sets over the snowy peaks.",
      tiers: [
        { name: "Free Entry RSVP", pricePaise: 0, status: "RSVP Open" },
        { name: "Reserved Riverside Table", pricePaise: 50000, status: "Available" },
      ],
    },
    {
      id: "ev-alpine-solstice-fest",
      title: "MAGICA 2-Day Alpine Gathering 2026",
      genre: "Electronic, Techno & Psytrance",
      dateFormatted: "Jan 15 – 16, 2027",
      time: "2-Day Weekend Festival",
      location: "Full MAGICA Grounds & Riverside Stage",
      headliner: "DJ Pratap (KingUrjapati) + International Lineup",
      description:
        "Our flagship bi-annual gathering bringing together electronic music producers, mountain lovers, visual artists, and local food culture for 48 hours of sound and magic.",
      tiers: [
        { name: "2-Day Festival Pass", pricePaise: 250000, status: "Early Access" },
        { name: "Festival Pass + Dorm Stay", pricePaise: 400000, status: "Early Access" },
        { name: "VIP Backstage & Chalet Pass", pricePaise: 750000, status: "Waitlist" },
      ],
    },
  ];

  const soundFeatures = [
    {
      icon: Radio,
      title: "Custom Acoustic Tuning",
      description: "Audiophile system calibrated to deliver warm, punchy frequencies without distortion against mountain rock and river roar.",
    },
    {
      icon: QrCode,
      title: "Fraud-Proof QR Gate Passes",
      description: "Encrypted offline QR tickets delivered straight to email and wallet. Scanned instantly at the gate to prevent duplicate entries.",
    },
    {
      icon: Flame,
      title: "All-Night Cedar Bonfires",
      description: "Continuous cedar wood fire pits surrounding the stages with warm seating to keep dancers cozy throughout crisp valley nights.",
    },
    {
      icon: ShieldCheck,
      title: "Conscious & Safe Environment",
      description: "Strict zero-tolerance policy on harassment, dedicated security, and respectful mountain community guidelines.",
    },
    {
      icon: Disc3,
      title: "Curated Underground Lineup",
      description: "Curated personally by resident artist DJ Pratap (KingUrjapati) with invited regional and international electronic producers.",
    },
    {
      icon: Users,
      title: "Capacity Quotas",
      description: "Intimate gatherings with strictly capped guest counts to ensure personal space, audio clarity, and pristine mountain grounds.",
    },
  ];

  const eventFAQs = [
    {
      question: "How do I receive my event ticket?",
      answer:
        "Upon ticket purchase, an encrypted high-contrast QR pass is immediately generated in your customer wallet and emailed to you. You can save it to your phone or screenshot it for offline gate validation.",
    },
    {
      question: "Is there an age restriction for electronic music events?",
      answer:
        "Evening electronic music events and DJ nights are strictly 18+. Government photo identification (Aadhaar, Passport, or Driver's License) is verified at the entry gate.",
    },
    {
      question: "Are tickets refundable if I cannot attend?",
      answer:
        "Event passes are non-refundable unless the event is officially postponed or canceled due to mountain weather road closures, in which case full credits or reschedules are honored.",
    },
    {
      question: "Can outside drinks or food be brought to the events?",
      answer:
        "Outside food and beverages are not permitted inside the event grounds. Our cafe and outdoor beverage bars remain active throughout the event with organic drinks and snacks.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Navbar />

      <main className="flex-1 py-12 sm:py-16">
        <Container>
          {/* Provisional Schedule Banner */}
          <ProvisionalBanner
            label="Provisional Lineup Notice"
            message="Event dates, lineups, and ticket tiers below represent our demonstration festival calendar. Official season headliners, early-bird ticket releases, and wristband sales will be formally announced."
            className="mb-10"
          />

          {/* Hero Header */}
          <SectionHeader
            badge="Electronic Music & Culture"
            title="Underground Nights &"
            titleHighlight="Mountain Frequencies"
            description="Experience electronic sound culture at 1,580m elevation. Curated by resident artist DJ Pratap (KingUrjapati), featuring custom-tuned audio, riverside stages, and fraud-proof digital ticketing."
          />

          {/* Events Catalog */}
          <div className="space-y-8 mb-20">
            {events.map((event) => (
              <div
                key={event.id}
                className="group rounded-3xl glass-panel p-6 sm:p-8 lg:p-10 border border-white/10 hover:border-purple-400/40 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-white/5">
                  <div className="space-y-3 max-w-2xl">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <Badge variant="violet" size="sm">
                        {event.genre}
                      </Badge>
                      <span className="text-xs font-mono text-cyan-300 font-semibold">
                        {event.headliner}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-purple-200 transition-colors">
                      {event.title}
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed font-light">
                      {event.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 font-medium pt-2">
                      <span className="flex items-center gap-1.5 text-cyan-400">
                        <CalendarDays className="h-4 w-4" />
                        {event.dateFormatted}
                      </span>
                      <span className="flex items-center gap-1.5 text-slate-400">
                        <Clock className="h-4 w-4" />
                        {event.time}
                      </span>
                      <span className="flex items-center gap-1.5 text-slate-400">
                        <MapPin className="h-4 w-4" />
                        {event.location}
                      </span>
                    </div>
                  </div>

                  <div className="lg:text-right shrink-0">
                    <span className="text-xs font-mono text-purple-400 uppercase tracking-wider block">
                      Gate Security
                    </span>
                    <span className="text-xs text-slate-400 block mt-0.5">
                      Verified QR Check-In
                    </span>
                  </div>
                </div>

                {/* Ticket Tiers Grid */}
                <div className="pt-6">
                  <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-4">
                    Available Pass Tiers (Demonstration)
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {event.tiers.map((tier) => (
                      <div
                        key={tier.name}
                        className="p-4 rounded-2xl glass-card flex items-center justify-between gap-3 hover:border-purple-400/30 transition-all"
                      >
                        <div>
                          <p className="text-xs font-bold text-white">{tier.name}</p>
                          <p className="text-[10px] text-slate-400 font-mono mt-0.5">
                            {tier.status}
                          </p>
                          <p className="text-base font-black text-white mt-1">
                            {tier.pricePaise === 0
                              ? "Free RSVP"
                              : formatCurrency(tier.pricePaise)}
                          </p>
                        </div>

                        <Button
                          variant="secondary"
                          size="sm"
                          onClick={() =>
                            alert(
                              `Pass tier "${tier.name}" for "${event.title}" selected. Live ticket purchasing and QR wallet delivery will activate in Phase 3/6!`
                            )
                          }
                        >
                          Select
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Venue & Sound Standards */}
          <div className="mb-20">
            <SectionHeader
              align="center"
              badge="Sound & Safety"
              title="Acoustic Precision &"
              titleHighlight="Safe Dancefloors"
              description="We treat electronic music as high art. From audio engineering to community safety, every gathering is designed for deep connection and transcendent experiences."
            />
            <FeatureGrid features={soundFeatures} columns={3} />
          </div>

          {/* Event FAQs */}
          <div className="max-w-3xl mx-auto mb-16">
            <SectionHeader
              align="center"
              badge="Gathering Details"
              title="Celebration"
              titleHighlight="FAQ"
              description="Important information regarding gate entry, tickets, sound schedules, and mountain guidelines."
            />
            <FAQAccordion items={eventFAQs} />
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}

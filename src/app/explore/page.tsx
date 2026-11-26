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
  ShieldCheck,
  Footprints,
  Car,
  Camera,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function ExplorePage() {
  const expeditions = [
    {
      id: "trek-grahan",
      title: "Grahan Village Heritage Day Hike",
      difficulty: "Moderate",
      difficultyVariant: "electric" as const,
      duration: "1 Day (5-6 hours hike)",
      altitude: "2,350m (7,700 ft)",
      groupSize: "2 - 8 Trekkers",
      pricePaise: 180000, // ₹1,800 per person
      description:
        "Ascend through centuries-old pine forests following the roaring Grahan Nullah stream to the secluded village of Grahan. Experience preserved wooden pagoda architecture, apple orchards, and authentic Himachali home-cooked lunch.",
      highlights: [
        "Certified Local Parvati Guide",
        "Traditional Grahan Village Lunch",
        "Ancient Wooden Temple Visit",
        "Trailhead Transfer from MAGICA",
      ],
    },
    {
      id: "trek-kheerganga",
      title: "Kheerganga Glacial Hot Springs Expedition",
      difficulty: "Challenging",
      difficultyVariant: "sunset" as const,
      duration: "2 Days / 1 Night",
      altitude: "2,960m (9,710 ft)",
      groupSize: "2 - 10 Trekkers",
      pricePaise: 350000, // ₹3,500 per person
      description:
        "The legendary Parvati Valley expedition. Trek past the thundering Rudranag waterfall to the natural hot sulphur springs atop Kheerganga. Soak under snow-capped peaks followed by stargazing at our private alpine camp.",
      highlights: [
        "Alpine Camp & Warm Sleeping Bags",
        "Natural Hot Sulphur Spring Soak",
        "All Mountain Meals Included",
        "Luggage Porter Coordination",
      ],
    },
    {
      id: "trek-chalal-rasol",
      title: "Chalal & Rasol Village Cultural Walk",
      difficulty: "Easy to Moderate",
      difficultyVariant: "emerald" as const,
      duration: "Half-Day (3-4 hours)",
      altitude: "1,800m",
      groupSize: "1 - 8 Trekkers",
      pricePaise: 120000, // ₹1,200 per person
      description:
        "Cross the suspension bridge over Parvati River into peaceful Chalal village, continuing through deodar trails. Discover local honey farms, riverside rock formations, and tranquil village cafes.",
      highlights: [
        "Suspension Bridge River Crossing",
        "Herbal Tea & Honey Tasting",
        "Easy Family-Friendly Trail",
        "Local Guide Storytelling",
      ],
    },
    {
      id: "exp-stargazing",
      title: "Parvati Stargazing & Night Photography Walk",
      difficulty: "Easy",
      difficultyVariant: "violet" as const,
      duration: "Evening (3 hours)",
      altitude: "1,700m",
      groupSize: "2 - 6 Photographers",
      pricePaise: 150000, // ₹1,500 per person
      description:
        "Venture away from village lights to pristine dark-sky vantage points overlooking the valley ridges. Guided by a local astrophotographer with telescope access to view planetary rings and the Milky Way core.",
      highlights: [
        "Telescope Stargazing Equipment",
        "Astrophotography Guidance",
        "Hot Tea & Cedar Fire Pit",
        "Zero Light Pollution Ridge",
      ],
    },
  ];

  const transportServices = [
    {
      title: "Bhuntar Airport (KUU) Transfers",
      duration: "1 Hour Scenic Drive",
      pricePaise: 180000, // ₹1,800
      description: "Direct pickup from Kullu-Manali Airport in private sanitized mountain cabs directly to MAGICA reception.",
    },
    {
      title: "Delhi / Chandigarh Volvo Coordination",
      duration: "Overnight Route",
      pricePaise: 220000, // ₹2,200 (Volvo seat)
      description: "Assistance with trusted luxury semi-sleeper Volvo buses and seamless shuttle transfer from Bhuntar bus stand.",
    },
    {
      title: "Private Valley Cabs & Sightseeing",
      duration: "Full Day / Half Day",
      pricePaise: 300000, // ₹3,000 / day
      description: "Dedicated local driver for exploring Manikaran Sahib, Tosh, Kalga, Pulga, and Malana dam gate.",
    },
  ];

  const trekFeatures = [
    {
      icon: Footprints,
      title: "Certified Mountain Guides",
      description: "Every trek is led by born-and-raised Parvati Valley natives trained in mountain rescue and local flora.",
    },
    {
      icon: ShieldCheck,
      title: "Safety & First-Aid Ready",
      description: "Portable oxygen monitors, medical first-aid kits, and satellite emergency communication protocols.",
    },
    {
      icon: Car,
      title: "Integrated Transport",
      description: "Pickup and drop directly from MAGICA gates to trailheads at Barshaini, Grahan bridge, or Bhuntar.",
    },
    {
      icon: Camera,
      title: "Cinematic Vantage Points",
      description: "Hand-picked panoramic view stops overlooking glacial peaks, waterfalls, and terraced apple orchards.",
    },
  ];

  const exploreFAQs = [
    {
      question: "What physical fitness level is required for Grahan and Kheerganga?",
      answer:
        "Grahan is a moderate 5-6 hour hike suitable for anyone with basic fitness. Kheerganga is a steeper 6-7 hour ascent; comfortable trekking boots and light hydration packs are strongly recommended.",
    },
    {
      question: "Are guides mandatory for treks?",
      answer:
        "While some lower trails are marked, mountain weather in Parvati Valley can change rapidly. Our certified guides ensure trail safety, manage logistics, and share rich cultural insights into Himachali village traditions.",
    },
    {
      question: "Can MAGICA arrange airport pickups from Bhuntar?",
      answer:
        "Yes, we coordinate reliable private cab transfers from Bhuntar Airport (31 km) and Bhuntar Volvo bus stop directly to the property.",
    },
    {
      question: "What should I pack for a day trek?",
      answer:
        "Sturdy walking shoes/boots, rain jacket or poncho, warm fleece layer, 1-litre refillable water bottle, sun protection, and a small backpack. We provide trail snack boxes on request from our cafe.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Navbar />

      <main className="flex-1 py-12 sm:py-16">
        <Container>
          {/* Provisional Banner */}
          <ProvisionalBanner
            label="Provisional Expeditions Notice"
            message="Trek itineraries, group slots, and guide fees shown below represent demonstration schedules. Live slot availability, verified guide profiles, and private bookings will activate ahead of the trek season."
            className="mb-10"
          />

          {/* Hero Header */}
          <SectionHeader
            badge="Trekking & Mountain Expeditions"
            title="Explore the Sacred"
            titleHighlight="Parvati Trails"
            description="From heritage walks into hidden timber villages to hot sulphur springs beneath glacial peaks. Guided by native mountain certified leaders with private transport coordination."
          />

          {/* Expeditions List */}
          <div className="space-y-8 mb-20">
            {expeditions.map((trek) => (
              <div
                key={trek.id}
                className="group rounded-3xl glass-panel p-6 sm:p-8 lg:p-10 border border-white/10 hover:border-emerald-400/40 transition-all duration-300 flex flex-col lg:flex-row lg:items-center justify-between gap-6"
              >
                <div className="space-y-4 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <Badge variant={trek.difficultyVariant} size="sm">
                      {trek.difficulty}
                    </Badge>
                    <span className="text-xs text-slate-400 font-mono">
                      Alt: {trek.altitude}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">•</span>
                    <span className="text-xs text-slate-400 font-mono">
                      {trek.duration}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-emerald-200 transition-colors">
                      {trek.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed font-light mt-1.5">
                      {trek.description}
                    </p>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                    {trek.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-center gap-2 text-xs text-slate-300 font-medium"
                      >
                        <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Pricing & Action */}
                <div className="lg:text-right shrink-0 lg:border-l lg:border-white/5 lg:pl-8 pt-4 lg:pt-0 border-t border-white/5 lg:border-t-0 flex flex-col justify-between">
                  <div>
                    <span className="block text-[11px] font-mono uppercase tracking-wider text-slate-400">
                      Provisional Guide Rate
                    </span>
                    <div className="flex items-baseline lg:justify-end gap-1.5 my-1">
                      <span className="text-3xl font-black text-white">
                        {formatCurrency(trek.pricePaise)}
                      </span>
                      <span className="text-xs text-slate-400">/ person</span>
                    </div>
                    <span className="block text-[10px] text-emerald-400 font-medium">
                      ✓ Includes Guide & Trail Permit
                    </span>
                  </div>

                  <div className="mt-5 space-y-2">
                    <Button
                      variant="primary"
                      size="md"
                      className="w-full lg:w-auto"
                      rightIcon={<ArrowRight className="h-4 w-4" />}
                      onClick={() =>
                        alert(
                          `Inquiry for "${trek.title}" recorded. Live guide slot scheduling will open in Phase 3/4!`
                        )
                      }
                    >
                      Inquire Trek
                    </Button>
                    <p className="text-[10px] text-slate-500 font-mono">
                      Phase 1 Preview Mode
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Transport Coordination Section */}
          <div className="p-8 rounded-3xl glass-panel-elevated border border-white/10 mb-20">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-mono text-cyan-400 font-semibold tracking-wider uppercase">
                LOGISTICS & TRANSIT
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                Valley Transport & Airport Transfers
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-light mt-1">
                Reliable private mountain cabs and bus station transfers connecting Bhuntar, Kullu, Chandigarh, and Kasol.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {transportServices.map((service) => (
                <div key={service.title} className="p-5 rounded-2xl glass-card space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-400">{service.duration}</span>
                    <span className="text-sm font-black text-white">
                      {formatCurrency(service.pricePaise)}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white">{service.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Guide Standards */}
          <div className="mb-20">
            <SectionHeader
              align="center"
              badge="Safety & Trust"
              title="Native Mountain"
              titleHighlight="Leadership"
              description="Himalayan trekking requires respect, preparation, and experience. Every expedition is structured with safety protocols and zero-trace mountain ethics."
            />
            <FeatureGrid features={trekFeatures} columns={4} />
          </div>

          {/* Trek FAQs */}
          <div className="max-w-3xl mx-auto mb-16">
            <SectionHeader
              align="center"
              badge="Preparation"
              title="Expeditions"
              titleHighlight="FAQ"
              description="Common questions on gear, mountain fitness, safety protocols, and route conditions."
            />
            <FAQAccordion items={exploreFAQs} />
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}

"use client";

import React, { useState } from "react";
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
  BedDouble,
  Users,
  Wifi,
  Sparkles,
  Coffee,
  Flame,
  Waves,
  Mountain,
  Lock,
  ArrowRight,
  Clock,
  CalendarCheck,
} from "lucide-react";

export default function StayPage() {
  const [activeFilter, setActiveFilter] = useState<"all" | "dorm" | "private">("all");

  const units = [
    {
      id: "dorm-mixed-6",
      title: "6-Bed Parvati Mixed Dorm",
      category: "dorm",
      badge: "Popular with Solo Travelers",
      badgeVariant: "electric" as const,
      capacity: 1,
      type: "Single Bunk Bed",
      bath: "Shared Mountain Stone Bath",
      view: "Glacial River & Pine Valley",
      pricePaise: 80000, // ₹800
      description:
        "Spacious hand-crafted timber bunks with orthopaedic mattresses, personal charging dock, privacy curtain, reading light, and secure under-bed steel locker.",
      amenities: [
        "High-Speed Wi-Fi",
        "Individual Power Port",
        "Personal Locker",
        "Linen & Duvet",
        "Daily Housekeeping",
        "Hot Water 24/7",
      ],
    },
    {
      id: "dorm-female-4",
      title: "4-Bed Female Mountain Sanctuary",
      category: "dorm",
      badge: "Female-Only",
      badgeVariant: "violet" as const,
      capacity: 1,
      type: "Single Bunk Bed",
      bath: "Private Attached En-Suite",
      view: "River & Forest View",
      pricePaise: 95000, // ₹950
      description:
        "Dedicated quiet dormitory exclusively for female travelers. Features oversized mirrors, en-suite modern stone bathroom, secure keycard entry, and direct balcony access.",
      amenities: [
        "Female-Only Keycard Entry",
        "En-suite Attached Bath",
        "Balcony Access",
        "High-Speed Wi-Fi",
        "Personal Locker",
        "Heated Showers",
      ],
    },
    {
      id: "suite-balcony",
      title: "Parvati Riverside Balcony Suite",
      category: "private",
      badge: "Signature Stay",
      badgeVariant: "sunset" as const,
      capacity: 2,
      type: "King Orthopaedic Bed",
      bath: "Private Stone En-Suite with Mountain View",
      view: "Direct Parvati Riverfront",
      pricePaise: 340000, // ₹3,400
      description:
        "The quintessential MAGICA luxury experience. Step directly onto your private wooden balcony suspended over the rushing river. Features handcrafted deodar wood ceilings, ambient acoustic lighting, and an artisanal coffee bar.",
      amenities: [
        "Private Riverfront Balcony",
        "King Bed with Down Pillows",
        "Workstation with River View",
        "Artisanal Coffee & Tea Set",
        "Room Dining Service",
        "Premium Toiletries",
      ],
    },
    {
      id: "room-pine-deluxe",
      title: "Pine Ridge Deluxe Double",
      category: "private",
      badge: "Forest Sanctuary",
      badgeVariant: "neutral" as const,
      capacity: 2,
      type: "Queen Bed",
      bath: "Private Attached Bath",
      view: "Ancient Deodar Forest",
      pricePaise: 280000, // ₹2,800
      description:
        "Tucked into the quieter side of the property facing the old Grahan pine trail. Warm wood paneling, peaceful birdsong mornings, and expansive panoramic glass windows.",
      amenities: [
        "Panoramic Forest Window",
        "Queen Bed",
        "Dedicated Work Desk",
        "Electric Kettle & Teas",
        "Heated Bathroom",
        "High-Speed Wi-Fi",
      ],
    },
    {
      id: "attic-chalet",
      title: "Upper Attic Mountain Chalet",
      category: "private",
      badge: "Top Floor Penthouse",
      badgeVariant: "violet" as const,
      capacity: 3,
      type: "King Bed + Single Daybed",
      bath: "Private Luxury Bath with Skylight",
      view: "360° Parvati Valley Peaks",
      pricePaise: 420000, // ₹4,200
      description:
        "Perched on the highest floor with pitched Himalayan cedar beams and glass skylights for stargazing. Perfect for creators, couples, and small groups seeking complete privacy.",
      amenities: [
        "Cedar Beam Skylights",
        "Private Top-Floor Deck",
        "Starlink High-Speed Wi-Fi",
        "Lounge Seating Area",
        "Espresso Machine",
        "Mountain Horizon Panoramas",
      ],
    },
  ];

  const filteredUnits =
    activeFilter === "all"
      ? units
      : units.filter((u) => u.category === activeFilter);

  const stayFeatures = [
    {
      icon: Waves,
      title: "Direct Riverfront Roar",
      description: "Steps away from the glacial waters of Parvati River with dedicated riverside deck lounging.",
    },
    {
      icon: Wifi,
      title: "Creator-Grade Wi-Fi",
      description: "Fiber internet with power backup across all rooms, dorms, and communal work spaces.",
    },
    {
      icon: Flame,
      title: "Evening Mountain Bonfires",
      description: "Nightly cedar wood fire gatherings under Himalayan skies with acoustic & ambient soundscapes.",
    },
    {
      icon: Coffee,
      title: "All-Day Parvati Cafe",
      description: "Artisanal bakery, wood-fired oven, organic local teas, and QR code dining from your room.",
    },
    {
      icon: Lock,
      title: "Safe & Zero Double-Booking",
      description: "Transactional inventory locks with secure luggage holds and 24/7 on-site property team.",
    },
    {
      icon: Mountain,
      title: "Trailhead Access",
      description: "Immediate walking access to the Grahan, Chalal, and Kheerganga mountain trail routes.",
    },
  ];

  const stayFAQs = [
    {
      question: "What are the check-in and check-out timings?",
      answer:
        "Standard check-in begins at 1:00 PM IST, and check-out is by 11:00 AM IST. Early arrivals can safely store their backpacks in our secure luggage vault and relax at the cafe or riverside deck.",
    },
    {
      question: "How does the zero double-booking system work?",
      answer:
        "When you select an available bed or private room and proceed to checkout, an atomic 10-minute hold lock is placed on that exact inventory unit. This guarantees no other traveler can take your bed while you confirm your booking.",
    },
    {
      question: "Is high-speed Wi-Fi available for remote work?",
      answer:
        "Yes. We operate dedicated high-speed fiber internet with backup connectivity and power backup, tested for Zoom, Google Meet, and creator workloads across both private suites and dorm lounges.",
    },
    {
      question: "Are hot water showers available round the clock?",
      answer:
        "Yes, our bathrooms are equipped with 24/7 high-capacity water heating systems tailored for crisp Himalayan mornings and evenings.",
    },
    {
      question: "What is your cancellation and refund policy for accommodation?",
      answer:
        "Cancellations made 48 hours prior to the check-in date are eligible for a partial refund or date reschedule. Full details are outlined in our platform policies.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Navbar />

      <main className="flex-1 py-12 sm:py-16">
        <Container>
          {/* Provisional Banner */}
          <ProvisionalBanner
            label="Provisional Tariff Notice"
            message="Room and dorm rates shown below are demonstration baseline tariffs. Official seasonal packages, festival dates, and live booking engine reservations will open ahead of the upcoming Parvati season."
            className="mb-10"
          />

          {/* Hero Header */}
          <SectionHeader
            badge="Boutique Himalayan Stay"
            title="Stay in the Roar of the"
            titleHighlight="Parvati River"
            description="From social mixed dorms for solo backpackers to secluded deodar wood riverfront suites. Engineered with zero double-booking concurrency control, creator-speed Wi-Fi, and authentic mountain hospitality."
          />

          {/* Filter Bar */}
          <div className="flex items-center gap-2 mb-8 pb-4 border-b border-white/5 overflow-x-auto">
            <button
              type="button"
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all ${
                activeFilter === "all"
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-[0_0_12px_rgba(0,210,255,0.25)]"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              All Accommodations ({units.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("dorm")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all ${
                activeFilter === "dorm"
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-[0_0_12px_rgba(0,210,255,0.25)]"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              Social Dorm Beds (2)
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("private")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all ${
                activeFilter === "private"
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-[0_0_12px_rgba(0,210,255,0.25)]"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              Private Rooms & Suites (3)
            </button>
          </div>

          {/* Units Listing */}
          <div className="space-y-6 mb-20">
            {filteredUnits.map((unit) => (
              <div
                key={unit.id}
                className="group rounded-3xl glass-panel p-6 sm:p-8 border border-white/10 hover:border-cyan-400/40 transition-all duration-300 flex flex-col lg:flex-row lg:items-center justify-between gap-6"
              >
                <div className="space-y-4 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <Badge variant={unit.badgeVariant} size="sm">
                      {unit.badge}
                    </Badge>
                    <span className="text-xs text-slate-400 font-mono">
                      {unit.view}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-200 transition-colors">
                      {unit.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed font-light mt-1.5">
                      {unit.description}
                    </p>
                  </div>

                  {/* Specs Pill List */}
                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 font-medium pt-1">
                    <span className="flex items-center gap-1.5">
                      <BedDouble className="h-4 w-4 text-cyan-400" />
                      {unit.type}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users className="h-4 w-4 text-slate-400" />
                      Max {unit.capacity} {unit.capacity === 1 ? "Guest" : "Guests"}
                    </span>
                    <span className="text-slate-400">•</span>
                    <span className="text-slate-300">{unit.bath}</span>
                  </div>

                  {/* Amenities Chips */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {unit.amenities.map((amenity) => (
                      <span
                        key={amenity}
                        className="px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-700/50 text-[11px] text-slate-300"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Action & Pricing Box */}
                <div className="lg:text-right shrink-0 lg:border-l lg:border-white/5 lg:pl-8 pt-4 lg:pt-0 border-t border-white/5 lg:border-t-0 flex flex-col justify-between">
                  <div>
                    <span className="block text-[11px] font-mono uppercase tracking-wider text-slate-400">
                      Provisional Demo Rate
                    </span>
                    <div className="flex items-baseline lg:justify-end gap-1.5 my-1">
                      <span className="text-3xl font-black text-white">
                        {formatCurrency(unit.pricePaise)}
                      </span>
                      <span className="text-xs text-slate-400">/ night</span>
                    </div>
                    <span className="block text-[10px] text-emerald-400 font-medium">
                      ✓ Taxes included • 10-min hold lock
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
                          `Inquiry for ${unit.title} recorded. Live booking engine and payment checkout will open in Phase 3/6!`
                        )
                      }
                    >
                      Check Dates
                    </Button>
                    <p className="text-[10px] text-slate-500 font-mono">
                      Phase 1 Preview Mode
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Property Features */}
          <div className="mb-20">
            <SectionHeader
              align="center"
              badge="Sanctuary Perks"
              title="Built for Mountain"
              titleHighlight="Living & Flow"
              description="Every detail at MAGICA has been curated for travelers seeking tranquility, community warmth, creative focus, and high-altitude comfort."
            />
            <FeatureGrid features={stayFeatures} columns={3} />
          </div>

          {/* House Policies Grid */}
          <div className="p-8 rounded-3xl glass-panel-elevated border border-white/10 mb-20">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <CalendarCheck className="h-5 w-5 text-cyan-400" />
              <span>House Guidelines & Operating Hours</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-slate-300">
              <div className="p-4 rounded-2xl glass-card space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-white">
                  <Clock className="h-4 w-4 text-cyan-400" />
                  <span>Check-In & Check-Out</span>
                </div>
                <p className="text-slate-400">
                  Check-in from 1:00 PM. Check-out by 11:00 AM. Government ID required upon arrival.
                </p>
              </div>

              <div className="p-4 rounded-2xl glass-card space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-white">
                  <Flame className="h-4 w-4 text-amber-400" />
                  <span>Quiet Hours in Dorms</span>
                </div>
                <p className="text-slate-400">
                  Dorm quiet hours from 11:00 PM to ensure restful sleep for trekkers. Party and music areas are sound-insulated.
                </p>
              </div>

              <div className="p-4 rounded-2xl glass-card space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-white">
                  <Sparkles className="h-4 w-4 text-purple-400" />
                  <span>Mountain Ecology</span>
                </div>
                <p className="text-slate-400">
                  Strict zero-plastic policy in the Parvati River basin. Filtered drinking water is provided complimentary.
                </p>
              </div>
            </div>
          </div>

          {/* Stay FAQs */}
          <div className="max-w-3xl mx-auto mb-16">
            <SectionHeader
              align="center"
              badge="Common Questions"
              title="Accommodation"
              titleHighlight="FAQ"
              description="Have questions about staying in Kasol? Here is everything you need to know before arrival."
            />
            <FAQAccordion items={stayFAQs} />
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
  CalendarDays,
  Clock,
  MapPin,
  Ticket,
  ArrowRight,
} from "lucide-react";

export function EventsPreview() {
  const demoEvents = [
    {
      id: "ev-01",
      title: "Solstice Resonance: Underground Techno Night",
      genre: "Peak Time & Hypnotic Techno",
      dateFormatted: "Friday, Dec 12, 2026",
      time: "8:00 PM – 4:00 AM IST",
      location: "MAGICA Riverside Courtyard, Kasol",
      headliner: "KingUrjapati + Guest Artists",
      pricePaise: 80000, // ₹800
      tier: "Phase 1 Pass",
      status: "Selling Fast",
    },
    {
      id: "ev-02",
      title: "Parvati Mystics: Psytrance & Forest Gathering",
      genre: "Forest & Dark Progressive",
      dateFormatted: "Saturday, Dec 20, 2026",
      time: "9:00 PM – Sunrise IST",
      location: "MAGICA Main Stage & Pine Deck",
      headliner: "KingUrjapati & Valley Collective",
      pricePaise: 120000, // ₹1,200
      tier: "Early Bird",
      status: "Available",
    },
    {
      id: "ev-03",
      title: "Acoustic Sunset & Mountain Bonfire Session",
      genre: "Ambient, Downtempo & Live Guitars",
      dateFormatted: "Sunday, Dec 28, 2026",
      time: "5:30 PM – 10:00 PM IST",
      location: "MAGICA Cafe Terrace",
      headliner: "Acoustic Duo + Cafe Specials",
      pricePaise: 0, // Free entry with reservation
      tier: "Free Entry RSVP",
      status: "RSVP Open",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <Badge variant="violet" size="md" className="mb-3">
              Celebrate • Live Music & Culture
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
              Upcoming Gatherings
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Curated electronic music nights, mountain sunsets, and high-frequency community parties in Kasol.
            </p>
          </div>

          <Link href="/celebrate">
            <Button
              variant="outline"
              size="md"
              rightIcon={<ArrowRight className="h-4 w-4" />}
            >
              View Full Event Lineup
            </Button>
          </Link>
        </div>

        {/* Events Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {demoEvents.map((event) => (
            <Card
              key={event.id}
              className="flex flex-col justify-between border-white/10 hover:border-purple-400/40 p-6 sm:p-7"
            >
              <div>
                {/* Event Metadata Badges */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <Badge variant="violet" size="sm">
                    {event.genre}
                  </Badge>
                  <span className="text-[11px] font-mono text-amber-300 font-semibold">
                    {event.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                  {event.title}
                </h3>

                {/* Details */}
                <div className="space-y-2 text-xs text-slate-300 font-medium mb-6">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-cyan-400 shrink-0" />
                    <span>{event.dateFormatted}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-slate-400 shrink-0" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-slate-400 shrink-0" />
                    <span className="truncate">{event.location}</span>
                  </div>
                </div>
              </div>

              {/* Ticket Price & Action */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-mono">
                    {event.tier}
                  </span>
                  <span className="text-lg font-black text-white">
                    {event.pricePaise === 0 ? "Free RSVP" : `₹${event.pricePaise / 100}`}
                  </span>
                </div>

                <Link href="/celebrate">
                  <Button
                    variant="primary"
                    size="sm"
                    leftIcon={<Ticket className="h-3.5 w-3.5" />}
                  >
                    Get Pass
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {/* Demonstration Disclaimer */}
        <p className="text-center text-xs text-slate-400 mt-8 font-mono">
          * Demonstration schedule. Final festival lineup, artist sets, and official ticketing will be announced ahead of each season.
        </p>
      </Container>
    </section>
  );
}

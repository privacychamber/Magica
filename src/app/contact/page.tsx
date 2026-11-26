"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProvisionalBanner } from "@/components/ui/ProvisionalBanner";
import {
  MapPin,
  Compass,
  Send,
  Clock,
  Car,
  Plane,
  Bus,
  CheckCircle2,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Navbar />

      <main className="flex-1 py-12 sm:py-16">
        <Container>
          {/* Provisional Banner */}
          <ProvisionalBanner
            label="Inquiry Channel Notice"
            message="Official telephone and WhatsApp concierge desks will be activated at public launch. Use the inquiry form below to register interest for seasonal bookings and private retreats."
            className="mb-10"
          />

          {/* Header */}
          <SectionHeader
            badge="Reach Us in Kasol"
            title="Connect with"
            titleHighlight="MAGICA"
            description="Located in Kasol, Parvati Valley. Reach out for stay reservations, cafe table inquiries, artist bookings, or guided mountain expedition coordination."
          />

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
            {/* Left Column: Location & Arrival Guide */}
            <div className="lg:col-span-6 space-y-6">
              <div className="p-8 rounded-3xl glass-panel-elevated border border-white/10 space-y-6">
                <h3 className="text-2xl font-bold text-white">
                  Property Destination & Coordinates
                </h3>

                <div className="space-y-4 text-sm text-slate-300">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Physical Location:</strong>
                      <span>Kasol, Parvati Valley, Distt. Kullu, Himachal Pradesh 175105, India</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Compass className="h-5 w-5 text-purple-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Regional Coordinates:</strong>
                      <span className="font-mono text-xs">Kasol Center: 32.0100° N, 77.3150° E • Elevation: ~1,580m</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Reception & Concierge:</strong>
                      <span>On-site assistance 8:00 AM – 11:00 PM IST daily</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Transit Details */}
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-white">
                  How to Travel to Us
                </h4>

                <div className="p-4 rounded-2xl glass-card flex items-start gap-3.5">
                  <Plane className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-slate-300">
                    <strong className="text-white block">By Air (Bhuntar / KUU):</strong>
                    <span>31 km away. Frequent flights from Delhi and Chandigarh to Kullu-Manali Airport. Private sanitized transfers can be arranged.</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl glass-card flex items-start gap-3.5">
                  <Bus className="h-5 w-5 text-purple-400 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-slate-300">
                    <strong className="text-white block">By Volvo Bus from Delhi / Chandigarh:</strong>
                    <span>Overnight luxury Volvo to Bhuntar bus station (~11-12 hours from Delhi), followed by a 1-hour scenic cab ride along the river.</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl glass-card flex items-start gap-3.5">
                  <Car className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-slate-300">
                    <strong className="text-white block">By Private Mountain Drive:</strong>
                    <span>Follow NH3 via Mandi to Bhuntar, then branch onto Manikaran Road following the Parvati River directly into Kasol.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Inquiry Form */}
            <div className="lg:col-span-6">
              <div className="p-8 sm:p-10 rounded-3xl glass-panel-elevated border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Send an Inquiry
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light mb-6">
                  Fill in your details for room booking queries, event ticket waitlists, or private Himalayan retreat planning.
                </p>

                {submitted ? (
                  <div className="p-6 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 text-center space-y-3">
                    <CheckCircle2 className="h-10 w-10 text-cyan-400 mx-auto" />
                    <h4 className="text-lg font-bold text-white">Inquiry Received</h4>
                    <p className="text-xs text-slate-300">
                      Thank you for reaching out to MAGICA. Our valley concierge team will respond once the live operational communication channels open!
                    </p>
                    <Button variant="outline" size="sm" onClick={() => setSubmitted(false)}>
                      Send Another Inquiry
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      label="Full Name"
                      placeholder="e.g. Aryan Sharma"
                      required
                    />

                    <Input
                      label="Email Address"
                      type="email"
                      placeholder="e.g. aryan@example.com"
                      required
                    />

                    <Input
                      label="Phone / WhatsApp Number"
                      type="tel"
                      placeholder="e.g. +91 98765 43210"
                    />

                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                        Inquiry Nature
                      </label>
                      <select
                        className="w-full h-11 px-4 text-sm bg-slate-900/70 border border-slate-700/60 rounded-xl text-slate-100 focus:outline-none focus:border-cyan-400/80"
                        defaultValue="stay"
                      >
                        <option value="stay">Accommodation & Dorms</option>
                        <option value="cafe">Cafe & Group Table Dining</option>
                        <option value="event">DJ Nights & Event Passes</option>
                        <option value="trek">Trekking & Mountain Guides</option>
                        <option value="artist">KingUrjapati Music & Artist Bookings</option>
                        <option value="other">General Inquiries</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                        Message / Dates
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Tell us about your expected dates, group size, or questions..."
                        className="w-full p-4 text-sm bg-slate-900/70 border border-slate-700/60 rounded-xl text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-cyan-400/80"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="md"
                      className="w-full"
                      rightIcon={<Send className="h-4 w-4" />}
                    >
                      Submit Inquiry
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}

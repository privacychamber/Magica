"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProvisionalBanner } from "@/components/ui/ProvisionalBanner";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { formatCurrency } from "@/lib/utils";
import { Clock } from "lucide-react";

export default function EatPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", name: "Full Menu" },
    { id: "breakfast", name: "Mountain Breakfast" },
    { id: "parvati", name: "Parvati Specials" },
    { id: "woodfired", name: "Wood-Fired & Italian" },
    { id: "tibetan", name: "Tibetan & Himalayan" },
    { id: "beverages", name: "Herbal Teas & Brews" },
    { id: "munchies", name: "Late-Night Munchies" },
  ];

  const menuItems = [
    {
      id: "dish-01",
      category: "breakfast",
      name: "Kasol Shakshuka & Sourdough",
      tag: "Chef Signature",
      diet: "veg",
      pricePaise: 38000, // ₹380
      prepMinutes: 15,
      description:
        "Poached farm eggs nestled in spiced roasted mountain tomato, bell pepper, and cumin sauce. Served with warm wood-fired sourdough toast.",
    },
    {
      id: "dish-02",
      category: "breakfast",
      name: "Himalayan Apple & Walnut Porridge",
      tag: "Organic",
      diet: "vegan",
      pricePaise: 26000, // ₹260
      prepMinutes: 10,
      description:
        "Steel-cut mountain oats slow-simmered with almond milk, fresh Parvati orchard apples, wild mountain honey, and crushed local walnuts.",
    },
    {
      id: "dish-03",
      category: "parvati",
      name: "Pan-Seared Parvati River Trout",
      tag: "Fresh Catch",
      diet: "non-veg",
      pricePaise: 65000, // ₹650
      prepMinutes: 25,
      description:
        "Sourced daily from cold glacial streams. Marinated in mountain garlic, fresh dill, lemon zest, and wood-grilled. Served with herbed baby potatoes.",
    },
    {
      id: "dish-04",
      category: "parvati",
      name: "Siddu with Ghee & Walnut Chutney",
      tag: "Himachali Heritage",
      diet: "veg",
      pricePaise: 32000, // ₹320
      prepMinutes: 20,
      description:
        "Traditional Himachali steamed wheat bread stuffed with spiced poppy seeds and crushed walnuts. Served with steaming golden desi ghee.",
    },
    {
      id: "dish-05",
      category: "woodfired",
      name: "Parvati Magic Truffle Pizza",
      tag: "Wood-Fired 450°C",
      diet: "veg",
      pricePaise: 55000, // ₹550
      prepMinutes: 18,
      description:
        "Hand-stretched 48-hour fermented dough, San Marzano sauce, fresh mozzarella, wild foraged forest mushrooms, garlic chips, and truffle drizzle.",
    },
    {
      id: "dish-06",
      category: "woodfired",
      name: "Wood-Fired Smoky Pollo Pizza",
      tag: "Wood-Fired",
      diet: "non-veg",
      pricePaise: 59000, // ₹590
      prepMinutes: 18,
      description:
        "Smoked mountain chicken, charred red onions, wood-roasted bell peppers, buffalo mozzarella, and fresh basil leaves.",
    },
    {
      id: "dish-07",
      category: "tibetan",
      name: "Steamed Himalayan Momos (Trout / Cheese)",
      tag: "Local Favorite",
      diet: "veg",
      pricePaise: 28000, // ₹280
      prepMinutes: 15,
      description:
        "Hand-pinched dumplings served with spicy roasted chili-garlic dip and clear vegetable broth. Choice of cottage cheese & spinach or minced trout.",
    },
    {
      id: "dish-08",
      category: "tibetan",
      name: "Warm Parvati Thukpa Bowl",
      tag: "Comfort Soul Food",
      diet: "veg",
      pricePaise: 32000, // ₹320
      prepMinutes: 15,
      description:
        "Steaming handmade noodles in an aromatic herb-infused vegetable broth with bok choy, local mushrooms, and fresh ginger slivers.",
    },
    {
      id: "dish-09",
      category: "beverages",
      name: "Parvati Valley Herbal Infusion",
      tag: "Wild Harvest",
      diet: "vegan",
      pricePaise: 18000, // ₹180
      prepMinutes: 8,
      description:
        "Brewed with wild mountain mint, chamomile flowers, ginger root, and raw forest honey collected by local valley beekeepers.",
    },
    {
      id: "dish-10",
      category: "munchies",
      name: "Midnight Truffle Fries & Garlic Aioli",
      tag: "Late-Night 2 AM",
      diet: "veg",
      pricePaise: 24000, // ₹240
      prepMinutes: 10,
      description:
        "Crispy hand-cut Himalayan potatoes tossed in sea salt, crushed rosemary, grated parmesan, and served with house garlic aioli.",
    },
  ];

  const filteredItems =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  const qrSteps = [
    {
      step: "01",
      title: "Scan Table QR Code",
      description: "Every wooden table on our riverside deck and cafe features a unique QR code (e.g. `?table=T07`).",
    },
    {
      step: "02",
      title: "Select Dishes & Customize",
      description: "Browse the live digital menu with dietary tags and special instructions (e.g. extra spicy, gluten-free).",
    },
    {
      step: "03",
      title: "Instant Kitchen Dispatch",
      description: "Your order chits straight to our kitchen display (KDS), updating live from 'In Kitchen' to 'Ready'.",
    },
    {
      step: "04",
      title: "Served to Your Table",
      description: "Dishes are brought hot to your seat. Choose to pay immediately via UPI/Card or pay cash at the counter.",
    },
  ];

  const cafeFAQs = [
    {
      question: "Can I order food if I am not staying at the property?",
      answer:
        "Yes! MAGICA Cafe is fully open to all visitors, trekkers, and music lovers in Parvati Valley. Walk in, pick an open table, and scan the QR code to order.",
    },
    {
      question: "What are the cafe operating hours?",
      answer:
        "Our cafe serves breakfast from 8:00 AM, all-day dining until 11:00 PM, and late-night munchies during weekend electronic nights.",
    },
    {
      question: "How does the QR table ordering work?",
      answer:
        "Simply point your phone camera at the QR code on your table. It opens the digital menu pre-bound to your table number. No app download is required.",
    },
    {
      question: "Do you pack takeaway food for treks?",
      answer:
        "Yes, we provide eco-packaged trail boxes with sandwiches, energy bites, and thermoses of hot herbal tea for day hikes to Grahan or Kheerganga.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Navbar />

      <main className="flex-1 py-12 sm:py-16">
        <Container>
          {/* Provisional Banner */}
          <ProvisionalBanner
            label="Provisional Menu Notice"
            message="Dishes, pricing, and ingredients shown below represent our demonstration cafe menu. Seasonal farm-fresh items and live QR table ordering will activate upon official property opening."
            className="mb-10"
          />

          {/* Hero Header */}
          <SectionHeader
            badge="Mountain Dining & QR Service"
            title="Parvati Cafe &"
            titleHighlight="Table Ordering"
            description="Wood-fired ovens, fresh Himalayan trout, Tibetan soul food, and wild herbal teas. Savor seasonal ingredients on our riverside sun deck or scan your table QR code for contactless kitchen service."
          />

          {/* QR Walkthrough Bar */}
          <div className="p-8 rounded-3xl glass-panel-elevated border border-white/10 mb-16">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-mono text-cyan-400 font-semibold tracking-wider uppercase">
                  DINE-IN TECHNOLOGY
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  How QR Table Ordering Works
                </h3>
              </div>
              <Link href="/eat/order-status">
                <Button
                  variant="outline"
                  size="sm"
                  leftIcon={<Clock className="h-4 w-4 text-amber-400" />}
                >
                  View Live Kitchen Demo
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {qrSteps.map((step) => (
                <div key={step.step} className="p-5 rounded-2xl glass-card space-y-2">
                  <span className="font-mono text-2xl font-black text-cyan-400/80">
                    {step.step}
                  </span>
                  <h4 className="text-base font-bold text-white">{step.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Category Switcher */}
          <div className="flex items-center gap-2 mb-10 pb-4 border-b border-white/5 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? "bg-amber-500/20 text-orange-300 border border-orange-400/40 shadow-[0_0_12px_rgba(249,115,22,0.25)]"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group rounded-2xl glass-panel p-6 border border-white/10 hover:border-orange-400/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-mono text-amber-300 font-semibold uppercase">
                      {item.tag}
                    </span>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-full uppercase ${
                        item.diet === "veg"
                          ? "bg-emerald-950 text-emerald-300 border border-emerald-500/30"
                          : item.diet === "vegan"
                          ? "bg-cyan-950 text-cyan-300 border border-cyan-500/30"
                          : "bg-rose-950 text-rose-300 border border-rose-500/30"
                      }`}
                    >
                      {item.diet}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-white group-hover:text-amber-200 transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mt-1.5 mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <Clock className="h-3.5 w-3.5 text-amber-400" />
                    <span>~{item.prepMinutes} mins prep</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-lg font-black text-white">
                      {formatCurrency(item.pricePaise)}
                    </span>
                    <Button
                      variant="sunset"
                      size="sm"
                      onClick={() =>
                        alert(
                          `Added ${item.name} to table cart. QR checkout will activate in Phase 3!`
                        )
                      }
                    >
                      + Add
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cafe FAQs */}
          <div className="max-w-3xl mx-auto mb-16">
            <SectionHeader
              align="center"
              badge="Dining Information"
              title="Cafe & QR"
              titleHighlight="FAQ"
              description="Everything you need to know about dining by the Parvati River, dietary options, and contactless table ordering."
            />
            <FAQAccordion items={cafeFAQs} />
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}

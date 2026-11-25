# MAGICA — Product Requirements Document (PRD)

**Document Version:** 1.0.0  
**Status:** Approved for Phase 0  
**Author:** Lead Software Architect & Product Designer  
**Business Owner / Key Stakeholder:** DJ Pratap (KingUrjapati) / Oh Magic View  
**Location:** Kasol, Parvati Valley, Himachal Pradesh, India  

---

## 1. Vision & Strategic Objectives

MAGICA is an integrated hospitality, entertainment, tourism, and community platform operating in the heart of Kasol, Parvati Valley. It transforms a traditional boutique Himalayan stay into a technology-driven, unified guest ecosystem.

### Core Value Proposition
- **For Visitors / Guests:** A single, fluid digital companion to book stays (dorms/private rooms), order cafe food (dine-in via QR or takeaway), reserve party/event tickets, book local treks/transport, and explore electronic music releases by KingUrjapati.
- **For Business Owners & Operations:** A unified real-time operations engine offering centralized inventory control, kitchen display workflow (KDS), event entry check-in, revenue reporting, and guide allocation.

---

## 2. Key Personas & User Journeys

### Persona A: The Himalayan Explorer / Traveler (Guest)
- **Goal:** Book a dorm bed or room, check in, discover tonight's psytrance / techno DJ set, order snacks to their table via QR, and arrange a guide to Kheerganga / Grahan.
- **Key Pain Point:** Disconnected phone calls, cash-only confusion, fragmented info, and booking disputes.

### Persona B: The Music Enthusiast / Partygoer
- **Goal:** View upcoming party dates at MAGICA, listen to KingUrjapati's latest mixes, purchase an entry ticket with instant QR delivery to WhatsApp/Email, and enter smoothly at the gate.
- **Key Pain Point:** Unverified ticket transfers, long queues at the venue gate, lost paper wristbands.

### Persona C: The Receptionist & Property Manager
- **Goal:** Check real-time room and bed availability, manage walk-in vs. online guest check-ins, eliminate double bookings, and track payments.
- **Key Pain Point:** Overlapping bookings between walk-ins and web visitors.

### Persona D: The Cafe & Kitchen Staff
- **Goal:** Receive live orders with specific table numbers, acknowledge preparation time, update order status (Preparing -> Ready -> Served), and collect payment either digitally or cash at counter.
- **Key Pain Point:** Misplaced paper chits, delayed orders during peak evening hours.

---

## 3. Detailed Functional Modules

### Module 1: STAY (Accommodation Management)
- **Inventory Hierarchy:** Properties -> Units (Private Rooms, Female Dorms, Mixed Dorms) -> Beds/Rooms.
- **Availability Engine:** Date-range intersection checking (`check_in` < `existing_check_out` AND `check_out` > `existing_check_in`).
- **Inventory Locking:** 10-minute provisional reservation hold upon entering checkout. If payment is unverified after 10 minutes, the hold expires automatically.
- **Pricing & Policies:** Base rate, seasonal weekend surge, occupancy rules, cancellation window (e.g., 48 hours prior for partial refund).

### Module 2: EAT (Cafe & QR Food Ordering)
- **Menu Hierarchy:** Categories (Breakfast, Parvati Valley Specials, Continental, Beverages, Desserts, Midnight Munchies) -> Dishes -> Modifiers/Add-ons.
- **Dine-In Flow:** Guests scan a unique QR code on their cafe table (URL contains `?table=T07`). The table number is automatically pinned to the session cart.
- **Takeaway Flow:** Guest specifies estimated pickup time and phone number.
- **Kitchen Order Display (KOT):** Live orders feed directly into the kitchen interface with visual status chips: `Received`, `In Kitchen`, `Ready for Pickup / Table Delivery`, `Completed`.
- **Payment Modes:** Immediate online pay (UPI/Cards via Razorpay) or "Pay at Counter / Pay Cash".

### Module 3: CELEBRATE (Events, Parties & Ticketing)
- **Event Profiles:** Title, banner artwork, artist lineup (featuring KingUrjapati & guest DJs), date/time, genre, entry rules, age restrictions.
- **Ticketing Engine:** Tiered tickets (Early Bird, Phase 1, VIP, Couple, Female Solo, Group Pass) with distinct price points and hard capacity limits.
- **Ticket Wallet & Delivery:** Upon verified payment, an encrypted QR pass is generated for the customer account and emailed with a unique ticket hash.
- **Gate Validation:** Staff interface with QR scanner capability to validate entry, preventing ticket duplication or re-entry fraud.

### Module 4: EXPLORE (Trekking, Tours & Local Transport)
- **Experience Catalog:** Day treks (Chalal, Rasol, Grahan), multi-day expeditions (Kheerganga, Pin Parvati, Sar Pass), photography walks, village cultural tours.
- **Capacity & Slots:** Maximum group sizes per slot, certified mountain guide assignments.
- **Transport Logistics:** Cab pickups from Bhuntar Airport / Chandigarh / New Delhi, local drop-offs, luggage porter requests.

### Module 5: MUSIC (KingUrjapati / DJ Pratap)
- **Artist Hub:** Bio, tour schedule, high-resolution media kit, streaming links (SoundCloud, Spotify, YouTube).
- **Embedded Audio Experience:** Persistent lightweight audio player for listening to curated sets while browsing the site.

### Module 6: USER & COMMUNITY
- **Authentication:** Passwordless OTP / Email-password login, guest checkout option with automatic account creation.
- **Customer Hub:** Unified timeline of upcoming stays, active cafe food orders, event QR passes, and trek bookings.

### Module 7: CENTRALIZED ADMIN & ROLE-BASED ACCESS
- **Super Admin:** Full platform visibility, financial audits, staff account creation, system configuration.
- **Reception:** Stay check-ins, guest verification, room allocation, walk-in registration.
- **Cafe Manager & Kitchen:** Menu management, 86-ing out-of-stock items, live KDS view.
- **Gatekeeper / Staff:** Mobile-friendly ticket scanner mode.
- **Guide / Partner:** View assigned group rosters and contact details for confirmed treks.

---

## 4. Non-Functional Requirements

1. **Performance:** Sub-1.5 second First Contentful Paint (FCP) on 4G Himalayan mobile networks. Minimal client bundle size (<250kB initial JS).
2. **Reliability & Concurrency:** Zero tolerance for overselling beds or event tickets. All inventory deductions must execute within database transactions with row-level locking.
3. **Responsive Design:** Mobile-first architecture (360px up to 4K ultra-wide) optimized for one-handed thumb navigation.
4. **Offline Resilience:** Resilient cart and order caching via local storage to handle transient mountain network drops.
5. **Security & Compliance:** Strict sanitization, CSRF protection, secure cookie handling, no storage of sensitive card details, and signed webhooks.

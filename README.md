# MAGICA — Digital Operating Platform

> **Stay. Eat. Celebrate. Feel the Magic.**  
> *Kasol, Parvati Valley, Himachal Pradesh, India*  
> Powered by Oh Magic View | Business Owner / Artist: DJ Pratap (KingUrjapati)

---

## 1. Executive Summary

MAGICA is an integrated hospitality, entertainment, tourism, and local-experiences operating platform designed for a boutique Himalayan destination in Kasol, Parvati Valley. It unites 5 core customer-facing pillars and 2 operational back-office hubs:

1. **STAY**: Dormitory beds, private rooms, seasonal rates, live inventory control, and double-booking prevention.
2. **EAT**: Digital cafe menu, QR-based dine-in ordering, takeaway, live kitchen status tracking, and pay-at-venue / online checkout.
3. **CELEBRATE**: Electronic music parties, DJ nights, festivals, ticket inventory management, attendee registration, and QR ticket check-ins.
4. **EXPLORE**: Himalayan trekking, guided village tours, local transport (pickup/drop), photography expeditions, and guide capacity scheduling.
5. **MUSIC**: KingUrjapati artist profile, releases, DJ mixes, playlists, event promotion, and tour dates.
6. **COMMUNITY / GUEST PORTAL**: Customer authentication, unified cart & checkout, booking history, ticket wallet, and real-time status.
7. **ADMIN & STAFF OPERATIONS**: Role-based operational dashboards for Super Admin, Reception, Cafe/Kitchen Staff, Event Check-in, and Guides.

---

## 2. Technology Stack & Architectural Strategy

### Current Development & Deployment Environment
- **Framework**: Next.js 16 (App Router) + React 19 + TypeScript (strict mode)
- **Styling**: Tailwind CSS + Lucide Icons + Selective Glassmorphism & Himalayan Dark Palette
- **Validation**: Zod + React Hook Form
- **Initial Hosting / CI/CD**: Vercel (`https://magica-ochre.vercel.app`) connected to GitHub (`privacychamber/Magica`)

### Mandatory Portability Strategy: MilesWeb Shared Hosting Ready
A hard architectural constraint is long-term portability to **MilesWeb PHP-only shared hosting** (Apache/PHP 8.3+ with MySQL 8+ / MariaDB).
To guarantee clean migration without rewriting business code:
1. **Frontend-Backend Decoupling**: The frontend presentation layer is strictly decoupled from backend logic. All data mutations and state queries interface through a standardized REST API contract (`/api/v1/*`).
2. **Zero Vercel/Next-Server Lock-in**: No essential business logic or state transitions are bound to Next.js Server Actions, Next.js dynamic Route Handlers, Edge middleware, or Vercel Blob/KV storage.
3. **Static Export Portability**: The frontend codebase maintains continuous compatibility with Next.js static HTML/JS/CSS export (`output: 'export'`), ready to be served from standard Apache `public_html` directories with client-side routing rewrites (`.htaccess`).
4. **Future Backend Target**: PHP 8.3+ with Laravel REST API, MySQL 8+, Laravel Sanctum (token-based auth), and Razorpay Webhooks.

---

## 3. Project Structure

```text
Magica/
├── .github/              # CI workflows and issue templates
├── docs/                 # Architecture, specifications, and deployment guides
│   ├── PRD.md            # Product Requirements Document
│   ├── architecture/     # System architecture, DB schema, security, portability
│   ├── decisions/        # Architecture Decision Records (ADRs)
│   ├── deployment/       # Vercel and MilesWeb shared hosting runbooks
│   └── implementation/   # Roadmap and feature status trackers
├── public/
│   ├── brand/            # Official MAGICA tiger artwork & brand identity assets
│   ├── images/           # Editorial Himalayan, stay, food, and event imagery
│   └── icons/            # SVG icons and favicons
├── src/
│   ├── app/              # Next.js App Router pages and route layouts
│   ├── components/       # Reusable design system primitives & layout components
│   ├── lib/              # Utility functions, formatting, date/time, cn helper
│   ├── modules/          # Domain-driven feature modules
│   │   ├── accommodation/# Stay inventory, rooms, dorms, booking forms
│   │   ├── cafe/         # Cafe menu, QR ordering, cart, kitchen workflow
│   │   ├── events/       # Parties, festivals, ticketing, QR check-in
│   │   ├── experiences/  # Treks, tours, transport, guides
│   │   ├── music/        # KingUrjapati profile, audio players, sets
│   │   ├── bookings/     # Unified booking engine & reservations
│   │   ├── payments/     # Payment interfaces, receipt handlers, state tracking
│   │   └── users/        # Auth forms, guest profile, ticket wallet
│   ├── services/         # API abstraction layer (Mock & REST API clients)
│   └── types/            # Shared TypeScript data contracts and schemas
├── tests/                # Unit, integration, and E2E test suites
├── .env.example          # Template for all environment variables
├── next.config.ts        # Next.js build configuration (supporting dual-mode export)
└── package.json          # Project dependencies and scripts
```

---

## 4. Development & Build Scripts

```bash
# Install dependencies
npm install

# Run local development server
npm run dev

# Run TypeScript check & production build
npm run build

# Start production server
npm run start

# Run linter
npm run lint
```

---

## 5. Development Phases

- **Phase 0 — Project Audit & Architecture** *(Current)*: Environment verification, repository audit, system architecture documentation, ADRs, and portability roadmap.
- **Phase 1 — Brand & Design System Foundation**: Dark Himalayan aesthetic, Midnight/Navy palette, Electric/Violet/Sunset accents, responsive navigation, and core UI primitives.
- **Phase 2 — Public Brand Experience**: Home, Stay, Eat, Celebrate, Explore, Music (KingUrjapati), About, Contact, and Policy pages with realistic seed data.
- **Phase 3 — Customer Portal & Booking Flows**: Guest authentication, live cart/checkout, ticket wallet, booking history, and dine-in QR ordering interface.
- **Phase 4 — Backend Engine & Database**: REST API contracts, MySQL schema migrations, transaction locks, and authentication tokens.
- **Phase 5 — Operations & Staff Portals**: Role-based access for Super Admin, Reception, Cafe/Kitchen Staff, and Event Check-in.
- **Phase 6 — Payments & Real-time Integrations**: Razorpay checkout, verified webhook listeners, automated receipt generation, and SMS/WhatsApp notifications.
- **Phase 7 — Verification, Testing & Production Hardening**: Security audit, concurrency testing on room inventory, and performance optimization.
- **Phase 8 — MilesWeb Shared Hosting Deployment**: Static export verification, Apache `.htaccess` routing, PHP API setup, and automated deployment scripts.

---

## 6. Business Integrity Rules

1. **Integer Minor Units**: All monetary amounts are handled and calculated as integer minor units (paise in INR, e.g., ₹500.00 = `50000`) to prevent floating-point inaccuracies.
2. **Timezone Awareness**: All business bookings, cafe hours, trek departures, and event timings are anchored to Indian Standard Time (`Asia/Kolkata`, UTC+5:30), while internal database storage uses UTC ISO-8601 timestamps.
3. **Strict Payment Verification**: Frontends never confirm reservations on client-side status alone. Orders remain in `pending_payment` until an authoritative backend webhook or server-to-server signature validation confirms the capture.
4. **Anti-Overselling Guard**: Room, bed, trek, and event ticket allocations utilize transactional locks and inventory hold timeouts (10 minutes) during checkout.

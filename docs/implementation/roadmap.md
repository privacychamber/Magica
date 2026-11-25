# MAGICA — Implementation Roadmap

**Current Phase:** Phase 0 (Complete)  
**Next Phase:** Phase 1 (Brand & Frontend Foundation)  

---

## Phase Overview & Milestones

| Phase | Title | Scope & Key Deliverables | Status |
| :---: | :--- | :--- | :---: |
| **0** | **Project Audit & Architecture** | Environment audit, Next.js 16 verification, GitHub/Vercel audit, complete architecture specs, ADRs, PRD, database schema, and portability design. | **DONE** |
| **1** | **Brand & Design Foundation** | Design tokens, Midnight/Navy palette, typography hierarchy, responsive navigation, mobile drawer, brand asset slot (`public/brand/`), reusable UI components, and cinematic homepage foundation. | **DONE** |
| **2** | **Public Experience Pages** | Full detail pages for Stay (rooms/dorms), Eat (menu/categories), Celebrate (event listings/tiers), Explore (treks/transport), Music (KingUrjapati hub), About, Contact, Policies with realistic seed data. | *NEXT PHASE* |
| **3** | **Customer Experience & Bookings** | User auth (guest/token), unified cart & checkout UI, live dine-in table QR context, ticket wallet, booking history view, and provisional hold mock workflows. | *PLANNED* |
| **4** | **Backend Engine & Database** | PHP 8.3+ / Laravel REST API, MySQL migrations, Sanctum authentication, transactional inventory locking, and API endpoints matching frontend contracts. | *PLANNED* |
| **5** | **Operational Dashboards** | Role-based portals: Super Admin (revenue, inventory), Reception (check-in/stay), Cafe/Kitchen (KDS), Gatekeeper (QR ticket validator), and Guides. | *PLANNED* |
| **6** | **Payments & Real-time Integrations** | Razorpay checkout integration, signed webhook processing, automated receipts, booking confirmation triggers (SMS/WhatsApp notifications). | *PLANNED* |
| **7** | **Testing & Launch Hardening** | Concurrency testing on room allocations, security review, performance audit on 4G networks, and responsive testing across mobile viewports. | *PLANNED* |
| **8** | **MilesWeb Shared Hosting Migration**| Static HTML export validation, Apache `.htaccess` routing, PHP API deployment on MilesWeb cPanel, database migration, and live cutover. | *PLANNED* |

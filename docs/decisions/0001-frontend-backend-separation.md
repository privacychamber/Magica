# ADR 0001: Strict Frontend-Backend Separation & Decoupled REST Contract

## Status
Accepted

## Context
MAGICA is initially deployed on Vercel for rapid frontend iteration, but must be fully capable of migrating to MilesWeb PHP-only shared hosting in the future. If business logic, database transactions, or payment processing are tied directly to Next.js Server Actions, Next.js dynamic Route Handlers, or Vercel proprietary cloud primitives (e.g., Vercel KV/Postgres/Blob), moving the site to Apache shared hosting would require an expensive full rewrite.

## Decision
1. We enforce strict separation of concerns between presentation and business logic.
2. The frontend is built as a client-side Single Page Application (SPA) / static bundle that communicates with the backend exclusively via standard HTTP REST APIs (`/api/v1/*`).
3. Core domain actions (inventory verification, provisional booking holds, payment webhook validation, user permissions) are implemented strictly in the backend service layer (PHP 8.3+ / Laravel) or behind an abstract Service interface in TypeScript (`src/services/*`).
4. In local development and initial Vercel previews, an in-memory deterministic Mock Adapter satisfies the Service interface without requiring an active remote database.

## Consequences
- **Positive:** Absolute portability to any hosting environment (Vercel, Apache, Nginx, Docker, Netlify, Cloudflare Pages).
- **Positive:** Zero risk of vendor lock-in to Vercel.
- **Positive:** Frontends and backends can be scaled, tested, and updated independently.
- **Negative:** Requires maintaining strict TypeScript API contract interfaces between frontend and backend.

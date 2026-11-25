# MAGICA — Deployment & Portability Architecture

**Document Version:** 1.0.0  
**Author:** Lead Software Architect  

---

## 1. Dual Deployment Strategy

To achieve both high-speed current development and 100% adherence to the **MilesWeb PHP-only shared hosting** mandate, MAGICA is architected with a **Dual-Mode Deployment Model**:

| Mode | Environment | Hosting Provider | Execution Model | API Integration |
| :--- | :--- | :--- | :--- | :--- |
| **Mode 1 (Active Dev / Previews)** | Modern Web Platform | **Vercel** (`magica-ochre.vercel.app`) | Next.js Node/Edge Build (App Router) | Toggleable: In-memory Mock Service OR remote REST API |
| **Mode 2 (Long-Term Production)** | Shared Hosting | **MilesWeb** (Apache / PHP 8.3 / MySQL) | Next.js Static Export (`output: 'export'`) in Apache `public_html` | Decoupled PHP REST API at `api.magica.in` |

---

## 2. Next.js Static Export Portability Checklist

When building for static export on Apache (`next build` with `output: 'export'`), Next.js generates a pure HTML, CSS, and JS bundle in the `out/` directory.

### Strict Coding Rules to Preserve Static Portability:
- **No Dynamic Server Route Handlers**: Avoid relying on dynamic Node.js server handlers (`src/app/api/...`) for business transactions. Use an external REST client configured with `NEXT_PUBLIC_API_BASE_URL`.
- **No Server Actions (`'use server'`)**: Server Actions require a running Node.js server. All mutations must occur via client-side fetch calls against documented REST API endpoints.
- **Client-Side Authentication**: Use token-based authentication (Bearer tokens in headers / localStorage / memory) rather than `httpOnly` server-managed session cookies that require Next.js middleware execution.
- **Image Optimization Handling**: Next.js `<Image />` default optimization requires a Node.js server. For static export builds, `images: { unoptimized: true }` is enabled in `next.config.ts`.
- **Client-Side Routing Rewrites**: In Apache, deep links (e.g. `/stay/parvati-riverside-suite`) must be routed to `index.html` via `.htaccess` mod_rewrite.

---

## 3. Portable Configuration: `next.config.ts`

The project's `next.config.ts` is configured to adapt dynamically based on the build target:

```typescript
import type { NextConfig } from "next";

const isStaticExport = process.env.NEXT_EXPORT === "true";

const nextConfig: NextConfig = {
  output: isStaticExport ? "export" : undefined,
  images: {
    unoptimized: isStaticExport,
  },
  trailingSlash: isStaticExport,
};

export default nextConfig;
```

This guarantees that running `npm run build` maintains standard Next.js behavior for Vercel, while `NEXT_EXPORT=true npm run build` produces a 100% static folder deployable to any Apache/cPanel shared server.

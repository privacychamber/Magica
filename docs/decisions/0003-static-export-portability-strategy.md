# ADR 0003: Static Export Portability Strategy for Next.js

## Status
Accepted

## Context
Next.js supports multiple deployment modes: Node.js server SSR, Edge SSR, and Static HTML/JS Export (`output: 'export'`). Because MilesWeb PHP-only shared hosting does not support long-running Node.js server daemons, the frontend will ultimately be hosted as static files on an Apache web server.

## Decision
1. We configure `next.config.ts` to support dual-mode builds via `NEXT_EXPORT=true`.
2. Standard `npm run build` retains standard Next.js behavior for Vercel deployment.
3. Running `NEXT_EXPORT=true npm run build` activates `output: 'export'`, generating static HTML, CSS, and JS in `out/`.
4. We enforce static compatibility:
   - No usage of `'use server'` or dynamic Route Handlers that depend on incoming HTTP Request objects.
   - Dynamic routing on Apache is managed via client-side routing and an `.htaccess` rewrite rule fallback to `index.html`.
   - Images in static export use `unoptimized: true` to bypass Node.js image optimization servers.

## Consequences
- **Positive:** Continuous verification that the codebase can be exported to pure static assets at any moment.
- **Positive:** Eliminates architectural surprises during Phase 8 migration to MilesWeb.

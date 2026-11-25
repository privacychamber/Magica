# ADR 0002: Service Abstraction Layer for Data Fetching

## Status
Accepted

## Context
During early development phases (Phases 1-3), the team must build polished user experiences, booking wizards, cafe menus, and ticket wallets before the PHP backend is provisioned on MilesWeb. We need a development architecture that allows rapid UI development with realistic data while guaranteeing zero friction when the real REST API is connected.

## Decision
1. All data access in UI components occurs via domain service clients in `src/services/` (e.g., `accommodationService`, `cafeService`, `eventService`, `bookingService`).
2. Components never make raw `fetch` calls with hardcoded URLs.
3. The service layer inspects the environment variable `NEXT_PUBLIC_USE_MOCK_API`.
   - If `true`: Services return data from high-fidelity, deterministic in-memory mock repositories (`src/services/mock/*`).
   - If `false`: Services execute standard HTTP calls against `NEXT_PUBLIC_API_BASE_URL`.
4. Mock data structures match the production MySQL schema and TypeScript definitions in `src/types/` exactly.

## Consequences
- **Positive:** Enables full frontend development, client testing, and UI approvals without backend blocking.
- **Positive:** Switching to the live production API requires zero changes to UI components—only toggling an environment variable.

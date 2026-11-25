# ADR 0005: Concurrency Control and Anti-Double-Booking Architecture

## Status
Accepted

## Context
MAGICA offers limited inventory: individual dorm beds, private rooms, high-demand festival passes, and guide-led trek slots. Simultaneous checkout attempts during peak festival announcements could lead to overselling and double bookings.

## Decision
1. A **Two-Phase Inventory Reservation** pattern is enforced:
   - **Phase 1: Provisional Hold:** When a guest initiates checkout, the backend attempts an atomic inventory lock. If available, a reservation record is created with `status: 'pending_payment'` and a strict 10-minute hold timestamp (`hold_expires_at = NOW() + 10 MINUTES`).
   - While the hold is active, that bed/ticket is excluded from general availability searches.
   - **Phase 2: Authoritative Confirmation:** Upon verified payment webhook confirmation from Razorpay, the reservation status transitions to `confirmed`.
   - **Expiry:** Any pending hold older than 10 minutes without capture is automatically released by background garbage collection or on subsequent availability lookups.
2. **Database Concurrency:** In MySQL/MariaDB, availability verification and hold insertions execute inside database transactions using row-level locks (`SELECT ... FOR UPDATE`) on the inventory row.

## Consequences
- **Positive:** Eliminates double bookings and overselling even under heavy concurrent traffic.
- **Positive:** Provides users a guaranteed 10-minute window to complete UPI or card payments without losing their selected room or ticket.

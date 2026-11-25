# ADR 0004: Currency Minor Units and Timezone Standardization

## Status
Accepted

## Context
MAGICA processes real transactions for dorm beds, luxury suites, cafe orders, festival tickets, and trekking expeditions. Financial rounding errors or timezone mismatches (e.g. check-in dates shifting across midnight) cause guest disputes and accounting discrepancies.

## Decision
1. **Monetary Representation:**
   - All monetary values in memory, APIs, forms, and database columns are stored as **integer minor units** (Indian Paise, where ₹1.00 = 100 paise).
   - Display formatting converts paise to INR string (e.g., `80000` -> `"₹800.00"`) only at the final presentation layer using a standardized utility `formatCurrency(paise)`.
   - No floating-point arithmetic is permitted on currency totals.
2. **Timezone Standardization:**
   - Business operations (check-in/check-out hours, cafe kitchen order timestamps, DJ night schedules, trek departure times) are anchored to **`Asia/Kolkata` (IST, UTC+5:30)**.
   - Internal storage in the database and API payloads utilizes UTC ISO-8601 strings (`2026-11-25T14:30:00Z`).
   - Client date/time rendering explicitly converts to IST for all user-facing strings.

## Consequences
- **Positive:** Zero IEEE-754 floating-point inaccuracies during cart subtotals, tax calculation, or payment verification.
- **Positive:** Reliable scheduling for late-night music events and check-ins across timezones.

# MAGICA — Backend & Hosting Environment Evaluation

**Document Version:** 1.0.0  
**Target Hosting:** MilesWeb Shared Hosting (Apache / PHP 8.3+ / MySQL)  
**Author:** Lead Software Architect  

---

## 1. Hosting Constraints & Environment Analysis

The operational owner has established a strategic requirement: **Long-term hosting on MilesWeb PHP-only shared hosting**. While Next.js on Vercel is selected for high-velocity frontend development and previewing, the production backend and static frontend must operate reliably on MilesWeb cPanel / DirectAdmin shared infrastructure.

### Detailed Audit of MilesWeb Shared Hosting Capabilities

| Parameter | Shared Hosting Reality | Impact on Architecture | Mitigating Architectural Decision |
| :--- | :--- | :--- | :--- |
| **PHP Version** | PHP 8.1 - 8.3+ via cPanel MultiPHP Manager | Positive: modern PHP 8.3 features (readonly classes, typed constants, match expressions) are available. | Standardize backend on PHP 8.3 syntax and strict typing. |
| **Node.js Daemon Support** | Unavailable or severely throttled (`Passenger`/`CloudLinux` LVE limits memory to 512MB-1GB and terminates persistent Node processes). | Next.js dynamic SSR server (`next start`) **cannot** be reliably hosted on shared PHP hosting. | **Static HTML/JS Export (`output: 'export'`)**: Compile the Next.js frontend into pure static assets served by Apache. |
| **Database Engine** | MySQL 8.0+ or MariaDB 10.6+ | Robust support for InnoDB, foreign keys, row-level locks, JSON columns, and transactions. | Utilize standard MySQL 8.0 syntax; avoid proprietary database extensions. |
| **Command-Line & Composer** | SSH access is available or can be enabled; Composer can be run via SSH or bundled in deployment. | Composer dependencies can be managed via GitHub Actions and deployed via FTP/Git. | Set up a build artifact deployment pipeline so shared server does not run heavy npm/composer builds. |
| **Background Daemons & Queues** | Long-running supervisor daemons (`php artisan queue:work`) are typically killed by process watchers after minutes. | Heavy queue workers cannot run as continuous 24/7 background daemons on shared hosting. | **Synchronous Webhooks + Scheduled Cron Fallback**: Process critical payments immediately in the webhook handler; use cPanel Cron (`* * * * * php artisan schedule:run`) for queue processing. |
| **HTTPS & SSL** | AutoSSL / Let's Encrypt / cPanel SSL included free. | Full end-to-end TLS encryption available for API endpoints and webhooks. | Enforce HTTPS everywhere with HSTS in `.htaccess`. |
| **Webhooks** | Incoming POST requests to public PHP scripts work without restriction. | Razorpay webhooks can be received reliably on `https://api.magica.in/webhooks/razorpay`. | Ensure webhook controller handles idempotency and quick HTTP 200 responses. |
| **File Storage & Uploads** | Local disk storage on shared hosting has inode limits and permission constraints. | Media uploads (menu photos, room galleries) should not overburden local shared disks. | Support local `public/storage` with symlinks for phase 1; allow simple switch to Cloudflare R2 / S3 for scalable asset storage. |

---

## 2. Backend Framework Selection: Why Laravel 11 (PHP 8.3+)

For a production hospitality platform requiring robust authentication, role permissions, transactional integrity, and database migrations on PHP shared hosting, **Laravel** is the optimal choice:

1. **Clean Separation of Concerns:** Route definitions (`routes/api.php`), Form Requests (validation), Controllers (orchestration), Services (business logic), and Eloquent Models (data mapping) keep the codebase structured.
2. **First-Class Database Migrations & Seeders:** Clean version-controlled database schema evolution.
3. **Lightweight Token Authentication (Laravel Sanctum):** Issues secure bearer tokens (`Bearer magica_pat_...`) that work flawlessly with both mobile clients and static/decoupled single-page web frontends without requiring stateful domain cookies.
4. **Artisan Automation:** Easy database migration and administrative commands via cPanel terminal or cron.
5. **Decoupled API Specification:** The frontend only speaks REST API JSON. It is completely unaware whether the response came from Laravel or any other backend.

---

## 3. Alternative Backend Strategies Evaluated

### Option A: Next.js API Routes / Server Actions on Vercel
- **Verdict: REJECTED for Core Business Logic.**
- *Reasoning:* While convenient during initial Vercel hosting, making core booking, inventory locking, or payment webhook logic dependent on Next.js Server Actions or Node server runtimes permanently traps the platform on Vercel/Node infrastructure, directly violating the MilesWeb shared hosting mandate.

### Option B: Raw Custom PHP Scripts (No Framework)
- **Verdict: REJECTED.**
- *Reasoning:* Writing custom database wrappers, session handlers, routers, and query builders from scratch creates massive security vulnerabilities (SQL injection, broken auth, lack of CSRF/token standards) and makes maintenance difficult.

### Option C: Micro-Framework (Slim 4 / Lumen)
- **Verdict: VIABLE BACKUP, BUT LARAVEL PREFERRED.**
- *Reasoning:* Slim 4 is extremely lightweight, but lacks built-in migrations, robust CLI scaffolding, and standardized token authentication out of the box, requiring more manual plumbing. Laravel 11 is now ultra-lightweight and runs fast on PHP 8.3 shared hosting.

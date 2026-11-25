# MilesWeb Shared Hosting Deployment Guide — MAGICA Platform

**Target Environment:** MilesWeb cPanel / DirectAdmin Shared Hosting  
**Server Platform:** Apache 2.4+ / LiteSpeed Web Server  
**PHP Version:** PHP 8.3+  
**Database:** MySQL 8.0+ / MariaDB 10.6+  
**Web Root:** `public_html/`  

---

## 1. Architecture On Shared Hosting

In production on MilesWeb, the architecture is partitioned into two clean subdirectories:

1. **Frontend (Static SPA):** Deployed to `public_html/` (or `public_html/magica/`).
2. **Backend (Laravel REST API):** Deployed above web root (e.g., `~/magica-api/`), with its public index symlinked or mapped to `public_html/api/` (or a subdomain like `api.magica.in`).

```text
/home/username/
├── magica-api/                    # Laravel 11 Backend Code (Protected from web)
│   ├── app/
│   ├── bootstrap/
│   ├── config/
│   ├── database/
│   ├── routes/
│   ├── storage/
│   └── .env                       # Backend secrets (DB, Razorpay Secret)
└── public_html/                   # Public Web Root
    ├── .htaccess                  # Apache mod_rewrite for Frontend SPA routing
    ├── index.html                 # Exported Next.js root
    ├── _next/                     # Exported JavaScript, CSS, chunks
    ├── brand/                     # Brand tiger artwork and logos
    ├── images/                    # Static assets
    └── api/                       # Symlink to /home/username/magica-api/public/
```

---

## 2. Apache `.htaccess` Configuration for Next.js Static Export

To ensure client-side routes (such as `/stay`, `/eat`, `/celebrate`, `/booking/123`) resolve properly without 404 errors, place this `.htaccess` file inside `public_html/`:

```apache
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /

    # Enforce HTTPS
    RewriteCond %{HTTPS} off
    RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

    # Don't rewrite actual files or directories
    RewriteCond %{REQUEST_FILENAME} -f [OR]
    RewriteCond %{REQUEST_FILENAME} -d
    RewriteRule ^ - [L]

    # Route all other URLs to the index.html SPA entrypoint
    RewriteRule ^ index.html [L]
</IfModule>

# Security Headers & Caching
<IfModule mod_headers.c>
    Header set X-Content-Type-Options "nosniff"
    Header set X-Frame-Options "SAMEORIGIN"
    Header set X-XSS-Protection "1; mode=block"
    Header set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>
```

---

## 3. Deployment Runbook

1. **Build Static Bundle Locally or in CI:**
   ```bash
   NEXT_EXPORT=true npm run build
   ```
2. **Upload Bundle:** Upload contents of `out/` to MilesWeb `public_html/`.
3. **Deploy Laravel API:**
   - Clone or rsync `magica-api` into `/home/username/magica-api/`.
   - Run `php artisan migrate --force`.
   - Link storage: `php artisan storage:link`.
4. **Setup cPanel Cron Job:**
   Schedule the Laravel scheduler to handle booking expirations:
   ```cron
   * * * * * cd /home/username/magica-api && php artisan schedule:run >> /dev/null 2>&1
   ```

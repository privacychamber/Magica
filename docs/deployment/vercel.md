# Vercel Deployment Guide — MAGICA Platform

**Project Identifier:** `magica`  
**Vercel Team / Account:** `varuns-projects-8e9926c5`  
**Production URL:** `https://magica-ochre.vercel.app`  
**GitHub Repository:** `https://github.com/privacychamber/Magica`  
**Primary Branch:** `main`  

---

## 1. Overview

Vercel serves as the high-velocity development and staging deployment platform for MAGICA. Every commit to `main` triggers an automatic preview and production build.

---

## 2. Environment Variables Configuration

The following variables should be registered in the Vercel Project Settings (`Settings -> Environment Variables`):

| Variable Name | Environment | Example Value | Description |
| :--- | :--- | :--- | :--- |
| `NEXT_PUBLIC_APP_URL` | Production | `https://magica-ochre.vercel.app` | Base canonical application URL |
| `NEXT_PUBLIC_APP_NAME` | All | `MAGICA` | Platform branding |
| `NEXT_PUBLIC_USE_MOCK_API` | Production / Preview | `true` (until live PHP API deployed) | Controls in-memory deterministic mock vs remote REST API |
| `NEXT_PUBLIC_API_BASE_URL` | Production | `https://api.magica.in/v1` | Production PHP REST API URL |
| `NEXT_PUBLIC_RAZORPAY_KEY_ID` | Production | `rzp_live_...` | Razorpay public key for checkout UI |
| `NEXT_PUBLIC_DEFAULT_TIMEZONE`| All | `Asia/Kolkata` | Operating business timezone |
| `NEXT_PUBLIC_DEFAULT_CURRENCY`| All | `INR` | Default transaction currency |

---

## 3. Deployment Verification Checklist

- [x] Repository connected to GitHub (`privacychamber/Magica`).
- [x] Node.js version aligned with project engine (Node 25.x / 20.x+).
- [x] Framework preset set to **Next.js**.
- [x] Clean zero-error build verified locally via `npm run build`.
- [x] All client bundle sizes audited.

# Vista del Sol – Interactive Lot Sales Website

## Project Overview
This repository contains the codebase and specifications for a **one-page interactive website**
to market and sell lots for the *Vista del Sol* subdivision.

The site will display an animated subdivision plan with **41 lots**, showing:
- Lot numbers
- Availability status
- Optional pricing
- Buyer inquiry capture

This project is designed so **lot availability and contact info can be updated later without code changes**.

---

## Core Requirements

### Website Type
- Single-page, responsive website (desktop + mobile)

### Interactive Subdivision Plan
- Display a plan image (derived from the subdivision plat)
- Overlay clickable lots (Lots 1–41)
- Each lot displays:
  - Lot number
  - Availability status (Available / Under Contract / Sold / Hold)
  - Optional price
- Clicking a lot opens a detail panel or modal

### Lot Count & Pricing
- Total lots: **41**
- Starting price: **$140,000**
- Prices may vary per lot and are subject to change

### Lead Capture
Form must collect:
- First Name
- Last Name
- Email
- Phone Number
- Interested Lot Number (auto-filled when clicking a lot)

### Contact CTA
- Phone number displayed prominently:
  **512-660-8405**
- Phone number must be easy to change later

### Map
- Embedded Google Map showing the development location
- Final address or coordinates to be confirmed

---

## Data Management

### Lot Data
Lot availability and pricing must be driven from a data file (JSON or CMS).

Initial implementation uses:
```
/data/lots.json
```

### Site Configuration
Global settings (phone number, starting price) live in:
```
/data/site-config.json
```

---

## Recommended Tech Stack
- Next.js (React)
- Tailwind CSS
- Framer Motion (animations)
- SVG or positioned overlays for lot interaction

---

## Acceptance Criteria
- All 41 lots visible and clickable
- Lot status color-coded and editable
- Lead form captures buyer information
- Mobile responsive
- Fast load times
- SEO-ready

---

## Deployment
Recommended hosting:
- Vercel (GitHub integration)

Every push to `main` triggers a new deployment.

---

## Notes
This project is intentionally structured for **easy future updates**
by non-technical users.

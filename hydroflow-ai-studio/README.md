# HydroFLOW Jamaica — Google AI Studio Website Project

## Overview
A new responsive React + TypeScript + Vite frontend based on the approved HydroFLOW Jamaica page mockups. The uploaded Evolve Holiday Campaign ZIP was used as a technical reference only; its source code, branding, campaign content and integrations were not copied.

## Start in Google AI Studio
Import or upload the project ZIP into a new code project. This is a standard Vite app. Install dependencies (`npm install`) and start (`npm run dev`). Production build: `npm run build`.

## Pages
- `/` Homepage
- `/how-it-works` How It Works
- `/applications` Applications
- `/products` Product catalogue
- `/products/pearl`, `/products/pearl-plus`, `/products/hs40`, `/products/commercial` Product details
- `/case-studies` Case Studies
- `/about` About
- `/insights` Insights
- `/contact` Contact
- `/assessment` Request a Water System Assessment
- `/cart` Cart
- `/checkout` Checkout preview

## Important launch requirements
- Replace the original concept SVG illustrations in `public/assets` with approved, authentic manufacturer product photography and licensed images. Current product artwork is illustrative, not manufacturer-accurate.
- Confirm exact legal entity, contact details, product specifications, model compatibility, warranties, prices, currencies, tax, delivery and installation rules.
- Replace the demonstration product catalogue in `src/App.tsx` with server-managed approved product data. Residential Add to Cart is interactive but no payment is taken.
- Connect checkout to a suitable payment provider with server-side verification. Never expose secret payment keys in frontend code.
- Connect assessment/contact forms to a secure endpoint or CRM, with spam protection, privacy notice and consent records. Demo forms validate locally but do not send data.
- Obtain permission to publish case-study customer names, figures and claims. Current cards are explicitly placeholders and avoid invented metrics.
- Add legal pages, SEO metadata per route, analytics and error monitoring, and test accessibility and responsive behavior.
- Confirm whether assessment requests are free, paid, remote or on-site before publishing related promises.
- Configure SPA history fallback for production hosting.

## Design
Responsive max-width 1160px, spacious one-section-per-row layout, maximum four columns. Navy/teal palette inspired by the approved mockups.

## Validation note
Source files and assets are packaged. Automated npm dependency installation/build could not be completed in the current offline runtime. Run `npm install && npm run lint && npm run build` in Google AI Studio and resolve any environment-specific package issues before deployment.

# underfit.io

The official website for [underfit.io](https://underfit.io) — a research company at the intersection of AI and cybersecurity, building security infrastructure for AI-driven enterprises.

Built with **Next.js 15** (static export), **TypeScript**, and **Tailwind CSS**. Deployed to GitHub Pages via GitHub Actions on every push to `main`.

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Output | Static HTML export (`out/`) |
| Deployment | GitHub Actions → GitHub Pages |
| DNS | Cloudflare (DNS-only, `underfit.io`) |

---

## Getting started

### Prerequisites

- Node.js v20 or higher
- npm

### Install dependencies

```bash
npm install
```

### Development server

```bash
npm run dev
```

Runs at `http://localhost:3000`.

### Production build

```bash
npm run build
```

Generates a fully static site in `out/`. All pages are pre-rendered at build time — no server required.

---

## Project structure

```
underfit.io/
├── app/                             # Next.js App Router pages
│   ├── page.tsx                     # Homepage
│   ├── layout.tsx                   # Root layout (nav, footer, fonts)
│   ├── globals.css                  # Global styles + background
│   ├── products/
│   │   ├── gateway/page.tsx         # Gateway product page
│   │   └── data-fabric/page.tsx     # Data Fabric product page
│   ├── services/page.tsx            # Consulting services
│   ├── contact/page.tsx             # Contact form → info@underfit.io
│   ├── resources/page.tsx           # Resources hub (coming soon)
│   ├── blog/                        # Insights / blog
│   ├── privacy/page.tsx
│   └── security/page.tsx
│
├── components/
│   ├── layout/
│   │   ├── TopNav.tsx               # Sticky nav + announcement banner
│   │   ├── AnnouncementBanner.tsx   # Rotating carousel strip
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── CtaBand.tsx              # Full-width gradient CTA strip
│   │   ├── FeatureGrid.tsx          # Card grid (3-col or 2-col)
│   │   ├── PageHero.tsx             # Shared hero for inner pages
│   │   └── StepGrid.tsx             # Numbered step methodology grid
│   └── ui/
│       ├── Callout.tsx
│       ├── Eyebrow.tsx              # Kicker label with accent dot
│       └── Pill.tsx                 # Status badge (accent / default)
│
├── content/
│   ├── nav.ts                       # Navigation structure (drives TopNav)
│   └── blog-posts.ts                # Blog post metadata
│
├── public/
│   ├── CNAME                        # underfit.io — required for GitHub Pages custom domain
│   ├── .nojekyll                    # Disables Jekyll processing on GitHub Pages
│   ├── favicon.svg                  # UN mark (U + dot + N in #635BFF)
│   └── logo*.svg                    # Logo variants
│
└── .github/
    └── workflows/
        └── deploy.yml               # CI/CD: build → upload → deploy pages
```

---

## Design system

The site uses a dark-mode-only design with Stripe-inspired purple.

### Color tokens (Tailwind)

| Token | Value | Usage |
|---|---|---|
| `canvas` | `#050505` | Page background |
| `accent` | `#635BFF` | Primary purple |
| `accent-strong` | `#7A73FF` | Hover state |
| `accent-on` | `#ffffff` | Text on accent backgrounds |
| `ink` | `#f5f5ef` | Primary text |
| `muted` | `#a0a0a8` | Secondary text |
| `muted-2` | `#606068` | Tertiary / captions |

### Gradient

```css
linear-gradient(135deg, #635BFF 0%, #A259FF 100%)
```

Used on `CtaBand`, step circles, and feature accent cards.

### Background

Fixed dark canvas with a large radial purple glow from the top-centre, a subtle 60px dot grid, and secondary accent glows. Defined in `app/globals.css` via `body::before` (grid) and `body::after` (glows).

### Logo

UN combined lettermark — U shape + separator dot + N, all in `#635BFF`. Inline SVG in `TopNav.tsx` and `Footer.tsx`. Full-size at `public/logo.svg`.

---

## Navigation

Controlled by `content/nav.ts`. Current structure:

```
Products & Services
  ├─ Products
  │    ├─ Gateway          /products/gateway
  │    └─ Data Fabric      /products/data-fabric
  └─ Services
       └─ Consulting       /services

Resources                  /resources  (coming soon)

[Contact us]               /contact    (CTA button)
```

---

## Deployment

### Automatic (CI/CD)

Every push to `main` triggers `.github/workflows/deploy.yml`:

1. Checkout → `npm ci` → `npm run build`
2. Upload `out/` as a Pages artifact
3. Deploy to GitHub Pages

Enable once in **Settings → Pages → Source → GitHub Actions**.

### Custom domain (Cloudflare + GitHub Pages)

**Cloudflare DNS** — all records set to **DNS only** (gray cloud):

| Type | Name | Content |
|---|---|---|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `<github-username>.github.io` |

**GitHub Pages** → Settings → Pages → Custom domain → `underfit.io` → Save → Enforce HTTPS.

The `public/CNAME` file is included in every build so the custom domain is never reset on re-deploy.

---

## Data sources

Statistics used across the site are sourced from published 2024–2025 research:

- IBM Security — [Cost of a Data Breach Report 2024](https://www.ibm.com/reports/data-breach)
- McKinsey & Company — [State of AI Survey 2024](https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai)
- Research and Markets — [AI Cybersecurity Market 2025](https://www.researchandmarkets.com/report/artificial-intelligence-based-cybersecurity)
- Deepstrike — [AI Cyber Attack Statistics 2025](https://deepstrike.io/blog/ai-cyber-attack-statistics-2025)
- Brightside AI — [Phishing Analysis 2025](https://www.brside.com/blog/ai-generated-phishing-vs-human-attacks-2025-risk-analysis)
- Coherent Market Insights — [Data Fabric Market 2025–2032](https://www.coherentmarketinsights.com/blog/information-and-communication-technology/data-fabric-market-size-forecast-2025-2032-drivers-2476)
- Total Assure — [AI Cybersecurity Stats](https://www.totalassure.com/blog/ai-cybersecurity-stats)

---

## Contact

**info@underfit.io** — the contact form at `/contact` opens a pre-filled mailto draft to this address.

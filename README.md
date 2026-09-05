# IKLA MAISON — Five Luxury Houses Digital Flagship

An architectural, multi-brand digital collective uniting five distinct independent fashion houses under a singular high-editorial luxury experience:

* **IKLA Maison** — Architectural elegance, structured tailoring, and quiet travertine luxury.
* **KTSE** — Disciplined brutalist streetwear, heavyweight cottons, and monolithic silhouettes.
* **Motéon** — Mediterranean resort leisure, fluid woven linens, and sunlit terracotta warmth.
* **Moral Compass** — Directional precision, celestial slate/forest aesthetics, and astronomical navigation.
* **My Drink Family** — Celebratory lounge, emerald velvet textures, and evening golden-hour silhouettes.

---

## Technology Stack

* **Framework**: [React 19](https://react.dev/) (`react`, `react-dom`)
* **Build Tooling & Bundler**: [Vite 8](https://vite.dev/) (`@vitejs/plugin-react`)
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/vite`, modern `@theme` variables)
* **Icons**: [Lucide React](https://lucide.dev/)
* **Automated Quality Assurance**: [Playwright](https://playwright.dev/) (Multi-device E2E verification)

---

## Getting Started

### Prerequisites

* **Node.js**: `v18.0.0` or higher (tested on `v24.x`)
* **Package Manager**: `npm` (v9+) or compatible package manager

### 1. Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/ernestyearby-svg/ikla-maison-web.git
cd ikla-maison-web
npm install
```

### 2. Environment Configuration

Copy the example environment file:

```bash
cp .env.example .env
```

Variables in `.env.example`:
* `VITE_APP_NAME`: Application display name
* `VITE_APP_ENV`: Environment designation (`development`, `production`)
* `VITE_SITE_URL`: Base application URL

### 3. Local Development

Start the development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

* **Local Machine Access**: [http://localhost:5173](http://localhost:5173)
* **Network / Mobile Access**: Bind to `0.0.0.0` to test on devices connected to the local Wi-Fi:
  ```bash
  npm run dev -- --host 0.0.0.0 --port 5173
  ```

### 4. Production Build

Compile and bundle the project for production:

```bash
npm run build
```

Build outputs will be generated in the `dist/` directory:
* Optimized HTML, CSS, and JS bundles
* Asset compression and code-splitting

### 5. Preview Production Build

Locally serve the production output (`dist/`):

```bash
npm run preview
```

### 6. Automated Testing & Verification

Run the end-to-end multi-device Playwright test suite covering Desktop (1440×900), Tablet (768×1024), and Mobile (390×844) viewports:

```bash
node tests/test_suite.js
```

---

## Deployment Guide

### Vercel Deployment (Recommended)

1. Import the repository `ikla-maison-web` into your [Vercel Dashboard](https://vercel.com/dashboard).
2. Configure project settings:
   * **Framework Preset**: `Vite`
   * **Build Command**: `npm run build`
   * **Output Directory**: `dist`
   * **Install Command**: `npm install`
   * **Node.js Version**: `18.x` or `20.x`
3. Click **Deploy**.

---

## Project Structure

```text
ikla-maison-web/
├── public/
│   └── assets/                  # High-resolution webp photography & transparent logos
│       ├── ikla-maison/
│       ├── ktse/
│       ├── moteon/
│       ├── moral-compass/
│       └── my-drink-family/
├── src/
│   ├── components/              # Reusable UI components (ProductCard, Navbar, CartDrawer, etc.)
│   ├── context/                 # State providers (CartContext)
│   ├── data/                    # Authoritative brand catalogues and product data
│   ├── pages/                   # Core views (HomePage, BrandPage, CollectionPage, AboutPage, ContactPage)
│   ├── App.jsx                  # Main routing & notification wrapper
│   ├── index.css                # Tailwind CSS imports & global typography
│   └── main.jsx                 # Application entry point
├── tests/                       # Playwright automated test suite
├── .env.example                 # Safe environment template
├── .gitignore                   # Secure file exclusions
├── package.json                 # Project dependencies and npm scripts
├── vite.config.js               # Vite & Tailwind configuration
└── README.md                    # Project documentation
```

---

## Security & Integrity

* **Confidentiality**: Zero API secrets, private keys, or credentials are stored in repository files.
* **Exclusions**: Node modules, local build artifacts (`dist/`), temporary logs, and OS caches are excluded via `.gitignore`.

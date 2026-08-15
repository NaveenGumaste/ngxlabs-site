# ngxlabs-site • Naveen Gumaste

> Minimalist digital gateway and developer profile hub for **Naveen Gumaste** (Frontend Developer & DevOps Engineer).

---

## 🌟 Overview

`ngxlabs-site` is a high-performance, mobile-optimized personal bio hub and project gateway built with **Next.js 16 (App Router & Turbopack)** and **Tailwind CSS v4**. Inspired by modern musician and creator bio-links, it delivers an atmospheric glassmorphic interface with authentic typography and deep links into live developer applications and open-source tools.

### Key Highlights
- **Atmospheric Visual Design**: Authentic multi-pass vector mesh background (`lovable-pulse.svg`) rendered over a deep obsidian canvas with hardware-accelerated blur.
- **Editorial Typography**: Custom integration of **Gambarino** as the primary display typeface and **Dancing Script** for the personal wordmark signature.
- **Full-Bleed Profile Hero**: Integrated portrait frame with progressive multi-layer alpha mask falloff dissolving seamlessly into the solid black card.
- **Direct Funneling**: Instant access to live applications including [UniTools](https://one-unitools.vercel.app/), [KairoCal](https://kairocal.naveengumaste.me/), [Caravan Icons](http://caravan.naveengumaste.me), [GitViz](https://gitviz.naveengumaste.me/), and [CryptoZ](https://cryptoz1.vercel.app/).
- **SEO & Performance**: 100% static prerendering, structured JSON-LD schemas (`Person`, `WebSite`), and accessible Phosphor icon controls.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, Turbopack) |
| **Runtime & Package Manager** | [Bun](https://bun.sh/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) with `@theme inline` |
| **Typography** | `next/font/local` with WOFF2 fonts (**Gambarino-Regular** & **DancingScript**) |
| **Icons** | [@phosphor-icons/react](https://phosphoricons.com/) |
| **Motion** | [Motion](https://motion.dev/) (Framer Motion) |
| **Testing** | `bun test` |

---

## 📂 Project Structure

```
ngxlabs-site/
├── public/
│   ├── Background/
│   │   └── lovable-pulse.svg    # Official multi-pass blurred vector background
│   ├── fonts/                   # Optimized WOFF2 web fonts (Gambarino & Dancing Script)
│   └── images/                  # High-res project thumbnails & profile photography
├── src/
│   ├── app/
│   │   ├── globals.css          # Tailwind CSS v4 design tokens & theme setup
│   │   ├── layout.tsx           # Font loading, metadata & JSON-LD injection
│   │   ├── page.tsx             # Main profile stream container
│   │   ├── sitemap.ts           # Dynamic XML sitemap
│   │   └── not-found.tsx        # Minimalist 404 page
│   ├── components/
│   │   ├── motion/              # Scroll-triggered reveal animations
│   │   └── profile/             # Profile hero, link buttons, cards & background
│   │       ├── about-card.tsx   # Bio summary card with tags
│   │       ├── footer.tsx       # Compliance links & floating desktop QR code
│   │       ├── grid-card.tsx    # 2x2 developer tool showcase
│   │       ├── hero.tsx         # Full-bleed photo, wordmark & socials
│   │       ├── link-button.tsx  # Frosted obsidian link pill with share menu
│   │       ├── media-card.tsx   # Featured project thumbnail card (Caravan)
│   │       └── mesh-background.tsx # Ambient vector pulse canvas
│   └── lib/
│       ├── schema.ts            # JSON-LD structured data generators
│       ├── site.ts              # Site metadata constants
│       └── utils.ts             # Tailwind class merging utility
└── tests/
    └── content.test.ts          # Metadata & content boundary tests
```

---

## 🚀 Getting Started

### Prerequisites
- [Bun](https://bun.sh/) installed on your machine (`curl -fsSL https://bun.sh/install | bash`).

### Installation
```bash
# Clone the repository
git clone https://github.com/NaveenGumaste/ngxlabs-site.git
cd ngxlabs-site

# Install dependencies
bun install
```

### Running Locally
```bash
# Start Next.js development server with Turbopack
bun run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Quality Checks & Build
```bash
# Run unit tests
bun test

# Run ESLint
bun --bun eslint

# Build production static bundle
bun --bun next build
```

---

## 👤 Author

**Naveen Gumaste**
- Website: [naveengumaste.me](https://naveengumaste.me)
- GitHub: [@NaveenGumaste](https://github.com/NaveenGumaste)
- X / Twitter: [@Z0D404](https://x.com/Z0D404)
- Instagram: [@ayee_naveen](https://www.instagram.com/ayee_naveen/)

---

## 📄 License

MIT © [Naveen Gumaste](https://naveengumaste.me)

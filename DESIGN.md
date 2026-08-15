# Design System: ngxlabs Linktree Profile Hub

## 1. Visual Theme & Atmosphere
A clean, gallery-airy profile hub with centered vertical rhythm, soft tactile squircle cards, and fluid spring-physics motion. The atmosphere feels like an elite developer workspace — clinical, high-contrast, distraction-free, and purposeful.

## 2. Color Palette & Roles
- **Canvas Light** (`#FFFFFF`) — Primary background surface
- **Surface Light** (`#F4F4F5`) — Card and button fills
- **Surface Hover Light** (`#EAEAEA`) — Interactive hover fills
- **Canvas Dark** (`#111111`) — Dark mode canvas
- **Surface Dark** (`#1C1C1F`) — Dark mode card fill
- **Surface Hover Dark** (`#26262A`) — Dark mode card hover
- **Charcoal Ink** (`#09090B` / `#FFFFFF`) — Primary high-contrast text
- **Muted Steel** (`#666666` / `#999999`) — Bio, descriptions, secondary metadata
- **Vibrant Emerald** (`#00E676`) — Signature brand accent (status rings, primary CTAs, focus rings)
- **Subtle Line** (`rgba(0,0,0,0.06)` / `rgba(255,255,255,0.08)`) — Hairline structural separation

## 3. Typography Architecture
- **Font Family:** Inter (`font-display: swap`) for all headings, labels, and body copy
- **Display / Name:** 24px - 32px, bold (`font-bold`), tight letter-spacing (`-0.025em`)
- **Bio / Body:** 14px - 15px, relaxed line height, max-width 48ch, muted color
- **Mono:** Geist Mono for badges, metadata, timestamps, and tech stack tags

## 4. Component Stylings
- **Avatar:** Circular (96px - 112px), ring-4 in surface color, with an emerald availability indicator
- **Profile Links:** Full-width pill-shaped buttons (h-14, rounded-full) with soft shadow (`0 2px 8px rgba(0,0,0,0.06)`), hover lift (`-2px`), and tactile scale (`0.98`) on active press
- **Rich Media Cards:** Rounded-3xl (24px radius), soft surface fill, subtle thumbnail on left or banner on top
- **Social Buttons:** Circular (`size-11`, `rounded-full`) with soft hover lift and tooltip/aria-label
- **Tech Stack Badges:** Pill-shaped (`rounded-full`), `px-3.5 py-1`, font-mono text-xs
- **Contact Drawer / Modal:** Clean rounded container with embedded reactive contact form

## 5. Layout Principles
- **Max-Width:** Centered `max-w-[620px]` column with responsive padding (`px-4 sm:px-6`)
- **Vertical Spacing:** Generous breathing room (`space-y-4` between links, `py-12 md:py-20` on viewport)
- **Responsive:** Mobile-first architecture, fluid touch targets (min 48px)

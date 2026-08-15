You have already built the ngxlabs.tech website. Do NOT rebuild pages, regenerate content, or change the backend, routing, data fetching, or SEO metadata. This prompt is for **UI-only refinements** — visual and interaction changes only.

## Goal

Apply a **Linktree-style minimalist, clean, modern visual style** to the existing site without touching:

- Page structure or routes
- Content, copy, or blog posts
- Backend logic, API routes, or database
- SEO metadata (title tags, meta descriptions, schema markup)
- Analytics or tracking scripts

## Changes to Make (UI Layer Only)

### 1. Color System

Replace the existing color palette with a **Linktree-style minimal palette**:

- **Background:** Solid neutral color (user-selectable: white #FFFFFF, light gray #F5F5F5, or dark #111111)
- **Cards/Buttons:** Solid fill colors with **no borders**
- **Primary accent:** Bright green (#00E676) or user's brand color
- **Text:** High contrast — black (#080808) on light backgrounds, white (#FFFFFF) on dark backgrounds
- **Muted text:** Medium gray (#666666)

### 2. Typography

Update fonts only (no content changes):

- **All text:** Clean geometric sans-serif (Inter, Poppins, or similar) — **NO chunky display fonts**
- **Headings:** Same font family as body, just larger and bolder (no font switching)
- Ensure `font-display: swap` for performance

### 3. Button & Card Styling

Apply to all existing buttons and link cards:

- **Shape:** Pill-shaped or heavily rounded corners (20–24px radius) — **NOT squared**
- **Border:** **NO visible borders** — remove all border styling
- **Shadow:** **Soft, subtle shadow** — `box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08)` (blurred, not hard)
- **Fill:** Solid color (white on light backgrounds, dark gray on dark backgrounds)
- **Hover state:** Slight lift (translateY -2px) with slightly deeper shadow (150ms ease-out)
- **Active/Pressed state:** Subtle scale down (0.98) — **NOT physical button collapse**

### 4. Layout & Spacing

Adjust spacing only (no structural changes):

- **Container max-width:** 680px (centered, mobile-first)
- **Section padding:** 40px vertical on desktop, 24px on mobile
- **Button gaps:** 16px between stacked buttons
- **Avatar:** Circular, 96px diameter, centered at top
- **Bio text:** Centered, one or two lines, muted color

### 5. Component-Specific Updates

#### Profile Header

- Circular avatar (96px), centered
- Display name in bold, larger font size
- Bio in muted gray, smaller font size, centered
- **NO thick borders or hard shadows**

#### Link Buttons

- Full-width, pill-shaped (20–24px radius)
- **No borders** — solid fill only
- **Soft shadow** — subtle blur, no hard edges
- Icon on left (optional), text centered or left-aligned
- **NO arrow/chevron on right** (Linktree style is minimal)

#### Social Icon Buttons

- Circular or rounded square icons
- **No borders** — solid fill or outline style
- **Soft shadow** on hover only
- Minimal spacing (12px between icons)

#### Footer

- **No divider lines** — clean, minimal
- Small muted text, centered
- Social links (if present) in same style as header

### 6. Dark Mode (If Already Implemented)

If the site already has dark mode, update it to:

- **Background:** Dark gray or near-black (#111111 or #1A1A1A)
- **Buttons:** Slightly lighter gray (#2A2A2A) or white (#FFFFFF)
- **Text:** White (#FFFFFF)
- **Shadows:** Subtle dark shadow — `box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3)`
- Keep the same minimal, borderless style

### 7. Animations (If Already Implemented)

If the site already has animations, adjust them to:

- **Entrance:** Subtle fade-in (no slide) — 200ms ease-out
- **Hover:** Gentle lift (2px) with soft shadow transition — 150ms ease-out
- **Respect `prefers-reduced-motion`** — disable animations if set

## Do NOT Change

- Page routes or file structure
- Content, copy, or blog post text
- Backend logic, API routes, or database schemas
- SEO metadata (title tags, meta descriptions, JSON-LD schema)
- Analytics, tracking, or third-party scripts
- Form submissions or email handling
- Authentication or user sessions

## Do NOT Apply

- **Neo-brutalist styling** — no hard borders, no offset shadows, no chunky fonts
- **Thick black borders** — remove all border styling
- **Hard offset shadows** — replace with soft, blurred shadows
- **Squared corners** — use pill-shaped or heavily rounded corners (20–24px radius)
- **Bright accent color rotations** — use one consistent brand color

## Output

Apply these UI changes to the existing codebase. Do not regenerate pages or content. Only modify:

- CSS/Tailwind classes
- Font imports
- Color tokens
- Component styling props
- Animation classes (if already present)

Confirm when the UI layer has been updated to match **Linktree's minimalist, clean, modern style** without touching the backend or content.

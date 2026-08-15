Build a fast, SEO-first marketing website for **ngxlabs.tech** — a tech studio run by Naveen Gumaste, a frontend/full-stack developer and DevOps/Cloud Engineer based in Dharwad, India. The site must be designed to rank #1 on Google for queries like "frontend developer portfolio India", "Next.js developer Dharwad", "DevOps engineer portfolio", "cloud engineer India", "React developer portfolio", and "web development services India".

## Tech Stack (Latest Stable Versions as of August 2026)

Use the following exact versions and tools:

- **Next.js 16.3.0** — Latest stable (released August 3, 2026), with 90% less memory usage, faster builds, and Instant Navigations for SPA-like responsiveness [34][38][41].
- **Tailwind CSS 4.3.3** — Latest stable (released July 16, 2026), with full v4 engine and polish updates [33][37].
- **TypeScript 5.5+** — Required for Zod v4 compatibility.
- **Zod v4.4.3** — Latest stable Zod 4 (released 2025, actively maintained in 2026), with 14x faster string parsing and native JSON Schema export [51][58][73].
- **Zustand 5.x** — Latest stable (lightweight, no boilerplate, perfect for this use case) [67].
- **TanStack Router** — **DO NOT USE**. Based on 2026 community consensus:
  - Next.js App Router is the better choice for marketing/portfolio sites due to:
    - Broader ecosystem and easier deployment (Vercel-native) [54][60]
    - Better error messages and DX polish [54]
    - Deeper third-party integrations (CMS, auth, analytics) [60]
    - Easier hiring and onboarding [54]
  - TanStack Router/Start excels for complex SaaS dashboards with heavy type-safety needs, but adds unnecessary complexity for a marketing site [54][60].
  - Reddit consensus (July 2026): "Next.js offers the broadest ecosystem and easiest hiring" while TanStack is "edge-first, type-safety-obsessed" [54][60].
- **Bun 1.3.x** — Latest stable (1.3.13/1.3.14 as of July 2026), use for:
  - Package management (`bun install`)
  - Development server (`bun run dev`)
  - Building (`bun run build`)
  - Linting (`bun run lint`)
  - Testing (`bun test`)
  - Note: Bun 1.4 (Rust rewrite) is in canary as of August 2026 — stick with stable 1.3.x [63][64][71].

## Brand & Audience

- **Brand:** ngxlabs.tech — modern, experimental, builder-focused. Tagline: "Bold Brands, resonate deep."
- **Audience:** startups, founders, and product teams looking for a senior frontend/full-stack dev, DevOps/Cloud engineer, or a small studio to ship web apps, dashboards, and developer tools.
- **Tone:** direct, technical but approachable, no fluff.

## Site Structure

Create these pages:

1. **Homepage** — hero with clear value proposition, 3–4 service cards (Frontend, Full-Stack, DevOps/Cloud, Developer Tools), social proof, CTA.
2. **Services** — detailed breakdown of offerings (Frontend Development, Full-Stack Web Apps, DevOps & Cloud Infrastructure, Developer Tools, Dashboards & Data Visualization).
3. **Projects** — case studies for UniTools, GitViz, CapitalEdge, and DevOps/Cloud projects with problem → solution → outcome format.
4. **About** — Naveen's bio, education (KLE Technological University), experience (Congle Innovations, KLETech-CIM), tech stack (frontend + DevOps/Cloud), and a photo.
5. **Blog** — list of articles with question-based titles (e.g., "How to optimize Next.js for Core Web Vitals?", "What is the best CI/CD pipeline for Next.js apps?").
6. **Contact** — form, email, and social links.

## SEO Requirements (Non-Negotiable)

- **Title tags:** Primary keyword in first 60 characters, unique per page.
- **Meta descriptions:** 150–160 characters, include keyword, compelling CTA.
- **H1:** One per page, mirrors title tag with slight variation, includes primary keyword.
- **H2s:** Use question format where possible (e.g., "What services does ngxlabs.tech offer?") to target AI Overviews and Featured Snippets.
- **URLs:** Clean, hyphenated, keyword-rich (e.g., `/services/devops-cloud-infrastructure`).
- **Internal links:** Every page links to 3+ related pages; homepage links to all key pages.
- **Image alt text:** Descriptive, includes keywords naturally.
- **Schema markup:** JSON-LD for `Organization`, `Person` (author), `Service`, `Article` (blog posts), and `FAQPage` where relevant.
- **Open Graph & Twitter Cards:** Auto-generated for all pages.

## Content Strategy

- **Homepage:** Answer "What does ngxlabs.tech do?" in the first 100 words. Include primary keywords naturally in headline, first paragraph, and one H2.
- **Services page:** Each service has a dedicated section with:
  - Problem it solves
  - Tech stack used
  - Example outcomes
  - FAQ (2–3 questions per service)

### Service Details

1. **Frontend Development** — Next.js 16, React 19, Tailwind CSS 4, TypeScript 5.5, Framer Motion, Zod v4
2. **Full-Stack Web Apps** — Next.js 16, React 19, Node.js, MongoDB, Supabase, Appwrite, Bun runtime
3. **DevOps & Cloud Infrastructure** — Docker, Kubernetes, Google Cloud, AWS, CI/CD pipelines (GitHub Actions, GitLab CI), infrastructure automation (Terraform, Pulumi), monitoring (Prometheus, Grafana), and deployment optimization
4. **Developer Tools** — CLI tools, browser-based utilities, API integrations, Bun-powered scripts
5. **Dashboards & Data Visualization** — Real-time data dashboards, analytics, charts, and reporting tools

- **Projects page:** 4+ detailed case studies:
  1. **UniTools - Universal TOOL** — "A comprehensive web application with 40+ free, browser-based utility tools for developers, designers, and creators - no sign-up, no uploads, no tracking. Built with Next.js 16, React.js 19, Tailwind CSS v4, TypeScript 5.5, Zod v4."
  2. **GitViz - GitHub Visualizer** — "A webapp for visualizing Git data and repository activity. Helps users understand commits, branches, and project history through clear, code-driven analysis. Built with Next.js 16, Framer Motion, Tailwind CSS v4, TypeScript 5.5."
  3. **CapitalEdge - Stocks Dashboard** — "A stock market dashboard landing page with hero section, stock search flow, 'how it works' sequence, feature cards, live demo preview, and tech details. Built with Next.js 16, React.js 19, Tailwind CSS v4, TypeScript 5.5, Zustand 5."
  4. **DevOps/Cloud Projects** — Add 1–2 case studies showcasing CI/CD pipelines, containerization (Docker/Kubernetes), cloud deployments (GCP/AWS), and infrastructure automation.

- **About page:** Use this exact bio:
  - "I'm a Frontend developer and DevOps/Cloud Engineer focused on creating performant, accessible, and uniquely designed digital products. I obsess over minimal code and solving problems, Whether that's shipping features, optimizing cloud infrastructure, or making sure your app doesn't crawl. Pretty much a keyboard warrior when I'm not taking breaks!"
  - Education: B.E. Electronics & Communication Engineering (KLE Technological University, Hubballi), Diploma in Electronics & Communication Engineering (K.H Kabbur Institute of Engineering, Dharwad)
  - Experience:
    - Software Engineer (Intern) at Congle Innovations Pvt Ltd (Feb 2025 - June 2025): Built complete frontend architecture for CongleX Events ticketing platform using React.js and Tailwind CSS.
    - Project Intern at KLETech-Center for Intelligent Mobility (Nov 2023 - Dec 2024): Built autonomous driving and smart infrastructure systems with computer vision, sensor fusion, and full-stack development (ADAS, YOLO models, CARLA, smart parking web app with Express.js, Docker, Kubernetes, Google Cloud).
  - Skills:
    - Frontend: HTML, CSS, JavaScript, React 19, Tailwind CSS 4, Next.js 16, TypeScript 5.5, Vite, Framer Motion, Zod v4, Zustand 5
    - Backend: Node.js, MongoDB, Supabase, Appwrite, Express.js, Bun runtime
    - DevOps/Cloud: Docker, Kubernetes, Google Cloud, AWS, CI/CD (GitHub Actions, GitLab CI), Infrastructure Automation (Terraform, Pulumi), Monitoring (Prometheus, Grafana), Redis
    - Tools: Git, GitHub, Figma, VS Code

- **Blog:** Generate 8 starter posts targeting long-tail keywords (mix of frontend + DevOps):
  1. "How to build a Linktree clone with Next.js 16 and Tailwind CSS 4?"
  2. "What are Core Web Vitals and how to pass them in 2026?"
  3. "How to deploy a Next.js 16 app on Vercel with Cloudflare R2?"
  4. "What is the best CI/CD pipeline for Next.js apps in 2026?"
  5. "How to containerize a React app with Docker and deploy to Kubernetes?"
  6. "What is the best AI stack for building automation agents?"
  7. "How to optimize images for web performance in 2026?"
  8. "How to set up monitoring and logging for a Next.js app on Google Cloud?"

- **Contact page:** Include email, location (Dharwad, Karnataka, India), and links to GitHub, LinkedIn, X.

## Technical SEO & Performance

- **Core Web Vitals targets:** LCP < 2.5s, INP < 200ms, CLS < 0.1.
- **Mobile-first:** Fully responsive, touch-friendly, no horizontal scroll.
- **Image optimization:** WebP/AVIF, lazy loading, explicit width/height to prevent layout shift.
- **Font loading:** `font-display: swap`, preload critical fonts.
- **Crawlability:** Clean `robots.txt`, auto-generated `sitemap.xml`, canonical tags on all pages.
- **Security:** HTTPS enforced, no mixed content.
- **Accessibility:** Semantic HTML, ARIA labels, focus states, color contrast ≥ 4.5:1.

## Visual Design

- **Style:** Neo-brutalist, bold, indie — similar to modern developer portfolios.
- **Colors:** Off-white background (#F5F0E8), black borders, accent colors: electric yellow (#FFDE59), hot pink (#FF6B9D), cobalt (#4D7CFE).
- **Typography:** Chunky display font for headings (Archivo Black style), clean sans (Inter) for body.
- **Layout:** Generous whitespace, card-based sections, clear visual hierarchy.

## E-E-A-T Signals

- **Author bio:** Real name (Naveen Gumaste), photo, credentials, and links to social profiles on every blog post.
- **Contact info:** Physical location (Dharwad, Karnataka, India), email, and social links in footer.
- **Testimonials:** If available, add 2–3 client quotes with names and companies.
- **External links:** Link to authoritative sources (Google docs, MDN, Vercel docs, Kubernetes docs) where relevant.

## Calls to Action

- Primary CTA: "Start a project" (links to /contact)
- Secondary CTAs: "View projects", "Read the blog", "Follow on X"

## Do NOT Include

- Stock photos, generic "Lorem ipsum", auto-playing videos, pop-ups, or heavy animations that hurt Core Web Vitals.
- Keyword stuffing — keep keyword density natural (1–2% max).
- Hidden text, cloaking, or any black-hat SEO tactics.
- TanStack Router — use Next.js App Router instead (better ecosystem, easier deployment, simpler for marketing sites) [54][60].

Generate the complete site with all pages, content, and SEO metadata ready to deploy. Use Bun 1.3.x for all development, building, linting, and testing commands.

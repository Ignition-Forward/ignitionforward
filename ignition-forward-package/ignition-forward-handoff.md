# Ignition Forward Website — Technical & Design Handoff Documentation

**Version:** 2.0  
**Last Updated:** December 25, 2025  
**Purpose:** Complete technical and design specifications for rebuilding or maintaining the Ignition Forward website

---

## Table of Contents

1. [Technology Stack](#1-technology-stack)
2. [Design System](#2-design-system)
3. [Page Architecture](#3-page-architecture)
4. [Component Library](#4-component-library)
5. [Content Structure](#5-content-structure)
6. [SEO & GEO Implementation](#6-seo--geo-implementation)
7. [Animation Guidelines](#7-animation-guidelines)
8. [File Structure](#8-file-structure)
9. [Build & Deployment](#9-build--deployment)

---

## 1. Technology Stack

### Core Framework
```
React 19 + TypeScript
Vite (build tool)
Wouter (routing)
```

### Styling
```
Tailwind CSS 4 (with custom theme)
CSS Variables for design tokens
No CSS-in-JS libraries
```

### Animation
```
Framer Motion (primary animation library)
CSS transitions for micro-interactions
```

### UI Components
```
shadcn/ui (base component library)
Lucide React (icons)
Custom components extending shadcn
```

### Key Dependencies
```json
{
  "react": "^19.0.0",
  "wouter": "^3.0.0",
  "framer-motion": "^11.0.0",
  "tailwindcss": "^4.0.0",
  "lucide-react": "^0.400.0"
}
```

---

## 2. Design System

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `navy` | `#1A2332` | Primary background, headers |
| `navy-light` | `#243044` | Secondary backgrounds, cards |
| `gold` | `#C9A962` | Primary accent, CTAs, highlights |
| `gold-dark` | `#B8994F` | Hover states, secondary accent |
| `teal` | `#7FCCCC` | Subheadlines, secondary text on dark |
| `off-white` | `#F8F7F4` | Light backgrounds, text on dark |
| `grey-body` | `#6B7280` | Body text on light backgrounds |

### Typography

**Font Stack:**
```css
--font-display: 'Playfair Display', Georgia, serif;
--font-body: 'DM Sans', -apple-system, sans-serif;
```

**Hierarchy:**
| Element | Font | Size | Weight |
|---------|------|------|--------|
| H1 | Playfair Display | 4.5rem–6rem | 600 |
| H2 | Playfair Display | 2.5rem–3.5rem | 600 |
| H3 | Playfair Display | 1.5rem–2rem | 600 |
| Body | DM Sans | 1rem–1.125rem | 400 |
| Label | DM Sans | 0.75rem | 500, uppercase, tracking-wider |

**Load fonts in `index.html`:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### Spacing System

Based on Tailwind defaults with custom container:
```css
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

@media (min-width: 768px) {
  .container { padding: 0 2rem; }
}
```

### Border Radius
```css
--radius-sm: 6px;   /* Buttons, small cards */
--radius-md: 12px;  /* Cards, panels */
--radius-lg: 16px;  /* Large cards, modals */
--radius-xl: 24px;  /* Hero elements */
```

### Shadows
```css
/* Card shadow */
box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

/* Elevated shadow */
box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

/* Gold glow (hover) */
box-shadow: 0 0 30px rgba(201, 169, 98, 0.3);
```

---

## 3. Page Architecture

### Route Structure

```
/                       → Home
/how-we-help            → How We Help (overview)
/edge                   → Edge (executive AI training)
/fractional-ai          → Fractional AI Officer
/forward-deployed       → Forward Deployed
/professional-services  → Professional Services segment
/founder-led            → Founder-Led segment
/fund-managers          → Fund Managers (GPs) segment
/pe-portfolio           → PE Portfolio segment
/maguire                → Maguire (case study/proof)
/about                  → About
/contact                → Contact
```

### Page Template: Who We Work With (7-Section)

All segment pages follow this structure:

1. **Hero** (navy bg)
   - Icon + "Who We Help" label
   - H1: Segment name
   - Subhead: 1-2 sentences defining the audience

2. **Scenario + Fit Check** (navy-light bg)
   - "Your World" blockquote describing their situation
   - Two-column: "Great fit if…" / "Not a fit if…"

3. **Challenges** (off-white bg)
   - 4 challenge cards in 2x2 grid
   - Icon + title + description

4. **How We Help** (navy bg)
   - 4 implementation pillars (4-column grid)
   - Two-column: "What you can point to internally" / "Trust & Data Handling"

5. **Outcomes** (gray-50 bg)
   - 4 numbered outcome cards

6. **FAQ** (white bg)
   - 4 accordion questions

7. **CTA** (gray-50 bg)
   - "See Our Proof" + "Start the Conversation" buttons

---

## 4. Component Library

### Core Components

| Component | Location | Purpose |
|-----------|----------|---------|
| `Navigation` | `components/Navigation.tsx` | Fixed header with dropdowns |
| `Footer` | `components/Footer.tsx` | Site footer |
| `CometCTA` | `components/CometCTA.tsx` | Primary gold CTA button with animation |
| `ScrollReveal` | `components/ScrollReveal.tsx` | Scroll-triggered animations |
| `ParticleField` | `components/ParticleField.tsx` | Hero background animation |
| `SEO` | `components/SEO.tsx` | Meta tags and structured data |

### Button Variants

```tsx
// Primary CTA (gold)
<CometCTA href="/contact">Start the Conversation</CometCTA>

// Secondary (outline)
<Link href="/maguire" className="btn-outline-navy">
  See Our Proof
</Link>

// Ghost (text only)
<Link href="/about" className="text-gold hover:text-gold/80">
  Learn more →
</Link>
```

### Card Patterns

```tsx
// Glass card (dark background)
<div className="glass-card p-8">...</div>

// Glass card light (light background)
<div className="glass-card-light p-8">...</div>

// Challenge card
<div className="p-6 rounded-xl bg-white border border-gray-200 hover:border-gold/50 hover:shadow-lg transition-all">
  ...
</div>
```

---

## 5. Content Structure

### Navigation Dropdown Content

**How We Help:**
```typescript
const howWeHelpLinks = [
  { href: "/edge", label: "Edge", subtitle: "9 hours to AI fluency. By application only." },
  { href: "/fractional-ai", label: "Fractional AI Officer", subtitle: "Strategic AI leadership without the full-time hire." },
  { href: "/forward-deployed", label: "Forward Deployed", subtitle: "Implementation teams working alongside yours." },
];
```

**Who We Work With:**
```typescript
const whoWeWorkWithLinks = [
  { href: "/professional-services", label: "Professional Services", description: "Where trust is the product and relationships are the moat." },
  { href: "/founder-led", label: "Founder-Led", description: "Scale your expertise without scaling your calendar." },
  { href: "/fund-managers", label: "Fund Managers (GPs)", description: "Systematic sourcing, faster diligence, portfolio leverage." },
  { href: "/pe-portfolio", label: "PE Portfolio", description: "Value creation aligned AI with quick wins that compound." },
];
```

### CTA Copy by Journey Stage

| Stage | Page | CTA Text |
|-------|------|----------|
| Awareness | Homepage Hero | "See How We Work" |
| Consideration | How We Help | "Book a Fit Call" |
| Decision | Edge | "Apply for Edge" |
| Decision | Forward Deployed | "Scope Your Build" |
| Decision | Fractional AI | "Schedule a Conversation" |
| Segment | Professional Services | "Start the Conversation" |
| Case Study | Maguire | "Build Your Own Maguire" |
| Final | Contact | "Move Forward" |

---

## 6. SEO & GEO Implementation

### Meta Tags (per page)

```tsx
<SEO
  title="AI for Professional Services - Law, Accounting, Consulting"
  description="AI enablement for high-trust advisory firms. Scale your expertise without scaling your headcount."
  canonical="/professional-services"
  structuredData={structuredData}
/>
```

### Structured Data

**Organization Schema (homepage):**
```json
{
  "@type": "Organization",
  "name": "Ignition Forward",
  "description": "AI enablement for expert-led businesses",
  "url": "https://ignitionforward.com"
}
```

**Service Schema (service pages):**
```json
{
  "@type": "Service",
  "name": "Edge - Executive AI Training",
  "description": "9 hours to AI fluency for leaders",
  "provider": { "@type": "Organization", "name": "Ignition Forward" }
}
```

**FAQ Schema (all pages with FAQs):**
```json
{
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does AI enablement cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Edge starts at ~$15K..."
      }
    }
  ]
}
```

### GEO Optimization

- FAQ answers are 2-3 sentences with specific numbers
- Each answer ends with a differentiator
- Content is structured for LLM extraction
- Key terms repeated naturally (AI enablement, expert-led, etc.)

---

## 7. Animation Guidelines

### Scroll Reveal

```tsx
<ScrollReveal delay={0.1}>
  <div>Content fades in on scroll</div>
</ScrollReveal>
```

### Stagger Container

```tsx
<StaggerContainer staggerDelay={0.1}>
  <StaggerItem>Card 1</StaggerItem>
  <StaggerItem>Card 2</StaggerItem>
  <StaggerItem>Card 3</StaggerItem>
</StaggerContainer>
```

### Framer Motion Patterns

```tsx
// Fade up on mount
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}

// Fade up on scroll
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}

// Hover scale
whileHover={{ scale: 1.02 }}
transition={{ type: "spring", stiffness: 300 }}
```

### CSS Transitions

```css
/* Card hover */
.card-hover {
  transition: all 0.3s ease;
}
.card-hover:hover {
  transform: translateY(-4px);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* Gold glow on hover */
.card-hover-glow:hover {
  box-shadow: 0 0 30px rgba(201, 169, 98, 0.3);
}
```

---

## 8. File Structure

```
ignition-forward/
├── client/
│   ├── index.html
│   ├── src/
│   │   ├── App.tsx              # Routes
│   │   ├── main.tsx             # Entry point
│   │   ├── index.css            # Global styles + Tailwind
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── HowWeHelp.tsx
│   │   │   ├── Edge.tsx
│   │   │   ├── FractionalAI.tsx
│   │   │   ├── ForwardDeployed.tsx
│   │   │   ├── ProfessionalServices.tsx
│   │   │   ├── FounderLed.tsx
│   │   │   ├── FundManagers.tsx
│   │   │   ├── PEPortfolio.tsx
│   │   │   ├── Maguire.tsx
│   │   │   ├── About.tsx
│   │   │   └── Contact.tsx
│   │   ├── components/
│   │   │   ├── Navigation.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── CometCTA.tsx
│   │   │   ├── ScrollReveal.tsx
│   │   │   ├── ParticleField.tsx
│   │   │   ├── SEO.tsx
│   │   │   ├── GlobalFAQ.tsx
│   │   │   └── ui/              # shadcn components
│   │   ├── hooks/
│   │   ├── contexts/
│   │   └── lib/
│   └── public/
│       └── images/
├── package.json
├── tailwind.config.ts
├── vite.config.ts
└── tsconfig.json
```

---

## 9. Build & Deployment

### Development
```bash
pnpm install
pnpm dev
```

### Production Build
```bash
pnpm build
```

### Environment Variables
```
VITE_APP_TITLE=Ignition Forward
VITE_APP_LOGO=/images/logo.svg
```

### Performance Checklist

- [ ] Images optimized (WebP, lazy loading)
- [ ] Fonts preloaded
- [ ] Critical CSS inlined
- [ ] Bundle size < 200KB (gzipped)
- [ ] Lighthouse score > 90

---

## Quick Reference: Design Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Primary font | Playfair Display | Premium, editorial feel |
| Body font | DM Sans | Clean, readable, modern |
| Primary color | Navy #1A2332 | Professional, trustworthy |
| Accent color | Gold #C9A962 | Premium, warm, action-oriented |
| Animation library | Framer Motion | Declarative, performant |
| Routing | Wouter | Lightweight, React 19 compatible |
| Component base | shadcn/ui | Accessible, customizable |

---

**Document maintained by:** Ignition Forward Development Team  
**For questions:** Contact the technical lead

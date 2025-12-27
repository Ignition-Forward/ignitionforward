# Ignition Forward — Website Bible

**Complete specification for implementing the Ignition Forward website from scratch.**

**Live Reference**: https://3000-iddts6w9oshrhfskq7q0v-77406fa3.us2.manus.computer/

---

## Table of Contents

1. [Brand Identity](#1-brand-identity)
2. [Design System](#2-design-system)
3. [Typography](#3-typography)
4. [Motion Language](#4-motion-language)
5. [Site Architecture](#5-site-architecture)
6. [Page Specifications](#6-page-specifications)
7. [Components Library](#7-components-library)
8. [Copy Bank](#8-copy-bank)
9. [Images & Assets](#9-images--assets)
10. [Technical Stack](#10-technical-stack)

---

## 1. Brand Identity

### Positioning Statement
> We build AI systems for expert-led businesses — where judgment and relationships are the product.

### Brand Voice
- **Operator-first**: We've done this ourselves, not just advised on it
- **Direct**: No consultant-speak, no 100-page decks
- **Confident but not arrogant**: "If we can help, we'll tell you. If we can't, we'll tell you that too."
- **Proof-oriented**: Every claim backed by specific numbers or named credentials

### Key Differentiators
1. **Operators, not consultants** — We've built and run AI systems ourselves (Maguire)
2. **232+ iterations** — Battle-tested through real usage
3. **High-trust by default** — Legal training informs everything
4. **80% proven core + 20% custom** — Bespoke at scale

---

## 2. Design System

### Color Palette

| Token | Hex | OKLCH | Usage |
|-------|-----|-------|-------|
| **Navy** (Primary) | `#1A2332` | `oklch(0.22 0.03 250)` | Primary backgrounds, text |
| **Navy Light** | `#243044` | `oklch(0.28 0.03 250)` | Cards, secondary backgrounds |
| **Gold** (Accent) | `#C9A962` | `oklch(0.75 0.12 85)` | CTAs, highlights, accents |
| **Gold Hover** | `#D4B872` | `oklch(0.78 0.11 85)` | Button hover states |
| **Off-White** | `#F8F7F4` | `oklch(0.97 0.01 90)` | Light backgrounds, text on dark |
| **Grey Body** | `#5A6270` | `oklch(0.50 0.02 250)` | Body text, secondary text |
| **Teal** | `#7dd3c0` | `oklch(0.78 0.12 170)` | Subheadlines on dark backgrounds |

### Semantic Color Mappings

```css
/* Light mode */
--background: oklch(0.97 0.01 90);      /* Off-White */
--foreground: oklch(0.22 0.03 250);     /* Navy */
--primary: oklch(0.75 0.12 85);         /* Gold */
--primary-foreground: oklch(0.22 0.03 250);
--muted-foreground: oklch(0.50 0.02 250); /* Grey Body */

/* Dark mode (used on navy sections) */
--background: oklch(0.22 0.03 250);     /* Navy */
--foreground: oklch(0.97 0.01 90);      /* Off-White */
```

### Spacing Scale
- `4px` — Micro spacing
- `8px` — Tight spacing
- `16px` — Base spacing
- `24px` — Section padding (mobile)
- `32px` — Section padding (desktop)
- `64px` — Large section gaps
- `128px` — Hero sections

### Border Radius
- `6px` — Buttons, small elements
- `12px` — Cards, containers
- `16px` — Large cards
- `9999px` — Pills, badges

---

## 3. Typography

### Font Stack

| Role | Font | Weight | Fallback |
|------|------|--------|----------|
| **Headlines** | Playfair Display | 400, 600 | Georgia, serif |
| **Body** | DM Sans | 400, 500, 700 | system-ui, sans-serif |

### Google Fonts Import
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet">
```

### Type Scale

| Element | Font | Size (Desktop) | Size (Mobile) | Weight | Line Height |
|---------|------|----------------|---------------|--------|-------------|
| H1 Hero | Playfair Display | 96px (6rem) | 48px (3rem) | 600 | 1.1 |
| H2 Section | Playfair Display | 48px (3rem) | 36px (2.25rem) | 600 | 1.2 |
| H3 Card | Playfair Display | 32px (2rem) | 24px (1.5rem) | 400 | 1.3 |
| H4 Subhead | Playfair Display | 24px (1.5rem) | 20px (1.25rem) | 400 | 1.4 |
| Body Large | DM Sans | 20px (1.25rem) | 18px (1.125rem) | 400 | 1.6 |
| Body | DM Sans | 16px (1rem) | 16px (1rem) | 400 | 1.6 |
| Body Small | DM Sans | 14px (0.875rem) | 14px (0.875rem) | 400 | 1.5 |
| Label | DM Sans | 12px (0.75rem) | 12px (0.75rem) | 500 | 1.4 |
| Section Label | DM Sans | 12px | 12px | 500 | 1.4 |

### Section Label Style
```css
.section-label {
  font-family: 'DM Sans', sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #C9A962; /* Gold */
}
```

---

## 4. Motion Language

### Core Principles
- **Tight, not floaty** — System-like, deterministic motion
- **120-240ms durations** — Fast enough to feel responsive
- **Consistent easing** — `cubic-bezier(0.2, 0, 0, 1)` for all animations
- **Blur-to-sharp reveals** — Elements resolve from `blur(8px)` to `blur(0px)`

### Animation Tokens

| Animation | Duration | Easing | Y Offset | Blur |
|-----------|----------|--------|----------|------|
| **Page Enter** | 240ms | `cubic-bezier(0.2, 0, 0, 1)` | 12px | 8px → 0px |
| **Page Exit** | 180ms | `cubic-bezier(0.2, 0, 0, 1)` | -8px | 0px → 4px |
| **Scroll Reveal** | 360ms | `cubic-bezier(0.2, 0, 0, 1)` | 12px | 8px → 0px |
| **Stagger Items** | 40-80ms delay | — | — | — |
| **Hover States** | 140ms | `cubic-bezier(0.2, 0, 0, 1)` | — | — |
| **Dropdown Open** | 140ms | `cubic-bezier(0.2, 0, 0, 1)` | 6px | — |

### Removed Effects (Do NOT implement)
- ❌ Shimmer/shine sweeps
- ❌ Glow effects on hover
- ❌ Animated borders
- ❌ Floating animations
- ❌ Bounce animations
- ❌ Pulse animations (except subtle scroll indicator)

### Scroll Reveal Implementation
```tsx
// Framer Motion variant
const scrollRevealVariants = {
  hidden: { 
    opacity: 0, 
    y: 12, 
    filter: 'blur(8px)' 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    transition: { 
      duration: 0.36, 
      ease: [0.2, 0, 0, 1] 
    }
  }
};
```

---

## 5. Site Architecture

### Navigation Structure

```
Primary Nav (Desktop):
├── How We Help (dropdown)
│   ├── Overview: How We Help → /how-we-help
│   ├── Edge → /edge
│   ├── Fractional AI Officer → /fractional-ai
│   └── Forward Deployed → /forward-deployed
├── Who We Work With (dropdown)
│   ├── For Your Business:
│   │   ├── Professional Services → /professional-services
│   │   ├── Founder-Led & Expert Practices → /founder-led
│   │   ├── GPs & Fund Managers → /fund-managers
│   │   └── PE Portfolio → /pe-portfolio
│   └── For You:
│       └── Individual Leaders → /edge
├── Maguire → /maguire
└── Talk to Us (CTA button) → /contact
```

### All Routes

| Route | Page | Visibility |
|-------|------|------------|
| `/` | Home | Public |
| `/how-we-help` | How We Help Overview | Public |
| `/edge` | Edge (Executive Training) | Public |
| `/fractional-ai` | Fractional AI Officer | Public |
| `/fractional-ai-officer` | Fractional AI Officer (alias) | Public |
| `/forward-deployed` | Forward Deployed | Public |
| `/professional-services` | Professional Services | Public |
| `/founder-led` | Founder-Led & Expert Practices | Public |
| `/fund-managers` | GPs & Fund Managers | Public |
| `/pe-portfolio` | PE Portfolio Operations | Public |
| `/maguire` | Maguire Case Study | Public |
| `/about` | About Us | Public |
| `/contact` | Contact Form | Public |
| `/strategic-diagnostic` | Strategic Diagnostic | **Hidden** (no nav link) |
| `/segments` | Segments Overview | Public |

---

## 6. Page Specifications

### 6.1 Homepage (`/`)

**URL**: https://3000-iddts6w9oshrhfskq7q0v-77406fa3.us2.manus.computer/

**Sections** (in order):

#### Hero Section
- **Background**: Navy (`#1A2332`) with particle field animation
- **Grid pattern overlay**: Subtle lines
- **Label**: "Applied AI" (gold, uppercase, tracked)
- **Headline**: 
  ```
  Accelerate
  What Matters.
  ```
  - "Accelerate" in off-white
  - "What Matters." in gold, italic
- **Subheadline**: "We build AI systems for expert-led businesses — where judgment and relationships are the product. Including our own." (teal)
- **CTA**: "See How We Work" → `/how-we-help`
- **Scroll indicator**: Subtle pulse animation (not bouncy)

#### Who We Work With Section
- **Background**: Off-white (`#F8F7F4`)
- **Gold top line**: 2px gold border at top
- **Label**: "Who We Work With"
- **Headline**: "Leaders of expert-led businesses."
- **Subheadline**: "We work with expert-led businesses where judgment and relationships are the product."

**For Your Business** (4 cards):
| Card | Icon | Title | Link |
|------|------|-------|------|
| 1 | Shield | Professional Services | `/professional-services` |
| 2 | Zap | Founder-Led & Expert Practices | `/founder-led` |
| 3 | TrendingUp | GPs & Fund Managers | `/fund-managers` |
| 4 | Target | PE Portfolio Operations | `/pe-portfolio` |

**For You** (1 card):
| Card | Icon | Title | Link |
|------|------|-------|------|
| 1 | User | Individual Leaders | `/edge` |

**Trust Note**: "High-trust by default: governance-led, NDA-first when required, and designed to protect your IP and relationships."

#### What Makes Us Different Section
- **Background**: Navy
- **Label**: "What Makes Us Different"
- **Headline**: "Operators Who've Been in the Seat"
- **Subheadline**: "We don't advise from the sidelines. We've built AI systems that run our own business every day. That's the difference between theory and results."

**Differentiator Cards** (3):
| Card | Icon | Title | Description |
|------|------|-------|-------------|
| 1 | Target | Battle-Tested | "Every system we offer has been refined through 232+ iterations in our own operations." |
| 2 | TrendingUp | Results-Driven | "We measure success by outcomes, not hours. Our systems deliver measurable ROI." |
| 3 | Users | Knowledge Transfer | "We build WITH you, not FOR you. You'll own the capability when we're done." |

**Maguire Proof Block**:
- **Title**: "Maguire: Our Client Intelligence OS"
- **Description**: "We built it for ourselves first. Now it powers our entire client relationship engine."
- **Pull Quote**: "CRM tracks what happened. Maguire makes you better at what's next." (gold left border)
- **80/20 Bar**: Visual bar showing 80% gold (Proven Core) + 20% teal (Custom)
- **Metrics**: 
  - 95% Close Rate
  - -50% Admin Time
  - 232+ Iterations
- **Andrew Quote Block**:
  ```
  "We don't just advise. We build. Maguire is proof — 232 iterations, 18 months of development, running our own sales operation."
  
  AM (initials avatar)
  Andrew Moss
  Managing Partner
  ```
- **Link**: "See the Full Case Study" → `/maguire`
- **Image**: `/images/maguire-data-flow-updated.png`

#### Two Paths Forward Section (How We Work)
- **Background**: Off-white
- **Label**: "HOW WE WORK"
- **Headline**: "Two Paths Forward"
- **Subheadline**: "Whether you're an executive seeking personal AI fluency or an organization ready to transform operations — we have a path designed for where you are."

**Executive Track** (navy badge):
- **Title**: "For Individual Leaders"
- **Description**: "Build personal AI fluency and strategic clarity. Become the champion who leads your organization's transformation."
- **Service Card**: EDGE Program (9 Hours • 1:1)
  - "Premium executive transformation. Move from 'AI-curious' to 'AI-fluent.' Build your own operational personas. Leave with working systems, not just knowledge."

**Organization Track** (gold badge, emphasized with shadow):
- **Title**: "For Companies & Teams"
- **Description**: "Strategic assessment and hands-on implementation. We identify what matters, build what works, and stay until it's running."
- **Service Cards**:
  1. Fractional AI Officer ($15-30K/mo)
     - "AI leadership without full-time cost. Use case prioritization by business impact. Board reporting, governance, vendor management."
  2. Forward Deployed (6-8 Weeks)
     - "One outcome, full focus. Data readiness assessment included. Working system in production before the engagement ends."

#### Social Proof Section
- **Background**: `#2A3545` (slightly lighter navy)
- **Label**: "The Results Speak"
- **Headline**: "From Our Clients"

**Testimonials** (2):
| Quote | Name | Title | Initials |
|-------|------|-------|----------|
| "They didn't just give us tools — they gave us a system that actually works. Our conversion rate went from hoping to knowing." | Blaine Barnett | Managing Partner, Hawk Partners | BB |
| "The difference is they've done this themselves. They're not theorizing about what might work — they're showing us what already works." | Karan Kanwar | CEO, Flowlie | KK |

#### Final CTA Section
- **Background**: Navy with grid pattern
- **Headline**: "Ready to move forward?"
- **Subheadline**: "We work with growth-minded leaders in expert-led businesses. If you're ready to move, we should talk."
- **CTA**: "Start the Conversation" → `/contact`

---

### 6.2 Edge Page (`/edge`)

**Positioning**: Premium executive AI training (9 hours, ~$15K)

**Key Sections**:
1. Hero with transformation promise
2. Before/After comparison
3. 3-step process (Audit & Design → Build & Install → Refine & Transfer)
4. ROI calculator
5. Testimonial
6. FAQ accordion
7. Sticky CTA bar (appears on scroll)

**Process Steps**:
| Step | Title | Duration | Description |
|------|-------|----------|-------------|
| 1 | Audit & Design | 3 hours | Map workflows, identify opportunities, design 2-3 custom workflows |
| 2 | Build & Install | 3 hours | Build workflows together, install into tools, run on real work |
| 3 | Refine & Transfer | 3 hours | Refine based on usage, document everything, ensure independence |

---

### 6.3 Fractional AI Officer Page (`/fractional-ai`)

**Positioning**: AI leadership without full-time commitment ($15-30K/mo)

**Key Sections**:
1. Hero with cost comparison
2. Full-time vs Fractional comparison table
3. Engagement models (Advisory / Active / Intensive)
4. Month-in-the-life timeline
5. Deliverables list
6. Testimonial
7. FAQ accordion

**Engagement Models**:
| Model | Hours/Month | Price | Best For |
|-------|-------------|-------|----------|
| Advisory | 8-12 | $8K-$12K | Companies with technical teams needing strategic direction |
| Active (Recommended) | 20-30 | $15K-$25K | Companies building AI capabilities with guidance |
| Intensive | 40+ | $30K+ | Companies in transformation |

**Deliverables**:
- Use Case Prioritization (by business impact, not technical novelty)
- AI Strategy Roadmap
- Governance Framework
- Vendor Evaluation
- Team Development Plan
- Board Presentations
- Implementation Oversight

---

### 6.4 Forward Deployed Page (`/forward-deployed`)

**Positioning**: Implementation teams working alongside yours ($25K-$150K+)

**Key Sections**:
1. Hero with outcomes focus
2. Project types (3 examples)
3. Team composition
4. Timeline (4 phases)
5. Guarantees
6. Pricing tiers
7. Testimonial
8. FAQ accordion

**Project Types**:
| Type | Timeline | Example Result |
|------|----------|----------------|
| Client Intelligence Systems | 8-12 weeks | 40% increase in cross-sell revenue |
| Knowledge Capture & Retrieval | 10-14 weeks | 60% reduction in due diligence time |
| Workflow Automation | 6-10 weeks | 15 hours/week saved per partner |

**Pricing Tiers**:
| Tier | Range | Duration | Best For |
|------|-------|----------|----------|
| Mini | $25K-$50K | 4-8 weeks | Specific need to solve |
| Core | $75K-$150K | 8-16 weeks | Major AI initiative |
| Enterprise | $150K+ | 12+ weeks | PE portfolio or enterprise |

---

### 6.5 Maguire Page (`/maguire`)

**Positioning**: Our proof — AI sales coach and copilot we built for ourselves

**Key Sections**:
1. Hero with stats and segment tags
2. The Problem (before state)
3. How It Works (5 steps)
4. Before/After comparison
5. Craig's Story (founder testimonial)
6. Artifacts preview (what you'll see)
7. Security note
8. CTA

**Hero Stats**:
| Stat | Label |
|------|-------|
| 18%→65% | Conversion Rate |
| 3X | Revenue/Client |
| 5hrs | Saved/Week |
| 232+ | Iterations |

---

### 6.6 Strategic Diagnostic Page (`/strategic-diagnostic`)

**⚠️ HIDDEN PAGE — Not linked from navigation**

**URL**: https://3000-iddts6w9oshrhfskq7q0v-77406fa3.us2.manus.computer/strategic-diagnostic

**Positioning**: Entry point for Organization Track buyers who want validation before committing ($15K-$25K, 2-3 weeks)

**Key Sections**:
1. Hero with price/duration
2. Why Diagnostics Fail (3 failure modes)
3. Deliverables (6 items)
4. Timeline (3 weeks)
5. What Makes This Different (3 differentiators)
6. Fit/Not Fit criteria
7. Pricing tiers (Essentials vs Complete)
8. What Happens Next (3 paths)
9. FAQ accordion
10. CTA

**Deliverables**:
1. AI Opportunity Map
2. Data Readiness Assessment
3. Use Case Prioritization Matrix
4. Quick Win Identification
5. Implementation Roadmap
6. Investment Framework

**Pricing**:
| Tier | Price | Duration | Scope |
|------|-------|----------|-------|
| Essentials | $15,000 | 2 weeks | Single department |
| Complete (Recommended) | $25,000 | 3 weeks | Cross-functional |

**Credit Policy**: Diagnostic investment credited toward Forward Deployed or Fractional AI Officer engagements.

---

### 6.7 About Page (`/about`)

**Key Sections**:
1. Hero with track record stats
2. Andrew Moss profile (featured)
3. Team members (Craig, Brian)
4. Operating principles (5)
5. CTA

**Track Record Stats**:
| Stat | Label |
|------|-------|
| $1B+ | In Exits |
| $3B+ | Equity & Debt Raised |
| 500+ | Companies Advised |

**Andrew's Quick Stats**:
| Stat | Label |
|------|-------|
| $10B+ | AUM Experience |
| $200M+ | Capital Deployed |
| $800M+ | In Exits |
| 3 | Unicorn Investments |

**Operating Principles**:
1. We deploy, not deck.
2. Speed compounds.
3. Your edge, amplified.
4. Eat our own cooking.
5. Confidentiality is infrastructure.

---

### 6.8 Contact Page (`/contact`)

**Two-Step Form**:

**Step 1** (Required):
- First Name
- Email

**Step 2** (Optional qualifying):
- Last Name
- Company
- Role
- Segment (dropdown)
- Timeline (dropdown)
- Team Size (dropdown)
- Service Interest (dropdown)
- AI Expertise (dropdown)
- Referral Source (dropdown)
- Message

**Next Steps Display**:
1. Share what you're working on
2. We'll review and respond (within 24 hours)
3. Discovery conversation (30-minute call)

---

## 7. Components Library

### Core Components

| Component | File | Purpose |
|-----------|------|---------|
| Navigation | `Navigation.tsx` | Header with dropdowns |
| Footer | `Footer.tsx` | Site footer |
| Layout | `Layout.tsx` | Page wrapper |
| CometCTA | `CometCTA.tsx` | Primary CTA button with comet trail |
| ScrollReveal | `ScrollReveal.tsx` | Scroll-triggered animations |
| AnimatedCounter | `AnimatedCounter.tsx` | Number counting animation |
| ParticleField | `ParticleField.tsx` | Hero background particles |
| Model8020 | `Model8020.tsx` | 80/20 bar visualization |
| SEO | `SEO.tsx` | Meta tags and structured data |

### UI Components (shadcn/ui)
- Button
- Card
- Dialog
- Tooltip
- Sonner (toasts)

### CometCTA Button Spec
```tsx
<CometCTA href="/contact">
  Start the Conversation
</CometCTA>
```
- Gold background (`#C9A962`)
- Navy text (`#1A2332`)
- Comet trail animation on bottom edge
- Hover: Gold hover (`#D4B872`)
- Border radius: 6px
- Padding: 16px 32px

---

## 8. Copy Bank

### Headlines

| Page | Headline |
|------|----------|
| Home Hero | Accelerate What Matters. |
| Home Who We Work With | Leaders of expert-led businesses. |
| Home What Makes Us Different | Operators Who've Been in the Seat |
| Home How We Work | Two Paths Forward |
| Home Social Proof | From Our Clients |
| Home Final CTA | Ready to move forward? |
| Edge | 9 Hours to AI Fluency |
| Fractional AI | AI Leadership Without the Full-Time Commitment |
| Forward Deployed | Build WITH You, Not FOR You |
| Maguire | Maguire — "Close more. Grind less." |
| About | Operators who build what we use. |
| Contact | Let's Talk |
| Strategic Diagnostic | Map Where AI Creates Leverage |

### Key Phrases

| Phrase | Usage |
|--------|-------|
| "CRM tracks what happened. Maguire makes you better at what's next." | Maguire differentiator |
| "We don't just advise. We build." | Andrew quote |
| "80% Proven Core + 20% Custom = Bespoke at scale" | 80/20 model |
| "High-trust by default" | Security/trust messaging |
| "Operators, not consultants" | Positioning |
| "Use case prioritization by business impact" | Fractional AI deliverable |
| "Data readiness assessment included" | Forward Deployed feature |
| "If we can help, we'll tell you. If we can't, we'll tell you that too." | Honest positioning |

### Testimonials

| Quote | Attribution |
|-------|-------------|
| "They didn't just give us tools — they gave us a system that actually works. Our conversion rate went from hoping to knowing." | Blaine Barnett, Managing Partner, Hawk Partners |
| "The difference is they've done this themselves. They're not theorizing about what might work — they're showing us what already works." | Karan Kanwar, CEO, Flowlie |
| "I went from spending 3 hours on client research to 20 minutes. Edge didn't just teach me AI—it changed how I work." | Sarah Chen, Managing Director, Boutique Consulting |
| "They didn't just build us a system—they taught us how to think about AI. Six months later, we're extending what they built on our own." | Jennifer Walsh, COO, Investment Advisory Firm |

---

## 9. Images & Assets

### Image Files

| File | Path | Usage |
|------|------|-------|
| hero-main.jpg | `/images/hero-main.jpg` | Homepage hero background |
| hero-about.jpg | `/images/hero-about.jpg` | About page hero |
| hero-maguire.jpg | `/images/hero-maguire.jpg` | Maguire page hero |
| hero-services.jpg | `/images/hero-services.jpg` | Service pages hero |
| maguire-data-flow-updated.png | `/images/maguire-data-flow-updated.png` | Maguire section visualization |
| og-default.jpg | `/images/og-default.jpg` | Social sharing image |
| pattern-blueprint.jpg | `/images/pattern-blueprint.jpg` | Background pattern |

### Image Style
- **Hero images**: Abstract flowing gold particles/waves on navy background
- **Data visualizations**: Clean, minimal, gold/navy/teal palette
- **No stock photos of people** — Use initials avatars instead

### Favicon
- Gold "IF" monogram on navy background

---

## 10. Technical Stack

### Framework
- **React 19** with TypeScript
- **Vite** for build tooling
- **Wouter** for routing

### Styling
- **Tailwind CSS 4** with custom theme
- **CSS Variables** for design tokens
- **Framer Motion** for animations

### UI Components
- **shadcn/ui** component library
- **Lucide React** for icons
- **Sonner** for toast notifications

### SEO
- Custom SEO component with:
  - Meta tags
  - Open Graph
  - Twitter Cards
  - JSON-LD structured data

### Build Output
- Static site (no server-side rendering required)
- Optimized for CDN deployment

---

## Implementation Checklist

### Phase 1: Foundation
- [ ] Set up project with Vite + React + TypeScript
- [ ] Install Tailwind CSS 4 and configure theme
- [ ] Add Google Fonts (Playfair Display, DM Sans)
- [ ] Set up design tokens in CSS variables
- [ ] Install Framer Motion
- [ ] Install shadcn/ui components

### Phase 2: Core Components
- [ ] Build Navigation component with dropdowns
- [ ] Build Footer component
- [ ] Build Layout wrapper
- [ ] Build CometCTA button
- [ ] Build ScrollReveal component
- [ ] Build ParticleField background

### Phase 3: Pages
- [ ] Build Homepage (all 6 sections)
- [ ] Build Edge page
- [ ] Build Fractional AI page
- [ ] Build Forward Deployed page
- [ ] Build Maguire page
- [ ] Build About page
- [ ] Build Contact page (two-step form)
- [ ] Build Strategic Diagnostic page (hidden)
- [ ] Build segment pages (4)

### Phase 4: Polish
- [ ] Implement all scroll reveal animations
- [ ] Test motion language consistency
- [ ] Add SEO meta tags to all pages
- [ ] Test responsive design (mobile/tablet/desktop)
- [ ] Optimize images
- [ ] Test all links and navigation

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Dec 26, 2024 | Initial specification |

---

**Document maintained by**: Ignition Forward Team

**Questions?** Contact hello@ignitionforward.com

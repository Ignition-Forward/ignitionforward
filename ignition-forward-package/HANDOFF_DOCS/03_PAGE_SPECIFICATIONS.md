# Ignition Forward Page Specifications

**Version:** 1.0  
**Last Updated:** December 25, 2024  
**Author:** Manus AI

---

## Table of Contents

1. [Homepage](#homepage)
2. [About Page](#about-page)
3. [Service Pages](#service-pages)
4. [Segment Pages](#segment-pages)
5. [Maguire Case Study](#maguire-case-study)
6. [Contact Page](#contact-page)

---

## Homepage

**Route:** `/`  
**File:** `client/src/pages/Home.tsx`  
**Purpose:** Primary landing page that establishes brand, communicates value proposition, and drives conversions.

### Section Breakdown

| Section | Background | Content | Key Components |
|---------|------------|---------|----------------|
| Hero | Navy | Headline, subhead, CTA, animated stars | Playfair Display headline, gold accent on "What Matters" |
| Problem/Solution | Navy-Light | Problem statement, 80/20 solution, Three-Layer Ecosystem | Cards with hover effects, animated layer diagram |
| Who We Work With | Off-White | 4 segment cards | SegmentCard components, gold icons |
| What Makes Us Different | Navy | 4 differentiator cards + security callout | DifferentiatorCard, highlighted security card |
| The Proof (Maguire) | Off-White | Maguire intro, 3 metrics, image | AnimatedCounter, data flow image with 3X badge |
| The Opportunity | Navy | 3 opportunity cards | Teal icons, hover lift effects |
| How We Help | Off-White | 3 service cards + portfolio callout | ServiceCard with shine effect, gold top line |
| Testimonials | Navy | 3 testimonial cards | TestimonialCard with quote decoration |
| Final CTA | Navy-Light | "Wondering If This Is For You?" | CometCTA component, two-column layout |

### Hero Section Specifications

```
Layout: Left-aligned content, full-width
Padding: 128px top, 96px bottom (mobile: 80px/64px)

Elements:
- Label: "APPLIED AI" with gold line prefix
- Headline: "Accelerate" (Playfair, white) + "What Matters." (Playfair, gold, italic)
- Subhead: Two lines of body text (teal color)
- CTA: "Learn How We Do It" with arrow, gold underline on hover
- Background: Subtle animated star particles
```

### Maguire Section Specifications

```
Layout: Two-column, 60/40 split
Background: Off-white (#F8F7F4)

Left Column:
- Label: "THE PROOF"
- Headline: "We've already built working systems of our own."
- Subhead: "Maguire: The Client Intelligence OS"
- Description paragraph
- 3 metrics in row: 95% (Close Rate), -50% (Admin Time), 232+ (System Iterations)
- CTA: "See the Full Case Study"

Right Column:
- Data flow visualization image
- Gold badge overlay: "3X Business growth"
- No two-tone glow effect (clean presentation)
```

---

## About Page

**Route:** `/about`  
**File:** `client/src/pages/About.tsx`  
**Purpose:** Interactive storytelling page that builds trust through origin story, team, and principles.

### Path Navigation System

The About page features a unique tabbed navigation system with 4 paths:

| Tab | Content | Key Elements |
|-----|---------|--------------|
| Why We Started | Origin story, problem cards | 4 problem cards, Andrew Moss quote |
| What We've Built | Proof stats, systems | 4 stat counters, 3 system cards (Maguire, URU, GP Suite) |
| Who We Are | Team bios, expertise | Founder cards, Brian Moran callout, expertise spectrum |
| How We Work | Principles, flywheel | 6 principle cards, animated flywheel, final CTA |

### Tab Navigation Specifications

```jsx
// Tab styling
const tabs = [
  { id: 'why', label: 'Why We Started', icon: Lightbulb },
  { id: 'built', label: 'What We\'ve Built', icon: Layers },
  { id: 'who', label: 'Who We Are', icon: Users },
  { id: 'how', label: 'How We Work', icon: Compass },
];

// Active tab: gold background, navy text
// Inactive tab: transparent background, grey-body text, gold on hover
```

### Team Section Specifications

```
Founders (2 cards side by side):
- Andrew Moss: CEO & Co-founder
  - Background: Operator first, consultant second
  - Quote about building vs advising
  
- Craig Gainsboro: COO & Co-founder
  - Background: Systems builder
  - Quote about scalable solutions

GP Practice Lead (full-width callout):
- Brian Moran
- Gold border accent
- "GP Practice Lead" badge
- Description of GP-specific expertise
```

### Flywheel Animation

```
Three rotating elements:
1. "Service" - outer ring
2. "Systems" - middle ring
3. "Data" - center

Animation: Continuous slow rotation, speeds up on hover
Colors: Gold accents on navy background
```

---

## Service Pages

### Edge Page

**Route:** `/edge`  
**File:** `client/src/pages/Edge.tsx`  
**Purpose:** Sell the 9-hour AI fluency program.

| Section | Background | Content |
|---------|------------|---------|
| Hero | Navy | "Your Edge, Amplified. Your business, Accelerated." tagline |
| What You Get | Off-White | 3 deliverable cards |
| The Day | Navy-Light | Timeline of 9-hour session |
| Comparison | Off-White | Edge vs. Courses vs. Consultants table |
| Results | Navy | Metric cards with animations |
| CTA | Navy-Light | Pricing ($4,500) and contact |

### Fractional AI Officer Page

**Route:** `/fractional-ai`  
**File:** `client/src/pages/FractionalAI.tsx`  
**Purpose:** Sell ongoing AI leadership services.

| Section | Background | Content |
|---------|------------|---------|
| Hero | Navy | "We help you move faster than your competition—with AI that works" tagline |
| The Challenge | Off-White | Problem cards for AI leadership gap |
| Comparison | Navy-Light | Full-time vs. Fractional animated comparison |
| Engagement Models | Off-White | Accordion with 3 engagement tiers |
| What's Included | Navy | Service component cards |
| CTA | Navy-Light | Pricing tiers and contact |

### Forward Deployed Page

**Route:** `/forward-deployed`  
**File:** `client/src/pages/ForwardDeployed.tsx`  
**Purpose:** Sell implementation team services.

| Section | Background | Content |
|---------|------------|---------|
| Hero | Navy | Team visualization with role icons |
| The Approach | Off-White | "Build WITH you, not FOR you" messaging |
| Team Composition | Navy-Light | Visual team structure diagram |
| Engagement Timeline | Off-White | 4-phase timeline with progress indicator |
| Knowledge Transfer | Navy | Emphasis on capability building |
| CTA | Navy-Light | Contact for scoping |

---

## Segment Pages

### Professional Services Page

**Route:** `/professional-services`  
**File:** `client/src/pages/ProfessionalServices.tsx`  
**Purpose:** Target law firms, accounting practices, consultancies.

| Section | Background | Content |
|---------|------------|---------|
| Hero | Navy | Industry-specific headline |
| Challenges | Off-White | 4 challenge cards specific to professional services |
| Workflows | Navy-Light | 3 workflow transformation examples |
| 90-Day Roadmap | Off-White | Timeline with milestones |
| Results | Navy | Testimonial + metrics |
| CTA | Navy-Light | Industry-specific CTA |

### Founder-Led Page

**Route:** `/founder-led`  
**File:** `client/src/pages/FounderLed.tsx`  
**Purpose:** Target founders scaling expertise businesses.

| Section | Background | Content |
|---------|------------|---------|
| Hero | Navy | "Scale your expertise without scaling your calendar" |
| The Journey | Off-White | Founder growth stages visualization |
| Expertise Capture | Navy-Light | How we codify founder knowledge |
| Leverage Points | Off-White | 4 areas where AI creates leverage |
| CTA | Navy-Light | Discovery call CTA |

### Fund Managers Page

**Route:** `/fund-managers`  
**File:** `client/src/pages/FundManagers.tsx`  
**Purpose:** Target GPs and emerging fund managers.

| Section | Background | Content |
|---------|------------|---------|
| Hero | Navy | GP-specific value proposition |
| Brian Moran Callout | Off-White | Full-width GP Practice Lead introduction |
| GP Challenges | Navy-Light | Deal flow, LP relations, portfolio support |
| GP Suite | Off-White | System capabilities for fund managers |
| Results | Navy | Fund manager testimonial |
| CTA | Navy-Light | GP-specific contact |

### PE Portfolio Page

**Route:** `/pe-portfolio`  
**File:** `client/src/pages/PEPortfolio.tsx`  
**Purpose:** Target portfolio operations leaders.

| Section | Background | Content |
|---------|------------|---------|
| Hero | Navy | Portfolio-wide value creation messaging |
| Portfolio Model | Off-White | Rollout model visualization |
| Value Creation | Navy-Light | Timeline with value milestones |
| Pricing Model | Off-White | Portfolio licensing explanation |
| CTA | Navy-Light | Portfolio pricing inquiry |

---

## Maguire Case Study

**Route:** `/maguire`  
**File:** `client/src/pages/Maguire.tsx`  
**Purpose:** Deep-dive case study proving IF's capabilities.

### Section Breakdown

| Section | Background | Content |
|---------|------------|---------|
| Hero | Navy | "Maguire: The Client Intelligence OS" |
| The Problem | Off-White | Before state, pain points |
| The Solution | Navy | 80/20 approach explanation |
| The Build | Off-White | Technical architecture overview |
| The Results | Navy-Light | Animated metrics (95%, -50%, 232+) |
| Before/After | Off-White | Side-by-side comparison |
| What's Next | Navy | Future roadmap |
| CTA | Navy-Light | "Build yours" CTA |

### Animated Metrics Specifications

```jsx
// Three key metrics with animated counters
const metrics = [
  { value: 95, suffix: '%', label: 'Close Rate', sublabel: 'on qualified opportunities' },
  { value: 50, prefix: '-', suffix: '%', label: 'Admin Time', sublabel: 'reduction in manual work' },
  { value: 232, suffix: '+', label: 'Iterations', sublabel: 'system refinements' },
];

// Animation: Count up from 0 when scrolled into view
// Duration: 2 seconds
// Easing: ease-out
```

### 80/20 Bar Visualization

```
Visual representation of the 80/20 principle:
- 80% bar: "Proven Core" - gold color
- 20% bar: "Custom to You" - teal color
- Animated fill on scroll
- Labels above each section
```

---

## Contact Page

**Route:** `/contact`  
**File:** `client/src/pages/Contact.tsx`  
**Purpose:** Lead capture and conversion.

### Layout Specifications

```
Two-column layout (60/40 on desktop, stacked on mobile)

Left Column (Form):
- Headline: "Ready to move forward?"
- Subhead: "Connect with us to move forward"
- Trust badges: Legal training, Successful exits, AI practitioner
- Form fields: Name*, Email*, Company*, Role*, Message (optional)
- Submit button: "Send Message" with arrow

Right Column (Process):
- "What Happens Next" label
- "A Simple Process" headline
- 3 steps with icons:
  1. We'll respond within 24 hours
  2. 30-minute discovery call
  3. Tailored recommendation
- "Not ready for a call?" callout box
```

### Form Validation

```typescript
const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  company: z.string().min(2, "Company is required"),
  role: z.string().min(2, "Role is required"),
  message: z.string().optional(),
});
```

### Success State

```
On successful submission:
- Form fades out
- Success message fades in with checkmark icon
- "Thank you" headline
- "We'll be in touch within 24 hours" message
- Glassmorphism card effect
- Animated particle background
```

---

## Page Performance Guidelines

| Metric | Target | Implementation |
|--------|--------|----------------|
| First Contentful Paint | < 1.5s | Lazy load below-fold images |
| Largest Contentful Paint | < 2.5s | Optimize hero images, preload fonts |
| Cumulative Layout Shift | < 0.1 | Set explicit dimensions on images |
| Time to Interactive | < 3.5s | Code split by route |

### Image Optimization

```
Hero images: WebP format, max 1920px width, quality 80%
Card images: WebP format, max 800px width, quality 75%
Icons: SVG or Lucide React components
```

---

## SEO Requirements

| Page | Title | Meta Description |
|------|-------|------------------|
| Home | Ignition Forward \| AI Enablement for Expert-Led Businesses | We build AI systems for expert-led businesses. Including our own. Use AI to amplify your expertise. |
| About | About Us \| Ignition Forward | Meet the team behind Ignition Forward. Operators, not consultants, building AI systems that work. |
| Edge | Edge: 9 Hours to AI Fluency \| Ignition Forward | Install 2-3 AI workflows into your real day-to-day in just 9 hours. You keep them. |
| Fractional AI | Fractional AI Officer \| Ignition Forward | AI leadership without the $400K hire. Strategy, governance, and execution support. |
| Forward Deployed | Forward Deployed Teams \| Ignition Forward | Implementation teams that build WITH you, not FOR you. Knowledge transfer built in. |
| Maguire | Maguire Case Study \| Ignition Forward | See how we built our own Client Intelligence OS with 95% close rate and 50% admin time reduction. |
| Contact | Contact Us \| Ignition Forward | Ready to move forward? Connect with us to discuss how AI can amplify your expertise. |

---

*Each page should be implemented as a standalone component with its own scroll position reset on mount.*

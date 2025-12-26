# Ignition Forward Design System

**Version:** 1.0  
**Last Updated:** December 25, 2024  
**Author:** Manus AI

---

## Table of Contents

1. [Design Philosophy](#design-philosophy)
2. [Color System](#color-system)
3. [Typography](#typography)
4. [Spacing & Layout](#spacing--layout)
5. [Shadows & Depth](#shadows--depth)
6. [Animation Guidelines](#animation-guidelines)
7. [Responsive Breakpoints](#responsive-breakpoints)

---

## Design Philosophy

Ignition Forward's visual identity embodies **"Sophisticated Authority"** — a design language that communicates expertise, trust, and forward momentum. The aesthetic draws from high-end financial services and premium consulting firms while incorporating subtle technological elements that signal AI innovation.

### Core Principles

| Principle | Description | Implementation |
|-----------|-------------|----------------|
| **Confident Restraint** | Premium brands don't shout. Use whitespace and typography hierarchy to command attention. | Generous padding, limited color palette, strategic gold accents |
| **Substance Over Flash** | Every visual element must serve a purpose. Avoid decoration for decoration's sake. | Functional animations, meaningful iconography, data-driven visuals |
| **Progressive Disclosure** | Guide users through information in digestible layers. | Section-based layouts, scroll-triggered reveals, expandable content |
| **Trust Through Consistency** | Repetition of patterns builds familiarity and credibility. | Consistent section rhythms, standardized card styles, unified hover states |

### Design Movement Reference

The design draws inspiration from **Neo-Corporate Minimalism** — characterized by:
- Deep, authoritative color palettes (navy, charcoal)
- Metallic accent colors (gold, brass)
- Serif headlines paired with clean sans-serif body text
- Generous whitespace with strategic density in data areas
- Subtle depth through shadows and layering

---

## Color System

### Primary Palette

```css
/* Navy - Primary Background */
--navy: #1A2332;
--navy-rgb: 26, 35, 50;

/* Navy Light - Secondary Background */
--navy-light: #2A3545;
--navy-light-rgb: 42, 53, 69;

/* Gold - Primary Accent */
--gold: #C9A962;
--gold-rgb: 201, 169, 98;

/* Gold Dark - Hover/Active States */
--gold-dark: #B8944D;

/* Off-White - Light Background */
--off-white: #F8F7F4;
--off-white-rgb: 248, 247, 244;
```

### Secondary Palette

```css
/* Teal - Secondary Accent (sparingly) */
--teal: #4A9B9B;

/* Grey Body - Body Text on Dark */
--grey-body: #A8B2C1;

/* Grey Muted - Subtle Text */
--grey-muted: #6B7280;
```

### Color Usage Guidelines

| Element | Light Background | Dark Background |
|---------|------------------|-----------------|
| Headlines | `--navy` | `--off-white` |
| Body Text | `--grey-muted` or `--navy` | `--grey-body` |
| Accent Text | `--gold-dark` | `--gold` |
| Links | `--gold-dark` | `--gold` |
| Borders | `rgba(26,35,50,0.1)` | `rgba(201,169,98,0.2)` |
| Icons (Primary) | `--gold` | `--gold` |
| Icons (Secondary) | `--navy` | `--off-white` |

### Section Background Rhythm

The homepage and internal pages follow a deliberate background color rhythm to create visual interest and guide the eye:

```
1. Hero Section        → Navy (#1A2332)
2. Problem/Solution    → Navy-Light (#2A3545)
3. Who We Work With    → Off-White (#F8F7F4)
4. What Makes Us Different → Navy (#1A2332)
5. The Proof (Maguire) → Off-White (#F8F7F4)
6. The Opportunity     → Navy (#1A2332)
7. How We Help         → Off-White (#F8F7F4)
8. Testimonials        → Navy (#1A2332)
9. Final CTA           → Navy-Light (#2A3545)
```

This alternating pattern prevents visual monotony and creates natural "breathing room" between content sections.

---

## Typography

### Font Stack

```css
/* Display Font - Headlines */
--font-display: 'Playfair Display', Georgia, serif;

/* Body Font - Everything Else */
--font-body: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
```

### Loading Fonts (index.html)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap" rel="stylesheet">
```

### Type Scale

| Element | Font | Size (Desktop) | Size (Mobile) | Weight | Line Height |
|---------|------|----------------|---------------|--------|-------------|
| H1 (Hero) | Playfair Display | 72px (4.5rem) | 48px (3rem) | 600 | 1.1 |
| H2 (Section) | Playfair Display | 48px (3rem) | 36px (2.25rem) | 600 | 1.2 |
| H3 (Subsection) | Playfair Display | 32px (2rem) | 24px (1.5rem) | 600 | 1.3 |
| H4 (Card Title) | DM Sans | 20px (1.25rem) | 18px (1.125rem) | 600 | 1.4 |
| Body Large | DM Sans | 20px (1.25rem) | 18px (1.125rem) | 400 | 1.6 |
| Body | DM Sans | 16px (1rem) | 16px (1rem) | 400 | 1.6 |
| Body Small | DM Sans | 14px (0.875rem) | 14px (0.875rem) | 400 | 1.5 |
| Label | DM Sans | 12px (0.75rem) | 12px (0.75rem) | 600 | 1.4 |

### Label Text Style

Section labels use a distinctive uppercase treatment:

```css
.section-label, .label-text {
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--gold);
}
```

### Headline Styling

Headlines often feature a gold accent on key words:

```jsx
<h1 className="font-display text-off-white">
  Accelerate <span className="text-gold italic">What Matters.</span>
</h1>
```

---

## Spacing & Layout

### Spacing Scale

```css
/* Base unit: 4px */
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
--space-32: 8rem;     /* 128px */
```

### Section Padding

```css
/* Standard section padding */
.section {
  padding-top: 6rem;    /* 96px */
  padding-bottom: 6rem;
}

/* Large section padding (hero, CTA) */
.section-large {
  padding-top: 8rem;    /* 128px */
  padding-bottom: 8rem;
}

/* Mobile adjustments */
@media (max-width: 768px) {
  .section {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
}
```

### Container

```css
.container {
  width: 100%;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

@media (min-width: 640px) {
  .container {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}
```

### Grid System

```css
/* Standard 2-column layout */
.grid-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

/* Standard 3-column layout */
.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

/* Standard 4-column layout */
.grid-4 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

/* Responsive: Stack on mobile */
@media (max-width: 768px) {
  .grid-2, .grid-3, .grid-4 {
    grid-template-columns: 1fr;
  }
}
```

---

## Shadows & Depth

### Shadow Scale

```css
/* Subtle shadow - cards at rest */
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);

/* Default shadow - elevated cards */
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 
             0 2px 4px -1px rgba(0, 0, 0, 0.06);

/* Large shadow - modals, dropdowns */
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 
             0 4px 6px -2px rgba(0, 0, 0, 0.05);

/* Extra large shadow - hero cards */
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 
             0 10px 10px -5px rgba(0, 0, 0, 0.04);

/* Gold glow - accent elements */
--shadow-gold: 0 0 30px rgba(201, 169, 98, 0.3);
```

### Card Depth Levels

| Level | Use Case | Shadow | Border |
|-------|----------|--------|--------|
| Level 0 | Flat content areas | None | `1px solid border-color` |
| Level 1 | Standard cards | `shadow-sm` | `1px solid border-color` |
| Level 2 | Interactive cards (hover) | `shadow-md` | `1px solid gold/30` |
| Level 3 | Featured/highlighted cards | `shadow-lg` | `2px solid gold/50` |
| Level 4 | Floating elements | `shadow-xl` + gold glow | `2px solid gold` |

---

## Animation Guidelines

### Timing Functions

```css
/* Standard ease - most animations */
--ease-default: cubic-bezier(0.4, 0, 0.2, 1);

/* Ease out - elements entering */
--ease-out: cubic-bezier(0, 0, 0.2, 1);

/* Ease in - elements exiting */
--ease-in: cubic-bezier(0.4, 0, 1, 1);

/* Spring - bouncy interactions */
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
```

### Duration Scale

| Duration | Use Case |
|----------|----------|
| 150ms | Micro-interactions (button hover, icon color) |
| 200ms | Small transitions (card hover lift) |
| 300ms | Standard transitions (dropdowns, accordions) |
| 500ms | Medium animations (scroll reveals) |
| 800ms | Large animations (page transitions) |
| 1000ms+ | Dramatic effects (hero animations) |

### Standard Hover Transitions

```css
/* Card hover */
.card {
  transition: transform 200ms var(--ease-default),
              box-shadow 200ms var(--ease-default),
              border-color 200ms var(--ease-default);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: rgba(201, 169, 98, 0.5);
}

/* Button hover */
.btn {
  transition: background-color 150ms var(--ease-default),
              transform 150ms var(--ease-default);
}

.btn:hover {
  transform: translateY(-1px);
}

/* Link hover */
.link {
  transition: color 150ms var(--ease-default);
}
```

### Scroll-Triggered Animations (Framer Motion)

```jsx
// Fade up on scroll
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
  }
};

// Stagger children
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

// Scale in
const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
  }
};
```

---

## Responsive Breakpoints

```css
/* Mobile first approach */

/* Small (sm) - 640px */
@media (min-width: 640px) { }

/* Medium (md) - 768px */
@media (min-width: 768px) { }

/* Large (lg) - 1024px */
@media (min-width: 1024px) { }

/* Extra Large (xl) - 1280px */
@media (min-width: 1280px) { }

/* 2XL - 1536px */
@media (min-width: 1536px) { }
```

### Breakpoint Usage Guidelines

| Breakpoint | Typical Changes |
|------------|-----------------|
| Base (0-639px) | Single column, stacked layouts, smaller type |
| sm (640px+) | 2-column grids begin, larger padding |
| md (768px+) | Full navigation visible, 3-column grids |
| lg (1024px+) | Side-by-side hero layouts, 4-column grids |
| xl (1280px+) | Max container width reached |

---

## Quick Reference: CSS Variables

```css
:root {
  /* Colors */
  --navy: #1A2332;
  --navy-light: #2A3545;
  --gold: #C9A962;
  --gold-dark: #B8944D;
  --off-white: #F8F7F4;
  --teal: #4A9B9B;
  --grey-body: #A8B2C1;
  --grey-muted: #6B7280;
  
  /* Typography */
  --font-display: 'Playfair Display', Georgia, serif;
  --font-body: 'DM Sans', sans-serif;
  
  /* Spacing */
  --section-padding: 6rem;
  --section-padding-mobile: 4rem;
  --container-max: 1280px;
  
  /* Shadows */
  --shadow-card: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-card-hover: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --shadow-gold: 0 0 30px rgba(201, 169, 98, 0.3);
  
  /* Transitions */
  --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-default: 200ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: 300ms cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Border Radius */
  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
  --radius-2xl: 1.5rem;
}
```

---

*This design system document should be used as the single source of truth for all visual decisions. Any deviations should be documented and approved.*

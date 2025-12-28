# Mobile Optimization Standards

This document codifies mobile optimization requirements for the Ignition Forward website. All changes must maintain these standards.

## Pre-Deployment Checklist

Before any PR/deployment, verify:

- [ ] **Touch targets:** All interactive elements ≥48x48px
- [ ] **Text readability:** Body text ≥16px on mobile (no pinch-zoom needed)
- [ ] **Horizontal scroll:** None — test at 375px width (iPhone SE)
- [ ] **Form usability:** All inputs reachable with thumb, labels visible
- [ ] **CTA visibility:** Primary CTA visible without scrolling on mobile hero
- [ ] **Image loading:** All images have `loading="lazy"` and responsive sizing
- [ ] **Animation performance:** No janky animations on mobile (test on real device)
- [ ] **Viewport meta:** `<meta name="viewport" content="width=device-width, initial-scale=1">` present

---

## Tailwind Responsive Pattern

Always use mobile-first classes, then scale up:

```tsx
// Typography - smaller on mobile, larger on desktop
className="text-sm md:text-base lg:text-lg"
className="text-base md:text-xl lg:text-2xl"
className="text-3xl md:text-4xl lg:text-5xl"

// Grid - stack on mobile, columns on desktop
className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4"

// Spacing - tighter on mobile, roomier on desktop
className="py-16 md:py-24 lg:py-32"
className="px-4 md:px-6 lg:px-8"
className="gap-4 md:gap-6 lg:gap-8"

// Width - full on mobile, constrained on desktop
className="w-full md:w-auto"
className="max-w-full md:max-w-2xl lg:max-w-4xl"
```

---

## Touch Target Requirements

All interactive elements must meet minimum 48x48px touch target:

```tsx
// Good - explicit minimum size
<button className="p-3 min-w-[48px] min-h-[48px]">

// Good - padding creates adequate target
<button className="px-6 py-4">  // 24px + content + 24px height

// Bad - too small
<button className="p-2">  // Only 8px padding = ~24px total
```

---

## Typography Scale

| Element | Mobile | Tablet (md) | Desktop (lg) |
|---------|--------|-------------|--------------|
| H1 (Hero) | text-4xl (36px) | text-5xl (48px) | text-6xl+ (60px+) |
| H2 (Section) | text-3xl (30px) | text-4xl (36px) | text-5xl (48px) |
| H3 (Card) | text-lg (18px) | text-xl (20px) | text-2xl (24px) |
| Body | text-base (16px) | text-lg (18px) | text-xl (20px) |
| Small | text-sm (14px) | text-sm (14px) | text-base (16px) |
| Caption | text-xs (12px) | text-xs (12px) | text-sm (14px) |

---

## Image Optimization

### Lazy Loading
All images below the fold must use lazy loading:

```tsx
<img
  src="/images/example.png"
  alt="Description"
  loading="lazy"
  className="w-full h-auto"
/>
```

### Responsive Images
For hero/background images, consider mobile-specific handling:

```tsx
// CSS approach for background images
<div
  className="bg-cover bg-center"
  style={{
    backgroundImage: 'url(/images/hero-mobile.jpg)',
  }}
/>
// Then override with CSS media query for desktop
```

---

## Form Layout

Forms should stack fields on mobile:

```tsx
// Good - stacks on mobile, side-by-side on desktop
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <input placeholder="First Name" />
  <input placeholder="Last Name" />
</div>

// Good - buttons stack on mobile
<div className="flex flex-col sm:flex-row gap-3">
  <button>Submit</button>
  <button>Cancel</button>
</div>
```

---

## Test Devices

Always test on these viewports:

| Device | Width | Notes |
|--------|-------|-------|
| iPhone SE | 375px | Smallest common viewport |
| iPhone 14 Pro | 393px | Current standard |
| iPad | 768px | Tablet breakpoint |
| Desktop | 1280px+ | Full experience |

---

## Common Anti-Patterns

### Don't:

```tsx
// Fixed widths that cause overflow
className="w-80"  // 320px fixed

// Text too small on mobile
className="text-xs"  // 12px body text

// Insufficient padding on buttons
className="p-2"  // 8px = too small for touch

// Side-by-side always
className="flex flex-row"  // Should be flex-col md:flex-row
```

### Do:

```tsx
// Constrained with max-width
className="w-80 max-w-[90vw]"

// Responsive text
className="text-sm md:text-base"

// Adequate touch target
className="p-3 min-h-[48px]"

// Mobile-first stacking
className="flex flex-col md:flex-row"
```

---

## Animation Performance

- Avoid animating layout properties (`width`, `height`, `top`, `left`) on mobile
- Prefer `transform` and `opacity` for animations
- Test on real devices, not just Chrome DevTools
- Consider `prefers-reduced-motion` media query for accessibility

```tsx
// Good - transforms are GPU accelerated
animate={{ scale: 1.02, opacity: 1 }}

// Avoid on mobile - triggers layout
animate={{ width: '100%', height: 200 }}
```

---

## Safe Areas

For devices with notches/home indicators:

```css
/* In CSS */
.safe-area-pb {
  padding-bottom: env(safe-area-inset-bottom);
}

/* Already implemented on sticky mobile CTA */
```

---

## Enforcement

This document should be referenced in:
1. PR review checklists
2. Design system documentation
3. Developer onboarding

Last updated: December 2024

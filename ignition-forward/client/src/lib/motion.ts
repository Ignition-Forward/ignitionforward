/**
 * Motion Tokens - System Initializing Thesis
 * 
 * Metaphor: deterministic, sequential, stateful
 * Feels like: a system booting, indexing, validating, then becoming ready
 * 
 * Rules:
 * 1. Deterministic beats decorative - every motion explains state, hierarchy, or interaction
 * 2. One loop maximum per viewport (and it must be subtle + slow)
 * 3. No "floaty" easing - use one easing family across the site
 * 4. Motion is anchored - elements move from final position by small offset; no long travel
 * 5. Hierarchy controls motion - headline first, then subhead, then CTA, then supporting proof
 */

// Duration tokens (in seconds)
export const duration = {
  instant: 0.08,   // 80ms - press feedback
  fast: 0.14,      // 140ms - hover states
  base: 0.22,      // 220ms - small transitions
  slow: 0.36,      // 360ms - section reveals
  page: 0.42,      // 420ms - route transitions
} as const;

// Easing - single family for consistency
// Custom cubic-bezier that feels "system-like" - quick start, controlled settle
export const easing = {
  standard: [0.2, 0, 0, 1],      // Primary easing for all motion
  settle: [0.4, 0, 0.2, 1],      // For "resolve" moments with micro-settle
  out: [0, 0, 0.2, 1],           // Exit animations
} as const;

// Distance tokens (in pixels)
export const distance = {
  lift: 2,         // Hover lift - subtle, not bouncy
  revealY: 12,     // Scroll reveal Y offset - tight, not floaty
  revealX: 8,      // Horizontal reveals
  blur: 8,         // Blur for "resolve" moments
} as const;

// Stagger tokens (in seconds)
export const stagger = {
  fast: 0.04,      // 40ms between items
  base: 0.08,      // 80ms between items  
  slow: 0.12,      // 120ms between items
} as const;

/**
 * Primitive 1: Resolve In (default reveal)
 * Use for: hero copy, section headings, paragraphs, cards
 * Behavior: slight Y offset + blur→sharp + opacity
 */
export const resolveIn = {
  initial: { 
    opacity: 0, 
    y: distance.revealY,
    filter: `blur(${distance.blur}px)`,
  },
  animate: { 
    opacity: 1, 
    y: 0,
    filter: 'blur(0px)',
  },
  transition: {
    duration: duration.slow,
    ease: easing.settle,
  },
};

/**
 * Primitive 2: Wipe Reveal (signature reveal)
 * Use for: 1-2 places per page (hero label line, proof artifact)
 * Behavior: clipPath that reveals left→right once
 */
export const wipeReveal = {
  initial: { 
    clipPath: 'inset(0 100% 0 0)',
  },
  animate: { 
    clipPath: 'inset(0 0% 0 0)',
  },
  transition: {
    duration: duration.slow,
    ease: easing.standard,
  },
};

/**
 * Primitive 3: Micro-Lift (interaction)
 * Use for: cards, buttons, nav
 * Behavior: 2px lift + subtle shadow shift; no sparkle
 */
export const microLift = {
  rest: { 
    y: 0,
    boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
  },
  hover: { 
    y: -distance.lift,
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
  },
  transition: {
    duration: duration.fast,
    ease: easing.standard,
  },
};

/**
 * Primitive 4: Scan Sweep (brand motif - replaces comet)
 * Use for: CTA hover, key interactions
 * Behavior: single scan pass on hover, then stops
 */
export const scanSweep = {
  initial: { 
    x: '-100%',
    opacity: 0,
  },
  animate: { 
    x: '100%',
    opacity: [0, 0.6, 0],
  },
  transition: {
    duration: duration.base,
    ease: easing.standard,
  },
};

/**
 * Page transition variants
 */
export const pageTransition = {
  initial: { 
    opacity: 0, 
    y: distance.revealY,
    filter: `blur(${distance.blur / 2}px)`,
  },
  animate: { 
    opacity: 1, 
    y: 0,
    filter: 'blur(0px)',
  },
  exit: { 
    opacity: 0,
    filter: `blur(${distance.blur / 2}px)`,
  },
  transition: {
    duration: duration.page,
    ease: easing.settle,
  },
};

/**
 * Staggered children container
 */
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: stagger.base,
      delayChildren: 0.1,
    },
  },
};

/**
 * Counter animation (telemetry-style)
 * Fast count-up with settle, not bouncy
 */
export const counterAnimation = {
  duration: duration.slow,
  ease: easing.settle,
};

// Default transition for MotionConfig
export const defaultTransition = {
  duration: duration.base,
  ease: easing.standard,
};

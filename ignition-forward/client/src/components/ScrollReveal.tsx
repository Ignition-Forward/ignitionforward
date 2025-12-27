import { motion, useInView, Variants } from 'framer-motion';
import { useRef, ReactNode } from 'react';
import { duration, easing, distance, stagger } from '@/lib/motion';

/**
 * DESIGN: Scroll Reveal Component - System Initializing Thesis
 * 
 * Two reveal modes only:
 * - resolve (default): blur→sharp + Y offset + opacity - feels like system initializing
 * - wipe (signature): clipPath reveal for 1-2 accent moments per page
 * 
 * Motion tokens enforced - no ad-hoc durations or easings
 */

type RevealMode = 'resolve' | 'wipe' | 'resolveLeft' | 'resolveRight';

interface ScrollRevealProps {
  children: ReactNode;
  mode?: RevealMode;
  delay?: number;
  className?: string;
  once?: boolean;
}

// Resolve In - default reveal (Primitive 1)
// Slight Y offset + blur→sharp + opacity
const resolveVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: distance.revealY,
    filter: `blur(${distance.blur}px)`,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: 'blur(0px)',
  },
};

// Resolve from left
const resolveLeftVariants: Variants = {
  hidden: { 
    opacity: 0, 
    x: -distance.revealX,
    filter: `blur(${distance.blur / 2}px)`,
  },
  visible: { 
    opacity: 1, 
    x: 0,
    filter: 'blur(0px)',
  },
};

// Resolve from right
const resolveRightVariants: Variants = {
  hidden: { 
    opacity: 0, 
    x: distance.revealX,
    filter: `blur(${distance.blur / 2}px)`,
  },
  visible: { 
    opacity: 1, 
    x: 0,
    filter: 'blur(0px)',
  },
};

// Wipe Reveal - signature reveal (Primitive 2)
// ClipPath that reveals left→right once
const wipeVariants: Variants = {
  hidden: { 
    clipPath: 'inset(0 100% 0 0)',
    opacity: 0,
  },
  visible: { 
    clipPath: 'inset(0 0% 0 0)',
    opacity: 1,
  },
};

const variantMap: Record<RevealMode, Variants> = {
  resolve: resolveVariants,
  wipe: wipeVariants,
  resolveLeft: resolveLeftVariants,
  resolveRight: resolveRightVariants,
};

export default function ScrollReveal({
  children,
  mode = 'resolve',
  delay = 0,
  className = '',
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { 
    once, 
    margin: '-80px' 
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variantMap[mode]}
      transition={{
        duration: duration.slow,
        delay,
        ease: easing.settle,
      }}
    >
      {children}
    </motion.div>
  );
}

// Stagger container for lists - uses motion tokens
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  speed?: 'fast' | 'base' | 'slow';
}

export function StaggerContainer({
  children,
  className = '',
  speed = 'base',
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger[speed],
            delayChildren: 0.05,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

// Stagger item - uses Resolve In primitive
interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export function StaggerItem({ children, className = '' }: StaggerItemProps) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { 
          opacity: 0, 
          y: distance.revealY,
          filter: `blur(${distance.blur}px)`,
        },
        visible: { 
          opacity: 1, 
          y: 0,
          filter: 'blur(0px)',
          transition: {
            duration: duration.slow,
            ease: easing.settle,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

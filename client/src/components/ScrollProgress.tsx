import { motion, useScroll, useSpring } from "framer-motion";

/*
 * SCROLL PROGRESS - Unified Component
 *
 * Shows reading progress at top of viewport.
 * Use on long-form pages (Maguire, About, service pages).
 * Gold gradient bar that fills left-to-right.
 */

interface ScrollProgressProps {
  className?: string;
}

export default function ScrollProgress({ className = "" }: ScrollProgressProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className={`scroll-progress ${className}`}
      style={{ scaleX }}
    />
  );
}

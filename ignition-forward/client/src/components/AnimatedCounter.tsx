import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { duration, easing } from '@/lib/motion';

/*
 * DESIGN: Animated Counter - System Initializing Thesis
 * 
 * Creates a telemetry-style counting animation for metrics
 * - Counts up from 0 to target value
 * - Triggers when element enters viewport
 * - Supports prefix/suffix (%, +, $, etc.)
 * - Fast count-up with settle, not bouncy
 */

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  countDuration?: number;
  className?: string;
}

export default function AnimatedCounter({
  value,
  prefix = '',
  suffix = '',
  countDuration = 0.8, // Faster count-up (800ms)
  className = '',
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = Date.now();
    const endTime = startTime + countDuration * 1000;

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / (countDuration * 1000), 1);
      
      // Easing function matching our settle curve
      const eased = 1 - Math.pow(1 - progress, 2);
      
      setCount(Math.floor(eased * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, countDuration]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 12, filter: 'blur(8px)' }}
      animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ 
        duration: duration.slow, 
        ease: easing.settle 
      }}
    >
      {prefix}{count}{suffix}
    </motion.span>
  );
}

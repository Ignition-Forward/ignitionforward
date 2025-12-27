import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { duration, easing } from '@/lib/motion';

/*
 * DESIGN: 80/20 Model Visualization - System Initializing Thesis
 * 
 * An animated visualization of the core value proposition
 * - Animated bar that fills to show 80/20 split
 * - No glow, no pulse - clean system aesthetic
 * - Tight reveal animations (360ms)
 */

export default function Model8020() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div ref={ref} className="w-full max-w-2xl mx-auto">
      {/* Main visualization */}
      <div className="relative">
        {/* Background bar */}
        <div className="h-16 md:h-20 rounded-lg bg-navy-light/50 border border-white/5 overflow-hidden">
          {/* 80% Proven Core */}
          <motion.div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-teal/20 to-teal/40 flex items-center"
            initial={{ width: 0 }}
            animate={isInView ? { width: '80%' } : {}}
            transition={{ duration: duration.slow, ease: easing.settle, delay: 0.1 }}
          >
            <motion.span
              className="ml-6 text-teal font-medium text-sm md:text-base"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3, duration: duration.base }}
            >
              80% Proven Core
            </motion.span>
          </motion.div>

          {/* 20% Custom - clean, no glow */}
          <motion.div
            className="absolute inset-y-0 right-0 flex items-center justify-end overflow-hidden"
            style={{ width: '20%' }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: duration.base, delay: 0.35 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gold/30 to-gold/50" />
            <motion.span
              className="relative mr-4 text-gold font-semibold text-sm md:text-base whitespace-nowrap"
              initial={{ opacity: 0, x: 8 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.45, duration: duration.base, ease: easing.standard }}
            >
              20% Custom
            </motion.span>
          </motion.div>
        </div>

        {/* Divider line */}
        <motion.div
          className="absolute top-0 bottom-0 w-px bg-gold"
          style={{ left: '80%' }}
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : {}}
          transition={{ duration: duration.base, delay: 0.3, ease: easing.standard }}
        />
      </div>

      {/* Labels below */}
      <div className="flex justify-between mt-6">
        <motion.div
          className="text-left"
          initial={{ opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: duration.slow, ease: easing.settle }}
        >
          <p className="text-grey text-sm">Battle-tested systems</p>
          <p className="text-grey text-sm">that work across expert businesses</p>
        </motion.div>
        <motion.div
          className="text-right"
          initial={{ opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.48, duration: duration.slow, ease: easing.settle }}
        >
          <p className="text-gold text-sm font-medium">Configured for</p>
          <p className="text-gold text-sm font-medium">your specific workflows</p>
        </motion.div>
      </div>

      {/* Equals sign and result */}
      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0, y: 8 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.56, duration: duration.slow, ease: easing.settle }}
      >
        <span className="text-grey text-2xl">=</span>
        <p className="mt-2 headline-sub text-off-white">
          Bespoke at Scale
        </p>
      </motion.div>
    </div>
  );
}

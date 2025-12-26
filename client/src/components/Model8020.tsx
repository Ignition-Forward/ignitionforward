import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

/*
 * DESIGN: 80/20 Model Visualization
 * An animated, interactive visualization of the core value proposition
 * - Animated bar that fills to show 80/20 split
 * - Glowing accent on the 20% custom portion
 * - Reveals on scroll with staggered animation
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
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          >
            <motion.span
              className="ml-6 text-teal font-medium text-sm md:text-base"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1 }}
            >
              80% Proven Core
            </motion.span>
          </motion.div>

          {/* 20% Custom - with glow effect */}
          <motion.div
            className="absolute inset-y-0 right-0 flex items-center justify-end overflow-hidden"
            style={{ width: '20%' }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gold/30 to-gold/60" />
            <div className="absolute inset-0 bg-gold/20 animate-pulse" />
            {/* Glow effect */}
            <div 
              className="absolute inset-y-2 right-2 left-2 rounded"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(212, 168, 83, 0.3))',
                boxShadow: '0 0 30px rgba(212, 168, 83, 0.4)',
              }}
            />
            <motion.span
              className="relative mr-4 text-gold font-semibold text-sm md:text-base whitespace-nowrap"
              initial={{ opacity: 0, x: 10 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 1.5 }}
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
          transition={{ duration: 0.5, delay: 1.1 }}
        />
      </div>

      {/* Labels below */}
      <div className="flex justify-between mt-6">
        <motion.div
          className="text-left"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.3 }}
        >
          <p className="text-grey text-sm">Battle-tested systems</p>
          <p className="text-grey text-sm">that work across expert businesses</p>
        </motion.div>
        <motion.div
          className="text-right"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5 }}
        >
          <p className="text-gold text-sm font-medium">Configured for</p>
          <p className="text-gold text-sm font-medium">your specific workflows</p>
        </motion.div>
      </div>

      {/* Equals sign and result */}
      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 1.8, duration: 0.5 }}
      >
        <span className="text-grey text-2xl">=</span>
        <p className="mt-2 headline-sub text-off-white">
          Bespoke at Scale
        </p>
      </motion.div>
    </div>
  );
}

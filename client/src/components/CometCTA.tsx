import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { duration, easing, distance } from '@/lib/motion';

/**
 * DESIGN: CTA Button with micro-lift and scan sweep
 *
 * Interaction:
 * - Clean gold button with micro-lift (2px, not bouncy)
 * - On hover: single scan sweep
 * - No shimmer, no glow, no sparkle
 * - Deterministic timing: 140ms hover, 220ms transitions
 */

interface CometCTAProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'link' | 'button';
}

export default function CometCTA({ href, children, className = '', variant = 'button' }: CometCTAProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Button variant - solid gold with scan sweep
  if (variant === 'button') {
    return (
      <motion.div
        className={`relative inline-block ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={{ y: isHovered ? -distance.lift : 0 }}
        transition={{ 
          duration: duration.fast, 
          ease: easing.standard 
        }}
      >
        <Link href={href}>
          <span 
            className="relative overflow-hidden inline-flex items-center justify-center gap-2.5 px-7 py-4 font-body font-semibold text-base tracking-wide rounded-lg focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
            style={{
              background: '#C9A962',
              color: '#1A2332',
              boxShadow: isHovered 
                ? `0 ${4 + distance.lift}px 12px rgba(0,0,0,0.15)` 
                : '0 1px 2px rgba(0,0,0,0.1)',
              transition: `box-shadow ${duration.fast}s ease`,
            }}
          >
            {/* Scan sweep - single pass on hover (Primitive 4) */}
            <motion.span
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
              }}
              initial={{ x: '-100%' }}
              animate={{ x: isHovered ? '100%' : '-100%' }}
              transition={{ 
                duration: duration.base,
                ease: easing.standard,
              }}
            />

            {/* Button content */}
            <span className="relative z-10 flex items-center gap-2.5">
              <span>{children}</span>
              <motion.span
                animate={{ x: isHovered ? 3 : 0 }}
                transition={{
                  duration: duration.fast,
                  ease: easing.standard
                }}
              >
                <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
              </motion.span>
            </span>
          </span>
        </Link>
      </motion.div>
    );
  }

  // Link variant - gold text with underline
  return (
    <motion.div
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={href}>
        <span className="group relative inline-flex items-center gap-3 cursor-pointer focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-4 rounded">
          {/* Text content */}
          <span className="font-body text-lg md:text-xl font-medium text-gold">
            {children}
          </span>

          {/* Arrow */}
          <motion.span
            className="text-gold"
            animate={{ x: isHovered ? 3 : 0 }}
            transition={{
              duration: duration.fast,
              ease: easing.standard
            }}
          >
            <ArrowRight className="w-5 h-5" />
          </motion.span>

          {/* Underline - wipe reveal style */}
          <motion.span
            className="absolute -bottom-1.5 left-0 right-8 h-[1.5px] bg-gold/40"
            initial={{ scaleX: 0.6 }}
            animate={{ scaleX: isHovered ? 1 : 0.6 }}
            transition={{
              duration: duration.base,
              ease: easing.standard
            }}
            style={{ transformOrigin: 'left' }}
          />
        </span>
      </Link>
    </motion.div>
  );
}

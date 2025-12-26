import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

/*
 * DESIGN: Comet CTA Link
 * Premium animated CTA with:
 * - Gold text with arrow
 * - Animated underline with comet trail effect
 * - Subtle glow on hover
 * 
 * Reference: Screenshot showing gold text "Connect with us to move forward →"
 * with animated underline sweep
 */

interface CometCTAProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'link' | 'button';
}

export default function CometCTA({ href, children, className = '', variant = 'link' }: CometCTAProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Button variant - solid gold button
  if (variant === 'button') {
    return (
      <motion.div
        className={`relative inline-block ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Link href={href}>
          <span className="btn-gold relative overflow-hidden">
            {/* Shimmer effect */}
            <motion.span
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
              }}
              initial={{ x: '-100%' }}
              animate={isHovered ? { x: '100%' } : { x: '-100%' }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            />

            {/* Content */}
            <span className="relative z-10 flex items-center gap-2">
              {children}
              <motion.span
                animate={isHovered ? { x: 3 } : { x: 0 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </span>
          </span>
        </Link>
      </motion.div>
    );
  }

  // Link variant - gold text with comet underline (default)
  return (
    <motion.div
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={href}>
        <span className="group relative inline-flex items-center gap-3 cursor-pointer">
          {/* Text content */}
          <span className="font-body text-lg md:text-xl font-medium text-gold transition-colors duration-300 group-hover:text-gold-hover">
            {children}
          </span>
          
          {/* Arrow */}
          <motion.span
            className="text-gold"
            animate={isHovered ? { x: 4 } : { x: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <ArrowRight className="w-5 h-5" />
          </motion.span>
          
          {/* Animated underline with comet effect */}
          <span className="absolute -bottom-2 left-0 right-8 h-[2px] overflow-hidden">
            {/* Base underline */}
            <motion.span
              className="absolute inset-0 bg-gold/40"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isHovered ? 1 : 0.6 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              style={{ transformOrigin: 'left' }}
            />
            
            {/* Comet sweep animation */}
            <motion.span
              className="absolute inset-y-0 w-full"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, #C9A962 30%, #D4B872 50%, #C9A962 70%, transparent 100%)',
              }}
              initial={{ x: '-100%' }}
              animate={isHovered ? { x: '200%' } : { x: '-100%' }}
              transition={{ 
                duration: 1.2, 
                ease: 'easeInOut',
                repeat: isHovered ? Infinity : 0,
                repeatDelay: 0.5
              }}
            />
            
            {/* Glow trail */}
            <motion.span
              className="absolute inset-y-0 w-8 blur-sm"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(201, 169, 98, 0.8), transparent)',
              }}
              initial={{ x: '-100%' }}
              animate={isHovered ? { x: '500%' } : { x: '-100%' }}
              transition={{ 
                duration: 1.2, 
                ease: 'easeInOut',
                repeat: isHovered ? Infinity : 0,
                repeatDelay: 0.5
              }}
            />
          </span>
        </span>
      </Link>
    </motion.div>
  );
}

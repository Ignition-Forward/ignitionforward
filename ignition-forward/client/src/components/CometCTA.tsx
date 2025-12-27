import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { duration, easing, distance } from '@/lib/motion';

/**
 * DESIGN: Command CTA - System Initializing Thesis
 * 
 * Interaction:
 * - Clean gold button with micro-lift (2px, not bouncy)
 * - On hover: single scan sweep + command reveal "> move_forward()"
 * - No shimmer, no glow, no sparkle
 * - Deterministic timing: 140ms hover, 220ms transitions
 */

interface CometCTAProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'link' | 'button';
  command?: string;
}

// Convert text to snake_case command
function toCommand(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, '_');
}

export default function CometCTA({ href, children, className = '', variant = 'button', command }: CometCTAProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const commandText = command || (typeof children === 'string' ? toCommand(children) : 'move_forward');

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

            {/* Content with command reveal */}
            <span className="relative z-10 flex items-center gap-2.5">
              <AnimatePresence mode="wait">
                {isHovered ? (
                  <motion.span
                    key="command"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ 
                      duration: duration.fast, 
                      ease: easing.standard 
                    }}
                    className="font-mono text-sm tracking-tight"
                  >
                    <span className="opacity-60">&gt;</span> {commandText}()
                  </motion.span>
                ) : (
                  <motion.span
                    key="text"
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ 
                      duration: duration.fast, 
                      ease: easing.standard 
                    }}
                  >
                    {children}
                  </motion.span>
                )}
              </AnimatePresence>
              
              <motion.span
                animate={{ x: isHovered ? 3 : 0, opacity: isHovered ? 0.7 : 1 }}
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

  // Link variant - gold text with command reveal
  return (
    <motion.div
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={href}>
        <span className="group relative inline-flex items-center gap-3 cursor-pointer focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-4 rounded">
          {/* Text content with command swap */}
          <span className="font-body text-lg md:text-xl font-medium text-gold">
            <AnimatePresence mode="wait">
              {isHovered ? (
                <motion.span
                  key="command"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: duration.fast }}
                  className="font-mono text-base tracking-tight"
                >
                  <span className="opacity-50">&gt;</span> {commandText}()
                </motion.span>
              ) : (
                <motion.span
                  key="text"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: duration.fast }}
                >
                  {children}
                </motion.span>
              )}
            </AnimatePresence>
          </span>
          
          {/* Arrow */}
          <motion.span
            className="text-gold"
            animate={{ x: isHovered ? 3 : 0, opacity: isHovered ? 0.7 : 1 }}
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

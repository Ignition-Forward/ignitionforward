import { useState } from 'react';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * FAST FORWARD BUTTON - Command-Line Aesthetic
 *
 * Design Philosophy:
 * - Hover: Text transforms to "> fast_forward()" — telegraphs "we build systems"
 * - Click: Scale down (0.98) for physical button press feel
 * - No shimmer, no glow, no bounce — deterministic, operator-grade
 * - Timing: 140ms transitions, 120-240ms click feedback
 *
 * Uses proper <a> tag for SEO, accessibility, and native link behaviors
 * (right-click, cmd+click, etc.)
 */

interface MoveForwardButtonProps {
  className?: string;
  fullWidth?: boolean;
}

export default function MoveForwardButton({ className = '', fullWidth = false }: MoveForwardButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Link href="/contact">
      <motion.a
        className={`btn-gold cursor-pointer select-none ${fullWidth ? 'w-full justify-center' : ''} ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setIsPressed(false);
        }}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        animate={{
          scale: isPressed ? 0.98 : 1,
          y: isHovered && !isPressed ? -2 : 0,
        }}
        transition={{
          duration: 0.14,
          ease: [0.2, 0, 0, 1],
        }}
        style={{
          display: 'inline-flex',
        }}
      >
        {/* Text content with crossfade */}
        <span className="relative overflow-hidden">
          {/* Default state */}
          <motion.span
            className="flex items-center gap-2"
            animate={{
              opacity: isHovered ? 0 : 1,
              y: isHovered ? -8 : 0,
            }}
            transition={{
              duration: 0.14,
              ease: [0.2, 0, 0, 1],
            }}
          >
            Fast Forward <ArrowRight className="w-4 h-4" />
          </motion.span>

          {/* Hovered state - command line aesthetic */}
          <motion.span
            className="absolute inset-0 flex items-center justify-center font-mono text-sm tracking-tight"
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 8,
            }}
            transition={{
              duration: 0.14,
              ease: [0.2, 0, 0, 1],
            }}
          >
            <span className="text-navy/60">&gt;</span>&nbsp;fast_forward()
          </motion.span>
        </span>
      </motion.a>
    </Link>
  );
}

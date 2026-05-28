import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * FAST FORWARD BUTTON
 *
 * Design Philosophy:
 * - Hover: Subtle lift and arrow animation
 * - Click: Scale down (0.98) for physical button press feel
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
    <motion.a
      href="/contact"
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
      <span className="flex items-center gap-2">
        Fast Forward
        <motion.span
          animate={{ x: isHovered ? 3 : 0 }}
          transition={{ duration: 0.14, ease: [0.2, 0, 0, 1] }}
        >
          <ArrowRight className="w-4 h-4" />
        </motion.span>
      </span>
    </motion.a>
  );
}

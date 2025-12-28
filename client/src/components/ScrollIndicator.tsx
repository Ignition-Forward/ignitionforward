import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

/*
 * SCROLL INDICATOR - Unified Component
 *
 * Standard scroll indicator for hero sections.
 * Shows at bottom of viewport, animates with subtle bounce.
 * Auto-hides after user starts scrolling.
 */

interface ScrollIndicatorProps {
  label?: string;
  className?: string;
}

export default function ScrollIndicator({
  label = "Explore",
  className = ""
}: ScrollIndicatorProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY < 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 ${className}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
        >
          <span className="text-off-white/50 text-xs tracking-widest uppercase font-body">
            {label}
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: [0.4, 0, 0.6, 1],
            }}
          >
            <ChevronDown className="w-5 h-5 text-gold/70" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

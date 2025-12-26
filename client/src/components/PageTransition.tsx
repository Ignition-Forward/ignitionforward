import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'wouter';
import { useEffect, useState, ReactNode } from 'react';

/*
 * PAGE TRANSITION COMPONENT
 * Premium page transitions with branded loading state
 * 
 * Design: Gold accent line animation with fade transitions
 * Colors: Navy #1A2332, Gold #C9A962
 */

interface PageTransitionProps {
  children: ReactNode;
}

// Page fade variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
      when: 'beforeChildren' as const,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 1, 1] as [number, number, number, number],
    },
  },
};

// Loading bar animation
const loadingBarVariants = {
  initial: {
    scaleX: 0,
    originX: 0,
  },
  animate: {
    scaleX: 1,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
    },
  },
  exit: {
    scaleX: 0,
    originX: 1,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 1, 1] as [number, number, number, number],
    },
  },
};

export function PageTransition({ children }: PageTransitionProps) {
  const [location] = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [displayLocation, setDisplayLocation] = useState(location);

  useEffect(() => {
    if (location !== displayLocation) {
      setIsLoading(true);
      
      // Brief loading state for premium feel
      const timer = setTimeout(() => {
        setDisplayLocation(location);
        setIsLoading(false);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [location, displayLocation]);

  return (
    <>
      {/* Top loading bar */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed top-0 left-0 right-0 h-[3px] z-[9999]"
            style={{ backgroundColor: '#C9A962' }}
            variants={loadingBarVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          />
        )}
      </AnimatePresence>

      {/* Page content with transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={displayLocation}
          variants={pageVariants}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}

// Branded loading overlay for heavier transitions
export function LoadingOverlay({ isVisible }: { isVisible: boolean }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9998] flex items-center justify-center"
          style={{ backgroundColor: '#1A2332' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Animated logo/spinner */}
          <div className="relative">
            {/* Outer ring */}
            <motion.div
              className="w-16 h-16 rounded-full border-2 border-gold/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />
            
            {/* Inner pulsing dot */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
              style={{ backgroundColor: '#C9A962' }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' as const }}
            />
            
            {/* Orbiting particle */}
            <motion.div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
              style={{ backgroundColor: '#C9A962', transformOrigin: 'center 32px' }}
              animate={{ 
                rotate: 360,
              }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' as const }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Hook for programmatic loading states
export function usePageTransition() {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const startTransition = () => setIsTransitioning(true);
  const endTransition = () => setIsTransitioning(false);

  return { isTransitioning, startTransition, endTransition };
}

export default PageTransition;

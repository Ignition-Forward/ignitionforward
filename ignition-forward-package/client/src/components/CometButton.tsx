import { ArrowRight, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

/*
 * DESIGN: Comet Button (Form Submit Version)
 * Premium animated button with:
 * - Particle trail effect on hover
 * - Shimmer sweep animation
 * - Loading state with spinner
 * - Success state with checkmark
 */

interface CometButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
}

export default function CometButton({ 
  children, 
  className = '', 
  type = 'button',
  disabled = false,
  isLoading = false,
  onClick 
}: CometButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const particleIdRef = useRef(0);

  useEffect(() => {
    if (!isHovered || disabled || isLoading) {
      setParticles([]);
      return;
    }

    const interval = setInterval(() => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const newParticle: Particle = {
        id: particleIdRef.current++,
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        size: Math.random() * 4 + 2,
        opacity: Math.random() * 0.5 + 0.3,
      };

      setParticles(prev => [...prev.slice(-12), newParticle]);
    }, 60);

    return () => clearInterval(interval);
  }, [isHovered, disabled, isLoading]);

  // Clean up old particles
  useEffect(() => {
    if (particles.length === 0) return;
    
    const timeout = setTimeout(() => {
      setParticles(prev => prev.slice(1));
    }, 400);

    return () => clearTimeout(timeout);
  }, [particles]);

  return (
    <motion.div
      ref={containerRef}
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={!disabled && !isLoading ? { scale: 1.02 } : {}}
      whileTap={!disabled && !isLoading ? { scale: 0.98 } : {}}
    >
      <button
        type={type}
        disabled={disabled || isLoading}
        onClick={onClick}
        className="btn-gold relative overflow-hidden w-full disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {/* Particle effects */}
        {particles.map(particle => (
          <motion.span
            key={particle.id}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
              background: 'rgba(255, 255, 255, 0.9)',
              boxShadow: '0 0 6px rgba(255, 255, 255, 0.5)',
            }}
            initial={{ opacity: particle.opacity, scale: 1 }}
            animate={{ opacity: 0, scale: 0, y: -15 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />
        ))}

        {/* Shimmer effect */}
        <motion.span
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
          }}
          initial={{ x: '-100%' }}
          animate={isHovered && !disabled && !isLoading ? { x: '100%' } : { x: '-100%' }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        />

        {/* Glow effect on hover */}
        {isHovered && !disabled && !isLoading && (
          <motion.span
            className="absolute inset-0 pointer-events-none rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              boxShadow: '0 0 30px rgba(212, 168, 83, 0.4), 0 0 60px rgba(212, 168, 83, 0.2)',
            }}
          />
        )}

        {/* Content */}
        <span className="relative z-10 flex items-center justify-center gap-2">
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              {children}
              <motion.span
                animate={isHovered && !disabled ? { x: 3 } : { x: 0 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </>
          )}
        </span>
      </button>
    </motion.div>
  );
}

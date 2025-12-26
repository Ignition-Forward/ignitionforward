import { useEffect, useRef, useState } from 'react';

/*
 * DESIGN: Premium Particle Field
 * Creates an ambient, intelligent-feeling background with:
 * - Floating particles that suggest data/AI
 * - Subtle connecting lines between nearby particles
 * - Gentle wave motion overlay
 * - Gold accent particles
 */

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  isGold: boolean;
}

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || dimensions.width === 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Initialize particles
    const particleCount = Math.floor((dimensions.width * dimensions.height) / 15000);
    particlesRef.current = Array.from({ length: particleCount } as ArrayLike<unknown>, () => ({
      x: Math.random() * dimensions.width,
      y: Math.random() * dimensions.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.2,
      isGold: Math.random() > 0.85,
    }));

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      // Draw gradient background overlay
      const gradient = ctx.createRadialGradient(
        dimensions.width * 0.3,
        dimensions.height * 0.4,
        0,
        dimensions.width * 0.5,
        dimensions.height * 0.5,
        dimensions.width * 0.8
      );
      gradient.addColorStop(0, 'rgba(26, 42, 66, 0.3)');
      gradient.addColorStop(1, 'rgba(10, 22, 40, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, dimensions.width, dimensions.height);

      // Update and draw particles
      particlesRef.current.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = dimensions.width;
        if (particle.x > dimensions.width) particle.x = 0;
        if (particle.y < 0) particle.y = dimensions.height;
        if (particle.y > dimensions.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        
        if (particle.isGold) {
          ctx.fillStyle = `rgba(212, 168, 83, ${particle.opacity})`;
        } else {
          ctx.fillStyle = `rgba(78, 205, 196, ${particle.opacity * 0.6})`;
        }
        ctx.fill();

        // Draw connections to nearby particles
        particlesRef.current.slice(i + 1).forEach((other) => {
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            const opacity = (1 - distance / 120) * 0.15;
            ctx.strokeStyle = `rgba(78, 205, 196, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      // Draw flowing wave lines
      const time = Date.now() * 0.0005;
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.moveTo(0, dimensions.height * (0.4 + i * 0.15));
        
        for (let x = 0; x <= dimensions.width; x += 10) {
          const y = dimensions.height * (0.4 + i * 0.15) +
            Math.sin(x * 0.003 + time + i) * 30 +
            Math.sin(x * 0.001 + time * 0.5) * 50;
          ctx.lineTo(x, y);
        }
        
        const gradient2 = ctx.createLinearGradient(0, 0, dimensions.width, 0);
        gradient2.addColorStop(0, 'rgba(212, 168, 83, 0)');
        gradient2.addColorStop(0.3, `rgba(212, 168, 83, ${0.15 - i * 0.04})`);
        gradient2.addColorStop(0.7, `rgba(78, 205, 196, ${0.1 - i * 0.03})`);
        gradient2.addColorStop(1, 'rgba(78, 205, 196, 0)');
        
        ctx.strokeStyle = gradient2;
        ctx.lineWidth = 1.5 - i * 0.3;
        ctx.stroke();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [dimensions]);

  return (
    <canvas
      ref={canvasRef}
      width={dimensions.width}
      height={dimensions.height}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.8 }}
    />
  );
}

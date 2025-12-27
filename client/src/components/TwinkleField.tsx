import { useEffect, useRef, useState } from 'react';

/**
 * TWINKLE FIELD - Subtle Starfield with Comets
 * 
 * - Subtle, random starfield across the entire background
 * - Stars have very gentle, smooth opacity changes (no blinking)
 * - Occasional shooting star/comet streaks
 */

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  // Very slow, smooth fade parameters
  fadeSpeed: number;
  fadeOffset: number;
  // Color: mostly gold, occasionally soft teal
  isTeal: boolean;
}

interface Streak {
  x: number;
  y: number;
  length: number;
  angle: number;
  speed: number;
  opacity: number;
  life: number;
  maxLife: number;
}

export default function TwinkleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const starsRef = useRef<Star[]>([]);
  const streaksRef = useRef<Streak[]>([]);
  const animationRef = useRef<number>(0);
  const lastStreakTime = useRef<number>(0);

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

    // High DPI support
    const dpr = window.devicePixelRatio || 1;
    canvas.width = dimensions.width * dpr;
    canvas.height = dimensions.height * dpr;
    ctx.scale(dpr, dpr);

    // Initialize stars - spread across entire background
    const starCount = Math.floor((dimensions.width * dimensions.height) / 8000);
    starsRef.current = [];
    
    for (let i = 0; i < starCount; i++) {
      starsRef.current.push({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        size: 0.5 + Math.random() * 1.5,
        opacity: 0.1 + Math.random() * 0.4,
        // Smooth fade - each star on its own cycle
        fadeSpeed: 0.0004 + Math.random() * 0.0006,
        fadeOffset: Math.random() * Math.PI * 2,
        // ~15% of stars are soft teal, rest are gold
        isTeal: Math.random() < 0.15,
      });
    }

    // Initialize streaks
    streaksRef.current = [];

    const render = (time: number) => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      // Spawn comets occasionally
      if (time - lastStreakTime.current > 4000 + Math.random() * 6000) {
        if (streaksRef.current.length < 2) {
          // Start from random edge position
          const startFromLeft = Math.random() > 0.5;
          streaksRef.current.push({
            x: startFromLeft ? -50 : dimensions.width * (0.3 + Math.random() * 0.5),
            y: Math.random() * dimensions.height * 0.6,
            length: 60 + Math.random() * 80,
            angle: startFromLeft ? 0.2 + Math.random() * 0.3 : 0.5 + Math.random() * 0.4,
            speed: 3 + Math.random() * 4,
            opacity: 0.5 + Math.random() * 0.3,
            life: 0,
            maxLife: 80 + Math.random() * 60,
          });
          lastStreakTime.current = time;
        }
      }

      // Draw stars - realistic distant star appearance
      starsRef.current.forEach(star => {
        // Smooth sine wave for opacity variation
        const fade = (Math.sin(time * star.fadeSpeed + star.fadeOffset) + 1) / 2;
        // More dramatic fade range: 20% to 100% of base opacity
        const currentOpacity = star.opacity * (0.2 + fade * 0.8);

        // Color based on star type - mostly gold, some soft teal
        const glowColor = star.isTeal 
          ? { r: 168, g: 228, b: 215 }  // Soft teal #a8e4d7
          : { r: 201, g: 169, b: 98 };   // Gold

        // Outer soft glow
        const glowSize = star.size * 4;
        const glow = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, glowSize
        );
        glow.addColorStop(0, `rgba(255, 250, 250, ${currentOpacity * 0.8})`);
        glow.addColorStop(0.15, `rgba(${glowColor.r}, ${glowColor.g}, ${glowColor.b}, ${currentOpacity * 0.4})`);
        glow.addColorStop(0.4, `rgba(${glowColor.r}, ${glowColor.g}, ${glowColor.b}, ${currentOpacity * 0.15})`);
        glow.addColorStop(1, `rgba(${glowColor.r}, ${glowColor.g}, ${glowColor.b}, 0)`);
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, glowSize, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // Bright white-ish core (very small)
        const coreSize = Math.max(0.5, star.size * 0.4);
        ctx.beginPath();
        ctx.arc(star.x, star.y, coreSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity})`;
        ctx.fill();
      });

      // Draw and update comets
      streaksRef.current = streaksRef.current.filter(streak => {
        streak.life++;
        streak.x += Math.cos(streak.angle) * streak.speed;
        streak.y += Math.sin(streak.angle) * streak.speed;
        
        const lifeRatio = streak.life / streak.maxLife;
        // Smooth fade in and out
        const fadeIn = Math.min(1, streak.life / 15);
        const fadeOut = lifeRatio > 0.6 ? Math.max(0, 1 - (lifeRatio - 0.6) / 0.4) : 1;
        const currentOpacity = streak.opacity * fadeIn * fadeOut;
        
        if (currentOpacity > 0.01) {
          const tailX = streak.x - Math.cos(streak.angle) * streak.length;
          const tailY = streak.y - Math.sin(streak.angle) * streak.length;
          
          // Comet gradient - gold tail fading to bright head
          const gradient = ctx.createLinearGradient(tailX, tailY, streak.x, streak.y);
          gradient.addColorStop(0, 'rgba(201, 169, 98, 0)');
          gradient.addColorStop(0.6, `rgba(201, 169, 98, ${currentOpacity * 0.3})`);
          gradient.addColorStop(0.9, `rgba(220, 200, 150, ${currentOpacity * 0.7})`);
          gradient.addColorStop(1, `rgba(255, 255, 255, ${currentOpacity})`);
          
          ctx.beginPath();
          ctx.moveTo(tailX, tailY);
          ctx.lineTo(streak.x, streak.y);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 2;
          ctx.lineCap = 'round';
          ctx.stroke();
          
          // Small glow at the head
          const headGlow = ctx.createRadialGradient(
            streak.x, streak.y, 0,
            streak.x, streak.y, 8
          );
          headGlow.addColorStop(0, `rgba(255, 255, 255, ${currentOpacity * 0.6})`);
          headGlow.addColorStop(0.5, `rgba(201, 169, 98, ${currentOpacity * 0.2})`);
          headGlow.addColorStop(1, 'rgba(201, 169, 98, 0)');
          
          ctx.beginPath();
          ctx.arc(streak.x, streak.y, 8, 0, Math.PI * 2);
          ctx.fillStyle = headGlow;
          ctx.fill();
        }
        
        return streak.life < streak.maxLife;
      });

      animationRef.current = requestAnimationFrame(render);
    };

    animationRef.current = requestAnimationFrame(render);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [dimensions]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: dimensions.width,
        height: dimensions.height,
      }}
      className="absolute inset-0 pointer-events-none z-[1]"
    />
  );
}

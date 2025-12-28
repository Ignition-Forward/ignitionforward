import { useEffect, useRef, useState } from 'react';

/**
 * FORGE BACKDROP - Sophisticated builder/forge aesthetic
 *
 * Evokes the metaphor of forging solutions:
 * - Subtle ember particles that drift upward (like sparks from a forge)
 * - Faint connection lines between nodes (building/connecting ideas)
 * - Warm gold undertones mixed with the navy
 * - More deliberate, purposeful movement than random stars
 */

interface Ember {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  drift: number;
  life: number;
  maxLife: number;
}

interface Node {
  x: number;
  y: number;
  size: number;
  opacity: number;
  pulseOffset: number;
  connections: number[];
}

export default function ForgeBackdrop() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const embersRef = useRef<Ember[]>([]);
  const nodesRef = useRef<Node[]>([]);
  const animationRef = useRef<number>(0);
  const timeRef = useRef<number>(0);

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

    // Initialize nodes - sparse grid with slight randomization
    const nodeSpacing = 120;
    const cols = Math.ceil(dimensions.width / nodeSpacing) + 1;
    const rows = Math.ceil(dimensions.height / nodeSpacing) + 1;
    nodesRef.current = [];

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        // Only place ~40% of possible nodes for organic feel
        if (Math.random() > 0.4) continue;

        const baseX = col * nodeSpacing;
        const baseY = row * nodeSpacing;
        // Add randomization to positions
        const x = baseX + (Math.random() - 0.5) * nodeSpacing * 0.6;
        const y = baseY + (Math.random() - 0.5) * nodeSpacing * 0.6;

        nodesRef.current.push({
          x,
          y,
          size: 1 + Math.random() * 1.5,
          opacity: 0.15 + Math.random() * 0.25,
          pulseOffset: Math.random() * Math.PI * 2,
          connections: [],
        });
      }
    }

    // Create connections between nearby nodes
    const maxConnectionDist = nodeSpacing * 1.8;
    nodesRef.current.forEach((node, i) => {
      nodesRef.current.forEach((other, j) => {
        if (i >= j) return;
        const dist = Math.hypot(node.x - other.x, node.y - other.y);
        if (dist < maxConnectionDist && Math.random() > 0.5) {
          node.connections.push(j);
        }
      });
    });

    // Initialize embers
    const emberCount = Math.floor((dimensions.width * dimensions.height) / 25000);
    embersRef.current = [];
    for (let i = 0; i < emberCount; i++) {
      embersRef.current.push(createEmber(dimensions.width, dimensions.height, true));
    }

    const render = (time: number) => {
      const deltaTime = time - timeRef.current;
      timeRef.current = time;

      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      // Draw connection lines between nodes
      ctx.lineWidth = 0.5;
      nodesRef.current.forEach((node, i) => {
        node.connections.forEach(j => {
          const other = nodesRef.current[j];
          const dist = Math.hypot(node.x - other.x, node.y - other.y);
          const lineOpacity = Math.min(node.opacity, other.opacity) * 0.3 * (1 - dist / (nodeSpacing * 1.8));

          // Subtle pulse along the line
          const pulsePhase = (time * 0.0003 + (i + j) * 0.1) % 1;

          const gradient = ctx.createLinearGradient(node.x, node.y, other.x, other.y);
          gradient.addColorStop(0, `rgba(201, 169, 98, ${lineOpacity * 0.5})`);
          gradient.addColorStop(pulsePhase, `rgba(201, 169, 98, ${lineOpacity})`);
          gradient.addColorStop(Math.min(1, pulsePhase + 0.1), `rgba(201, 169, 98, ${lineOpacity * 0.5})`);
          gradient.addColorStop(1, `rgba(201, 169, 98, ${lineOpacity * 0.5})`);

          ctx.strokeStyle = gradient;
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(other.x, other.y);
          ctx.stroke();
        });
      });

      // Draw nodes
      nodesRef.current.forEach(node => {
        const pulse = Math.sin(time * 0.001 + node.pulseOffset) * 0.3 + 0.7;
        const currentOpacity = node.opacity * pulse;

        // Soft glow
        const glowSize = node.size * 6;
        const glow = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, glowSize
        );
        glow.addColorStop(0, `rgba(201, 169, 98, ${currentOpacity * 0.6})`);
        glow.addColorStop(0.3, `rgba(201, 169, 98, ${currentOpacity * 0.2})`);
        glow.addColorStop(1, 'rgba(201, 169, 98, 0)');

        ctx.beginPath();
        ctx.arc(node.x, node.y, glowSize, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 250, 240, ${currentOpacity})`;
        ctx.fill();
      });

      // Update and draw embers
      embersRef.current.forEach((ember, i) => {
        // Update position - drift upward with slight horizontal movement
        ember.y -= ember.speed * (deltaTime / 16);
        ember.x += Math.sin(time * 0.001 + ember.drift) * 0.3;
        ember.life -= deltaTime;

        // Respawn if off screen or life expired
        if (ember.y < -20 || ember.life <= 0) {
          embersRef.current[i] = createEmber(dimensions.width, dimensions.height, false);
          return;
        }

        // Calculate opacity based on life
        const lifeRatio = ember.life / ember.maxLife;
        const fadeIn = Math.min(1, (ember.maxLife - ember.life) / 500);
        const fadeOut = lifeRatio < 0.3 ? lifeRatio / 0.3 : 1;
        const currentOpacity = ember.opacity * fadeIn * fadeOut;

        // Draw ember with warm glow
        const glowSize = ember.size * 4;
        const glow = ctx.createRadialGradient(
          ember.x, ember.y, 0,
          ember.x, ember.y, glowSize
        );

        // Warm ember colors - gold to orange
        glow.addColorStop(0, `rgba(255, 220, 150, ${currentOpacity})`);
        glow.addColorStop(0.2, `rgba(255, 180, 100, ${currentOpacity * 0.6})`);
        glow.addColorStop(0.5, `rgba(201, 169, 98, ${currentOpacity * 0.3})`);
        glow.addColorStop(1, 'rgba(201, 169, 98, 0)');

        ctx.beginPath();
        ctx.arc(ember.x, ember.y, glowSize, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // Bright core
        ctx.beginPath();
        ctx.arc(ember.x, ember.y, ember.size * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 250, 230, ${currentOpacity})`;
        ctx.fill();
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

function createEmber(width: number, height: number, initial: boolean): Ember {
  return {
    // Spawn from bottom portion of screen, or random if initial
    x: Math.random() * width,
    y: initial ? Math.random() * height : height + 20,
    size: 1 + Math.random() * 2,
    opacity: 0.3 + Math.random() * 0.5,
    speed: 0.3 + Math.random() * 0.6,
    drift: Math.random() * Math.PI * 2,
    life: 3000 + Math.random() * 5000,
    maxLife: 3000 + Math.random() * 5000,
  };
}

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

/**
 * VANTA FOG BACKGROUND
 * Premium, flowing fog animation using vanta.js + three.js
 * Creates a sophisticated, atmospheric background perfect for AI/consulting
 */

// Vanta doesn't have TypeScript definitions, so we declare the module
declare global {
  interface Window {
    VANTA: {
      FOG: (config: VantaFogConfig) => VantaEffect;
    };
  }
}

interface VantaFogConfig {
  el: HTMLElement;
  THREE: typeof THREE;
  mouseControls?: boolean;
  touchControls?: boolean;
  gyroControls?: boolean;
  minHeight?: number;
  minWidth?: number;
  highlightColor?: number;
  midtoneColor?: number;
  lowlightColor?: number;
  baseColor?: number;
  blurFactor?: number;
  speed?: number;
  zoom?: number;
}

interface VantaEffect {
  destroy: () => void;
  setOptions: (options: Partial<VantaFogConfig>) => void;
}

interface VantaFogProps {
  className?: string;
}

export default function VantaFog({ className = '' }: VantaFogProps) {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<VantaEffect | null>(null);

  useEffect(() => {
    // Dynamically import vanta fog to avoid SSR issues
    const loadVanta = async () => {
      if (!vantaRef.current) return;
      
      // Import vanta fog
      const FOG = (await import('vanta/dist/vanta.fog.min')).default;
      
      if (vantaEffect) {
        vantaEffect.destroy();
      }

      const effect = FOG({
        el: vantaRef.current,
        THREE,
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        // Brand colors: Navy #1A2332, Gold #C9A962
        highlightColor: 0xc9a962, // Gold highlight
        midtoneColor: 0x243044,   // Navy light
        lowlightColor: 0x1a2332,  // Navy
        baseColor: 0x1a2332,      // Navy base
        blurFactor: 0.6,
        speed: 0.8,               // Slow, sophisticated movement
        zoom: 0.8,
      });

      setVantaEffect(effect);
    };

    loadVanta();

    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, [vantaEffect]);

  return (
    <div 
      ref={vantaRef} 
      className={`absolute inset-0 z-0 ${className}`}
      style={{ minHeight: '100%', minWidth: '100%' }}
    />
  );
}


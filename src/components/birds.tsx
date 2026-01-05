"use client";

import { useEffect, useRef } from "react";

interface BirdsProps {
  isActive: boolean;
}

declare global {
  interface Window {
    VANTA: any;
    THREE: any;
  }
}

export const Birds = ({ isActive }: BirdsProps) => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    if (!isActive) {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
      return;
    }

    // Load Three.js
    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => resolve();
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };

    const initVanta = async () => {
      try {
        // Load scripts
        await loadScript(
          "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
        );
        await loadScript(
          "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js"
        );

        // Initialize Vanta effect
        if (vantaRef.current && window.VANTA && !vantaEffect.current) {
          vantaEffect.current = window.VANTA.BIRDS({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            backgroundAlpha: 0.0, // Make background transparent
            color1: 0xff0000,
            color2: 0xd1ff,
            colorMode: "varianceGradient",
            birdSize: 1.0,
            wingSpan: 30.0,
            speedLimit: 4.0,
            quantity: 2.0,
          });
        }
      } catch (error) {
        console.error("Failed to load Vanta.js:", error);
      }
    };

    initVanta();

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, [isActive]);

  return (
    <>
      {isActive && (
        <div
          ref={vantaRef}
          className="fixed inset-0 pointer-events-none z-40"
          style={{ width: "100%", height: "100vh" }}
        />
      )}
    </>
  );
};

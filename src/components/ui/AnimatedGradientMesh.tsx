import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function AnimatedGradientMesh() {
  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-surface">
      {/* 1. Warm Peach Radial Gradient Layer 1 */}
      <motion.div
        animate={
          reducedMotion
            ? {}
            : {
                x: [0, 40, -30, 0],
                y: [0, -35, 25, 0],
                scale: [1, 1.12, 0.95, 1],
              }
        }
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        className="absolute -top-1/4 -left-1/4 w-[110%] h-[110%] rounded-full opacity-85 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 40% 40%, #F4C7A1 0%, rgba(244, 199, 161, 0) 65%)',
          filter: 'blur(45px)',
        }}
      />

      {/* 2. Soft Apricot Radial Gradient Layer 2 */}
      <motion.div
        animate={
          reducedMotion
            ? {}
            : {
                x: [0, -45, 30, 0],
                y: [0, 40, -25, 0],
                scale: [1, 1.08, 1.15, 1],
              }
        }
        transition={{
          duration: 22,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute -top-1/6 -right-1/4 w-[100%] h-[100%] rounded-full opacity-75 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 60% 40%, #E8B88A 0%, rgba(232, 184, 138, 0) 65%)',
          filter: 'blur(50px)',
        }}
      />

      {/* 3. Golden Amber Radial Gradient Layer 3 */}
      <motion.div
        animate={
          reducedMotion
            ? {}
            : {
                x: [0, 35, -35, 0],
                y: [0, -30, 30, 0],
                scale: [1, 1.1, 0.92, 1],
              }
        }
        transition={{
          duration: 26,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
          delay: 4,
        }}
        className="absolute -bottom-1/4 -left-1/4 w-[110%] h-[110%] rounded-full opacity-70 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 40% 60%, #D9A373 0%, rgba(217, 163, 115, 0) 65%)',
          filter: 'blur(55px)',
        }}
      />

      {/* 4. Warm Ochre Radial Gradient Layer 4 */}
      <motion.div
        animate={
          reducedMotion
            ? {}
            : {
                x: [0, -30, 40, 0],
                y: [0, -25, 35, 0],
                scale: [1, 1.15, 1.02, 1],
              }
        }
        transition={{
          duration: 24,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute -bottom-1/5 -right-1/5 w-[100%] h-[100%] rounded-full opacity-65 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 65% 75%, #C78E5A 0%, rgba(199, 142, 90, 0) 65%)',
          filter: 'blur(50px)',
        }}
      />

      {/* Subtle Inner Grain Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}

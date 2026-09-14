import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CUBIC_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Hero() {
  const [introExited, setIntroExited] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  useEffect(() => {
    const handleIntroExit = () => setIntroExited(true);
    window.addEventListener('intro-exit', handleIntroExit);

    const fallback = window.setTimeout(() => setIntroExited(true), 2500);

    return () => {
      window.removeEventListener('intro-exit', handleIntroExit);
      clearTimeout(fallback);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center px-8 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={introExited ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: 0.7, ease: CUBIC_EASE }}
        className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center"
      >
        {/* LEFT — 7 cols */}
        <div className="md:col-span-7">
          <p className="text-label">PORTFOLIO — 2025</p>

          <h1 className="text-serif text-[clamp(48px,6.5vw,96px)] leading-[0.92] tracking-[-0.02em] mt-6">
            MOHAMED<br />SALAUDDIN A
          </h1>

          <div className="flex items-center gap-4 mt-8 text-label">
            <span>3D WEB ENGINEER</span>
            <span className="w-8 h-px bg-fg/30" />
            <span>FULL STACK / AI ENGINEER</span>
          </div>

          <p className="text-label mt-3 opacity-70">
            AVAILABLE FOR OPPORTUNITIES · 2025
          </p>
        </div>

        {/* RIGHT — 5 cols, photo block flush to right */}
        <div className="md:col-span-5 flex justify-center md:justify-end">
          <div className="relative aspect-[4/5] w-full max-w-md rounded-2xl overflow-hidden border border-border">
            <img
              src="/portrait.jpg"
              alt="Mohamed Salauddin A"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: 'center 25%' }}
            />

            {/* Warm gradient overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'linear-gradient(180deg, rgba(168,137,106,0.05) 0%, rgba(26,23,20,0.55) 100%)',
              }}
            />

            {/* Overlay labels */}
            <p className="absolute top-4 left-4 text-label text-bg/80 z-10">
              EDITION № 01
            </p>
            <p className="absolute top-4 right-4 text-label text-bg/80 z-10">
              FIG. A
            </p>

            {/* Bottom caption centered */}
            <div className="absolute bottom-6 left-0 right-0 px-6 text-center z-10">
              <p className="text-serif italic text-[clamp(18px,1.8vw,24px)] text-bg">
                "Interfaces that move."
              </p>
              <p className="text-label mt-1 text-bg/70">
                FULL STACK · AI ENGINEER
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll cue — bottom-left */}
      <div className="absolute bottom-8 left-8 md:left-16 text-label">
        <a href="#about" className="hover:text-fg transition-colors">
          SCROLL ↓
        </a>
      </div>
    </section>
  );
}

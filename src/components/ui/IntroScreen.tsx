import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IntroScreen() {
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return true;
  });
  const [progress, setProgress] = useState(0);
  const [isFastExit, setIsFastExit] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    let start: number | null = null;
    let animationFrameId: number;
    let timeoutId: number;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const currentProgress = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(currentProgress);

      if (elapsed < duration) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setProgress(100);
        window.dispatchEvent(new CustomEvent('intro-exit'));
        timeoutId = window.setTimeout(() => {
          setIsVisible(false);
        }, 50);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(timeoutId);
    };
  }, [isVisible]);

  const handleDismiss = () => {
    if (!isVisible) return;
    window.dispatchEvent(new CustomEvent('intro-exit'));
    setIsFastExit(true);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: isFastExit ? 0.3 : 0.5, ease: 'easeOut' }}
          onClick={handleDismiss}
          className="fixed inset-0 z-[100] bg-bg flex items-center justify-center select-none cursor-pointer overflow-hidden"
          role="dialog"
          aria-label="Intro loading screen"
        >
          {/* Top-left: Diamond + SALAH_14 (identical to Navbar) */}
          <div className="absolute top-8 left-8 md:left-16 flex items-center gap-3">
            <span className="inline-block w-2.5 h-2.5 rotate-45 bg-accent" aria-hidden="true" />
            <span className="text-label">SALAH_14</span>
          </div>

          {/* Centered block + Counter */}
          <motion.div
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: isFastExit ? 0.3 : 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center justify-center text-center px-4"
          >
            <h1 className="font-display font-bold text-[clamp(56px,8vw,120px)] leading-[0.95] text-fg tracking-tight">
              SALAH_14
            </h1>
            <div className="w-24 h-px bg-fg/30 mt-4 mx-auto" />
            <p className="font-display text-[clamp(14px,1.2vw,18px)] tracking-[0.3em] uppercase text-muted mt-6">
              PORTFOLIO
            </p>

            {/* Below centered block: Counter 0% → 100% */}
            <div className="mt-16">
              <p className="font-display font-semibold text-[clamp(32px,4vw,56px)] leading-none text-fg tabular-nums">
                {progress}%
              </p>
            </div>
          </motion.div>

          {/* Bottom row: 3-column grid for true center alignment */}
          <div className="absolute bottom-8 left-8 right-8 md:left-16 md:right-16 grid grid-cols-3 items-center">
            {/* Left */}
            <div className="text-label text-left">
              THANJAVUR
            </div>

            {/* Center — truly centered, not affected by side widths */}
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-3">
                <span
                  className="inline-block w-3 h-3 bg-accent"
                  style={{ transform: 'rotate(45deg)' }}
                />
                <div className="flex gap-1">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <span
                      key={i}
                      className={`inline-block w-3 h-3 transition-colors duration-200 ${
                        i < Math.floor(progress / 10) ? 'bg-accent' : 'bg-border/40'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-label tabular-nums">{progress}%</span>
              </div>
            </div>

            {/* Right */}
            <div className="text-label text-right">
              SYSTEM INITIALIZATION
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

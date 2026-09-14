import { useEffect, useRef, useState } from 'react';

/**
 * Custom smooth-trailing cursor with quiet editorial hover expansion.
 * Lerp factor 0.15 provides deliberate, viscous motion matching the warm light editorial design.
 * Uses mix-blend-mode: difference to invert softly over both warm light and dark inverted sections.
 */
export default function Cursor() {
  const [isDisabled] = useState(() => {
    if (typeof window === 'undefined') return true;
    const isTouch = window.matchMedia('(hover: none)').matches;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return isTouch || prefersReduced;
  });

  const [isInteractive, setIsInteractive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: -100, y: -100 });
  const posRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    if (isDisabled) return;

    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Detect hover over clickable elements
      const target = e.target as HTMLElement | null;
      const isClickable = Boolean(
        target?.closest('a, button, [role="button"], input, textarea')
      );
      setIsInteractive(isClickable);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Animation frame loop using linear interpolation (lerp)
    // pos += (target - pos) * 0.15
    const render = () => {
      const targetX = mouseRef.current.x;
      const targetY = mouseRef.current.y;

      posRef.current.x += (targetX - posRef.current.x) * 0.15;
      posRef.current.y += (targetY - posRef.current.y) * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0) translate(-50%, -50%)`;
      }

      rafId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, [isDisabled, isVisible]);

  if (isDisabled) return null;

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className={`fixed top-0 left-0 pointer-events-none z-[100] rounded-full transition-[width,height,background-color,border-color,opacity] duration-300 ease-out will-change-transform ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${
        isInteractive
          ? 'w-14 h-14 bg-fg/8 border border-fg/30'
          : 'w-1.5 h-1.5 bg-fg border-transparent'
      }`}
      style={{
        mixBlendMode: 'difference',
      }}
    />
  );
}

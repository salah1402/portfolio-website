import { useEffect, useRef, useCallback } from 'react';

export interface MousePosition {
  x: number;
  y: number;
}

/**
 * Hook to track normalized mouse coordinates (-1 to 1 range) relative to the viewport center.
 * Center is (0, 0), top is +1, bottom is -1, left is -1, right is +1.
 * Uses a ref and rAF throttling to prevent React re-renders, exposing a getter for R3F useFrame.
 */
export function useMousePosition() {
  const mouseRef = useRef<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    let rafId: number | null = null;

    const handleMouseMove = (event: MouseEvent) => {
      if (rafId !== null) return;

      rafId = requestAnimationFrame(() => {
        // Normalize mouse coordinates to [-1, 1] with origin at center of viewport
        const x = (event.clientX / window.innerWidth) * 2 - 1;
        // In 3D coordinate space, +Y is upwards
        const y = -(event.clientY / window.innerHeight) * 2 + 1;

        mouseRef.current = { x, y };
        rafId = null;
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  const getPosition = useCallback((): MousePosition => mouseRef.current, []);

  return {
    get x() {
      return mouseRef.current.x;
    },
    get y() {
      return mouseRef.current.y;
    },
    mouseRef,
    getPosition,
  };
}

export default useMousePosition;

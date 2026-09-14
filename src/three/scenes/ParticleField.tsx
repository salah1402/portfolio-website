import { useMemo, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const PARTICLE_COUNT = 400;

function createParticlePositions(count: number): Float32Array {
  const coords = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    coords[i * 3] = (Math.random() - 0.5) * 16;
    coords[i * 3 + 1] = (Math.random() - 0.5) * 16;
    coords[i * 3 + 2] = (Math.random() - 0.5) * 8;
  }
  return coords;
}

interface ParticlesProps {
  reducedMotion: boolean;
}

function Particles({ reducedMotion }: ParticlesProps) {
  // Nested groups: outer for mouse parallax, inner for continuous drift
  const parallaxGroupRef = useRef<THREE.Group>(null);
  const driftGroupRef = useRef<THREE.Group>(null);
  const positions = useMemo(() => createParticlePositions(PARTICLE_COUNT), []);

  // Track normalized mouse coords [-1, 1] relative to viewport center using ref
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Disable mouse tracking entirely if prefers-reduced-motion is active
    if (reducedMotion) return;

    let rafId: number | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      if (rafId !== null) return;

      // Throttle with requestAnimationFrame
      rafId = requestAnimationFrame(() => {
        mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
        rafId = null;
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [reducedMotion]);

  useFrame((_, delta) => {
    // Keep the existing slow Y drift rotation running on inner group
    if (driftGroupRef.current) {
      driftGroupRef.current.rotation.y += delta * 0.008;
    }

    // Subtle mouse parallax on outer group (skipped if reduced motion)
    if (parallaxGroupRef.current && !reducedMotion) {
      const mouseX = mouseRef.current.x;
      const mouseY = mouseRef.current.y;

      /*
       * Parallax formula:
       * targetRotX = mouseY * 0.1
       * targetRotY = mouseX * 0.1
       * currentRotX += (targetRotX - currentRotX) * 0.05
       * currentRotY += (targetRotY - currentRotY) * 0.05
       */
      const targetRotX = mouseY * 0.1;
      const targetRotY = mouseX * 0.1;

      parallaxGroupRef.current.rotation.x +=
        (targetRotX - parallaxGroupRef.current.rotation.x) * 0.05;
      parallaxGroupRef.current.rotation.y +=
        (targetRotY - parallaxGroupRef.current.rotation.y) * 0.05;
    }
  });

  return (
    <group ref={parallaxGroupRef}>
      <group ref={driftGroupRef}>
        <points>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={PARTICLE_COUNT}
              array={positions}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial
            size={0.025}
            color="#A8896A"
            transparent
            opacity={0.35}
            sizeAttenuation
            depthWrite={false}
            blending={THREE.NormalBlending}
          />
        </points>
      </group>
    </group>
  );
}

export default function ParticleField() {
  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 5], fov: 60 }}
      gl={{ antialias: true, alpha: true, premultipliedAlpha: false }}
      style={{ background: 'transparent', position: 'absolute', inset: 0, pointerEvents: 'none' }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0);
      }}
    >
      <Particles reducedMotion={reducedMotion} />
    </Canvas>
  );
}

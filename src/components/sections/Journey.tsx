import { useRef, useState, useEffect, type ReactNode } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

interface TimelineItemProps {
  index: string;
  title: string;
  align: 'left' | 'right';
  body: ReactNode;
  dotRef?: React.Ref<HTMLDivElement>;
}

function TimelineItem({ index, title, align, body, dotRef }: TimelineItemProps) {
  return (
    <div className="relative grid grid-cols-12 items-start gap-4 md:gap-8">
      {/* Node dot on left on mobile, center line on desktop aligned with cap-height */}
      <div
        ref={dotRef}
        className="absolute left-3 sm:left-4 md:left-1/2 -translate-x-1/2 top-2 z-10"
      >
        <div className="w-3 h-3 rounded-full bg-bg border-2 border-accent" />
      </div>

      {/* Card — single column with left gutter on mobile, LEFT or RIGHT on desktop */}
      <div className={`col-span-12 md:col-span-6 pl-8 sm:pl-10 md:pl-0 ${align === 'right' ? 'md:col-start-7' : ''}`}>
        <div className="flex items-baseline gap-4 sm:gap-6">
          <span className="text-sm opacity-70 font-sans tracking-[0.18em]">{index}</span>
          <h3 className="font-display font-bold uppercase text-[clamp(28px,4.2vw,62px)] leading-[1.05] md:leading-[1] tracking-[-0.02em] hover:text-accent transition-colors">
            {title}
          </h3>
        </div>

        <div className="mt-3 text-base text-fg/90 leading-[1.6]">
          {body}
        </div>
      </div>
    </div>
  );
}

export default function Journey() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const firstDotRef = useRef<HTMLDivElement>(null);
  const lastDotRef = useRef<HTMLDivElement>(null);

  const [lineBounds, setLineBounds] = useState<{ top: number; height: number } | null>(null);

  useEffect(() => {
    const updateLine = () => {
      if (containerRef.current && firstDotRef.current && lastDotRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const firstRect = firstDotRef.current.getBoundingClientRect();
        const lastRect = lastDotRef.current.getBoundingClientRect();

        const top = firstRect.top - containerRect.top + firstRect.height / 2;
        const height = lastRect.top - firstRect.top;

        setLineBounds({ top, height });
      }
    };

    updateLine();

    const ro = new ResizeObserver(() => {
      updateLine();
    });

    if (containerRef.current) {
      ro.observe(containerRef.current);
    }

    if (typeof document !== 'undefined' && document.fonts) {
      document.fonts.ready.then(updateLine);
    }

    window.addEventListener('resize', updateLine);

    return () => {
      ro.disconnect();
      window.removeEventListener('resize', updateLine);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start center', 'end center'],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      id="journey"
      ref={sectionRef}
      className="relative pt-14 md:pt-16 pb-8 md:pb-12 px-6 sm:px-8 md:px-16"
    >
      <div ref={containerRef} className="max-w-5xl mx-auto relative">
        {/* Line spans strictly from first node (01) to last node (04) */}
        <div
          className={`absolute left-3 sm:left-4 md:left-1/2 -translate-x-1/2 w-px bg-border pointer-events-none overflow-hidden transition-opacity duration-200 ${
            lineBounds ? 'opacity-100' : 'opacity-0'
          }`}
          style={
            lineBounds
              ? { top: `${lineBounds.top}px`, height: `${lineBounds.height}px` }
              : undefined
          }
          aria-hidden="true"
        >
          <motion.div
            className="w-full bg-accent origin-top"
            style={{
              height: '100%',
              scaleY,
              transformOrigin: 'top',
            }}
          />
        </div>

        {/* Nodes + cards */}
        <div className="relative space-y-8">
          {/* Card 01 — LEFT */}
          <TimelineItem
            dotRef={firstDotRef}
            index="01"
            title="About me"
            align="left"
            body={
              <>
                <p>
                  Full stack developer focused on building AI-powered tools and
                  interfaces that move.
                </p>
                <p className="text-label mt-4 opacity-70">
                  THANJAVUR, TN · AVAILABLE 2026
                </p>
              </>
            }
          />

          {/* Card 02 — RIGHT */}
          <TimelineItem
            index="02"
            title="Education"
            align="right"
            body={
              <>
                <p className="text-serif text-xl">
                  Dhanalakshmi Srinivasan University
                </p>
                <p className="mt-2">
                  B.Tech — Electronics & Communication Engineering
                </p>
                <p className="text-label mt-2 opacity-70">
                  4-YEAR PROGRAM · 2ND YEAR
                </p>
              </>
            }
          />

          {/* Card 03 — LEFT */}
          <TimelineItem
            index="03"
            title="My Work"
            align="left"
            body={
              <>
                <p className="text-serif text-[clamp(28px,3vw,42px)] leading-[1.05] not-italic mt-2">
                  SAHARA
                </p>
                <p className="mt-3 text-fg/70 text-sm">
                  AI-powered legal metrology inspection system that extracts
                  product-label data, checks PCR 2011 compliance, and generates
                  inspection reports.
                </p>
                <p className="text-label mt-3 opacity-80">
                  REACT · VITE · FASTAPI · NEMOTRON
                </p>
                <a
                  href="https://saharalegalmetrology.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-label link-underline"
                >
                  View project →
                </a>
              </>
            }
          />

          {/* Card 04 — RIGHT */}
          <TimelineItem
            dotRef={lastDotRef}
            index="04"
            title="Currently Working"
            align="right"
            body={
              <ul className="space-y-2 text-fg/70 text-sm">
                <li>AI-powered web experiences</li>
                <li>Interactive interfaces</li>
                <li>Experimental projects</li>
                <li>3D web with R3F</li>
              </ul>
            }
          />
        </div>
      </div>
    </section>
  );
}

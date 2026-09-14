import Reveal from '@/components/ui/Reveal';

export default function Education() {
  return (
    <section id="learning" className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="w-full border-t border-border/60 mb-10" />

        <Reveal>
          {/* Heading */}
          <div className="mb-12">
            <h2 className="text-serif text-[clamp(36px,4.5vw,60px)] leading-[1.05] font-normal text-fg">
              Learning & doing
            </h2>
          </div>

          {/* Two-column: Education | Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {/* LEFT — Education */}
            <div>
              <p className="text-label">EDUCATION</p>
              <p className="text-label mt-2 opacity-50">01</p>

              <p className="text-serif text-[clamp(22px,2.2vw,30px)] leading-[1.25] mt-6 font-normal text-fg">
                Dhanalakshmi Srinivasan University
              </p>
              <p className="text-base mt-4 text-fg">
                B.Tech — Electronics & Communication Engineering
              </p>
              <p className="text-label mt-6">
                2024 — PRESENT · 2ND YEAR
              </p>
            </div>

            {/* RIGHT — Experience */}
            <div>
              <p className="text-label">EXPERIENCE</p>
              <p className="text-label mt-2 opacity-50">02</p>

              <p className="text-serif text-[clamp(22px,2.2vw,30px)] leading-[1.25] mt-6 font-normal text-fg">
                College Hackathons
              </p>

              <ul className="mt-4 space-y-2 text-base text-fg list-none p-0 m-0">
                <li>2025 · Participated</li>
                <li>2026 · Participated</li>
              </ul>

              <p className="text-serif italic text-[clamp(18px,1.6vw,22px)] mt-8 leading-[1.3] text-fg">
                Learning by building under pressure.
              </p>
            </div>
          </div>

          {/* Currently Building block */}
          <div className="border-t border-border/40 mt-16 pt-10">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-label">CURRENTLY BUILDING</p>
              <p className="text-label mt-2 opacity-50">03</p>

              <ul className="mt-6 space-y-2 text-base text-fg list-none p-0 m-0">
                <li>AI-powered web experiences</li>
                <li>Interactive interfaces</li>
                <li>Experimental projects</li>
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

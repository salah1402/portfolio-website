import Reveal from '@/components/ui/Reveal';

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="w-full border-t border-border/60 mb-10" />

        {/* Section header */}
        <div className="mb-12">
          <p className="text-label">01 — About</p>
          <h2 className="text-serif text-[clamp(36px,4.5vw,60px)] leading-[1.05] mt-3">
            Who I am
          </h2>
        </div>

        {/* Large italic intro */}
        <p className="text-serif italic text-[clamp(24px,3vw,42px)] leading-[1.2] max-w-3xl mb-20">
          Full stack developer focused on building AI-powered tools and interfaces that move.
        </p>

        {/* 3 sub-blocks */}
        <div>
          {/* Sub-block 1 */}
          <Reveal delay={0}>
            <div className="border-t border-border/40 py-10">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start">
                <div className="md:col-span-2">
                  <p className="font-display font-bold text-[clamp(48px,5vw,80px)] leading-[0.9] text-fg/60">
                    01
                  </p>
                </div>
                <div className="md:col-span-3">
                  <h3 className="font-display font-semibold text-[clamp(24px,2.4vw,36px)] leading-[1.1]">
                    Hackathons
                  </h3>
                </div>
                <div className="md:col-span-7">
                  <p className="text-base text-fg/80 leading-[1.6]">
                    I compete in college-level hackathons — two so far, building under pressure and learning fast.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Sub-block 2 */}
          <Reveal delay={0.1}>
            <div className="border-t border-border/40 py-10">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start">
                <div className="md:col-span-2">
                  <p className="font-display font-bold text-[clamp(48px,5vw,80px)] leading-[0.9] text-fg/60">
                    02
                  </p>
                </div>
                <div className="md:col-span-3">
                  <h3 className="font-display font-semibold text-[clamp(24px,2.4vw,36px)] leading-[1.1]">
                    AI & LLMs
                  </h3>
                </div>
                <div className="md:col-span-7">
                  <p className="text-base text-fg/80 leading-[1.6]">
                    Exploring language models, agents, and AI-powered tools. Building with NVIDIA Nemotron and FastAPI.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Sub-block 3 */}
          <Reveal delay={0.2}>
            <div className="border-t border-border/40 py-10">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start">
                <div className="md:col-span-2">
                  <p className="font-display font-bold text-[clamp(48px,5vw,80px)] leading-[0.9] text-fg/60">
                    03
                  </p>
                </div>
                <div className="md:col-span-3">
                  <h3 className="font-display font-semibold text-[clamp(24px,2.4vw,36px)] leading-[1.1]">
                    Education
                  </h3>
                </div>
                <div className="md:col-span-7">
                  <p className="text-base text-fg/80 leading-[1.6]">
                    B.Tech in Electronics & Communication Engineering at Dhanalakshmi Srinivasan University.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

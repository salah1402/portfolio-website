import { SITE } from '@/lib/constants';
import Reveal from '@/components/ui/Reveal';

export default function Work() {
  const { project } = SITE;

  return (
    <section id="work" className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="w-full border-t border-border/60 mb-10" />
        <Reveal>
          <div className="mb-8">
            <p className="text-label">02 — Work</p>
            <h2 className="text-serif text-[clamp(36px,4.5vw,60px)] leading-[1.05] font-normal text-fg mt-3">
              Selected work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
            <div className="md:col-span-12">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block w-full rounded-2xl border border-border bg-surface p-8 md:p-12 transition-all duration-500 hover:bg-bg/60 hover:border-fg/20 shadow-sm"
              >
                {/* Top row: Project name and arrow */}
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-serif text-[clamp(48px,5vw,72px)] font-normal text-fg">
                    {project.shortName}
                  </h3>
                  <span className="font-sans text-3xl md:text-4xl text-muted transition-transform duration-500 group-hover:translate-x-1.5">
                    →
                  </span>
                </div>

                {/* Description */}
                <p className="font-sans text-base md:text-lg text-muted max-w-2xl mt-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Plain text stack tags separated by middots */}
                <p className="text-label text-muted/90 mt-8">
                  {project.stack.join(' · ')}
                </p>

                {/* Bottom link */}
                <div className="mt-10">
                  <span className="link-underline font-sans text-sm text-fg">
                    View project →
                  </span>
                </div>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

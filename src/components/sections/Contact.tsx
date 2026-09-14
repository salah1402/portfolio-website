import { SITE } from '@/lib/constants';
import Reveal from '@/components/ui/Reveal';

export default function Contact() {
  const { contact } = SITE;

  return (
    <section id="contact" className="relative py-24 md:py-32 px-8 md:px-16 text-center">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <p className="text-label">05 — Contact</p>

          <h2 className="text-serif text-[clamp(36px,4vw,56px)] font-normal text-fg mt-4 mb-10">
            Let's build something.
          </h2>

          {/* Prominent Serif Email Link */}
          <div>
            <a
              href={`mailto:${contact.email}`}
              className="link-underline inline-block text-serif text-[clamp(24px,3vw,44px)] font-normal text-fg hover:text-muted transition-colors break-all"
            >
              {contact.email}
            </a>
          </div>

          {/* Quiet Sans Social Links */}
          <div className="flex justify-center items-center gap-4 mt-8 font-sans text-sm text-muted">
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline hover:text-fg transition-colors"
            >
              GitHub
            </a>
            <span className="text-muted/40">·</span>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline hover:text-fg transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

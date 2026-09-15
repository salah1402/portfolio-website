import Reveal from '@/components/ui/Reveal';

export default function Statement() {
  return (
    <section className="relative py-24 md:py-44 px-6 sm:px-8 md:px-16 bg-fg text-bg overflow-hidden text-center select-none">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <h2 className="text-serif text-[clamp(36px,6.5vw,96px)] leading-[1.02] font-normal text-bg">
            I turn ideas into
            <br />
            interfaces that <em>move</em>.
          </h2>
        </Reveal>
      </div>
    </section>
  );
}

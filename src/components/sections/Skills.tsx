const TOOLS = [
  { name: 'React / Next.js', level: 'ADVANCED' },
  { name: 'TypeScript', level: 'ADVANCED' },
  { name: 'Tailwind CSS', level: 'ADVANCED' },
  { name: 'Three.js / R3F', level: 'ADVANCED' },
  { name: 'Framer Motion', level: 'ADVANCED' },
  { name: 'FastAPI / Python', level: 'ADVANCED' },
  { name: 'Git / GitHub', level: 'ADVANCED' },
  { name: 'Vercel / Render', level: 'ADVANCED' },
];

const LANGUAGES = [
  { name: 'TypeScript', level: 'PROFICIENT' },
  { name: 'JavaScript (ES6+)', level: 'PROFICIENT' },
  { name: 'Python', level: 'PROFICIENT' },
  { name: 'SQL', level: 'PROFICIENT' },
  { name: 'HTML5 / CSS3', level: 'PROFICIENT' },
];

const EXPLORING = [
  'Local LLMs & Quantization',
  'Agentic Multi-Step Systems',
  'Custom GLSL Shaders',
  'Real-Time Generative Canvas',
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 md:py-28 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="w-full border-t border-border/60 mb-10" />

        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-12">
          <div className="md:col-span-8">
            <p className="text-label">03 — Stack</p>
            <h2 className="text-serif text-[clamp(36px,4.5vw,60px)] leading-[1.05] mt-3">
              Tools & Languages
            </h2>
          </div>
          <div className="md:col-span-4 md:text-right">
            <p className="text-label md:mt-14">TECHNICAL PROFICIENCY</p>
          </div>
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Tools & Frameworks */}
          <div>
            <p className="text-label mb-6">TOOLS & FRAMEWORKS</p>
            <ul className="space-y-4">
              {TOOLS.map((item) => (
                <li
                  key={item.name}
                  className="flex items-center justify-between border-b border-border/40 pb-3"
                >
                  <span className="text-base">{item.name}</span>
                  <span className="text-label opacity-60">{item.level}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Languages & Core */}
          <div>
            <p className="text-label mb-6">LANGUAGES & CORE</p>
            <ul className="space-y-4">
              {LANGUAGES.map((item) => (
                <li
                  key={item.name}
                  className="flex items-center justify-between border-b border-border/40 pb-3"
                >
                  <span className="text-base">{item.name}</span>
                  <span className="text-label opacity-60">{item.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Currently Exploring */}
        <div className="mt-20 pt-10 border-t border-border/40">
          <p className="text-label">CURRENTLY EXPLORING</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {EXPLORING.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 border border-border rounded-full text-sm text-fg/80"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

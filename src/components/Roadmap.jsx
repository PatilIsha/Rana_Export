import Reveal from "./Reveal";
import SectionTag from "./SectionTag";

const PHASES = [
  { year: "2026", title: "Foundation", text: "Expand procurement network across North & Northeast India (including Nagaland, Assam). Establish 5+ centres. Launch initial export shipments." },
  { year: "2027", title: "Acceleration", text: "Increase export volumes by 150%. Launch technology-enabled livestock tracking. Open regional logistics hubs." },
  { year: "2028", title: "Expansion", text: "Build long-term international buyer network. Expand livestock categories. Achieve ₹12 Crore+ revenue." },
  { year: "2029", title: "Integration", text: "Develop integrated export infrastructure. Secure 10+ long-term supply agreements. Explore new geographies." },
  { year: "2030", title: "Leadership", text: "Become India’s leading livestock export and logistics company. Capture significant share of the ₹42,000 Cr+ industry." },
];

export default function Roadmap() {
  return (
    <section className="relative bg-forest-950 py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionTag light>Roadmap</SectionTag>
          <h2 className="mt-5 font-display text-3xl font-semibold text-cream-50 sm:text-4xl">
            Five-year vision: 2026&ndash;2030
          </h2>
        </Reveal>

        <div className="relative mt-20">
          <div className="absolute left-7 top-2 bottom-2 w-px bg-gradient-to-b from-gold-400/70 via-gold-400/25 to-transparent" />

          <div className="space-y-10">
            {PHASES.map((phase, i) => (
              <Reveal key={phase.year} direction="up" delay={i * 0.08}>
                <div className="grid grid-cols-[56px_1fr] gap-6">
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold-400 bg-forest-950 font-display text-sm font-bold text-gold-400 shadow-lg shadow-forest-950/50">
                    {i + 1}
                  </div>
                  <div className="rounded-2xl border border-cream-50/10 bg-forest-900/60 p-6 transition-colors hover:border-gold-400/40">
                    <div className="flex flex-wrap items-baseline gap-3">
                      <span className="font-display text-2xl font-bold text-gold-400">{phase.year}</span>
                      <span className="font-display text-lg font-semibold text-cream-50">{phase.title}</span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-cream-100/65">{phase.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

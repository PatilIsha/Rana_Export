import Reveal from "./Reveal";
import SectionTag from "./SectionTag";

const FOUNDERS = [
  {
    initials: "RB",
    name: "Rahul Bisht",
    role: "Co-Founder & Director",
    text: "Responsible for business strategy, procurement operations, logistics management, and business development. Rahul brings deep understanding of livestock supply chains and direct farmer networks across North India.",
  },
  {
    initials: "MD",
    name: "Meera Devi",
    role: "Co-Founder",
    text: "Responsible for administration, regulatory compliance, export documentation, financial coordination, and operational support. Meera ensures the company maintains the highest standards of APEDA compliance.",
  },
];

export default function Leadership() {
  return (
    <section className="relative bg-cream-50 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionTag>Leadership</SectionTag>
          <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-forest-950 sm:text-4xl">
            Founders committed to building a world-class enterprise
          </h2>
          <p className="mt-5 text-base leading-relaxed text-forest-900/70">
            The founding team combines hands-on livestock supply chain expertise with operational discipline and
            regulatory acumen&mdash;a rare combination in this highly regulated, logistics-intensive industry.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {FOUNDERS.map((founder, i) => (
            <Reveal key={founder.name} delay={i * 0.12}>
              <div className="flex h-full flex-col items-start gap-5 rounded-3xl border border-forest-900/10 bg-white p-8 shadow-sm sm:flex-row">
                <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-forest-800 to-forest-950 font-display text-2xl font-bold text-gold-400 shadow-md">
                  {founder.initials}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-forest-950">{founder.name}</h3>
                  <p className="text-sm font-semibold text-gold-600">{founder.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-forest-900/65">{founder.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

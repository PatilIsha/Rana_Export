import Reveal from "./Reveal";
import SectionTag from "./SectionTag";

const FOUNDERS = [
  {
    photo: "/team/rahul-bisht.png",
    name: "Rahul Bisht",
    role: "Director",
    text: "Responsible for business strategy, procurement operations, logistics management, and business development. Rahul brings deep understanding of livestock supply chains and direct farmer networks across North &amp; Northeast India.",
  },
  {
    photo: "/team/meera-devi.png",
    name: "Meera Devi",
    role: "Director",
    text: "Responsible for administration, regulatory compliance, export documentation, financial coordination, and operational support. Meera ensures the company maintains the highest standards of APEDA compliance.",
  },
  {
    initials: "T",
    name: "Tarun",
    role: "Chief Executive Officer",
    text: "Responsible for overall company vision, strategic direction, and growth execution. Tarun leads Rana Exports & Logistics' mission to build a scalable, compliant, and globally competitive export enterprise.",
  },
];

export default function Leadership() {
  return (
    <section className="relative bg-cream-50 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionTag>Leadership</SectionTag>
          <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-forest-950 sm:text-4xl">
            Leaders committed to building a world-class enterprise
          </h2>
          <p className="mt-5 text-base leading-relaxed text-forest-900/70">
            The leadership team combines hands-on livestock supply chain expertise with operational discipline and
            regulatory acumen&mdash;a rare combination in this highly regulated, logistics-intensive industry.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {FOUNDERS.map((founder, i) => (
            <Reveal key={founder.name} delay={i * 0.12}>
              <div className="flex h-full flex-col items-start gap-5 rounded-3xl border border-forest-900/10 bg-white p-8 shadow-sm">
                {founder.photo ? (
                  <img
                    src={founder.photo}
                    alt={founder.name}
                    className="h-20 w-20 shrink-0 rounded-2xl object-cover shadow-md"
                  />
                ) : (
                  <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-forest-800 to-forest-950 font-display text-2xl font-bold text-gold-400 shadow-md">
                    {founder.initials}
                  </span>
                )}
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

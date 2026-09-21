import { FaLink, FaUsers, FaGavel, FaHeart, FaGlobeAsia, FaExpandArrowsAlt } from "react-icons/fa";
import Reveal from "./Reveal";
import SectionTag from "./SectionTag";

const ITEMS = [
  { icon: FaLink, title: "End-to-End Control", text: "Integrated procurement and logistics model eliminates dependency on third parties at every critical stage." },
  { icon: FaUsers, title: "Strong Farmer Network", text: "Direct sourcing relationships across North & Northeast India, including Nagaland and Assam, provide pricing power and supply reliability." },
  { icon: FaGavel, title: "Regulatory Expertise", text: "Deep APEDA compliance capability and export documentation experience—a rare differentiator." },
  { icon: FaHeart, title: "Animal Welfare Focus", text: "Biosecurity protocols and climate-controlled transport significantly reduce mortality below industry average." },
  { icon: FaGlobeAsia, title: "Global Market Strategy", text: "Targeted outreach to Southeast Asia, Middle East, and Africa—markets with high unmet demand." },
  { icon: FaExpandArrowsAlt, title: "Scalable Network", text: "Multi-state procurement infrastructure designed for rapid, capital-efficient national scale-up." },
];

export default function WhyUs() {
  return (
    <section className="relative bg-cream-100 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionTag>Competitive Advantage</SectionTag>
          <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-forest-950 sm:text-4xl">
            Why Rana Exports &amp; Logistics stands apart
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="group relative h-full overflow-hidden rounded-2xl bg-forest-950 p-8 transition-transform duration-300 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-forest-900 to-forest-950 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gold-400/10 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:bg-gold-400/20" />
                <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-gold-400/30 text-gold-400">
                  <item.icon size={22} />
                </div>
                <h3 className="relative font-display text-lg font-semibold text-cream-50">{item.title}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-cream-100/65">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

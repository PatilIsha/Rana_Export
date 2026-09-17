import { Link } from "react-router-dom";
import { FaLink, FaHeart, FaGavel, FaArrowRight } from "react-icons/fa";
import Reveal from "./Reveal";
import SectionTag from "./SectionTag";

const ITEMS = [
  {
    icon: FaLink,
    title: "End-to-End Control",
    text: "One integrated operator across procurement, health checks, transport, and export documentation.",
  },
  {
    icon: FaHeart,
    title: "Animal Welfare First",
    text: "Biosecurity protocols and climate-controlled transport keep mortality well below industry norms.",
  },
  {
    icon: FaGavel,
    title: "Regulatory Expertise",
    text: "Deep APEDA compliance capability that most traditional traders simply don’t have.",
  },
];

export default function WhyChooseTeaser() {
  return (
    <section className="relative bg-cream-100 py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-xl text-center">
          <SectionTag>Why Rana Exports</SectionTag>
          <h2 className="mt-5 font-display text-3xl font-semibold text-forest-950 sm:text-4xl">
            Trusted for the details that matter
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <div className="group h-full rounded-2xl border border-forest-900/10 bg-white p-8 shadow-sm transition-all hover:-translate-y-1.5 hover:shadow-xl hover:shadow-forest-900/10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-forest-950 text-gold-400 transition-transform group-hover:scale-110">
                  <item.icon size={22} />
                </div>
                <h3 className="font-display text-lg font-semibold text-forest-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-forest-900/65">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-12 text-center">
          <Link
            to="/why-us"
            className="group inline-flex items-center gap-2 rounded-full bg-forest-950 px-6 py-3 text-sm font-bold text-cream-50 transition-transform hover:scale-105"
          >
            Explore All Advantages
            <FaArrowRight className="transition-transform group-hover:translate-x-1" size={13} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

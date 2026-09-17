import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Reveal from "./Reveal";
import Counter from "./Counter";
import SmartImage from "./SmartImage";
import { IMAGES } from "../data/images";

const STATS = [
  { value: 20, suffix: "%", label: "Govt. Target Growth in FY26" },
  { value: 1.2, decimals: 1, prefix: "₹", suffix: "Tn", label: "Cold Chain & Meat Logistics Market" },
  { value: 9, suffix: "", label: "FMD-Free States Unlocked" },
  { value: 3, suffix: "+", label: "Export Regions Targeted" },
];

export default function StatsBand() {
  return (
    <section className="relative overflow-hidden bg-forest-950 py-24 lg:py-28">
      <div className="absolute inset-0 opacity-30">
        <SmartImage image={IMAGES.tradeRoutes} alt="" className="h-full w-full" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-forest-950/95 via-forest-950/90 to-forest-950/95" />

      <div className="relative mx-auto max-w-6xl px-6 text-center lg:px-10">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
            Market Momentum
          </span>
          <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-semibold text-cream-50 sm:text-4xl">
            A market entering its fastest growth phase yet
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1}>
              <div className="font-display text-3xl font-bold text-gold-400 sm:text-4xl">
                <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} decimals={stat.decimals || 0} />
              </div>
              <div className="mt-2 text-xs font-medium uppercase tracking-wide text-cream-100/65 sm:text-sm">{stat.label}</div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-14">
          <Link
            to="/about"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 px-6 py-3 text-sm font-bold text-forest-950 shadow-lg shadow-gold-500/30 transition-transform hover:scale-105"
          >
            See the Full Opportunity
            <FaArrowRight className="transition-transform group-hover:translate-x-1" size={13} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

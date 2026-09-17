import { FaCheckCircle } from "react-icons/fa";
import Reveal from "./Reveal";
import SectionTag from "./SectionTag";
import Counter from "./Counter";
import SmartImage from "./SmartImage";
import { IMAGES } from "../data/images";

const MARKETS = [
  "Southeast Asia importers",
  "Middle East buyers",
  "African markets",
  "Meat processing companies",
  "Institutional & wholesale buyers",
];

export default function Market() {
  return (
    <section className="relative overflow-hidden bg-cream-50 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <Reveal direction="right">
          <SectionTag>Market Opportunity</SectionTag>
          <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-forest-950 sm:text-4xl lg:text-[2.5rem]">
            India&rsquo;s livestock export market&mdash;a rapidly expanding opportunity
          </h2>
          <p className="mt-5 text-base leading-relaxed text-forest-900/70">
            India&rsquo;s animal products export sector reached &#8377;43,000 Crore (USD 5.11B) in FY25, registering
            12.56% YoY growth. The Government of India targets 20% growth in FY26. Nine states are now
            designated FMD-free zones, unlocking premium export corridors.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-6">
            <div className="rounded-2xl border border-forest-900/10 bg-white p-6 shadow-sm">
              <div className="font-display text-3xl font-bold text-forest-950">
                <Counter value={43} prefix="₹" suffix="K Cr" />
              </div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-forest-900/60">FY25 Exports</div>
            </div>
            <div className="rounded-2xl border border-forest-900/10 bg-white p-6 shadow-sm">
              <div className="font-display text-3xl font-bold text-forest-950">
                <Counter value={12.56} decimals={2} suffix="%" />
              </div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-forest-900/60">YoY Growth</div>
            </div>
          </div>

          <p className="mt-6 rounded-xl border-l-4 border-gold-500 bg-gold-500/5 p-4 text-sm leading-relaxed text-forest-900/75">
            India produced 315,000 tonnes of pig meat in 2023&mdash;yet exports remain a fraction of global peers.
            Organised procurement and efficient logistics can capture significant untapped share.
          </p>
        </Reveal>

        <Reveal direction="left" className="space-y-6">
          <div className="relative overflow-hidden rounded-3xl">
            <SmartImage image={IMAGES.tradeRoutes} alt="Global trade and shipping routes" className="aspect-[5/3]" />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-xl border border-cream-50/15 bg-forest-950/70 px-5 py-4 backdrop-blur-md">
              <span className="text-sm font-semibold text-cream-50">Cold chain &amp; meat logistics market</span>
              <span className="font-display text-xl font-bold text-gold-400">&#8377;1.2 Tn</span>
            </div>
          </div>

          <div className="rounded-2xl border border-forest-900/10 bg-white p-7 shadow-sm">
            <h3 className="font-display text-base font-semibold text-forest-950">Target Markets</h3>
            <ul className="mt-4 grid gap-3">
              {MARKETS.map((market) => (
                <li key={market} className="flex items-center gap-3 text-sm text-forest-900/75">
                  <FaCheckCircle className="shrink-0 text-gold-500" /> {market}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import Reveal from "./Reveal";
import SectionTag from "./SectionTag";
import Counter from "./Counter";
import SmartImage from "./SmartImage";
import { IMAGES } from "../data/images";

const STATS = [
  { value: 20, suffix: "%", label: "Farmer Income Boost", text: "Direct procurement eliminates exploitative middlemen, passing premium value directly to farming families." },
  { value: 20, suffix: "", label: "Direct Jobs per ₹1 Cr", text: "Every crore invested in livestock exports generates direct employment in rural communities." },
  { value: 50, suffix: "+", label: "Farming Families Supported", text: "Per crore invested, over 50 farming families gain access to organised, transparent market linkages." },
];

export default function SocialImpact() {
  return (
    <section className="relative overflow-hidden bg-cream-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal direction="right" className="relative overflow-hidden rounded-3xl">
            <SmartImage image={IMAGES.farmerPortrait} alt="Indian farmer benefitting from direct procurement" className="aspect-[4/5]" />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent" />
          </Reveal>

          <div>
            <Reveal>
              <SectionTag>Social Impact</SectionTag>
              <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-forest-950 sm:text-4xl">
                Creating measurable economic &amp; social value
              </h2>
              <p className="mt-5 text-base leading-relaxed text-forest-900/70">
                Rana Exports &amp; Logistics is not merely a commercial enterprise&mdash;it is a catalyst for rural
                economic development, farmer empowerment, and the formalisation of India&rsquo;s livestock trade
                ecosystem.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {STATS.map((stat, i) => (
                <Reveal key={stat.label} delay={i * 0.1} className="rounded-2xl border border-forest-900/10 bg-white p-6 shadow-sm">
                  <div className="font-display text-3xl font-bold text-gold-600">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="mt-2 text-sm font-semibold text-forest-950">{stat.label}</div>
                  <p className="mt-2 text-xs leading-relaxed text-forest-900/60">{stat.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

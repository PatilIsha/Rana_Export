import { FaExclamationTriangle, FaHeartbeat, FaFileContract, FaChartLine } from "react-icons/fa";
import Reveal from "./Reveal";
import SectionTag from "./SectionTag";
import SmartImage from "./SmartImage";
import { IMAGES } from "../data/images";

const CHALLENGES = [
  {
    icon: FaExclamationTriangle,
    title: "Unorganised Procurement",
    text: "Fragmented sourcing networks drive price exploitation, leaving farmers with minimal margins and buyers with inconsistent supply.",
  },
  {
    icon: FaHeartbeat,
    title: "High Transit Mortality",
    text: "Industry-average mortality rates of 5–10% during transportation result in significant economic losses and welfare concerns.",
  },
  {
    icon: FaFileContract,
    title: "Export Compliance Gaps",
    text: "Limited APEDA-standard documentation and certification infrastructure restricts access to premium international markets.",
  },
  {
    icon: FaChartLine,
    title: "Underserved Export Demand",
    text: "India’s pork meat exports rebounded to 222 tonnes valued at ₹6.8 Cr (USD 816K) in 2024—yet the market lacks organised supply chain players.",
  },
];

export default function Challenge() {
  return (
    <section className="relative bg-forest-950 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        <Reveal direction="right">
          <div className="lg:sticky lg:top-32">
            <SectionTag light>The Challenge</SectionTag>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-cream-50 sm:text-4xl lg:text-[2.6rem]">
              A fragmented industry holding back India&rsquo;s export potential
            </h2>
            <p className="mt-5 text-base leading-relaxed text-cream-100/75">
              India&rsquo;s livestock export industry is burdened by deep-rooted structural inefficiencies.
              Farmers lose income to exploitative middlemen, animals suffer high mortality rates during
              transit, and international buyers struggle to find compliant, traceable supply chain partners.
            </p>
            <div className="mt-8 overflow-hidden rounded-3xl border border-cream-50/10">
              <SmartImage image={IMAGES.ruralRoad} alt="Rural road connecting farms across Punjab, India" className="aspect-[4/3]" />
            </div>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {CHALLENGES.map((item, i) => (
            <Reveal key={item.title} direction="up" delay={i * 0.1}>
              <div className="group h-full rounded-2xl border border-cream-50/10 bg-forest-900/60 p-7 transition-colors hover:border-gold-400/40 hover:bg-forest-900">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gold-400/10 text-gold-400 transition-colors group-hover:bg-gold-400 group-hover:text-forest-950">
                  <item.icon size={20} />
                </div>
                <h3 className="font-display text-lg font-semibold text-cream-50">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream-100/70">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

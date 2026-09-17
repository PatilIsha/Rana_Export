import { FaArrowRight } from "react-icons/fa";
import Reveal from "./Reveal";
import SectionTag from "./SectionTag";
import SmartImage from "./SmartImage";
import { IMAGES } from "../data/images";

const DOMESTIC = [
  { title: "Direct farmer partnerships", text: "Expanding procurement network across North India" },
  { title: "5+ procurement centres", text: "Regional hubs for aggregation and quality control" },
  { title: "Strategic logistics partnerships", text: "Fleet expansion and cold chain integration" },
  { title: "Long-term supply agreements", text: "Guaranteed off-take securing revenue predictability" },
];

const INTERNATIONAL = [
  { title: "Export buyer acquisition", text: "Active outreach to importers in Southeast Asia and Middle East" },
  { title: "Trade fair participation", text: "International agri and livestock trade exhibitions" },
  { title: "Digital B2B marketing", text: "Online presence and targeted lead generation for global buyers" },
  { title: "Brand development", text: "Establishing Rana Exports as a quality-assured livestock export brand" },
];

function Column({ heading, items, direction }) {
  return (
    <Reveal direction={direction} className="rounded-3xl border border-forest-900/10 bg-white p-8 shadow-sm sm:p-10">
      <h3 className="font-display text-xl font-semibold text-forest-950">{heading}</h3>
      <div className="mt-7 space-y-6">
        {items.map((item) => (
          <div key={item.title} className="flex gap-4">
            <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold-500/15 text-gold-600">
              <FaArrowRight size={11} />
            </span>
            <div>
              <p className="font-semibold text-forest-950">{item.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-forest-900/65">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </Reveal>
  );
}

export default function GrowthStrategy() {
  return (
    <section className="relative overflow-hidden bg-cream-50 py-24 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-72 overflow-hidden opacity-15">
        <SmartImage image={IMAGES.tractorAerial} alt="" className="h-full w-full" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionTag>Growth Strategy</SectionTag>
          <h2 className="mt-5 font-display text-3xl font-semibold text-forest-950 sm:text-4xl">
            Marketing &amp; expansion strategy
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <Column heading="Domestic Foundation" items={DOMESTIC} direction="right" />
          <Column heading="International Expansion" items={INTERNATIONAL} direction="left" />
        </div>
      </div>
    </section>
  );
}

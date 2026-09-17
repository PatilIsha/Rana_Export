import { FaHome, FaStethoscope, FaTruckMoving, FaFileSignature } from "react-icons/fa";
import Reveal from "./Reveal";
import SectionTag from "./SectionTag";
import SmartImage from "./SmartImage";
import { IMAGES } from "../data/images";

const SOLUTIONS = [
  {
    icon: FaHome,
    title: "Direct Farm Procurement",
    text: "Registered farm partnerships eliminate middlemen, increasing farmer income by 15–20% while securing quality stock at competitive prices.",
  },
  {
    icon: FaStethoscope,
    title: "Veterinary Health Inspection",
    text: "Disease-free certification and breed-grade selection ensure every animal meets domestic and international export standards before dispatch.",
  },
  {
    icon: FaTruckMoving,
    title: "Climate-Controlled Logistics",
    text: "Purpose-built live-animal vehicles with biosecurity protocols dramatically reduce transit mortality and ensure animal welfare compliance.",
  },
  {
    icon: FaFileSignature,
    title: "Export Documentation",
    text: "Full APEDA compliance management, customs handling, and digital shipment tracking provide buyers with complete supply chain visibility.",
  },
];

export default function Solution() {
  return (
    <section className="relative overflow-hidden bg-cream-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionTag>Our Solution</SectionTag>
          <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-forest-950 sm:text-4xl lg:text-[2.6rem]">
            An integrated, end-to-end livestock export ecosystem
          </h2>
          <p className="mt-5 text-base leading-relaxed text-forest-900/70">
            We eliminate every inefficiency in the traditional livestock supply chain&mdash;from farm gate to
            international buyer&mdash;through a single, fully integrated operating model that guarantees quality,
            compliance, and traceability.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <Reveal direction="right" className="grid gap-6 sm:grid-cols-2">
            {SOLUTIONS.map((item, i) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-forest-900/10 bg-white p-7 shadow-sm transition-all hover:-translate-y-1.5 hover:shadow-xl hover:shadow-forest-900/10"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-gold-400/10 transition-transform duration-500 group-hover:scale-150" />
                <div className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-forest-900 text-gold-400">
                  <item.icon size={20} />
                </div>
                <h3 className="relative font-display text-base font-semibold text-forest-950">{item.title}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-forest-900/65">{item.text}</p>
              </div>
            ))}
          </Reveal>

          <Reveal direction="left" className="relative min-h-[420px] overflow-hidden rounded-3xl">
            <SmartImage image={IMAGES.wheatFieldSunset} alt="Golden wheat field at sunset, representing premium quality produce" className="h-full" />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950/85 via-forest-950/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="rounded-2xl border border-cream-50/15 bg-forest-950/70 p-6 backdrop-blur-md">
                <p className="font-display text-lg font-semibold text-cream-50">
                  &ldquo;15&ndash;20% better margins than traditional traders.&rdquo;
                </p>
                <p className="mt-2 text-sm text-cream-100/70">
                  By aggregating procurement and managing logistics in-house end-to-end.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

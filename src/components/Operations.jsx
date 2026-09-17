import { FaSeedling, FaStethoscope, FaMedal, FaShieldAlt, FaSnowflake } from "react-icons/fa";
import Reveal from "./Reveal";
import SectionTag from "./SectionTag";

const STEPS = [
  { icon: FaSeedling, title: "Direct Procurement", text: "Sourcing animals from certified farms" },
  { icon: FaStethoscope, title: "Health Inspection", text: "Veterinary checks and clearance" },
  { icon: FaMedal, title: "Quality Assessment", text: "Breed and condition verification" },
  { icon: FaShieldAlt, title: "Quarantine & Compliance", text: "Regulatory isolation and protocols" },
  { icon: FaSnowflake, title: "Climate Transport", text: "Temperature-controlled movement" },
];

export default function Operations() {
  return (
    <section className="relative bg-forest-950 py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:radial-gradient(circle_at_1px_1px,#e2c27a_1px,transparent_0)] [background-size:28px_28px]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionTag light>Operations</SectionTag>
          <h2 className="mt-5 font-display text-3xl font-semibold text-cream-50 sm:text-4xl">
            Our end-to-end operations model
          </h2>
          <p className="mt-5 text-base leading-relaxed text-cream-100/70">
            Every stage is governed by regulatory standards, welfare protocols, and quality benchmarks&mdash;ensuring
            traceability at every node.
          </p>
        </Reveal>

        <div className="relative mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent lg:block" />
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.12} className="relative flex flex-col items-center text-center">
              <div className="relative z-10 flex h-[72px] w-[72px] items-center justify-center rounded-full border-2 border-gold-400/50 bg-forest-900 text-gold-400 shadow-lg shadow-forest-950/50">
                <step.icon size={26} />
                <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-gold-500 text-[11px] font-bold text-forest-950">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-5 font-display text-base font-semibold text-cream-50">{step.title}</h3>
              <p className="mt-2 max-w-[180px] text-sm leading-relaxed text-cream-100/65">{step.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

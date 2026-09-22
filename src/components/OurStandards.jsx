import { FaFileContract, FaShieldAlt, FaStethoscope, FaLeaf, FaClipboardCheck, FaRoute } from "react-icons/fa";
import Reveal from "./Reveal";
import SectionTag from "./SectionTag";

const STANDARDS = [
  {
    icon: FaFileContract,
    title: "APEDA Compliance",
    text: "Full adherence to APEDA export documentation and certification standards for every shipment.",
  },
  {
    icon: FaStethoscope,
    title: "Veterinary Certification",
    text: "Every animal is health-checked and cleared by qualified veterinarians before dispatch.",
  },
  {
    icon: FaShieldAlt,
    title: "Biosecurity Protocols",
    text: "Strict biosecurity measures at every stage protect animal health and supply chain integrity.",
  },
  {
    icon: FaLeaf,
    title: "Animal Welfare",
    text: "Climate-controlled transport and welfare-first handling reduce stress and mortality in transit.",
  },
  {
    icon: FaClipboardCheck,
    title: "Quality Assurance",
    text: "Breed and condition verification at procurement ensures consistent, export-grade stock.",
  },
  {
    icon: FaRoute,
    title: "End-to-End Traceability",
    text: "Every shipment is tracked from farm gate to port, giving buyers complete supply chain visibility.",
  },
];

export default function OurStandards() {
  return (
    <section className="relative bg-cream-100 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionTag>Our Standards</SectionTag>
          <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-forest-950 sm:text-4xl">
            Compliance and welfare, built into every shipment
          </h2>
          <p className="mt-5 text-base leading-relaxed text-forest-900/70">
            These are the standards we hold ourselves to on every order&mdash;not projections, but the operating
            discipline that makes us a dependable export partner.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STANDARDS.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="group h-full rounded-2xl border border-forest-900/10 bg-white p-7 shadow-sm transition-all hover:-translate-y-1.5 hover:shadow-xl hover:shadow-forest-900/10">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-forest-950 text-gold-400 transition-transform group-hover:scale-110">
                  <item.icon size={20} />
                </div>
                <h3 className="font-display text-lg font-semibold text-forest-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-forest-900/65">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

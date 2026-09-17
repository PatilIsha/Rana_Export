import { Link } from "react-router-dom";
import { FaSeedling, FaStethoscope, FaTruckMoving, FaShip, FaArrowRight } from "react-icons/fa";
import Reveal from "./Reveal";
import SectionTag from "./SectionTag";

const STEPS = [
  { icon: FaSeedling, title: "Source", text: "Certified farm procurement" },
  { icon: FaStethoscope, title: "Inspect", text: "Veterinary health clearance" },
  { icon: FaTruckMoving, title: "Transport", text: "Climate-controlled logistics" },
  { icon: FaShip, title: "Export", text: "Compliant port handling" },
];

export default function ProcessTeaser() {
  return (
    <section className="relative bg-forest-950 py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_1px_1px,#e2c27a_1px,transparent_0)] [background-size:28px_28px]" />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-xl text-center">
          <SectionTag light>How It Works</SectionTag>
          <h2 className="mt-5 font-display text-3xl font-semibold text-cream-50 sm:text-4xl">
            Four steps from farm gate to global port
          </h2>
        </Reveal>

        <div className="relative mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent lg:block" />
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1} className="relative flex flex-col items-center text-center">
              <div className="relative z-10 flex h-[72px] w-[72px] items-center justify-center rounded-full border-2 border-gold-400/50 bg-forest-900 text-gold-400 shadow-lg shadow-forest-950/50">
                <step.icon size={24} />
                {i < STEPS.length - 1 && (
                  <FaArrowRight className="absolute -right-10 top-1/2 hidden -translate-y-1/2 text-gold-400/30 lg:block" size={18} />
                )}
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-cream-50">{step.title}</h3>
              <p className="mt-1 text-sm text-cream-100/60">{step.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-14 text-center">
          <Link
            to="/solutions"
            className="group inline-flex items-center gap-2 rounded-full border border-cream-50/25 px-6 py-3 text-sm font-bold text-cream-50 transition-colors hover:border-gold-400 hover:text-gold-400"
          >
            See the Full Process
            <FaArrowRight className="transition-transform group-hover:translate-x-1" size={13} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

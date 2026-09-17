import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import Reveal from "./Reveal";

export default function CTABanner({ title, text, ctaLabel, to }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-forest-900 to-forest-950 py-16">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 text-center lg:flex-row lg:justify-between lg:text-left lg:px-10">
        <Reveal direction="right">
          <h3 className="font-display text-2xl font-semibold text-cream-50 sm:text-3xl">{title}</h3>
          <p className="mt-2 text-sm text-cream-100/70 sm:text-base">{text}</p>
        </Reveal>
        <Reveal direction="left">
          <Link
            to={to}
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 px-7 py-3.5 text-sm font-bold text-forest-950 shadow-lg shadow-gold-500/30 transition-transform hover:scale-105"
          >
            {ctaLabel}
            <HiArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

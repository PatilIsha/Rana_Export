import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiArrowRight, HiOutlineChevronDown } from "react-icons/hi";
import SmartImage from "./SmartImage";
import Counter from "./Counter";
import { IMAGES } from "../data/images";

const STATS = [
  { value: 43, prefix: "₹", suffix: "K Cr", label: "FY25 Animal Product Exports" },
  { value: 12.56, decimals: 2, suffix: "%", label: "Year-on-Year Growth" },
  { value: 20, suffix: "%+", label: "Farmer Income Uplift" },
  { value: 5, suffix: "+", label: "Procurement Centres" },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-forest-950">
      <div className="absolute inset-0">
        <SmartImage image={IMAGES.heroFarm} alt="Aerial view of Indian farmland at golden hour" className="h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/75 to-forest-950/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/95 via-forest-950/40 to-transparent" />
      </div>

      <div className="relative z-10 flex flex-1 items-center">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 pt-28 pb-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:pt-32">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-gold-400"
            >
              Rana Exports &amp; Logistics Pvt. Ltd.
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-4xl font-semibold leading-[1.08] text-cream-50 sm:text-5xl lg:text-6xl"
            >
              Building India&rsquo;s Trusted <span className="text-gradient-gold italic">Live Livestock</span> Export &amp; Logistics Network
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-cream-100/80 sm:text-lg"
            >
              From certified farm gate to international port &mdash; a fully integrated, APEDA-compliant supply chain
              that eliminates middlemen, protects animal welfare, and connects Indian farmers to global markets.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 px-7 py-3.5 text-sm font-bold text-forest-950 shadow-lg shadow-gold-500/30 transition-transform hover:scale-105"
              >
                Partner With Us
                <HiArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/solutions"
                className="inline-flex items-center gap-2 rounded-full border border-cream-50/30 px-7 py-3.5 text-sm font-bold text-cream-50 transition-colors hover:border-gold-400 hover:text-gold-400"
              >
                Explore the Model
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 right-8 hidden h-11 w-11 items-center justify-center rounded-full border border-cream-50/30 text-cream-50 lg:flex"
        >
          <HiOutlineChevronDown />
        </motion.div>
      </div>

      <div className="relative z-10 border-t border-cream-50/10 bg-forest-950/40 backdrop-blur-sm">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-7 sm:grid-cols-4 lg:px-10">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
              className="text-center sm:text-left"
            >
              <div className="font-display text-2xl font-bold text-gold-400 sm:text-3xl">
                <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} decimals={stat.decimals || 0} />
              </div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wide text-cream-100/70">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

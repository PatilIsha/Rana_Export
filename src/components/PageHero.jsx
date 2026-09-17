import { motion } from "framer-motion";
import SmartImage from "./SmartImage";

export default function PageHero({ image, alt, eyebrow, title }) {
  return (
    <section className="relative flex h-[46vh] min-h-[360px] items-end overflow-hidden bg-forest-950">
      <div className="absolute inset-0">
        <SmartImage image={image} alt={alt} className="h-full w-full" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/70 to-forest-950/30" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-14 lg:px-10">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-gold-400"
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-4 max-w-2xl font-display text-3xl font-semibold text-cream-50 sm:text-4xl lg:text-5xl"
        >
          {title}
        </motion.h1>
      </div>
    </section>
  );
}

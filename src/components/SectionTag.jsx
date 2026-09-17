export default function SectionTag({ children, light = false }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] ${
        light
          ? "border-gold-400/40 bg-gold-400/10 text-gold-400"
          : "border-forest-700/20 bg-forest-900/5 text-forest-800"
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${light ? "bg-gold-400" : "bg-gold-500"}`} />
      {children}
    </span>
  );
}

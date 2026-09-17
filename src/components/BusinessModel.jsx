import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import Reveal from "./Reveal";
import SectionTag from "./SectionTag";

const DATA = [
  { name: "Live Pig Trading", value: 45, color: "#e2c27a" },
  { name: "Domestic Wholesale Supply", value: 20, color: "#c8a24d" },
  { name: "Export Sales", value: 15, color: "#a9823a" },
  { name: "Transportation & Logistics", value: 10, color: "#245c52" },
  { name: "Supply Chain Management Fees", value: 5, color: "#1a4941" },
  { name: "Documentation & Export Handling", value: 5, color: "#123a33" },
];

function CustomTooltip({ active, payload }) {
  if (!active || !payload?.length) return null;
  const item = payload[0];
  return (
    <div className="rounded-lg border border-forest-900/10 bg-white px-4 py-2 text-sm shadow-lg">
      <span className="font-semibold text-forest-950">{item.name}</span>
      <span className="ml-2 font-bold text-gold-600">{item.value}%</span>
    </div>
  );
}

export default function BusinessModel() {
  return (
    <section className="relative bg-forest-950 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionTag light>Business Model</SectionTag>
          <h2 className="mt-5 font-display text-3xl font-semibold text-cream-50 sm:text-4xl">
            Diversified revenue streams, strong margin architecture
          </h2>
          <p className="mt-5 text-base leading-relaxed text-cream-100/70">
            Our integrated model combines live animal trading, domestic wholesale, export sales, logistics, and
            documentation fees&mdash;creating multiple income vectors with natural margin hedges.
          </p>
        </Reveal>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          <Reveal direction="right" className="relative mx-auto h-[320px] w-full max-w-md sm:h-[380px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={DATA} dataKey="value" nameKey="name" innerRadius="62%" outerRadius="95%" paddingAngle={2} strokeWidth={0}>
                  {DATA.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
            <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-display text-4xl font-bold text-gold-400">15&ndash;20%</span>
              <span className="mt-1 text-xs font-semibold uppercase tracking-wide text-cream-100/60">Better Margins</span>
            </div>
          </Reveal>

          <Reveal direction="left" className="space-y-3">
            {DATA.map((item) => (
              <div key={item.name} className="flex items-center gap-4 rounded-xl border border-cream-50/10 bg-forest-900/50 p-4">
                <span className="h-3 w-3 shrink-0 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="flex-1 text-sm font-medium text-cream-100/85">{item.name}</span>
                <span className="font-display text-base font-bold text-cream-50">{item.value}%</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

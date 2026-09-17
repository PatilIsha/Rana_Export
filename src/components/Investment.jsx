import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { FaCheckCircle } from "react-icons/fa";
import Reveal from "./Reveal";
import SectionTag from "./SectionTag";

const DATA = [
  { name: "Livestock Procurement", value: 80, pct: "40%" },
  { name: "Vehicles & Logistics", value: 40, pct: "20%" },
  { name: "Working Capital", value: 30, pct: "15%" },
  { name: "Infrastructure", value: 20, pct: "10%" },
  { name: "Technology", value: 10, pct: "5%" },
  { name: "Export Compliance", value: 10, pct: "5%" },
  { name: "Marketing", value: 10, pct: "5%" },
];

const COLORS = ["#c8a24d", "#d3ae5e", "#deba6f", "#e9c680", "#f3d291", "#a9823a", "#8a6a2f"];

function CustomTooltip({ active, payload }) {
  if (!active || !payload?.length) return null;
  const item = payload[0].payload;
  return (
    <div className="rounded-lg border border-forest-900/10 bg-white px-4 py-2 text-sm shadow-lg">
      <span className="font-semibold text-forest-950">{item.name}</span>
      <span className="ml-2 font-bold text-gold-600">&#8377;{item.value}L ({item.pct})</span>
    </div>
  );
}

export default function Investment() {
  return (
    <section className="relative bg-forest-950 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionTag light>Investment Case</SectionTag>
          <h2 className="mt-5 font-display text-3xl font-semibold text-cream-50 sm:text-4xl">
            Funding requirement &mdash; &#8377;2 Crore
          </h2>
          <p className="mt-5 text-base leading-relaxed text-cream-100/70">
            Deployed across procurement, logistics infrastructure, working capital, and export readiness&mdash;
            building a foundation capable of scaling to &#8377;12 Crore+ revenue within three years.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal direction="right" className="rounded-3xl border border-cream-50/10 bg-forest-900/50 p-4 sm:p-8">
            <div className="h-[360px] sm:h-[420px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={DATA} layout="vertical" margin={{ top: 0, right: 20, left: 0, bottom: 0 }}>
                  <CartesianGrid stroke="#fbf8f214" horizontal={false} />
                  <XAxis type="number" tick={{ fill: "#fbf8f299", fontSize: 11 }} axisLine={false} tickLine={false} />
                  <YAxis
                    type="category"
                    dataKey="name"
                    width={110}
                    tick={{ fill: "#fbf8f2cc", fontSize: 10 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: "#fbf8f208" }} />
                  <Bar dataKey="value" radius={[0, 8, 8, 0]} maxBarSize={26}>
                    {DATA.map((entry, i) => (
                      <Cell key={entry.name} fill={COLORS[i % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Reveal>

          <Reveal direction="left" className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-2xl border border-cream-50/10">
              <table className="w-full text-sm">
                <tbody>
                  {DATA.map((row, i) => (
                    <tr key={row.name} className={i % 2 ? "bg-forest-900/40" : "bg-forest-900/70"}>
                      <td className="px-5 py-3 text-cream-100/85">{row.name}</td>
                      <td className="px-5 py-3 text-right font-bold text-gold-400">{row.pct}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex items-start gap-3 rounded-2xl border border-gold-400/30 bg-gold-400/10 p-6">
              <FaCheckCircle className="mt-0.5 shrink-0 text-gold-400" size={20} />
              <p className="text-sm font-semibold leading-relaxed text-cream-50">
                Expected ROI: 25&ndash;30% by Year 2, rising to 35%+ by Year 3.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

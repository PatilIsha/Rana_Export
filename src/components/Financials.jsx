import { Bar, CartesianGrid, ComposedChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import Reveal from "./Reveal";
import SectionTag from "./SectionTag";

const DATA = [
  { year: "Year 1", revenue: 350, ebitda: 14 },
  { year: "Year 2", revenue: 720, ebitda: 16 },
  { year: "Year 3", revenue: 1200, ebitda: 19 },
];

const TABLE = [
  { metric: "Revenue", y1: "₹3.50 Cr", y2: "₹7.20 Cr", y3: "₹12.00 Cr" },
  { metric: "EBITDA", y1: "₹49 L", y2: "₹1.15 Cr", y3: "₹2.28 Cr" },
  { metric: "Margin", y1: "14%", y2: "16%", y3: "19%" },
];

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-forest-900/10 bg-white px-4 py-3 text-sm shadow-lg">
      <p className="font-semibold text-forest-950">{label}</p>
      <p className="text-forest-900/70">Revenue: <span className="font-bold text-forest-950">{"₹"}{payload[0]?.value}L</span></p>
      <p className="text-forest-900/70">EBITDA Margin: <span className="font-bold text-gold-600">{payload[1]?.value}%</span></p>
    </div>
  );
}

export default function Financials() {
  return (
    <section className="relative bg-cream-100 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionTag>Financial Projections</SectionTag>
          <h2 className="mt-5 font-display text-3xl font-semibold text-forest-950 sm:text-4xl">
            Revenue &amp; EBITDA growth trajectory
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.3fr_0.9fr]">
          <Reveal direction="right" className="rounded-3xl border border-forest-900/10 bg-white p-6 shadow-sm sm:p-8">
            <div className="h-[320px] sm:h-[380px]">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid stroke="#10231f14" vertical={false} />
                  <XAxis dataKey="year" tick={{ fill: "#10231f99", fontSize: 13 }} axisLine={false} tickLine={false} />
                  <YAxis yAxisId="left" tick={{ fill: "#10231f99", fontSize: 12 }} axisLine={false} tickLine={false} />
                  <YAxis yAxisId="right" orientation="right" tick={{ fill: "#c8a24d", fontSize: 12 }} axisLine={false} tickLine={false} />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: "#10231f08" }} />
                  <Bar yAxisId="left" dataKey="revenue" radius={[8, 8, 0, 0]} fill="#123a33" maxBarSize={70} />
                  <Line yAxisId="right" type="monotone" dataKey="ebitda" stroke="#c8a24d" strokeWidth={3} dot={{ r: 5, fill: "#c8a24d" }} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
            <p className="mt-4 text-center text-xs font-medium uppercase tracking-wide text-forest-900/50">
              Revenue (&#8377; Lakh) &mdash; bars &nbsp;&bull;&nbsp; EBITDA Margin (%) &mdash; line
            </p>
          </Reveal>

          <Reveal direction="left" className="space-y-6">
            <div className="overflow-hidden rounded-3xl border border-forest-900/10 bg-white shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-forest-950 text-cream-50">
                    <th className="px-5 py-3.5 text-left font-semibold">Metric</th>
                    <th className="px-5 py-3.5 text-left font-semibold">Y1</th>
                    <th className="px-5 py-3.5 text-left font-semibold">Y2</th>
                    <th className="px-5 py-3.5 text-left font-semibold">Y3</th>
                  </tr>
                </thead>
                <tbody>
                  {TABLE.map((row, i) => (
                    <tr key={row.metric} className={i % 2 ? "bg-cream-50" : "bg-white"}>
                      <td className="px-5 py-3.5 font-semibold text-forest-950">{row.metric}</td>
                      <td className="px-5 py-3.5 text-forest-900/75">{row.y1}</td>
                      <td className="px-5 py-3.5 text-forest-900/75">{row.y2}</td>
                      <td className="px-5 py-3.5 font-bold text-gold-600">{row.y3}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="rounded-2xl border border-forest-900/10 bg-white p-6 shadow-sm">
              <h4 className="font-display text-sm font-semibold text-forest-950">Key Assumptions</h4>
              <ul className="mt-3 space-y-2 text-sm text-forest-900/70">
                <li>&bull; Avg. sale price per pig: &#8377;8,000&ndash;12,000</li>
                <li>&bull; Monthly volume: 300&ndash;500 pigs (Y1), 800+ (Y3)</li>
                <li>&bull; Export premium: 15&ndash;20% over domestic</li>
                <li>&bull; Long-term EBITDA target: 18&ndash;22%</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import Reveal from "./Reveal";
import SectionTag from "./SectionTag";
import SmartImage from "./SmartImage";
import { IMAGES } from "../data/images";

const ITEMS = [
  { image: IMAGES.truckFleet, title: "Climate-Controlled Fleet", text: "Purpose-built livestock carriers on the move across export corridors." },
  { image: IMAGES.portAerial, title: "Port & Container Handling", text: "Aerial view of a modern container terminal, ready for export cargo." },
  { image: IMAGES.cargoShip, title: "Global Cargo Shipping", text: "Ocean freight vessels connecting Indian exports to world markets." },
];

export default function ExportGallery() {
  return (
    <section className="relative bg-forest-950 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionTag light>Export &amp; Logistics</SectionTag>
          <h2 className="mt-5 font-display text-3xl font-semibold text-cream-50 sm:text-4xl">
            A physical network built for global trade
          </h2>
          <p className="mt-5 text-base leading-relaxed text-cream-100/70">
            From climate-controlled road transport to port handling and ocean freight&mdash;every link in the chain
            is managed for speed, compliance, and animal welfare.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1} className="group relative overflow-hidden rounded-3xl">
              <SmartImage image={item.image} alt={item.title} className="aspect-[4/5]" imgClassName="transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-display text-lg font-semibold text-cream-50">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream-100/70">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

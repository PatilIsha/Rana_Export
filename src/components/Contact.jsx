import { FaPhoneAlt, FaEnvelope, FaBuilding, FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
import Reveal from "./Reveal";
import SmartImage from "./SmartImage";
import { IMAGES } from "../data/images";

const ADDRESS = "H. No. 31, 1st Floor, B-31, DSIDC Work Centre, Kalyanpuri, East Delhi, Delhi – 110091, India";

const DETAILS = [
  { icon: FaPhoneAlt, label: "Phone", value: "+91 82855 15748", href: "tel:+918285515748" },
  { icon: FaEnvelope, label: "Email", value: "ranaexport1310@gmail.com", href: "mailto:ranaexport1310@gmail.com" },
  { icon: FaBuilding, label: "Entity", value: "Rana Exports & Logistics Pvt. Ltd.", href: null },
  {
    icon: FaMapMarkerAlt,
    label: "Registered Office",
    value: ADDRESS,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`,
  },
];

export default function Contact() {
  return (
    <section className="relative overflow-hidden bg-forest-950 py-24 lg:py-32">
      <div className="absolute inset-0 opacity-25">
        <SmartImage image={IMAGES.sunriseField} alt="" className="h-full w-full" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-forest-950 via-forest-950/95 to-forest-950" />

      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-10">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
            Get In Touch
          </span>
          <h2 className="mt-6 font-display text-3xl font-semibold leading-tight text-cream-50 sm:text-4xl lg:text-5xl">
            Join us in transforming <span className="text-gradient-gold italic">India&rsquo;s livestock export</span> ecosystem
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-cream-100/75">
            We invite investors and strategic partners to collaborate with Rana Exports &amp; Logistics Private
            Limited in building a compliant, scalable, and globally competitive livestock supply chain.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {DETAILS.map((item) => {
            const content = (
              <div className="group flex h-full flex-col items-center gap-3 rounded-2xl border border-cream-50/10 bg-forest-900/50 p-7 transition-all hover:-translate-y-1.5 hover:border-gold-400/40">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-400/10 text-gold-400 transition-colors group-hover:bg-gold-400 group-hover:text-forest-950">
                  <item.icon size={18} />
                </span>
                <span className="text-xs font-semibold uppercase tracking-wide text-cream-100/50">{item.label}</span>
                <span className="text-sm font-semibold leading-snug text-cream-50">{item.value}</span>
              </div>
            );
            return item.href ? (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {content}
              </a>
            ) : (
              <div key={item.label}>{content}</div>
            );
          })}
        </Reveal>

        <Reveal delay={0.25} className="mt-12">
          <a
            href="mailto:ranaexport1310@gmail.com"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 px-8 py-4 text-sm font-bold text-forest-950 shadow-lg shadow-gold-500/30 transition-transform hover:scale-105"
          >
            Start a Conversation
            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

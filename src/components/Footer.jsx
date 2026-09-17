import { Link } from "react-router-dom";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaArrowUp } from "react-icons/fa";

const ADDRESS = "H. No. 31, 1st Floor, B-31, DSIDC Work Centre, Kalyanpuri, East Delhi, Delhi – 110091, India";
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;

const LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Our Solutions", to: "/solutions" },
  { label: "Why Choose Us", to: "/why-us" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest-950">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_1px_1px,#e2c27a_1px,transparent_0)] [background-size:28px_28px]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1.2fr]">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <img src="/logo.svg" alt="Rana Exports & Logistics logo" className="h-11 w-11" />
              <span className="flex flex-col leading-tight">
                <span className="font-display text-lg font-semibold text-cream-50">RANA</span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold-400">Exports &amp; Logistics</span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream-100/60">
              Building India&rsquo;s trusted, APEDA-compliant live livestock export and logistics network&mdash;from
              certified farm gate to international port.
            </p>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-cream-100/40">
              Rana Exports &amp; Logistics Pvt. Ltd. &mdash; Registered in India
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">Quick Links</h3>
            <ul className="mt-5 space-y-3 text-sm text-cream-100/70">
              {LINKS.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="transition-colors hover:text-gold-400">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">Get In Touch</h3>
            <ul className="mt-5 space-y-3 text-sm text-cream-100/70">
              <li>
                <a href="tel:+918285515748" className="flex items-start gap-3 transition-colors hover:text-gold-400">
                  <FaPhoneAlt size={13} className="mt-0.5 shrink-0 text-gold-400/70" />
                  +91 82855 15748
                </a>
              </li>
              <li>
                <a href="mailto:sunny1310rana@gmail.com" className="flex items-start gap-3 transition-colors hover:text-gold-400">
                  <FaEnvelope size={13} className="mt-0.5 shrink-0 text-gold-400/70" />
                  sunny1310rana@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">Registered Office</h3>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-start gap-3 text-sm leading-relaxed text-cream-100/70 transition-colors hover:text-gold-400"
            >
              <FaMapMarkerAlt size={14} className="mt-0.5 shrink-0 text-gold-400/70" />
              {ADDRESS}
            </a>
          </div>
        </div>
      </div>

      <div className="relative border-t border-cream-50/10">
        <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-3 px-6 pb-24 pt-6 text-center sm:flex-row sm:justify-between sm:py-6 sm:text-left lg:px-10">
          <p className="text-xs text-cream-100/40">
            &copy; {new Date().getFullYear()} Rana Exports &amp; Logistics Pvt. Ltd. All rights reserved.
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-cream-100/50 transition-colors hover:text-gold-400"
          >
            Back to top
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-cream-50/15 transition-colors group-hover:border-gold-400/50">
              <FaArrowUp size={10} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}

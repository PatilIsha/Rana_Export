import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";

const LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Solutions", to: "/solutions" },
  { label: "Why Us", to: "/why-us" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-forest-950/90 py-3 shadow-lg shadow-forest-950/20 backdrop-blur-md" : "bg-forest-950/40 py-5 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link to="/" className="group flex items-center gap-3">
          <img src="/logo.svg" alt="Rana Exports & Logistics logo" className="h-11 w-11" />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg font-semibold tracking-wide text-white">RANA</span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold-400">Exports &amp; Logistics</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-10 lg:flex">
          {LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `relative text-sm font-semibold transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-gold-400 after:transition-all after:duration-300 ${
                    isActive ? "text-gold-400 after:w-full" : "text-cream-50/85 after:w-0 hover:text-gold-400 hover:after:w-full"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <a href="tel:+918285515748" className="flex items-center gap-2 text-sm font-semibold text-cream-50/85">
            <FaPhoneAlt className="text-gold-400" /> +91 82855 15748
          </a>
          <Link
            to="/contact"
            className="rounded-full bg-gradient-to-r from-gold-400 to-gold-600 px-5 py-2.5 text-sm font-bold text-forest-950 shadow-md shadow-gold-500/20 transition-transform hover:scale-105"
          >
            Partner With Us
          </Link>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-lg border border-cream-50/20 text-cream-50 lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <HiX size={22} /> : <HiMenu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden lg:hidden"
          >
            <div className="mx-6 mt-4 flex flex-col gap-1 rounded-2xl border border-cream-50/10 bg-forest-950/95 p-4 backdrop-blur-md">
              {LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${
                      isActive ? "bg-forest-800 text-gold-400" : "text-cream-50/90 hover:bg-forest-800 hover:text-gold-400"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <a
                href="tel:+918285515748"
                className="mt-2 flex items-center justify-center gap-2 rounded-lg border border-cream-50/15 px-4 py-3 text-sm font-semibold text-cream-50/90"
              >
                <FaPhoneAlt className="text-gold-400" size={13} /> +91 82855 15748
              </a>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 px-4 py-3 text-center text-sm font-bold text-forest-950"
              >
                Partner With Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

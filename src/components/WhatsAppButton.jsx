import { FaWhatsapp } from "react-icons/fa";

const PHONE = "918285515748";
const MESSAGE = "Hi Rana Exports & Logistics, I'd like to know more about your services.";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 transition-transform hover:scale-110"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-60" />
      <FaWhatsapp size={28} />
    </a>
  );
}

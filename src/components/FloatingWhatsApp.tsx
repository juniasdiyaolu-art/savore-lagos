import { MessageCircle } from 'lucide-react';
import { createWhatsAppLink } from '../types';

export default function FloatingWhatsApp() {
  const message = "Hello Savoré Lagos! I’d like to make an order.";
  const waUrl = createWhatsAppLink(message);

  return (
    <div className="fixed bottom-20 sm:bottom-8 right-4 sm:right-8 z-50 flex items-center group">
      {/* Tooltip text pill */}
      <div className="mr-3 px-3 py-1.5 rounded-xl bg-[#141724]/95 backdrop-blur-md text-white font-bold text-xs shadow-2xl border border-[#2b334a] whitespace-nowrap opacity-90 sm:opacity-100 group-hover:scale-105 transition-all flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span>Chat & Order</span>
      </div>

      {/* Primary Floating Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat and Order on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-400 text-white shadow-2xl shadow-emerald-950/80 hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-emerald-300/40"
      >
        <span className="sr-only">Chat & Order on WhatsApp</span>
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-pulse pointer-events-none" />
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-white text-emerald-600 relative z-10" />
      </a>
    </div>
  );
}

import { Home, Utensils, MessageCircle, Phone } from 'lucide-react';
import { RESTAURANT_INFO, createWhatsAppLink } from '../types';

export default function MobileBottomNav() {
  const defaultWhatsAppUrl = createWhatsAppLink(
    "Hello Savoré Lagos! I’d like to place an order."
  );

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0e1017]/95 backdrop-blur-xl border-t border-[#23293c] py-2 px-3 safe-area-pb shadow-2xl">
      <div className="grid grid-cols-4 items-center gap-1 max-w-md mx-auto">
        
        {/* Home */}
        <a
          href="#"
          className="flex flex-col items-center justify-center py-1 text-neutral-400 hover:text-amber-400 active:scale-95 transition-all"
        >
          <Home className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-semibold tracking-wide">Home</span>
        </a>

        {/* Menu */}
        <a
          href="#menu"
          className="flex flex-col items-center justify-center py-1 text-neutral-400 hover:text-amber-400 active:scale-95 transition-all"
        >
          <Utensils className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-semibold tracking-wide">Menu</span>
        </a>

        {/* WhatsApp (Visually Prominent) */}
        <a
          href={defaultWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center -mt-3.5 py-1 text-white active:scale-95 transition-all group"
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-400 flex items-center justify-center shadow-lg shadow-emerald-950/80 border-2 border-emerald-300/40 group-hover:scale-105">
            <MessageCircle className="w-6 h-6 fill-white text-emerald-600" />
          </div>
          <span className="text-[10px] font-bold text-emerald-400 tracking-wide mt-0.5">WhatsApp</span>
        </a>

        {/* Call */}
        <a
          href={`tel:${RESTAURANT_INFO.rawPhone}`}
          className="flex flex-col items-center justify-center py-1 text-neutral-400 hover:text-amber-400 active:scale-95 transition-all"
        >
          <Phone className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-semibold tracking-wide">Call</span>
        </a>

      </div>
    </div>
  );
}

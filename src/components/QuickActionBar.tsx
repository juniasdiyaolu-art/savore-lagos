import { UtensilsCrossed, MessageCircle, Phone, BookOpen, Navigation } from 'lucide-react';
import { RESTAURANT_INFO, createWhatsAppLink } from '../types';

export default function QuickActionBar() {
  const whatsAppUrl = createWhatsAppLink(
    "Hello Savoré Lagos! I'm reaching out via the quick action bar. I’d like to place an order or see today’s specials."
  );

  return (
    <section className="bg-[#12141c] border-y border-[#202534] py-5 sticky top-20 z-30 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-400 mb-2 sm:mb-3">
          <span className="font-semibold text-neutral-300 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            Instant Quick Actions
          </span>
          <span className="text-[11px] text-neutral-400">
            One tap connects you directly to our Lekki kitchen
          </span>
        </div>

        {/* 5 Quick Action Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 sm:gap-3">
          
          {/* 1. Order Food */}
          <a
            href="#menu"
            className="flex items-center justify-center gap-2 px-3 py-3 rounded-xl bg-[#1a1d28] hover:bg-[#242838] border border-[#2c3245] hover:border-amber-500/40 text-neutral-100 font-semibold text-xs sm:text-sm active:scale-95 transition-all shadow-sm"
          >
            <UtensilsCrossed className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Order Food</span>
          </a>

          {/* 2. WhatsApp Us */}
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-3 py-3 rounded-xl bg-emerald-600/90 hover:bg-emerald-500 border border-emerald-400/30 text-white font-bold text-xs sm:text-sm active:scale-95 transition-all shadow-md shadow-emerald-950/40"
          >
            <MessageCircle className="w-4 h-4 fill-white text-emerald-600 shrink-0" />
            <span>WhatsApp Us</span>
          </a>

          {/* 3. Call Now */}
          <a
            href={`tel:${RESTAURANT_INFO.rawPhone}`}
            className="flex items-center justify-center gap-2 px-3 py-3 rounded-xl bg-[#1a1d28] hover:bg-[#242838] border border-[#2c3245] hover:border-amber-500/40 text-neutral-100 font-semibold text-xs sm:text-sm active:scale-95 transition-all shadow-sm"
          >
            <Phone className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Call Now</span>
          </a>

          {/* 4. View Menu */}
          <a
            href="#menu"
            className="flex items-center justify-center gap-2 px-3 py-3 rounded-xl bg-[#1a1d28] hover:bg-[#242838] border border-[#2c3245] hover:border-amber-500/40 text-neutral-100 font-semibold text-xs sm:text-sm active:scale-95 transition-all shadow-sm"
          >
            <BookOpen className="w-4 h-4 text-amber-400 shrink-0" />
            <span>View Menu</span>
          </a>

          {/* 5. Get Directions */}
          <a
            href={RESTAURANT_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-2 sm:col-span-1 md:col-span-1 flex items-center justify-center gap-2 px-3 py-3 rounded-xl bg-[#1a1d28] hover:bg-[#242838] border border-[#2c3245] hover:border-amber-500/40 text-neutral-100 font-semibold text-xs sm:text-sm active:scale-95 transition-all shadow-sm"
          >
            <Navigation className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Get Directions</span>
          </a>

        </div>
      </div>
    </section>
  );
}

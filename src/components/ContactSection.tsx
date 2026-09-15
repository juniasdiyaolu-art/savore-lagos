import { Phone, MessageCircle, ArrowUpRight, HelpCircle } from 'lucide-react';
import { RESTAURANT_INFO, createWhatsAppLink } from '../types';

export default function ContactSection() {
  const askTopics = [
    { label: 'Menu', msg: 'Hi Savoré Lagos! Can you send me today’s full menu and specials?' },
    { label: 'Availability', msg: 'Hi Savoré Lagos! What dishes are ready right now for immediate dispatch?' },
    { label: 'Delivery', msg: 'Hi Savoré Lagos! How much is delivery to my location and how long does it take?' },
    { label: 'Special Requests', msg: 'Hi Savoré Lagos! I have a special dietary request / spice preference.' },
    { label: 'Group Orders', msg: 'Hi Savoré Lagos! I would like to inquire about a group/office lunch order.' },
    { label: 'Reservations', msg: 'Hi Savoré Lagos! Can I reserve a table for dine-in today?' },
    { label: 'Events', msg: 'Hi Savoré Lagos! I’d like to ask about hosting a private gathering or celebration.' },
  ];

  const generalWhatsAppUrl = createWhatsAppLink(
    "Hello Savoré Lagos! I'm hungry and ready to order. Please let me know what's cooking!"
  );

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#0a0b10] border-b border-[#1c202d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl bg-gradient-to-b from-[#141724] to-[#0f121a] border border-amber-500/20 p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
            
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 inline-block mb-3">
                Immediate Response
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight">
                Hungry? Let’s Talk.
              </h2>
              <p className="text-base sm:text-lg text-neutral-300 mt-3 max-w-xl mx-auto">
                No tickets, no bots. Just tap below to speak directly with the team in Lekki.
              </p>
            </div>

            {/* Big Phone Number Display */}
            <div className="inline-block p-4 sm:p-6 rounded-2xl bg-[#0b0c11] border border-[#232a3d] shadow-inner">
              <span className="text-xs uppercase font-bold text-neutral-400 tracking-wider block mb-1">
                Direct Hotline & WhatsApp
              </span>
              <a
                href={`tel:${RESTAURANT_INFO.rawPhone}`}
                className="text-3xl sm:text-4xl md:text-5xl font-mono font-extrabold text-amber-400 hover:text-amber-300 transition-colors flex items-center justify-center gap-3"
              >
                <span>📱 {RESTAURANT_INFO.rawPhone}</span>
              </a>
              <span className="text-xs text-neutral-400 mt-2 block">
                Tap to call instantly or tap the WhatsApp button below
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <a
                href={generalWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2.5 py-4 px-8 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 hover:from-emerald-500 hover:to-emerald-400 text-white font-extrabold text-base tracking-wide shadow-xl shadow-emerald-950/60 active:scale-95 transition-all border border-emerald-400/30"
              >
                <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href={`tel:${RESTAURANT_INFO.rawPhone}`}
                className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2.5 py-4 px-8 rounded-2xl bg-[#1a1d29] hover:bg-[#232737] text-white font-bold text-base border border-[#30364c] active:scale-95 transition-all"
              >
                <Phone className="w-5 h-5 text-amber-400" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Ask About: interactive chips */}
            <div className="pt-6 border-t border-[#1e2334] text-left">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-400 mb-4 justify-center sm:justify-start">
                <HelpCircle className="w-4 h-4 text-amber-400" />
                <span>Ask About Quick Topics:</span>
              </div>

              <div className="flex flex-wrap gap-2.5 justify-center sm:justify-start">
                {askTopics.map((topic, i) => (
                  <a
                    key={i}
                    href={createWhatsAppLink(topic.msg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#161925] hover:bg-[#202537] text-neutral-200 hover:text-amber-400 text-xs font-medium border border-[#272e42] hover:border-amber-500/40 transition-all active:scale-95 group"
                  >
                    <span>{topic.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-amber-400 transition-colors" />
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

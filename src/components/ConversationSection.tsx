import { MessageCircle, Phone, UserCheck, ShieldCheck, Zap } from 'lucide-react';
import { RESTAURANT_INFO, createWhatsAppLink } from '../types';

export default function ConversationSection() {
  const chatMessage =
    "Hello Savoré Lagos! I have a question about your food and delivery. Could you assist me?";
  const waUrl = createWhatsAppLink(chatMessage);

  return (
    <section className="py-16 sm:py-20 bg-[#0a0c12] border-b border-[#1f2434] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#151926] via-[#1c2236] to-[#151926] border border-amber-500/30 p-8 sm:p-12 shadow-2xl text-center">
          {/* Subtle warm glow background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            
            {/* Direct human badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
              <UserCheck className="w-4 h-4" />
              <span>Real Lagos Team • Zero Automated Bots</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
              Talk To Someone, Not A Robot.
            </h2>

            {/* Exact requested copy */}
            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
              Got a question about our food, delivery, availability, portions or special requests? Just message us.
            </p>

            {/* Response reassurance stats */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400 pt-2">
              <span className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-400" /> Average reply under 3 mins
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Direct kitchen communication
              </span>
              <span className="flex items-center gap-1.5">
                <UserCheck className="w-3.5 h-3.5 text-amber-400" /> Verified Lekki staff
              </span>
            </div>

            {/* 2 Big Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* CHAT ON WHATSAPP */}
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 hover:from-emerald-500 hover:to-emerald-400 text-white font-extrabold text-base tracking-wide shadow-xl shadow-emerald-950/60 active:scale-95 transition-all border border-emerald-400/30"
              >
                <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                <span>CHAT ON WHATSAPP</span>
              </a>

              {/* CALL THE RESTAURANT */}
              <a
                href={`tel:${RESTAURANT_INFO.rawPhone}`}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-[#141722] hover:bg-[#1f2436] text-neutral-100 hover:text-white font-bold text-base tracking-wide border border-[#2f374e] active:scale-95 transition-all"
              >
                <Phone className="w-5 h-5 text-amber-400" />
                <span>CALL THE RESTAURANT</span>
              </a>
            </div>

            <p className="text-xs text-neutral-400">
              Hotline: <a href={`tel:${RESTAURANT_INFO.rawPhone}`} className="text-amber-400 font-semibold underline">{RESTAURANT_INFO.displayPhone}</a> • Available 11:00 AM – Midnight Daily
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}

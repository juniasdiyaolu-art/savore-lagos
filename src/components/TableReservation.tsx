import { MessageCircle, Users, Wine, Calendar, Clock } from 'lucide-react';
import { createWhatsAppLink } from '../types';

export default function TableReservation() {
  const reservationMessage =
    "Hello Savoré Lagos! I'd like to ask about booking a table. Please let me know what's available.";
  const waUrl = createWhatsAppLink(reservationMessage);

  return (
    <section id="reservation" className="py-16 sm:py-20 bg-[#0a0c11] border-b border-[#1c202d] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl bg-gradient-to-r from-[#141723] via-[#1a1f30] to-[#141723] border border-[#2b3348] p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
                <Wine className="w-3.5 h-3.5" />
                <span>Indoor & Terrace Dining in Lekki</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
                Planning To Dine With Us?
              </h2>

              <p className="text-base text-neutral-300 max-w-2xl leading-relaxed">
                Whether you’re planning an intimate date night, a lively family reunion, or an after-work hangout with colleagues, our Lekki restaurant offers warm ambiance, great music, and unforgettable food.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-neutral-300 pt-1">
                <span className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-amber-400" /> Tables for 2 to 25 guests
                </span>
                <span className="text-neutral-600">•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-amber-400" /> Instant WhatsApp table confirmation
                </span>
                <span className="text-neutral-600">•</span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-amber-400" /> Same-day & advance bookings
                </span>
              </div>

              <div className="pt-3">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 hover:from-emerald-500 hover:to-emerald-400 text-white font-extrabold text-base tracking-wide shadow-xl shadow-emerald-950/60 active:scale-95 transition-all border border-emerald-400/30"
                >
                  <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                  <span>ASK ABOUT A TABLE</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="relative rounded-2xl overflow-hidden border border-[#2e374f] aspect-[4/3] shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
                  alt="Savoré Lagos Cozy Dining Ambiance"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <p className="text-xs font-semibold text-white">
                    📍 Admiralty Way, Lekki Phase 1
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

import { MapPin, Navigation, Clock, Phone, MessageCircle, AlertCircle } from 'lucide-react';
import { RESTAURANT_INFO, createWhatsAppLink } from '../types';

export default function LocationSection() {
  const directionsUrl = RESTAURANT_INFO.googleMapsUrl;
  const waLocationUrl = createWhatsAppLink(
    "Hello Savoré Lagos! I’d like directions to your restaurant in Lekki Phase 1."
  );

  return (
    <section id="location" className="py-16 sm:py-24 bg-[#0d0f16] border-b border-[#1f2434] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 inline-block mb-3">
            📍 Find Us in Lekki
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight mb-3">
            Come Eat With Us
          </h2>
          <p className="text-sm sm:text-base text-neutral-300">
            Conveniently located in the heart of Lekki Phase 1. Easy parking, cozy vibes, and warm hospitality await.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Info Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-7 sm:p-9 rounded-3xl bg-[#131622] border border-[#23293d] shadow-xl space-y-6">
            <div className="space-y-6">
              
              {/* Demo disclaimer badge */}
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>
                  Demo Website Notice: Restaurant is a showcase concept for Admiralty Way, Lekki Phase 1, Lagos.
                </span>
              </div>

              {/* Location details */}
              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-400">Our Address</h4>
                    <p className="text-white font-semibold text-base mt-0.5">
                      Plot 18, Admiralty Way, Lekki Phase 1
                    </p>
                    <p className="text-xs text-neutral-400 mt-0.5">Lekki, Lagos, Nigeria</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-400">Opening Hours</h4>
                    <p className="text-white font-semibold text-sm mt-0.5">
                      Mon – Fri: 11:00 AM – 11:00 PM
                    </p>
                    <p className="text-neutral-300 text-sm">
                      Sat – Sun: 11:00 AM – Midnight
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-400">Direct Line & WhatsApp</h4>
                    <a
                      href={`tel:${RESTAURANT_INFO.rawPhone}`}
                      className="text-amber-400 font-bold text-base hover:underline block mt-0.5"
                    >
                      {RESTAURANT_INFO.displayPhone}
                    </a>
                    <p className="text-xs text-neutral-400">Kitchen order dispatch desk</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-4 border-t border-[#1e2436] space-y-3">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-2xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-sm sm:text-base active:scale-95 transition-all shadow-lg shadow-amber-950/40"
              >
                <Navigation className="w-4 h-4 text-black" />
                <span>GET DIRECTIONS</span>
              </a>

              <a
                href={waLocationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-2xl bg-[#181c2b] hover:bg-[#22283d] text-neutral-200 hover:text-white font-semibold text-xs sm:text-sm border border-[#2d354d] transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Ask for Landmarks on WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Interactive Map Visual */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-[#23293d] bg-[#11131c] relative flex flex-col min-h-[380px] shadow-xl">
            {/* Map Header Overlay */}
            <div className="p-4 bg-[#141723]/90 backdrop-blur-md border-b border-[#23293d] flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-semibold text-neutral-200">
                  Admiralty Way, Lekki Phase 1 Hub
                </span>
              </div>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-amber-400 font-bold hover:underline flex items-center gap-1"
              >
                Open in Google Maps ↗
              </a>
            </div>

            {/* Map Frame / Visual View */}
            <div className="relative flex-1 w-full bg-[#161a26] overflow-hidden flex items-center justify-center min-h-[320px]">
              <iframe
                title="Savoré Lagos Map Location"
                src="https://maps.google.com/maps?q=Admiralty+Way+Lekki+Phase+1+Lagos+Nigeria&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
              />

              {/* Pin Callout Card */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs p-3.5 rounded-2xl bg-[#0f1118]/95 backdrop-blur-md border border-[#2b334a] shadow-2xl z-20 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-500 flex items-center justify-center text-black font-black text-sm shrink-0 shadow">
                  S
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-bold text-xs truncate">Savoré Lagos Restaurant</p>
                  <p className="text-[11px] text-neutral-400 truncate">Lekki Phase 1 • Admiralty Way</p>
                </div>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1.5 rounded-lg bg-emerald-600 text-white text-[10px] font-bold shrink-0 hover:bg-emerald-500"
                >
                  Go
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

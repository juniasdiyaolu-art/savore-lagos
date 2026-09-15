import { Phone, MessageCircle, MapPin, Heart, ArrowUp } from 'lucide-react';
import { RESTAURANT_INFO, createWhatsAppLink } from '../types';

export default function Footer() {
  const whatsAppUrl = createWhatsAppLink(
    "Hello Savoré Lagos! I have an inquiry about your menu and delivery services."
  );

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08090d] text-neutral-400 border-t border-[#181a24] pt-16 pb-24 lg:pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#1c1f2c]">
          
          {/* Brand & Motto */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                S
              </div>
              <span className="text-2xl font-serif font-bold text-white tracking-tight">
                Savoré <span className="text-amber-400 font-sans text-xs uppercase tracking-widest px-1.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/30">Lagos</span>
              </span>
            </div>

            <p className="text-lg font-serif text-amber-300/90 italic">
              “{RESTAURANT_INFO.tagline}”
            </p>

            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              Serving handcrafted Nigerian classics, smokey grills, seafood boils, gourmet smash burgers, and chilled refreshments in Lekki, Lagos.
            </p>

            <div className="flex items-center gap-2 text-xs text-neutral-400 pt-1">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{RESTAURANT_INFO.address}</span>
            </div>
          </div>

          {/* Direct Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Quick Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#top" className="hover:text-amber-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-400 transition-colors">Menu</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-amber-400 transition-colors">About / Why Us</a>
              </li>
              <li>
                <a href="#custom-order" className="hover:text-amber-400 transition-colors">Custom Food Requests</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-amber-400 transition-colors">Customer Reviews</a>
              </li>
              <li>
                <a href="#location" className="hover:text-amber-400 transition-colors">Location & Directions</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Direct Hotlines */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Direct Restaurant Lines</h4>
            <p className="text-xs text-neutral-400">
              Kitchen order desk open Monday to Sunday, 11:00 AM – Midnight
            </p>

            <div className="space-y-2.5 pt-1">
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-[#12141d] border border-[#232738] hover:border-emerald-500/40 text-neutral-200 hover:text-white transition-all group"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                <div>
                  <span className="text-xs font-bold text-white block">WhatsApp</span>
                  <span className="text-xs text-emerald-400">{RESTAURANT_INFO.displayPhone}</span>
                </div>
              </a>

              <a
                href={`tel:${RESTAURANT_INFO.rawPhone}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-[#12141d] border border-[#232738] hover:border-amber-500/40 text-neutral-200 hover:text-white transition-all group"
              >
                <Phone className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
                <div>
                  <span className="text-xs font-bold text-white block">Call Us</span>
                  <span className="text-xs text-amber-400">{RESTAURANT_INFO.displayPhone}</span>
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom micro-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            © {new Date().getFullYear()} {RESTAURANT_INFO.name}. All rights reserved. • Demo Restaurant Website for Lekki, Lagos.
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-rose-500 inline fill-rose-500" /> in Lagos
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#141722] hover:bg-[#1d2232] text-neutral-300 hover:text-amber-400 border border-[#242a3e] transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

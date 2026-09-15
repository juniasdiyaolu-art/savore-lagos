import { useState } from 'react';
import { Phone, MessageCircle, Menu, X, MapPin, Clock } from 'lucide-react';
import { RESTAURANT_INFO, createWhatsAppLink } from '../types';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const defaultWhatsAppUrl = createWhatsAppLink(
    "Hello Savoré Lagos! I’d like to place an order. Please send me today’s available menu and ordering options."
  );

  return (
    <header className="sticky top-0 z-40 bg-[#0e1015]/95 backdrop-blur-md border-b border-[#232733] transition-all">
      {/* Top micro-banner for Lekki status */}
      <div className="bg-gradient-to-r from-[#171922] via-[#212533] to-[#171922] border-b border-[#282d3c] px-4 py-1.5 text-xs text-[#a0a5b8] flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-emerald-400 font-medium">Kitchen Live</span>
          <span className="hidden sm:inline text-neutral-500">•</span>
          <span className="hidden sm:inline flex items-center gap-1">
            <MapPin className="w-3 h-3 text-amber-500 inline" /> Lekki Phase 1, Lagos
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden md:flex items-center gap-1 text-[#9399ad]">
            <Clock className="w-3 h-3 text-amber-500 inline" /> Deliveries: 11:00 AM – Midnight
          </span>
          <a
            href={`tel:${RESTAURANT_INFO.rawPhone}`}
            className="text-amber-400 hover:text-amber-300 font-semibold transition-colors flex items-center gap-1"
          >
            <Phone className="w-3 h-3 inline" /> {RESTAURANT_INFO.displayPhone}
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand */}
        <a href="#top" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-amber-900/30 group-hover:scale-105 transition-transform">
            S
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-serif font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors">
              Savoré <span className="text-amber-500 font-sans text-xs sm:text-sm uppercase tracking-widest font-semibold ml-1 px-1.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/30">Lagos</span>
            </div>
            <p className="text-[11px] text-neutral-400 font-medium tracking-wide">Modern Nigerian & Grills • Lekki</p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-300">
          <a href="#menu" className="hover:text-amber-400 transition-colors">Menu</a>
          <a href="#psychology-hook" className="hover:text-amber-400 transition-colors">Order Fast</a>
          <a href="#why-us" className="hover:text-amber-400 transition-colors">Why Savoré</a>
          <a href="#reviews" className="hover:text-amber-400 transition-colors">Reviews</a>
          <a href="#custom-order" className="hover:text-amber-400 transition-colors">Custom Order</a>
          <a href="#reservation" className="hover:text-amber-400 transition-colors">Dine-In</a>
          <a href="#location" className="hover:text-amber-400 transition-colors">Location</a>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`tel:${RESTAURANT_INFO.rawPhone}`}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold text-neutral-200 hover:text-white bg-[#1a1d27] hover:bg-[#252937] border border-[#2e3447] transition-all"
            title="Call the restaurant directly"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <span className="hidden xl:inline">{RESTAURANT_INFO.displayPhone}</span>
            <span className="xl:hidden">Call</span>
          </a>

          <a
            href={defaultWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 shadow-md shadow-emerald-950/40 hover:shadow-emerald-900/60 active:scale-95 transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
            <span>Order on WhatsApp</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href={defaultWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-emerald-600 text-white active:scale-95"
            aria-label="Order on WhatsApp"
          >
            <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-[#1a1d27] border border-[#2e3447] text-neutral-300 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#232733] bg-[#11131a] px-4 pt-3 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2 pb-2">
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg bg-[#181b25] text-neutral-200 text-center text-sm font-medium hover:bg-amber-500/20 hover:text-amber-400"
            >
              🍽️ View Menu
            </a>
            <a
              href="#order-form"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg bg-[#181b25] text-neutral-200 text-center text-sm font-medium hover:bg-amber-500/20 hover:text-amber-400"
            >
              📝 Order Form
            </a>
            <a
              href="#custom-order"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg bg-[#181b25] text-neutral-200 text-center text-sm font-medium hover:bg-amber-500/20 hover:text-amber-400"
            >
              ✨ Custom Order
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg bg-[#181b25] text-neutral-200 text-center text-sm font-medium hover:bg-amber-500/20 hover:text-amber-400"
            >
              📍 Location
            </a>
          </div>

          <div className="pt-2 border-t border-[#232733] flex flex-col gap-2.5">
            <a
              href={defaultWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-center text-base"
            >
              <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
              <span>Order on WhatsApp (08128844540)</span>
            </a>
            <a
              href={`tel:${RESTAURANT_INFO.rawPhone}`}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#1c202d] text-neutral-200 font-semibold text-center text-base border border-[#2e3447]"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call: 0812 884 4540</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

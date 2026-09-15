import { MessageCircle, Phone, MapPin, Sparkles, Flame, Clock, Star } from 'lucide-react';
import { RESTAURANT_INFO, createWhatsAppLink } from '../types';

export default function Hero() {
  const heroWhatsAppMessage =
    "Hello Savoré Lagos! I’d like to place an order. Please send me today’s available menu and ordering options.";
  const whatsAppUrl = createWhatsAppLink(heroWhatsAppMessage);

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#1f2330]">
      {/* Subtle ambient lighting glows */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Hook, Value, & Conversion CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Trust & Location line */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181b24] border border-[#2c3245] text-xs font-semibold text-amber-300/90 shadow-inner">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>📍 Lekki, Lagos</span>
              <span className="text-neutral-500">•</span>
              <span className="text-neutral-300 font-normal">Fast Delivery & Dine-In</span>
            </div>

            {/* Hooky Hero Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-serif font-bold text-white tracking-tight leading-[1.08]">
              You’re Hungry.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                Your Food Is Ready.
              </span>
            </h1>

            {/* Exact supporting copy requested */}
            <p className="text-lg sm:text-xl text-neutral-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              From Nigerian classics to irresistible grills, burgers, pasta and more — get your favorite meal prepared fresh in Lekki.
            </p>

            {/* Micro-guarantees badge strip */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-medium text-neutral-400 pt-1">
              <span className="flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-amber-400" /> Fire-grilled & freshly spiced
              </span>
              <span className="hidden sm:inline text-neutral-600">•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-400" /> 30–45 min Lekki delivery
              </span>
              <span className="hidden sm:inline text-neutral-600">•</span>
              <span className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" /> 4.9★ Lagos Favorite
              </span>
            </div>

            {/* Primary and Secondary CTAs */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5 max-w-lg mx-auto lg:mx-0">
              {/* Primary CTA: ORDER ON WHATSAPP */}
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 hover:from-emerald-500 hover:to-emerald-400 text-white font-extrabold text-base sm:text-lg tracking-wide shadow-xl shadow-emerald-950/60 hover:shadow-emerald-900/80 active:scale-95 transition-all duration-200 border border-emerald-400/30"
              >
                <div className="p-1 rounded-lg bg-white/20 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                </div>
                <span>ORDER ON WHATSAPP</span>
              </a>

              {/* Secondary CTA: CALL 08128844540 */}
              <a
                href={`tel:${RESTAURANT_INFO.rawPhone}`}
                className="flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-[#171a23] hover:bg-[#202532] text-neutral-100 hover:text-white font-bold text-base tracking-wide border border-[#2e3447] hover:border-[#424b66] active:scale-95 transition-all duration-200"
              >
                <Phone className="w-5 h-5 text-amber-400" />
                <span>CALL {RESTAURANT_INFO.rawPhone}</span>
              </a>
            </div>

            {/* Subtext reassurance */}
            <p className="text-xs text-neutral-400 flex items-center justify-center lg:justify-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Tap to chat directly with our chef & order desk — no bots, no delays.</span>
            </p>

          </div>

          {/* Right Column: Visual Food Montage & Live Appetite Triggers */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Food Feature Card */}
              <div className="relative rounded-3xl overflow-hidden border border-[#2d3345] bg-[#141720] shadow-2xl shadow-black/80 group">
                <div className="aspect-[4/3] sm:aspect-[16/11] overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1200&q=85"
                    alt="Authentic Nigerian Smoky Jollof Rice with Spiced Grilled Chicken"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  {/* Gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1015] via-transparent to-black/20" />

                  {/* Lekki Specialty Pill */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-xs font-semibold text-amber-300 border border-amber-400/30">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Lekki #1 Favorite</span>
                  </div>

                  {/* Quick WhatsApp price tag */}
                  <div className="absolute top-4 right-4 bg-emerald-600/90 backdrop-blur-md text-white font-bold text-xs px-3 py-1 rounded-full border border-emerald-400/40 flex items-center gap-1">
                    <MessageCircle className="w-3 h-3 fill-white text-emerald-600" />
                    <span>Ready in 20m</span>
                  </div>
                </div>

                {/* Card footer description with quick action */}
                <div className="p-5 space-y-3 bg-gradient-to-b from-[#141720] to-[#0f1118]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-serif text-lg font-bold text-white">Smoky Party Jollof & Grilled Chicken</h3>
                      <p className="text-xs text-neutral-400 line-clamp-1">Served with sweet caramelized dodo & signature spicy pepper sauce</p>
                    </div>
                    <div className="text-right whitespace-nowrap">
                      <span className="text-amber-400 font-bold text-lg">₦6,500</span>
                    </div>
                  </div>

                  <a
                    href={createWhatsAppLink("Hello Savoré Lagos! I’d like to order the Smoky Party Jollof & Grilled Chicken. Please let me know if it’s available and the next steps.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                    <span>Order This on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Floating review card */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 max-w-[260px] p-3.5 rounded-2xl bg-[#181b25]/95 backdrop-blur-lg border border-[#2d3448] shadow-2xl hidden sm:block">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="flex text-amber-400">
                    {'★★★★★'.split('').map((s, i) => (
                      <span key={i} className="text-xs">{s}</span>
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-neutral-200">Amaka O.</span>
                </div>
                <p className="text-xs text-neutral-300 italic leading-snug">
                  “The smoky jollof and grilled chicken arrived hot in under 35 minutes!”
                </p>
              </div>

              {/* Floating Suya badge */}
              <div className="absolute -top-4 -right-2 sm:-right-4 px-3.5 py-2 rounded-2xl bg-[#1e2230]/95 backdrop-blur-lg border border-[#353c52] shadow-xl text-center hidden sm:block">
                <p className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">Charcoal Suya</p>
                <p className="text-xs font-bold text-white">Northern Yaji Spice</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

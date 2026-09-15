import { Flame, Zap, MapPin, Heart } from 'lucide-react';

export default function WhyUs() {
  const reasons = [
    {
      icon: Flame,
      emoji: '🔥',
      title: 'Freshly Prepared',
      description: 'Food prepared fresh for every order. No stale microwave warmups — every grill and pot is fired up just for you.',
      color: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    },
    {
      icon: Zap,
      emoji: '⚡',
      title: 'Easy Ordering',
      description: 'Order through WhatsApp or phone in seconds. No complicated apps, password signups, or checkout friction.',
      color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    },
    {
      icon: MapPin,
      emoji: '📍',
      title: 'Lekki Delivery',
      description: 'Conveniently serving customers around Lekki. Rapid dispatch across Phase 1, Ikate, Victoria Island, and environs.',
      color: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    },
    {
      icon: Heart,
      emoji: '❤️',
      title: 'Made For Your Cravings',
      description: 'From quick meals to full family dinners. Satisfying solo late-night cravings or feeding the whole house with ease.',
      color: 'text-rose-400 bg-rose-500/10 border-rose-500/20',
    },
  ];

  return (
    <section id="why-us" className="py-16 sm:py-20 bg-[#0e1017] border-b border-[#1f2434]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 inline-block mb-3">
            Why Lagos Loves Savoré
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight mb-3">
            Why Customers Choose Us
          </h2>
          <p className="text-sm sm:text-base text-neutral-300">
            We built Savoré Lagos around what matters most: incredible flavor, speed, and zero-stress ordering.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#141723] border border-[#23293c] hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl border ${reason.color}`}>
                    <span className="text-2xl">{reason.emoji}</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-neutral-400">0{idx + 1}</span>
                </div>
                <h3 className="text-lg font-serif font-bold text-white mb-2">
                  {reason.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {reason.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#1c2130] flex items-center gap-1.5 text-[11px] font-semibold text-neutral-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Savoré Standard</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

import { MessageCircle, ChefHat, Sparkles, CheckCircle2 } from 'lucide-react';
import { createWhatsAppLink } from '../types';

export default function CustomOrder() {
  const customOrderMessage =
    "Hello Savoré Lagos! I’d like to make a custom food order. Here’s what I’m looking for:";
  const waUrl = createWhatsAppLink(customOrderMessage);

  const customOrderPerks = [
    'Dietary preferences & spice levels adjusted',
    'Family-size trays of smoky jollof or fried rice',
    'Custom seafood boils, whole fish & suya platters',
    'Office team lunches & corporate meeting boxes',
    'Private celebrations & intimate date night packs',
  ];

  return (
    <section id="custom-order" className="py-16 sm:py-20 bg-gradient-to-b from-[#0e1118] via-[#141824] to-[#0e1118] border-y border-[#212638] relative overflow-hidden">
      {/* Decorative accent glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-br from-[#181c28] to-[#121520] border border-[#2b3348] p-8 sm:p-12 lg:p-14 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
                <ChefHat className="w-3.5 h-3.5" />
                <span>Bespoke Chef Orders</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
                Can’t Find Exactly What You Want?
              </h2>

              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
                Tell us what you have in mind. Birthdays, family dinners, office meals, date nights or just serious hunger — let’s make it happen.
              </p>

              {/* Bullet perks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {customOrderPerks.map((perk, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 hover:from-emerald-500 hover:to-emerald-400 text-white font-extrabold text-base tracking-wide shadow-xl shadow-emerald-950/60 active:scale-95 transition-all border border-emerald-400/30"
                >
                  <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                  <span>REQUEST A CUSTOM ORDER</span>
                </a>
                <span className="text-xs text-neutral-400 text-center sm:text-left">
                  We reply right away with prices & cooking time.
                </span>
              </div>
            </div>

            {/* Right Card Illustration / Quick Pre-fills */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-[#0f121a] border border-[#252c3e] space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#212738]">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> Popular Custom Requests
                  </span>
                  <span className="text-[11px] text-neutral-400">Click to draft</span>
                </div>

                <div className="space-y-2.5">
                  {[
                    {
                      label: 'Office Party Jollof & Asun Platter (10-15 Pax)',
                      msg: 'Hello Savoré Lagos! I would like to inquire about a party platter of smoky jollof rice and asun for an office gathering of 12 people in Lekki.',
                    },
                    {
                      label: 'Birthday Dinner Seafood Boil & Cocktails',
                      msg: 'Hello Savoré Lagos! Planning a birthday dinner. Can you prepare a special jumbo seafood boil with grilled fish, prawns, corn, and Chapman?',
                    },
                    {
                      label: 'Extra Spicy Pepper Soup Pot for Weekend Gathering',
                      msg: 'Hello Savoré Lagos! I would like to order a large family pot of goat meat pepper soup with extra fresh pepper for this weekend.',
                    },
                  ].map((item, idx) => (
                    <a
                      key={idx}
                      href={createWhatsAppLink(item.msg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-3 rounded-xl bg-[#161a25] hover:bg-[#1d2232] border border-[#262c3e] hover:border-amber-500/40 text-xs text-neutral-200 transition-all group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-neutral-100 group-hover:text-amber-400 transition-colors">
                          {item.label}
                        </span>
                        <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 ml-2" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

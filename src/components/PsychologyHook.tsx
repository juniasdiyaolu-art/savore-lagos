import { ArrowRight, MessageCircle } from 'lucide-react';
import { createWhatsAppLink } from '../types';

export default function PsychologyHook() {
  const options = [
    {
      emoji: '🍗',
      title: "I’m Really Hungry",
      subtitle: 'Fast recommendations ready in under 25 minutes',
      message: 'Hi Savoré Lagos! I’m hungry 😋 What do you recommend right now?',
      badge: 'Immediate Orders',
      accentColor: 'border-amber-500/40 hover:border-amber-400 group-hover:bg-amber-500/10',
    },
    {
      emoji: '🍽️',
      title: 'I Know What I Want',
      subtitle: 'Send your exact dish & get confirmed right away',
      message: 'Hi Savoré Lagos! I already know what I want to order. Please help me place my order.',
      badge: 'Direct Checkout',
      accentColor: 'border-emerald-500/40 hover:border-emerald-400 group-hover:bg-emerald-500/10',
    },
    {
      emoji: '🤔',
      title: 'Help Me Choose',
      subtitle: 'Tell us your mood (spicy, comfort, seafood, grill)',
      message: 'Hi Savoré Lagos! I’m not sure what to order. What do you recommend?',
      badge: 'Chef Concierge',
      accentColor: 'border-blue-500/40 hover:border-blue-400 group-hover:bg-blue-500/10',
    },
  ];

  return (
    <section id="psychology-hook" className="py-16 sm:py-20 bg-[#0d0f15] border-b border-[#1f2330]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-3">
            <span>⚡ Zero Stress Decision Making</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight mb-4">
            Good Food Shouldn’t Require Too Much Thinking.
          </h2>
          <p className="text-base sm:text-lg text-neutral-300">
            Tell us what you’re craving. We’ll help you find something you’ll love.
          </p>
        </div>

        {/* 3 Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {options.map((opt, idx) => {
            const waLink = createWhatsAppLink(opt.message);
            return (
              <a
                key={idx}
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex flex-col justify-between p-7 rounded-2xl bg-[#141620] border transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-2xl ${opt.accentColor}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl filter drop-shadow-md">{opt.emoji}</span>
                    <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-neutral-800 text-neutral-300 border border-neutral-700">
                      {opt.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {opt.title}
                  </h3>
                  <p className="text-sm text-neutral-400 mb-6 leading-relaxed">
                    {opt.subtitle}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#232738] flex items-center justify-between text-xs font-bold text-emerald-400 group-hover:text-emerald-300">
                  <span className="flex items-center gap-1.5">
                    <MessageCircle className="w-4 h-4 fill-emerald-400 text-[#141620]" />
                    Chat on WhatsApp
                  </span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            );
          })}
        </div>

        {/* Trust prompt */}
        <div className="mt-8 text-center text-xs text-neutral-400">
          💡 Our kitchen staff replies on WhatsApp within 2–3 minutes with today's hot pots and instant availability.
        </div>

      </div>
    </section>
  );
}

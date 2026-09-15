import { ArrowRight, BookOpen, MessageCircle, Utensils } from 'lucide-react';
import { createWhatsAppLink } from '../types';

export default function OrderFlow() {
  const steps = [
    {
      num: '01',
      icon: BookOpen,
      title: 'Choose Your Food',
      description: "Browse the menu and find what you're craving — from smoky jollof and wings to fresh seafood and grills.",
    },
    {
      num: '02',
      icon: MessageCircle,
      title: 'Message Us',
      description: "Tap WhatsApp and tell us what you'd like. Ask questions, specify portion sizes or request custom prep.",
    },
    {
      num: '03',
      icon: Utensils,
      title: 'Enjoy Your Meal',
      description: "We'll confirm your order and guide you through the next steps with real-time delivery tracking right to your door.",
    },
  ];

  const startOrderUrl = createWhatsAppLink(
    "Hello Savoré Lagos! I'm ready to place an order. Please send me your specials and current delivery timing."
  );

  return (
    <section className="py-16 sm:py-20 bg-[#0b0d13] border-b border-[#1c202e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 inline-block mb-3">
            Fast & Stress-Free
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight mb-3">
            How Ordering Works
          </h2>
          <p className="text-sm sm:text-base text-neutral-300">
            No endless apps or complicated checkouts. Just simple, direct communication.
          </p>
        </div>

        {/* 3 Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative p-7 rounded-2xl bg-[#131622] border border-[#22283a] shadow-lg flex flex-col justify-between group hover:border-amber-500/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl font-bold text-amber-400">
                      {step.num}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-[#1a1e2d] border border-[#2b334a] flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-white mb-2.5">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1e2334] text-[11px] text-neutral-400 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>Step {idx + 1} of 3</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Big CTA */}
        <div className="mt-12 text-center">
          <a
            href={startOrderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 hover:from-emerald-500 hover:to-emerald-400 text-white font-extrabold text-base sm:text-lg tracking-wide shadow-xl shadow-emerald-950/60 active:scale-95 transition-all border border-emerald-400/30"
          >
            <span>START MY ORDER</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
}

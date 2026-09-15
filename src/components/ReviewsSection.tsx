import { Star, CheckCircle2, Quote } from 'lucide-react';
import { CUSTOMER_REVIEWS } from '../data/reviewsData';

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-[#0d0f16] border-b border-[#1f2434] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 inline-block mb-3">
            Real Lekki Foodies
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight mb-3">
            Loved By Lagos Food Lovers
          </h2>
          <p className="text-sm sm:text-base text-neutral-300">
            See what our customers across Lekki, Victoria Island, and Ikoyi have to say about ordering with us.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CUSTOMER_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="p-6 rounded-2xl bg-[#131622] border border-[#23293c] hover:border-amber-500/30 transition-all flex flex-col justify-between shadow-md"
            >
              <div>
                {/* Header with stars & quote */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-neutral-700" />
                </div>

                {/* Review body */}
                <p className="text-sm text-neutral-200 leading-relaxed italic mb-6">
                  “{review.text}”
                </p>
              </div>

              {/* Author info & favorite dish */}
              <div className="pt-4 border-t border-[#1e2334] space-y-2">
                <div className="flex items-center gap-3">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-10 h-10 rounded-full object-cover border border-amber-500/30"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-bold text-sm text-white">{review.name}</h4>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" title="Verified Customer" />
                    </div>
                    <p className="text-[11px] text-neutral-400">{review.location}</p>
                  </div>
                </div>

                <div className="text-[11px] text-neutral-400 bg-[#0f1118] px-3 py-1.5 rounded-lg border border-[#1b1f2b] flex items-center justify-between">
                  <span className="text-neutral-400 font-medium">Favorite:</span>
                  <span className="text-amber-400/90 font-medium truncate ml-2">{review.favoriteDish}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Aggregate trust bar */}
        <div className="mt-12 p-5 rounded-2xl bg-[#131622] border border-[#242a3e] max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="text-3xl font-serif font-bold text-amber-400">4.9 / 5</div>
            <div>
              <div className="flex text-amber-400 text-sm">
                {'★★★★★'.split('').map((s, i) => (
                  <span key={i}>{s}</span>
                ))}
              </div>
              <p className="text-xs text-neutral-400">Based on 1,400+ WhatsApp & dine-in orders</p>
            </div>
          </div>
          <a
            href="#menu"
            className="px-4 py-2 rounded-xl bg-[#1c2132] hover:bg-[#252b40] text-neutral-200 text-xs font-semibold transition-colors border border-[#2b334a]"
          >
            Taste For Yourself →
          </a>
        </div>

      </div>
    </section>
  );
}

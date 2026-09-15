import { useState, FormEvent } from 'react';
import { Send, MessageCircle, Sparkles, CheckCircle, ExternalLink } from 'lucide-react';
import { RESTAURANT_INFO, createWhatsAppLink } from '../types';

export default function OrderForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    order: '',
    quantity: '1',
    date: new Date().toISOString().split('T')[0],
    time: 'Immediately (ASAP)',
    fulfillment: 'Delivery' as 'Delivery' | 'Pickup',
    address: '',
    message: '',
  });

  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);
  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const formattedMessage = `Hello Savoré Lagos!

I'd like to place an order.

Name: ${formData.name || 'Not specified'}
Phone: ${formData.phone || 'Not specified'}
Order: ${formData.order || 'Not specified'}
Quantity: ${formData.quantity || '1'}
Date: ${formData.date || 'Today'}
Time: ${formData.time || 'ASAP'}
Delivery/Pickup: ${formData.fulfillment}${formData.fulfillment === 'Delivery' && formData.address ? ` (${formData.address})` : ''}
Additional message: ${formData.message || 'None'}

Please confirm availability and the next steps.`;

    const waUrl = createWhatsAppLink(formattedMessage);
    setSubmittedMessage(formattedMessage);
    setSubmittedUrl(waUrl);

    // Attempt to open WhatsApp directly while keeping fallback accessible
    try {
      if (typeof window !== 'undefined') {
        window.open(waUrl, '_blank', 'noopener,noreferrer');
      }
    } catch {
      // Fallback is rendered in UI below
    }
  };

  return (
    <section id="order-form" className="py-16 sm:py-24 bg-[#0d0f17] border-b border-[#1f2434] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3 h-3" />
            <span>Direct WhatsApp Order Generator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Send Your Order Details
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 mt-2 max-w-lg mx-auto">
            Fill in your cravings below. This generates your tailored order message and connects you to our Lekki kitchen on WhatsApp.
          </p>
        </div>

        {/* Form Container */}
        <div className="p-6 sm:p-10 rounded-3xl bg-[#131622] border border-[#242b3e] shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                  Your Full Name <span className="text-amber-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Tunde Adeleke"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#181b28] border border-[#2c3349] text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                  Phone / WhatsApp Number <span className="text-amber-400">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g., 08012345678"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#181b28] border border-[#2c3349] text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
            </div>

            {/* What would you like to order? */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                What would you like to order? <span className="text-amber-400">*</span>
              </label>
              <textarea
                required
                rows={2}
                placeholder="e.g., 2 plates of Smoky Party Jollof with Grilled Chicken, 1 Suya Platter, and 2 chilled Chapmans"
                value={formData.order}
                onChange={(e) => setFormData({ ...formData, order: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#181b28] border border-[#2c3349] text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-amber-500 transition-colors resize-y"
              />
            </div>

            {/* Quantity, Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {/* Quantity */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                  Total Servings / Quantity
                </label>
                <input
                  type="text"
                  placeholder="e.g., 2 portions, 1 tray"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#181b28] border border-[#2c3349] text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              {/* Preferred Date */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#181b28] border border-[#2c3349] text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              {/* Preferred Time */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                  Preferred Time
                </label>
                <input
                  type="text"
                  placeholder="e.g., ASAP (Now) or 7:30 PM"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#181b28] border border-[#2c3349] text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
            </div>

            {/* Delivery or Pickup */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                Order Type (Delivery or Pickup)
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, fulfillment: 'Delivery' })}
                  className={`py-3 px-4 rounded-xl text-sm font-semibold border text-center transition-all ${
                    formData.fulfillment === 'Delivery'
                      ? 'bg-amber-500 text-black border-amber-400 font-bold'
                      : 'bg-[#181b28] text-neutral-300 border-[#2c3349] hover:border-neutral-500'
                  }`}
                >
                  🚴 Lekki Delivery
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, fulfillment: 'Pickup' })}
                  className={`py-3 px-4 rounded-xl text-sm font-semibold border text-center transition-all ${
                    formData.fulfillment === 'Pickup'
                      ? 'bg-amber-500 text-black border-amber-400 font-bold'
                      : 'bg-[#181b28] text-neutral-300 border-[#2c3349] hover:border-neutral-500'
                  }`}
                >
                  🛍️ Restaurant Pickup
                </button>
              </div>

              {formData.fulfillment === 'Delivery' && (
                <div className="mt-3">
                  <input
                    type="text"
                    placeholder="Enter your delivery address / street in Lekki..."
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#181b28] border border-[#2c3349] text-white placeholder-neutral-500 text-xs sm:text-sm focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
              )}
            </div>

            {/* Additional Message */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                Additional Instructions / Dietary Preferences
              </label>
              <input
                type="text"
                placeholder="e.g., Mild pepper, extra cutlery, ring doorbell on arrival"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#181b28] border border-[#2c3349] text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-amber-500 transition-colors"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 hover:from-emerald-500 hover:to-emerald-400 text-white font-extrabold text-base sm:text-lg tracking-wide shadow-xl shadow-emerald-950/60 active:scale-95 transition-all border border-emerald-400/30 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                <span>SEND ORDER REQUEST</span>
              </button>
            </div>

            <p className="text-[11px] text-neutral-400 text-center">
              ⚠️ Direct WhatsApp handoff: Clicking submit compiles your order details and opens WhatsApp with restaurant desk <strong className="text-amber-400">{RESTAURANT_INFO.rawPhone}</strong>.
            </p>

          </form>

          {/* Submission Feedback Modal/Drawer */}
          {submittedMessage && submittedUrl && (
            <div className="mt-6 p-5 rounded-2xl bg-[#18211b] border border-emerald-500/40 text-left space-y-3 animate-in fade-in">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <CheckCircle className="w-5 h-5" />
                <span>Order Message Compiled Successfully!</span>
              </div>
              <p className="text-xs text-neutral-300">
                If WhatsApp did not automatically launch in a new tab, click the green button below:
              </p>
              <div className="p-3 rounded-xl bg-black/40 border border-[#28392d] text-xs font-mono text-neutral-300 whitespace-pre-line max-h-36 overflow-y-auto">
                {submittedMessage}
              </div>
              <a
                href={submittedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Open WhatsApp Now ({RESTAURANT_INFO.displayPhone})</span>
              </a>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}

import { useState, useMemo } from 'react';
import { MessageCircle, Search, Sparkles, Flame, Clock, Plus, Check } from 'lucide-react';
import { MenuItem, MenuCategory, createWhatsAppLink, formatNaira } from '../types';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menuData';

export default function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDishesForBag, setSelectedDishesForBag] = useState<MenuItem[]>([]);
  const [bagNotification, setBagNotification] = useState<string | null>(null);

  // Filtered menu items
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Handle single item order directly via WhatsApp
  const handleSingleOrder = (item: MenuItem) => {
    const message = `Hello Savoré Lagos! I’d like to order the ${item.name} (${formatNaira(item.price)}). Please let me know if it’s available and the next steps.`;
    const url = createWhatsAppLink(message);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Toggle bag item for multi-item quick WhatsApp order
  const toggleBagItem = (item: MenuItem) => {
    const exists = selectedDishesForBag.some((i) => i.id === item.id);
    if (exists) {
      setSelectedDishesForBag(selectedDishesForBag.filter((i) => i.id !== item.id));
    } else {
      setSelectedDishesForBag([...selectedDishesForBag, item]);
      setBagNotification(`Added ${item.name} to your WhatsApp order bag`);
      setTimeout(() => setBagNotification(null), 3000);
    }
  };

  // Generate multi-item WhatsApp link
  const generateBagWhatsAppUrl = () => {
    if (selectedDishesForBag.length === 0) return '';
    const itemsList = selectedDishesForBag
      .map((item, idx) => `${idx + 1}. ${item.name} - ${formatNaira(item.price)}`)
      .join('\n');
    const total = selectedDishesForBag.reduce((acc, curr) => acc + curr.price, 0);

    const message = `Hello Savoré Lagos! I would like to order the following meals:\n\n${itemsList}\n\nEstimated Total: ${formatNaira(
      total
    )}\n\nPlease confirm availability and delivery timeframe to Lekki.`;

    return createWhatsAppLink(message);
  };

  return (
    <section id="menu" className="py-16 sm:py-24 bg-[#0a0b0f] relative">
      {/* Decorative top anchor marker */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#1c202d]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-2">
              <Sparkles className="w-3 h-3" />
              <span>Fresh Daily Menu</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
              Explore Our Food Menu
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl">
              Authentic Lagos recipes, sizzling charcoal grills, burgers, seafood, and drinks. Prepared fresh upon every order.
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search jollof, suya, pasta, wings..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#141722] border border-[#262c3e] text-neutral-100 placeholder-neutral-500 text-sm focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>
        </div>

        {/* Category Tabs (Scrollable on Mobile) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none no-scrollbar">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
              selectedCategory === 'All'
                ? 'bg-amber-500 text-black shadow-md shadow-amber-900/30 font-bold'
                : 'bg-[#151824] text-neutral-300 hover:text-white hover:bg-[#1f2434] border border-[#262c3e]'
            }`}
          >
            All Dishes ({MENU_ITEMS.length})
          </button>
          {MENU_CATEGORIES.map((cat) => {
            const count = MENU_ITEMS.filter((i) => i.category === cat).length;
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-amber-500 text-black shadow-md shadow-amber-900/30 font-bold'
                    : 'bg-[#151824] text-neutral-300 hover:text-white hover:bg-[#1f2434] border border-[#262c3e]'
                }`}
              >
                {cat} <span className="opacity-70 text-[11px]">({count})</span>
              </button>
            );
          })}
        </div>

        {/* Multi-Item Quick Bag Banner (if user selected dishes) */}
        {selectedDishesForBag.length > 0 && (
          <div className="mb-8 p-4 rounded-2xl bg-gradient-to-r from-[#17202d] via-[#1b2638] to-[#17202d] border border-emerald-500/40 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 animate-in fade-in">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-bold text-lg">
                {selectedDishesForBag.length}
              </div>
              <div>
                <p className="text-white font-bold text-sm">
                  {selectedDishesForBag.length} items in your WhatsApp order list
                </p>
                <p className="text-xs text-neutral-300">
                  Total: <span className="text-amber-400 font-bold">{formatNaira(selectedDishesForBag.reduce((a, b) => a + b.price, 0))}</span> • Send all items in one WhatsApp message
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <button
                onClick={() => setSelectedDishesForBag([])}
                className="px-3 py-2 text-xs font-semibold text-neutral-400 hover:text-white rounded-lg"
              >
                Clear
              </button>
              <a
                href={generateBagWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                <span>Send Combo to WhatsApp</span>
              </a>
            </div>
          </div>
        )}

        {/* Transient Bag Toast */}
        {bagNotification && (
          <div className="fixed top-24 right-4 z-50 bg-[#16202c] border border-emerald-500/50 text-white px-4 py-2.5 rounded-xl shadow-2xl text-xs flex items-center gap-2 animate-bounce">
            <Check className="w-4 h-4 text-emerald-400" />
            <span>{bagNotification}</span>
          </div>
        )}

        {/* Menu Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#131620] rounded-2xl border border-[#222736]">
            <p className="text-neutral-400 text-base mb-3">No dishes found matching your filter.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-xl bg-amber-500 text-black text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => {
              const isAddedToBag = selectedDishesForBag.some((i) => i.id === item.id);
              const waUrl = createWhatsAppLink(
                `Hello Savoré Lagos! I’d like to order the ${item.name} (${formatNaira(item.price)}). Please let me know if it’s available and the next steps.`
              );

              return (
                <div
                  key={item.id}
                  className="group flex flex-col justify-between rounded-2xl bg-[#12151f] border border-[#202535] hover:border-[#353d56] transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-2xl overflow-hidden"
                >
                  {/* Food Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#12151f] via-transparent to-transparent opacity-80" />

                    {/* Tag Badge */}
                    {item.tag && (
                      <span
                        className={`absolute top-3 left-3 text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider backdrop-blur-md border shadow-sm ${
                          item.tag === 'Bestseller'
                            ? 'bg-amber-500/90 text-black border-amber-400'
                            : item.tag === 'Spicy'
                            ? 'bg-red-600/90 text-white border-red-400 flex items-center gap-1'
                            : item.tag === 'Chef Special'
                            ? 'bg-purple-600/90 text-white border-purple-400'
                            : 'bg-emerald-600/90 text-white border-emerald-400'
                        }`}
                      >
                        {item.tag === 'Spicy' && <Flame className="w-3 h-3 inline" />}
                        {item.tag}
                      </span>
                    )}

                    {/* Prep time chip */}
                    {item.prepTime && (
                      <span className="absolute top-3 right-3 text-[11px] font-medium px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-sm text-neutral-300 border border-white/10 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-amber-400" />
                        {item.prepTime}
                      </span>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <h3 className="font-serif font-bold text-lg text-white group-hover:text-amber-400 transition-colors">
                          {item.name}
                        </h3>
                      </div>
                      
                      <p className="text-xs sm:text-sm text-neutral-400 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>

                      {item.portion && (
                        <p className="text-[11px] text-neutral-500 mt-2">
                          🍽️ Portion: <span className="text-neutral-300">{item.portion}</span>
                        </p>
                      )}
                    </div>

                    {/* Price and Action Buttons */}
                    <div className="pt-3 border-t border-[#1e2332] space-y-2.5">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-[10px] text-neutral-400 uppercase tracking-wider block">Price</span>
                          <span className="text-xl font-bold text-amber-400 font-sans">
                            {formatNaira(item.price)}
                          </span>
                        </div>

                        {/* Quick Add / Combo Button */}
                        <button
                          type="button"
                          onClick={() => toggleBagItem(item)}
                          className={`text-xs px-2.5 py-1.5 rounded-lg border font-medium flex items-center gap-1 transition-colors ${
                            isAddedToBag
                              ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400'
                              : 'bg-[#191c28] border-[#293044] text-neutral-300 hover:text-white'
                          }`}
                          title={isAddedToBag ? 'Remove from combo' : 'Add to multi-dish order'}
                        >
                          {isAddedToBag ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              <span>Added</span>
                            </>
                          ) : (
                            <>
                              <Plus className="w-3.5 h-3.5" />
                              <span>Combo</span>
                            </>
                          )}
                        </button>
                      </div>

                      {/* Primary “Order This” Button (opens WhatsApp with pre-filled message) */}
                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-xs sm:text-sm active:scale-95 transition-all shadow-md shadow-emerald-950/30"
                      >
                        <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                        <span>Order This on WhatsApp</span>
                      </a>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}

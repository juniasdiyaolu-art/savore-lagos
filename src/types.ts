export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  description: string;
  price: number;
  image: string;
  tag?: 'Bestseller' | 'Chef Special' | 'Spicy' | 'Popular' | 'New';
  portion?: string;
  prepTime?: string;
}

export type MenuCategory =
  | 'Nigerian Favorites'
  | 'Rice & Pasta'
  | 'Grills'
  | 'Burgers & Fast Food'
  | 'Chicken'
  | 'Seafood'
  | 'Sides'
  | 'Drinks'
  | 'Desserts';

export interface CustomerReview {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
  favoriteDish: string;
  avatar: string;
}

export const RESTAURANT_INFO = {
  name: 'Savoré Lagos',
  tagline: 'Good food. Good people. Good moments.',
  rawPhone: '08128844540',
  internationalPhone: '2348128844540',
  displayPhone: '0812 884 4540',
  address: 'Plot 18, Admiralty Way, Lekki Phase 1, Lagos, Nigeria',
  shortLocation: 'Lekki, Lagos',
  mapsQuery: 'Admiralty+Way+Lekki+Phase+1+Lagos+Nigeria',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Admiralty+Way+Lekki+Phase+1+Lagos+Nigeria',
  hours: {
    weekdays: '11:00 AM – 11:00 PM',
    weekends: '11:00 AM – Midnight',
  },
  deliveryZones: 'Lekki Phase 1, Ikate, Victoria Island, Ikoyi, Oniru, Chevron & Ajah',
};

export function createWhatsAppLink(message: string): string {
  return `https://wa.me/${RESTAURANT_INFO.internationalPhone}?text=${encodeURIComponent(message.trim())}`;
}

export function formatNaira(amount: number): string {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(amount);
}

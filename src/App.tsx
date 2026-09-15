import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickActionBar from './components/QuickActionBar';
import PsychologyHook from './components/PsychologyHook';
import MenuSection from './components/MenuSection';
import CustomOrder from './components/CustomOrder';
import ConversationSection from './components/ConversationSection';
import WhyUs from './components/WhyUs';
import OrderFlow from './components/OrderFlow';
import ReviewsSection from './components/ReviewsSection';
import TableReservation from './components/TableReservation';
import LocationSection from './components/LocationSection';
import OrderForm from './components/OrderForm';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import MobileBottomNav from './components/MobileBottomNav';

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-[#0b0c10] text-[#f3f4f6] selection:bg-amber-500 selection:text-black pb-20 lg:pb-0">
      {/* Primary Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Quick Action Bar */}
        <QuickActionBar />

        {/* 3. Customer Psychology Hook */}
        <PsychologyHook />

        {/* 4. Complete Food Menu */}
        <MenuSection />

        {/* 5. Custom Order Section */}
        <CustomOrder />

        {/* 6. Human Conversation ("Talk To Someone, Not A Robot") */}
        <ConversationSection />

        {/* 7. Why Customers Choose Us */}
        <WhyUs />

        {/* 8. Simple 3-Step Order Flow */}
        <OrderFlow />

        {/* 9. Social Proof / Customer Testimonials */}
        <ReviewsSection />

        {/* 10. Table Reservation & Dine-In */}
        <TableReservation />

        {/* 11. Location & Directions */}
        <LocationSection />

        {/* 12. Frontend Order Form */}
        <OrderForm />

        {/* 13. Contact Section ("Hungry? Let's Talk.") */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Mobile Fixed Bottom Navigation Bar */}
      <MobileBottomNav />
    </div>
  );
}

import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import CourseLevels from "@/components/course-levels";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import PaymentModal from "@/components/payment-modal";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import { useState } from "react";

export default function Home() {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");

  const handleLevelSelect = (level: string, price: string) => {
    setSelectedLevel(level);
    setSelectedPrice(price);
    setIsPaymentModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsPaymentModalOpen(false);
    setSelectedLevel("");
    setSelectedPrice("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <CourseLevels onLevelSelect={handleLevelSelect} />
      <Features />
      <Testimonials />
      <ContactSection />
      <Footer />
      
      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={handleCloseModal}
        selectedLevel={selectedLevel}
        selectedPrice={selectedPrice}
      />
    </div>
  );
}

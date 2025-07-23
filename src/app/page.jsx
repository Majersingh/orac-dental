"use client";

import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import TimedPopup from "./components/TimedPopup";
import WhyUsSection from "./components/WhyUsSection";
import SpecialOfferSection from "./components/SpecialOfferSection";
import TeamSection from "./components/TeamSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FinalImageSection from "./components/FinalImageSection";
import AppointmentModal from "./components/AppointmentModal";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import BlogList from './components/bloglist'
import { useState } from "react";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="bg-white text-[#d72660] font-sans">
      <HeroSection onBook={() => setModalOpen(true)} />
      <ServicesSection />
      <WhyUsSection />
      <BlogList/>
      <SpecialOfferSection onBook={() => setModalOpen(true)} />
      <TeamSection />
      <TestimonialsSection />
      <FinalImageSection />
      <ContactForm />
      <AboutSection />
      <Footer />
      <TimedPopup onBook={() => setModalOpen(true)} />
      <AppointmentModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

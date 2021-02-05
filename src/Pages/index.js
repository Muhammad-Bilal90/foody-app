import React from "react";
//css
import "../assets/css/main.css";
//components
import LaningSection from "../Components/LandingSection";
import ServicesSection from "../components/ServicesSection";
import ContactSection from "../components/ContactSection";
import TestimonialSection from "../components/TestimonialSection";

const Index = () => {
  return (
    <div>
      <LaningSection />
      <ServicesSection />
      <ContactSection />
      <TestimonialSection />
    </div>
  );
};

export default Index;
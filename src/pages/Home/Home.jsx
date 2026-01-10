import React from "react";
// Importación corregida: busca en la subcarpeta components de Home
import Hero from "./components/Hero"; 

// CSS: Tienes una carpeta global de CSS, la ruta es correcta
import "../../css/Home.module.css";

import Information from "./components/Information";
import Services from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import FAQSection from "./components/FAQSection";
import CTASection from "./components/CTASection";
// Lucide React (Solo si los usas aquí, si no, bórralos de este archivo)
import { Zap, Monitor, BarChart3, Layers } from "lucide-react";

const Home = () => {
  return (
    <div className="home-container">
      <Hero />
      <Information />
      <Services />
      <AboutSection />
      <FAQSection />
      <CTASection />
      
    </div>
  );
};

export default Home;
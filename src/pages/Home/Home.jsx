import React from "react";
import Seo from "../../components/Seo";
// Importación corregida: busca en la subcarpeta components de Home
import Hero from "./components/Hero";

// CSS: Tienes una carpeta global de CSS, la ruta es correcta
import "../../css/Home.module.css";

import Information from "./components/Information";
import Services from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import FAQSection from "./components/FAQSection";
import CTASection from "./components/CTASection";
import HeroVideo from "./components/HeroVideo";
// Lucide React (Solo si los usas aquí, si no, bórralos de este archivo)
import { Zap, Monitor, BarChart3, Layers } from "lucide-react";

const Home = () => {
  return (
    <div className="home-container">
      <Seo
        title="Inicio"
        description="Agencia de desarrollo web profesional. Creamos páginas web de alta calidad, rápidas y optimizadas para SEO."
        url="https://digitalsysweb.com/"
        image="https://digitalsysweb.com/logo2.svg"
      />
      <Hero />
      <HeroVideo />
      <Information />
      <Services />
      <AboutSection />
      <FAQSection />
      <CTASection />

    </div>
  );
};

export default Home;
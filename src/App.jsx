import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Componentes Globales
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppWidget from "./components/WhatsAppWidget";
import CookieBanner from "./components/CookieBanner"; // Importamos el banner

// Páginas Principales
import Home from "./pages/Home/Home";
import About from "./pages/About/About"; // Asegúrate de tener este archivo
import Services from "./pages/Services/Services";
import QuotePage from "./pages/QuotePage/QuotePage";
import Contact from "./pages/ContactSection/Contact";
import Page404 from "./pages/Page404/Page404";

// Páginas Legales (Importante para el SEO y el link del Banner)
import Cookies from "./pages/Cookies/Cookies"; 
import Privacy from "./pages/Privacy/Privacy";
import Terms from "./pages/Terms/Terms";

function App() {
  return (
    <Router>
      <Header />

      <main>
        <Routes>
          {/* Rutas Principales */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote" element={<QuotePage />} />
          
          {/* Rutas Legales */}
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          
          {/* Error 404 */}
          <Route path="*" element={<Page404 />} />
        </Routes>
      </main>

      <Footer />
      
      {/* Widgets Globales */}
      <CookieBanner /> 
      <WhatsAppWidget />
    </Router>
  );
}

export default App;
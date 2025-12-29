import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppWidget from "./components/WhatsappWidget";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import QuotePage from "./pages/QuotePage";
import ContactSection from "./pages/ContactSection";
// Componentes temporales si no los tienes creados aún:
const Contact = () => <div style={{paddingTop: '100px'}}>Página de Contacto</div>;
const Quote = () => <div style={{paddingTop: '100px'}}>Página de Cotización</div>;

function App() {
  return (
    <Router>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/quote" element={<QuotePage />} />
          
        </Routes>
      </main>

      <Footer />
      <WhatsAppWidget />
    </Router>
  );
}

export default App;
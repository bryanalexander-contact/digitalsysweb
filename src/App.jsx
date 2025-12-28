import React from "react";
// 1. Importamos BrowserRouter
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppWidget from "./components/WhatsappWidget";
// Importa tus páginas
import Home from "./pages/Home";
import About from "./pages/About.jsx";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";

function App() {
  return (
    // 2. Envolvemos todo el contenido con <Router>
    <Router>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </main>

      <Footer />
      {/* 4. El Widget de WhatsApp (fuera del flujo normal para que flote) */}
      <WhatsAppWidget />
    </Router>
  );
}

export default App;
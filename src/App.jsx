import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppWidget from "./components/WhatsAppWidget";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import Services from "./pages/Services/Services";
import QuotePage from "./pages/QuotePage/QuotePage";
import Contact from "./pages/ContactSection/Contact";
import Page404 from "./pages/Page404/Page404";



function App() {
  return (
    <Router>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote" element={<QuotePage />} />
          
          <Route path="*" element={<Page404 />} />
          
        </Routes>
      </main>

      <Footer />
      <WhatsAppWidget />
    </Router>
  );
}

export default App;
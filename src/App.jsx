import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Componentes Globales
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppWidget from "./components/WhatsAppWidget";
import CookieBanner from "./components/CookieBanner"; // Importamos el banner

// Páginas Principales
const Home = React.lazy(() => import("./pages/Home/Home"));
const About = React.lazy(() => import("./pages/About/About"));
const Services = React.lazy(() => import("./pages/Services/Services"));
const QuotePage = React.lazy(() => import("./pages/QuotePage/QuotePage"));
const Contact = React.lazy(() => import("./pages/ContactSection/Contact"));
const Page404 = React.lazy(() => import("./pages/Page404/Page404"));

// Páginas Legales
const Cookies = React.lazy(() => import("./pages/Cookies/Cookies"));
const Privacy = React.lazy(() => import("./pages/Privacy/Privacy"));
const Terms = React.lazy(() => import("./pages/Terms/Terms"));

function App() {
  return (
    <Router>
      <Header />

      <main>
        <React.Suspense fallback={<div style={{ height: '100vh', backgroundColor: '#fff' }}></div>}>
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
        </React.Suspense>
      </main>

      <Footer />

      {/* Widgets Globales */}
      <CookieBanner />
      <WhatsAppWidget />
    </Router>
  );
}

export default App;
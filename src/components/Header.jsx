import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importante para navegación interna
import '../css/header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
      {/* Usamos Link para volver al Home */}
      <Link to="/" className="logo">
        DIGITAL SYS
      </Link>

      <nav className="nav-links">
        <Link to="/" className="nav-link">Inicio</Link>
        <Link to="/about" className="nav-link">Sobre nosotros</Link>
        <Link to="/services" className="nav-link">Servicios</Link>
        {/* Si no tienes una página de contacto creada, puedes apuntar a /contact o usar un ancla si está en el home */}
        <Link to="/contact" className="nav-link">Contacto</Link>
        <Link to="/quote" className="btn-quote">Cotizar</Link>
      </nav>
    </header>
  );
};

export default Header;
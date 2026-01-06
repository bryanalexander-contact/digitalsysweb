import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/header.module.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
      {/* El logo apunta a la raíz de public directamente con /logo.svg */}
      <Link to="/" className="logo-container">
        <img 
          src="/logo2.svg" 
          alt="DigitalSysweb Logo" 
          className="header-logo" 
        />
      </Link>

      <nav className="nav-links">
        <Link to="/" className="nav-link">Inicio</Link>
        <Link to="/about" className="nav-link">Sobre nosotros</Link>
        <Link to="/services" className="nav-link">Servicios</Link>
        <Link to="/contact" className="nav-link">Contacto</Link>
        <Link to="/quote" className="btn-quote">Cotizar</Link>
      </nav>
    </header>
  );
};

export default Header;
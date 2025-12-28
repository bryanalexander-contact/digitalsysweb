import React, { useState, useEffect } from 'react';
import '../css/header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Si el scroll baja más de 50px, cambiamos el estado
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Limpiamos el evento al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
      <a href="/" className="logo">
        TU MARCA
      </a>

      <nav className="nav-links">
        <a href="#inicio" className="nav-link">Inicio</a>
        <a href="#sobre-nosotros" className="nav-link">Sobre nosotros</a>
        <a href="#servicios" className="nav-link">Servicios</a>
        <a href="#contacto" className="nav-link">Contacto</a>
        <a href="#cotizar" className="btn-quote">Cotizar</a>
      </nav>
    </header>
  );
};

export default Header;
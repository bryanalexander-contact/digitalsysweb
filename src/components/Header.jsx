import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../css/header.module.css';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setIsMenuOpen(false);
      } else {
        setIsVisible(true);
      }
      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true }); // Mejora rendimiento scroll
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const headerClass = `
    ${styles.mainHeader} 
    ${isScrolled ? styles.scrolled : ''} 
    ${!isVisible ? styles.hidden : ''}
  `;

  return (
    <header className={headerClass} role="banner">
      {/* SEO: El logo debe llevar al inicio y tener un alt descriptivo con palabras clave */}
      <Link to="/" className={styles.logoContainer} aria-label="Digital Sys Web - Inicio">
        <img 
          src="/logo2.svg" 
          alt="Digital Sys Web Logo - Agencia de Diseño y Desarrollo Web" 
          className={styles.headerLogo} 
          width="180" 
          height="45"
        />
      </Link>

      {/* SEO: Navegación semántica con roles de accesibilidad */}
      <nav 
        className={`${styles.navLinks} ${isMenuOpen ? styles.navActive : ''}`}
        aria-label="Navegación principal"
      >
        <Link to="/" className={`${styles.navLink} ${location.pathname === '/' ? styles.active : ''}`} onClick={() => setIsMenuOpen(false)}>Inicio</Link>
        <Link to="/services" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Servicios</Link>
        <Link to="/quote" className={styles.btnQuote} onClick={() => setIsMenuOpen(false)}>Cotizar Proyecto</Link>
        
        <Link to="/contact" className={`${styles.btnContactHeader} ${styles.desktopOnly}`} onClick={() => setIsMenuOpen(false)}>
          Contacto
        </Link>
      </nav>

      <div className={styles.headerActions}>
        <Link to="/contact" className={`${styles.btnContactHeader} ${styles.mobileOnly}`} aria-label="Ir a contacto">
          Contacto
        </Link>
        {/* ACCESIBILIDAD: Botón hamburguesa con labels para lectores de pantalla */}
        <button 
          className={styles.hamburger} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Abrir menú de navegación"
        >
          <span className={isMenuOpen ? styles.barOpen : ''}></span>
          <span className={isMenuOpen ? styles.barOpen : ''}></span>
          <span className={isMenuOpen ? styles.barOpen : ''}></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
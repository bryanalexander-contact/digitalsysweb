import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/header.module.css';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Lógica para aparecer/desaparecer
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setIsMenuOpen(false);
      } else {
        setIsVisible(true);
      }
      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const headerClass = `
    ${styles.mainHeader} 
    ${isScrolled ? styles.scrolled : ''} 
    ${!isVisible ? styles.hidden : ''}
  `;

  return (
    <header className={headerClass}>
      <Link to="/" className={styles.logoContainer}>
        <img src="/logo2.svg" alt="Logo" className={styles.headerLogo} />
      </Link>

      <nav className={`${styles.navLinks} ${isMenuOpen ? styles.navActive : ''}`}>
        <Link to="/" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Inicio</Link>
        <Link to="/services" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Servicios</Link>
        <Link to="/quote" className={styles.btnQuote} onClick={() => setIsMenuOpen(false)}>Cotizar</Link>
        
        {/* Contacto Desktop */}
        <Link to="/contact" className={`${styles.btnContactHeader} ${styles.desktopOnly}`} onClick={() => setIsMenuOpen(false)}>
          Contacto
        </Link>
      </nav>

      <div className={styles.headerActions}>
        {/* Contacto Mobile/Tablet */}
        <Link to="/contact" className={`${styles.btnContactHeader} ${styles.mobileOnly}`}>
          Contacto
        </Link>
        <button className={styles.hamburger} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className={isMenuOpen ? styles.barOpen : ''}></span>
          <span className={isMenuOpen ? styles.barOpen : ''}></span>
          <span className={isMenuOpen ? styles.barOpen : ''}></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
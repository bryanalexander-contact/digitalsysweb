import React, { useState } from 'react';
import styles from '../../css/quote.module.css';

const QuotePage = () => {
  const [language] = useState(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const forcedLang = urlParams.get('lang');
    if (forcedLang) return forcedLang;
    
    return (navigator.language || navigator.userLanguage).startsWith('es') ? 'es' : 'en';
  });

  const currency = {
    symbol: '$',
    code: language === 'es' ? 'CLP' : 'USD'
  };

  const pricing = {
    es: {
      landing: "200.000",
      web: "400.000",
      title: "Comienza tu proyecto",
      subtitle: "Selecciona el servicio que mejor se adapte a tus necesidades.",
    },
    en: {
      landing: "500",
      web: "1,000",
      title: "Start your project",
      subtitle: "Select the service that best suits your needs.",
    }
  };

  const content = pricing[language];

  return (
    <div className={styles.quoteContainer}>
      <div className={styles.quoteHeader}>
        <span className={styles.badge}>DigitalSysweb Pricing</span>
        <h1>{content.title}</h1>
        <p>{content.subtitle}</p>
      </div>

      <div className={styles.cardsGrid}>
        {/* Card 1: Landing Page */}
        <div className={styles.serviceCard}>
          <h2>Landing Page</h2>
          
          <div className={styles.price}>
            <span className={styles.symbol}>{currency.symbol}</span>
            {content.landing}
            <span className={styles.code}>{currency.code}</span>
          </div>

          <ul>
            <li>{language === 'es' ? 'Diseño Único' : 'Custom Design'}</li>
            <li>{language === 'es' ? 'Optimizado para Conversión' : 'Conversion Optimized'}</li>
            <li>{language === 'es' ? 'Responsive (Móvil)' : 'Fully Responsive'}</li>
          </ul>
          <button className={styles.btnSelect}>
            {language === 'es' ? 'Seleccionar' : 'Select'}
          </button>
        </div>

        {/* Card 2: Website (Dark Version) */}
        <div className={`${styles.serviceCard} ${styles.dark}`}>
          <h2>Website</h2>
          
          <div className={styles.price}>
            <span className={styles.symbol}>{currency.symbol}</span>
            {content.web}
            <span className={styles.code}>{currency.code}</span>
          </div>

          <ul>
            <li>{language === 'es' ? 'Hasta 5 Secciones' : 'Up to 5 Sections'}</li>
            <li>{language === 'es' ? 'Panel Auto-administrable' : 'CMS Dashboard'}</li>
            <li>{language === 'es' ? 'Soporte Premium' : 'Premium Support'}</li>
          </ul>
          <button className={`${styles.btnSelect} ${styles.primary}`}>
            {language === 'es' ? 'Seleccionar' : 'Select'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuotePage;
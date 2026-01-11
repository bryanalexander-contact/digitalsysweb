import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from '../../css/quote.module.css';

const QuotePage = () => {
  const location = useLocation();
  const [language] = useState(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const forcedLang = urlParams.get('lang');
    if (forcedLang) return forcedLang;
    return (navigator.language || navigator.userLanguage).startsWith('es') ? 'es' : 'en';
  });

  const [selectedService, setSelectedService] = useState('landing');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (location.state?.service) {
      setSelectedService(location.state.service);
    }
  }, [location]);

  const pricing = {
    landing: { es: '200.000', en: '500', code: language === 'es' ? 'CLP' : 'USD' },
    website: { es: '400.000', en: '1.000', code: language === 'es' ? 'CLP' : 'USD' },
    redesign: { es: 'Cotizable', en: 'Custom Quote', code: '' }
  };

  const content = {
    es: {
      title: "Tu próximo paso digital",
      subtitle: "Selecciona un servicio para ajustar tu presupuesto.",
      selector: "Elige tu servicio",
      form: {
        name: "Nombre completo",
        email: "Correo electrónico",
        company: "Empresa (opcional)",
        phone: "WhatsApp",
        message: "Breve descripción del proyecto",
        submit: "Enviar propuesta",
        successTitle: "¡Solicitud enviada!",
        successMsg: "Revisa tu bandeja de entrada (y la carpeta de Spam) para la confirmación de digitalsysweb@gmail.com"
      }
    },
    en: {
      title: "Your next digital step",
      subtitle: "Select a service to adjust your quote.",
      selector: "Choose your service",
      form: {
        name: "Full name",
        email: "Email address",
        company: "Company (optional)",
        phone: "WhatsApp number",
        message: "Brief project description",
        submit: "Send proposal",
        successTitle: "Request sent!",
        successMsg: "Check your inbox (and Spam folder) for confirmation from digitalsysweb@gmail.com"
      }
    }
  }[language];

  if (submitted) {
    return (
      <div className={styles.successContainer}>
        <div className={styles.successCard}>
          <div className={styles.checkIcon}>L</div>
          <h2>{content.form.successTitle}</h2>
          <p>{content.form.successMsg}</p>
          <button onClick={() => setSubmitted(false)} className={styles.btnPrimary}>Cerrar</button>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.mainWrapper} ${styles[selectedService]}`}>
      <div className={styles.contentHeader}>
        <span className={styles.miniBadge}>DigitalSysweb 2026</span>
        <h1>{content.title}</h1>
      </div>

      {/* Selector de Servicio Minimalista */}
      <div className={styles.selectorWrapper}>
        <p className={styles.selectorLabel}>{content.selector}</p>
        <div className={styles.segmentedControl}>
          <button 
            className={selectedService === 'landing' ? styles.activeOption : ''} 
            onClick={() => setSelectedService('landing')}
          >
            Landing
          </button>
          <button 
            className={selectedService === 'website' ? styles.activeOption : ''} 
            onClick={() => setSelectedService('website')}
          >
            Website
          </button>
          <button 
            className={selectedService === 'redesign' ? styles.activeOption : ''} 
            onClick={() => setSelectedService('redesign')}
          >
            {language === 'es' ? 'Rediseño' : 'Redesign'}
          </button>
        </div>
      </div>

      <div className={styles.mainGrid}>
        {/* Lado Izquierdo: Visualización de Precio */}
        <div className={styles.priceDisplay}>
          <div className={styles.priceTag}>
            <span className={styles.currency}>{selectedService !== 'redesign' ? '$' : ''}</span>
            <span className={styles.amount}>{pricing[selectedService][language]}</span>
            <span className={styles.code}>{pricing[selectedService].code}</span>
          </div>
          <p className={styles.serviceDesc}>{content.subtitle}</p>
        </div>

        {/* Lado Derecho: Formulario */}
        <div className={styles.formCard}>
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
            <div className={styles.inputGroup}>
              <input type="text" placeholder={content.form.name} required />
              <input type="email" placeholder={content.form.email} required />
              <input type="tel" placeholder={content.form.phone} required />
              <input type="text" placeholder={content.form.company} />
            </div>
            <textarea placeholder={content.form.message} rows="3"></textarea>
            
            <button type="submit" className={styles.btnSubmit}>
              {content.form.submit}
            </button>
          </form>

          <div className={styles.footerContact}>
            <a href="https://wa.me/56958678410" target="_blank" rel="noreferrer">+56 9 5867 84 10</a>
            <a href="mailto:digitalsysweb@gmail.com">digitalsysweb@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotePage;
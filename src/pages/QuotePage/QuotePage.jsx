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

  // Información detallada por servicio
  const specs = {
    landing: {
      es: ["1 Página (Secciones infinitas)", "SEO Google Básico", "Hosting & Dominio (.cl/.com) x 1 año", "Formulario de Contacto", "Certificado SSL (Candadito)"],
      en: ["1 Page (Infinite sections)", "Basic Google SEO", "Hosting & Domain included (1yr)", "Contact Form", "SSL Certificate"]
    },
    website: {
      es: ["Hasta 5 Páginas internas", "SEO Full Avanzado", "Hosting & Dominio incluido", "Chatbot IA Inteligente", "Panel de administración"],
      en: ["Up to 5 Internal pages", "Full Advanced SEO", "Hosting & Domain included", "AI Intelligent Chatbot", "Admin Dashboard"]
    },
    redesign: {
      es: ["Auditoría de sitio actual", "Migración de contenido", "Optimización de velocidad", "Nuevo look profesional", "Presupuesto a medida"],
      en: ["Current site audit", "Content migration", "Speed optimization", "New professional look", "Custom budget"]
    }
  };

  const content = {
    es: {
      title: "Tu próximo paso digital",
      subtitle: "Selecciona un servicio para ajustar tu presupuesto.",
      selector: "Elige tu servicio",
      includes: "Lo que incluye tu proyecto:",
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
      includes: "What your project includes:",
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
          <div className={styles.checkIcon}>✓</div>
          <h2>{content.form.successTitle}</h2>
          <p>{content.form.successMsg}</p>
          <button onClick={() => setSubmitted(false)} className={styles.btnSubmit}>Aceptar</button>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.mainWrapper} ${styles[selectedService]}`}>
      <div className={styles.contentHeader}>
        
        <h1>{content.title}</h1>
      </div>

      <div className={styles.selectorWrapper}>
        <div className={styles.segmentedControl}>
          <button className={selectedService === 'landing' ? styles.activeOption : ''} onClick={() => setSelectedService('landing')}>Landing</button>
          <button className={selectedService === 'website' ? styles.activeOption : ''} onClick={() => setSelectedService('website')}>Website</button>
          <button className={selectedService === 'redesign' ? styles.activeOption : ''} onClick={() => setSelectedService('redesign')}>{language === 'es' ? 'Rediseño' : 'Redesign'}</button>
        </div>
      </div>

      <div className={styles.mainGrid}>
        <div className={styles.leftColumn}>
          <div className={styles.priceDisplay}>
            <div className={styles.priceTag}>
              <span className={styles.currency}>{selectedService !== 'redesign' ? '$' : ''}</span>
              <span className={styles.amount}>{pricing[selectedService][language]}</span>
              <span className={styles.code}>{pricing[selectedService].code}</span>
            </div>
          </div>

          <div className={styles.specsBox}>
            <h3>{content.includes}</h3>
            <ul>
              {specs[selectedService][language].map((item, index) => (
                <li key={index}><span className={styles.bullet}>•</span> {item}</li>
              ))}
            </ul>
          </div>
        </div>

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
            <a href="https://wa.me/56958678410" target="_blank" rel="noreferrer">📱 +56 9 5867 84 10</a>
            <a href="mailto:digitalsysweb@gmail.com">✉️ digitalsysweb@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotePage;
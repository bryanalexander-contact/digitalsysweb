import React from 'react';
import styles from '../../../css/ContactSection.module.css';
import { motion } from 'framer-motion';

const ContactHero = () => {
  return (
    <section className={styles.contactHero}>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* H1: El título más importante de la página de contacto */}
        <h1 className={styles.heroTitle}>Hablemos.</h1>
        <p className={styles.heroSubtitle}>
          Nos encantaría saber más sobre su marca y lo que podemos diseñar y construir juntos. 
          Expertos en desarrollo web de alta gama.
        </p>
      </motion.div>
      
      <div className={styles.heroLinks}>
        <div className={styles.linkGroup}>
          <span>Conviértete en cliente</span>
          <a href="mailto:digitalsysweb@gmail.com" className={styles.contactLink}>
            digitalsysweb@gmail.com
          </a>
        </div>
        <div className={styles.linkGroup}>
          <span>Atención Inmediata</span>
          <a 
            href="https://wa.me/56958678410" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.contactLink}
          >
            WhatsApp Directo
          </a>
        </div>
      </div>

      <motion.div 
        className={styles.scrollInvite}
        role="button"
        aria-label="Deslizar hacia abajo al formulario de contacto"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={() => document.getElementById('form-section').scrollIntoView({ behavior: 'smooth' })}
      >
        <p>Escríbenos debajo</p>
        <span className={styles.arrowDown} aria-hidden="true">↓</span>
      </motion.div>
    </section>
  );
};

export default ContactHero;
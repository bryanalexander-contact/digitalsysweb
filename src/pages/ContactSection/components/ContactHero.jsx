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
        <h1 className={styles.heroTitle}>Hablemos.</h1>
        <p className={styles.heroSubtitle}>
          Nos encantaría saber más sobre usted y lo que podemos diseñar y construir juntos.
        </p>
      </motion.div>
      
      <div className={styles.heroLinks}>
        <div className={styles.linkGroup}>
          <span>Conviértete en cliente</span>
          <a href="mailto:digitalsysweb@gmail.com" className={styles.contactLink}>digitalsysweb@gmail.com</a>
        </div>
        <div className={styles.linkGroup}>
          <span>Únase a nosotros</span>
          <a href="https://wa.me/56958678410" target="_blank" className={styles.contactLink}>WhatsApp Directo</a>
        </div>
      </div>

      {/* Indicador explícito para bajar al formulario */}
      <motion.div 
        className={styles.scrollInvite}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={() => document.getElementById('form-section').scrollIntoView({ behavior: 'smooth' })}
      >
        <p>Escríbenos debajo</p>
        <span className={styles.arrowDown}>↓</span>
      </motion.div>
    </section>
  );
};

export default ContactHero;
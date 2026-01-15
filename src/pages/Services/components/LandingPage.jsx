import React from 'react';
import styles from '../../../css/Services.module.css';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={`${styles.title} ${styles.titleLanding}`}>Landing <br/> Pages.</h1>
          <p className={styles.mainText}>
            No es solo una página, es un motor de ventas diseñado para capturar la atención en 3 segundos.
          </p>
        </motion.div>

        <motion.div 
          className={styles.descriptionBox}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2>¿Cómo ayuda a tu proyecto?</h2>
          <p className={styles.description}>Ideal para lanzar productos o servicios específicos, eliminando distracciones y guiando al cliente directo a la conversión.</p>
          <ul className={styles.detailsList}>
            <li className={styles.detailItem}>Optimización de carga ultra-rápida</li>
            <li className={styles.detailItem}>Diseño persuasivo (UX Writing)</li>
            <li className={styles.detailItem}>Integración con CRMs y Analytics</li>
          </ul>
          {/* USAMOS NAVIGATE CON STATE */}
          <button className={styles.ctaButton} onClick={() => navigate('/quote', { state: { service: 'landing' } })}>
            Lo quiero
          </button>
        </motion.div>
      </div>
    </section>
  );
};
export default LandingPage;
import React from 'react';
import styles from '../../../css/Services.module.css';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const WebSite = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={`${styles.title} ${styles.titleWeb}`}>Web <br/> Sites.</h1>
          <p className={styles.mainText}>
            Construimos la sede digital de tu marca. Estructuras sólidas, escalables y con identidad propia.
          </p>
        </motion.div>

        <motion.div 
          className={styles.descriptionBox}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2>Impacto en tu negocio</h2>
          <p className={styles.description}>Perfecto para empresas que necesitan autoridad, múltiples secciones de contenido y una base técnica preparada para el crecimiento a largo plazo.</p>
          <ul className={styles.detailsList}>
            <li className={styles.detailItem}>Arquitectura multi-página</li>
            <li className={styles.detailItem}>Panel autoadministrable</li>
            <li className={styles.detailItem}>SEO técnico de nivel experto</li>
          </ul>
          <button className={styles.ctaButton} onClick={() => navigate('/quote', { state: { service: 'website' } })}>
            Lo quiero
          </button>
        </motion.div>
      </div>
    </section>
  );
};
export default WebSite;
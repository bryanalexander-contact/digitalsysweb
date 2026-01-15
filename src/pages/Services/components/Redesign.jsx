import React from 'react';
import { motion } from 'framer-motion';
import styles from '../../../css/Services.module.css';

const Redesign = () => (
  <section className={styles.section}>
    <div className={styles.grid}>
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className={`${styles.title} ${styles.titleRedesign}`}>Re <br/> Design.</h1>
        <p className={styles.mainText}>
          Evolución, no solo cambio. Transformamos tu plataforma actual en una herramienta competitiva.
        </p>
      </motion.div>

      <motion.div 
        className={styles.descriptionBox}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2>¿Por qué rediseñar?</h2>
        <p className={styles.description}>Si tu web se siente lenta o anticuada, estás perdiendo clientes. Analizamos el comportamiento de tus usuarios para arreglar lo que no funciona.</p>
        <ul className={styles.detailsList}>
          <li className={styles.detailItem}>Auditoría de UX completa</li>
          <li className={styles.detailItem}>Modernización de interfaz</li>
          <li className={styles.detailItem}>Mejora en tasas de retención</li>
        </ul>
        <button className={styles.ctaButton} onClick={() => window.location.href='/quote'}>Lo quiero</button>
      </motion.div>
    </div>
  </section>
);
export default Redesign;
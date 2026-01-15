import React from 'react';
import styles from '../../../css/Services.module.css';
import { motion } from 'framer-motion';

const HeroSection = () => (
  <section className={`${styles.section} ${styles.hero}`}>
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <h1 className={styles.title}>Digital <br/> Solutions.</h1>
      <p style={{ fontSize: '1.2rem', opacity: 0.6, maxWidth: '500px' }}>
        Transformamos marcas a través de diseño táctil y tecnología de última generación.
      </p>
    </motion.div>

    {/* Indicador con Flecha */}
    <motion.div 
      className={styles.scrollIndicator}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
    >
      <span className={styles.scrollText}>Desliza para explorar</span>
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <svg 
          width="30" 
          height="30" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M7 13l5 5 5-5M12 6v12"/>
        </svg>
      </motion.div>
    </motion.div>
  </section>
);

export default HeroSection;
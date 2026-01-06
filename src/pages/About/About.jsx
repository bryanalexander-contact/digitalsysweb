import React from 'react';
import { motion } from 'framer-motion';
import styles from '../../css/About.module.css';

const About = () => {
  // Animación para el núcleo (movimiento muy lento)
  const coreAnim = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, 0],
    },
    transition: {
      duration: 15,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  // Animación para los satélites (revoloteo cercano)
  const satelliteAnim = (xDist, yDist, duration, delay) => ({
    animate: {
      x: [0, xDist, -xDist, 0],
      y: [0, yDist, -yDist, 0],
      scale: [1, 1.1, 0.9, 1],
    },
    transition: {
      duration: duration,
      repeat: Infinity,
      ease: "linear",
      delay: delay
    }
  });

  return (
    <div className={styles.clayPageWrapper}>
      <section className={styles.heroClay}>
        
        {/* LADO IZQUIERDO: TEXTO */}
        <div className={styles.heroContentLeft}>
          <motion.h1 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 1.2 }}
          >
            Transformamos marcas digitales hacia una experiencia<br /> 
            <span className={styles.accent}>de primera calidad</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            Diseñamos interfaces que respiran autoridad y minimalismo absoluto.
          </motion.p>
        </div>

        {/* LADO DERECHO: ECOSISTEMA DE CÍRCULOS */}
        <div className={styles.sphereEcosystem}>
          <div className={styles.sphereContainer}>
            {/* Círculo Núcleo */}
            <motion.div className={styles.coreSphere} {...coreAnim} />
            
            {/* Satélites revoloteando */}
            <motion.div 
              className={`${styles.satellite} ${styles.sat1}`} 
              {...satelliteAnim(40, -50, 12, 0)} 
            />
            <motion.div 
              className={`${styles.satellite} ${styles.sat2}`} 
              {...satelliteAnim(-50, 30, 15, 2)} 
            />
          </div>
        </div>
      </section>

      <section className={styles.contentDark}>
        <div className={styles.container}>
          <h2>Resultados Competitivos</h2>
          <p>Elevamos tu presencia digital al siguiente nivel.</p>
        </div>
      </section>
    </div>
  );
};

export default About;
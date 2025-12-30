import React from 'react';
import { motion } from 'framer-motion';
import '../css/About.css';

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
    <div className="clay-page-wrapper">
      <section className="hero-clay">
        
        {/* LADO IZQUIERDO: TEXTO */}
        <div className="hero-content-left">
          
          
          <motion.h1 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 1.2 }}
          >
            Transformamos marcas digitales hacia una experiencia<br /> 
            <span className="accent">de primera calidad</span>
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
        <div className="sphere-ecosystem">
          <div className="sphere-container">
            {/* Círculo Núcleo (más pequeño ahora) */}
            <motion.div className="core-sphere" {...coreAnim} />
            
            {/* Satélites revoloteando cerca */}
            <motion.div 
              className="satellite sat-1" 
              {...satelliteAnim(40, -50, 12, 0)} 
            />
            <motion.div 
              className="satellite sat-2" 
              {...satelliteAnim(-50, 30, 15, 2)} 
            />
          </div>
        </div>
      </section>

      <section className="content-dark">
        <div className="container">
          <h2>Resultados Competitivos</h2>
          <p>Elevamos tu presencia digital al siguiente nivel.</p>
        </div>
      </section>
    </div>
  );
};

export default About;
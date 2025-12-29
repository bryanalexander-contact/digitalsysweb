import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import '../css/about.css';

const About = () => {
  const [isSpanish, setIsSpanish] = useState(false);
  const [cursorType, setCursorType] = useState('default');
  const carouselRef = useRef(null);

  useEffect(() => {
    // Detección de idioma
    if (navigator.language.startsWith('es')) {
      setIsSpanish(true);
    }
  }, []);

  const images = isSpanish 
    ? ['escalabilidad', 'experiencia', 'conversion', 'precision', 'velocidad', 'confiabilidad']
    : ['scalability', 'experience', 'conversion', 'precision', 'speed', 'reliability'];

  const handleMouseMove = (e) => {
    const { clientX } = e;
    const { innerWidth } = window;
    if (clientX < innerWidth / 3) setCursorType('left');
    else if (clientX > (innerWidth / 3) * 2) setCursorType('right');
    else setCursorType('default');
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="clay-container" onMouseMove={handleMouseMove}>
      {/* Cursor Personalizado */}
      <div className={`custom-cursor ${cursorType}`}>
        {cursorType === 'left' && <span>←</span>}
        {cursorType === 'right' && <span>→</span>}
      </div>

      <section className="hero">
        <div className="hero-content">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="kicker">
            Digital Sy Web — Est. 2024
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            Transformamos marcas hacia una <br />
            <span className="gradient-text">experiencia digital de alto nivel</span>
          </motion.h1>
        </div>
        <div className="hero-visual-bg"></div>
      </section>

      {/* Carrusel Asimétrico */}
      <section className="carousel-section">
        <motion.div 
          className="carousel-track"
          initial={{ x: "20%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 2, ease: "circumference" }}
        >
          {/* Duplicamos para loop infinito */}
          {[...images, ...images].map((img, index) => (
            <div key={index} className={`carousel-item item-${(index % 6) + 1}`}>
              <img 
                src={`/src/assets/images/${isSpanish ? 'carrusel_esp' : 'carrusel_en'}/${img}.png`} 
                alt={img} 
              />
            </div>
          ))}
        </motion.div>
      </section>

      <motion.section 
        className="value-grid"
        initial="hidden" whileInView="visible"
        viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        <motion.div variants={fadeInUp} className="value-card">
          <div className="number">01</div>
          <h3>Arquitectura de Conversión</h3>
          <p>Priorizamos la psicología del usuario para reducir el costo de adquisición.</p>
        </motion.div>
        <motion.div variants={fadeInUp} className="value-card active">
          <div className="number">02</div>
          <h3>Escalabilidad Técnica</h3>
          <p>Preparada para crecer de 100 a 100,000 usuarios sin perder rendimiento.</p>
        </motion.div>
        <motion.div variants={fadeInUp} className="value-card">
          <div className="number">03</div>
          <h3>Identidad de Vanguardia</h3>
          <p>Dotamos a tu marca de una presencia visual que comunica autoridad.</p>
        </motion.div>
      </motion.section>

      <section className="manifesto">
        <div className="manifesto-inner">
          <motion.h2 whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1.5 }}>
            "La mayoría de las agencias entregan archivos. <br />
            <span>Nosotros entregamos resultados competitivos."</span>
          </motion.h2>
        </div>
      </section>
    </div>
  );
};

export default About;
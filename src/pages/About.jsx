import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimationFrame, useMotionValue, useSpring } from 'framer-motion';
import '../css/about.css';

const About = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorType, setCursorType] = useState('default'); 
  
  // Control de movimiento del carrusel
  const baseVelocity = -1.5; // Velocidad base
  const velocityX = useMotionValue(baseVelocity);
  const x = useMotionValue(0);
  
  // Suavizado de la velocidad cuando cambia el mouse
  const smoothVelocity = useSpring(velocityX, { damping: 50, stiffness: 400 });

  const images = ['reliability', 'precision', 'experience', 'scalability', 'speed', 'conversion'];

  // Lógica de movimiento infinito y cambio de dirección
  useAnimationFrame((t, delta) => {
    let moveBy = smoothVelocity.get() * (delta / 10);
    
    // Si el mouse está en los bordes, alteramos la velocidad
    if (cursorType === 'left') velocityX.set(-3);
    else if (cursorType === 'right') velocityX.set(3);
    else if (cursorType === 'center') velocityX.set(0);
    else velocityX.set(baseVelocity);

    x.set(x.get() + moveBy);
  });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPos({ x: e.clientX, y: e.clientY });

    const width = rect.width;
    const relativeX = e.clientX - rect.left;

    if (relativeX < width / 3) setCursorType('left');
    else if (relativeX > (width / 3) * 2) setCursorType('right');
    else setCursorType('center');
  };

  return (
    <div className="clay-container">
      <section className="hero">
        <div className="hero-content">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="kicker">
            Digital Sy Web — Est. 2024
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            Transformamos marcas hacia una <br />
            <span className="gradient-text">experiencia digital de alto nivel</span>
          </motion.h1>
        </div>
      </section>

      {/* SECCIÓN CARROUSEL GIGANTE */}
      <section 
        className="carousel-wrapper"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setCursorType('default')}
      >
        <div 
          className="carousel-cursor" 
          style={{ 
            left: `${cursorPos.x}px`, 
            top: `${cursorPos.y}px`,
            opacity: (cursorType === 'left' || cursorType === 'right') ? 1 : 0 
          }}
        >
          <span>{cursorType === 'left' ? '←' : '→'}</span>
        </div>

        <motion.div className="carousel-track" style={{ x }}>
          {/* Renderizamos varias veces para asegurar que el scroll sea infinito sin saltos */}
          {[...Array(4)].map((_, i) => (
            <React.Fragment key={i}>
              {images.map((img, index) => (
                <div key={`${i}-${index}`} className={`carousel-item var-${(index % 6) + 1}`}>
                  <img src={`/src/assets/images/carrousel/${img}.jpg`} alt={img} />
                </div>
              ))}
            </React.Fragment>
          ))}
        </motion.div>
      </section>

      <section className="value-grid">
        <div className="value-card">
          <div className="number">01</div>
          <h3>Arquitectura de Conversión</h3>
          <p>Priorizamos la psicología del usuario para reducir el costo de adquisición.</p>
        </div>
        <div className="value-card active">
          <div className="number">02</div>
          <h3>Escalabilidad Técnica</h3>
          <p>Preparada para crecer de 100 a 100,000 usuarios sin perder rendimiento.</p>
        </div>
        <div className="value-card">
          <div className="number">03</div>
          <h3>Identidad de Vanguardia</h3>
          <p>Dotamos a tu marca de una presencia visual que comunica autoridad.</p>
        </div>
      </section>
    </div>
  );
};

export default About;
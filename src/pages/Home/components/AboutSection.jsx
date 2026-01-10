import React, { useRef, useState, useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import styles from "../../../css/AboutSection.module.css";

// Imágenes
import conversionImg from "../../../assets/images/carrousel/conversion.jpg";
import experienceImg from "../../../assets/images/carrousel/experience.jpg";
import precisionImg from "../../../assets/images/carrousel/precision.jpg";
import reliabilityImg from "../../../assets/images/carrousel/reliability.jpg";
import scalabilityImg from "../../../assets/images/carrousel/scalability.jpg";
import speedImg from "../../../assets/images/carrousel/speed.jpg";

const carouselItems = [
  { image: conversionImg, text: "Conversión" },
  { image: experienceImg, text: "Experiencia" },
  { image: precisionImg, text: "Precisión" },
  { image: reliabilityImg, text: "Fiabilidad" },
  { image: scalabilityImg, text: "Escalabilidad" },
  { image: speedImg, text: "Velocidad" },
];

export default function AboutSection() {
  const [hoverSide, setHoverSide] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  
  // Lógica de movimiento suave (Inercia)
  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 50, damping: 20 });
  const trackRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    // Bucle de movimiento para PC
    let animationFrame;
    const move = () => {
      if (!isMobile && hoverSide) {
        const speed = 8;
        const delta = hoverSide === "right" ? -speed : speed;
        
        // Limitar el scroll para que no quede en blanco
        const currentX = x.get();
        const maxScroll = trackRef.current ? -(trackRef.current.scrollWidth - window.innerWidth + 100) : -2000;
        
        if (delta < 0 && currentX > maxScroll) x.set(currentX + delta);
        if (delta > 0 && currentX < 0) x.set(currentX + delta);
      }
      animationFrame = requestAnimationFrame(move);
    };
    
    move();
    return () => {
      window.removeEventListener("resize", checkMobile);
      cancelAnimationFrame(animationFrame);
    };
  }, [hoverSide, isMobile, x]);

  const handleMouseMove = (e) => {
    if (isMobile) return;
    const { clientX, clientY } = e;
    const width = window.innerWidth;
    setMousePos({ x: clientX, y: clientY });

    if (clientX < width / 3) setHoverSide("left");
    else if (clientX > (width * 2) / 3) setHoverSide("right");
    else setHoverSide(null);
  };

  return (
    <section 
      className={styles.aboutSection} 
      onMouseMove={handleMouseMove} 
      onMouseLeave={() => setHoverSide(null)}
    >
      {/* FLECHA PERSONALIZADA (Solo PC) */}
      {!isMobile && (
        <div 
          className={`${styles.customCursor} ${hoverSide ? styles.visible : ''}`}
          style={{ left: mousePos.x, top: mousePos.y }}
        >
          {hoverSide === 'left' ? (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#b87333" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          ) : (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#b87333" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          )}
        </div>
      )}

      <div className={styles.container}>
        <div className={styles.carouselWrapper}>
          {/* En PC usamos motion.div para el scroll suave, en móvil scroll nativo */}
          {isMobile ? (
            <div className={styles.trackMobile}>
              {carouselItems.map((item, index) => (
                <div key={index} className={styles.carouselItem}>
                  <div className={styles.imageWrapper}>
                    <img src={item.image} alt={item.text} className={styles.carouselImage} />
                    <div className={styles.tagLabel}>
                      <span>{item.text}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <motion.div 
              ref={trackRef}
              className={styles.trackDesktop}
              style={{ x: springX }}
            >
              {carouselItems.map((item, index) => (
                <div key={index} className={styles.carouselItem}>
                  <div className={styles.imageWrapper}>
                    <img src={item.image} alt={item.text} className={styles.carouselImage} />
                    <div className={styles.tagLabel}>
                      <span>{item.text}</span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </div>

        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className={styles.kicker}>Nuestra Esencia</span>
          <h2 className={styles.title}>Creamos con propósito.</h2>
          <p className={styles.description}>
            En Digitalsysweb no solo construimos interfaces, diseñamos el futuro de tu marca 
            con una arquitectura técnica robusta y una estética que trasciende lo convencional.
          </p>
          <div className={styles.ctaContainer}>
            <a href="/about" className={styles.ctaLink}>
              Ven y conversemos.
              <span className={styles.ctaLine}></span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
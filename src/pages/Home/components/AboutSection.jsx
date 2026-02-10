import React, { useRef, useState, useEffect, useMemo } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import styles from "../../../css/AboutSection.module.css";

// Imágenes
import conversionImg from "../../../assets/images/carrousel/conversion.webp";
import experienceImg from "../../../assets/images/carrousel/experience.webp";
import precisionImg from "../../../assets/images/carrousel/precision.webp";
import reliabilityImg from "../../../assets/images/carrousel/reliability.webp";
import scalabilityImg from "../../../assets/images/carrousel/scalability.webp";
import speedImg from "../../../assets/images/carrousel/speed.webp";

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
  
  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 40, damping: 25, mass: 0.8 });
  const trackRef = useRef(null);

  // OPTIMIZACIÓN 1: Solo triplicamos si es Desktop (para el loop infinito)
  // En móvil solo mandamos las 6 originales. Menos peso = mejor nota.
  const displayItems = useMemo(() => {
    return isMobile ? carouselItems : [...carouselItems, ...carouselItems, ...carouselItems];
  }, [isMobile]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1023px)");
    const handleMediaChange = (e) => setIsMobile(e.matches);
    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleMediaChange);
    
    let animationFrame;
    const move = () => {
      // La lógica de movimiento solo corre en Desktop
      if (!isMobile && hoverSide) {
        const speed = 4;
        const delta = hoverSide === "right" ? -speed : speed;
        let currentX = x.get();
        let newX = currentX + delta;

        if (trackRef.current) {
          const trackWidth = trackRef.current.scrollWidth;
          const oneThird = trackWidth / 3;
          if (newX < -oneThird * 2) { newX = -oneThird; x.jump(newX); } 
          else if (newX > 0) { newX = -oneThird; x.jump(newX); }
        }
        x.set(newX);
      }
      animationFrame = requestAnimationFrame(move);
    };
    
    move();
    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
      cancelAnimationFrame(animationFrame);
    };
  }, [hoverSide, isMobile, x]);

  const handleMouseMove = (e) => {
    if (isMobile) return;
    setMousePos({ x: e.clientX, y: e.clientY });
    const width = window.innerWidth;
    if (e.clientX < width / 3) setHoverSide("left");
    else if (e.clientX > (width * 2) / 3) setHoverSide("right");
    else setHoverSide(null);
  };

  return (
    <section 
      className={styles.aboutSection} 
      onMouseMove={handleMouseMove} 
      onMouseLeave={() => setHoverSide(null)}
    >
      {/* CURSOR: Solo existe en Desktop */}
      {!isMobile && (
        <div 
          className={`${styles.customCursor} ${hoverSide ? styles.visible : ''}`}
          style={{ 
            transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`,
            left: 0, 
            top: 0,
            position: 'fixed' // Importante para que siga el mouse correctamente
          }}
        >
          {hoverSide === 'left' ? (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#b87333" strokeWidth="2.5">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          ) : (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#b87333" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          )}
        </div>
      )}

      <div className={styles.container}>
        <div className={styles.carouselWrapper}>
          {/* OPTIMIZACIÓN 2: Usamos las clases de tu CSS */}
          <motion.div 
            ref={trackRef}
            className={isMobile ? styles.trackMobile : styles.trackDesktop}
            // Solo aplicamos la animación de Motion en Desktop
            style={!isMobile ? { x: springX } : {}}
          >
            {displayItems.map((item, index) => (
              <div key={`${item.text}-${index}`} className={styles.carouselItem}>
                <div className={styles.imageWrapper}>
                  <img 
                    src={item.image} 
                    alt={item.text} 
                    className={styles.carouselImage}
                    // OPTIMIZACIÓN 3: Carga inmediata solo para lo que se ve al inicio
                    loading={index < 2 ? "eager" : "lazy"}
                    // Ayuda al navegador con las dimensiones (evita saltos)
                    width="300"
                    height="375" 
                  />
                  <div className={styles.tagLabel}>
                    <span>{item.text}</span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* CONTENIDO TEXTUAL */}
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
            En Digitalsysweb no solo construimos interfaces, diseñamos el futuro de tu marca...
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
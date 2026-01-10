import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react"; // npm install lucide-react
import styles from "../../../css/AboutSection.module.css";

// Importa tus imágenes
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
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [hoverSide, setHoverSide] = useState(null); // 'left', 'right', null

  // --- Lógica del carrusel automático para PC ---
  useEffect(() => {
    // Solo en desktop (o si no es un dispositivo táctil)
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    if (!isDesktop) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex + 1) % carouselItems.length
      );
    }, 4000); // Cambia cada 4 segundos

    return () => clearInterval(interval);
  }, []);

  // --- Navegación manual en PC (flechas) ---
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + carouselItems.length) % carouselItems.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % carouselItems.length
    );
  };

  const handleMouseMove = (e) => {
    if (window.matchMedia("(min-width: 1024px)").matches) {
      const carouselWidth = carouselRef.current.offsetWidth;
      const mouseX = e.clientX - carouselRef.current.getBoundingClientRect().left;

      if (mouseX < carouselWidth / 3) { // Tercio izquierdo
        setHoverSide('left');
      } else if (mouseX > carouselWidth * 2 / 3) { // Tercio derecho
        setHoverSide('right');
      } else { // Centro
        setHoverSide(null);
      }
    }
  };

  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={styles.content}
        >
          <span className={styles.kicker}>Nuestra Esencia</span>
          <h2 className={styles.title}>Creamos con propósito.</h2>
          <p className={styles.description}>
            En Digitalsysweb, no solo construimos sitios web; forjamos experiencias digitales
            que definen marcas y transforman ideas en éxitos tangibles. Descubre
            los pilares que nos impulsan y la visión que compartimos contigo.
          </p>
        </motion.div>

        {/* CARRUSEL */}
        <div 
          ref={carouselRef} 
          className={styles.carouselWrapper}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => { setIsHovering(false); setHoverSide(null); }}
          onMouseMove={handleMouseMove}
        >
          {/* Carrusel para Mobile/Tablet (Scroll horizontal) */}
          <div className={styles.carouselMobile} ref={carouselRef}>
            {carouselItems.map((item, index) => (
              <div key={index} className={styles.carouselItemMobile}>
                <img src={item.image} alt={item.text} className={styles.carouselImage} />
                <p className={styles.carouselText}>{item.text}</p>
              </div>
            ))}
          </div>

          {/* Carrusel para PC (Automático con flechas) */}
          <div className={styles.carouselDesktop}>
            <AnimatePresence initial={false} custom={currentIndex}>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className={styles.carouselItemDesktop}
              >
                <img src={carouselItems[currentIndex].image} alt={carouselItems[currentIndex].text} className={styles.carouselImage} />
                <p className={styles.carouselText}>{carouselItems[currentIndex].text}</p>
              </motion.div>
            </AnimatePresence>

            {/* Flechas de navegación para PC al pasar el mouse */}
            <AnimatePresence>
              {isHovering && (
                <>
                  <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className={`${styles.navButton} ${styles.left}`}
                    onClick={handlePrev}
                  >
                    <ChevronLeft size={30} />
                  </motion.button>
                  <motion.button
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className={`${styles.navButton} ${styles.right}`}
                    onClick={handleNext}
                  >
                    <ChevronRight size={30} />
                  </motion.button>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* TEXTO DE LLAMADA A LA ACCIÓN */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={styles.ctaText}
        >
          <p>
            ¿Listo para construir algo extraordinario? Queremos conocer tu historia.
          </p>
          <a href="/about-page" className={styles.ctaLink}>
            Ven y conversemos.
            <span className={styles.ctaLine}></span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
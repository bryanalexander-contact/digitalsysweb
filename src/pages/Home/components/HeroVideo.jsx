import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "../../../css/HeroVideo.module.css";

export default function HeroVideo() {
  const containerRef = useRef(null);
  const [isTablet, setIsTablet] = useState(false);

  // Detectamos si es tablet para activar la lógica de animación
  useEffect(() => {
    const checkTablet = () => {
      setIsTablet(window.innerWidth >= 768 && window.innerWidth <= 1023);
    };
    checkTablet();
    window.addEventListener("resize", checkTablet);
    return () => window.removeEventListener("resize", checkTablet);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  // Animación de expansión: de 85% a 100%
  const tabletWidth = useTransform(scrollYProgress, [0, 1], ["85%", "100%"]);

  return (
    <div className={styles.mainWrapper} ref={containerRef}>
      <motion.div 
        className={styles.heroVideoContainer}
        style={{ 
          // Solo si es Tablet aplicamos el width animado de Framer Motion
          width: isTablet ? tabletWidth : undefined 
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className={styles.heroVideoFull}
        >
          <source src="/hero_videoWeb.webm" type="video/webm" />
          <source src="/hero_videoMp4.mp4" type="video/mp4" />
        </video>
      </motion.div>
    </div>
  );
}
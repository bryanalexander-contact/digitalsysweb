import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "../../../css/HeroVideo.module.css";

export default function HeroVideo() {
  const containerRef = useRef(null);

  // Hook de scroll para la animación de expansión
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  // Animación: de 85% de ancho a 100% (solo para PC/Tablet)
  const width = useTransform(scrollYProgress, [0, 1], ["85%", "100%"]);

  return (
    <div className={styles.mainWrapper} ref={containerRef}>
      <motion.div 
        className={styles.heroVideoContainerFull}
        style={{ 
          // En móviles forzamos 100vw, en PC animamos el ancho
          width: typeof window !== 'undefined' && window.innerWidth > 768 ? width : "100vw",
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
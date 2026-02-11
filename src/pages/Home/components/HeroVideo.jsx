import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "../../../css/HeroVideo.module.css";

export default function HeroVideo() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  // Animación para TABLET: De 85% a 100% (llena la pantalla)
  const widthTablet = useTransform(scrollYProgress, [0, 1], ["85%", "100%"]);

  // Animación para PC: De 80% a 94% (crece pero mantiene márgenes)
  const widthPC = useTransform(scrollYProgress, [0, 1], ["80%", "94%"]);

  return (
    <div className={styles.mainWrapper} ref={containerRef}>
      <motion.div
        className={styles.heroVideoContainer}
        style={{
          width: typeof window !== 'undefined'
            ? (window.innerWidth >= 1024 ? widthPC : (window.innerWidth >= 768 ? widthTablet : "100vw"))
            : "100vw"
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className={styles.heroVideoFull}
        >
          <source src="/hero_videoWeb.webm" type="video/webm" />
        </video>
      </motion.div>
    </div>
  );
}
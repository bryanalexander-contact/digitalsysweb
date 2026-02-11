import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "../../../css/HeroVideo.module.css";

export default function HeroVideo() {
  const containerRef = useRef(null);
  const [device, setDevice] = useState("mobile");

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w >= 1024) setDevice("pc");
      else if (w >= 768) setDevice("tablet");
      else setDevice("mobile");
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
          width: device === "pc" ? widthPC : (device === "tablet" ? widthTablet : "100vw")
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
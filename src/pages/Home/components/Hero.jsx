import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "../../../css/Hero.module.css";

export default function Hero() {
  // Optimizamos las variantes para que sean más suaves
  const blobVariants = {
    animate: {
      borderRadius: [
        "30% 70% 70% 30% / 30% 30% 70% 70%",
        "50% 50% 20% 80% / 25% 80% 20% 75%",
        "67% 33% 47% 53% / 37% 48% 52% 63%",
        "30% 70% 70% 30% / 30% 30% 70% 70%",
      ],
      // Usamos rotate Z para asegurar 2D/3D acceleration
      rotate: [0, 90, 180, 0],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      },
    },
  };

  return (
    <section className={`${styles.heroClay} hero-critical`}>
      <div className={styles.heroContentWrapper}>
        <div className={styles.heroTopRow}>
          <div className={styles.heroLeft}>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={styles.kicker}
            >
              Agencia Digital
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className={`${styles.heroTitle} hero-title-critical`}
            >
              Digitalsysweb es una agencia de desarrollo web profesional
            </motion.h1>

            <motion.div
              className={styles.heroBtns}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Link to="/quote" className={styles.btnQuote}>
                Cotizar Proyecto
              </Link>
              <a href="#contact" className={styles.btnContact}>
                Contactar
              </a>
            </motion.div>
          </div>

          <div className={styles.heroRight}>
            <div className={styles.blobContainer}>
              {/* Blob Principal */}
              <motion.div
                className={`${styles.blobMain} ${styles.glassMorph}`}
                variants={blobVariants}
                animate="animate"
                style={{ willChange: "border-radius, transform" }}
              />
              {/* Blob Secundario - Usamos translate3d via Motion */}
              <motion.div
                className={`${styles.blobSecondary} ${styles.glassMorph}`}
                animate={{
                  y: [0, 50, -30, 0],
                  x: [0, -30, 40, 0],
                  scale: [1, 1.2, 0.9, 1],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                style={{ willChange: "transform" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
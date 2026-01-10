import React from "react";
import styles from "../../../css/ServicesSection.module.css";
import { motion } from "framer-motion";

export default function ServicesSection() {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={styles.content}
        >
          <span className={styles.kicker}>Excelencia</span>
          <h2 className={styles.title}>Resultados excepcionales.</h2>
          <p className={styles.description}>
            Somos una compañía impulsada por la calidad. Creamos experiencias digitales 
            que no solo se ven bien, sino que funcionan con una precisión milimétrica 
            para escalar tu negocio al siguiente nivel.
          </p>

          <a href="#nuestros-servicios" className={styles.link}>
            Ver nuestros servicios
            <span className={styles.line}></span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
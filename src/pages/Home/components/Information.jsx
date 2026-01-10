import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react"; // npm install lucide-react
import styles from "../../../css/Information.module.css";

const accordionData = [
  {
    title: "Crecimiento en Línea",
    content: "Implementamos estrategias de optimización y visibilidad para que tu marca alcance a miles de usuarios potenciales, transformando visitas en clientes reales mediante una estructura pensada en la conversión."
  },
  {
    title: "Servicio Profesional",
    content: "Elevamos la percepción de tu negocio con interfaces modernas y una experiencia de usuario impecable. No solo es una web, es la cara digital que genera confianza inmediata en tu mercado."
  },
  {
    title: "Calidad Premium",
    content: "Utilizamos las últimas tecnologías como React y Vite para asegurar que tu página sea ultra rápida, segura y escalable, superando los estándares más exigentes de la industria actual."
  }
];

export default function Information() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <section className={styles.infoSection}>
      <div className={styles.container}>
        
        {/* LADO IZQUIERDO: TEXTO PRINCIPAL */}
        <div className={styles.textSide}>
          <span className={styles.kicker}>Estrategia</span>
          <h2 className={styles.title}>
            Innovamos tus servicios a través de una creación de una página web 
            de la mejor calidad para tus clientes.
          </h2>
          <p className={styles.subTitle}>Te ofrecemos:</p>
        </div>

        {/* LADO DERECHO: ACORDEÓN */}
        <div className={styles.accordionSide}>
          {accordionData.map((item, index) => (
            <div key={index} className={styles.accordionItem}>
              <button 
                className={styles.accordionHeader}
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              >
                <span>{item.title}</span>
                <motion.div
                  animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={20} />
                </motion.div>
              </button>

              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={styles.accordionContent}
                  >
                    <p>{item.content}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
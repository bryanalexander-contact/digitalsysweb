import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import styles from "../../../css/FAQSection.module.css";

const faqData = [
  {
    question: "¿Cuánto tiempo toma desarrollar un sitio web?",
    answer: "Depende de la complejidad. Un sitio corporativo suele tardar de 3 a 5 semanas, mientras que un e-commerce o una plataforma personalizada puede tomar de 8 a 12 semanas.",
  },
  {
    question: "¿El diseño será compatible con dispositivos móviles?",
    answer: "Absolutamente. Aplicamos un enfoque 'Mobile-First'. Tu sitio se adaptará perfectamente a celulares, tablets y ordenadores para garantizar la mejor experiencia de usuario.",
  },
  {
    question: "¿Ofrecen servicios de mantenimiento post-lanzamiento?",
    answer: "Sí, contamos con planes de soporte técnico, actualizaciones de seguridad y optimización de rendimiento para que tu web siempre funcione al 100%.",
  },
  {
    question: "¿Mi sitio web aparecerá en Google?",
    answer: "Desarrollamos cada sitio con una estructura SEO-friendly (etiquetas optimizadas, velocidad de carga y adaptabilidad) para facilitar que los motores de búsqueda te encuentren.",
  },
  {
    question: "¿Puedo actualizar el contenido yo mismo?",
    answer: "Sí, trabajamos con gestores de contenido intuitivos o paneles personalizados para que puedas editar textos e imágenes sin necesidad de saber programación.",
  },
];

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={`${styles.faqItem} ${isOpen ? styles.active : ""}`}>
      <button className={styles.questionButton} onClick={onClick}>
        <span className={styles.questionText}>{question}</span>
        <div className={styles.iconWrapper}>
          {isOpen ? <Minus size={20} color="#b87333" /> : <Plus size={20} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className={styles.answerWrapper}
          >
            <p className={styles.answerText}>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className={styles.kicker}>Soporte & Dudas</span>
          <h2 className={styles.title}>Preguntas Frecuentes.</h2>
        </motion.div>

        <div className={styles.accordion}>
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Zap, Monitor, BarChart3, Layers } from "lucide-react";
import "../../../css/Hero.css"; // Asegúrate de crear este archivo o mover los estilos

export default function Hero() {
  // Animación para el Morfismo Orgánico (Efecto Líquido)
  const blobVariants = {
    animate: {
      borderRadius: [
        "30% 70% 70% 30% / 30% 30% 70% 70%",
        "50% 50% 20% 80% / 25% 80% 20% 75%",
        "67% 33% 47% 53% / 37% 48% 52% 63%",
        "30% 70% 70% 30% / 30% 30% 70% 70%",
      ],
      rotate: [0, 90, 180, 0],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <section id="hero-clay">
      <div className="hero-content-wrapper">
        {/* LADO IZQUIERDO: TEXTO LIMPIO */}
        <div className="hero-left">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="kicker"
          >
            Agencia Digital
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-title"
          >
            Digitalsysweb es una agencia de desarrollo web profesional
          </motion.h1>

          <motion.div
            className="hero-btns"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Link to="/quote" className="btn-quote">
              Cotizar Proyecto
            </Link>
            <a href="#contact" className="btn-contact">
              Contactar
            </a>
          </motion.div>
        </div>

        {/* LADO DERECHO: BURBUJA DESPLAZADA */}
        <div className="hero-right">
          <div className="blob-container">
            <motion.div
              className="blob-main glass-morph"
              variants={blobVariants}
              animate="animate"
            />
            <motion.div
              className="blob-secondary glass-morph"
              animate={{
                y: [0, 50, -30, 0],
                x: [0, -30, 40, 0],
                scale: [1, 1.2, 0.9, 1],
              }}
              transition={{ duration: 15, repeat: Infinity }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
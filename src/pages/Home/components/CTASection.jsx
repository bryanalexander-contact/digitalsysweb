import React from "react";
import styles from "../../../css/CTASection.module.css";
import { MessageCircle, Mail } from "lucide-react"; // npm install lucide-react

export default function CTASection() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>¿Tienes un proyecto en mente?</h2>
        <p className={styles.subtitle}>Hagámoslo realidad con diseño de vanguardia y código sólido.</p>
        
        <div className={styles.buttonGroup}>
          {/* BOTÓN PRINCIPAL: WHATSAPP (CONVERSIÓN RÁPIDA) */}
          <a href="https://wa.me/tu-numero" className={styles.primaryBtn}>
            <MessageCircle size={20} />
            Hablemos por WhatsApp
          </a>

          {/* BOTÓN SECUNDARIO: CORREO */}
          <a href="mailto:tu-correo@agencia.com" className={styles.secondaryBtn}>
            <Mail size={20} />
            Enviar un correo
          </a>
        </div>
      </div>
    </section>
  );
}
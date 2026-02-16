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
          <a href="https://wa.me/56958678410" className={styles.primaryBtn} aria-label="Hablar con Digital Sys Web por WhatsApp">
            <MessageCircle size={20} />
            Hablemos por WhatsApp
          </a>

          {/* BOTÓN SECUNDARIO: CORREO */}
          <a href="mailto:digitalsysweb@gmail.com" className={styles.secondaryBtn} aria-label="Enviar un correo a Digital Sys Web">
            <Mail size={20} />
            Enviar un correo
          </a>
        </div>
      </div>
    </section>
  );
}
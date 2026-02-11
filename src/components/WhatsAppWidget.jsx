import React from 'react';
import styles from '../css/WhatsAppWidget.module.css';

const WhatsAppWidget = () => {
  const phoneNumber = "56958678410";
  const message = "Hola Digital Sys, me gustaría cotizar un servicio.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    /* SEO: aria-label descriptivo para que Google sepa que es un canal de soporte/ventas */
    <a
      href={whatsappUrl}
      className={styles.whatsappBubble}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar a DigitalSysweb por WhatsApp para cotizaciones"
      title="Chat directo por WhatsApp"
    >
      <img
        src="/src/assets/images/whatsap_icon.svg"
        alt="Logotipo oficial de WhatsApp"
        /* SEO: Dimensiones para evitar Layout Shift (CLS) */
        width="35"
        height="35"
        /* SEO: Lazy loading para no retrasar la carga del contenido principal */
        loading="lazy"
      />

      {/* ACCESIBILIDAD: El tooltip ayuda al usuario humano, aria-hidden lo oculta del robot 
          para que no indexe la pregunta como texto principal de la página */}
      <span className={styles.tooltip} aria-hidden="true">
        ¿En qué podemos ayudarte?
      </span>
    </a>
  );
};

export default WhatsAppWidget;
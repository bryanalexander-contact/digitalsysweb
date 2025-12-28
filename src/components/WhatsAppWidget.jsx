import React from 'react';
import '../css/WhatsAppWidget.css';

const WhatsAppWidget = () => {
  const phoneNumber = "56958678410";
  const message = "Hola Digital Sys, me gustaría cotizar un servicio.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl} 
      className="whatsapp-bubble" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
        alt="WhatsApp" 
      />
      <span className="tooltip">¿En qué podemos ayudarte?</span>
    </a>
  );
};

export default WhatsAppWidget;
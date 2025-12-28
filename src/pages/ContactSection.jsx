import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../css/ContactSection.css';

const ContactSection = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendWhatsApp = () => {
    const { nombre, correo, mensaje } = formData;
    
    // Validación básica para no enviar mensajes vacíos
    if (!nombre || !correo || !mensaje) {
      return alert("Por favor, completa todos los campos antes de enviar por WhatsApp.");
    }
    
    const phone = "56958678410";

    // %0A es un salto de línea simple
    // %0A%0A es un salto de línea doble (espacio en blanco entre párrafos)
    const text = `Hola DigitalSysWeb, quiero contactarles.%0A%0A` +
                 `Nombre: ${nombre}%0A` +
                 `Correo: ${correo}%0A%0A` +
                 `Mensaje:%0A${mensaje}`;
                 
    window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${text}`, '_blank');
  };


  const sendEmail = (e) => {
    e.preventDefault();

    const SERVICE_ID = "service_m3ajams";
    const TEMPLATE_ID = "template_jv89cv6";
    const PUBLIC_KEY = "4j67lDlvueyH7ZYpy";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
          alert("¡Mensaje enviado por correo con éxito!");
          e.target.reset();
          setFormData({ nombre: '', correo: '', mensaje: '' });
      }, (error) => {
          console.error(error.text);
          alert("Error al enviar el correo, intenta por WhatsApp.");
      });
  };

  return (
    <div className="contact-container">
      {/* --- 1. HERO SECTION (ARRIBA) --- */}
      <section className="contact-hero">
        <h1 className="hero-title">Hablemos</h1>
        <p className="hero-subtitle">
          Nos encantaría saber más sobre usted y lo que podemos diseñar y construir juntos.
        </p>
        
        <div className="hero-links">
          <div className="link-group">
            <span>Conviértete en cliente</span>
            <a href="mailto:digitalsysweb@gmail.com" className="contact-link">digitalsysweb@gmail.com</a>
          </div>
          <div className="link-group">
            <span>Únase a nosotros</span>
            <a href="https://wa.me/56958678410" target="_blank" className="contact-link">Contactar por WhatsApp</a>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* --- 2. FORM SECTION (ABAJO) --- */}
      <section className="form-section">
        <div className="form-grid">
          <div className="form-info">
            <h2>Escríbenos</h2>
            <p>Puedes enviar el mensaje por correo o WhatsApp. Responderemos para atender su caso a la maxima brevedad posible.</p>
            
            <div className="direct-channels">
              <h3>Canales directos</h3>
              <div className="channel-item">
                <strong>WhatsApp:</strong> <p>+56 9 5867 8410</p>
              </div>
              <div className="channel-item">
                <strong>Correo:</strong> <p>digitalsysweb@gmail.com</p>
              </div>
              
            </div>
          </div>

          <form className="contact-form" ref={formRef} onSubmit={sendEmail}>
            <div className="input-group">
              <label>Nombre</label>
              <input type="text" name="nombre" placeholder="Tu nombre" onChange={handleChange} required />
            </div>
            <div className="input-group">
              <label>Correo</label>
              <input type="email" name="correo" placeholder="tu@correo.com" onChange={handleChange} required />
            </div>
            <div className="input-group">
              <label>Mensaje</label>
              <textarea name="mensaje" rows="4" placeholder="Cuéntanos sobre tu proyecto" onChange={handleChange} required />
            </div>

            <div className="button-group">
              <button type="submit" className="btn-primary">Enviar por Correo</button>
              <button type="button" onClick={sendWhatsApp} className="btn-secondary">Enviar por WhatsApp</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from '../../css/ContactSection.module.css';

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
    if (!nombre || !correo || !mensaje) {
      return alert("Por favor, completa todos los campos antes de enviar por WhatsApp.");
    }
    const phone = "56958678410";
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
          alert("Error al enviar el correo, intenta por WhatsApp.");
      });
  };

  return (
    <div className={styles.contactContainer}>
      {/* --- 1. FORM SECTION (AHORA ARRIBA) --- */}
      <section className={styles.formSection}>
        <div className={styles.formGrid}>
          <div className={styles.formInfo}>
            <h2 className={styles.revealText}>Escríbenos</h2>
            <p>Puedes enviar el mensaje por correo o WhatsApp. Responderemos para atender su caso a la máxima brevedad posible.</p>
            
            <div className={styles.directChannels}>
              <h3>Canales directos</h3>
              <div className={styles.channelItem}>
                <strong>WhatsApp:</strong> <p>+56 9 5867 8410</p>
              </div>
              <div className={styles.channelItem}>
                <strong>Correo:</strong> <p>digitalsysweb@gmail.com</p>
              </div>
            </div>
          </div>

          <form className={styles.contactForm} ref={formRef} onSubmit={sendEmail}>
            <div className={styles.inputGroup}>
              <label>Nombre</label>
              <input type="text" name="nombre" placeholder="Tu nombre" onChange={handleChange} required />
            </div>
            <div className={styles.inputGroup}>
              <label>Correo</label>
              <input type="email" name="correo" placeholder="tu@correo.com" onChange={handleChange} required />
            </div>
            <div className={styles.inputGroup}>
              <label>Mensaje</label>
              <textarea name="mensaje" rows="4" placeholder="Cuéntanos sobre tu proyecto" onChange={handleChange} required />
            </div>

            <div className={styles.buttonGroup}>
              <button type="submit" className={styles.btnPrimary}>Enviar por Correo</button>
              <button type="button" onClick={sendWhatsApp} className={styles.btnSecondary}>Enviar por WhatsApp</button>
            </div>
          </form>
        </div>
      </section>

      <hr className={styles.divider} />

      {/* --- 2. HERO SECTION (AHORA ABAJO) --- */}
      <section className={styles.contactHero}>
        <h1 className={styles.heroTitle}>Hablemos</h1>
        <p className={styles.heroSubtitle}>
          Nos encantaría saber más sobre usted y lo que podemos diseñar y construir juntos.
        </p>
        
        <div className={styles.heroLinks}>
          <div className={styles.linkGroup}>
            <span>Conviértete en cliente</span>
            <a href="mailto:digitalsysweb@gmail.com" className={styles.contactLink}>digitalsysweb@gmail.com</a>
          </div>
          <div className={styles.linkGroup}>
            <span>Únase a nosotros</span>
            <a href="https://wa.me/56958678410" target="_blank" className={styles.contactLink}>Contactar por WhatsApp</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
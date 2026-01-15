import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import styles from '../../../css/ContactSection.module.css';

const ContactSection = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({ nombre: '', correo: '', mensaje: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendWhatsApp = () => {
    const { nombre, correo, mensaje } = formData;
    if (!nombre || !correo || !mensaje) return alert("Por favor, completa todos los campos.");
    const phone = "56958678410";
    const text = `Hola DigitalSysWeb, quiero contactarles.%0A%0ANombre: ${nombre}%0ACorreo: ${correo}%0AMensaje: ${mensaje}`;
    window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${text}`, '_blank');
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_m3ajams", "template_jv89cv6", formRef.current, "4j67lDlvueyH7ZYpy")
      .then(() => {
          alert("¡Mensaje enviado con éxito!");
          e.target.reset();
          setFormData({ nombre: '', correo: '', mensaje: '' });
      }, () => alert("Error al enviar. Intenta por WhatsApp."));
  };

  return (
    <main className={styles.contactContainer}>
      {/* HERO SECTION */}
      <section className={styles.contactHero}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.heroTitle}>Hablemos.</h1>
          <p className={styles.heroSubtitle}>
            Nos encantaría saber más sobre usted y lo que podemos diseñar y construir juntos.
          </p>
        </motion.div>
        
        <div className={styles.heroLinks}>
          <div className={styles.linkGroup}>
            <span>Conviértete en cliente</span>
            <a href="mailto:digitalsysweb@gmail.com" className={styles.contactLink}>digitalsysweb@gmail.com</a>
          </div>
          <div className={styles.linkGroup}>
            <span>Únase a nosotros</span>
            <a href="https://wa.me/56958678410" target="_blank" className={styles.contactLink}>WhatsApp Directo</a>
          </div>
        </div>

        <motion.div 
          className={styles.scrollInvite}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          onClick={() => document.getElementById('form-section').scrollIntoView({ behavior: 'smooth' })}
        >
          <p>Escríbenos debajo</p>
          <span className={styles.arrowDown}>↓</span>
        </motion.div>
      </section>

      <hr className={styles.divider} />

      {/* FORM SECTION */}
      <section id="form-section" className={styles.formSection}>
        <div className={styles.formGrid}>
          <div className={styles.formInfo}>
            <h2 className={styles.formTitle}>Escríbenos</h2>
            <p className={styles.formText}>
              Responderemos para atender su caso a la máxima brevedad posible. 
              Estamos listos para dar vida a tu próximo proyecto digital.
            </p>
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
              <button type="submit" className={styles.btnPrimary}>Enviar Correo</button>
              <button type="button" onClick={sendWhatsApp} className={styles.btnSecondary}>Vía WhatsApp</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default ContactSection;
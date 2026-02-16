import React, { useState, useRef, useCallback } from 'react';
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { motion } from 'framer-motion';
import styles from '../../../css/ContactSection.module.css';

const ContactSection = () => {
  const formRef = useRef();
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [formData, setFormData] = useState({ nombre: '', correo: '', mensaje: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaError, setRecaptchaError] = useState(false);

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

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!executeRecaptcha) {
      alert("reCAPTCHA no está listo aún. Por favor espera.");
      return;
    }

    setIsSubmitting(true);

    try {
      const token = await executeRecaptcha('contact_form');

      const response = await fetch('/.netlify/functions/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, gRecaptchaToken: token }),
      });

      if (response.ok) {
        alert("¡Mensaje enviado con éxito!");
        formRef.current.reset();
        setFormData({ nombre: '', correo: '', mensaje: '' });
      } else {
        const errorData = await response.json();
        alert(`Error al enviar: ${errorData.error || 'Usa WhatsApp'}`);
      }
    } catch (error) {
      alert("Error de conexión. Intenta por WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className={styles.contactContainer}>
      {/* SECCIÓN HERO INTEGRADA */}
      <section className={styles.contactHero}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.heroTitle}>Hablemos.</h1>
          <p className={styles.heroSubtitle}>
            Diseño web premium y soluciones digitales para marcas que buscan autoridad.
          </p>
        </motion.div>

        <div className={styles.heroLinks}>
          <div className={styles.linkGroup}>
            <span>Contacto Directo</span>
            <a href="mailto:digitalsysweb@gmail.com" className={styles.contactLink}>digitalsysweb@gmail.com</a>
          </div>
          <div className={styles.linkGroup}>
            <span>WhatsApp</span>
            <a href="https://wa.me/56958678410" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>+56 9 5867 8410</a>
          </div>
        </div>
      </section>

      <hr className={styles.divider} />

      {/* SECCIÓN FORMULARIO */}
      <section id="form-section" className={styles.formSection}>
        <div className={styles.formGrid}>
          <div className={styles.formInfo}>
            <h2 className={styles.formTitle}>Cuéntanos tu proyecto</h2>
            <p className={styles.formText}>
              Estamos listos para escalar tu negocio. Responderemos a tu solicitud en menos de 24 horas hábiles.
            </p>
          </div>

          <form className={styles.contactForm} ref={formRef} onSubmit={sendEmail}>
            <div className={styles.inputGroup}>
              <label htmlFor="nombre">Nombre Completo</label>
              <input id="nombre" type="text" name="nombre" placeholder="Ej: Juan Pérez" onChange={handleChange} required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="correo">Correo Electrónico</label>
              <input id="correo" type="email" name="correo" placeholder="tu@correo.com" onChange={handleChange} required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="mensaje">Mensaje o Detalles del Proyecto</label>
              <textarea id="mensaje" name="mensaje" rows="4" placeholder="¿En qué podemos ayudarte?" onChange={handleChange} required />
            </div>

            <p style={{ fontSize: '0.7rem', color: '#999', marginTop: '1rem' }}>
              Este sitio está protegido por reCAPTCHA y se aplican la
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer"> Política de Privacidad</a> y los
              <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer"> Términos de Servicio</a> de Google.
            </p>

            <div className={styles.buttonGroup}>
              <button
                type="submit"
                className={styles.btnPrimary}
                disabled={isSubmitting}
                aria-label="Enviar formulario por correo"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Correo'}
              </button>
              <button type="button" onClick={sendWhatsApp} className={styles.btnSecondary} aria-label="Contactar por WhatsApp">Vía WhatsApp</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default ContactSection;
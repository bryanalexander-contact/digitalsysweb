import React from 'react';
import Seo from '../../components/Seo';
import { motion } from 'framer-motion';
import styles from '../../css/Privacy.module.css';

const Privacy = () => {
  return (
    <div className={styles.pageWrapper}>
      <Seo
        title="Política de Privacidad"
        description="Nuestra política de privacidad explica cómo protegemos tus datos al usar nuestros formularios y servicios."
        url="https://digitalsysweb.com/privacy"
        image="https://digitalsysweb.com/logo2.svg"
      />

      <div className={styles.container}>
        <motion.header
          className={styles.header}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <p className={styles.subtitle}>Privacidad Global</p>
          <h1 className={styles.title}>Privacy.</h1>
        </motion.header>

        <main className={styles.content}>
          <section>
            <h2>1. Información que recopilamos</h2>
            <p>
              En <strong>Digital Sys Web</strong>, solo recopilamos la información que tú nos proporcionas voluntariamente a través de nuestros formularios de contacto, cotizador y WhatsApp:
            </p>
            <ul className={styles.list}>
              <li>Nombre y apellidos.</li>
              <li>Dirección de correo electrónico.</li>
              <li>Número de teléfono.</li>
              <li>Detalles del proyecto que nos envíes.</li>
            </ul>
          </section>

          <section className={styles.clayCard}>
            <h2>2. Uso de los datos</h2>
            <p>
              Tus datos se utilizan exclusivamente para:
            </p>
            <ul className={styles.list}>
              <li>Responder a tus consultas o solicitudes de presupuesto.</li>
              <li>Brindar soporte técnico durante la ejecución de proyectos.</li>
              <li>Mejorar nuestra interfaz mediante cookies técnicas.</li>
            </ul>
            <p><strong>No vendemos ni compartimos tus datos con terceros para fines publicitarios.</strong></p>
          </section>

          <section>
            <h2>3. Derechos Internacionales (GDPR/CCPA)</h2>
            <p>
              Independientemente de tu ubicación, tienes derecho a acceder, rectificar o solicitar la eliminación de tus datos personales de nuestros registros enviando un correo electrónico.
            </p>
          </section>

          <div className={styles.contactBox}>
            <p>¿Dudas sobre tus datos? Contáctanos:</p>
            <strong>digitalsysweb@gmail.com</strong>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Privacy;
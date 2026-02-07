import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useCookies } from 'react-cookie'; // Importamos para revocar
import styles from '../../css/Cookies.module.css';

const Cookies = () => {
  const lastUpdate = "6 de Febrero, 2026";
  const [cookies, setCookie, removeCookie] = useCookies(['user_consent']);

  const handleRevoke = () => {
    // Eliminamos la cookie
    removeCookie('user_consent', { path: '/' });
    // Recargamos para que el sistema detecte que ya no hay permiso y muestre el banner
    window.location.reload();
  };

  return (
    <div className={styles.pageWrapper}>
      <Helmet>
        <title>Política de Cookies | Digital Sys Web</title>
        <meta name="description" content="Información detallada sobre cómo utilizamos las cookies en Digital Sys Web para mejorar su experiencia de usuario." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className={styles.container}>
        <header className={styles.header}>
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Cookies.
          </motion.h1>
          <p className={styles.lastUpdated}>Última actualización: {lastUpdate}</p>
        </header>

        <main className={styles.content}>
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p>
              En <strong>Digital Sys Web</strong>, valoramos la transparencia. Utilizamos cookies para entender cómo interactúas con nuestro sitio y ofrecerte una experiencia de navegación premium y personalizada.
            </p>
          </motion.section>

          <section className={styles.clayCard}>
            <h2>¿Qué son las cookies?</h2>
            <p>
              Son pequeños archivos de texto que se almacenan en tu dispositivo. Nos ayudan a recordar tus preferencias y a optimizar el rendimiento técnico de nuestra interfaz.
            </p>
          </section>

          <section>
            <h2>Tipos de Cookies que utilizamos</h2>
            <ul className={styles.list}>
              <li>
                <strong>Técnicas:</strong> Esenciales para que la web funcione correctamente.
              </li>
              <li>
                <strong>Analíticas:</strong> Nos permiten medir el tráfico para mejorar nuestros servicios.
              </li>
              <li>
                <strong>De Preferencia:</strong> Recuerdan tus ajustes personalizados.
              </li>
            </ul>
          </section>

          <section className={styles.clayCard} style={{ textAlign: 'center' }}>
            <h2>Tu Privacidad, Tu Control</h2>
            <p>Si deseas retirar tu consentimiento y que volvamos a mostrarte el banner de configuración, puedes hacerlo aquí:</p>
            <button 
              onClick={handleRevoke}
              style={{
                backgroundColor: '#000',
                color: '#fff',
                padding: '12px 24px',
                borderRadius: '15px',
                border: 'none',
                cursor: 'pointer',
                fontWeight: '600',
                marginTop: '10px'
              }}
            >
              Revocar Consentimiento de Cookies
            </button>
          </section>

          <section>
            <h2>Contacto</h2>
            <p>
              Si tiene dudas, escríbanos a: 
              <br />
              <a href="mailto:digitalsysweb@gmail.com" style={{color: '#000', fontWeight: '600'}}>digitalsysweb@gmail.com</a>
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Cookies;
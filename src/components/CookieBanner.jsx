import React from 'react';
import { useCookies } from 'react-cookie';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from '../css/CookieBanner.module.css';

const CookieBanner = () => {
  const [cookies, setCookie] = useCookies(['user_consent']);

  const acceptCookies = () => {
    // Seteamos la cookie por 30 días (estándar internacional)
    setCookie('user_consent', 'true', { 
      path: '/', 
      maxAge: 2592000,
      sameSite: 'lax' // Mejora la seguridad y es bien visto por navegadores modernos
    });
  };

  return (
    <AnimatePresence>
      {!cookies.user_consent && (
        <motion.div 
          /* SECCIÓN SEO: Usamos 'aside' porque es contenido tangencial y 'role' para accesibilidad */
          role="complementary"
          aria-label="Aviso de cookies"
          className={styles.clayBanner}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className={styles.content}>
            <p>
              Utilizamos cookies premium para mejorar tu experiencia digital en Digital Sys Web. 
              {/* SEO: El link tiene un título descriptivo */}
              <Link 
                to="/cookies" 
                className={styles.link}
                title="Leer nuestra política de cookies detallada"
              > 
                Leer más
              </Link>
            </p>
            
            {/* ACCESIBILIDAD: El botón tiene un label claro para lectores de pantalla */}
            <button 
              onClick={acceptCookies} 
              className={styles.btnAccept}
              aria-label="Aceptar y cerrar aviso de cookies"
            >
              Aceptar
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from '../css/CookieBanner.module.css';

const CookieBanner = () => {
  const [cookies, setCookie] = useCookies(['user_consent']);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const acceptCookies = () => {
    setCookie('user_consent', 'true', {
      path: '/',
      maxAge: 2592000,
      sameSite: 'lax'
    });
  };

  // Prevent hydration mismatch by returning null during server-side render
  if (!mounted) return null;

  return (
    <AnimatePresence>
      {!cookies.user_consent && (
        <motion.div
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
              <Link
                to="/cookies"
                className={styles.link}
                title="Leer nuestra política de cookies detallada"
              >
                Leer más
              </Link>
            </p>

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
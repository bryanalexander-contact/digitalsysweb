import React from 'react';
import styles from '../css/footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.mainFooter}>
      <div className={styles.footerContainer}>
        {/* Parte Superior */}
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <h2 className={styles.footerLogo}>DIGITAL SYS</h2>
            <p className={styles.footerTagline}>
              Elevando el estándar digital a través del diseño y la tecnología.
            </p>
          </div>

          <div className={styles.footerRightContent}>
            {/* Navegación */}
            <div className={styles.footerNavLinks}>
              <a href="#about">Sobre nosotros</a>
              <a href="#services">Servicios</a>
              <a href="#contact">Contacto</a>
              <a href="#quote" className={styles.quoteLink}>Cotizar</a>
            </div>

            {/* Datos de contacto */}
            <div className={styles.footerContactGrid}>
              <div className={styles.contactItem}>
                <span className={styles.label}>Escríbenos</span>
                <a href="mailto:digitalsysweb@gmail.com">digitalsysweb@gmail.com</a>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.label}>Llámanos</span>
                <a href="tel:+56958678410">+56 9 5867 8410</a>
              </div>
            </div>
          </div>
        </div>

        <hr className={styles.footerDivider} />

        {/* Parte Inferior */}
        <div className={styles.footerBottom}>
          <div className={styles.footerCopyright}>
            <p>&copy; {currentYear} Digital Sys Web. Todos los derechos reservados.</p>
          </div>

          <div className={styles.footerLegal}>
            <a href="/cookies">Política de Cookies</a>
            <a href="/privacidad">Privacidad</a>
            <a href="/terminos">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
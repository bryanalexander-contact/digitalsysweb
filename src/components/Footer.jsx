import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.mainFooter} role="contentinfo">
      <div className={styles.footerContainer}>
        <div className={styles.footerTop}>
          <div className={styles.footerBrand} itemScope itemType="https://schema.org/Organization">
            {/* SEO: El nombre de la marca en el footer refuerza el branding */}
            <h2 className={styles.footerLogo} itemProp="name">DigitalSysWeb</h2>
            <p className={styles.footerTagline} itemProp="description">
              Elevando el estándar digital a través del diseño web premium y tecnología de vanguardia.
            </p>
          </div>

          <div className={styles.footerRightContent}>
            <nav className={styles.footerNavLinks} aria-label="Enlaces rápidos footer">
              <Link to="/about">Sobre nosotros</Link>
              <Link to="/services">Servicios Digitales</Link>
              <Link to="/contact">Contacto Directo</Link>
              <Link to="/quote" className={styles.quoteLink}>Cotizar Presupuesto</Link>
            </nav>

            <div className={styles.footerContactGrid}>
              <div className={styles.contactItem}>
                <span className={styles.label}>Escríbenos</span>
                <a href="mailto:digitalsysweb@gmail.com" title="Enviar correo a Digital Sys Web">digitalsysweb@gmail.com</a>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.label}>Llámanos</span>
                {/* SEO LOCAL: El formato de teléfono debe ser internacional */}
                <a href="tel:+56958678410" title="Llamar a soporte técnico">+56 9 5867 8410</a>
              </div>
            </div>
          </div>
        </div>

        <hr className={styles.footerDivider} aria-hidden="true" />

        <div className={styles.footerBottom}>
          <div className={styles.footerCopyright}>
            <p>&copy; {currentYear} Digital Sys Web. Expertos en Desarrollo Web en Chile y el Mundo.</p>
          </div>

          <nav className={styles.footerLegal} aria-label="Información legal">
            <Link to="/cookies" rel="nofollow">Política de Cookies</Link>
            <Link to="/privacy" rel="nofollow">Privacidad</Link>
            <Link to="/terms" rel="nofollow">Términos y Condiciones</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
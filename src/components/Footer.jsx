import React from 'react';
import '../css/footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="footer-container">
        {/* Parte Superior */}
        <div className="footer-top">
          <div className="footer-brand">
            <h2 className="footer-logo">DIGITAL SYS</h2>
            <p className="footer-tagline">
              Elevando el estándar digital a través del diseño y la tecnología.
            </p>
          </div>

          <div className="footer-right-content">
            {/* Nuevos Enlaces Solicitados */}
            <div className="footer-nav-links">
              <a href="#about">Sobre nosotros</a>
              <a href="#services">Servicios</a>
              <a href="#contact">Contacto</a>
              <a href="#quote" className="quote-link">Cotizar</a>
            </div>

            <div className="footer-contact-grid">
              <div className="contact-item">
                <span className="label">Escríbenos</span>
                <a href="mailto:digitalsysweb@gmail.com">digitalsysweb@gmail.com</a>
              </div>
              <div className="contact-item">
                <span className="label">Llámanos</span>
                <a href="tel:+56958678410">+56 9 5867 8410</a>
              </div>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        {/* Parte Inferior */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} Digital Sys Web. Todos los derechos reservados.</p>
          </div>

          <div className="footer-legal">
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
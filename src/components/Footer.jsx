import React from 'react';
import '../css/footer.css';

const Footer = () => {
  // Año dinámico para el copyright
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="footer-container">
        {/* Parte Superior: Branding y Contacto */}
        <div className="footer-top">
          <div className="footer-brand">
            <h2 className="footer-logo">DIGITAL SYS</h2>
            <p>
              Elevando el estándar digital a través del diseño y la tecnología.
            </p>
          </div>

          <div className="footer-contact-grid">
            <div className="contact-item">
              <span>Escríbenos</span>
              <a href="mailto:digitalsysweb@gmail.com">
                digitalsysweb@gmail.com
              </a>
            </div>
            <div className="contact-item">
              <span>Llámanos</span>
              <a href="tel:+56958678410">
                +56 9 5867 8410
              </a>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <hr className="footer-divider" />

        {/* Parte Inferior: Copyright y Legales */}
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
import React from "react";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section id="hero">
        <h1>Bienvenido a DigitalSysWeb</h1>
        <p>Creamos sitios web profesionales, modernos y rápidos</p>
        <button>Comienza tu proyecto</button>
      </section>

      {/* Servicios */}
      <section id="services">
        <h2>Nuestros Servicios</h2>
        <div className="services-list">
          <div className="service-item">
            <h3>Desarrollo Web</h3>
            <p>Diseño y desarrollo de sitios web a medida</p>
          </div>
          <div className="service-item">
            <h3>Diseño UX/UI</h3>
            <p>Experiencia de usuario y diseño visual profesional</p>
          </div>
          <div className="service-item">
            <h3>Mantenimiento</h3>
            <p>Soporte y actualización de tu sitio web</p>
          </div>
        </div>
      </section>

      {/* Portafolio */}
      <section id="portfolio">
        <h2>Portafolio</h2>
        <div className="portfolio-preview">
          <div className="project-item">Proyecto 1</div>
          <div className="project-item">Proyecto 2</div>
          <div className="project-item">Proyecto 3</div>
        </div>
      </section>

      {/* Cotizador (placeholder) */}
      <section id="quote">
        <h2>Solicita tu cotización</h2>
        <p>Formulario de cotización próximamente...</p>
      </section>

      {/* Contacto */}
      <section id="contact">
        <h2>Contáctanos</h2>
        <p>Escríbenos y te responderemos a la brevedad</p>
        <button>Contactar</button>
      </section>
    </div>
  );
}

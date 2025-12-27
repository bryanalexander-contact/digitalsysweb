import React from "react";

export default function Services() {
  return (
    <div>
      <section id="services-page">
        <h1>Servicios</h1>
        <div className="services-list">
          <div className="service-item">
            <h2>Desarrollo Web</h2>
            <p>Creación de sitios web modernos y optimizados</p>
          </div>
          <div className="service-item">
            <h2>Diseño UX/UI</h2>
            <p>Diseño visual y experiencia de usuario profesional</p>
          </div>
          <div className="service-item">
            <h2>Mantenimiento</h2>
            <p>Actualización y soporte técnico para tu sitio</p>
          </div>
        </div>
      </section>
    </div>
  );
}

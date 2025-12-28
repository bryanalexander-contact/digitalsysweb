import React from 'react';
import '../css/services.css';

const servicesData = [
  {
    id: '01',
    title: 'Creación de Páginas Web',
    description: 'No construimos sitios, diseñamos experiencias de alto rendimiento. Desarrollamos interfaces que fusionan una estética minimalista con una arquitectura técnica robusta, asegurando que tu marca deje una huella digital impecable.',
    image: '/src/assets/images/creacion_web.jpg',
    alt: 'Creación Web Profesional'
  },
  {
    id: '02',
    title: 'Posicionamiento Online',
    description: 'La visibilidad es la moneda del éxito. Implementamos estrategias de SEO técnico y semántico para que tu negocio lidere los resultados de búsqueda, atrayendo tráfico de alta calidad que se traduce en crecimiento real.',
    image: '/src/assets/images/seo_web.jpg',
    alt: 'Estrategia SEO'
  },
  {
    id: '03',
    title: 'Modernización Digital',
    description: 'Tu web debe ser tu mejor vendedor. Transformamos plataformas obsoletas en ecosistemas modernos y optimizados para la conversión. Actualizamos tu tecnología para que tu única preocupación sea gestionar tus ventas.',
    image: '/src/assets/images/modernizacion_web.jpg',
    alt: 'Transformación Digital'
  }
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Expertise</span>
          <h2 className="section-title">Nuestras Soluciones</h2>
        </div>

        <div className="services-container">
          {servicesData.map((service, index) => (
            <div key={service.id} className="service-row">
              <div className="service-content">
                <h4 className="service-number">{service.id}</h4>
                <h3 className="service-h3">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
              <div className="service-visual">
                <div className="image-wrapper">
                  <img src={service.image} alt={service.alt} loading="lazy" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
import React, { useEffect, useRef } from 'react';
import '../css/services.css';

const servicesData = [
  {
    title: 'Creación de Páginas Web',
    description: 'No construimos sitios, diseñamos experiencias de alto rendimiento. Desarrollamos interfaces que fusionan una estética minimalista con una arquitectura técnica robusta.',
    image: '/src/assets/images/creacion_web.jpg',
  },
  {
    title: 'Posicionamiento Online',
    description: 'La visibilidad es la moneda del éxito. Implementamos estrategias de SEO técnico y semántico para que tu negocio lidere los resultados de búsqueda.',
    image: '/src/assets/images/seo_web.jpg',
  },
  {
    title: 'Modernización Digital',
    description: 'Tu web debe ser tu mejor vendedor. Transformamos plataformas obsoletas en ecosistemas modernos y optimizados para la conversión.',
    image: '/src/assets/images/modernizacion_web.jpg',
  }
];

const Services = () => {
  const revealRefs = useRef([]);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1, // Un poco antes para que se sienta fluido
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    revealRefs.current.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="services-page-wrapper">
      <section className="hero-services">
        <div className="content-limit">
          <h1 className="reveal-text">Un socio integral en la innovación digital de tu negocio.</h1>
          <p className="reveal-text delay-1">Nuestra experiencia en tecnología y diseño nos permite convertir tu marca en una top profesional dentro de tu rubro.</p>
        </div>
      </section>

      <section className="services-list">
        <div className="content-limit">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className="service-row-new" 
              ref={addToRefs}
            >
              <div className="service-visual-box">
                <div className="img-container">
                  <img src={service.image} alt={service.title} loading="lazy" />
                </div>
              </div>
              <div className="service-text-box">
                <h2 className="service-title-big">{service.title}</h2>
                <p className="service-desc-big">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
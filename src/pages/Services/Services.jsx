import React, { useEffect, useRef } from 'react';
import styles from '../../css/services.module.css';

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
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Importante: Usamos la clase desde el objeto styles
          entry.target.classList.add(styles.active);
        }
      });
    }, observerOptions);

    revealRefs.current.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.servicesPageWrapper}>
      <section className={styles.heroServices}>
        <div className={styles.contentLimit}>
          <h1 className={styles.revealText}>Un socio integral en la innovación digital de tu negocio.</h1>
          <p className={`${styles.revealText} ${styles.delay1}`}>
            Nuestra experiencia en tecnología y diseño nos permite convertir tu marca en una top profesional dentro de tu rubro.
          </p>
        </div>
      </section>

      <section className={styles.servicesList}>
        <div className={styles.contentLimit}>
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className={styles.serviceRowNew} 
              ref={addToRefs}
            >
              <div className={styles.serviceVisualBox}>
                <div className={styles.imgContainer}>
                  <img src={service.image} alt={service.title} loading="lazy" />
                </div>
              </div>
              <div className={styles.serviceTextBox}>
                <h2 className={styles.serviceTitleBig}>{service.title}</h2>
                <p className={styles.serviceDescBig}>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
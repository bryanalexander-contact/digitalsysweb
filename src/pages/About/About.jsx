import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async'; // Importamos Helmet
import styles from '../../css/About.module.css';

const About = () => {
  // Configuración de SEO específica para esta página
  const seoData = {
    title: "Sobre Nosotros | Digital Sys Web - Expertos en Diseño Digital",
    description: "En DigitalSysweb transformamos marcas con interfaces de alta calidad, autoridad y minimalismo absoluto. Conoce nuestra visión de diseño premium.",
    url: "https://digitalsysweb.com/about",
    image: "https://digitalsysweb.com/og-about.jpg" // Imagen recomendada para compartir
  };

  // Animación para el núcleo (movimiento muy lento)
  const coreAnim = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, 0],
    },
    transition: {
      duration: 15,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  // Animación para los satélites (revoloteo cercano)
  const satelliteAnim = (xDist, yDist, duration, delay) => ({
    animate: {
      x: [0, xDist, -xDist, 0],
      y: [0, yDist, -yDist, 0],
      scale: [1, 1.1, 0.9, 1],
    },
    transition: {
      duration: duration,
      repeat: Infinity,
      ease: "linear",
      delay: delay
    }
  });

  return (
    <div className={styles.clayPageWrapper}>
      {/* SECCIÓN SEO: Helmet inyecta estas etiquetas en el <head> */}
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href={seoData.url} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoData.url} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:image" content={seoData.image} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={seoData.image} />
      </Helmet>

      <section className={styles.heroClay}>
        
        {/* LADO IZQUIERDO: TEXTO */}
        <div className={styles.heroContentLeft}>
          <motion.h1 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 1.2 }}
          >
            Transformamos marcas digitales hacia una experiencia<br /> 
            <span className={styles.accent}>de primera calidad</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            Diseñamos interfaces que respiran autoridad y minimalismo absoluto. Especialistas en posicionamiento de marca y desarrollo web de alto impacto.
          </motion.p>
        </div>

        {/* LADO DERECHO: ECOSISTEMA DE CÍRCULOS */}
        {/* Añadimos aria-hidden porque es un elemento puramente decorativo */}
        <div className={styles.sphereEcosystem} aria-hidden="true">
          <div className={styles.sphereContainer}>
            {/* Círculo Núcleo */}
            <motion.div className={styles.coreSphere} {...coreAnim} />
            
            {/* Satélites revoloteando */}
            <motion.div 
              className={`${styles.satellite} ${styles.sat1}`} 
              {...satelliteAnim(40, -50, 12, 0)} 
            />
            <motion.div 
              className={`${styles.satellite} ${styles.sat2}`} 
              {...satelliteAnim(-50, 30, 15, 2)} 
            />
          </div>
        </div>
      </section>

      <section className={styles.contentDark}>
        <div className={styles.container}>
          <h2>Resultados Competitivos en el Mercado Digital</h2>
          <p>
            Elevamos tu presencia digital al siguiente nivel utilizando tecnologías de vanguardia 
            como React y estrategias de optimización avanzadas para garantizar que tu marca destaque.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
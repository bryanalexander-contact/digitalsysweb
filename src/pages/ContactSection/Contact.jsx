import React from 'react';
import { Helmet } from 'react-helmet-async';
import Seo from '../../components/Seo';
import ContactSection from './components/ContactSection';

const Contact = () => {
  const seoData = {
    title: "Contacto | Digital Sys Web - Agencia de Diseño Web",
    description: "Contacta con Digital Sys Web. Estamos listos para dar vida a tu próximo proyecto digital. Escríbenos por correo o WhatsApp directo.",
    url: "https://digitalsysweb.com/contact"
  };

  // Datos estructurados para que Google muestre información de contacto en el buscador
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Digital Sys Web",
      "url": "https://digitalsysweb.com",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+56958678410",
        "contactType": "customer service",
        "email": "digitalsysweb@gmail.com"
      }
    }
  };

  return (
    <>
      <Seo
        title="Contacto"
        description="Contacta con Digital Sys Web. Estamos listos para dar vida a tu próximo proyecto digital. Escríbenos por correo o WhatsApp directo."
        url="https://digitalsysweb.com/contact"
        image="https://digitalsysweb.com/logo2.svg"
        schema={jsonLd}
      />
      <ContactSection />
    </>
  );
};

export default Contact;
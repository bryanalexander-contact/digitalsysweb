import React from 'react';
import { Helmet } from 'react-helmet-async';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import Seo from '../../components/Seo';
import ContactSection from './components/ContactSection';

const Contact = () => {
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
    <GoogleReCaptchaProvider reCaptchaKey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}>
      <Seo
        title="Contacto"
        description="Contacta con Digital Sys Web. Estamos listos para dar vida a tu próximo proyecto digital. Escríbenos por correo o WhatsApp directo."
        url="https://digitalsysweb.com/contact"
        image="https://digitalsysweb.com/logo2.svg"
        schema={jsonLd}
      />
      <ContactSection />
    </GoogleReCaptchaProvider>
  );
};

export default Contact;
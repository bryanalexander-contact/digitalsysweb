import React from 'react';
import { useNavigate } from 'react-router-dom';
import ServiceCard from './components/ServiceCard';

// Aquí asumimos que tienes tu componente de burbujas ya creado
// import BubbleHero from '../components/BubbleHero'; 

const Services = () => {
  const navigate = useNavigate();

  const servicesData = [
    {
      title: "Landing Pages",
      description: "Páginas de alto impacto diseñadas para convertir visitantes en clientes. Ideales para campañas específicas.",
      color: "#EEF2FF", // Azul suave
      accent: "#4F46E5",
      path: "/cotizador-landing"
    },
    {
      title: "Sitios Web Completos",
      description: "Presencia digital robusta. Sitios multi-página estáticos, ultra rápidos y optimizados para SEO.",
      color: "#F0FDF4", // Verde suave
      accent: "#16A34A",
      path: "/cotizador-web"
    },
    {
      title: "Rediseño Web",
      description: "Transformamos tu sitio actual en una experiencia moderna, rápida y alineada con tu marca actual.",
      color: "#FFF7ED", // Naranja/Crema suave
      accent: "#EA580C",
      path: "/cotizador-redisenio"
    }
  ];

  return (
    <div className="services-container">
      {/* SECCIÓN HERO (Tus burbujas van aquí) */}
      <section className="hero-section" style={{ height: '60vh', position: 'relative' }}>
        {/* <BubbleHero /> */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Nuestros Servicios</h1>
          <p>Soluciones digitales a medida con estética Clay</p>
        </div>
      </section>

      {/* SECCIÓN DE SERVICIOS */}
      <section style={{ padding: '80px 20px', display: 'flex', flexDirection: 'column', gap: '40px', maxWidth: '1200px', margin: '0 auto' }}>
        {servicesData.map((service, index) => (
          <ServiceCard 
            key={index}
            {...service}
            onClick={() => navigate(service.path)}
          />
        ))}
      </section>
    </div>
  );
};

export default Services;
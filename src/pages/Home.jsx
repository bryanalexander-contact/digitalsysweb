import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom"; // Asumiendo que usas react-router
import "../css/Home.css";
import { Zap, Monitor, BarChart3, Layers } from 'lucide-react';

export default function Home() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }
      draw() {
        ctx.fillStyle = "rgba(0, 82, 255, 0.2)"; // Puntos azules muy sutiles
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < 50; i++) particles.push(new Particle());

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      requestAnimationFrame(animate);
    }
    animate();
  }, []);

  return (
    <div className="home-container">
      {/* HERO SECTION */}
      <section id="hero">
        <canvas ref={canvasRef} className="hero-canvas"></canvas>
        <h1>DigitalSysWeb</h1>
        <p>Creamos experiencias digitales de alto impacto con un enfoque en ingeniería de precisión.</p>
        <div className="hero-btns">
          <Link to="/quote" className="btn-primary">Cotizar Proyecto</Link>
          <a href="#contact" className="btn-secondary">Contactar</a>
        </div>
      </section>
      

      <section className="bento-section">
  <div className="bento-grid">
    
    {/* Cuadro 1: Performance */}
    <div className="bento-item item-large">
      <div className="bento-content">
        <h4>Performance</h4>
        <h3>Velocidad que convierte visitantes en clientes.</h3>
        <p>Optimizamos cada línea de código para obtener puntuaciones de 100 en Core Web Vitals.</p>
      </div>
      <div className="bento-icon-wrapper">
        <Zap size={48} strokeWidth={1} />
      </div>
    </div>

    {/* Cuadro 2: Diseño */}
    <div className="bento-item">
      <div className="bento-content">
        <h4>Design</h4>
        <h3>Responsive & Adaptativo.</h3>
      </div>
      <div className="bento-icon-wrapper">
        <Monitor size={32} strokeWidth={1} />
      </div>
    </div>

    {/* Cuadro 3: SEO */}
    <div className="bento-item">
      <div className="bento-content">
        <h4>Growth</h4>
        <h3>Optimización SEO.</h3>
      </div>
      <div className="bento-icon-wrapper">
        <BarChart3 size={32} strokeWidth={1} />
      </div>
    </div>

    {/* Cuadro 4: Tecnología */}
    <div className="bento-item item-medium">
      <div className="bento-content">
        <h4>Technology</h4>
        <h3>Stack moderno y escalable.</h3>
        <p>Utilizamos React y arquitecturas headless para máxima flexibilidad.</p>
      </div>
      <div className="bento-icon-wrapper">
        <Layers size={40} strokeWidth={1} />
      </div>
    </div>

  </div>
</section>


        {/* WHY DIGITALSYSWEB */}
<section id="why-digitalsysweb" class="why-digitalsysweb-section">
    <div class="container">
        <h2 class="section-title">¿Por qué DigitalSysWeb?</h2>

        <div class="features-grid">
            <div class="feature-item">
                <div class="feature-header">
                    <span class="feature-number">01</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <h3>Trato Directo y Especializado</h3>
                <p>A diferencia de las agencias masivas, aquí tratas directamente con los desarrolladores. Sin intermediarios, asegurando que tu visión se traduzca perfectamente en código.</p>
            </div>

            <div class="feature-item">
                <div class="feature-header">
                    <span class="feature-number">02</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap"><path d="M4 14a1 1 0 0 1-.49-1.96l4-7.92a1 1 0 0 1 1.49-.06L14 10a1 1 0 0 0 1 0l3.96-3.96a2 2 0 0 1 2.83 2.83L19 11"/><path d="M19 14a1 1 0 0 1-.49-1.96l4-7.92a1 1 0 0 1 1.49-.06L14 10a1 1 0 0 0 1 0l3.96-3.96a2 2 0 0 1 2.83 2.83L19 11"/></svg>
                </div>
                <h3>Agilidad de Start-up, Calidad Enterprise</h3>
                <p>Combinamos la velocidad de ejecución de un equipo ágil con los estándares de calidad más altos. Entregamos soluciones rápidas sin comprometer la escalabilidad.</p>
            </div>

            <div class="feature-item">
                <div class="feature-header">
                    <span class="feature-number">03</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-check"><path d="M20 13c0 5-6 9-8 9s-8-4-8-9V5l8-3 8 3z"/><path d="m9 12 2 2 4-4"/></svg>
                </div>
                <h3>Arquitectura para el Futuro</h3>
                <p>No solo creamos webs que se ven bien hoy; construimos sobre bases sólidas y código limpio que permiten que tu sitio crezca junto con tu negocio durante años.</p>
            </div>
        </div>
    </div>
</section>

      {/* --- SECCIÓN SERVICES ROW (ESTILO CLAY) --- */}
<section className="services-row-section">
  <div className="services-row-container">
    <div className="services-row-content">
      {/* Etiqueta superior sutil */}
      <span className="eyebrow">Expertise Digital</span>
      
      {/* Título Principal Impactante */}
      <h2 className="services-row-title">
        Soluciones que transforman <br /> tu presencia digital.
      </h2>
      
      {/* Subtítulo descriptivo */}
      <p className="services-row-subtitle">
        Diseñamos y desarrollamos productos digitales de alto impacto, 
        enfocados en la conversión y la experiencia de usuario de nivel internacional.
      </p>
      
      {/* Enlace con estilo de botón minimalista */}
      <a href="/servicios" className="services-link-button">
        Ver nuestros servicios
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </a>
    </div>
  </div>
</section>
    

      {/* CONTACTO */}
      <section id="contact">
        <h2>¿Tienes un proyecto en mente?</h2>
        <p>Hablemos sobre cómo podemos escalar tu negocio.</p>
        <button className="btn-primary" style={{marginTop: '30px'}}>Enviar Mensaje</button>
      </section>



      <section class="faq-section">
    <div class="faq-container">
        <h2 class="faq-title">Preguntas Frecuentes</h2>
        
        <div class="faq-grid">
            <details class="faq-item" open>
                <summary class="faq-question">
                    ¿Cómo es el proceso de creación web?
                    <span class="faq-icon"></span>
                </summary>
                <div class="faq-answer">
                    <p>Nuestro enfoque se centra en la estrategia de marca y la experiencia de usuario. Creamos interfaces intuitivas y de alto rendimiento utilizando tecnologías modernas que garantizan escalabilidad.</p>
                </div>
            </details>

            <details class="faq-item">
                <summary class="faq-question">
                    ¿Qué incluye la modernización digital?
                    <span class="faq-icon"></span>
                </summary>
                <div class="faq-answer">
                    <p>Analizamos su infraestructura actual y migramos sus procesos a sistemas eficientes en la nube, optimizando la velocidad, la seguridad y la usabilidad del producto.</p>
                </div>
            </details>

            <details class="faq-item">
                <summary class="faq-question">
                    ¿Cuánto tiempo toma el posicionamiento SEO?
                    <span class="faq-icon"></span>
                </summary>
                <div class="faq-answer">
                    <p>El SEO es una inversión a largo plazo. Generalmente, los resultados significativos comienzan a verse entre los 3 y 6 meses, dependiendo de la autoridad actual del dominio y la competencia.</p>
                </div>
            </details>
        </div>
    </div>
</section>
    </div>


      
  );
}
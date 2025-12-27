import React, { useEffect, useRef } from "react";
// Importa tus CSS
import "../css/Home.css"; // Tu CSS de la Home
import "../index.css"; // Tu reset CSS global

export default function Home() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // Asegúrate de que el canvas exista
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];
    const numParticles = 80; // Menos partículas para un efecto más sutil y profesional

    // Clase para cada partícula (como pequeñas chispas de magia)
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5; // Tamaño más pequeño
        this.speedX = Math.random() * 0.2 - 0.1; // Velocidad X más lenta
        this.speedY = Math.random() * 0.2 - 0.1; // Velocidad Y más lenta
        this.color = `rgba(255, 255, 255, ${Math.random() * 0.8 + 0.2})`; // Blanco semitransparente
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.size > 0.1) this.size -= 0.01; // Las partículas se desvanecen lentamente

        // Reiniciar partícula si se sale de la pantalla
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height || this.size <= 0.1) {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.size = Math.random() * 2 + 0.5;
          this.speedX = Math.random() * 0.2 - 0.1;
          this.speedY = Math.random() * 0.2 - 0.1;
        }
      }
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Inicializar partículas
    for (let i = 0; i < numParticles; i++) {
      particles.push(new Particle());
    }

    // Bucle de animación
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Borra el frame anterior
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      requestAnimationFrame(animate);
    }
    animate();

    // Redimensionar el canvas con la ventana
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // El array vacío asegura que se ejecuta solo una vez al montar

  return (
    <div className="home-container">
      <section id="hero">
        <canvas ref={canvasRef} className="hero-canvas"></canvas> {/* El lienzo mágico */}
        <h1>DigitalSysWeb</h1>
        <p>Donde la ingeniería se funde con la magia digital.</p>
        <button>Inicia el viaje</button>
      </section>

      {/* Resto de tu código JSX para Servicios, Portafolio, Contacto... */}
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

      <section id="portfolio">
        <h2>Portafolio</h2>
        <div className="portfolio-preview">
          <div className="project-item">Proyecto 1</div>
          <div className="project-item">Proyecto 2</div>
          <div className="project-item">Proyecto 3</div>
        </div>
      </section>

      <section id="quote">
        <h2>Solicita tu cotización</h2>
        <p>Formulario de cotización próximamente...</p>
      </section>

      <section id="contact">
        <h2>Contáctanos</h2>
        <p>Escríbenos y te responderemos a la brevedad</p>
        <button>Contactar</button>
      </section>
    </div>
  );
}
import React from "react";

export default function Portfolio() {
  return (
    <div>
      <section id="portfolio-page">
        <h1>Portafolio</h1>
        <p>Algunos de nuestros proyectos más destacados</p>
        <div className="projects-grid">
          {/* Proyecto 1 */}
          <div className="project-card">
            <img src="/src/assets/project1.jpg" alt="Proyecto 1" />
            <div className="project-info">
              <h3>Proyecto 1</h3>
              <p>Descripción breve del proyecto y tecnologías usadas</p>
              <button>Ver más</button>
            </div>
          </div>

          {/* Proyecto 2 */}
          <div className="project-card">
            <img src="/src/assets/project2.jpg" alt="Proyecto 2" />
            <div className="project-info">
              <h3>Proyecto 2</h3>
              <p>Descripción breve del proyecto y tecnologías usadas</p>
              <button>Ver más</button>
            </div>
          </div>

          {/* Proyecto 3 */}
          <div className="project-card">
            <img src="/src/assets/project3.jpg" alt="Proyecto 3" />
            <div className="project-info">
              <h3>Proyecto 3</h3>
              <p>Descripción breve del proyecto y tecnologías usadas</p>
              <button>Ver más</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

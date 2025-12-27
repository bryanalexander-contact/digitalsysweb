import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <h1>DigitalSysweb</h1>
      </div>

      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/about">Sobre Nosotros</Link>
        <Link to="/portfolio">Portafolio</Link>
        <Link to="/services">Servicios</Link>
      </nav>

      <button id="lang-toggle">ES/EN</button>
    </header>
  );
}

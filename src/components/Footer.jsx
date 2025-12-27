import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="contact-info">
        <p>Celular: +56 9 5867 8410</p>
        <p>Email: bryanalexander.contact@gmail.com</p>
      </div>

      <div className="legal-links">
        <a href="/privacy">Política de Privacidad</a> |{" "}
        <a href="/terms">Términos y Condiciones</a> |{" "}
        <a href="/cookies">Política de Cookies</a>
      </div>
    </footer>
  );
}

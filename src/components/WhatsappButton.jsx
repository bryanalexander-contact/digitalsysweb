import React from "react";

export default function WhatsappButton() {
  const phoneNumber = "+56958678410"; // tu número
  const message = "Hola, quiero contactarte"; // mensaje por defecto (opcional)

  const handleClick = () => {
    window.open(
      `https://wa.me/${phoneNumber.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <button
      onClick={handleClick}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#25D366",
        color: "white",
        border: "none",
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        cursor: "pointer",
        fontSize: "24px",
      }}
      title="Contáctame por WhatsApp"
    >
      🟢
    </button>
  );
}

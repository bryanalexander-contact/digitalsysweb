import React from 'react';

const ServiceCard = ({ title, description, color, accent, onClick }) => {
  return (
    <div 
      onClick={onClick}
      style={{
        backgroundColor: color,
        padding: '40px',
        borderRadius: '30px',
        cursor: 'pointer',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        border: `1px solid ${accent}20`,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      <div style={{ maxWidth: '70%' }}>
        <h2 style={{ color: accent, marginBottom: '10px', fontSize: '2rem' }}>{title}</h2>
        <p style={{ color: '#444', fontSize: '1.1rem', lineHeight: '1.6' }}>{description}</p>
      </div>
      <div style={{
        backgroundColor: accent,
        color: 'white',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1.5rem'
      }}>
        →
      </div>
    </div>
  );
};

export default ServiceCard;
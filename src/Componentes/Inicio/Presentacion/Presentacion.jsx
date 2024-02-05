import React, { useState, useEffect } from 'react';
import "./Presentacion.css";

const Presentacion = () => {
  const frases = [
    "Potenciamos tu negocio, diseñamos tu Tienda Online",
    "Creamos tu sitio web totalmente personalizado y a tu medida",
    "Necesitas un portfolio, aqui te lo creamos",
    "Si ya tenes tu sitio, lo modificamos segun tus necesidades",
    "y mucho mas..."
  ];

  const [fraseIndex, setFraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFraseIndex((prevIndex) => (prevIndex + 1) % frases.length);
    }, 3000); // Cambia cada 3 segundos (ajusta según tus necesidades)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='fondoPresentacion'>
      <h1>Bienvenidos a  ME WEB - Soluciones en la web! </h1>

      <h2 style={{ opacity: fraseIndex === 0 ? 1 : 0 }}>
        {frases[0]}
      </h2>
      <h2 style={{ opacity: fraseIndex === 1 ? 1 : 0 }}>
        {frases[1]}
      </h2>
      <h2 style={{ opacity: fraseIndex === 2 ? 1 : 0 }}>
        {frases[2]}
      </h2>
      <h2 style={{ opacity: fraseIndex === 3 ? 1 : 0 }}>
        {frases[3]}
      </h2>
      <h2 style={{ opacity: fraseIndex === 4 ? 1 : 0 }}>
        {frases[4]}
      </h2>
    </div>
  );
};

export default Presentacion;

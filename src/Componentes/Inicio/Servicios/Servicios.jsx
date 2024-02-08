import React from "react";
import "./Servicios.css";

const Servicios = () => {
  return (
    <div className="fondoServicios">
      <h2 className="h2Servicios">Tu Viaje Digital Comienza Aquí</h2>
      <h3 className="h3ServicioTitulo">Descubre Nuestros Servicios, Define Tus Soluciones</h3>

      <section className="card-container">
        <div className="card">
            <h3>DISEÑO WEB PROFESIONAL Y PERSONALIZADO</h3>
            <p>
            Transformamos tus ideas en una presencia online única y profesional.
            Cada proyecto es una oportunidad para crear una experiencia envolvente
            que atraiga a tus visitantes con un diseño intuitivo y cautivador.
            </p>
        </div>

        <div className="card">
            <h3>TIENDAS ONLINE A MEDIDA</h3>
            <p>
            Desarrollamos tiendas online adaptadas a tus necesidades, proporcionando
            una gestión eficiente de tus productos. Desde opciones de pago hasta
            personalizaciones en el proceso de envío, potenciamos tus ventas y
            expandimos tu presencia en el mundo digital.
            </p>
        </div>

        <div className="card">
            <h3>ESTRATEGIAS DE PUBLICIDAD DIGITAL</h3>
            <p>
            Impulsamos tu visibilidad mediante estrategias publicitarias efectivas
            en plataformas como Google Ads, Facebook Ads e Instagram Ads. Nuestro
            enfoque personalizado amplía tu alcance, conectando tu marca con la
            audiencia ideal en el entorno digital.
            </p>
        </div>
      </section>


    </div>
  );
};

export default Servicios;

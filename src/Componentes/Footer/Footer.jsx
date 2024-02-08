import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope, FaPhone,  FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <>
      <section className="trabajemosJuntos">
        <h2>TENES UNA IDEA?</h2>
        <h2>TENES UN PROYECTO?</h2>

        <p>
          <a
            href="https://wa.me/1167626764"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-link"
          >
            TRABAJEMOS JUNTOS <FaWhatsapp />
          </a>
        </p>
      </section>
      <footer className="footer">
      <section className="footer-columna">
        <h4>Navegación</h4>
        <ul className="navegacion">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
          <a>Servicios</a>
          </li>
          <li>
            <a>Planes</a>
          </li>
          <li>
            <a>Marketing Digital</a>
          </li>
          <li>
            <a> Contacto </a>
          </li>
        </ul>
      </section>
      <section className="footer-columna">
        <h4>Contacto</h4>
        <p>
          <FaEnvelope />
          <a href="mailto:consultas@meweb.com.ar">Email: consultas@meweb.com.ar</a>
        </p>
        <p>
          <FaPhone />
          <a href="https://wa.me/123456789">Teléfono: +123 456 789</a>
        </p>
      </section>


      <section className="footer-columna">
        <h4>Redes Sociales</h4>
        <div className="iconos-redes">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </section>

      

      <hr className="footer-division" />

      <div className="footer-section copyright-section">
        <p>&copy; 2024 MeWeb. Todos los derechos reservados. | Creado por <a href="https://www.linkedin.com/in/matias-ezequiel-escobar/" target="_blank" rel="noopener noreferrer">Matias Escobar</a></p>

      </div>

      </footer>
    </>
  );
};

export default Footer;

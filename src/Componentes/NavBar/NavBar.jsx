import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    const toggleButton = document.getElementById("_toggle");
    const itemsContainer = document.getElementById("_items");

    const handleToggleClick = () => {
      itemsContainer.classList.toggle("open");
      toggleButton.classList.toggle("close");
    };

    toggleButton.addEventListener("click", handleToggleClick);

    return () => {
      toggleButton.removeEventListener("click", handleToggleClick);
    };
  }, []); 

  return (
    <>
    <p className="info">Diseño Web - Landing Page - Tienda Online - Publicidad Digital </p>
    <nav id="navbar">
      <Link to="/" className="brand">
        <img src="/img/logo.jpeg" alt="logo MeWeb" />
      </Link>
      <ul className="nav_items" id="_items">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/">Servicios</Link>
        </li>
        <li>
          <Link to="/">Planes</Link>
        </li>
        <li>
          <Link to="/">Marketing Digital</Link>
        </li>
        <li>
          <Link to="/contacto"> Contacto </Link>
        </li>
      </ul>

        
      <div className="nav_toggle" id="_toggle">
        <span></span>
        <span></span>
        <span></span>
      </div>  

    </nav>
    </>
  );
};

export default NavBar;

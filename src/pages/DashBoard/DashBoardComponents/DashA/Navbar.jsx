import { FaBell, FaBars } from "react-icons/fa";

import React, { useState } from "react";
import avatar from "../img/avatar.png";


import Rotar from "../RotatingText/Rotar"


export default function Navbar({ toggleMenu, setContenidoActual }) {
  const [mostrarMenu, setMostrarMenu] = useState(false);

  const toggleDropdown = () => {
    setMostrarMenu((prev) => !prev);
  };

  const irAPerfil = () => {
    setContenidoActual("perfil");
    setMostrarMenu(false); 
  };

  const irConfig = () => {
    setContenidoActual("config");
    setMostrarMenu(false); 
  };

  return (
    <header className="encabezadodash">
      
<div className="rotar-container">
        <Rotar />
      </div>

      <nav className="accionesdash">
        <button className="iconodash">
          <FaBell />
        </button>

      
      </nav>
    </header>
  );
}

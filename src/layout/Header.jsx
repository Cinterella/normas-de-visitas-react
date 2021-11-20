import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";



const Header = () => {
  return (
    <div className="menu">
      <div className="menu-icon">
        <FontAwesomeIcon icon={faBars} id="IconoMenu" />
      </div>
      <div className="links">
        <a href="./">Horarios</a>
        <a href="./">Flora Fauna</a>
        <a href="./">Reglas</a>
      </div>
      <div className="user">
        <FontAwesomeIcon icon={faUserCircle} id="IconoMenu" />
      </div>
    </div>
  );
};

export default Header;
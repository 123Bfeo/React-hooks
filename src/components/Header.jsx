//Este componente me permite hacer cambio entre Darkmode y Lightmode utilizando el Hooks useState
// este es un boton en formato togge
import React, { useState } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      const body = document.querySelector("body");
      body.style.backgroundColor = "black";
      body.style.color = "white";
      const button = document.querySelector(".buttonHeader");
      button.style.backgroundColor = "black";
    } else {
      const body = document.querySelector("body");
      body.style.backgroundColor = "white";
      body.style.color = "black";
      const button = document.querySelector(".buttonHeader");
      button.style.backgroundColor = "white";
    }
  };

  return (
    <div className="Header">
      <h1 className="titulo">ReactHooks</h1>
      <button
        className="buttonHeader"
        type="buttonHeader"
        onClick={handleClick}
      >
        {darkMode ? <i className="luna">🌙</i> : <i className="sol">☀️</i>}
      </button>
    </div>
  );
};

export default Header;

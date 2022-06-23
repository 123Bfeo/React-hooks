/* Este Componente me permite consumir una Api publica */

import React, { useState, useEffect } from "react";

const Character = () => {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((data) => setCharacter(data.results));
  }, []);

  return (
    <div className="Character">
      {character.map((characte) => (
        <div className="cards">
          <img className="imgCards" src={characte.image} alt="" />
          <div className="detailCards">
            <h3>{characte.name}</h3>
            <p className="detail">Genero: {characte.gender}</p>
            <p className="detail">Especie: {characte.species}</p>
            <p className="detail">Estatus: {characte.status}</p>
            <p className="detail">{characte.created}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Character;

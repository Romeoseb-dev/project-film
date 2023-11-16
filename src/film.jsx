import React from "react";
import FavoriIcon from "./favori";

const Film = ({ descri }) => {
  return (
    <div className="film-item">
      <h3>{descri.titre}</h3>
      <FavoriIcon />
      <img src={descri.imgSrc} alt={descri.titre} />
    </div>
  );
};

export default Film;

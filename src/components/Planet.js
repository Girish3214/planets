import React, { useEffect, useState } from "react";
import "../App.css";
import { planets } from "../config";
import "../styles/planets.css";
const Planet = ({ id, isFavourite, name }) => {
  const [fav, setFav] = useState(isFavourite);
  let p;

  switch (name) {
    case "Mercury":
      p = planets.Mercury;
      break;
    case "Venus":
      p = planets.Venus;
      break;
    case "Earth":
      p = planets.Earth;
      break;
    case "Ceres":
      p = planets.Ceres;
      break;
    case "Jupiter":
      p = planets.Jupiter;
      break;
    case "Saturn":
      p = planets.Saturn;
      break;
    case "Pluto":
      p = planets.Pluto;
      break;
    case "Haumea":
      p = planets.Haumea;
      break;
    case "Makemake":
      p = planets.Makemake;
      break;
    case "Eris":
      p = planets.Eris;
      break;
    case "Mars":
      p = planets.Mars;
      break;
    default:
      break;
  }

  const changeFav = () => {
    isFavourite = !isFavourite;
    console.log(fav);
    setFav(isFavourite);
  };

  useEffect(() => {
    changeFav();
  }, []);

  return (
    <div className="result-card">
      <div className="planet-container poster-wrapper img">
        <img
          className="img"
          src={p}
          alt={`${name}`}
          onClick={() => changeFav()}
        />

        <div className="info">
          <div className="header">
            <h3 className="title">{name}</h3>
            {fav ? (
              <button className="FAW" onClick={() => changeFav()}>
                <i className="fa fa-star-o fa-2x FAW"></i>
              </button>
            ) : (
              <button className="FAW-red" onClick={() => changeFav()}>
                <i className="fa fa-star fa-2x FAW-red"></i>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planet;

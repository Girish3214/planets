import React, { useContext } from "react";
import "../App.css";
import "../styles/planets.css";

import { GlobalContext } from "../context/GlobalState";

const Planet = ({ planet }) => {
  let { name } = planet;

  const { addPlanetToList, FavouritePlanets, planetImage } = useContext(
    GlobalContext
  );
  let storedPlanet = FavouritePlanets.find((p) => p.id === planet.id);
  const favDisable = storedPlanet ? true : false;

  return (
    <div className="result-card">
      <div className="planet-container poster-wrapper img">
        <img className="img" src={planetImage(name)} alt={`${name}`} />

        <div className="info">
          <div className="header">
            <h3 className="title">{name}</h3>
            {!favDisable ? (
              <button
                className="FAW"
                disabled={favDisable}
                onClick={() => {
                  addPlanetToList(planet);
                }}
              >
                <i className="fa fa-star-o fa-2x FAW"></i>
              </button>
            ) : (
              <button
                className="FAW"
                disabled={favDisable}
                onClick={() => {
                  addPlanetToList(planet);
                }}
              >
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

import React, { useEffect, useState, useContext } from "react";
import "../App.css";
import { planets } from "../config";
import "../styles/planets.css";

import { GlobalContext } from "../context/GlobalState";

const Planet = ({ planet }) => {
  let { name } = planet;

  const { addPlanetToList, FavouritePlanets } = useContext(GlobalContext);
  let storedPlanet = FavouritePlanets.find((p) => p.id === planet.id);
  const favDisable = storedPlanet ? true : false;

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

  return (
    <div className="result-card">
      <div className="planet-container poster-wrapper img">
        <img
          className="img"
          src={p}
          alt={`${name}`}
          onClick={() => addPlanetToList(planet)}
        />

        <div className="info">
          <div className="header">
            <h3 className="title">{name}</h3>
            {
              <button
                className="FAW"
                disabled={favDisable}
                onClick={() => {
                  addPlanetToList(planet);
                }}
              >
                Add to Fav
              </button>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planet;

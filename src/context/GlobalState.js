import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";
import { planets } from "../config";

const initialState = {
  FavouritePlanets: localStorage.getItem("FavouritePlanets")
    ? JSON.parse(localStorage.getItem("FavouritePlanets"))
    : [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem(
      "FavouritePlanets",
      JSON.stringify(state.FavouritePlanets)
    );
  }, [state]);

  const addPlanetToList = (planet) => {
    dispatch({ type: "ADD_PLANET_TO_LIST", payload: planet });
  };

  const removePlanetFromList = (id) => {
    dispatch({ type: "REMOVE_PLANET_FROM_LIST", payload: id });
  };

  const planetImage = (name) => {
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

    return p;
  };

  return (
    <GlobalContext.Provider
      value={{
        FavouritePlanets: state.FavouritePlanets,
        addPlanetToList,
        removePlanetFromList,
        planetImage,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

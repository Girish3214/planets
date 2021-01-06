import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

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

  return (
    <GlobalContext.Provider
      value={{ FavouritePlanets: state.FavouritePlanets, addPlanetToList }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

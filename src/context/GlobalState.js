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

  const removePlanetFromList = (id) => {
    dispatch({ type: "REMOVE_PLANET_FROM_LIST", payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        FavouritePlanets: state.FavouritePlanets,
        addPlanetToList,
        removePlanetFromList,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

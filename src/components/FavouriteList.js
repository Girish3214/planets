import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import PlanetCard from "./PlanetCard";
import {} from "../styles/planets.css";

const FavouriteList = ({ x }) => {
  const { FavouritePlanets } = useContext(GlobalContext);
  console.log(FavouritePlanets);
  return (
    <div>
      <div className="header">
        <h1>Favourite Planets</h1>
      </div>
      {FavouritePlanets.length > 0 ? (
        FavouritePlanets.map((planet) => (
          <PlanetCard
            id={planet.id}
            name={planet.name}
            favDisable={planet.isFavourite}
            p={planet}
          />
        ))
      ) : (
        <h2 className="empty-list">No Planets in Favourite List</h2>
      )}
    </div>
  );
};

export default FavouriteList;

import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import PlanetCard from "./PlanetCard";
import {} from "../styles/planets.css";

const FavouriteList = () => {
  const { FavouritePlanets } = useContext(GlobalContext);
  return (
    <div>
      <div className="header">
        <h1 style={{ display: "inline-block" }}>
          Favourite Planets <span>({FavouritePlanets.length})</span>
        </h1>
      </div>
      {FavouritePlanets.length > 0 ? (
        FavouritePlanets.map((planet) => (
          <PlanetCard
            key={planet.id}
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

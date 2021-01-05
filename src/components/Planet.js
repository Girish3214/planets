import React from "react";
import "../App.css";

const Planet = ({ id, isFavourite, name }) => {
  return (
    <div>
      <span>
        <h3>{id}</h3>
        <h3>{!isFavourite ? "false" : "true"}</h3>
        <h3>{name}</h3>
      </span>
    </div>
  );
};

export default Planet;

import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const PlanetCard = ({ p, name, favDisable, id }) => {
  const { removePlanetFromList, planetImage } = useContext(GlobalContext);

  return (
    <div className="result-card">
      <div className="planet-container poster-wrapper img">
        <img className="img" src={planetImage(name)} alt={`${name}`} />

        <div className="info">
          <div className="header">
            <h3 className="title">{name}</h3>
            {!favDisable && (
              <button
                className="FAW"
                disabled={favDisable}
                onClick={() => {
                  removePlanetFromList(id);
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

export default PlanetCard;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Planet from "../components/Planet";

const Home = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const DataView = async () => {
      const planetData = await axios.get(
        "https://assignment-machstatz.herokuapp.com/planet"
      );
      setdata(planetData.data);
    };
    DataView();
  }, []);
  return (
    <div>
      <div className="container">
        {data.map((d) => (
          <Planet
            key={d.id}
            id={d.id}
            isFavourite={d.isFavourite}
            name={d.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

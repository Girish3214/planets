import React, { useEffect, useState } from "react";
import axios from "axios";
import Planet from "../components/Planet";

const Home = () => {
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const DataView = async () => {
      setLoading(true);
      const planetData = await axios.get(
        "https://assignment-machstatz.herokuapp.com/planet"
      );
      setdata(planetData.data);
    };
    DataView();
    setLoading(false);
  }, []);
  return (
    <div>
      {/* {loading ? "true" : console.log(loading)} */}
      <div className="container">
        {data.map((d) => (
          <Planet key={d.id} planet={d} />
        ))}
      </div>
    </div>
  );
};

export default Home;

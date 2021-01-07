import React, { useEffect, useState } from "react";
import axios from "axios";
import Planet from "../components/Planet";
import Loading from "../components/Loading";

const Home = () => {
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(false);

  const DataView = async () => {
    try {
      await axios
        .get("https://assignment-machstatz.herokuapp.com/planet")
        .then((res) => {
          setdata(res.data);
        });
      setLoading(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    DataView();
    // setLoading(false);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="container">
          {data.map((d) => (
            <Planet key={d.id} planet={d} />
          ))}
        </div>
      ) : (
        <div>
          <Loading />
        </div>
      )}
    </div>
  );
};

export default Home;

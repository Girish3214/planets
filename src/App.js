import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/Nav";
import FavouriteList from "./components/FavouriteList";

import Planet from "./components/Planet";
const App = () => {
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
      <div>
        <Router>
          <Nav />
          <Switch>
            <Route path="/" exact component={App} />
            <Route path="/favourites" exact component={FavouriteList} />
          </Switch>
        </Router>
      </div>

      <div>
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

export default App;

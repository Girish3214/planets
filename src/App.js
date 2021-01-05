import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./components/Home";
import FavouriteList from "./components/FavouriteList";

const App = () => {
  return (
    <div>
      <div>
        <Router>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/favourites" exact component={FavouriteList} />
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;

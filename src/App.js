import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./components/Home";
import FavouriteList from "./components/FavouriteList";
import { GlobalProvider } from "./context/GlobalState";

const App = () => {
  let x = 0;
  return (
    <GlobalProvider>
      <div>
        <Router>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/favourites" exact>
              <FavouriteList key={(x = x + 1)} />
            </Route>
          </Switch>
        </Router>
      </div>
    </GlobalProvider>
  );
};

export default App;

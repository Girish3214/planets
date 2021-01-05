import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

const Nav = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <NavLink to="/">Planet Store</NavLink>
          </div>

          <ul className="nav-links">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink exact to="/favourites">
                favourite
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Nav;

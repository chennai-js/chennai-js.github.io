import React from "react";

import { NavLink } from "react-router-dom";

const Header = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/" exact>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/resources">Resouces</NavLink>
      </li>
      <li>
        <NavLink to="/talks">Talks</NavLink>
      </li>
      <li>
        <NavLink to="/jobs">Jobs</NavLink>
      </li>
    </ul>
  </nav>
);

export default Header;

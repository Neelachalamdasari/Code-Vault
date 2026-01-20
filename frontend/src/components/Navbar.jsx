import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

import logo from "../assets/file.svg";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <div>
          <img src={logo} alt="Logo" />




          <h3>CodeVault</h3>
        </div>
      </Link>
      <div>
        <Link to="/create">
          <p>Create a Repository</p>
        </Link>
        <Link to="/profile">
          <p>Profile</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;



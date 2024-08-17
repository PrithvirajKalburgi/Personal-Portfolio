import React from "react";
import { Link } from "react-router-dom";
import "../Styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="homepage"></a>
      <ul className="navbarLinks"></ul>
      <li>
        <Link to="/homepage">Homepage</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/academics">Academics</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
    </nav>
  );
};

export default Navbar;

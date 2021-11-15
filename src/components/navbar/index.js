//importing required files
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

//creating navbar function
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Varuni Sinha
      </Link>
      <div>
        <ul className="navbar-nav text-left">
          <li className="nav-item">
            <Link
              to="/about" className="nav-link">
              About Me
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/projects"
              className="nav-link">
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className="nav-link">
              Contact Me
            </Link>
          </li>
          <li className="nav-item">
            <a
              href="Varuni-Sinha-Resume.pdf"
              className="nav-link">
              Download Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
//exporting navbar here:
export default Navbar;

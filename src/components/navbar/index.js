//importing required files
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

//creating navbar function
function Navbar() {
  return (
    <nav className="navbar fixed navbar-expand-lg navbar-dark bg-dark" style={{ position: 'fixed', width: '100%', zIndex: 1 }}>
      <a className="navbar-brand" href="/">
        Varuni Sinha
      </a>
      <div>
        <ul className="navbar-nav text-left">
          <li className="nav-item">
            <a
              href="#about" className="nav-link">
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#portfolio"
              className="nav-link">
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              className="nav-link">
              Contact Me
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://static1.squarespace.com/static/558b156ee4b050b2d0e1797b/t/610af665c869ed3ca45dcb92/1628108389924/Varuni+Sinha+Resume+.pdf"
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

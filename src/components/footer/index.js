//importing files to be used

import React from "react";
import "./style.css";

//creating a footer function here:
function Footer() {
  return (
    <footer className="footer">
      <ul className="nav justify-content-center">
        <li className="nav-item p-20 m-20">
          <i className="fab fa-github icon"></i>{" "}
          <a href="https://github.com/varunisinha">
            GitHub
          </a>
        </li>
        <li className="nav-item">
          <i className="fab fa-linkedin icon"></i>{" "}
          <a
            href="https://www.linkedin.com/in/varuni-sinha/"
          >
            LinkedIn
          </a>
        </li>
        <li className="nav-item">
          <i className="fab fa-twitter icon"></i>{" "}
          <a
            href="https://twitter.com/varunisinha/"
          >
            Twitter
          </a>
        </li>

      </ul>
    </footer>
  );
}
//exporting footer for use in multiple pages 
export default Footer;

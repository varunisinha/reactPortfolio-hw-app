//importing required files

import React from "react";
import "./style.css";

//creating function for creating homepage
function Homepage() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <img
        src="../images/bg.jpg"
        className="card-img-top"
        alt="IMG"
        width="300"
        height="600"
      ></img>

    </div>
  );
}

//exporting for use elsewhere
export default Homepage;

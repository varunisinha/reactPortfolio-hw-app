import React, { Component } from "react";
//importing required files
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

//app.js is calling all other child components here 
class App extends Component {

  render() {
    return (
      <Router>
        <div style={{ backgroundColor: "#383737" }}>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/projects" component={Portfolio} />
          <Footer />
        </div>
      </Router>
    );
  }
}
//exporting app for use elsewhere
export default App;

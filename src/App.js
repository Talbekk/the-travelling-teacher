import React from "react";
import logo from "./img/logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <nav className="header-nav">
          <img className="logo" src={logo} alt="Travelling Teacher Logo"></img>
          <ul className="main-nav">
              <li><a className="main-nav-item" href="#about-me">About</a></li>
              <li><a className="main-nav-item" href="#services">Services</a></li>
              <li><a className="main-nav-item" href="#packages">Packages</a></li>
              <li><a className="main-nav-item" href="#enquiries">Enquiries</a></li>
          </ul>
        </nav>
        <div className="header-hero"></div>
      </header>
    </div>
  );
}

export default App;

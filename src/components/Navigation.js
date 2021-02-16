import React from "react";
import logo from "../img/logo.png";
import "../App.css";

function Navigation() {
  return (
        <nav className="header-nav">
          <img className="logo" src={logo} alt="Travelling Teacher Logo"></img>
          <ul className="main-nav">
              <li><a className="main-nav-item" href="#about-me">About</a></li>
              <li><a className="main-nav-item" href="#services">Services</a></li>
              <li><a className="main-nav-item" href="#packages">Packages</a></li>
              <li><a className="main-nav-item" href="#enquiries">Enquiries</a></li>
          </ul>
        </nav>
  );
}

export default Navigation;
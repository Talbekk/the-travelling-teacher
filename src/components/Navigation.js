import React from "react";
import logo from "../img/logo.png";
import "../App.css";

function Navigation() {
  return (
        <nav className="header__nav">
          <img className="header__logo" src={logo} alt="Travelling Teacher Logo"></img>
          <ul className="header__main-nav">
              <li><a className="header__main-nav--item" href="#about-me">About</a></li>
              <li><a className="header__main-nav--item" href="#services">Services</a></li>
              <li><a className="header__main-nav--item" href="#packages">Packages</a></li>
              <li><a className="header__main-nav--item" href="#enquiries">Enquiries</a></li>
          </ul>
        </nav>
  );
}

export default Navigation;
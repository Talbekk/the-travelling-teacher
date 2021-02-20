import React from "react";
import logo from "../../img/logo.png";
import { Link } from "react-scroll";
import "../../App.css";

function Navigation() {
  return (
        <nav className="header__nav">
          <img className="header__logo" src={logo} alt="Travelling Teacher Logo"></img>
          <ul className="header__main-nav">
              <li><Link spy={true} smooth={true} offset={-70} duration={600} className="header__main-nav--item" to="section-about">About</Link></li>
              <li><Link spy={true} smooth={true} offset={-70} duration={600} className="header__main-nav--item" to="section-services">Services</Link></li>
              <li><Link spy={true} smooth={true} offset={-70} duration={600} className="header__main-nav--item" href="packages">Packages</Link></li>
              <li><Link spy={true} smooth={true} offset={-70} duration={600} className="header__main-nav--item" href="enquiries">Enquiries</Link></li>
          </ul>
        </nav>
  );
}

export default Navigation;
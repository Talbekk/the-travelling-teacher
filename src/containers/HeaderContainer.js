import React from "react";
import logo from "../img/logo.png";
import Navigation from "../components/Navigation";
import "../App.css";

function HeaderContainer() {
  return (
      <header className="header">
          <Navigation/>
        <div className="header-hero">
          <h1 className="heading-primary">
            <div className="heading-primary-main">
            <span className="heading-primary-main-left">Michael</span>
            <span className="heading-primary-main-right">Campbell</span>
            </div>
            <span className="heading-primary-sub">The Travelling Teacher</span>
          </h1>
        </div>
      </header>
  );
}

export default HeaderContainer;
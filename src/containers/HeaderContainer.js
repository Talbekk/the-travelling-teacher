import React from "react";
import Navigation from "../components/header/Navigation";
import Hero from "../components/header/Hero";
import "../App.css";

function HeaderContainer() {
  return (
      <header className="header">
        <Navigation/>
        <Hero/>
      </header>
  );
}

export default HeaderContainer;
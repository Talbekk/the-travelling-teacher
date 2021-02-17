import React from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
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
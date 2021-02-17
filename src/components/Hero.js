import React from "react";
import "../App.css";

function Hero() {
  return (
        <h1 className="heading-primary">
            <div className="heading-primary--main">
            <span className="heading-primary--main-left">Michael</span>
            <span className="heading-primary--main-right">Campbell</span>
            </div>
            <span className="heading-primary--sub">The Travelling Teacher</span>
        </h1>
  );
}

export default Hero;
import React from "react";
import About from "../components/main/About";
import Services from "../components/main/Services";
import Testimonials from "../components/main/Testimonials";
import Packages from "../components/main/Packages";
import "../App.css";

function MainContainer() {
  
  return (
   <main>
       <About/>
       <Services/>
       <Testimonials/>
       <Packages/>
   </main>
  );
}

export default MainContainer;
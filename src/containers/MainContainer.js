import React from "react";
import About from "../components/main/About";
import Services from "../components/main/Services";
import Testimonials from "../components/main/Testimonials";
import "../App.css";

function MainContainer() {
  
  return (
   <main>
       <About/>
       <Services/>
       <Testimonials/>
   </main>
  );
}

export default MainContainer;
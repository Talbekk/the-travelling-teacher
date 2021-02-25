import React from "react";
import HeaderContainer from "./containers/HeaderContainer";
import MainContainer from "./containers/MainContainer";
import FooterContainer from "./components/footer/Footer";
import StickyNav from "./components/header/StickyNav";

function App() {

  return (
    <div className="app">
      <HeaderContainer/>
      <MainContainer/>
      <FooterContainer/>
      <StickyNav/>
    </div>
  );
}

export default App;

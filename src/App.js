import React from "react";
import HeaderContainer from "./containers/HeaderContainer";
import MainContainer from "./containers/MainContainer";
import FooterContainer from "./components/footer/Footer";

function App() {

  return (
    <div className="app">
      <HeaderContainer/>
      <MainContainer/>
      <FooterContainer/>
    </div>
  );
}

export default App;

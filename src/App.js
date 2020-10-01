import React from "react";
import Header from "./components/Header/Header";
import Wrapper from "./components/Wrapper/Wrapper";
import Wheel from "./components/Wheel/Wheel";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <Wheel />
      </Wrapper>
    </div>
  );
}

export default App;

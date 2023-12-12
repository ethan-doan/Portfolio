import React from "react";
import { useState } from "react";
import Header from "./components/Header.js";
import MainContent from "./components/MainContent.js";
import MouseCircle from "./components/MouseCircle.js";
import "./App.css";

function App() {
  const [activeCard, setActiveCard] = useState(null);
  const [isMouseOutside, setIsMouseOutside] = useState(null);

  return (
    <>
      <MouseCircle isMouseOutside={isMouseOutside} activeCard={activeCard}/>
      <Header />
      <MainContent setIsMouseOutside={setIsMouseOutside} activeCard={activeCard} setActiveCard={setActiveCard}/>
    </>
  );
}

export default App;

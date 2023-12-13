import React from "react";
import { useState, useEffect } from "react";
import LandingPage from "./components/LandingPage.js";
import MainContent from "./components/MainContent.js";
import "./App.css";

function App() {
  const [transitionProgress, setTransitionProgress] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      // Prevents Scrolling
      event.preventDefault();

      // Calculates Transition Progress
      const delta = event.deltaY;
      const progress = Math.min(
        Math.max(transitionProgress + delta / 3000, 0),
        1
      );
      setTransitionProgress(progress);
    };

    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => window.removeEventListener("wheel", handleScroll);
  });

  return (
    <div className="app">
      <div className="content-wrapper">
        <div
          className="landing-page"
          style={{ transform: `scale(${1 - transitionProgress})` }}
        >
          <LandingPage />
        </div>
        <div className="main-content">
          <MainContent />
        </div>
      </div>
      {/* <div className="content-wrapper">
        <div style={{ transform: `scale(${1 - transitionProgress})` }}>
          <LandingPage />
        </div>
        {transitionProgress >= 1}
        <MainContent />
      </div> */}
    </div>
  );
}

export default App;

import React from "react";
import { useState, useEffect } from "react";
import LandingPage from "./components/LandingPage.js";
import MainContent from "./components/MainContent.js";
import MainLandingContent from "./components/MainLandingContent.js";
import "./App.css";

function App() {
  const [transitionProgress, setTransitionProgress] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      // Check if the user is at the top of the page
      if (window.scrollY <= 1) {
        // Calculates Transition Progress based on scroll direction
        const delta = event.deltaY;
        let newProgress = transitionProgress + delta / 3000;

        // Clamp newProgress between 0 and 1
        newProgress = Math.min(Math.max(newProgress, 0), 1);

        // Prevent default scrolling if in the middle of the transition
        if (newProgress > 0 && newProgress < 1) {
          event.preventDefault();
        }

        setTransitionProgress(newProgress);
      }
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
        <div
          className="main-content"
          style={{
            overflow: transitionProgress >= 1 ? "auto" : "hidden",
            position: "relative",
          }}
        >
          <MainLandingContent />
        </div>
      </div>
      {transitionProgress >= 1 && (
        <div className="main-landing-content">
          <MainContent />
        </div>
      )}
    </div>
  );
}

export default App;

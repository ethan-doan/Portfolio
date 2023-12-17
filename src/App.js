import React from "react";
import { useState, useEffect } from "react";
import LandingPage from "./components/LandingPage.js";
import MainContent from "./components/MainContent.js";
import "./App.css";

function App() {
  const [animationProgress, setAnimationProgress] = useState(0);
  const [animationPlayed, setAnimationPlayed] = useState(false);

  useEffect(() => {
    // Has The Animation Been Played
    if (animationProgress >= 1 && !animationPlayed) {
      setAnimationPlayed(true);
    }

    // Tracking Animation Progress and Handling Scroll
    if (!animationPlayed) {
      const handleScroll = (event) => {
        if (window.scrollY <= 1) {
          // Calculates Animation Progress
          const delta = event.deltaY;
          let progress = animationProgress + delta / 3000;

          // Make it Binary
          progress = Math.min(Math.max(progress, 0), 1);

          // Prevent Default Scrolling During Animation
          if (progress > 0 && progress <= 1) {
            event.preventDefault();
          }

          // Setter
          setAnimationProgress(progress);
          // { passive: false }
          return () => {
            window.removeEventListener("wheel", handleScroll);
          };
        }
      };

      window.addEventListener("wheel", handleScroll);
    }
  });

  return (
    <div className="app">
      {!animationPlayed && (
        <div
          className="minimize-point"
          style={{
            transform: `scale(${1 - animationProgress})`,
          }}
        >
          <LandingPage />
        </div>
      )}
      <MainContent
        animationProgress={animationProgress}
        animationPlayed={animationPlayed}
      />
    </div>
  );
}

export default App;

import React from "react";
import { useState, useEffect } from "react";
import LandingPage from "./components/LandingPage.js";
import MainContent from "./components/MainContent.js";
import "./App.css";

function App() {
  const [animationProgress, setAnimationProgress] = useState(0);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  const handleScroll = (event) => {
    if (!isAnimationComplete) {
      event.preventDefault(); // Prevent default scroll during animation
      const newAnimationProgress = Math.min(
        window.innerHeight,
        Math.max(0, animationProgress + event.deltaY)
      );
      setAnimationProgress(newAnimationProgress);

      if (newAnimationProgress >= window.innerHeight) {
        setIsAnimationComplete(true); // Animation complete, enable normal scrolling
      }
    }
  };

  useEffect(() => {
    if (!isAnimationComplete) {
      window.addEventListener("wheel", handleScroll, { passive: false });
    }

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [animationProgress, isAnimationComplete]);

  const scale = isAnimationComplete
    ? 0
    : Math.max(0, 1 - animationProgress / window.innerHeight);

  return (
    <div className="app">
      {!isAnimationComplete && (
        <div
          className="minimize-point"
          style={{
            transform: `scale(${scale})`,
          }}
        >
          <LandingPage />
        </div>
      )}
      <MainContent
        animationProgress={animationProgress}
        animationPlayed={isAnimationComplete}
      />
    </div>
  );
}

export default App;

import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ExperiencePage from "./components/ExperiencePage.js";
import LandingPage from "./components/LandingPage.js";
import MainContent from "./components/MainContent.js";
import "./App.css";

function App() {
  const [altScreen, setAltScreen] = useState("");
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
  }, [handleScroll, animationProgress, isAnimationComplete]);

  const scale = isAnimationComplete
    ? 0
    : Math.max(0, 1 - animationProgress / window.innerHeight);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <>
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
                  altScreen={altScreen}
                  setAltScreen={setAltScreen}
                  animationProgress={animationProgress}
                  isAnimationComplete={isAnimationComplete}
                />
              </>
            }
          />
          <Route
            path="/experience/:experienceId"
            element={<ExperiencePage />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

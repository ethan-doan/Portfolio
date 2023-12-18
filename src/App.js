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
  const [lastTouchY, setLastTouchY] = useState(0);

  const updateAnimationProgress = (delta) => {
    const newAnimationProgress = Math.min(
      window.innerHeight,
      Math.max(0, animationProgress + delta)
    );
    setAnimationProgress(newAnimationProgress);

    if (newAnimationProgress >= window.innerHeight) {
      setIsAnimationComplete(true);
    }
  };

  const handleScroll = (event) => {
    if (!isAnimationComplete) {
      event.preventDefault();
      updateAnimationProgress(event.deltaY);
    }
  };

  const handleTouchStart = (event) => {
    if (!isAnimationComplete) {
      setLastTouchY(event.touches[0].clientY);
    }
  };

  const handleTouchMove = (event) => {
    if (!isAnimationComplete) {
      event.preventDefault();
      const touchY = event.touches[0].clientY;
      const deltaY = lastTouchY - touchY;
      setLastTouchY(touchY);
      updateAnimationProgress(deltaY);
    }
  };

  useEffect(() => {
    if (!isAnimationComplete) {
      window.addEventListener("wheel", handleScroll, { passive: false });
      window.addEventListener("touchstart", handleTouchStart, {
        passive: false,
      });
      window.addEventListener("touchmove", handleTouchMove, { passive: false });
    }

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [
    handleScroll,
    handleTouchStart,
    handleTouchMove,
    animationProgress,
    isAnimationComplete,
  ]);

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

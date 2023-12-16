import React from "react";
import MainLandingContent from "./MainLandingContent.js";
import Navbar from "./Navbar.js";
import "../styles/MainContent.css";

function MainContent({ animationProgress, animationPlayed }) {
  return (
    <div className="main-content-container">
      <Navbar animationPlayed={animationPlayed} />
      <MainLandingContent animationPlayed={animationPlayed} />
      {animationProgress >= 1 && (
        <div>
          <div></div>
        </div>
      )}
    </div>
  );
}

export default MainContent;

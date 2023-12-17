import React from "react";
import ExperiencePreview from "./ExperiencePreview.js";
import MainLandingContent from "./MainLandingContent.js";
import Navbar from "./Navbar.js";
import TitleCarousel from "./TitleCarousel.js";
import "../styles/MainContent.css";

function MainContent({ animationProgress, animationPlayed }) {
  return (
    <div className="main-content-container">
      <Navbar animationPlayed={animationPlayed} />
      <MainLandingContent animationPlayed={animationPlayed} />
      {animationProgress >= 1 && (
        <>
          <TitleCarousel title={"Experience"} />
          <ExperiencePreview />
          <TitleCarousel title={"Projects"} />
        </>
      )}
    </div>
  );
}

export default MainContent;

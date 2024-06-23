import React from "react";
import "../styles/MainLandingContent.css";

function MainLandingContent({ isAnimationComplete }) {
  return (
    <>
      <div className="main-landing-content-container">
        <img
          className="headshot"
          src={require("../images/HeadshotColor.jpg")}
          alt="headshot"
        />
        <div className="description">
          Hi! My name is Ethan Doan and I am a Software Developer. Explore to
          see what I have been up to!
        </div>
      </div>
      <div className="scroll-container">
        <div className="explore">
          <div className="scroll-text scroll-text-first">Explore</div>
          <div className="scroll-text scroll-text-second">Explore</div>
        </div>
      </div>
    </>
  );
}

export default MainLandingContent;

import React from "react";
import "../styles/LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-page-container">
      <div className="landing-title">Hi, I'm Ethan</div>
      <div className="scroll-container">
        <div className="discover">
          <div className="scroll-text scroll-text-first">
            Scroll To Discover
          </div>
          <div className="scroll-text scroll-text-second">
            Scroll To Discover
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

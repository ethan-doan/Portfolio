import React from "react";
import { useState, useEffect } from "react";
import "../styles/MainLandingContent.css";

function MainLandingContent({ transitionProgress }) {
  const [animationPlayed, setAnimationPlayed] = useState(false);

  useEffect(() => {
    if (transitionProgress >= 1 && !animationPlayed) {
      setAnimationPlayed(true);
    }
  }, [transitionProgress, animationPlayed]);

  const descriptionReveal = animationPlayed ? "visible" : "hidden";

  return (
    <div className="main-landing-content-container">
      <div className="landing-content">
        <img
          className="headshot"
          src={require("../images/Headshot.jpg")}
          alt="headshot"
        />
        <div className={`description`}>
          I am a passionate, ambitious, and creative Senior at Creighton
          University. I am pursuing a Bachelor's in Computer Science and Fintech
          and am driven to discover the implementations of computer science
          towards financial markets. I am actively seeking to further my
          understanding and proficiency in these areas while building
          relationships with others.
        </div>

        {/*
        <div className="description">
          I have been fortunate enough to gain experience through multiple
          internships where I have been able to implement my studies in practice
          while having opportunities to learn and thrive within new
          environments. In my spare time I enjoy reading, spending time with
          friends and family, and consistently trying to learn new things. Visit
          the remainder of my website to learn more about what I have been up
          to.
        </div> */}
      </div>
      <div className="scroll-container">
        <div className="explore">
          <div className="scroll-text scroll-text-first">Explore</div>
          <div className="scroll-text scroll-text-second">Explore</div>
        </div>
      </div>
    </div>
  );
}

export default MainLandingContent;

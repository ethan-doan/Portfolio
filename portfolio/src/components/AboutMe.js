import React from "react";
import "../styles/AboutMe.css";

function AboutMe() {
  return (
    <div className="aboutMe">
      <img
        className="headshot"
        src={require("../images/Headshot.jpg")}
        alt="Ethan's Headshot"
      ></img>
      <div className="description">
        I am a passionate, ambitious, and creative Senior at Creighton
        University. I am pursuing a Bachelor's in Computer Science and Fintech
        and am driven to discover the implementations of computer science
        towards financial markets. I am actively seeking to further my
        understanding and proficiency in these areas while building
        relationships with others.
      </div>
      <div className="description">
        I have been fortunate enough to gain experience through multiple
        internships where I have been able to implement my studies in practice
        while having opportunities to learn and thrive within new environments.
        In my spare time I enjoy reading, spending time with friends and family,
        and consistently trying to learn new things. Visit the remainder of my
        website to learn more about what I have been up to.
      </div>
    </div>
  );
}

export default AboutMe;

import React from "react";
import { useState, useEffect } from "react";
import AboutMe from "./AboutMe.js";
import Card from "./Card.js";
import Contact from "./Contact.js";
import Education from "./Education.js";
import Experience from "./Experience.js";
import Projects from "./Projects.js";
import "../styles/MainContent.css";

function MainContent({ setIsMouseOutside, activeCard, setActiveCard }) {
  const [contentHeight, setContentHeight] = useState(0);
  const [previewCardPosition, setPreviewCardPosition] = useState("0");

  useEffect(() => {
    // Function to handle clicking outside of the cards
    const handleClickOutside = (event) => {
      const navContainer = document.querySelector('.navContainer');
      if (navContainer && !navContainer.contains(event.target)) {
        setActiveCard(null); // Collapse the card
      }
    };

    // Function to calculate space occupied by the header
    const calculateHeaderHeight = () => {
      const header = document.getElementsByClassName("header")[0];
      return header ? header.offsetHeight : 0;
    };

    // Function to update height on resize
    const handleResize = () => {
      const headerHeight = calculateHeaderHeight();

      setContentHeight(headerHeight);

      const windowHeight = window.innerHeight;
      const newPreviewCardPosition = windowHeight - headerHeight + "px";
      document.documentElement.style.setProperty(
        "--card-height",
        -windowHeight + headerHeight + "px"
      );
      setPreviewCardPosition(newPreviewCardPosition);
    };

    // Add click event listener
    document.addEventListener('mousedown', handleClickOutside);

    window.addEventListener("resize", handleResize);
    handleResize(); // Call initially to set height

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setActiveCard]);

  const handleMouseOver = () => {
    console.log("Mouse over");
    setIsMouseOutside(false);
  };
  
  const handleMouseOut = () => {
    console.log("Mouse out");
    setIsMouseOutside(true);
  };
  

  const navContainerStyle = {
    height: `calc(100vh - ${contentHeight}px)`,
  };

  const previewCardStyle = {
    top: `calc(${previewCardPosition} - 7.5vh + 1px)`,
  };

  const handleNavItemClick = (itemIndex) => {
    if (activeCard !== itemIndex) {
      setActiveCard(itemIndex);
    }
  };

  return (
    <>
      <div className="navContainer" style={navContainerStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <ul className="navBody">
          <li className="navItem" onClick={() => handleNavItemClick(0)}>
            <span className="altFont">01 </span>
            <span className="navFont">About Me</span>
            <Card
              title="About Me"
              isActive={activeCard === 0}
              style={previewCardStyle}
            >
              <AboutMe />
            </Card>
          </li>
          <li className="navItem" onClick={() => handleNavItemClick(1)}>
            <span className="altFont">02 </span>
            <span className="navFont">Experience</span>
            <Card
              title="My Work Experience"
              isActive={activeCard === 1}
              style={previewCardStyle}
            >
              <Experience />
            </Card>
          </li>
          <li className="navItem" onClick={() => handleNavItemClick(2)}>
            <span className="altFont">03 </span>
            <span className="navFont">Education</span>
            <Card
              title="Education"
              isActive={activeCard === 2}
              style={previewCardStyle}
            >
              <Education />
            </Card>
          </li>
          <li className="navItem" onClick={() => handleNavItemClick(3)}>
            <span className="altFont">04 </span>
            <span className="navFont">Projects</span>
            <Card
              title="Projects I've Worked On"
              isActive={activeCard === 3}
              style={previewCardStyle}
            >
              <Projects /> 
            </Card>
          </li>
          <li className="navItem" onClick={() => handleNavItemClick(4)}>
            <span className="altFont">05 </span>
            <span className="navFont">Contact</span>
            <Card
              title="Contact Me"
              isActive={activeCard === 4}
              style={previewCardStyle}
            >
              <Contact />
            </Card>
          </li>
        </ul>
      </div>
    </>
  );
}

export default MainContent;

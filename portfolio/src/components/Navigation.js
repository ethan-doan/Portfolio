import React from "react";
import { useState, useEffect } from "react";
import AboutMe from "./AboutMe.js";
import Card from "./Card.js";
import Contact from "./Contact.js";
import Education from "./Education.js";
import Experience from "./Experience.js";
import Projects from "./Projects.js";
import "../styles/Navigation.css";

function Navigation() {
  const [contentHeight, setContentHeight] = useState(0);
  const [previewCardPosition, setPreviewCardPosition] = useState("0");
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
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

    window.addEventListener("resize", handleResize);
    handleResize(); // Call initially to set height

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navContainerStyle = {
    height: `calc(100vh - ${contentHeight}px)`,
  };

  const previewCardStyle = {
    top: `calc(${previewCardPosition} - 7.5vh + 1px)`,
  };

  const handleNavItemClick = (itemIndex) => {
    setActiveCard(itemIndex === activeCard ? null : itemIndex);
  };

  return (
    <>
      <div className="navContainer" style={navContainerStyle}>
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
              title="Education & Leadership"
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

export default Navigation;

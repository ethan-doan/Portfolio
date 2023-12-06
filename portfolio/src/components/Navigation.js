import React from "react";
import { useState, useEffect } from "react";
import "../styles/Navigation.css";

function Navigation() {
  const [contentHeight, setHeight] = useState(0);
  const [previewCardPosition, setPreviewCardPosition] = useState("0");

  useEffect(() => {
    // Function to calculate space occupied by the header
    const calculateOccupiedSpace = () => {
      const header = document.getElementsByClassName("header")[0];
      return header ? header.offsetHeight : 0;
    };

    // Function to update height on resize
    const handleResize = () => {
      const newContentHeight = calculateOccupiedSpace();

      setHeight(newContentHeight);

      const windowHeight = window.innerHeight;
      const newPreviewCardPosition = windowHeight - newContentHeight + "px";
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

  return (
    <>
      <div className="navContainer" style={navContainerStyle}>
        <ul className="navBody">
          <li className="navItem">
            <span className="altFont">01 </span>
            <span className="navFont">About Me</span>
            <div className="previewCard" style={previewCardStyle}>
              <p className="previewTitle">A Little Bit About Me</p>
            </div>
          </li>
          <li className="navItem">
            <span className="altFont">02 </span>
            <span className="navFont">Experience</span>
            <div className="previewCard" style={previewCardStyle}>
              <p className="previewTitle">My Work Experience</p>
            </div>
          </li>
          <li className="navItem">
            <span className="altFont">03 </span>
            <span className="navFont">Education</span>
            <div className="previewCard" style={previewCardStyle}>
              <p className="previewTitle">Education & Leadership</p>
            </div>
          </li>
          <li className="navItem">
            <span className="altFont">04 </span>
            <span className="navFont">Projects</span>
            <div className="previewCard" style={previewCardStyle}>
              <p className="previewTitle">Projects I've Worked On</p>
            </div>
          </li>
          <li className="navItem">
            <span className="altFont">05 </span>
            <span className="navFont">Contact</span>
            <div className="previewCard" style={previewCardStyle}>
              <p className="previewTitle">Contact Me</p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navigation;

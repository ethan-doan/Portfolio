import React from "react";
import { useState, useEffect } from "react";
import "../styles/Navigation.css";

function Navigation() {
  const [contentHeight, setHeight] = useState(0);

  useEffect(() => {
    // Set navContainer Height
    const calculateOccupiedSpace = () => {
      const header = document.getElementsByClassName("header")[0];
      const headerHeight = header ? header.offsetHeight : 0;
      return headerHeight;
    };

    const handleResize = () => {
      setHeight(calculateOccupiedSpace());
    };

    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navContainerStyle = {
    height: `calc(100vh - ${contentHeight + 1}px)`, // Adjust the height dynamically
  };

  return (
    <>
      <div className="navContainer" style={navContainerStyle}>
        <ul className="navBody">
          <li className="navItem">
            <span className="altFont">01 </span>
            <span className="navFont">About Me</span>
            <div className="previewCard">Content for About Me</div>
          </li>
          <li className="navItem">
            <span className="altFont">02 </span>
            <span className="navFont">Experience</span>
            <div className="previewCard">Content for Experience</div>
          </li>
          <li className="navItem">
            <span className="altFont">03 </span>
            <span className="navFont">Education</span>
            <div className="previewCard">Content for Education</div>
          </li>
          <li className="navItem">
            <span className="altFont">04 </span>
            <span className="navFont">Projects</span>
            <div className="previewCard">Content for Projects</div>
          </li>
          <li className="navItem">
            <span className="altFont">05 </span>
            <span className="navFont">Contact</span>
            <div className="previewCard">Content for Contact</div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navigation;

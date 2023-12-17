import React from "react";
import "../styles/Navbar.css";

function Navbar({ isAnimationComplete, altScreen }) {
  return (
    <div
      className="navbar-container"
      style={{
        backgroundColor: altScreen === "" ? "#f5f5f5" : "#212121",
        color: altScreen === "" ? "#212121" : "#f5f5f5",
        position: isAnimationComplete ? "sticky" : "",
        top: isAnimationComplete ? "0" : "",
      }}
    >
      <div className="nav-item">Ethan Doan</div>
      <div className="nav-item">Menu</div>
    </div>
  );
}

export default Navbar;

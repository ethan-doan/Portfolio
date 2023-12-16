import React from "react";
import "../styles/Navbar.css";

function Navbar({ animationPlayed }) {
  return (
    <div
      className="navbar-container"
      style={{
        position: animationPlayed ? "sticky" : "",
        top: animationPlayed ? "0" : "",
      }}
    >
      <div className="nav-item">Ethan Doan</div>
      <div className="nav-item">Menu</div>
    </div>
  );
}

export default Navbar;

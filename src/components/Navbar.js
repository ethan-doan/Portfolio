import React from "react";
import "../styles/Navbar.css";

function Navbar({ animationPlayed, altScreen }) {
  return (
    <div
      className="navbar-container"
      style={{
        backgroundColor: altScreen === "" ? "#f5f5f5" : "#212121",
        color: altScreen === "" ? "#212121" : "#f5f5f5",
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

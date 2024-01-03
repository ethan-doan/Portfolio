import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar({ invert }) {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Navigates to the previous page
  };

  return (
    <div
      className="navbar-container"
      style={{
        backgroundColor: !invert ? "#f5f5f5" : "#212121",
        color: !invert ? "#212121" : "#f5f5f5",
      }}
    >
      {invert && (
        <div onClick={goBack} className="back-button">
          <svg
            width="20"
            height="20"
            viewBox="0 0 50 50"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30 10 L10 25 L30 40"
              stroke="#f5f5f5"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="back-button-text">Return</span>
        </div>
      )}
      <div className="nav-item">Ethan Doan</div>
      {/* <div className="nav-item">Menu</div> */}
    </div>
  );
}

export default Navbar;

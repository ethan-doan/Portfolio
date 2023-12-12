import React, { useState, useEffect, useRef } from "react";
import "../styles/MouseCircle.css";

const MouseCircle = ({ isMouseOutside, activeCard }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePosition.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const moveCircle = () => {
      setPosition((currentPosition) => {
        const dx = (mousePosition.current.x - currentPosition.x) * 0.075; // Adjust 0.1 for slower/faster movement
        const dy = (mousePosition.current.y - currentPosition.y) * 0.075; // Adjust 0.1 for slower/faster movement
        return {
          x: currentPosition.x + dx,
          y: currentPosition.y + dy,
        };
      });

      requestAnimationFrame(moveCircle);
    };

    requestAnimationFrame(moveCircle);

    return () => cancelAnimationFrame(moveCircle);
  }, []);

  return (
    <div
      className="circle"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      {(isMouseOutside !== false && activeCard !== null) && <span className="close">close</span>}
    </div>
  );
};

export default MouseCircle;

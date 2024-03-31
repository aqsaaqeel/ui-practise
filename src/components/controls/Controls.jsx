import React, { useRef } from 'react';
import "./Controls.css";

export const Controls = ({ boxIndex, moveHandler }) => {
  const intervalRef = useRef(null);

  const handleMouseDown = (direction) => {
    intervalRef.current = setInterval(() => {
      moveHandler(boxIndex, direction);
      simulateMouseClick(); 
    }, 100);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseUp = () => {
    clearInterval(intervalRef.current);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const simulateMouseClick = () => {
    const button = document.getElementById(`control-button-${boxIndex}`); // Get the control button element
    if (button) {
      button.dispatchEvent(new MouseEvent('mousedown')); // Simulate mouse down event
    }
  };

  return (
    <div className="controls">
      <button id={`control-button-${boxIndex}`} onMouseDown={() => handleMouseDown("up")}>{"^"}</button>
      <div className="horizontal-controls">
        <button id={`control-button-${boxIndex}`} onMouseDown={() => handleMouseDown("left")}>{"<"}</button>
        <button id={`control-button-${boxIndex}`} onMouseDown={() => handleMouseDown("right")}>{">"}</button>
      </div>
      <button id={`control-button-${boxIndex}`} onMouseDown={() => handleMouseDown("down")}>{"v"}</button>
    </div>
  );
};

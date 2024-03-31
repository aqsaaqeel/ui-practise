import React, { useState } from "react";
import { Box } from "./components/box/Box";
import { Controls } from "./components/controls/Controls";
import { SuccessBox } from "./components/success-box/SuccessBox"; 
import "./App.css";

function App() {
  const getRandomPosition = () => ({
    x: Math.floor(Math.random() * 400), 
    y: Math.floor(Math.random() * 100) 
  });

  const [ballPosition, setBallPosition] = useState([
    getRandomPosition(),
    getRandomPosition(),
    getRandomPosition()
  ]);
  const [successMessage, setSuccessMessage] = useState('');

  const moveBallHandler = (boxIndex, movement) => {
    setBallPosition((prevPositions) => {
      const newPositions = [...prevPositions];
      switch (movement) {
        case "up":
          newPositions[boxIndex].y -= 10;
          break;
        case "down":
          newPositions[boxIndex].y += 10;
          break;
        case "left":
          newPositions[boxIndex].x -= 10;
          break;
        case "right":
          newPositions[boxIndex].x += 10;
          break;
        default:
          break;
      }
      checkSuccess(newPositions[boxIndex]);
      return newPositions;
    });
  };

  const checkSuccess = (ballPosition) => {
    const successBox = { x: 675, y: 30, width: 52, height: 52 }; // Assuming position and dimensions of the SuccessBox

    if (
      ballPosition.x >= successBox.x &&
      ballPosition.x <= successBox.x + successBox.width &&
      ballPosition.y >= successBox.y &&
      ballPosition.y <= successBox.y + successBox.height
    ) {
      setSuccessMessage('Success!');
    } else {
      setSuccessMessage('');
    }
  };

  return (
    <div className="App">
      <div className="individual-container">
        <Box ballPosition={ballPosition[0]}/>
        <SuccessBox  />
        {successMessage && <div>{successMessage}</div>}
      </div>
      <div className="individual-container">
        <Box ballPosition={ballPosition[1]} />
        <Controls boxIndex={0} moveHandler={moveBallHandler} />
      </div>
      <div className="individual-container">
        <Box ballPosition={ballPosition[2]} />
        <Controls boxIndex={1} moveHandler={moveBallHandler} />
      </div>
      <div className="individual-container">
        <div style={{ height: "10px", marginTop: "2rem" }}></div>
        <Controls boxIndex={2} moveHandler={moveBallHandler} />
      </div>
    </div>
  );
}

export default App;

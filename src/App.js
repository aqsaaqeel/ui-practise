import React, { useState } from "react";
import { Box } from "./components/box/Box";
import { Controls } from "./components/controls/Controls";
import {SuccessBox} from "./components/success-box/SuccessBox";
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

      // Check success only if the topmost ball moves
      if (boxIndex === 0) {
        checkSuccess(newPositions[0]);
      }

      return newPositions;
    });
  };

  // Function to check if the ball is inside the success box
  const checkSuccess = (position) => {
    // Define the position and dimensions of the SuccessBox
    const successBoxPosition = { x: 675, y: 30 };
    const successBoxDimensions = { width: 52, height: 52 };

    const isInsideSuccessBox =
      position.x >= successBoxPosition.x &&
      position.x <= successBoxPosition.x + successBoxDimensions.width &&
      position.y >= successBoxPosition.y &&
      position.y <= successBoxPosition.y + successBoxDimensions.height;

    if (isInsideSuccessBox) {
      setSuccessMessage('Success!');
    } else {
      setSuccessMessage('');
    }
  };

  return (
    <div className="App">
      <div className="individual-container">
        <Box ballPosition={ballPosition[0]} />
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
      <SuccessBox successMessage={successMessage} />
    </div>
  );
}

export default App;

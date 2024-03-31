import React, { useState, useEffect } from 'react';
import { Ball } from "../ball/Ball";
import "./Box.css";

export const Box = ({ ballPosition }) => {
   
    const boxDimensions = { width: 780, height: 190 }; 

    
    const getRandomPosition = () => ({
        x: Math.floor(Math.random() * (boxDimensions.width - 20)), 
        y: Math.floor(Math.random() * (boxDimensions.height - 20)) 
    });


    const [position, setPosition] = useState(getRandomPosition());

    useEffect(() => {
        setPosition(ballPosition);
        console.log(ballPosition)
    }, [ballPosition]);

    return (
        <div className="box-container">

            <Ball position={position} boxDimensions={boxDimensions} />
        </div>
    );
};

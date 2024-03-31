import React, { useRef, useEffect, useState } from 'react';
import { Ball } from "../ball/Ball";
import { SuccessBox } from "../success-box/SuccessBox";
import "./Box.css";

export const Box = ({ ballPosition }) => {
    const boxDimensions = { width: 780, height: 190 };
    const [successBoxPosition, setSuccessBoxPosition] = useState({ x: 0, y: 0 });

    const successBoxRef = useRef(null);

    useEffect(() => {
        if (successBoxRef.current) {
            const successBoxRect = successBoxRef.current.getBoundingClientRect();
            setSuccessBoxPosition({ x: successBoxRect.left, y: successBoxRect.top });
        }
    }, [successBoxRef.current]);
    

    const isInsideSuccessBox = (ballPosition) => {
        const successBoxDimensions = { width: 52, height: 52 };
        return (
            ballPosition.x >= successBoxPosition.x &&
            ballPosition.x <= successBoxPosition.x + successBoxDimensions.width &&
            ballPosition.y >= successBoxPosition.y &&
            ballPosition.y <= successBoxPosition.y + successBoxDimensions.height
        );
    };

    return (
        <div className="box-container">
            <Ball position={ballPosition} boxDimensions={boxDimensions} />
            {/* <SuccessBox ref={successBoxRef} /> */}
        </div>
    );
};

import Header from "../components/Header";
import React, { useState } from "react";
import "../App.scss";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
// after having downloaded in the terminal using "npm i react-router-dom"
//i import it in this file, it helps me move from output to input with a button
import { useNavigate } from "react-router-dom";

function Window({ position, size, frameColor, glassColor }) {
  const frameThickness = 0.6; // Thickness of the window frame
  const glassThickness = 0.5; // Thickness of the glass

  return (
    <>
      {/* Frame */}
      <mesh position={position}>
        <boxGeometry
          args={[
            size[0] + frameThickness,
            size[1] + frameThickness,
            frameThickness,
          ]}
        />
        <meshStandardMaterial attach="material" color={frameColor} />
      </mesh>

      {/* Glass Pane */}
      <mesh
        position={[
          position[0],
          position[1],
          position[2] + glassThickness / 2, // Adjust position to overlap with the frame
        ]}
      >
        <boxGeometry args={[size[0], size[1], glassThickness]} />
        <meshStandardMaterial
          attach="material"
          color={glassColor}
          transparent={true}
          opacity={1}
        />
      </mesh>
    </>
  );
}

function Output() {
  //brain behind me moving from output to input page START
  const navigate = useNavigate();
  const handleNavigateToInput = () => {
    navigate("/input");
  };
  //brain behind me moving from output to input page END

  // save the number from input passing through the local storage
  const numberFromInput = localStorage.getItem("initialNumber");
  const frameFromInput = localStorage.getItem("initialColor");
  const glassFromInput = localStorage.getItem("initialColor2");
  //console.log(numberFromInput, "da output");
  let number = Number(numberFromInput); //number inserted by the user

  const [numberOfWindows, setNumberOfWindows] = useState(number); // Control the number of windows
  return (
    <>
      <Header></Header>
      <Canvas camera={{ position: [-4, 1, 20], fov: 80 }}>
        <ambientLight intensity={0.3} />

        {/* Dynamically render Window components based on the numberOfWindows state */}
        {Array.from({ length: numberOfWindows }).map((_, index) => (
          <Window
            key={index}
            position={[index * 3.5, 0, 0]} // Space them out
            size={[3, 8]}
            frameColor={frameFromInput}
            glassColor={glassFromInput}
          />
        ))}

        <OrbitControls />
      </Canvas>

      {/* Control buttons to change the number of windows */}
      <div style={{ position: "absolute", top: 200, left: 20 }}>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setNumberOfWindows((prev) => Math.max(prev - 1, 0))}
        >
          Remove Window
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setNumberOfWindows((prev) => prev + 1)}
        >
          Add Window
        </button>
        {/* button that makes me move from this page to input page */}
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleNavigateToInput}
        >
          Go to Input Page
        </button>
      </div>
    </>
  );
}
export default Output;

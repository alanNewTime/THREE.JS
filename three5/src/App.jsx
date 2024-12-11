import React, { useRef } from "react";
import "./App.scss";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Header from "./components/header";

//creating a component for the mesh(or box) and not put it directly in the Canvas

// 2-received the position, color and domension properties (using destructuring)
function SpinningMesh({ position, dimension, color }) {
  //ref to target the mesh
  const mesh = useRef(null);
  // used to animate our object, we called it here after having imported it above
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });
  return (
    <>
      {/* 3-received the position, color and dimension properties in the mesh of our component  */}
      <mesh position={position} ref={mesh}>
        <boxGeometry attach="geometry" args={dimension} />
        <meshStandardMaterial attach="material" color={color} />
      </mesh>
    </>
  );
}

function App() {
  return (
    <>
      <Header></Header>
      {/* canvas start */}
      <Canvas camera={{ position: [-5, 2, 10], fov: 60 }}>
        <ambientLight intensity={0.3} />
        {/* 1-diplicated my component and create a position, color and dimension prop for each(or only some) clone */}
        <SpinningMesh position={[0, 1, 0]} dimension={[3, 2, 1]} />
        <SpinningMesh position={[-2, 1, -5]} color="pink" />
        <SpinningMesh position={[5, 1, 0]} dimension={[2, 1, 1]} color="blue" />
        {/* OrbitControls is a snippet from drei that gives us the ability to move our scene and zoom with just the mouse */}
        <OrbitControls />
      </Canvas>
      {/* canvas end */}
    </>
  );
}

export default App;

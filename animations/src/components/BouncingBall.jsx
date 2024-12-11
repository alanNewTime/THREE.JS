import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three"; // Make sure THREE is imported for the DoubleSide constant
import { useState } from "react";

function Sphere() {
  const [velocity, setVelocity] = useState(new THREE.Vector3(0, 0, 0)); // Initial velocity
  const [position, setPosition] = useState(new THREE.Vector3(0, 7, 0)); // Initial position above the plane

  // Gravity strength. This constant controls how much gravity affects the sphere each frame. A negative value means gravity pulls the sphere downward.
  const gravity = -0.05;
  // How much the sphere bounces back after hitting the plane When the sphere hits the ground,
  //its velocity is inverted and scaled by this factor, making it bounce.
  //A value less than 1 causes it to lose energy with each bounce
  const bounceFactor = 0.9;

  useFrame(() => {
    // Update velocity based on gravity.
    //The "velocity.clone()" creates a copy of the current velocity to avoid mutating the original state directly (React state should not be mutated).
    let newVelocity = velocity.clone();
    newVelocity.y += gravity; // Apply gravity

    // Update position based on velocity
    let newPosition = position.clone();
    newPosition.add(newVelocity); // Move the sphere

    // Detect collision with the plane (y = 0 for the plane)
    if (newPosition.y <= 1) {
      // If the sphere is at or below the plane (y = 1 is the sphere's radius)
      newPosition.y = 1; // Reset position to the plane level
      newVelocity.y = newVelocity.y * -bounceFactor; // Invert the velocity and apply bounce factor
    }

    // Update state
    setPosition(newPosition);
    setVelocity(newVelocity);
  });

  return (
    <>
      <group position={[position.x, position.y, position.z]}>
        <mesh>
          <sphereGeometry attach="geometry" args={[1, 30, 20]} />
          <meshStandardMaterial attach="material" color="lightblue" />
        </mesh>
        <mesh>
          <sphereGeometry attach="geometry" args={[1, 30, 20]} />
          <meshBasicMaterial attach="material" color="white" wireframe={true} />
        </mesh>
      </group>
    </>
  );
}

function PlaneElement() {
  return (
    <group position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
      <mesh>
        <planeGeometry attach="geometry" args={[8, 8]} />
        <meshStandardMaterial
          attach="material"
          color="gray"
          side={THREE.DoubleSide} // This makes sure that the plane is full from both sides and not just one
        />
      </mesh>
      <mesh>
        <planeGeometry attach="geometry" args={[8, 8]} />
        <meshBasicMaterial attach="material" color="white" wireframe={true} />
      </mesh>
    </group>
  );
}

function BouncingBall() {
  return (
    <>
      <Canvas camera={{ position: [-5, 2, 9], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <Sphere />
        <PlaneElement />
        <OrbitControls />
      </Canvas>
    </>
  );
}

export default BouncingBall;

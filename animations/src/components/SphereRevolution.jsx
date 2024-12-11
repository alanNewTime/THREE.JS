import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";

function RotatingSphere() {
  // Reference to the sphere mesh
  const sphereRef = useRef();

  // Use a state to track the angle for orbiting
  const [angle, setAngle] = useState(0);

  // Orbit speed (adjust this value for faster/slower orbiting)
  const orbitSpeed = 0.01;

  // Update position on each frame
  useFrame(() => {
    // Update the angle to simulate the revolution
    setAngle((prevAngle) => prevAngle + orbitSpeed);

    // Convert angle to position (x, y, z) based on circular orbit
    const radius = 7; // radius of the orbit
    sphereRef.current.position.x = radius * Math.cos(angle);
    sphereRef.current.position.z = radius * Math.sin(angle);

    // Optionally, you can also make the sphere face the center while orbiting
    sphereRef.current.lookAt(new THREE.Vector3(0, 2, 0));
  });

  return (
    <group ref={sphereRef}>
      <mesh>
        <sphereGeometry attach="geometry" args={[2, 20, 30]} />
        <meshStandardMaterial attach="material" color="lightblue" />
      </mesh>
      <mesh>
        <sphereGeometry attach="geometry" args={[2, 20, 30]} />
        <meshBasicMaterial attach="material" color="white" wireframe={true} />
      </mesh>
    </group>
  );
}
function StillSphere() {
  return (
    <group>
      <mesh>
        <sphereGeometry attach="geometry" args={[2, 20, 30]} />
        <meshStandardMaterial attach="material" color="lightblue" />
      </mesh>
      <mesh>
        <sphereGeometry attach="geometry" args={[2, 20, 30]} />
        <meshBasicMaterial attach="material" color="white" wireframe={true} />
      </mesh>
    </group>
  );
}
function SphereRevolution() {
  return (
    <Canvas camera={{ position: [-5, 2, 9], fov: 80 }}>
      <ambientLight intensity={0.5} />
      <RotatingSphere />
      <StillSphere />
      <OrbitControls />
    </Canvas>
  );
}

export default SphereRevolution;

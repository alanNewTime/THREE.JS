import { Canvas, useFrame } from "@react-three/fiber";
import { Edges } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three"; // Make sure THREE is imported for the DoubleSide constant
import { useRef } from "react";

function SphereElement() {
  const mesh = useRef(null);

  useFrame(() => {
    mesh.current.rotation.y += 0.01;
  });

  return (
    <>
      <mesh ref={mesh}>
        <sphereGeometry attach="geometry" args={[2, 30, 32]} />
        <meshBasicMaterial attach="material" color="brown" />
        {/* Edges to draw segment lines*/}
        <Edges scale={1} threshold={0.1}>
          <lineBasicMaterial color="red" linewidth={2} />
        </Edges>
      </mesh>
    </>
  );
}

function PlaneElement() {
  return (
    <>
      <mesh position={[0, -3, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry attach="geometry" args={[8, 8, 8]} />
        <meshBasicMaterial
          attach="material"
          color="gray"
          side={THREE.DoubleSide} //This makes sure that the plane is full from both sides and not just one
        />
        {/* Edges to draw segment lines*/}
        <Edges scale={1} threshold={0.1}>
          <lineBasicMaterial color="red" linewidth={2} />
        </Edges>
      </mesh>
    </>
  );
}

function SpherePlane() {
  return (
    <>
      <Canvas camera={{ position: [-5, 2, 9], fov: 60 }}>
        <SphereElement />
        <PlaneElement />
        <OrbitControls />
      </Canvas>
    </>
  );
}

export default SpherePlane;

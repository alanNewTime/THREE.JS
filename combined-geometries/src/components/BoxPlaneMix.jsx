import { Canvas, useFrame } from "@react-three/fiber";
import { Edges } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three"; // Make sure THREE is imported for the DoubleSide constant
import { useRef } from "react";

function BoxElement() {
  const mesh = useRef(null);

  useFrame(() => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });

  return (
    <>
      <mesh ref={mesh}>
        <boxGeometry attach="geometry" args={[2, 2, 3]} />
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
      <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry attach="geometry" args={[8, 8]} />
        <meshBasicMaterial
          attach="material"
          color="gray"
          side={THREE.DoubleSide} //This makes sure that the plane is full from both sides and not just one
        />

        {/* Edges to draw segment lines */}
        <Edges scale={1} threshold={0.1}>
          <lineBasicMaterial color="red" linewidth={2} />
        </Edges>
      </mesh>
    </>
  );
}

function BoxPlaneMix() {
  return (
    <>
      <Canvas camera={{ position: [-5, 2, 9], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <BoxElement />
        <PlaneElement />
        <OrbitControls />
      </Canvas>
    </>
  );
}

export default BoxPlaneMix;

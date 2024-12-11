import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";

function GlassElement() {
  const mesh = useRef(null);

  useFrame(() => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });

  return (
    <>
      <mesh ref={mesh}>
        <boxGeometry attach="geometry" args={[4, 1, 4]} />
        <meshStandardMaterial attach="material" color="lightblue" />
      </mesh>
    </>
  );
}

function BoxSideLight() {
  return (
    <>
      <Canvas camera={{ position: [-5, 2, 9], fov: 60 }}>
        <ambientLight intensity={0.3} />
        {/* the light source that targets my object */}
        <pointLight position={[-7, -5, 5]} intensity={20} color="white" />;
        <GlassElement />
        <OrbitControls />
      </Canvas>
    </>
  );
}

export default BoxSideLight;

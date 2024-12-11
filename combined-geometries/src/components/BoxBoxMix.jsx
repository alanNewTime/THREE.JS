import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Edges } from "@react-three/drei";

// box1 and box2 (put the two meshes inside the same component)
function Box1Box2() {
  return (
    <>
      {/* box 1 that represents the glass */}
      <mesh>
        <boxGeometry attach="geometry" args={[2.5, 4.5, 1.25]} />
        <meshBasicMaterial attach="material" color="lightblue" />

        {/* Edges to draw segment lines*/}
        <Edges scale={1} threshold={0.1}>
          <lineBasicMaterial color="red" linewidth={2} />
        </Edges>
      </mesh>

      {/* box2 that represents the sash */}
      <mesh>
        <boxGeometry attach="geometry" args={[3, 5, 1]} />
        <meshBasicMaterial attach="material" color="brown" />

        {/* Edges to draw segment lines*/}
        <Edges scale={1} threshold={0.1}>
          <lineBasicMaterial color="red" linewidth={2} />
        </Edges>
      </mesh>
    </>
  );
}

// box3 represents the horizontal  beam
function Box3() {
  return (
    <>
      <mesh position={[-6, 1, -2]}>
        <boxGeometry attach="geometry" args={[6, 1, 1]} />
        <meshBasicMaterial attach="material" color="green" />

        {/* Edges to draw segment lines*/}
        <Edges scale={1} threshold={0.1}>
          <lineBasicMaterial color="red" linewidth={2} />
        </Edges>
      </mesh>
    </>
  );
}

// box4 represents the vertical beam, we adde a rotion element to have it stand up
function Box4() {
  return (
    <>
      <mesh position={[-8.5, 5, -2]} rotation={[Math.PI / 2, 1.6, 0]}>
        <boxGeometry attach="geometry" args={[6, 1, 1]} />
        <meshBasicMaterial attach="material" color="violet" />

        {/* Edges to draw segment lines*/}
        <Edges scale={1} threshold={0.1}>
          <lineBasicMaterial color="red" linewidth={2} />
        </Edges>
      </mesh>
    </>
  );
}

function BoxBoxMix() {
  return (
    <>
      <Canvas camera={{ position: [-18, 2, 20], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <Box1Box2 />
        <Box3 />
        <Box4 />
        <OrbitControls />
      </Canvas>
    </>
  );
}

export default BoxBoxMix;

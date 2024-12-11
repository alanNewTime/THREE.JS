import { Canvas } from "@react-three/fiber";
import { Edges } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";

function Travi() {
  return (
    <>
      {/* barra sotto*/}
      <mesh>
        <boxGeometry attach="geometry" args={[30, 2, 2]} />
        <meshBasicMaterial attach="material" color="green" />

        {/* Edges to draw segment lines*/}
        <Edges scale={1} threshold={0.1}>
          <lineBasicMaterial color="red" linewidth={2} />
        </Edges>
      </mesh>

      {/* prima trave verticale */}
      <mesh position={[-14, 6, 0]}>
        <boxGeometry attach="geometry" args={[2, 10, 2]} />
        <meshBasicMaterial attach="material" color="brown" />

        {/* Edges to draw segment lines*/}
        <Edges scale={1} threshold={0.1}>
          <lineBasicMaterial color="red" linewidth={2} />
        </Edges>
      </mesh>

      {/* seconda trave verticale */}
      <mesh position={[1, 3.5, 0]}>
        <boxGeometry attach="geometry" args={[2, 5, 2]} />
        <meshBasicMaterial attach="material" color="brown" />

        {/* Edges to draw segment lines*/}
        <Edges scale={1} threshold={0.1}>
          <lineBasicMaterial color="red" linewidth={2} />
        </Edges>
      </mesh>

      {/* barra sopra*/}
      <mesh position={[1.6, 7.8, 0]} rotation={[Math.PI / 2, -0.4, 0]}>
        <boxGeometry attach="geometry" args={[30, 2, 2]} />
        <meshBasicMaterial attach="material" color="green" />

        {/* Edges to draw segment lines*/}
        <Edges scale={1} threshold={0.1}>
          <lineBasicMaterial color="red" linewidth={2} />
        </Edges>
      </mesh>
    </>
  );
}

function BoxBoxTravi() {
  return (
    <>
      <Canvas camera={{ position: [30, 10, 30], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <Travi />
        <OrbitControls />
      </Canvas>
    </>
  );
}

export default BoxBoxTravi;

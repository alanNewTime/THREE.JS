//STEPS :

// MAKE SURE YOU USE "STANDARD MATERIAL", BECAUSE IT INTERACTS WITH LIGHT AND SHADOWS
// AND BE SURE TO HAVE THE DIRECTIONAL LIGHT TAG PRESENT IN OUR CANVAS

// 1-Add shadowMaterial tag
// 2-add "shadows" props to the canvas tag
// 3-add the "castShadow" prop to our mesh that rapresents the object MAKING SURE IT HAS A REF PROP
// 4-add the "castShadow" prop in our directionalLight tag also
// 5-add "receiveShadow" prop to the mesh that rapresents the plane that will take the shadow

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Edges } from "@react-three/drei";
import * as THREE from "three"; // Make sure THREE is imported for the DoubleSide constant
import { useRef } from "react";

function GlassElement() {
  //ref to target the mesh
  const mesh = useRef(null);

  // used to animate our object, we called it here after having imported it above
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });

  return (
    <>
      {/* 3-add the "castShadow" prop to our mesh that rapresents the object MAKING SURE IT HAS A REF PROP */}
      <mesh castShadow ref={mesh}>
        <boxGeometry attach="geometry" args={[3, 5, 1]} />
        <meshStandardMaterial attach="material" color="lightblue" />

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
      {/* 5-add "receiveShadow" prop to the mesh that rapresents the plane that will take the shadow */}
      <mesh receiveShadow position={[0, -4, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry attach="geometry" args={[12, 12]} />
        <meshStandardMaterial
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

function BoxTopLightShadow() {
  return (
    <>
      {/* 2-add "shadows" to the canvas tag */}
      <Canvas shadows camera={{ position: [-5, 2, 15], fov: 60 }}>
        <ambientLight intensity={0.3} />
        {/* directionalLight casts light like the sun, from above IT IS ALSO THE LIGHT THAT CASTS SHADOWS */}
        {/* 4-add the "castShadow" prop in our directionalLight tag also */}
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />

        <GlassElement />

        {/* 1-Add shadowMaterial tag*/}
        <shadowMaterial attach="material" opacity={0.5} />
        <PlaneElement />
        <OrbitControls />
      </Canvas>
    </>
  );
}

export default BoxTopLightShadow;

// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import { Edges } from "@react-three/drei";
// import * as THREE from "three";
// import { useRef } from "react";

// function GlassElement() {
//   const mesh = useRef(null);

//   // Used to animate our object
//   useFrame(() => {
//     mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
//   });

//   return (
//     <>
//       <mesh castShadow ref={mesh}>
//         <boxGeometry attach="geometry" args={[3, 5, 1]} />
//         {/* Use a material that interacts with lights and shadows */}
//         <meshStandardMaterial attach="material" color="blue" />
//         <Edges scale={1} threshold={0.1}>
//           <lineBasicMaterial color="red" linewidth={2} />
//         </Edges>
//       </mesh>
//     </>
//   );
// }

// function PlaneElement() {
//   return (
//     <>
//       <mesh receiveShadow position={[0, -4, 0]} rotation={[Math.PI / 2, 0, 0]}>
//         <planeGeometry attach="geometry" args={[12, 12]} />
//         {/* Use a material that supports shadows */}
//         <meshStandardMaterial
//           attach="material"
//           color="gray"
//           side={THREE.DoubleSide}
//         />
//         <Edges scale={1} threshold={0.1}>
//           <lineBasicMaterial color="red" linewidth={2} />
//         </Edges>
//       </mesh>
//     </>
//   );
// }

// function BoxTopLightShadow() {
//   return (
//     <>
//       <Canvas shadows camera={{ position: [-5, 2, 15], fov: 60 }}>
//         <ambientLight intensity={0.3} />
//         <directionalLight
//           castShadow
//           position={[0, 10, 0]}
//           intensity={1} // Adjusted intensity for better shadow visibility
//           shadow-mapSize-width={1024}
//           shadow-mapSize-height={1024}
//           shadow-camera-far={50}
//           shadow-camera-left={-20}
//           shadow-camera-right={20}
//           shadow-camera-top={20}
//           shadow-camera-bottom={-20}
//         />

//         <GlassElement />

//         {/* The shadowMaterial will show shadows cast on the plane */}
//         <shadowMaterial attach="material" opacity={0.5} />

//         <PlaneElement />
//         <OrbitControls />
//       </Canvas>
//     </>
//   );
// }

// export default BoxTopLightShadow;

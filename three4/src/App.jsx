import React, { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, useGLTF } from "@react-three/drei";
import Header from "./components/Header.jsx";
import { Section } from "./components/Section.jsx";
import state from "./components/State.jsx";
import "./App.scss";

//constant/component where i import and save the image start
//i use "url" variable as a prop for image link to make the component reusable
const Model = ({ url }) => {
  const gltf = useGLTF(url, true);
  return <primitive object={gltf.scene} dispose={null} />;
};
//constant/component where i import and save the image end

//component that is gonna return the different lights that we might want start
const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[0, 10, 0]} intensity={1.5} />
      <spotLight intensity={1} position={[0, 1000, 0]} />
    </>
  );
};
//component that is gonna return the different lights that we might want end

//create a constant/component  called "HTMLContent" where i save the html part START.
// i pass "children", "modelPath" and "positionY" as variables/props to make the component reusable
const HTMLContent = ({ domContent, children, modelPath, positionY }) => {
  //constant used to make the chair rotate
  const ref = useRef();
  useFrame(() => (ref.current.rotation.y += 0.01));

  return (
    <Section factor={1.5} offset={1}>
      <group position={[0, positionY, 0]}>
        {/* image start */}
        <mesh ref={ref} position={[0, -35, 0]}>
          {/*  recieve the Model component initialized above */}
          <Model url={modelPath} />
        </mesh>
        {/* image end */}
        <Html portal={domContent} fullscreen>
          {children}
        </Html>
      </group>
    </Section>
  );
};
//create a constant  called "HTMLContent" where i save the html part END

function App() {
  //managing the page scrolling start
  const domContent = useRef();
  const scrollArea = useRef();
  const onScroll = (e) => (state.top.current = e.target.scrollTop);
  useEffect(() => void onScroll({ target: scrollArea.current }), []);
  //managing the page scrolling end

  return (
    <>
      <Header></Header>
      {/* start canvas */}
      <Canvas
        colormanagement="true"
        camera={{ position: [0, 0, 120], fov: 70 }}
      >
        {/*recieve the Lights component initialized above so that our chairs dont appear black*/}
        <Lights />
        <HTMLContent
          domContent={domContent}
          modelPath="/armchairYellow.gltf"
          positionY={250}
        >
          {/* children property start */}
          <div className="container">
            <h1 className="title">NEW TIME</h1>
          </div>
          {/* children property end */}
        </HTMLContent>

        <HTMLContent
          domContent={domContent}
          modelPath="/armchairGreen.gltf"
          positionY={10}
        >
          {/* children property start */}
          <div className="container">
            <h1 className="title">NEW TIME2</h1>
          </div>
          {/* children property end */}
        </HTMLContent>
      </Canvas>
      {/* end canvas */}

      {/* scroll movement of the pages start */}
      <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
        {/* part that manages the dom/html elements of the page */}
        <div style={{ position: "sticky", top: 0 }} ref={domContent}></div>
        {/* part that manages the height of the page */}
        <div style={{ height: `${state.sections * 100}vh` }}></div>
      </div>
      {/* scroll movement of the pages end */}
    </>
  );
}

export default App;

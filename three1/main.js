import * as THREE from "three";
import { OrbitControls } from "./node_modules/three/examples/jsm/controls/OrbitControls.js"; //helps me control my elements with the mouse

//-----------CORE START (with this part done i can render something)---------------
//RENDERER
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight); //set the with and height of the window
document.body.appendChild(renderer.domElement); //append to the dom or html page

//CAMERA
//we need to pass four things into the camera
//1. field of view (in degrees)
//2. aspect
//3. near
//4. far
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  10
);
camera.position.z = 2;

//SCENE
const scene = new THREE.Scene();
//-----------CORE END (with this part done i can render something)--------------

const controls = new OrbitControls(camera, renderer.domElement); //here i activate my orbit control

const geo = new THREE.IcosahedronGeometry(1.0, 2); //define the geometry

//1-material 1
const mat = new THREE.MeshStandardMaterial({
  color: "white",
  flatShading: true,
}); // put som material on our geometry
const mesh = new THREE.Mesh(geo, mat); //container for bothe the geometry and the material
scene.add(mesh); //added the defined geometry and the material to our scene

//1-material 2
const wireMat = new THREE.MeshBasicMaterial({
  color: "white",
  wireframe: true,
}); //put another material (wire mat, the white line effects) our geometry
const wireMesh = new THREE.Mesh(geo, wireMat); //container for our geometry and wire material
mesh.add(wireMesh); //i have added the wirefram mesh as a child to our first mesh instead of it being a child to the scene.(scene.add(wireMesh))

const hemiLight = new THREE.HemisphereLight("blue", "orange");
scene.add(hemiLight); //add hemiLight to our scene

//function i use to animate my object
function animate(t = 0) {
  requestAnimationFrame(animate);
  //mesh.scale.setScalar(Math.cos(t * 0.001) * 1.0);
  mesh.rotation.y = t * 0.0001;
  renderer.render(scene, camera); // RENDER PART!! (can be in or outside a functio but it is always needed )
}

animate();

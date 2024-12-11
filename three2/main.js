import * as THREE from "three";
import { OrbitControls } from "./node_modules/three/examples/jsm/controls/OrbitControls.js"; //helps me control my elements with the mouse

//-----------CORE START (with this part done i can render something)---------------
//RENDERER
const w = window.innerWidth;
const h = window.innerHeight;
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(w, h); //set the with and height of the window
document.body.appendChild(renderer.domElement); //append to the dom or html page

//CAMERA
//we need to pass four things into the camera
//1. field of view (in degrees)
//2. aspect
//3. near
//4. far
const fov = 75;
const aspect = w / h;
const near = 0.1;
const far = 10;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;

//SCENE
const scene = new THREE.Scene();
//-----------CORE END (with this part done i can render something)--------------

const controls = new OrbitControls(camera, renderer.domElement); //here i activate my orbit control
const loader = new THREE.TextureLoader(); //here because i want to import my earth image

const geo = new THREE.IcosahedronGeometry(1.0, 12); //define the geometry

//1-material 1
const mat = new THREE.MeshStandardMaterial({
  map: loader.load("./img/earthmap1k.jpg"),
}); // put some material on our geometry, in this case i import the image of earth
const mesh = new THREE.Mesh(geo, mat); //container for bothe the geometry and the material
scene.add(mesh); //added the defined geometry and the material to our scene
// every time i use "MeshStandardMaterial" as material, in order to see things i should pair it with "HemisphereLight"
//as we can see below
const hemiLight = new THREE.HemisphereLight();
scene.add(hemiLight); //add hemiLight to our scene

//1-material 2
const wireMat = new THREE.MeshBasicMaterial({
  color: "white",
  wireframe: true,
}); //put another material (wire mat, the white line effects) our geometry
const wireMesh = new THREE.Mesh(geo, wireMat); //container for our geometry and wire material
mesh.add(wireMesh); //i have added the wirefram mesh as a child to our first mesh instead of it being a child to the scene(scene.add(wireMesh))

//function i use to animate my object
function animate(t = 0) {
  requestAnimationFrame(animate);
  mesh.rotation.y = t * 0.0003;
  renderer.render(scene, camera); // RENDER PART!! (can be in or outside a functio but it is always needed )
}

animate();

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as dat from "dat.gui";

import fragmentShader from "./shaders/fragment.glsl";
import vertexShader from "./shaders/vertexShader.glsl";

export default class MyThree {
  constructor(dom) {
    this.gui = new dat.GUI();
    this.scene = new THREE.Scene();
    this.container = dom;
    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1));
    this.renderer.setSize(this.width, this.height);
    this.renderer.physicallyCorrectLights = true;
    this.renderer.outputEncoding = THREE.sRGBEncoding;
    this.container.appendChild(this.renderer.domElement);
    this.camera = new THREE.PerspectiveCamera(
      75,
      this.width / this.height,
      0.001,
      1500
    );
    this.camera.position.z = 5;
    // this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    // this.controls.listenToKeyEvents(window);
    // optional

    //controls.addEventListener( 'change', render ); // call this only in static scenes (i.e., if there is no animation loop)

    // this.controls.minDistance = 0;
    // this.controls.maxDistance = 2000;

    // this.controls.maxPolarAngle = Math.PI / 2;
    this.addObjects();
    this.render();
  }
  render() {
    if (this.cube) {
      this.cube.rotation.x += 0.01;
      this.cube.rotation.y += 0.01;
    }
    if (this.camera) this.renderer.render(this.scene, this.camera);
    if (this.controls) this.controls.update();
    window.requestAnimationFrame(this.render.bind(this));
  }
  addObjects() {
    this.cube = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    );

    this.scene.add(this.cube);
  }
}
window.addEventListener("DOMContentLoaded", function () {
  const myThree = new MyThree(document.querySelector("#container"));
});

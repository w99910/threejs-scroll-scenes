import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as dat from "dat.gui";

import fragmentShader from "./shaders/fragment.glsl";
import vertexShader from "./shaders/vertexShader.glsl";

export default class MyThree {
  constructor(options) {
    this.gui = new dat.GUI();
    this.scene = new THREE.Scene();
    this.container = options.dom;
    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1));
    this.renderer.setSize(this.width, this.height);
    this.renderer.setClearColor(0x000000, 1);
    this.renderer.physicallyCorrectLights = true;
    this.renderer.outputEncoding = THREE.sRGBEncoding;
    this.container.appendChild(this.renderer.domElement);
    this.camera = new THREE.PerspectiveCamera(
      75,
      this.width / this.height,
      0.001,
      1500
    );
    this.camera.position.z = 500;
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.listenToKeyEvents(window);
    this.clock = new THREE.Clock();
    this.dt;
    this.material;
    this.time = 0;
    this.distortion = 0.0;
    // optional

    //controls.addEventListener( 'change', render ); // call this only in static scenes (i.e., if there is no animation loop)

    this.controls.minDistance = 0;
    this.controls.maxDistance = 2000;

    this.controls.maxPolarAngle = Math.PI / 2;
    this.addObjects();
    this.render();
  }
  render() {
    this.time += 0.05;
    // if(this.cube)this.cube.rotation.x += this.dt*0.4;
    if (this.camera) this.renderer.render(this.scene, this.camera);
    if (this.controls) this.controls.update();
    window.requestAnimationFrame(this.render.bind(this));
  }
  addObjects() {}
}
window.addEventListener("DOMContentLoaded", function () {
  new MyThree({ dom: document.querySelector("#container") });
});

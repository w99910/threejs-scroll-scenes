import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import * as dat from "dat.gui";
import VirtualScroll from 'virtual-scroll'

import fragmentShader from "./shaders/fragment.glsl";
import vertexShader from "./shaders/vertexShader.glsl";

export default class MyThree {
    constructor(dom) {

        this.scenes = [{
            color: 0xe76f51,
        }, {
            color: 0xe63946,
        }, {
            color: 0x1d3557
        }]
        this.current = 0;
        this.scrollOffset = 0;

        this.setupSettings();
        this.container = dom;
        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;
        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
        });
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1));
        this.renderer.setSize(this.width, this.height);
        this.renderer.setClearColor(0xeeeeee, 1)
        this.renderer.outputEncoding = THREE.sRGBEncoding;
        this.renderer.domElement.style.position = 'absolute';
        this.container.appendChild(this.renderer.domElement);
        this.camera = new THREE.PerspectiveCamera(
            45,
            this.width / this.height,
            0.001,
            1500
        );
        this.camera.position.z = 3;
        this.scenes.forEach((scene) => {
            scene.scene = this.createScene(scene.color);
            this.renderer.compile(scene.scene, this.camera)
            scene.target = new THREE.WebGLRenderTarget(this.width, this.height)
        })
        this.initPostScene();

        const scroller = new VirtualScroll()
        scroller.on(event => {
            this.scrollOffset += event.deltaY / 4000;
            this.scrollOffset = (this.scrollOffset + 3000) % 3;
        })

        this.render();
    }


    setupSettings() {
        this.settings = {};
        // this.gui = new dat.GUI();
        this.settings.progress = 0;
        // this.gui.add(this.settings, 'progress', 0, 1, 0.01)
    }

    initPostScene() {
        this.postScene = new THREE.Scene();
        let frustumSize = 1;
        let aspect = 1;
        this.postCamera = new THREE.OrthographicCamera(frustumSize * aspect / -2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / -2, 0, 1000);
        this.material = new THREE.ShaderMaterial({
            side: THREE.DoubleSide,
            uniforms: {
                uTexture1: {value: null},
                uTexture2: {value: null},
                progress: {value: 0.0},
                // time: {value: 0.0},
            },
            vertexShader,
            fragmentShader,
        });
        this.p = new THREE.Mesh(
            new THREE.PlaneGeometry(1, 1),
            this.material
        )
        this.postScene.add(this.p);
    }


    render() {
        this.current = Math.floor(this.scrollOffset);
        this.next = Math.floor(this.scrollOffset + 1) % this.scenes.length;
        this.settings.progress = this.scrollOffset % 1;
        this.renderer.setRenderTarget(this.scenes[this.current].target)
        this.renderer.render(this.scenes[this.current].scene, this.camera);

        this.renderer.setRenderTarget(this.scenes[this.next].target);
        this.renderer.render(this.scenes[this.next].scene, this.camera);
        //
        this.material.uniforms.uTexture1.value = this.scenes[this.current].target.texture;
        this.material.uniforms.uTexture2.value = this.scenes[this.next].target.texture;
        this.material.uniforms.progress.value = this.settings.progress;
        
        this.renderer.setRenderTarget(null);
        requestAnimationFrame(this.render.bind(this));

        this.scenes.forEach((scene) => {
            scene.scene.rotation.y += 0.0005
        })

        this.renderer.render(this.postScene, this.postCamera);

    }


    createScene(color) {
        let scene = new THREE.Scene();
        scene.background = new THREE.Color(color)
        let material = new THREE.MeshBasicMaterial({
            color: new THREE.Color(0x333333),
        })
        let geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
        let mesh = new THREE.Mesh(geometry, material);
        for (let index = 0; index < 20; index++) {
            let random = new THREE.Vector3().randomDirection();
            let clone = mesh.clone();
            clone.position.copy(random);
            clone.rotation.x = Math.random();
            clone.rotation.y = Math.random();
            scene.add(clone);
        }
        return scene;
    }
}
window.addEventListener("DOMContentLoaded", function () {
    const myThree = new MyThree(document.querySelector("#container"));
});

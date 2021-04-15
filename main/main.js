import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
export default class MyThree {
       constructor(options){
        this.scene     = new THREE.Scene();
        this.container = options.dom ;
        this.width     = this.container.offsetWidth;
        this.height    = this.container.offsetHeight;
        this.renderer  = new THREE.WebGLRenderer();
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1));
        this.renderer.setSize(this.width,this.height);
        this.renderer.setClearColor(0xffffff,1);
        this.renderer.physicallyCorrectLights = true;
        this.renderer.outputEncoding = THREE.sRGBEncoding;
        this.container.appendChild(this.renderer.domElement);
        this.camera = new THREE.PerspectiveCamera(75,this.width/this.height,0.1,1000);
        this.camera.position.z = 3;
        this.controls = new OrbitControls(this.camera,this.renderer.domElement);
        this.controls.listenToKeyEvents( window );
        this.clock = new THREE.Clock();
        this.dt;
        
       // optional

				//controls.addEventListener( 'change', render ); // call this only in static scenes (i.e., if there is no animation loop)

				this.controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
				this.controls.dampingFactor = 0.05;

				this.controls.screenSpacePanning = false;

				this.controls.minDistance = 2;
				this.controls.maxDistance = 500;

				this.controls.maxPolarAngle = Math.PI / 2;
                this.addObjects();
                this.render();  
    
    }
    render(){
        this.dt = this.clock.getDelta();
        if(this.cube)this.cube.rotation.x += this.dt;
        if(this.camera)this.renderer.render(this.scene,this.camera);
        if(this.controls)this.controls.update();
        window.requestAnimationFrame(this.render.bind(this))
    }
    addObjects(){
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        this.cube = new THREE.Mesh(geometry,material);
        this.scene.add(this.cube);
       }

}
window.addEventListener('DOMContentLoaded',function(){
  new MyThree({dom:document.querySelector('#container')});
});

precision mediump float;
uniform sampler2D picture;
varying vec2 vUv;
varying vec3 vPosition;
void main(){
    vec4 tt = texture2D(picture,vUv);
    gl_FragColor = vec4(vUv,0.,1.);
    gl_FragColor =  tt;
    if(gl_FragColor.r < 0.1 && gl_FragColor.b < 0.1 && gl_FragColor.g < 0.1)discard;
}
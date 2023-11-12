//precision mediump float;
varying vec2 vUv;
uniform float time;
uniform float progress;
uniform sampler2D uTexture1;
uniform sampler2D uTexture2;

vec2 mirrored(vec2 v){
    vec2 m = mod(v, 2.);
    return mix(m, 2.0-m, step(1.0, m));
}

float tri(float p){
    return mix(p, 1.0-p, step(0.5, p)) * 2.;
}

void main(){
    vec4 t = texture(uTexture1, vUv);
    vec4 t1 = texture(uTexture2, vUv);

    float sweep = step(vUv.y, progress);
    vec4 finalT = mix(t, t1, sweep);
    gl_FragColor = finalT;

    float delayValue = progress * 7. - vUv.y * 2. + vUv.x - 2.;

    delayValue = clamp(delayValue, 0., 1.);

    float accel = .1;

    vec2 translateValue = vec2(progress) + delayValue * accel;
    vec2 translateValue1 = vec2(-0.5, 1.) * translateValue;
    vec2 translateValue2 = vec2(-0.5, 1.) * (translateValue - 1. - accel);

    vec2 w = sin(sin(time) * vec2(0, 0.3) + vUv.yx * vec2(0, 4.)) * vec2(0, 0.5);
    vec2 xy = w * (tri(progress) * 0.5 + tri(delayValue) * 0.5);

    vec2 uv1 = vUv + translateValue1 + xy;
    vec2 uv2 = vUv + translateValue2 + xy;


    vec4 u1 = texture(uTexture1, mirrored(uv1));
    vec4 u2 = texture(uTexture2, mirrored(uv2));

    vec4 final = mix(u1, u2, delayValue);
    gl_FragColor = final;
}
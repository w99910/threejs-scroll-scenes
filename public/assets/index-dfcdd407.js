(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bl="127",rn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},sn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Lc=0,zo=1,Cc=2,wl=1,Rc=2,_i=3,Hr=0,tt=1,Gi=2,Ml=1,bi=0,wi=1,ko=2,Ho=3,Uo=4,Pc=5,Hn=100,Dc=101,Ic=102,Go=103,Vo=104,Nc=200,Fc=201,Oc=202,Bc=203,Sl=204,El=205,zc=206,kc=207,Hc=208,Uc=209,Gc=210,Vc=0,Wc=1,jc=2,Ps=3,Xc=4,qc=5,Yc=6,Zc=7,Ur=0,Jc=1,$c=2,Mi=0,Qc=1,Kc=2,eh=3,th=4,nh=5,Tl=300,oo=301,ao=302,Wo=303,jo=304,lo=306,co=307,Ds=1e3,xt=1001,Is=1002,pt=1003,Xo=1004,qo=1005,rt=1006,ih=1007,Gr=1008,ho=1009,rh=1010,sh=1011,Tr=1012,oh=1013,Er=1014,on=1015,Ar=1016,ah=1017,lh=1018,ch=1019,Si=1020,hh=1021,vn=1022,Pt=1023,uh=1024,dh=1025,qn=1026,Ri=1027,fh=1028,ph=1029,mh=1030,gh=1031,_h=1032,vh=1033,Yo=33776,Zo=33777,Jo=33778,$o=33779,Qo=35840,Ko=35841,ea=35842,ta=35843,yh=36196,na=37492,ia=37496,xh=37808,bh=37809,wh=37810,Mh=37811,Sh=37812,Eh=37813,Th=37814,Ah=37815,Lh=37816,Ch=37817,Rh=37818,Ph=37819,Dh=37820,Ih=37821,Nh=36492,Fh=37840,Oh=37841,Bh=37842,zh=37843,kh=37844,Hh=37845,Uh=37846,Gh=37847,Vh=37848,Wh=37849,jh=37850,Xh=37851,qh=37852,Yh=37853,Zh=2200,Jh=2201,$h=2202,Lr=2300,Cr=2301,$r=2302,Vn=2400,Wn=2401,Rr=2402,uo=2500,Al=2501,Qh=0,Vi=3e3,fo=3001,Kh=3007,eu=3002,tu=3003,nu=3004,iu=3005,ru=3006,su=3200,ou=3201,Qn=0,au=1,Qr=7680,lu=519,Wi=35044,Pi=35048,ra="300 es";function Ut(){}Object.assign(Ut.prototype,{addEventListener:function(n,e){this._listeners===void 0&&(this._listeners={});const t=this._listeners;t[n]===void 0&&(t[n]=[]),t[n].indexOf(e)===-1&&t[n].push(e)},hasEventListener:function(n,e){if(this._listeners===void 0)return!1;const t=this._listeners;return t[n]!==void 0&&t[n].indexOf(e)!==-1},removeEventListener:function(n,e){if(this._listeners===void 0)return;const i=this._listeners[n];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}},dispatchEvent:function(n){if(this._listeners===void 0)return;const t=this._listeners[n.type];if(t!==void 0){n.target=this;const i=t.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,n);n.target=null}}});const it=[];for(let n=0;n<256;n++)it[n]=(n<16?"0":"")+n.toString(16);let qi=1234567;const Me={DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,generateUUID:function(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(it[n&255]+it[n>>8&255]+it[n>>16&255]+it[n>>24&255]+"-"+it[e&255]+it[e>>8&255]+"-"+it[e>>16&15|64]+it[e>>24&255]+"-"+it[t&63|128]+it[t>>8&255]+"-"+it[t>>16&255]+it[t>>24&255]+it[i&255]+it[i>>8&255]+it[i>>16&255]+it[i>>24&255]).toUpperCase()},clamp:function(n,e,t){return Math.max(e,Math.min(t,n))},euclideanModulo:function(n,e){return(n%e+e)%e},mapLinear:function(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)},inverseLerp:function(n,e,t){return n!==e?(t-n)/(e-n):0},lerp:function(n,e,t){return(1-t)*n+t*e},damp:function(n,e,t,i){return Me.lerp(n,e,1-Math.exp(-t*i))},pingpong:function(n,e=1){return e-Math.abs(Me.euclideanModulo(n,e*2)-e)},smoothstep:function(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))},smootherstep:function(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))},randInt:function(n,e){return n+Math.floor(Math.random()*(e-n+1))},randFloat:function(n,e){return n+Math.random()*(e-n)},randFloatSpread:function(n){return n*(.5-Math.random())},seededRandom:function(n){return n!==void 0&&(qi=n%2147483647),qi=qi*16807%2147483647,(qi-1)/2147483646},degToRad:function(n){return n*Me.DEG2RAD},radToDeg:function(n){return n*Me.RAD2DEG},isPowerOfTwo:function(n){return(n&n-1)===0&&n!==0},ceilPowerOfTwo:function(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))},floorPowerOfTwo:function(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))},setQuaternionFromProperEuler:function(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),h=s((e-i)/2),d=o((e-i)/2),f=s((i-e)/2),p=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*h,l*d,a*c);break;case"YZY":n.set(l*d,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*d,a*u,a*c);break;case"XZX":n.set(a*u,l*p,l*f,a*c);break;case"YXY":n.set(l*f,a*u,l*p,a*c);break;case"ZYZ":n.set(l*p,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}};class J{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}}J.prototype.isVector2=!0;class st{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],f=i[5],p=i[8],_=r[0],v=r[3],g=r[6],m=r[1],T=r[4],E=r[7],L=r[2],y=r[5],O=r[8];return s[0]=o*_+a*m+l*L,s[3]=o*v+a*T+l*y,s[6]=o*g+a*E+l*O,s[1]=c*_+u*m+h*L,s[4]=c*v+u*T+h*y,s[7]=c*g+u*E+h*O,s[2]=d*_+f*m+p*L,s[5]=d*v+f*T+p*y,s[8]=d*g+f*E+p*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,f=c*s-o*l,p=t*h+i*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return e[0]=h*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=d*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=f*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],l=r[1],c=r[4],u=r[7];return r[0]=t*s+i*l,r[3]=t*o+i*c,r[6]=t*a+i*u,r[1]=-i*s+t*l,r[4]=-i*o+t*c,r[7]=-i*a+t*u,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}st.prototype.isMatrix3=!0;let Mn;const Kn={getDataURL:function(n){if(/^data:/i.test(n.src)||typeof HTMLCanvasElement>"u")return n.src;let e;if(n instanceof HTMLCanvasElement)e=n;else{Mn===void 0&&(Mn=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")),Mn.width=n.width,Mn.height=n.height;const t=Mn.getContext("2d");n instanceof ImageData?t.putImageData(n,0,0):t.drawImage(n,0,0,n.width,n.height),e=Mn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",n),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}};let cu=0;class lt extends Ut{constructor(e=lt.DEFAULT_IMAGE,t=lt.DEFAULT_MAPPING,i=xt,r=xt,s=rt,o=Gr,a=Pt,l=ho,c=1,u=Vi){super(),Object.defineProperty(this,"id",{value:cu++}),this.uuid=Me.generateUUID(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new J(0,0),this.repeat=new J(1,1),this.center=new J(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.version=0,this.onUpdate=null}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const r=this.image;if(r.uuid===void 0&&(r.uuid=Me.generateUUID()),!t&&e.images[r.uuid]===void 0){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Kr(r[o].image)):s.push(Kr(r[o]))}else s=Kr(r);e.images[r.uuid]={uuid:r.uuid,url:s}}i.image=r.uuid}return t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ds:e.x=e.x-Math.floor(e.x);break;case xt:e.x=e.x<0?0:1;break;case Is:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ds:e.y=e.y-Math.floor(e.y);break;case xt:e.y=e.y<0?0:1;break;case Is:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}}lt.DEFAULT_IMAGE=void 0;lt.DEFAULT_MAPPING=Tl;lt.prototype.isTexture=!0;function Kr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Kn.getDataURL(n):n.data?{data:Array.prototype.slice.call(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}class ke{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],p=l[9],_=l[2],v=l[6],g=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(p-v)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(p+v)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,E=(f+1)/2,L=(g+1)/2,y=(u+d)/4,O=(h+_)/4,k=(p+v)/4;return T>E&&T>L?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=y/i,s=O/i):E>L?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=y/r,s=k/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=O/s,r=k/s),this.set(i,r,s,t),this}let m=Math.sqrt((v-p)*(v-p)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(m)<.001&&(m=1),this.x=(v-p)/m,this.y=(h-_)/m,this.z=(d-u)/m,this.w=Math.acos((c+f+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}}ke.prototype.isVector4=!0;class yn extends Ut{constructor(e,t,i){super(),this.width=e,this.height=t,this.depth=1,this.scissor=new ke(0,0,e,t),this.scissorTest=!1,this.viewport=new ke(0,0,e,t),i=i||{},this.texture=new lt(void 0,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.image={},this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:rt,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}yn.prototype.isWebGLRenderTarget=!0;class hu extends yn{constructor(e,t,i){super(e,t,i),this.samples=4}copy(e){return super.copy.call(this,e),this.samples=e.samples,this}}hu.prototype.isWebGLMultisampleRenderTarget=!0;class ot{constructor(e=0,t=0,i=0,r=1){this._x=e,this._y=t,this._z=i,this._w=r}static slerp(e,t,i,r){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),i.slerpQuaternions(e,t,r)}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const d=s[o+0],f=s[o+1],p=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=_;return}if(h!==_||l!==d||c!==f||u!==p){let v=1-a;const g=l*d+c*f+u*p+h*_,m=g>=0?1:-1,T=1-g*g;if(T>Number.EPSILON){const L=Math.sqrt(T),y=Math.atan2(L,g*m);v=Math.sin(v*y)/L,a=Math.sin(a*y)/L}const E=a*m;if(l=l*v+d*E,c=c*v+f*E,u=u*v+p*E,h=h*v+_*E,v===1-a){const L=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=L,c*=L,u*=L,h*=L}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],d=s[o+1],f=s[o+2],p=s[o+3];return e[t]=a*p+u*h+l*f-c*d,e[t+1]=l*p+u*d+c*h-a*f,e[t+2]=c*p+u*f+a*d-l*h,e[t+3]=u*p-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),d=l(i/2),f=l(r/2),p=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"YXZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"ZXY":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"ZYX":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"YZX":this._x=d*u*h+c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h-d*f*p;break;case"XZY":this._x=d*u*h-c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-r)*f}else if(i>a&&i>h){const f=2*Math.sqrt(1+i-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-i-h);this._w=(s-c)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-i-a);this._w=(o-r)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Me.clamp(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){this.copy(e).slerp(t,i)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}ot.prototype.isQuaternion=!0;class M{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(sa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*r-a*i,u=l*i+a*t-s*r,h=l*r+s*i-o*t,d=-s*t-o*i-a*r;return this.x=c*l+d*-s+u*-a-h*-o,this.y=u*l+d*-o+h*-s-c*-a,this.z=h*l+d*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return es.copy(this).projectOnVector(e),this.sub(es)}reflect(e){return this.sub(es.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Me.clamp(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}}M.prototype.isVector3=!0;const es=new M,sa=new ot;class Et{constructor(e=new M(1/0,1/0,1/0),t=new M(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],d=e[l+2];u<t&&(t=u),h<i&&(i=h),d<r&&(r=d),u>s&&(s=u),h>o&&(o=h),d>a&&(a=d)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),d=e.getZ(l);u<t&&(t=u),h<i&&(i=h),d<r&&(r=d),u>s&&(s=u),h>o&&(o=h),d>a&&(a=d)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return e===void 0&&(console.warn("THREE.Box3: .getCenter() target is now required"),e=new M),this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e===void 0&&(console.warn("THREE.Box3: .getSize() target is now required"),e=new M),this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);const t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),ts.copy(t.boundingBox),ts.applyMatrix4(e.matrixWorld),this.union(ts));const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t===void 0&&(console.warn("THREE.Box3: .getParameter() target is now required"),t=new M),t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(oi),Yi.subVectors(this.max,oi),Sn.subVectors(e.a,oi),En.subVectors(e.b,oi),Tn.subVectors(e.c,oi),Zt.subVectors(En,Sn),Jt.subVectors(Tn,En),gn.subVectors(Sn,Tn);let t=[0,-Zt.z,Zt.y,0,-Jt.z,Jt.y,0,-gn.z,gn.y,Zt.z,0,-Zt.x,Jt.z,0,-Jt.x,gn.z,0,-gn.x,-Zt.y,Zt.x,0,-Jt.y,Jt.x,0,-gn.y,gn.x,0];return!ns(t,Sn,En,Tn,Yi)||(t=[1,0,0,0,1,0,0,0,1],!ns(t,Sn,En,Tn,Yi))?!1:(Zi.crossVectors(Zt,Jt),t=[Zi.x,Zi.y,Zi.z],ns(t,Sn,En,Tn,Yi))}clampPoint(e,t){return t===void 0&&(console.warn("THREE.Box3: .clampPoint() target is now required"),t=new M),t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return si.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return e===void 0&&console.error("THREE.Box3: .getBoundingSphere() target is now required"),this.getCenter(e.center),e.radius=this.getSize(si).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}Et.prototype.isBox3=!0;const Wt=[new M,new M,new M,new M,new M,new M,new M,new M],si=new M,ts=new Et,Sn=new M,En=new M,Tn=new M,Zt=new M,Jt=new M,gn=new M,oi=new M,Yi=new M,Zi=new M,_n=new M;function ns(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){_n.fromArray(n,s);const a=r.x*Math.abs(_n.x)+r.y*Math.abs(_n.y)+r.z*Math.abs(_n.z),l=e.dot(_n),c=t.dot(_n),u=i.dot(_n);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const uu=new Et,oa=new M,is=new M,rs=new M;class ei{constructor(e=new M,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):uu.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t===void 0&&(console.warn("THREE.Sphere: .clampPoint() target is now required"),t=new M),t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return e===void 0&&(console.warn("THREE.Sphere: .getBoundingBox() target is now required"),e=new Et),this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){rs.subVectors(e,this.center);const t=rs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.add(rs.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return is.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(oa.copy(e.center).add(is)),this.expandByPoint(oa.copy(e.center).sub(is)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const jt=new M,ss=new M,Ji=new M,$t=new M,os=new M,$i=new M,as=new M;class bn{constructor(e=new M,t=new M(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t===void 0&&(console.warn("THREE.Ray: .at() target is now required"),t=new M),t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jt)),this}closestPointToPoint(e,t){t===void 0&&(console.warn("THREE.Ray: .closestPointToPoint() target is now required"),t=new M),t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=jt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jt.copy(this.direction).multiplyScalar(t).add(this.origin),jt.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ss.copy(e).add(t).multiplyScalar(.5),Ji.copy(t).sub(e).normalize(),$t.copy(this.origin).sub(ss);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ji),a=$t.dot(this.direction),l=-$t.dot(Ji),c=$t.lengthSq(),u=Math.abs(1-o*o);let h,d,f,p;if(u>0)if(h=o*l-a,d=o*a-l,p=s*u,h>=0)if(d>=-p)if(d<=p){const _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-p?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=p?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(h).add(this.origin),r&&r.copy(Ji).multiplyScalar(d).add(ss),f}intersectSphere(e,t){jt.subVectors(e.center,this.origin);const i=jt.dot(this.direction),r=jt.dot(jt)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,jt)!==null}intersectTriangle(e,t,i,r,s){os.subVectors(t,e),$i.subVectors(i,e),as.crossVectors(os,$i);let o=this.direction.dot(as),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$t.subVectors(this.origin,e);const l=a*this.direction.dot($i.crossVectors($t,$i));if(l<0)return null;const c=a*this.direction.dot(os.cross($t));if(c<0||l+c>o)return null;const u=-a*$t.dot(as);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class de{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,s,o,a,l,c,u,h,d,f,p,_,v){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=h,g[14]=d,g[3]=f,g[7]=p,g[11]=_,g[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new de().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/An.setFromMatrixColumn(e,0).length(),s=1/An.setFromMatrixColumn(e,1).length(),o=1/An.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,f=o*h,p=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+p*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,p=c*u,_=c*h;t[0]=d+_*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-p,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,p=c*u,_=c*h;t[0]=d-_*a,t[4]=-o*h,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,f=o*h,p=a*u,_=a*h;t[0]=l*u,t[4]=p*c-f,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,p=a*l,_=a*c;t[0]=l*u,t[4]=_-d*h,t[8]=p*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+p,t[10]=d-_*h}else if(e.order==="XZY"){const d=o*l,f=o*c,p=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=o*u,t[9]=f*h-p,t[2]=p*h-f,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(du,e,fu)}lookAt(e,t,i){const r=this.elements;return vt.subVectors(e,t),vt.lengthSq()===0&&(vt.z=1),vt.normalize(),Qt.crossVectors(i,vt),Qt.lengthSq()===0&&(Math.abs(i.z)===1?vt.x+=1e-4:vt.z+=1e-4,vt.normalize(),Qt.crossVectors(i,vt)),Qt.normalize(),Qi.crossVectors(vt,Qt),r[0]=Qt.x,r[4]=Qi.x,r[8]=vt.x,r[1]=Qt.y,r[5]=Qi.y,r[9]=vt.y,r[2]=Qt.z,r[6]=Qi.z,r[10]=vt.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],f=i[13],p=i[2],_=i[6],v=i[10],g=i[14],m=i[3],T=i[7],E=i[11],L=i[15],y=r[0],O=r[4],k=r[8],B=r[12],q=r[1],P=r[5],Z=r[9],R=r[13],C=r[2],I=r[6],D=r[10],Y=r[14],ee=r[3],Q=r[7],ae=r[11],le=r[15];return s[0]=o*y+a*q+l*C+c*ee,s[4]=o*O+a*P+l*I+c*Q,s[8]=o*k+a*Z+l*D+c*ae,s[12]=o*B+a*R+l*Y+c*le,s[1]=u*y+h*q+d*C+f*ee,s[5]=u*O+h*P+d*I+f*Q,s[9]=u*k+h*Z+d*D+f*ae,s[13]=u*B+h*R+d*Y+f*le,s[2]=p*y+_*q+v*C+g*ee,s[6]=p*O+_*P+v*I+g*Q,s[10]=p*k+_*Z+v*D+g*ae,s[14]=p*B+_*R+v*Y+g*le,s[3]=m*y+T*q+E*C+L*ee,s[7]=m*O+T*P+E*I+L*Q,s[11]=m*k+T*Z+E*D+L*ae,s[15]=m*B+T*R+E*Y+L*le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],p=e[3],_=e[7],v=e[11],g=e[15];return p*(+s*l*h-r*c*h-s*a*d+i*c*d+r*a*f-i*l*f)+_*(+t*l*f-t*c*d+s*o*d-r*o*f+r*c*u-s*l*u)+v*(+t*c*h-t*a*f-s*o*h+i*o*f+s*a*u-i*c*u)+g*(-r*a*u-t*l*h+t*a*d+r*o*h-i*o*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],p=e[12],_=e[13],v=e[14],g=e[15],m=h*v*c-_*d*c+_*l*f-a*v*f-h*l*g+a*d*g,T=p*d*c-u*v*c-p*l*f+o*v*f+u*l*g-o*d*g,E=u*_*c-p*h*c+p*a*f-o*_*f-u*a*g+o*h*g,L=p*h*l-u*_*l-p*a*d+o*_*d+u*a*v-o*h*v,y=t*m+i*T+r*E+s*L;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/y;return e[0]=m*O,e[1]=(_*d*s-h*v*s-_*r*f+i*v*f+h*r*g-i*d*g)*O,e[2]=(a*v*s-_*l*s+_*r*c-i*v*c-a*r*g+i*l*g)*O,e[3]=(h*l*s-a*d*s-h*r*c+i*d*c+a*r*f-i*l*f)*O,e[4]=T*O,e[5]=(u*v*s-p*d*s+p*r*f-t*v*f-u*r*g+t*d*g)*O,e[6]=(p*l*s-o*v*s-p*r*c+t*v*c+o*r*g-t*l*g)*O,e[7]=(o*d*s-u*l*s+u*r*c-t*d*c-o*r*f+t*l*f)*O,e[8]=E*O,e[9]=(p*h*s-u*_*s-p*i*f+t*_*f+u*i*g-t*h*g)*O,e[10]=(o*_*s-p*a*s+p*i*c-t*_*c-o*i*g+t*a*g)*O,e[11]=(u*a*s-o*h*s-u*i*c+t*h*c+o*i*f-t*a*f)*O,e[12]=L*O,e[13]=(u*_*r-p*h*r+p*i*d-t*_*d-u*i*v+t*h*v)*O,e[14]=(p*a*r-o*_*r-p*i*l+t*_*l+o*i*v-t*a*v)*O,e[15]=(o*h*r-u*a*r+u*i*l-t*h*l-o*i*d+t*a*d)*O,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i){return this.set(1,t,i,0,e,1,i,0,e,t,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,d=s*c,f=s*u,p=s*h,_=o*u,v=o*h,g=a*h,m=l*c,T=l*u,E=l*h,L=i.x,y=i.y,O=i.z;return r[0]=(1-(_+g))*L,r[1]=(f+E)*L,r[2]=(p-T)*L,r[3]=0,r[4]=(f-E)*y,r[5]=(1-(d+g))*y,r[6]=(v+m)*y,r[7]=0,r[8]=(p+T)*O,r[9]=(v-m)*O,r[10]=(1-(d+_))*O,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=An.set(r[0],r[1],r[2]).length();const o=An.set(r[4],r[5],r[6]).length(),a=An.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],At.copy(this);const c=1/s,u=1/o,h=1/a;return At.elements[0]*=c,At.elements[1]*=c,At.elements[2]*=c,At.elements[4]*=u,At.elements[5]*=u,At.elements[6]*=u,At.elements[8]*=h,At.elements[9]*=h,At.elements[10]*=h,t.setFromRotationMatrix(At),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,l=2*s/(t-e),c=2*s/(i-r),u=(t+e)/(t-e),h=(i+r)/(i-r),d=-(o+s)/(o-s),f=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=f,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,s,o){const a=this.elements,l=1/(t-e),c=1/(i-r),u=1/(o-s),h=(t+e)*l,d=(i+r)*c,f=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-f,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}de.prototype.isMatrix4=!0;const An=new M,At=new de,du=new M(0,0,0),fu=new M(1,1,1),Qt=new M,Qi=new M,vt=new M,aa=new de,la=new ot;class ti{constructor(e=0,t=0,i=0,r=ti.DefaultOrder){this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._order=r||this._order,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t,i){const r=Me.clamp,s=e.elements,o=s[0],a=s[4],l=s[8],c=s[1],u=s[5],h=s[9],d=s[2],f=s[6],p=s[10];switch(t=t||this._order,t){case"XYZ":this._y=Math.asin(r(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-r(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,p),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(r(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-r(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(r(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(l,p));break;case"XZY":this._z=Math.asin(-r(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(l,o)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i!==!1&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return aa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(aa,t,i)}setFromVector3(e,t){return this.set(e.x,e.y,e.z,t||this._order)}reorder(e){return la.setFromEuler(this),this.setFromQuaternion(la,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new M(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}ti.prototype.isEuler=!0;ti.DefaultOrder="XYZ";ti.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Ll{constructor(){this.mask=1}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}}let pu=0;const ca=new M,Ln=new ot,Xt=new de,Ki=new M,ai=new M,mu=new M,gu=new ot,ha=new M(1,0,0),ua=new M(0,1,0),da=new M(0,0,1),_u={type:"added"},fa={type:"removed"};function be(){Object.defineProperty(this,"id",{value:pu++}),this.uuid=Me.generateUUID(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=be.DefaultUp.clone();const n=new M,e=new ti,t=new ot,i=new M(1,1,1);function r(){t.setFromEuler(e,!1)}function s(){e.setFromQuaternion(t,void 0,!1)}e._onChange(r),t._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:n},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:t},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new de},normalMatrix:{value:new st}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=be.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Ll,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}be.DefaultUp=new M(0,1,0);be.DefaultMatrixAutoUpdate=!0;be.prototype=Object.assign(Object.create(Ut.prototype),{constructor:be,isObject3D:!0,onBeforeRender:function(){},onAfterRender:function(){},applyMatrix4:function(n){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(n),this.matrix.decompose(this.position,this.quaternion,this.scale)},applyQuaternion:function(n){return this.quaternion.premultiply(n),this},setRotationFromAxisAngle:function(n,e){this.quaternion.setFromAxisAngle(n,e)},setRotationFromEuler:function(n){this.quaternion.setFromEuler(n,!0)},setRotationFromMatrix:function(n){this.quaternion.setFromRotationMatrix(n)},setRotationFromQuaternion:function(n){this.quaternion.copy(n)},rotateOnAxis:function(n,e){return Ln.setFromAxisAngle(n,e),this.quaternion.multiply(Ln),this},rotateOnWorldAxis:function(n,e){return Ln.setFromAxisAngle(n,e),this.quaternion.premultiply(Ln),this},rotateX:function(n){return this.rotateOnAxis(ha,n)},rotateY:function(n){return this.rotateOnAxis(ua,n)},rotateZ:function(n){return this.rotateOnAxis(da,n)},translateOnAxis:function(n,e){return ca.copy(n).applyQuaternion(this.quaternion),this.position.add(ca.multiplyScalar(e)),this},translateX:function(n){return this.translateOnAxis(ha,n)},translateY:function(n){return this.translateOnAxis(ua,n)},translateZ:function(n){return this.translateOnAxis(da,n)},localToWorld:function(n){return n.applyMatrix4(this.matrixWorld)},worldToLocal:function(n){return n.applyMatrix4(Xt.copy(this.matrixWorld).invert())},lookAt:function(n,e,t){n.isVector3?Ki.copy(n):Ki.set(n,e,t);const i=this.parent;this.updateWorldMatrix(!0,!1),ai.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xt.lookAt(ai,Ki,this.up):Xt.lookAt(Ki,ai,this.up),this.quaternion.setFromRotationMatrix(Xt),i&&(Xt.extractRotation(i.matrixWorld),Ln.setFromRotationMatrix(Xt),this.quaternion.premultiply(Ln.invert()))},add:function(n){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return n===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",n),this):(n&&n.isObject3D?(n.parent!==null&&n.parent.remove(n),n.parent=this,this.children.push(n),n.dispatchEvent(_u)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",n),this)},remove:function(n){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.remove(arguments[t]);return this}const e=this.children.indexOf(n);return e!==-1&&(n.parent=null,this.children.splice(e,1),n.dispatchEvent(fa)),this},clear:function(){for(let n=0;n<this.children.length;n++){const e=this.children[n];e.parent=null,e.dispatchEvent(fa)}return this.children.length=0,this},attach:function(n){return this.updateWorldMatrix(!0,!1),Xt.copy(this.matrixWorld).invert(),n.parent!==null&&(n.parent.updateWorldMatrix(!0,!1),Xt.multiply(n.parent.matrixWorld)),n.applyMatrix4(Xt),this.add(n),n.updateWorldMatrix(!1,!0),this},getObjectById:function(n){return this.getObjectByProperty("id",n)},getObjectByName:function(n){return this.getObjectByProperty("name",n)},getObjectByProperty:function(n,e){if(this[n]===e)return this;for(let t=0,i=this.children.length;t<i;t++){const s=this.children[t].getObjectByProperty(n,e);if(s!==void 0)return s}},getWorldPosition:function(n){return n===void 0&&(console.warn("THREE.Object3D: .getWorldPosition() target is now required"),n=new M),this.updateWorldMatrix(!0,!1),n.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(n){return n===void 0&&(console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),n=new ot),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ai,n,mu),n},getWorldScale:function(n){return n===void 0&&(console.warn("THREE.Object3D: .getWorldScale() target is now required"),n=new M),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ai,gu,n),n},getWorldDirection:function(n){n===void 0&&(console.warn("THREE.Object3D: .getWorldDirection() target is now required"),n=new M),this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return n.set(e[8],e[9],e[10]).normalize()},raycast:function(){},traverse:function(n){n(this);const e=this.children;for(let t=0,i=e.length;t<i;t++)e[t].traverse(n)},traverseVisible:function(n){if(this.visible===!1)return;n(this);const e=this.children;for(let t=0,i=e.length;t<i;t++)e[t].traverseVisible(n)},traverseAncestors:function(n){const e=this.parent;e!==null&&(n(e),e.traverseAncestors(n))},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(n){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,n=!0);const e=this.children;for(let t=0,i=e.length;t<i;t++)e[t].updateMatrixWorld(n)},updateWorldMatrix:function(n,e){const t=this.parent;if(n===!0&&t!==null&&t.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateWorldMatrix(!1,!0)}},toJSON:function(n){const e=n===void 0||typeof n=="string",t={};e&&(n={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},t.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(o,a){return o[a.uuid]===void 0&&(o[a.uuid]=a.toJSON(n)),a.uuid}if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(n.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const a=o.shapes;if(Array.isArray(a))for(let l=0,c=a.length;l<c;l++){const u=a[l];r(n.shapes,u)}else r(n.shapes,a)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(n.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let a=0,l=this.material.length;a<l;a++)o.push(r(n.materials,this.material[a]));i.material=o}else i.material=r(n.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(n).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const a=this.animations[o];i.animations.push(r(n.animations,a))}}if(e){const o=s(n.geometries),a=s(n.materials),l=s(n.textures),c=s(n.images),u=s(n.shapes),h=s(n.skeletons),d=s(n.animations);o.length>0&&(t.geometries=o),a.length>0&&(t.materials=a),l.length>0&&(t.textures=l),c.length>0&&(t.images=c),u.length>0&&(t.shapes=u),h.length>0&&(t.skeletons=h),d.length>0&&(t.animations=d)}return t.object=i,t;function s(o){const a=[];for(const l in o){const c=o[l];delete c.metadata,a.push(c)}return a}},clone:function(n){return new this.constructor().copy(this,n)},copy:function(n,e=!0){if(this.name=n.name,this.up.copy(n.up),this.position.copy(n.position),this.rotation.order=n.rotation.order,this.quaternion.copy(n.quaternion),this.scale.copy(n.scale),this.matrix.copy(n.matrix),this.matrixWorld.copy(n.matrixWorld),this.matrixAutoUpdate=n.matrixAutoUpdate,this.matrixWorldNeedsUpdate=n.matrixWorldNeedsUpdate,this.layers.mask=n.layers.mask,this.visible=n.visible,this.castShadow=n.castShadow,this.receiveShadow=n.receiveShadow,this.frustumCulled=n.frustumCulled,this.renderOrder=n.renderOrder,this.userData=JSON.parse(JSON.stringify(n.userData)),e===!0)for(let t=0;t<n.children.length;t++){const i=n.children[t];this.add(i.clone())}return this}});const ls=new M,vu=new M,yu=new st;class zt{constructor(e=new M(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ls.subVectors(i,t).cross(vu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t===void 0&&(console.warn("THREE.Plane: .projectPoint() target is now required"),t=new M),t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){t===void 0&&(console.warn("THREE.Plane: .intersectLine() target is now required"),t=new M);const i=e.delta(ls),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e===void 0&&(console.warn("THREE.Plane: .coplanarPoint() target is now required"),e=new M),e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||yu.getNormalMatrix(e),r=this.coplanarPoint(ls).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}zt.prototype.isPlane=!0;const Lt=new M,qt=new M,cs=new M,Yt=new M,Cn=new M,Rn=new M,pa=new M,hs=new M,us=new M,ds=new M;class $e{constructor(e=new M,t=new M,i=new M){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r===void 0&&(console.warn("THREE.Triangle: .getNormal() target is now required"),r=new M),r.subVectors(i,t),Lt.subVectors(e,t),r.cross(Lt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Lt.subVectors(r,t),qt.subVectors(i,t),cs.subVectors(e,t);const o=Lt.dot(Lt),a=Lt.dot(qt),l=Lt.dot(cs),c=qt.dot(qt),u=qt.dot(cs),h=o*c-a*a;if(s===void 0&&(console.warn("THREE.Triangle: .getBarycoord() target is now required"),s=new M),h===0)return s.set(-2,-1,-1);const d=1/h,f=(c*l-a*u)*d,p=(o*u-a*l)*d;return s.set(1-f-p,p,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Yt),Yt.x>=0&&Yt.y>=0&&Yt.x+Yt.y<=1}static getUV(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Yt),l.set(0,0),l.addScaledVector(s,Yt.x),l.addScaledVector(o,Yt.y),l.addScaledVector(a,Yt.z),l}static isFrontFacing(e,t,i,r){return Lt.subVectors(i,t),qt.subVectors(e,t),Lt.cross(qt).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Lt.subVectors(this.c,this.b),qt.subVectors(this.a,this.b),Lt.cross(qt).length()*.5}getMidpoint(e){return e===void 0&&(console.warn("THREE.Triangle: .getMidpoint() target is now required"),e=new M),e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $e.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e===void 0&&(console.warn("THREE.Triangle: .getPlane() target is now required"),e=new zt),e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $e.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return $e.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return $e.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $e.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){t===void 0&&(console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),t=new M);const i=this.a,r=this.b,s=this.c;let o,a;Cn.subVectors(r,i),Rn.subVectors(s,i),hs.subVectors(e,i);const l=Cn.dot(hs),c=Rn.dot(hs);if(l<=0&&c<=0)return t.copy(i);us.subVectors(e,r);const u=Cn.dot(us),h=Rn.dot(us);if(u>=0&&h<=u)return t.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Cn,o);ds.subVectors(e,s);const f=Cn.dot(ds),p=Rn.dot(ds);if(p>=0&&f<=p)return t.copy(s);const _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(Rn,a);const v=u*p-f*h;if(v<=0&&h-u>=0&&f-p>=0)return pa.subVectors(s,r),a=(h-u)/(h-u+(f-p)),t.copy(r).addScaledVector(pa,a);const g=1/(v+_+d);return o=_*g,a=d*g,t.copy(i).addScaledVector(Cn,o).addScaledVector(Rn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let xu=0;function Ye(){Object.defineProperty(this,"id",{value:xu++}),this.uuid=Me.generateUUID(),this.name="",this.type="Material",this.fog=!0,this.blending=wi,this.side=Hr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Sl,this.blendDst=El,this.blendEquation=Hn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qr,this.stencilZFail=Qr,this.stencilZPass=Qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0}Ye.prototype=Object.assign(Object.create(Ut.prototype),{constructor:Ye,isMaterial:!0,onBeforeCompile:function(){},customProgramCacheKey:function(){return this.onBeforeCompile.toString()},setValues:function(n){if(n!==void 0)for(const e in n){const t=n[e];if(t===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}if(e==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=t===Ml;continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(t):i&&i.isVector3&&t&&t.isVector3?i.copy(t):this[e]=t}},toJSON:function(n){const e=n===void 0||typeof n=="string";e&&(n={textures:{},images:{}});const t={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.color&&this.color.isColor&&(t.color=this.color.getHex()),this.roughness!==void 0&&(t.roughness=this.roughness),this.metalness!==void 0&&(t.metalness=this.metalness),this.sheen&&this.sheen.isColor&&(t.sheen=this.sheen.getHex()),this.emissive&&this.emissive.isColor&&(t.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(t.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(t.specular=this.specular.getHex()),this.shininess!==void 0&&(t.shininess=this.shininess),this.clearcoat!==void 0&&(t.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(t.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(t.clearcoatMap=this.clearcoatMap.toJSON(n).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(t.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(n).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(t.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(n).uuid,t.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(t.map=this.map.toJSON(n).uuid),this.matcap&&this.matcap.isTexture&&(t.matcap=this.matcap.toJSON(n).uuid),this.alphaMap&&this.alphaMap.isTexture&&(t.alphaMap=this.alphaMap.toJSON(n).uuid),this.lightMap&&this.lightMap.isTexture&&(t.lightMap=this.lightMap.toJSON(n).uuid,t.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(t.aoMap=this.aoMap.toJSON(n).uuid,t.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(t.bumpMap=this.bumpMap.toJSON(n).uuid,t.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(t.normalMap=this.normalMap.toJSON(n).uuid,t.normalMapType=this.normalMapType,t.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(t.displacementMap=this.displacementMap.toJSON(n).uuid,t.displacementScale=this.displacementScale,t.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(t.roughnessMap=this.roughnessMap.toJSON(n).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(t.metalnessMap=this.metalnessMap.toJSON(n).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(t.emissiveMap=this.emissiveMap.toJSON(n).uuid),this.specularMap&&this.specularMap.isTexture&&(t.specularMap=this.specularMap.toJSON(n).uuid),this.envMap&&this.envMap.isTexture&&(t.envMap=this.envMap.toJSON(n).uuid,t.reflectivity=this.reflectivity,t.refractionRatio=this.refractionRatio,this.combine!==void 0&&(t.combine=this.combine),this.envMapIntensity!==void 0&&(t.envMapIntensity=this.envMapIntensity)),this.gradientMap&&this.gradientMap.isTexture&&(t.gradientMap=this.gradientMap.toJSON(n).uuid),this.size!==void 0&&(t.size=this.size),this.shadowSide!==null&&(t.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(t.sizeAttenuation=this.sizeAttenuation),this.blending!==wi&&(t.blending=this.blending),this.side!==Hr&&(t.side=this.side),this.vertexColors&&(t.vertexColors=!0),this.opacity<1&&(t.opacity=this.opacity),this.transparent===!0&&(t.transparent=this.transparent),t.depthFunc=this.depthFunc,t.depthTest=this.depthTest,t.depthWrite=this.depthWrite,t.colorWrite=this.colorWrite,t.stencilWrite=this.stencilWrite,t.stencilWriteMask=this.stencilWriteMask,t.stencilFunc=this.stencilFunc,t.stencilRef=this.stencilRef,t.stencilFuncMask=this.stencilFuncMask,t.stencilFail=this.stencilFail,t.stencilZFail=this.stencilZFail,t.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(t.rotation=this.rotation),this.polygonOffset===!0&&(t.polygonOffset=!0),this.polygonOffsetFactor!==0&&(t.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(t.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(t.linewidth=this.linewidth),this.dashSize!==void 0&&(t.dashSize=this.dashSize),this.gapSize!==void 0&&(t.gapSize=this.gapSize),this.scale!==void 0&&(t.scale=this.scale),this.dithering===!0&&(t.dithering=!0),this.alphaTest>0&&(t.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(t.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(t.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(t.wireframe=this.wireframe),this.wireframeLinewidth>1&&(t.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(t.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(t.wireframeLinejoin=this.wireframeLinejoin),this.morphTargets===!0&&(t.morphTargets=!0),this.morphNormals===!0&&(t.morphNormals=!0),this.skinning===!0&&(t.skinning=!0),this.flatShading===!0&&(t.flatShading=this.flatShading),this.visible===!1&&(t.visible=!1),this.toneMapped===!1&&(t.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(t.userData=this.userData);function i(r){const s=[];for(const o in r){const a=r[o];delete a.metadata,s.push(a)}return s}if(e){const r=i(n.textures),s=i(n.images);r.length>0&&(t.textures=r),s.length>0&&(t.images=s)}return t},clone:function(){return new this.constructor().copy(this)},copy:function(n){this.name=n.name,this.fog=n.fog,this.blending=n.blending,this.side=n.side,this.vertexColors=n.vertexColors,this.opacity=n.opacity,this.transparent=n.transparent,this.blendSrc=n.blendSrc,this.blendDst=n.blendDst,this.blendEquation=n.blendEquation,this.blendSrcAlpha=n.blendSrcAlpha,this.blendDstAlpha=n.blendDstAlpha,this.blendEquationAlpha=n.blendEquationAlpha,this.depthFunc=n.depthFunc,this.depthTest=n.depthTest,this.depthWrite=n.depthWrite,this.stencilWriteMask=n.stencilWriteMask,this.stencilFunc=n.stencilFunc,this.stencilRef=n.stencilRef,this.stencilFuncMask=n.stencilFuncMask,this.stencilFail=n.stencilFail,this.stencilZFail=n.stencilZFail,this.stencilZPass=n.stencilZPass,this.stencilWrite=n.stencilWrite;const e=n.clippingPlanes;let t=null;if(e!==null){const i=e.length;t=new Array(i);for(let r=0;r!==i;++r)t[r]=e[r].clone()}return this.clippingPlanes=t,this.clipIntersection=n.clipIntersection,this.clipShadows=n.clipShadows,this.shadowSide=n.shadowSide,this.colorWrite=n.colorWrite,this.precision=n.precision,this.polygonOffset=n.polygonOffset,this.polygonOffsetFactor=n.polygonOffsetFactor,this.polygonOffsetUnits=n.polygonOffsetUnits,this.dithering=n.dithering,this.alphaTest=n.alphaTest,this.alphaToCoverage=n.alphaToCoverage,this.premultipliedAlpha=n.premultipliedAlpha,this.visible=n.visible,this.toneMapped=n.toneMapped,this.userData=JSON.parse(JSON.stringify(n.userData)),this},dispose:function(){this.dispatchEvent({type:"dispose"})}});Object.defineProperty(Ye.prototype,"needsUpdate",{set:function(n){n===!0&&this.version++}});const Cl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ct={h:0,s:0,l:0},er={h:0,s:0,l:0};function fs(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function ps(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ms(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let fe=class{constructor(e,t,i){return t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,i){return this.r=e,this.g=t,this.b=i,this}setHSL(e,t,i){if(e=Me.euclideanModulo(e,1),t=Me.clamp(t,0,1),i=Me.clamp(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,s=2*i-r;this.r=fs(s,r,e+1/3),this.g=fs(s,r,e),this.b=fs(s,r,e-1/3)}return this}setStyle(e){function t(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const s=i[1],o=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,t(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,t(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const a=parseFloat(r[1])/360,l=parseInt(r[2],10)/100,c=parseInt(r[3],10)/100;return t(r[4]),this.setHSL(a,l,c)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],s=r.length;if(s===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,this;if(s===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){const t=Cl[e];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,t=2){return this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this}copyLinearToGamma(e,t=2){const i=t>0?1/t:1;return this.r=Math.pow(e.r,i),this.g=Math.pow(e.g,i),this.b=Math.pow(e.b,i),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=ps(e.r),this.g=ps(e.g),this.b=ps(e.b),this}copyLinearToSRGB(e){return this.r=ms(e.r),this.g=ms(e.g),this.b=ms(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){e===void 0&&(console.warn("THREE.Color: .getHSL() target is now required"),e={h:0,s:0,l:0});const t=this.r,i=this.g,r=this.b,s=Math.max(t,i,r),o=Math.min(t,i,r);let a,l;const c=(o+s)/2;if(o===s)a=0,l=0;else{const u=s-o;switch(l=c<=.5?u/(s+o):u/(2-s-o),s){case t:a=(i-r)/u+(i<r?6:0);break;case i:a=(r-t)/u+2;break;case r:a=(t-i)/u+4;break}a/=6}return e.h=a,e.s=l,e.l=c,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,i){return this.getHSL(Ct),Ct.h+=e,Ct.s+=t,Ct.l+=i,this.setHSL(Ct.h,Ct.s,Ct.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ct),e.getHSL(er);const i=Me.lerp(Ct.h,er.h,t),r=Me.lerp(Ct.s,er.s,t),s=Me.lerp(Ct.l,er.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}};fe.NAMES=Cl;fe.prototype.isColor=!0;fe.prototype.r=1;fe.prototype.g=1;fe.prototype.b=1;class po extends Ye{constructor(e){super(),this.type="MeshBasicMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ur,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this}}po.prototype.isMeshBasicMaterial=!0;const Ge=new M,tr=new J;function Ae(n,e,t){if(Array.isArray(n))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=n,this.itemSize=e,this.count=n!==void 0?n.length/e:0,this.normalized=t===!0,this.usage=Wi,this.updateRange={offset:0,count:-1},this.version=0}Object.defineProperty(Ae.prototype,"needsUpdate",{set:function(n){n===!0&&this.version++}});Object.assign(Ae.prototype,{isBufferAttribute:!0,onUploadCallback:function(){},setUsage:function(n){return this.usage=n,this},copy:function(n){return this.name=n.name,this.array=new n.array.constructor(n.array),this.itemSize=n.itemSize,this.count=n.count,this.normalized=n.normalized,this.usage=n.usage,this},copyAt:function(n,e,t){n*=this.itemSize,t*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[n+i]=e.array[t+i];return this},copyArray:function(n){return this.array.set(n),this},copyColorsArray:function(n){const e=this.array;let t=0;for(let i=0,r=n.length;i<r;i++){let s=n[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),s=new fe),e[t++]=s.r,e[t++]=s.g,e[t++]=s.b}return this},copyVector2sArray:function(n){const e=this.array;let t=0;for(let i=0,r=n.length;i<r;i++){let s=n[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),s=new J),e[t++]=s.x,e[t++]=s.y}return this},copyVector3sArray:function(n){const e=this.array;let t=0;for(let i=0,r=n.length;i<r;i++){let s=n[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),s=new M),e[t++]=s.x,e[t++]=s.y,e[t++]=s.z}return this},copyVector4sArray:function(n){const e=this.array;let t=0;for(let i=0,r=n.length;i<r;i++){let s=n[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),s=new ke),e[t++]=s.x,e[t++]=s.y,e[t++]=s.z,e[t++]=s.w}return this},applyMatrix3:function(n){if(this.itemSize===2)for(let e=0,t=this.count;e<t;e++)tr.fromBufferAttribute(this,e),tr.applyMatrix3(n),this.setXY(e,tr.x,tr.y);else if(this.itemSize===3)for(let e=0,t=this.count;e<t;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix3(n),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this},applyMatrix4:function(n){for(let e=0,t=this.count;e<t;e++)Ge.x=this.getX(e),Ge.y=this.getY(e),Ge.z=this.getZ(e),Ge.applyMatrix4(n),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this},applyNormalMatrix:function(n){for(let e=0,t=this.count;e<t;e++)Ge.x=this.getX(e),Ge.y=this.getY(e),Ge.z=this.getZ(e),Ge.applyNormalMatrix(n),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this},transformDirection:function(n){for(let e=0,t=this.count;e<t;e++)Ge.x=this.getX(e),Ge.y=this.getY(e),Ge.z=this.getZ(e),Ge.transformDirection(n),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this},set:function(n,e=0){return this.array.set(n,e),this},getX:function(n){return this.array[n*this.itemSize]},setX:function(n,e){return this.array[n*this.itemSize]=e,this},getY:function(n){return this.array[n*this.itemSize+1]},setY:function(n,e){return this.array[n*this.itemSize+1]=e,this},getZ:function(n){return this.array[n*this.itemSize+2]},setZ:function(n,e){return this.array[n*this.itemSize+2]=e,this},getW:function(n){return this.array[n*this.itemSize+3]},setW:function(n,e){return this.array[n*this.itemSize+3]=e,this},setXY:function(n,e,t){return n*=this.itemSize,this.array[n+0]=e,this.array[n+1]=t,this},setXYZ:function(n,e,t,i){return n*=this.itemSize,this.array[n+0]=e,this.array[n+1]=t,this.array[n+2]=i,this},setXYZW:function(n,e,t,i,r){return n*=this.itemSize,this.array[n+0]=e,this.array[n+1]=t,this.array[n+2]=i,this.array[n+3]=r,this},onUpload:function(n){return this.onUploadCallback=n,this},clone:function(){return new this.constructor(this.array,this.itemSize).copy(this)},toJSON:function(){const n={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(n.name=this.name),this.usage!==Wi&&(n.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(n.updateRange=this.updateRange),n}});function Ns(n,e,t){Ae.call(this,new Int8Array(n),e,t)}Ns.prototype=Object.create(Ae.prototype);Ns.prototype.constructor=Ns;function Fs(n,e,t){Ae.call(this,new Uint8Array(n),e,t)}Fs.prototype=Object.create(Ae.prototype);Fs.prototype.constructor=Fs;function Os(n,e,t){Ae.call(this,new Uint8ClampedArray(n),e,t)}Os.prototype=Object.create(Ae.prototype);Os.prototype.constructor=Os;function Bs(n,e,t){Ae.call(this,new Int16Array(n),e,t)}Bs.prototype=Object.create(Ae.prototype);Bs.prototype.constructor=Bs;function Di(n,e,t){Ae.call(this,new Uint16Array(n),e,t)}Di.prototype=Object.create(Ae.prototype);Di.prototype.constructor=Di;function zs(n,e,t){Ae.call(this,new Int32Array(n),e,t)}zs.prototype=Object.create(Ae.prototype);zs.prototype.constructor=zs;function Ii(n,e,t){Ae.call(this,new Uint32Array(n),e,t)}Ii.prototype=Object.create(Ae.prototype);Ii.prototype.constructor=Ii;function Pr(n,e,t){Ae.call(this,new Uint16Array(n),e,t)}Pr.prototype=Object.create(Ae.prototype);Pr.prototype.constructor=Pr;Pr.prototype.isFloat16BufferAttribute=!0;function Xe(n,e,t){Ae.call(this,new Float32Array(n),e,t)}Xe.prototype=Object.create(Ae.prototype);Xe.prototype.constructor=Xe;function ks(n,e,t){Ae.call(this,new Float64Array(n),e,t)}ks.prototype=Object.create(Ae.prototype);ks.prototype.constructor=ks;function Rl(n){if(n.length===0)return-1/0;let e=n[0];for(let t=1,i=n.length;t<i;++t)n[t]>e&&(e=n[t]);return e}let bu=0;const Ot=new de,gs=new be,Pn=new M,yt=new Et,li=new Et,et=new M;function Be(){Object.defineProperty(this,"id",{value:bu++}),this.uuid=Me.generateUUID(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}Be.prototype=Object.assign(Object.create(Ut.prototype),{constructor:Be,isBufferGeometry:!0,getIndex:function(){return this.index},setIndex:function(n){return Array.isArray(n)?this.index=new(Rl(n)>65535?Ii:Di)(n,1):this.index=n,this},getAttribute:function(n){return this.attributes[n]},setAttribute:function(n,e){return this.attributes[n]=e,this},deleteAttribute:function(n){return delete this.attributes[n],this},hasAttribute:function(n){return this.attributes[n]!==void 0},addGroup:function(n,e,t=0){this.groups.push({start:n,count:e,materialIndex:t})},clearGroups:function(){this.groups=[]},setDrawRange:function(n,e){this.drawRange.start=n,this.drawRange.count=e},applyMatrix4:function(n){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(n),e.needsUpdate=!0);const t=this.attributes.normal;if(t!==void 0){const r=new st().getNormalMatrix(n);t.applyNormalMatrix(r),t.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(n),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this},rotateX:function(n){return Ot.makeRotationX(n),this.applyMatrix4(Ot),this},rotateY:function(n){return Ot.makeRotationY(n),this.applyMatrix4(Ot),this},rotateZ:function(n){return Ot.makeRotationZ(n),this.applyMatrix4(Ot),this},translate:function(n,e,t){return Ot.makeTranslation(n,e,t),this.applyMatrix4(Ot),this},scale:function(n,e,t){return Ot.makeScale(n,e,t),this.applyMatrix4(Ot),this},lookAt:function(n){return gs.lookAt(n),gs.updateMatrix(),this.applyMatrix4(gs.matrix),this},center:function(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pn).negate(),this.translate(Pn.x,Pn.y,Pn.z),this},setFromPoints:function(n){const e=[];for(let t=0,i=n.length;t<i;t++){const r=n[t];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Xe(e,3)),this},computeBoundingBox:function(){this.boundingBox===null&&(this.boundingBox=new Et);const n=this.attributes.position,e=this.morphAttributes.position;if(n&&n.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new M(-1/0,-1/0,-1/0),new M(1/0,1/0,1/0));return}if(n!==void 0){if(this.boundingBox.setFromBufferAttribute(n),e)for(let t=0,i=e.length;t<i;t++){const r=e[t];yt.setFromBufferAttribute(r),this.morphTargetsRelative?(et.addVectors(this.boundingBox.min,yt.min),this.boundingBox.expandByPoint(et),et.addVectors(this.boundingBox.max,yt.max),this.boundingBox.expandByPoint(et)):(this.boundingBox.expandByPoint(yt.min),this.boundingBox.expandByPoint(yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)},computeBoundingSphere:function(){this.boundingSphere===null&&(this.boundingSphere=new ei);const n=this.attributes.position,e=this.morphAttributes.position;if(n&&n.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new M,1/0);return}if(n){const t=this.boundingSphere.center;if(yt.setFromBufferAttribute(n),e)for(let r=0,s=e.length;r<s;r++){const o=e[r];li.setFromBufferAttribute(o),this.morphTargetsRelative?(et.addVectors(yt.min,li.min),yt.expandByPoint(et),et.addVectors(yt.max,li.max),yt.expandByPoint(et)):(yt.expandByPoint(li.min),yt.expandByPoint(li.max))}yt.getCenter(t);let i=0;for(let r=0,s=n.count;r<s;r++)et.fromBufferAttribute(n,r),i=Math.max(i,t.distanceToSquared(et));if(e)for(let r=0,s=e.length;r<s;r++){const o=e[r],a=this.morphTargetsRelative;for(let l=0,c=o.count;l<c;l++)et.fromBufferAttribute(o,l),a&&(Pn.fromBufferAttribute(n,l),et.add(Pn)),i=Math.max(i,t.distanceToSquared(et))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}},computeFaceNormals:function(){},computeTangents:function(){const n=this.index,e=this.attributes;if(n===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const t=n.array,i=e.position.array,r=e.normal.array,s=e.uv.array,o=i.length/3;e.tangent===void 0&&this.setAttribute("tangent",new Ae(new Float32Array(4*o),4));const a=e.tangent.array,l=[],c=[];for(let B=0;B<o;B++)l[B]=new M,c[B]=new M;const u=new M,h=new M,d=new M,f=new J,p=new J,_=new J,v=new M,g=new M;function m(B,q,P){u.fromArray(i,B*3),h.fromArray(i,q*3),d.fromArray(i,P*3),f.fromArray(s,B*2),p.fromArray(s,q*2),_.fromArray(s,P*2),h.sub(u),d.sub(u),p.sub(f),_.sub(f);const Z=1/(p.x*_.y-_.x*p.y);isFinite(Z)&&(v.copy(h).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(Z),g.copy(d).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(Z),l[B].add(v),l[q].add(v),l[P].add(v),c[B].add(g),c[q].add(g),c[P].add(g))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.length}]);for(let B=0,q=T.length;B<q;++B){const P=T[B],Z=P.start,R=P.count;for(let C=Z,I=Z+R;C<I;C+=3)m(t[C+0],t[C+1],t[C+2])}const E=new M,L=new M,y=new M,O=new M;function k(B){y.fromArray(r,B*3),O.copy(y);const q=l[B];E.copy(q),E.sub(y.multiplyScalar(y.dot(q))).normalize(),L.crossVectors(O,q);const Z=L.dot(c[B])<0?-1:1;a[B*4]=E.x,a[B*4+1]=E.y,a[B*4+2]=E.z,a[B*4+3]=Z}for(let B=0,q=T.length;B<q;++B){const P=T[B],Z=P.start,R=P.count;for(let C=Z,I=Z+R;C<I;C+=3)k(t[C+0]),k(t[C+1]),k(t[C+2])}},computeVertexNormals:function(){const n=this.index,e=this.getAttribute("position");if(e!==void 0){let t=this.getAttribute("normal");if(t===void 0)t=new Ae(new Float32Array(e.count*3),3),this.setAttribute("normal",t);else for(let h=0,d=t.count;h<d;h++)t.setXYZ(h,0,0,0);const i=new M,r=new M,s=new M,o=new M,a=new M,l=new M,c=new M,u=new M;if(n)for(let h=0,d=n.count;h<d;h+=3){const f=n.getX(h+0),p=n.getX(h+1),_=n.getX(h+2);i.fromBufferAttribute(e,f),r.fromBufferAttribute(e,p),s.fromBufferAttribute(e,_),c.subVectors(s,r),u.subVectors(i,r),c.cross(u),o.fromBufferAttribute(t,f),a.fromBufferAttribute(t,p),l.fromBufferAttribute(t,_),o.add(c),a.add(c),l.add(c),t.setXYZ(f,o.x,o.y,o.z),t.setXYZ(p,a.x,a.y,a.z),t.setXYZ(_,l.x,l.y,l.z)}else for(let h=0,d=e.count;h<d;h+=3)i.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),s.fromBufferAttribute(e,h+2),c.subVectors(s,r),u.subVectors(i,r),c.cross(u),t.setXYZ(h+0,c.x,c.y,c.z),t.setXYZ(h+1,c.x,c.y,c.z),t.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),t.needsUpdate=!0}},merge:function(n,e){if(!(n&&n.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",n);return}e===void 0&&(e=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const t=this.attributes;for(const i in t){if(n.attributes[i]===void 0)continue;const s=t[i].array,o=n.attributes[i],a=o.array,l=o.itemSize*e,c=Math.min(a.length,s.length-l);for(let u=0,h=l;u<c;u++,h++)s[h]=a[u]}return this},normalizeNormals:function(){const n=this.attributes.normal;for(let e=0,t=n.count;e<t;e++)et.fromBufferAttribute(n,e),et.normalize(),n.setXYZ(e,et.x,et.y,et.z)},toNonIndexed:function(){function n(o,a){const l=o.array,c=o.itemSize,u=o.normalized,h=new l.constructor(a.length*c);let d=0,f=0;for(let p=0,_=a.length;p<_;p++){d=a[p]*c;for(let v=0;v<c;v++)h[f++]=l[d++]}return new Ae(h,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Be,t=this.index.array,i=this.attributes;for(const o in i){const a=i[o],l=n(a,t);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const a=[],l=r[o];for(let c=0,u=l.length;c<u;c++){const h=l[c],d=n(h,t);a.push(d)}e.morphAttributes[o]=a}e.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,a=s.length;o<a;o++){const l=s[o];e.addGroup(l.start,l.count,l.materialIndex)}return e},toJSON:function(){const n={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),Object.keys(this.userData).length>0&&(n.userData=this.userData),this.parameters!==void 0){const a=this.parameters;for(const l in a)a[l]!==void 0&&(n[l]=a[l]);return n}n.data={attributes:{}};const e=this.index;e!==null&&(n.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const t=this.attributes;for(const a in t){const l=t[a];n.data.attributes[a]=l.toJSON(n.data)}const i={};let r=!1;for(const a in this.morphAttributes){const l=this.morphAttributes[a],c=[];for(let u=0,h=l.length;u<h;u++){const d=l[u];c.push(d.toJSON(n.data))}c.length>0&&(i[a]=c,r=!0)}r&&(n.data.morphAttributes=i,n.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(n.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(n.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),n},clone:function(){return new Be().copy(this)},copy:function(n){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=n.name;const t=n.index;t!==null&&this.setIndex(t.clone(e));const i=n.attributes;for(const l in i){const c=i[l];this.setAttribute(l,c.clone(e))}const r=n.morphAttributes;for(const l in r){const c=[],u=r[l];for(let h=0,d=u.length;h<d;h++)c.push(u[h].clone(e));this.morphAttributes[l]=c}this.morphTargetsRelative=n.morphTargetsRelative;const s=n.groups;for(let l=0,c=s.length;l<c;l++){const u=s[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=n.boundingBox;o!==null&&(this.boundingBox=o.clone());const a=n.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=n.drawRange.start,this.drawRange.count=n.drawRange.count,this.userData=n.userData,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});const ma=new de,Dn=new bn,_s=new ei,Kt=new M,en=new M,tn=new M,vs=new M,ys=new M,xs=new M,nr=new M,ir=new M,rr=new M,sr=new J,or=new J,ar=new J,bs=new M,lr=new M;function at(n=new Be,e=new po){be.call(this),this.type="Mesh",this.geometry=n,this.material=e,this.updateMorphTargets()}at.prototype=Object.assign(Object.create(be.prototype),{constructor:at,isMesh:!0,copy:function(n){return be.prototype.copy.call(this,n),n.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=n.morphTargetInfluences.slice()),n.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},n.morphTargetDictionary)),this.material=n.material,this.geometry=n.geometry,this},updateMorphTargets:function(){const n=this.geometry;if(n.isBufferGeometry){const e=n.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const e=n.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}},raycast:function(n,e){const t=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(t.boundingSphere===null&&t.computeBoundingSphere(),_s.copy(t.boundingSphere),_s.applyMatrix4(r),n.ray.intersectsSphere(_s)===!1)||(ma.copy(r).invert(),Dn.copy(n.ray).applyMatrix4(ma),t.boundingBox!==null&&Dn.intersectsBox(t.boundingBox)===!1))return;let s;if(t.isBufferGeometry){const o=t.index,a=t.attributes.position,l=t.morphAttributes.position,c=t.morphTargetsRelative,u=t.attributes.uv,h=t.attributes.uv2,d=t.groups,f=t.drawRange;if(o!==null)if(Array.isArray(i))for(let p=0,_=d.length;p<_;p++){const v=d[p],g=i[v.materialIndex],m=Math.max(v.start,f.start),T=Math.min(v.start+v.count,f.start+f.count);for(let E=m,L=T;E<L;E+=3){const y=o.getX(E),O=o.getX(E+1),k=o.getX(E+2);s=cr(this,g,n,Dn,a,l,c,u,h,y,O,k),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=v.materialIndex,e.push(s))}}else{const p=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let v=p,g=_;v<g;v+=3){const m=o.getX(v),T=o.getX(v+1),E=o.getX(v+2);s=cr(this,i,n,Dn,a,l,c,u,h,m,T,E),s&&(s.faceIndex=Math.floor(v/3),e.push(s))}}else if(a!==void 0)if(Array.isArray(i))for(let p=0,_=d.length;p<_;p++){const v=d[p],g=i[v.materialIndex],m=Math.max(v.start,f.start),T=Math.min(v.start+v.count,f.start+f.count);for(let E=m,L=T;E<L;E+=3){const y=E,O=E+1,k=E+2;s=cr(this,g,n,Dn,a,l,c,u,h,y,O,k),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=v.materialIndex,e.push(s))}}else{const p=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let v=p,g=_;v<g;v+=3){const m=v,T=v+1,E=v+2;s=cr(this,i,n,Dn,a,l,c,u,h,m,T,E),s&&(s.faceIndex=Math.floor(v/3),e.push(s))}}}else t.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}});function wu(n,e,t,i,r,s,o,a){let l;if(e.side===tt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side!==Gi,a),l===null)return null;lr.copy(a),lr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(lr);return c<t.near||c>t.far?null:{distance:c,point:lr.clone(),object:n}}function cr(n,e,t,i,r,s,o,a,l,c,u,h){Kt.fromBufferAttribute(r,c),en.fromBufferAttribute(r,u),tn.fromBufferAttribute(r,h);const d=n.morphTargetInfluences;if(e.morphTargets&&s&&d){nr.set(0,0,0),ir.set(0,0,0),rr.set(0,0,0);for(let p=0,_=s.length;p<_;p++){const v=d[p],g=s[p];v!==0&&(vs.fromBufferAttribute(g,c),ys.fromBufferAttribute(g,u),xs.fromBufferAttribute(g,h),o?(nr.addScaledVector(vs,v),ir.addScaledVector(ys,v),rr.addScaledVector(xs,v)):(nr.addScaledVector(vs.sub(Kt),v),ir.addScaledVector(ys.sub(en),v),rr.addScaledVector(xs.sub(tn),v)))}Kt.add(nr),en.add(ir),tn.add(rr)}n.isSkinnedMesh&&e.skinning&&(n.boneTransform(c,Kt),n.boneTransform(u,en),n.boneTransform(h,tn));const f=wu(n,e,t,i,Kt,en,tn,bs);if(f){a&&(sr.fromBufferAttribute(a,c),or.fromBufferAttribute(a,u),ar.fromBufferAttribute(a,h),f.uv=$e.getUV(bs,Kt,en,tn,sr,or,ar,new J)),l&&(sr.fromBufferAttribute(l,c),or.fromBufferAttribute(l,u),ar.fromBufferAttribute(l,h),f.uv2=$e.getUV(bs,Kt,en,tn,sr,or,ar,new J));const p={a:c,b:u,c:h,normal:new M,materialIndex:0};$e.getNormal(Kt,en,tn,p.normal),f.face=p}return f}class mo extends Be{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;p("z","y","x",-1,-1,i,t,e,o,s,0),p("z","y","x",1,-1,i,t,-e,o,s,1),p("x","z","y",1,1,e,i,t,r,o,2),p("x","z","y",1,-1,e,i,-t,r,o,3),p("x","y","z",1,-1,e,t,i,r,s,4),p("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Xe(c,3)),this.setAttribute("normal",new Xe(u,3)),this.setAttribute("uv",new Xe(h,2));function p(_,v,g,m,T,E,L,y,O,k,B){const q=E/O,P=L/k,Z=E/2,R=L/2,C=y/2,I=O+1,D=k+1;let Y=0,ee=0;const Q=new M;for(let ae=0;ae<D;ae++){const le=ae*P-R;for(let me=0;me<I;me++){const ve=me*q-Z;Q[_]=ve*m,Q[v]=le*T,Q[g]=C,c.push(Q.x,Q.y,Q.z),Q[_]=0,Q[v]=0,Q[g]=y>0?1:-1,u.push(Q.x,Q.y,Q.z),h.push(me/O),h.push(1-ae/k),Y+=1}}for(let ae=0;ae<k;ae++)for(let le=0;le<O;le++){const me=d+le+I*ae,ve=d+le+I*(ae+1),G=d+(le+1)+I*(ae+1),De=d+(le+1)+I*ae;l.push(me,ve,De),l.push(ve,G,De),ee+=6}a.addGroup(f,ee,B),f+=ee,d+=Y}}}function Yn(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function ct(n){const e={};for(let t=0;t<n.length;t++){const i=Yn(n[t]);for(const r in i)e[r]=i[r]}return e}const Mu={clone:Yn,merge:ct};var Su=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Eu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;function St(n){Ye.call(this),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Su,this.fragmentShader=Eu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,n!==void 0&&(n.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(n))}St.prototype=Object.create(Ye.prototype);St.prototype.constructor=St;St.prototype.isShaderMaterial=!0;St.prototype.copy=function(n){return Ye.prototype.copy.call(this,n),this.fragmentShader=n.fragmentShader,this.vertexShader=n.vertexShader,this.uniforms=Yn(n.uniforms),this.defines=Object.assign({},n.defines),this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this.lights=n.lights,this.clipping=n.clipping,this.skinning=n.skinning,this.morphTargets=n.morphTargets,this.morphNormals=n.morphNormals,this.extensions=Object.assign({},n.extensions),this.glslVersion=n.glslVersion,this};St.prototype.toJSON=function(n){const e=Ye.prototype.toJSON.call(this,n);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?e.uniforms[i]={type:"t",value:s.toJSON(n).uuid}:s&&s.isColor?e.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?e.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?e.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?e.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?e.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?e.uniforms[i]={type:"m4",value:s.toArray()}:e.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const t={};for(const i in this.extensions)this.extensions[i]===!0&&(t[i]=!0);return Object.keys(t).length>0&&(e.extensions=t),e};function Zn(){be.call(this),this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de}Zn.prototype=Object.assign(Object.create(be.prototype),{constructor:Zn,isCamera:!0,copy:function(n,e){return be.prototype.copy.call(this,n,e),this.matrixWorldInverse.copy(n.matrixWorldInverse),this.projectionMatrix.copy(n.projectionMatrix),this.projectionMatrixInverse.copy(n.projectionMatrixInverse),this},getWorldDirection:function(n){n===void 0&&(console.warn("THREE.Camera: .getWorldDirection() target is now required"),n=new M),this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return n.set(-e[8],-e[9],-e[10]).normalize()},updateMatrixWorld:function(n){be.prototype.updateMatrixWorld.call(this,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()},updateWorldMatrix:function(n,e){be.prototype.updateWorldMatrix.call(this,n,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()},clone:function(){return new this.constructor().copy(this)}});function ft(n=50,e=1,t=.1,i=2e3){Zn.call(this),this.type="PerspectiveCamera",this.fov=n,this.zoom=1,this.near=t,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}ft.prototype=Object.assign(Object.create(Zn.prototype),{constructor:ft,isPerspectiveCamera:!0,copy:function(n,e){return Zn.prototype.copy.call(this,n,e),this.fov=n.fov,this.zoom=n.zoom,this.near=n.near,this.far=n.far,this.focus=n.focus,this.aspect=n.aspect,this.view=n.view===null?null:Object.assign({},n.view),this.filmGauge=n.filmGauge,this.filmOffset=n.filmOffset,this},setFocalLength:function(n){const e=.5*this.getFilmHeight()/n;this.fov=Me.RAD2DEG*2*Math.atan(e),this.updateProjectionMatrix()},getFocalLength:function(){const n=Math.tan(Me.DEG2RAD*.5*this.fov);return .5*this.getFilmHeight()/n},getEffectiveFOV:function(){return Me.RAD2DEG*2*Math.atan(Math.tan(Me.DEG2RAD*.5*this.fov)/this.zoom)},getFilmWidth:function(){return this.filmGauge*Math.min(this.aspect,1)},getFilmHeight:function(){return this.filmGauge/Math.max(this.aspect,1)},setViewOffset:function(n,e,t,i,r,s){this.aspect=n/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=n,this.view.fullHeight=e,this.view.offsetX=t,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()},clearViewOffset:function(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){const n=this.near;let e=n*Math.tan(Me.DEG2RAD*.5*this.fov)/this.zoom,t=2*e,i=this.aspect*t,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const a=s.fullWidth,l=s.fullHeight;r+=s.offsetX*i/a,e-=s.offsetY*t/l,i*=s.width/a,t*=s.height/l}const o=this.filmOffset;o!==0&&(r+=n*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-t,n,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()},toJSON:function(n){const e=be.prototype.toJSON.call(this,n);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}});const In=90,Nn=1;class go extends be{constructor(e,t,i){if(super(),this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;const r=new ft(In,Nn,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new M(1,0,0)),this.add(r);const s=new ft(In,Nn,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new M(-1,0,0)),this.add(s);const o=new ft(In,Nn,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new M(0,1,0)),this.add(o);const a=new ft(In,Nn,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new M(0,-1,0)),this.add(a);const l=new ft(In,Nn,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new M(0,0,1)),this.add(l);const c=new ft(In,Nn,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new M(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,c]=this.children,u=e.xr.enabled,h=e.getRenderTarget();e.xr.enabled=!1;const d=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=d,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(h),e.xr.enabled=u}}class Vr extends lt{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:oo,a=a!==void 0?a:vn,super(e,t,i,r,s,o,a,l,c,u),this._needsFlipEnvMap=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}Vr.prototype.isCubeTexture=!0;class Pl extends yn{constructor(e,t,i){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=i),super(e,e,t),t=t||{},this.texture=new Vr(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:rt,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=Pt,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new mo(5,5,5),s=new St({name:"CubemapFromEquirect",uniforms:Yn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:tt,blending:bi});s.uniforms.tEquirect.value=t;const o=new at(r,s),a=t.minFilter;return t.minFilter===Gr&&(t.minFilter=rt),new go(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}Pl.prototype.isWebGLCubeRenderTarget=!0;class _o extends lt{constructor(e,t,i,r,s,o,a,l,c,u,h,d){super(null,o,a,l,c,u,r,s,h,d),this.image={data:e||null,width:t||1,height:i||1},this.magFilter=c!==void 0?c:pt,this.minFilter=u!==void 0?u:pt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}_o.prototype.isDataTexture=!0;const Fn=new ei,hr=new M;class Wr{constructor(e=new zt,t=new zt,i=new zt,r=new zt,s=new zt,o=new zt){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],c=i[5],u=i[6],h=i[7],d=i[8],f=i[9],p=i[10],_=i[11],v=i[12],g=i[13],m=i[14],T=i[15];return t[0].setComponents(a-r,h-l,_-d,T-v).normalize(),t[1].setComponents(a+r,h+l,_+d,T+v).normalize(),t[2].setComponents(a+s,h+c,_+f,T+g).normalize(),t[3].setComponents(a-s,h-c,_-f,T-g).normalize(),t[4].setComponents(a-o,h-u,_-p,T-m).normalize(),t[5].setComponents(a+o,h+u,_+p,T+m).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Fn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Fn)}intersectsSprite(e){return Fn.center.set(0,0,0),Fn.radius=.7071067811865476,Fn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fn)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(hr.x=r.normal.x>0?e.max.x:e.min.x,hr.y=r.normal.y>0?e.max.y:e.min.y,hr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(hr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Dl(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Tu(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const h=c.array,d=c.usage,f=n.createBuffer();n.bindBuffer(u,f),n.bufferData(u,h,d),c.onUploadCallback();let p=5126;return h instanceof Float32Array?p=5126:h instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):h instanceof Uint16Array?c.isFloat16BufferAttribute?t?p=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):p=5123:h instanceof Int16Array?p=5122:h instanceof Uint32Array?p=5125:h instanceof Int32Array?p=5124:h instanceof Int8Array?p=5120:h instanceof Uint8Array&&(p=5121),{buffer:f,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const d=u.array,f=u.updateRange;n.bindBuffer(h,c),f.count===-1?n.bufferSubData(h,0,d):(t?n.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):n.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h===void 0?i.set(c,r(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class Il extends Be{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,d=t/l,f=[],p=[],_=[],v=[];for(let g=0;g<u;g++){const m=g*d-o;for(let T=0;T<c;T++){const E=T*h-s;p.push(E,-m,0),_.push(0,0,1),v.push(T/a),v.push(1-g/l)}}for(let g=0;g<l;g++)for(let m=0;m<a;m++){const T=m+c*g,E=m+c*(g+1),L=m+1+c*(g+1),y=m+1+c*g;f.push(T,E,y),f.push(E,L,y)}this.setIndex(f),this.setAttribute("position",new Xe(p,3)),this.setAttribute("normal",new Xe(_,3)),this.setAttribute("uv",new Xe(v,2))}}var Au=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Lu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cu=`#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif`,Ru=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif`,Pu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Du="vec3 transformed = vec3( position );",Iu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nu=`vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	return vec2( -1.04, 1.04 ) * a004 + r.zw;
}
float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
#if defined ( PHYSICALLY_CORRECT_LIGHTS )
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
#else
	if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );
	}
	return 1.0;
#endif
}
vec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {
	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );
	return ( 1.0 - specularColor ) * fresnel + specularColor;
}
vec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {
	float fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );
	vec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;
	return Fr * fresnel + F0;
}
float G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	return 1.0 / ( gl * gv );
}
float G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( incidentLight.direction + viewDir );
	float dotNL = saturate( dot( normal, incidentLight.direction ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( G * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
vec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	return specularColor * brdf.x + brdf.y;
}
void BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	vec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	vec3 FssEss = F * brdf.x + brdf.y;
	float Ess = brdf.x + brdf.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {
	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );
}
float BlinnExponentToGGXRoughness( const in float blinnExponent ) {
	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );
}
#if defined( USE_SHEEN )
float D_Charlie(float roughness, float NoH) {
	float invAlpha = 1.0 / roughness;
	float cos2h = NoH * NoH;
	float sin2h = max(1.0 - cos2h, 0.0078125);	return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);
}
float V_Neubelt(float NoV, float NoL) {
	return saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));
}
vec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {
	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;
	vec3 H = normalize( V + L );
	float dotNH = saturate( dot( N, H ) );
	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );
}
#endif`,Fu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ou=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Bu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ku=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Uu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Vu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Wu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement(a) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract(sin(sn) * c);
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	float distance = dot( planeNormal, point - pointOnPlane );
	return - distance * planeNormal + point;
}
float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return sign( dot( point - pointOnPlane, planeNormal ) );
}
vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,ju=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Xu=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,qu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Zu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ju=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$u="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qu=`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,Ku=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifndef ENVMAP_TYPE_CUBE_UV
		envColor = envMapTexelToLinear( envColor );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ed=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,td=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,nd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,id=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,rd=`#ifdef USE_FOG
	fogDepth = - mvPosition.z;
#endif`,sd=`#ifdef USE_FOG
	varying float fogDepth;
#endif`,od=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ad=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float fogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ld=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,cd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
#endif`,hd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ud=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );
		#endif
	}
	#pragma unroll_loop_end
#endif`,dd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {
	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	return irradiance;
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		directLight.color = directionalLight.color;
		directLight.direction = directionalLight.direction;
		directLight.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = pointLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		directLight.color = pointLight.color;
		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
		directLight.visible = ( directLight.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = spotLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		float angleCos = dot( directLight.direction, spotLight.direction );
		if ( angleCos > spotLight.coneCos ) {
			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );
			directLight.color = spotLight.color;
			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
			directLight.visible = true;
		} else {
			directLight.color = vec3( 0.0 );
			directLight.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {
		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			irradiance *= PI;
		#endif
		return irradiance;
	}
#endif`,fd=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {
		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );
			#else
				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
		#else
			vec4 envMapColor = vec4( 0.0 );
		#endif
		return PI * envMapColor.rgb * envMapIntensity;
	}
	float getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {
		float maxMIPLevelScalar = float( maxMIPLevel );
		float sigma = PI * roughness * roughness / ( 1.0 + roughness );
		float desiredMIPLevel = maxMIPLevelScalar + log2( sigma );
		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );
	}
	vec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( -viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
		#else
			vec3 reflectVec = refract( -viewDir, normal, refractionRatio );
		#endif
		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
		float specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );
			#else
				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
		#endif
		return envMapColor.rgb * envMapIntensity;
	}
#endif`,pd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,md=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,gd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_d=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,vd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;
material.specularRoughness = min( material.specularRoughness, 1.0 );
#ifdef REFLECTIVITY
	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );
#endif
#ifdef CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheen;
#endif`,yd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float specularRoughness;
	vec3 specularColor;
#ifdef CLEARCOAT
	float clearcoat;
	float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	vec3 sheenColor;
#endif
};
#define MAXIMUM_SPECULAR_COEFFICIENT 0.16
#define DEFAULT_SPECULAR_COEFFICIENT 0.04
float clearcoatDHRApprox( const in float roughness, const in float dotNL ) {
	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.specularRoughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	#ifdef CLEARCOAT
		float ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = ccDotNL * directLight.color;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			ccIrradiance *= PI;
		#endif
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
		reflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
	#else
		float clearcoatDHR = 0.0;
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(
			material.specularRoughness,
			directLight.direction,
			geometry,
			material.sheenColor
		);
	#else
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);
	#endif
	reflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef CLEARCOAT
		float ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		reflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
		float ccDotNL = ccDotNV;
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
	#else
		float clearcoatDHR = 0.0;
	#endif
	float clearcoatInv = 1.0 - clearcoatDHR;
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	BRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xd=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointDirectLightIrradiance( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotDirectLightIrradiance( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );
	#ifdef CLEARCOAT
		clearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );
	#endif
#endif`,wd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Md=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ed=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Td=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ad=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,Ld=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Rd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Id=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`,Nd=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
		uniform float morphTargetInfluences[ 8 ];
	#else
		uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`,Fd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	transformed += morphTarget0 * morphTargetInfluences[ 0 ];
	transformed += morphTarget1 * morphTargetInfluences[ 1 ];
	transformed += morphTarget2 * morphTargetInfluences[ 2 ];
	transformed += morphTarget3 * morphTargetInfluences[ 3 ];
	#ifndef USE_MORPHNORMALS
		transformed += morphTarget4 * morphTargetInfluences[ 4 ];
		transformed += morphTarget5 * morphTargetInfluences[ 5 ];
		transformed += morphTarget6 * morphTargetInfluences[ 6 ];
		transformed += morphTarget7 * morphTargetInfluences[ 7 ];
	#endif
#endif`,Od=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Bd=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( -vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,zd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,kd=`#ifdef CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Hd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Ud=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Gd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Vd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zd=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Jd=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$d=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Qd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Kd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ef=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,tf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,rf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,of=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,af=`#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,lf=`#ifdef USE_TRANSMISSIONMAP
	totalTransmission *= texture2D( transmissionMap, vUv ).r;
#endif`,cf=`#ifdef USE_TRANSMISSIONMAP
	uniform sampler2D transmissionMap;
#endif`,hf=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,uf=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,df=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,ff=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,pf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,mf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,gf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,_f=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,vf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yf=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,xf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,wf=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Mf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Sf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ef=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Tf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Af=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
	
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rf=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <skinbase_vertex>
	#ifdef USE_ENVMAP
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Pf=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Df=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,If=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nf=`#define MATCAP
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#ifndef FLAT_SHADED
		vNormal = normalize( transformedNormal );
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ff=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Of=`#define TOON
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zf=`#define PHONG
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kf=`#define STANDARD
#ifdef PHYSICAL
	#define REFLECTIVITY
	#define CLEARCOAT
	#define TRANSMISSION
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef TRANSMISSION
	uniform float transmission;
#endif
#ifdef REFLECTIVITY
	uniform float reflectivity;
#endif
#ifdef CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#ifdef TRANSMISSION
		float totalTransmission = transmission;
	#endif
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <transmissionmap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#ifdef TRANSMISSION
		diffuseColor.a *= mix( saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) ), 1.0, metalness );
	#endif
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hf=`#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Uf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <packing>
#include <uv_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,Gf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Vf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Xf=`#include <common>
#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Yf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`;const Le={alphamap_fragment:Au,alphamap_pars_fragment:Lu,alphatest_fragment:Cu,aomap_fragment:Ru,aomap_pars_fragment:Pu,begin_vertex:Du,beginnormal_vertex:Iu,bsdfs:Nu,bumpmap_pars_fragment:Fu,clipping_planes_fragment:Ou,clipping_planes_pars_fragment:Bu,clipping_planes_pars_vertex:zu,clipping_planes_vertex:ku,color_fragment:Hu,color_pars_fragment:Uu,color_pars_vertex:Gu,color_vertex:Vu,common:Wu,cube_uv_reflection_fragment:ju,defaultnormal_vertex:Xu,displacementmap_pars_vertex:qu,displacementmap_vertex:Yu,emissivemap_fragment:Zu,emissivemap_pars_fragment:Ju,encodings_fragment:$u,encodings_pars_fragment:Qu,envmap_fragment:Ku,envmap_common_pars_fragment:ed,envmap_pars_fragment:td,envmap_pars_vertex:nd,envmap_physical_pars_fragment:fd,envmap_vertex:id,fog_vertex:rd,fog_pars_vertex:sd,fog_fragment:od,fog_pars_fragment:ad,gradientmap_pars_fragment:ld,lightmap_fragment:cd,lightmap_pars_fragment:hd,lights_lambert_vertex:ud,lights_pars_begin:dd,lights_toon_fragment:pd,lights_toon_pars_fragment:md,lights_phong_fragment:gd,lights_phong_pars_fragment:_d,lights_physical_fragment:vd,lights_physical_pars_fragment:yd,lights_fragment_begin:xd,lights_fragment_maps:bd,lights_fragment_end:wd,logdepthbuf_fragment:Md,logdepthbuf_pars_fragment:Sd,logdepthbuf_pars_vertex:Ed,logdepthbuf_vertex:Td,map_fragment:Ad,map_pars_fragment:Ld,map_particle_fragment:Cd,map_particle_pars_fragment:Rd,metalnessmap_fragment:Pd,metalnessmap_pars_fragment:Dd,morphnormal_vertex:Id,morphtarget_pars_vertex:Nd,morphtarget_vertex:Fd,normal_fragment_begin:Od,normal_fragment_maps:Bd,normalmap_pars_fragment:zd,clearcoat_normal_fragment_begin:kd,clearcoat_normal_fragment_maps:Hd,clearcoat_pars_fragment:Ud,packing:Gd,premultiplied_alpha_fragment:Vd,project_vertex:Wd,dithering_fragment:jd,dithering_pars_fragment:Xd,roughnessmap_fragment:qd,roughnessmap_pars_fragment:Yd,shadowmap_pars_fragment:Zd,shadowmap_pars_vertex:Jd,shadowmap_vertex:$d,shadowmask_pars_fragment:Qd,skinbase_vertex:Kd,skinning_pars_vertex:ef,skinning_vertex:tf,skinnormal_vertex:nf,specularmap_fragment:rf,specularmap_pars_fragment:sf,tonemapping_fragment:of,tonemapping_pars_fragment:af,transmissionmap_fragment:lf,transmissionmap_pars_fragment:cf,uv_pars_fragment:hf,uv_pars_vertex:uf,uv_vertex:df,uv2_pars_fragment:ff,uv2_pars_vertex:pf,uv2_vertex:mf,worldpos_vertex:gf,background_frag:_f,background_vert:vf,cube_frag:yf,cube_vert:xf,depth_frag:bf,depth_vert:wf,distanceRGBA_frag:Mf,distanceRGBA_vert:Sf,equirect_frag:Ef,equirect_vert:Tf,linedashed_frag:Af,linedashed_vert:Lf,meshbasic_frag:Cf,meshbasic_vert:Rf,meshlambert_frag:Pf,meshlambert_vert:Df,meshmatcap_frag:If,meshmatcap_vert:Nf,meshtoon_frag:Ff,meshtoon_vert:Of,meshphong_frag:Bf,meshphong_vert:zf,meshphysical_frag:kf,meshphysical_vert:Hf,normal_frag:Uf,normal_vert:Gf,points_frag:Vf,points_vert:Wf,shadow_frag:jf,shadow_vert:Xf,sprite_frag:qf,sprite_vert:Yf},ne={common:{diffuse:{value:new fe(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new st},uv2Transform:{value:new st},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new J(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new fe(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new st}},sprite:{diffuse:{value:new fe(15658734)},opacity:{value:1},center:{value:new J(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},uvTransform:{value:new st}}},kt={basic:{uniforms:ct([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:ct([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.fog,ne.lights,{emissive:{value:new fe(0)}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:ct([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:ct([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:ct([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new fe(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:ct([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:ct([ne.points,ne.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:ct([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:ct([ne.common,ne.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:ct([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Le.normal_vert,fragmentShader:Le.normal_frag},sprite:{uniforms:ct([ne.sprite,ne.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},cube:{uniforms:ct([ne.envmap,{opacity:{value:1}}]),vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distanceRGBA:{uniforms:ct([ne.common,ne.displacementmap,{referencePosition:{value:new M},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distanceRGBA_vert,fragmentShader:Le.distanceRGBA_frag},shadow:{uniforms:ct([ne.lights,ne.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};kt.physical={uniforms:ct([kt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new J(1,1)},clearcoatNormalMap:{value:null},sheen:{value:new fe(0)},transmission:{value:0},transmissionMap:{value:null}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};function Zf(n,e,t,i,r){const s=new fe(0);let o=0,a,l,c=null,u=0,h=null;function d(p,_,v,g){let m=_.isScene===!0?_.background:null;m&&m.isTexture&&(m=e.get(m));const T=n.xr,E=T.getSession&&T.getSession();E&&E.environmentBlendMode==="additive"&&(m=null),m===null?f(s,o):m&&m.isColor&&(f(m,1),g=!0),(n.autoClear||g)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),m&&(m.isCubeTexture||m.mapping===lo)?(l===void 0&&(l=new at(new mo(1,1,1),new St({name:"BackgroundCubeMaterial",uniforms:Yn(kt.cube.uniforms),vertexShader:kt.cube.vertexShader,fragmentShader:kt.cube.fragmentShader,side:tt,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(L,y,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=m,l.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m._needsFlipEnvMap?-1:1,(c!==m||u!==m.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,c=m,u=m.version,h=n.toneMapping),p.unshift(l,l.geometry,l.material,0,0,null)):m&&m.isTexture&&(a===void 0&&(a=new at(new Il(2,2),new St({name:"BackgroundMaterial",uniforms:Yn(kt.background.uniforms),vertexShader:kt.background.vertexShader,fragmentShader:kt.background.fragmentShader,side:Hr,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(a)),a.material.uniforms.t2D.value=m,m.matrixAutoUpdate===!0&&m.updateMatrix(),a.material.uniforms.uvTransform.value.copy(m.matrix),(c!==m||u!==m.version||h!==n.toneMapping)&&(a.material.needsUpdate=!0,c=m,u=m.version,h=n.toneMapping),p.unshift(a,a.geometry,a.material,0,0,null))}function f(p,_){t.buffers.color.setClear(p.r,p.g,p.b,_,r)}return{getClearColor:function(){return s},setClearColor:function(p,_=1){s.set(p),o=_,f(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(p){o=p,f(s,o)},render:d}}function Jf(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=_(null);let c=l;function u(R,C,I,D,Y){let ee=!1;if(o){const Q=p(D,I,C);c!==Q&&(c=Q,d(c.object)),ee=v(D,Y),ee&&g(D,Y)}else{const Q=C.wireframe===!0;(c.geometry!==D.id||c.program!==I.id||c.wireframe!==Q)&&(c.geometry=D.id,c.program=I.id,c.wireframe=Q,ee=!0)}R.isInstancedMesh===!0&&(ee=!0),Y!==null&&t.update(Y,34963),ee&&(O(R,C,I,D),Y!==null&&n.bindBuffer(34963,t.get(Y).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function d(R){return i.isWebGL2?n.bindVertexArray(R):s.bindVertexArrayOES(R)}function f(R){return i.isWebGL2?n.deleteVertexArray(R):s.deleteVertexArrayOES(R)}function p(R,C,I){const D=I.wireframe===!0;let Y=a[R.id];Y===void 0&&(Y={},a[R.id]=Y);let ee=Y[C.id];ee===void 0&&(ee={},Y[C.id]=ee);let Q=ee[D];return Q===void 0&&(Q=_(h()),ee[D]=Q),Q}function _(R){const C=[],I=[],D=[];for(let Y=0;Y<r;Y++)C[Y]=0,I[Y]=0,D[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:I,attributeDivisors:D,object:R,attributes:{},index:null}}function v(R,C){const I=c.attributes,D=R.attributes;let Y=0;for(const ee in D){const Q=I[ee],ae=D[ee];if(Q===void 0||Q.attribute!==ae||Q.data!==ae.data)return!0;Y++}return c.attributesNum!==Y||c.index!==C}function g(R,C){const I={},D=R.attributes;let Y=0;for(const ee in D){const Q=D[ee],ae={};ae.attribute=Q,Q.data&&(ae.data=Q.data),I[ee]=ae,Y++}c.attributes=I,c.attributesNum=Y,c.index=C}function m(){const R=c.newAttributes;for(let C=0,I=R.length;C<I;C++)R[C]=0}function T(R){E(R,0)}function E(R,C){const I=c.newAttributes,D=c.enabledAttributes,Y=c.attributeDivisors;I[R]=1,D[R]===0&&(n.enableVertexAttribArray(R),D[R]=1),Y[R]!==C&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,C),Y[R]=C)}function L(){const R=c.newAttributes,C=c.enabledAttributes;for(let I=0,D=C.length;I<D;I++)C[I]!==R[I]&&(n.disableVertexAttribArray(I),C[I]=0)}function y(R,C,I,D,Y,ee){i.isWebGL2===!0&&(I===5124||I===5125)?n.vertexAttribIPointer(R,C,I,Y,ee):n.vertexAttribPointer(R,C,I,D,Y,ee)}function O(R,C,I,D){if(i.isWebGL2===!1&&(R.isInstancedMesh||D.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();const Y=D.attributes,ee=I.getAttributes(),Q=C.defaultAttributeValues;for(const ae in ee){const le=ee[ae];if(le>=0){const me=Y[ae];if(me!==void 0){const ve=me.normalized,G=me.itemSize,De=t.get(me);if(De===void 0)continue;const Re=De.buffer,_e=De.type,pe=De.bytesPerElement;if(me.isInterleavedBufferAttribute){const Ie=me.data,Se=Ie.stride,Te=me.offset;Ie&&Ie.isInstancedInterleavedBuffer?(E(le,Ie.meshPerAttribute),D._maxInstanceCount===void 0&&(D._maxInstanceCount=Ie.meshPerAttribute*Ie.count)):T(le),n.bindBuffer(34962,Re),y(le,G,_e,ve,Se*pe,Te*pe)}else me.isInstancedBufferAttribute?(E(le,me.meshPerAttribute),D._maxInstanceCount===void 0&&(D._maxInstanceCount=me.meshPerAttribute*me.count)):T(le),n.bindBuffer(34962,Re),y(le,G,_e,ve,0,0)}else if(ae==="instanceMatrix"){const ve=t.get(R.instanceMatrix);if(ve===void 0)continue;const G=ve.buffer,De=ve.type;E(le+0,1),E(le+1,1),E(le+2,1),E(le+3,1),n.bindBuffer(34962,G),n.vertexAttribPointer(le+0,4,De,!1,64,0),n.vertexAttribPointer(le+1,4,De,!1,64,16),n.vertexAttribPointer(le+2,4,De,!1,64,32),n.vertexAttribPointer(le+3,4,De,!1,64,48)}else if(ae==="instanceColor"){const ve=t.get(R.instanceColor);if(ve===void 0)continue;const G=ve.buffer,De=ve.type;E(le,1),n.bindBuffer(34962,G),n.vertexAttribPointer(le,3,De,!1,12,0)}else if(Q!==void 0){const ve=Q[ae];if(ve!==void 0)switch(ve.length){case 2:n.vertexAttrib2fv(le,ve);break;case 3:n.vertexAttrib3fv(le,ve);break;case 4:n.vertexAttrib4fv(le,ve);break;default:n.vertexAttrib1fv(le,ve)}}}}L()}function k(){P();for(const R in a){const C=a[R];for(const I in C){const D=C[I];for(const Y in D)f(D[Y].object),delete D[Y];delete C[I]}delete a[R]}}function B(R){if(a[R.id]===void 0)return;const C=a[R.id];for(const I in C){const D=C[I];for(const Y in D)f(D[Y].object),delete D[Y];delete C[I]}delete a[R.id]}function q(R){for(const C in a){const I=a[C];if(I[R.id]===void 0)continue;const D=I[R.id];for(const Y in D)f(D[Y].object),delete D[Y];delete I[R.id]}}function P(){Z(),c!==l&&(c=l,d(c.object))}function Z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:P,resetDefaultState:Z,dispose:k,releaseStatesOfGeometry:B,releaseStatesOfProgram:q,initAttributes:m,enableAttribute:T,disableUnusedAttributes:L}}function $f(n,e,t,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let d,f;if(r)d=n,f="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](s,c,u,h),t.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=l}function Qf(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const y=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(y){if(y==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";y="mediump"}return y==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&n instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=t.logarithmicDepthBuffer===!0,u=n.getParameter(34930),h=n.getParameter(35660),d=n.getParameter(3379),f=n.getParameter(34076),p=n.getParameter(34921),_=n.getParameter(36347),v=n.getParameter(36348),g=n.getParameter(36349),m=h>0,T=o||e.has("OES_texture_float"),E=m&&T,L=o?n.getParameter(36183):0;return{isWebGL2:o,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:u,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:g,vertexTextures:m,floatFragmentTextures:T,floatVertexTextures:E,maxSamples:L}}function Kf(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new zt,a=new st,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d,f){const p=h.length!==0||d||i!==0||r;return r=d,t=u(h,f,0),i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(h,d,f){const p=h.clippingPlanes,_=h.clipIntersection,v=h.clipShadows,g=n.get(h);if(!r||p===null||p.length===0||s&&!v)s?u(null):c();else{const m=s?0:i,T=m*4;let E=g.clippingState||null;l.value=E,E=u(p,d,T,f);for(let L=0;L!==T;++L)E[L]=t[L];g.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,p){const _=h!==null?h.length:0;let v=null;if(_!==0){if(v=l.value,p!==!0||v===null){const g=f+_*4,m=d.matrixWorldInverse;a.getNormalMatrix(m),(v===null||v.length<g)&&(v=new Float32Array(g));for(let T=0,E=f;T!==_;++T,E+=4)o.copy(h[T]).applyMatrix4(m,a),o.normal.toArray(v,E),v[E+3]=o.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,v}}function ep(n){let e=new WeakMap;function t(o,a){return a===Wo?o.mapping=oo:a===jo&&(o.mapping=ao),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Wo||a===jo)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=n.getRenderTarget(),u=new Pl(l.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),n.setRenderTarget(c),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}function tp(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function np(n,e,t,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete r[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const p in d)e.update(d[p],34962);const f=h.morphAttributes;for(const p in f){const _=f[p];for(let v=0,g=_.length;v<g;v++)e.update(_[v],34962)}}function c(h){const d=[],f=h.index,p=h.attributes.position;let _=0;if(f!==null){const m=f.array;_=f.version;for(let T=0,E=m.length;T<E;T+=3){const L=m[T+0],y=m[T+1],O=m[T+2];d.push(L,y,y,O,O,L)}}else{const m=p.array;_=p.version;for(let T=0,E=m.length/3-1;T<E;T+=3){const L=T+0,y=T+1,O=T+2;d.push(L,y,y,O,O,L)}}const v=new(Rl(d)>65535?Ii:Di)(d,1);v.version=_;const g=s.get(h);g&&e.remove(g),s.set(h,v)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function ip(n,e,t,i){const r=i.isWebGL2;let s;function o(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function u(d,f){n.drawElements(s,f,a,d*l),t.update(f,s,1)}function h(d,f,p){if(p===0)return;let _,v;if(r)_=n,v="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),v="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[v](s,f,a,d*l,p),t.update(f,s,p)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function rp(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function sp(n,e){return n[0]-e[0]}function op(n,e){return Math.abs(e[1])-Math.abs(n[1])}function ap(n){const e={},t=new Float32Array(8),i=[];for(let s=0;s<8;s++)i[s]=[s,0];function r(s,o,a,l){const c=s.morphTargetInfluences,u=c===void 0?0:c.length;let h=e[o.id];if(h===void 0){h=[];for(let v=0;v<u;v++)h[v]=[v,0];e[o.id]=h}for(let v=0;v<u;v++){const g=h[v];g[0]=v,g[1]=c[v]}h.sort(op);for(let v=0;v<8;v++)v<u&&h[v][1]?(i[v][0]=h[v][0],i[v][1]=h[v][1]):(i[v][0]=Number.MAX_SAFE_INTEGER,i[v][1]=0);i.sort(sp);const d=a.morphTargets&&o.morphAttributes.position,f=a.morphNormals&&o.morphAttributes.normal;let p=0;for(let v=0;v<8;v++){const g=i[v],m=g[0],T=g[1];m!==Number.MAX_SAFE_INTEGER&&T?(d&&o.getAttribute("morphTarget"+v)!==d[m]&&o.setAttribute("morphTarget"+v,d[m]),f&&o.getAttribute("morphNormal"+v)!==f[m]&&o.setAttribute("morphNormal"+v,f[m]),t[v]=T,p+=T):(d&&o.hasAttribute("morphTarget"+v)===!0&&o.deleteAttribute("morphTarget"+v),f&&o.hasAttribute("morphNormal"+v)===!0&&o.deleteAttribute("morphNormal"+v),t[v]=0)}const _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",t)}return{update:r}}function lp(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);return r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Nl extends lt{constructor(e=null,t=1,i=1,r=1){super(null),this.image={data:e,width:t,height:i,depth:r},this.magFilter=pt,this.minFilter=pt,this.wrapR=xt,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}}Nl.prototype.isDataTexture2DArray=!0;class Fl extends lt{constructor(e=null,t=1,i=1,r=1){super(null),this.image={data:e,width:t,height:i,depth:r},this.magFilter=pt,this.minFilter=pt,this.wrapR=xt,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}}Fl.prototype.isDataTexture3D=!0;const Ol=new lt,cp=new Nl,hp=new Fl,Bl=new Vr,ga=[],_a=[],va=new Float32Array(16),ya=new Float32Array(9),xa=new Float32Array(4);function ni(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=ga[r];if(s===void 0&&(s=new Float32Array(r),ga[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function mt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function ht(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function zl(n,e){let t=_a[e];t===void 0&&(t=new Int32Array(e),_a[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function up(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function dp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;n.uniform2fv(this.addr,e),ht(t,e)}}function fp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mt(t,e))return;n.uniform3fv(this.addr,e),ht(t,e)}}function pp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;n.uniform4fv(this.addr,e),ht(t,e)}}function mp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ht(t,e)}else{if(mt(t,i))return;xa.set(i),n.uniformMatrix2fv(this.addr,!1,xa),ht(t,i)}}function gp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ht(t,e)}else{if(mt(t,i))return;ya.set(i),n.uniformMatrix3fv(this.addr,!1,ya),ht(t,i)}}function _p(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ht(t,e)}else{if(mt(t,i))return;va.set(i),n.uniformMatrix4fv(this.addr,!1,va),ht(t,i)}}function vp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function yp(n,e){const t=this.cache;mt(t,e)||(n.uniform2iv(this.addr,e),ht(t,e))}function xp(n,e){const t=this.cache;mt(t,e)||(n.uniform3iv(this.addr,e),ht(t,e))}function bp(n,e){const t=this.cache;mt(t,e)||(n.uniform4iv(this.addr,e),ht(t,e))}function wp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Mp(n,e){const t=this.cache;mt(t,e)||(n.uniform2uiv(this.addr,e),ht(t,e))}function Sp(n,e){const t=this.cache;mt(t,e)||(n.uniform3uiv(this.addr,e),ht(t,e))}function Ep(n,e){const t=this.cache;mt(t,e)||(n.uniform4uiv(this.addr,e),ht(t,e))}function Tp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.safeSetTexture2D(e||Ol,r)}function Ap(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||hp,r)}function Lp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.safeSetTextureCube(e||Bl,r)}function Cp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||cp,r)}function Rp(n){switch(n){case 5126:return up;case 35664:return dp;case 35665:return fp;case 35666:return pp;case 35674:return mp;case 35675:return gp;case 35676:return _p;case 5124:case 35670:return vp;case 35667:case 35671:return yp;case 35668:case 35672:return xp;case 35669:case 35673:return bp;case 5125:return wp;case 36294:return Mp;case 36295:return Sp;case 36296:return Ep;case 35678:case 36198:case 36298:case 36306:case 35682:return Tp;case 35679:case 36299:case 36307:return Ap;case 35680:case 36300:case 36308:case 36293:return Lp;case 36289:case 36303:case 36311:case 36292:return Cp}}function Pp(n,e){n.uniform1fv(this.addr,e)}function Dp(n,e){const t=ni(e,this.size,2);n.uniform2fv(this.addr,t)}function Ip(n,e){const t=ni(e,this.size,3);n.uniform3fv(this.addr,t)}function Np(n,e){const t=ni(e,this.size,4);n.uniform4fv(this.addr,t)}function Fp(n,e){const t=ni(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Op(n,e){const t=ni(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Bp(n,e){const t=ni(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function zp(n,e){n.uniform1iv(this.addr,e)}function kp(n,e){n.uniform2iv(this.addr,e)}function Hp(n,e){n.uniform3iv(this.addr,e)}function Up(n,e){n.uniform4iv(this.addr,e)}function Gp(n,e){n.uniform1uiv(this.addr,e)}function Vp(n,e){n.uniform2uiv(this.addr,e)}function Wp(n,e){n.uniform3uiv(this.addr,e)}function jp(n,e){n.uniform4uiv(this.addr,e)}function Xp(n,e,t){const i=e.length,r=zl(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.safeSetTexture2D(e[s]||Ol,r[s])}function qp(n,e,t){const i=e.length,r=zl(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.safeSetTextureCube(e[s]||Bl,r[s])}function Yp(n){switch(n){case 5126:return Pp;case 35664:return Dp;case 35665:return Ip;case 35666:return Np;case 35674:return Fp;case 35675:return Op;case 35676:return Bp;case 5124:case 35670:return zp;case 35667:case 35671:return kp;case 35668:case 35672:return Hp;case 35669:case 35673:return Up;case 5125:return Gp;case 36294:return Vp;case 36295:return Wp;case 36296:return jp;case 35678:case 36198:case 36298:case 36306:case 35682:return Xp;case 35680:case 36300:case 36308:case 36293:return qp}}function Zp(n,e,t){this.id=n,this.addr=t,this.cache=[],this.setValue=Rp(e.type)}function kl(n,e,t){this.id=n,this.addr=t,this.cache=[],this.size=e.size,this.setValue=Yp(e.type)}kl.prototype.updateCache=function(n){const e=this.cache;n instanceof Float32Array&&e.length!==n.length&&(this.cache=new Float32Array(n.length)),ht(e,n)};function Hl(n){this.id=n,this.seq=[],this.map={}}Hl.prototype.setValue=function(n,e,t){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const o=i[r];o.setValue(n,e[o.id],t)}};const ws=/(\w+)(\])?(\[|\.)?/g;function ba(n,e){n.seq.push(e),n.map[e.id]=e}function Jp(n,e,t){const i=n.name,r=i.length;for(ws.lastIndex=0;;){const s=ws.exec(i),o=ws.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){ba(t,c===void 0?new Zp(a,n,e):new kl(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new Hl(a),ba(t,h)),t=h}}}function an(n,e){this.seq=[],this.map={};const t=n.getProgramParameter(e,35718);for(let i=0;i<t;++i){const r=n.getActiveUniform(e,i),s=n.getUniformLocation(e,r.name);Jp(r,s,this)}}an.prototype.setValue=function(n,e,t,i){const r=this.map[e];r!==void 0&&r.setValue(n,t,i)};an.prototype.setOptional=function(n,e,t){const i=e[t];i!==void 0&&this.setValue(n,t,i)};an.upload=function(n,e,t,i){for(let r=0,s=e.length;r!==s;++r){const o=e[r],a=t[o.id];a.needsUpdate!==!1&&o.setValue(n,a.value,i)}};an.seqWithValue=function(n,e){const t=[];for(let i=0,r=n.length;i!==r;++i){const s=n[i];s.id in e&&t.push(s)}return t};function wa(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let $p=0;function Qp(n){const e=n.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function Ul(n){switch(n){case Vi:return["Linear","( value )"];case fo:return["sRGB","( value )"];case eu:return["RGBE","( value )"];case nu:return["RGBM","( value, 7.0 )"];case iu:return["RGBM","( value, 16.0 )"];case ru:return["RGBD","( value, 256.0 )"];case Kh:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case tu:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function Ma(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=n.getShaderSource(e);return"THREE.WebGLShader: gl.getShaderInfoLog() "+t+`
`+r+Qp(s)}function ci(n,e){const t=Ul(e);return"vec4 "+n+"( vec4 value ) { return "+t[0]+"ToLinear"+t[1]+"; }"}function Kp(n,e){const t=Ul(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function em(n,e){let t;switch(e){case Qc:t="Linear";break;case Kc:t="Reinhard";break;case eh:t="OptimizedCineon";break;case th:t="ACESFilmic";break;case nh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function tm(n){return[n.extensionDerivatives||n.envMapCubeUV||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(vi).join(`
`)}function nm(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function im(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const o=n.getActiveAttrib(e,r).name;t[o]=n.getAttribLocation(e,o)}return t}function vi(n){return n!==""}function Sa(n,e){return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ea(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hs(n){return n.replace(rm,sm)}function sm(n,e){const t=Le[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Hs(t)}const om=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,am=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ta(n){return n.replace(am,Gl).replace(om,lm)}function lm(n,e,t,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Gl(n,e,t,i)}function Gl(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Aa(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function cm(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===wl?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Rc?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===_i&&(e="SHADOWMAP_TYPE_VSM"),e}function hm(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case oo:case ao:e="ENVMAP_TYPE_CUBE";break;case lo:case co:e="ENVMAP_TYPE_CUBE_UV";break}return e}function um(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ao:case co:e="ENVMAP_MODE_REFRACTION";break}return e}function dm(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ur:e="ENVMAP_BLENDING_MULTIPLY";break;case Jc:e="ENVMAP_BLENDING_MIX";break;case $c:e="ENVMAP_BLENDING_ADD";break}return e}function fm(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=cm(t),c=hm(t),u=um(t),h=dm(t),d=n.gammaFactor>0?n.gammaFactor:1,f=t.isWebGL2?"":tm(t),p=nm(s),_=r.createProgram();let v,g,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=[p].filter(vi).join(`
`),v.length>0&&(v+=`
`),g=[f,p].filter(vi).join(`
`),g.length>0&&(g+=`
`)):(v=[Aa(t),"#define SHADER_NAME "+t.shaderName,p,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+d,"#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vi).join(`
`),g=[f,Aa(t),"#define SHADER_NAME "+t.shaderName,p,t.alphaTest?"#define ALPHATEST "+t.alphaTest+(t.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.sheen?"#define USE_SHEEN":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mi?"#define TONE_MAPPING":"",t.toneMapping!==Mi?Le.tonemapping_pars_fragment:"",t.toneMapping!==Mi?em("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",Le.encodings_pars_fragment,t.map?ci("mapTexelToLinear",t.mapEncoding):"",t.matcap?ci("matcapTexelToLinear",t.matcapEncoding):"",t.envMap?ci("envMapTexelToLinear",t.envMapEncoding):"",t.emissiveMap?ci("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",t.lightMap?ci("lightMapTexelToLinear",t.lightMapEncoding):"",Kp("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(vi).join(`
`)),o=Hs(o),o=Sa(o,t),o=Ea(o,t),a=Hs(a),a=Sa(a,t),a=Ea(a,t),o=Ta(o),a=Ta(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,v=["#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,g=["#define varying in",t.glslVersion===ra?"":"out highp vec4 pc_fragColor;",t.glslVersion===ra?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const T=m+v+o,E=m+g+a,L=wa(r,35633,T),y=wa(r,35632,E);if(r.attachShader(_,L),r.attachShader(_,y),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_),n.debug.checkShaderErrors){const B=r.getProgramInfoLog(_).trim(),q=r.getShaderInfoLog(L).trim(),P=r.getShaderInfoLog(y).trim();let Z=!0,R=!0;if(r.getProgramParameter(_,35714)===!1){Z=!1;const C=Ma(r,L,"vertex"),I=Ma(r,y,"fragment");console.error("THREE.WebGLProgram: shader error: ",r.getError(),"35715",r.getProgramParameter(_,35715),"gl.getProgramInfoLog",B,C,I)}else B!==""?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",B):(q===""||P==="")&&(R=!1);R&&(this.diagnostics={runnable:Z,programLog:B,vertexShader:{log:q,prefix:v},fragmentShader:{log:P,prefix:g}})}r.deleteShader(L),r.deleteShader(y);let O;this.getUniforms=function(){return O===void 0&&(O=new an(r,_)),O};let k;return this.getAttributes=function(){return k===void 0&&(k=im(r,_)),k},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.name=t.shaderName,this.id=$p++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=y,this}function pm(n,e,t,i,r,s){const o=[],a=i.isWebGL2,l=i.logarithmicDepthBuffer,c=i.floatVertexTextures,u=i.maxVertexUniforms,h=i.vertexTextures;let d=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},p=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","vertexAlphas","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","sheen","transmissionMap"];function _(y){const k=y.skeleton.bones;if(c)return 1024;{const q=Math.floor((u-20)/4),P=Math.min(q,k.length);return P<k.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+k.length+" bones. This GPU supports "+P+"."),0):P}}function v(y){let O;return y&&y.isTexture?O=y.encoding:y&&y.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),O=y.texture.encoding):O=Vi,O}function g(y,O,k,B,q){const P=B.fog,Z=y.isMeshStandardMaterial?B.environment:null,R=e.get(y.envMap||Z),C=f[y.type],I=q.isSkinnedMesh?_(q):0;y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));let D,Y;if(C){const ae=kt[C];D=ae.vertexShader,Y=ae.fragmentShader}else D=y.vertexShader,Y=y.fragmentShader;const ee=n.getRenderTarget();return{isWebGL2:a,shaderID:C,shaderName:y.type,vertexShader:D,fragmentShader:Y,defines:y.defines,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,instancing:q.isInstancedMesh===!0,instancingColor:q.isInstancedMesh===!0&&q.instanceColor!==null,supportsVertexTextures:h,outputEncoding:ee!==null?v(ee.texture):n.outputEncoding,map:!!y.map,mapEncoding:v(y.map),matcap:!!y.matcap,matcapEncoding:v(y.matcap),envMap:!!R,envMapMode:R&&R.mapping,envMapEncoding:v(R),envMapCubeUV:!!R&&(R.mapping===lo||R.mapping===co),lightMap:!!y.lightMap,lightMapEncoding:v(y.lightMap),aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,emissiveMapEncoding:v(y.emissiveMap),bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===au,tangentSpaceNormalMap:y.normalMapType===Qn,clearcoatMap:!!y.clearcoatMap,clearcoatRoughnessMap:!!y.clearcoatRoughnessMap,clearcoatNormalMap:!!y.clearcoatNormalMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,alphaMap:!!y.alphaMap,gradientMap:!!y.gradientMap,sheen:!!y.sheen,transmissionMap:!!y.transmissionMap,combine:y.combine,vertexTangents:y.normalMap&&y.vertexTangents,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&q.geometry.attributes.color&&q.geometry.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.displacementMap||!!y.transmissionMap,uvsVertexOnly:!(y.map||y.bumpMap||y.normalMap||y.specularMap||y.alphaMap||y.emissiveMap||y.roughnessMap||y.metalnessMap||y.clearcoatNormalMap||y.transmissionMap)&&!!y.displacementMap,fog:!!P,useFog:y.fog,fogExp2:P&&P.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:l,skinning:y.skinning&&I>0,maxBones:I,useVertexTexture:c,morphTargets:y.morphTargets,morphNormals:y.morphNormals,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:y.toneMapped?n.toneMapping:Mi,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,alphaTest:y.alphaTest,doubleSided:y.side===Gi,flipSided:y.side===tt,depthPacking:y.depthPacking!==void 0?y.depthPacking:!1,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:a||t.has("EXT_frag_depth"),rendererExtensionDrawBuffers:a||t.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:a||t.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function m(y){const O=[];if(y.shaderID?O.push(y.shaderID):(O.push(y.fragmentShader),O.push(y.vertexShader)),y.defines!==void 0)for(const k in y.defines)O.push(k),O.push(y.defines[k]);if(y.isRawShaderMaterial===!1){for(let k=0;k<p.length;k++)O.push(y[p[k]]);O.push(n.outputEncoding),O.push(n.gammaFactor)}return O.push(y.customProgramCacheKey),O.join()}function T(y){const O=f[y.type];let k;if(O){const B=kt[O];k=Mu.clone(B.uniforms)}else k=y.uniforms;return k}function E(y,O){let k;for(let B=0,q=o.length;B<q;B++){const P=o[B];if(P.cacheKey===O){k=P,++k.usedTimes;break}}return k===void 0&&(k=new fm(n,O,y,r),o.push(k)),k}function L(y){if(--y.usedTimes===0){const O=o.indexOf(y);o[O]=o[o.length-1],o.pop(),y.destroy()}}return{getParameters:g,getProgramCacheKey:m,getUniforms:T,acquireProgram:E,releaseProgram:L,programs:o}}function mm(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function gm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.program!==e.program?n.program.id-e.program.id:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function _m(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function La(n){const e=[];let t=0;const i=[],r=[],s={id:-1};function o(){t=0,i.length=0,r.length=0}function a(d,f,p,_,v,g){let m=e[t];const T=n.get(p);return m===void 0?(m={id:d.id,object:d,geometry:f,material:p,program:T.program||s,groupOrder:_,renderOrder:d.renderOrder,z:v,group:g},e[t]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=p,m.program=T.program||s,m.groupOrder=_,m.renderOrder=d.renderOrder,m.z=v,m.group=g),t++,m}function l(d,f,p,_,v,g){const m=a(d,f,p,_,v,g);(p.transparent===!0?r:i).push(m)}function c(d,f,p,_,v,g){const m=a(d,f,p,_,v,g);(p.transparent===!0?r:i).unshift(m)}function u(d,f){i.length>1&&i.sort(d||gm),r.length>1&&r.sort(f||_m)}function h(){for(let d=t,f=e.length;d<f;d++){const p=e[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.program=null,p.group=null}}return{opaque:i,transparent:r,init:o,push:l,unshift:c,finish:h,sort:u}}function vm(n){let e=new WeakMap;function t(r,s){let o;return e.has(r)===!1?(o=new La(n),e.set(r,[o])):s>=e.get(r).length?(o=new La(n),e.get(r).push(o)):o=e.get(r)[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}function ym(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new M,color:new fe};break;case"SpotLight":t={position:new M,direction:new M,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new M,color:new fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new M,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":t={color:new fe,position:new M,halfWidth:new M,halfHeight:new M};break}return n[e.id]=t,t}}}function xm(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let bm=0;function wm(n,e){return(e.castShadow?1:0)-(n.castShadow?1:0)}function Mm(n,e){const t=new ym,i=xm(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)r.probe.push(new M);const s=new M,o=new de,a=new de;function l(u){let h=0,d=0,f=0;for(let O=0;O<9;O++)r.probe[O].set(0,0,0);let p=0,_=0,v=0,g=0,m=0,T=0,E=0,L=0;u.sort(wm);for(let O=0,k=u.length;O<k;O++){const B=u[O],q=B.color,P=B.intensity,Z=B.distance,R=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)h+=q.r*P,d+=q.g*P,f+=q.b*P;else if(B.isLightProbe)for(let C=0;C<9;C++)r.probe[C].addScaledVector(B.sh.coefficients[C],P);else if(B.isDirectionalLight){const C=t.get(B);if(C.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const I=B.shadow,D=i.get(B);D.shadowBias=I.bias,D.shadowNormalBias=I.normalBias,D.shadowRadius=I.radius,D.shadowMapSize=I.mapSize,r.directionalShadow[p]=D,r.directionalShadowMap[p]=R,r.directionalShadowMatrix[p]=B.shadow.matrix,T++}r.directional[p]=C,p++}else if(B.isSpotLight){const C=t.get(B);if(C.position.setFromMatrixPosition(B.matrixWorld),C.color.copy(q).multiplyScalar(P),C.distance=Z,C.coneCos=Math.cos(B.angle),C.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),C.decay=B.decay,B.castShadow){const I=B.shadow,D=i.get(B);D.shadowBias=I.bias,D.shadowNormalBias=I.normalBias,D.shadowRadius=I.radius,D.shadowMapSize=I.mapSize,r.spotShadow[v]=D,r.spotShadowMap[v]=R,r.spotShadowMatrix[v]=B.shadow.matrix,L++}r.spot[v]=C,v++}else if(B.isRectAreaLight){const C=t.get(B);C.color.copy(q).multiplyScalar(P),C.halfWidth.set(B.width*.5,0,0),C.halfHeight.set(0,B.height*.5,0),r.rectArea[g]=C,g++}else if(B.isPointLight){const C=t.get(B);if(C.color.copy(B.color).multiplyScalar(B.intensity),C.distance=B.distance,C.decay=B.decay,B.castShadow){const I=B.shadow,D=i.get(B);D.shadowBias=I.bias,D.shadowNormalBias=I.normalBias,D.shadowRadius=I.radius,D.shadowMapSize=I.mapSize,D.shadowCameraNear=I.camera.near,D.shadowCameraFar=I.camera.far,r.pointShadow[_]=D,r.pointShadowMap[_]=R,r.pointShadowMatrix[_]=B.shadow.matrix,E++}r.point[_]=C,_++}else if(B.isHemisphereLight){const C=t.get(B);C.skyColor.copy(B.color).multiplyScalar(P),C.groundColor.copy(B.groundColor).multiplyScalar(P),r.hemi[m]=C,m++}}g>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ne.LTC_FLOAT_1,r.rectAreaLTC2=ne.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ne.LTC_HALF_1,r.rectAreaLTC2=ne.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=d,r.ambient[2]=f;const y=r.hash;(y.directionalLength!==p||y.pointLength!==_||y.spotLength!==v||y.rectAreaLength!==g||y.hemiLength!==m||y.numDirectionalShadows!==T||y.numPointShadows!==E||y.numSpotShadows!==L)&&(r.directional.length=p,r.spot.length=v,r.rectArea.length=g,r.point.length=_,r.hemi.length=m,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=E,r.pointShadowMap.length=E,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=E,r.spotShadowMatrix.length=L,y.directionalLength=p,y.pointLength=_,y.spotLength=v,y.rectAreaLength=g,y.hemiLength=m,y.numDirectionalShadows=T,y.numPointShadows=E,y.numSpotShadows=L,r.version=bm++)}function c(u,h){let d=0,f=0,p=0,_=0,v=0;const g=h.matrixWorldInverse;for(let m=0,T=u.length;m<T;m++){const E=u[m];if(E.isDirectionalLight){const L=r.directional[d];L.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(g),d++}else if(E.isSpotLight){const L=r.spot[p];L.position.setFromMatrixPosition(E.matrixWorld),L.position.applyMatrix4(g),L.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(g),p++}else if(E.isRectAreaLight){const L=r.rectArea[_];L.position.setFromMatrixPosition(E.matrixWorld),L.position.applyMatrix4(g),a.identity(),o.copy(E.matrixWorld),o.premultiply(g),a.extractRotation(o),L.halfWidth.set(E.width*.5,0,0),L.halfHeight.set(0,E.height*.5,0),L.halfWidth.applyMatrix4(a),L.halfHeight.applyMatrix4(a),_++}else if(E.isPointLight){const L=r.point[f];L.position.setFromMatrixPosition(E.matrixWorld),L.position.applyMatrix4(g),f++}else if(E.isHemisphereLight){const L=r.hemi[v];L.direction.setFromMatrixPosition(E.matrixWorld),L.direction.transformDirection(g),L.direction.normalize(),v++}}}return{setup:l,setupView:c,state:r}}function Ca(n,e){const t=new Mm(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function l(){t.setup(i)}function c(h){t.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Sm(n,e){let t=new WeakMap;function i(s,o=0){let a;return t.has(s)===!1?(a=new Ca(n,e),t.set(s,[a])):o>=t.get(s).length?(a=new Ca(n,e),t.get(s).push(a)):a=t.get(s)[o],a}function r(){t=new WeakMap}return{get:i,dispose:r}}class Vl extends Ye{constructor(e){super(),this.type="MeshDepthMaterial",this.depthPacking=su,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}Vl.prototype.isMeshDepthMaterial=!0;class Wl extends Ye{constructor(e){super(),this.type="MeshDistanceMaterial",this.referencePosition=new M,this.nearDistance=1,this.farDistance=1e3,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}Wl.prototype.isMeshDistanceMaterial=!0;var Em=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	float mean = 0.0;
	float squared_mean = 0.0;
	float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );
	for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean * HALF_SAMPLE_RATE;
	squared_mean = squared_mean * HALF_SAMPLE_RATE;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`,Tm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`;function jl(n,e,t){let i=new Wr;const r=new J,s=new J,o=new ke,a=[],l=[],c={},u=t.maxTextureSize,h={0:tt,1:Hr,2:Gi},d=new St({defines:{SAMPLE_RATE:2/8,HALF_SAMPLE_RATE:1/8},uniforms:{shadow_pass:{value:null},resolution:{value:new J},radius:{value:4}},vertexShader:Tm,fragmentShader:Em}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new Be;p.setAttribute("position",new Ae(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new at(p,d),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wl,this.render=function(y,O,k){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||y.length===0)return;const B=n.getRenderTarget(),q=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),Z=n.state;Z.setBlending(bi),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);for(let R=0,C=y.length;R<C;R++){const I=y[R],D=I.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",I,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const Y=D.getFrameExtents();if(r.multiply(Y),s.copy(D.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Y.x),r.x=s.x*Y.x,D.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Y.y),r.y=s.y*Y.y,D.mapSize.y=s.y)),D.map===null&&!D.isPointLightShadow&&this.type===_i){const Q={minFilter:rt,magFilter:rt,format:Pt};D.map=new yn(r.x,r.y,Q),D.map.texture.name=I.name+".shadowMap",D.mapPass=new yn(r.x,r.y,Q),D.camera.updateProjectionMatrix()}if(D.map===null){const Q={minFilter:pt,magFilter:pt,format:Pt};D.map=new yn(r.x,r.y,Q),D.map.texture.name=I.name+".shadowMap",D.camera.updateProjectionMatrix()}n.setRenderTarget(D.map),n.clear();const ee=D.getViewportCount();for(let Q=0;Q<ee;Q++){const ae=D.getViewport(Q);o.set(s.x*ae.x,s.y*ae.y,s.x*ae.z,s.y*ae.w),Z.viewport(o),D.updateMatrices(I,Q),i=D.getFrustum(),L(O,k,D.camera,I,this.type)}!D.isPointLightShadow&&this.type===_i&&g(D,k),D.needsUpdate=!1}v.needsUpdate=!1,n.setRenderTarget(B,q,P)};function g(y,O){const k=e.update(_);d.uniforms.shadow_pass.value=y.map.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,n.setRenderTarget(y.mapPass),n.clear(),n.renderBufferDirect(O,null,k,d,_,null),f.uniforms.shadow_pass.value=y.mapPass.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,n.setRenderTarget(y.map),n.clear(),n.renderBufferDirect(O,null,k,f,_,null)}function m(y,O,k){const B=y<<0|O<<1|k<<2;let q=a[B];return q===void 0&&(q=new Vl({depthPacking:ou,morphTargets:y,skinning:O}),a[B]=q),q}function T(y,O,k){const B=y<<0|O<<1|k<<2;let q=l[B];return q===void 0&&(q=new Wl({morphTargets:y,skinning:O}),l[B]=q),q}function E(y,O,k,B,q,P,Z){let R=null,C=m,I=y.customDepthMaterial;if(B.isPointLight===!0&&(C=T,I=y.customDistanceMaterial),I===void 0){let D=!1;k.morphTargets===!0&&(D=O.morphAttributes&&O.morphAttributes.position&&O.morphAttributes.position.length>0);let Y=!1;y.isSkinnedMesh===!0&&(k.skinning===!0?Y=!0:console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",y));const ee=y.isInstancedMesh===!0;R=C(D,Y,ee)}else R=I;if(n.localClippingEnabled&&k.clipShadows===!0&&k.clippingPlanes.length!==0){const D=R.uuid,Y=k.uuid;let ee=c[D];ee===void 0&&(ee={},c[D]=ee);let Q=ee[Y];Q===void 0&&(Q=R.clone(),ee[Y]=Q),R=Q}return R.visible=k.visible,R.wireframe=k.wireframe,Z===_i?R.side=k.shadowSide!==null?k.shadowSide:k.side:R.side=k.shadowSide!==null?k.shadowSide:h[k.side],R.clipShadows=k.clipShadows,R.clippingPlanes=k.clippingPlanes,R.clipIntersection=k.clipIntersection,R.wireframeLinewidth=k.wireframeLinewidth,R.linewidth=k.linewidth,B.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(R.referencePosition.setFromMatrixPosition(B.matrixWorld),R.nearDistance=q,R.farDistance=P),R}function L(y,O,k,B,q){if(y.visible===!1)return;if(y.layers.test(O.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&q===_i)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,y.matrixWorld);const R=e.update(y),C=y.material;if(Array.isArray(C)){const I=R.groups;for(let D=0,Y=I.length;D<Y;D++){const ee=I[D],Q=C[ee.materialIndex];if(Q&&Q.visible){const ae=E(y,R,Q,B,k.near,k.far,q);n.renderBufferDirect(k,null,R,ae,y,ee)}}}else if(C.visible){const I=E(y,R,C,B,k.near,k.far,q);n.renderBufferDirect(k,null,R,I,y,null)}}const Z=y.children;for(let R=0,C=Z.length;R<C;R++)L(Z[R],O,k,B,q)}}function Am(n,e,t){const i=t.isWebGL2;function r(){let A=!1;const w=new ke;let V=null;const re=new ke(0,0,0,0);return{setMask:function(H){V!==H&&!A&&(n.colorMask(H,H,H,H),V=H)},setLocked:function(H){A=H},setClear:function(H,ue,Ce,We,Nt){Nt===!0&&(H*=We,ue*=We,Ce*=We),w.set(H,ue,Ce,We),re.equals(w)===!1&&(n.clearColor(H,ue,Ce,We),re.copy(w))},reset:function(){A=!1,V=null,re.set(-1,0,0,0)}}}function s(){let A=!1,w=null,V=null,re=null;return{setTest:function(H){H?me(2929):ve(2929)},setMask:function(H){w!==H&&!A&&(n.depthMask(H),w=H)},setFunc:function(H){if(V!==H){if(H)switch(H){case Vc:n.depthFunc(512);break;case Wc:n.depthFunc(519);break;case jc:n.depthFunc(513);break;case Ps:n.depthFunc(515);break;case Xc:n.depthFunc(514);break;case qc:n.depthFunc(518);break;case Yc:n.depthFunc(516);break;case Zc:n.depthFunc(517);break;default:n.depthFunc(515)}else n.depthFunc(515);V=H}},setLocked:function(H){A=H},setClear:function(H){re!==H&&(n.clearDepth(H),re=H)},reset:function(){A=!1,w=null,V=null,re=null}}}function o(){let A=!1,w=null,V=null,re=null,H=null,ue=null,Ce=null,We=null,Nt=null;return{setTest:function(Oe){A||(Oe?me(2960):ve(2960))},setMask:function(Oe){w!==Oe&&!A&&(n.stencilMask(Oe),w=Oe)},setFunc:function(Oe,Qe,Tt){(V!==Oe||re!==Qe||H!==Tt)&&(n.stencilFunc(Oe,Qe,Tt),V=Oe,re=Qe,H=Tt)},setOp:function(Oe,Qe,Tt){(ue!==Oe||Ce!==Qe||We!==Tt)&&(n.stencilOp(Oe,Qe,Tt),ue=Oe,Ce=Qe,We=Tt)},setLocked:function(Oe){A=Oe},setClear:function(Oe){Nt!==Oe&&(n.clearStencil(Oe),Nt=Oe)},reset:function(){A=!1,w=null,V=null,re=null,H=null,ue=null,Ce=null,We=null,Nt=null}}}const a=new r,l=new s,c=new o;let u={},h=null,d={},f=null,p=!1,_=null,v=null,g=null,m=null,T=null,E=null,L=null,y=!1,O=null,k=null,B=null,q=null,P=null;const Z=n.getParameter(35661);let R=!1,C=0;const I=n.getParameter(7938);I.indexOf("WebGL")!==-1?(C=parseFloat(/^WebGL (\d)/.exec(I)[1]),R=C>=1):I.indexOf("OpenGL ES")!==-1&&(C=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),R=C>=2);let D=null,Y={};const ee=new ke(0,0,n.canvas.width,n.canvas.height),Q=new ke(0,0,n.canvas.width,n.canvas.height);function ae(A,w,V){const re=new Uint8Array(4),H=n.createTexture();n.bindTexture(A,H),n.texParameteri(A,10241,9728),n.texParameteri(A,10240,9728);for(let ue=0;ue<V;ue++)n.texImage2D(w+ue,0,6408,1,1,0,6408,5121,re);return H}const le={};le[3553]=ae(3553,3553,1),le[34067]=ae(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),me(2929),l.setFunc(Ps),Te(!1),$(zo),me(2884),Ie(bi);function me(A){u[A]!==!0&&(n.enable(A),u[A]=!0)}function ve(A){u[A]!==!1&&(n.disable(A),u[A]=!1)}function G(A){A!==h&&(n.bindFramebuffer(36160,A),h=A)}function De(A,w){w===null&&h!==null&&(w=h),d[A]!==w&&(n.bindFramebuffer(A,w),d[A]=w)}function Re(A){return f!==A?(n.useProgram(A),f=A,!0):!1}const _e={[Hn]:32774,[Dc]:32778,[Ic]:32779};if(i)_e[Go]=32775,_e[Vo]=32776;else{const A=e.get("EXT_blend_minmax");A!==null&&(_e[Go]=A.MIN_EXT,_e[Vo]=A.MAX_EXT)}const pe={[Nc]:0,[Fc]:1,[Oc]:768,[Sl]:770,[Gc]:776,[Hc]:774,[zc]:772,[Bc]:769,[El]:771,[Uc]:775,[kc]:773};function Ie(A,w,V,re,H,ue,Ce,We){if(A===bi){p===!0&&(ve(3042),p=!1);return}if(p===!1&&(me(3042),p=!0),A!==Pc){if(A!==_||We!==y){if((v!==Hn||T!==Hn)&&(n.blendEquation(32774),v=Hn,T=Hn),We)switch(A){case wi:n.blendFuncSeparate(1,771,1,771);break;case ko:n.blendFunc(1,1);break;case Ho:n.blendFuncSeparate(0,0,769,771);break;case Uo:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case wi:n.blendFuncSeparate(770,771,1,771);break;case ko:n.blendFunc(770,1);break;case Ho:n.blendFunc(0,769);break;case Uo:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}g=null,m=null,E=null,L=null,_=A,y=We}return}H=H||w,ue=ue||V,Ce=Ce||re,(w!==v||H!==T)&&(n.blendEquationSeparate(_e[w],_e[H]),v=w,T=H),(V!==g||re!==m||ue!==E||Ce!==L)&&(n.blendFuncSeparate(pe[V],pe[re],pe[ue],pe[Ce]),g=V,m=re,E=ue,L=Ce),_=A,y=null}function Se(A,w){A.side===Gi?ve(2884):me(2884);let V=A.side===tt;w&&(V=!V),Te(V),A.blending===wi&&A.transparent===!1?Ie(bi):Ie(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.premultipliedAlpha),l.setFunc(A.depthFunc),l.setTest(A.depthTest),l.setMask(A.depthWrite),a.setMask(A.colorWrite);const re=A.stencilWrite;c.setTest(re),re&&(c.setMask(A.stencilWriteMask),c.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),c.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),te(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?me(32926):ve(32926)}function Te(A){O!==A&&(A?n.frontFace(2304):n.frontFace(2305),O=A)}function $(A){A!==Lc?(me(2884),A!==k&&(A===zo?n.cullFace(1029):A===Cc?n.cullFace(1028):n.cullFace(1032))):ve(2884),k=A}function K(A){A!==B&&(R&&n.lineWidth(A),B=A)}function te(A,w,V){A?(me(32823),(q!==w||P!==V)&&(n.polygonOffset(w,V),q=w,P=V)):ve(32823)}function ce(A){A?me(3089):ve(3089)}function ie(A){A===void 0&&(A=33984+Z-1),D!==A&&(n.activeTexture(A),D=A)}function S(A,w){D===null&&ie();let V=Y[D];V===void 0&&(V={type:void 0,texture:void 0},Y[D]=V),(V.type!==A||V.texture!==w)&&(n.bindTexture(A,w||le[A]),V.type=A,V.texture=w)}function b(){const A=Y[D];A!==void 0&&A.type!==void 0&&(n.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function j(){try{n.compressedTexImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function X(){try{n.texImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function se(){try{n.texImage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function he(A){ee.equals(A)===!1&&(n.scissor(A.x,A.y,A.z,A.w),ee.copy(A))}function Pe(A){Q.equals(A)===!1&&(n.viewport(A.x,A.y,A.z,A.w),Q.copy(A))}function ge(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},D=null,Y={},h=null,d={},f=null,p=!1,_=null,v=null,g=null,m=null,T=null,E=null,L=null,y=!1,O=null,k=null,B=null,q=null,P=null,ee.set(0,0,n.canvas.width,n.canvas.height),Q.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:me,disable:ve,bindFramebuffer:De,bindXRFramebuffer:G,useProgram:Re,setBlending:Ie,setMaterial:Se,setFlipSided:Te,setCullFace:$,setLineWidth:K,setPolygonOffset:te,setScissorTest:ce,activeTexture:ie,bindTexture:S,unbindTexture:b,compressedTexImage2D:j,texImage2D:X,texImage3D:se,scissor:he,viewport:Pe,reset:ge}}function Lm(n,e,t,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,d=new WeakMap;let f,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(S,b){return p?new OffscreenCanvas(S,b):document.createElementNS("http://www.w3.org/1999/xhtml","canvas")}function v(S,b,j,X){let se=1;if((S.width>X||S.height>X)&&(se=X/Math.max(S.width,S.height)),se<1||b===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){const he=b?Me.floorPowerOfTwo:Math.floor,Pe=he(se*S.width),ge=he(se*S.height);f===void 0&&(f=_(Pe,ge));const A=j?_(Pe,ge):f;return A.width=Pe,A.height=ge,A.getContext("2d").drawImage(S,0,0,Pe,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+Pe+"x"+ge+")."),A}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function g(S){return Me.isPowerOfTwo(S.width)&&Me.isPowerOfTwo(S.height)}function m(S){return a?!1:S.wrapS!==xt||S.wrapT!==xt||S.minFilter!==pt&&S.minFilter!==rt}function T(S,b){return S.generateMipmaps&&b&&S.minFilter!==pt&&S.minFilter!==rt}function E(S,b,j,X){n.generateMipmap(S);const se=i.get(b);se.__maxMipLevel=Math.log2(Math.max(j,X))}function L(S,b,j){if(a===!1)return b;if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let X=b;return b===6403&&(j===5126&&(X=33326),j===5131&&(X=33325),j===5121&&(X=33321)),b===6407&&(j===5126&&(X=34837),j===5131&&(X=34843),j===5121&&(X=32849)),b===6408&&(j===5126&&(X=34836),j===5131&&(X=34842),j===5121&&(X=32856)),(X===33325||X===33326||X===34842||X===34836)&&e.get("EXT_color_buffer_float"),X}function y(S){return S===pt||S===Xo||S===qo?9728:9729}function O(S){const b=S.target;b.removeEventListener("dispose",O),B(b),b.isVideoTexture&&d.delete(b),o.memory.textures--}function k(S){const b=S.target;b.removeEventListener("dispose",k),q(b),o.memory.textures--}function B(S){const b=i.get(S);b.__webglInit!==void 0&&(n.deleteTexture(b.__webglTexture),i.remove(S))}function q(S){const b=S.texture,j=i.get(S),X=i.get(b);if(S){if(X.__webglTexture!==void 0&&n.deleteTexture(X.__webglTexture),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let se=0;se<6;se++)n.deleteFramebuffer(j.__webglFramebuffer[se]),j.__webglDepthbuffer&&n.deleteRenderbuffer(j.__webglDepthbuffer[se]);else n.deleteFramebuffer(j.__webglFramebuffer),j.__webglDepthbuffer&&n.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&n.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer&&n.deleteRenderbuffer(j.__webglColorRenderbuffer),j.__webglDepthRenderbuffer&&n.deleteRenderbuffer(j.__webglDepthRenderbuffer);i.remove(b),i.remove(S)}}let P=0;function Z(){P=0}function R(){const S=P;return S>=l&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+l),P+=1,S}function C(S,b){const j=i.get(S);if(S.isVideoTexture&&$(S),S.version>0&&j.__version!==S.version){const X=S.image;if(X===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(j,S,b);return}}t.activeTexture(33984+b),t.bindTexture(3553,j.__webglTexture)}function I(S,b){const j=i.get(S);if(S.version>0&&j.__version!==S.version){me(j,S,b);return}t.activeTexture(33984+b),t.bindTexture(35866,j.__webglTexture)}function D(S,b){const j=i.get(S);if(S.version>0&&j.__version!==S.version){me(j,S,b);return}t.activeTexture(33984+b),t.bindTexture(32879,j.__webglTexture)}function Y(S,b){const j=i.get(S);if(S.version>0&&j.__version!==S.version){ve(j,S,b);return}t.activeTexture(33984+b),t.bindTexture(34067,j.__webglTexture)}const ee={[Ds]:10497,[xt]:33071,[Is]:33648},Q={[pt]:9728,[Xo]:9984,[qo]:9986,[rt]:9729,[ih]:9985,[Gr]:9987};function ae(S,b,j){if(j?(n.texParameteri(S,10242,ee[b.wrapS]),n.texParameteri(S,10243,ee[b.wrapT]),(S===32879||S===35866)&&n.texParameteri(S,32882,ee[b.wrapR]),n.texParameteri(S,10240,Q[b.magFilter]),n.texParameteri(S,10241,Q[b.minFilter])):(n.texParameteri(S,10242,33071),n.texParameteri(S,10243,33071),(S===32879||S===35866)&&n.texParameteri(S,32882,33071),(b.wrapS!==xt||b.wrapT!==xt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(S,10240,y(b.magFilter)),n.texParameteri(S,10241,y(b.minFilter)),b.minFilter!==pt&&b.minFilter!==rt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const X=e.get("EXT_texture_filter_anisotropic");if(b.type===on&&e.has("OES_texture_float_linear")===!1||a===!1&&b.type===Ar&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||i.get(b).__currentAnisotropy)&&(n.texParameterf(S,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy)}}function le(S,b){S.__webglInit===void 0&&(S.__webglInit=!0,b.addEventListener("dispose",O),S.__webglTexture=n.createTexture(),o.memory.textures++)}function me(S,b,j){let X=3553;b.isDataTexture2DArray&&(X=35866),b.isDataTexture3D&&(X=32879),le(S,b),t.activeTexture(33984+j),t.bindTexture(X,S.__webglTexture),n.pixelStorei(37440,b.flipY),n.pixelStorei(37441,b.premultiplyAlpha),n.pixelStorei(3317,b.unpackAlignment),n.pixelStorei(37443,0);const se=m(b)&&g(b.image)===!1,he=v(b.image,se,!1,u),Pe=g(he)||a,ge=s.convert(b.format);let A=s.convert(b.type),w=L(b.internalFormat,ge,A);ae(X,b,Pe);let V;const re=b.mipmaps;if(b.isDepthTexture)w=6402,a?b.type===on?w=36012:b.type===Er?w=33190:b.type===Si?w=35056:w=33189:b.type===on&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===qn&&w===6402&&b.type!==Tr&&b.type!==Er&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Tr,A=s.convert(b.type)),b.format===Ri&&w===6402&&(w=34041,b.type!==Si&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Si,A=s.convert(b.type))),t.texImage2D(3553,0,w,he.width,he.height,0,ge,A,null);else if(b.isDataTexture)if(re.length>0&&Pe){for(let H=0,ue=re.length;H<ue;H++)V=re[H],t.texImage2D(3553,H,w,V.width,V.height,0,ge,A,V.data);b.generateMipmaps=!1,S.__maxMipLevel=re.length-1}else t.texImage2D(3553,0,w,he.width,he.height,0,ge,A,he.data),S.__maxMipLevel=0;else if(b.isCompressedTexture){for(let H=0,ue=re.length;H<ue;H++)V=re[H],b.format!==Pt&&b.format!==vn?ge!==null?t.compressedTexImage2D(3553,H,w,V.width,V.height,0,V.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):t.texImage2D(3553,H,w,V.width,V.height,0,ge,A,V.data);S.__maxMipLevel=re.length-1}else if(b.isDataTexture2DArray)t.texImage3D(35866,0,w,he.width,he.height,he.depth,0,ge,A,he.data),S.__maxMipLevel=0;else if(b.isDataTexture3D)t.texImage3D(32879,0,w,he.width,he.height,he.depth,0,ge,A,he.data),S.__maxMipLevel=0;else if(re.length>0&&Pe){for(let H=0,ue=re.length;H<ue;H++)V=re[H],t.texImage2D(3553,H,w,ge,A,V);b.generateMipmaps=!1,S.__maxMipLevel=re.length-1}else t.texImage2D(3553,0,w,ge,A,he),S.__maxMipLevel=0;T(b,Pe)&&E(X,b,he.width,he.height),S.__version=b.version,b.onUpdate&&b.onUpdate(b)}function ve(S,b,j){if(b.image.length!==6)return;le(S,b),t.activeTexture(33984+j),t.bindTexture(34067,S.__webglTexture),n.pixelStorei(37440,b.flipY),n.pixelStorei(37441,b.premultiplyAlpha),n.pixelStorei(3317,b.unpackAlignment),n.pixelStorei(37443,0);const X=b&&(b.isCompressedTexture||b.image[0].isCompressedTexture),se=b.image[0]&&b.image[0].isDataTexture,he=[];for(let H=0;H<6;H++)!X&&!se?he[H]=v(b.image[H],!1,!0,c):he[H]=se?b.image[H].image:b.image[H];const Pe=he[0],ge=g(Pe)||a,A=s.convert(b.format),w=s.convert(b.type),V=L(b.internalFormat,A,w);ae(34067,b,ge);let re;if(X){for(let H=0;H<6;H++){re=he[H].mipmaps;for(let ue=0;ue<re.length;ue++){const Ce=re[ue];b.format!==Pt&&b.format!==vn?A!==null?t.compressedTexImage2D(34069+H,ue,V,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):t.texImage2D(34069+H,ue,V,Ce.width,Ce.height,0,A,w,Ce.data)}}S.__maxMipLevel=re.length-1}else{re=b.mipmaps;for(let H=0;H<6;H++)if(se){t.texImage2D(34069+H,0,V,he[H].width,he[H].height,0,A,w,he[H].data);for(let ue=0;ue<re.length;ue++){const We=re[ue].image[H].image;t.texImage2D(34069+H,ue+1,V,We.width,We.height,0,A,w,We.data)}}else{t.texImage2D(34069+H,0,V,A,w,he[H]);for(let ue=0;ue<re.length;ue++){const Ce=re[ue];t.texImage2D(34069+H,ue+1,V,A,w,Ce.image[H])}}S.__maxMipLevel=re.length}T(b,ge)&&E(34067,b,Pe.width,Pe.height),S.__version=b.version,b.onUpdate&&b.onUpdate(b)}function G(S,b,j,X){const se=b.texture,he=s.convert(se.format),Pe=s.convert(se.type),ge=L(se.internalFormat,he,Pe);X===32879||X===35866?t.texImage3D(X,0,ge,b.width,b.height,b.depth,0,he,Pe,null):t.texImage2D(X,0,ge,b.width,b.height,0,he,Pe,null),t.bindFramebuffer(36160,S),n.framebufferTexture2D(36160,j,X,i.get(se).__webglTexture,0),t.bindFramebuffer(36160,null)}function De(S,b,j){if(n.bindRenderbuffer(36161,S),b.depthBuffer&&!b.stencilBuffer){let X=33189;if(j){const se=b.depthTexture;se&&se.isDepthTexture&&(se.type===on?X=36012:se.type===Er&&(X=33190));const he=Te(b);n.renderbufferStorageMultisample(36161,he,X,b.width,b.height)}else n.renderbufferStorage(36161,X,b.width,b.height);n.framebufferRenderbuffer(36160,36096,36161,S)}else if(b.depthBuffer&&b.stencilBuffer){if(j){const X=Te(b);n.renderbufferStorageMultisample(36161,X,35056,b.width,b.height)}else n.renderbufferStorage(36161,34041,b.width,b.height);n.framebufferRenderbuffer(36160,33306,36161,S)}else{const X=b.texture,se=s.convert(X.format),he=s.convert(X.type),Pe=L(X.internalFormat,se,he);if(j){const ge=Te(b);n.renderbufferStorageMultisample(36161,ge,Pe,b.width,b.height)}else n.renderbufferStorage(36161,Pe,b.width,b.height)}n.bindRenderbuffer(36161,null)}function Re(S,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,S),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),C(b.depthTexture,0);const X=i.get(b.depthTexture).__webglTexture;if(b.depthTexture.format===qn)n.framebufferTexture2D(36160,36096,3553,X,0);else if(b.depthTexture.format===Ri)n.framebufferTexture2D(36160,33306,3553,X,0);else throw new Error("Unknown depthTexture format")}function _e(S){const b=i.get(S),j=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture){if(j)throw new Error("target.depthTexture not supported in Cube render targets");Re(b.__webglFramebuffer,S)}else if(j){b.__webglDepthbuffer=[];for(let X=0;X<6;X++)t.bindFramebuffer(36160,b.__webglFramebuffer[X]),b.__webglDepthbuffer[X]=n.createRenderbuffer(),De(b.__webglDepthbuffer[X],S,!1)}else t.bindFramebuffer(36160,b.__webglFramebuffer),b.__webglDepthbuffer=n.createRenderbuffer(),De(b.__webglDepthbuffer,S,!1);t.bindFramebuffer(36160,null)}function pe(S){const b=S.texture,j=i.get(S),X=i.get(b);S.addEventListener("dispose",k),X.__webglTexture=n.createTexture(),X.__version=b.version,o.memory.textures++;const se=S.isWebGLCubeRenderTarget===!0,he=S.isWebGLMultisampleRenderTarget===!0,Pe=b.isDataTexture3D||b.isDataTexture2DArray,ge=g(S)||a;if(a&&b.format===vn&&(b.type===on||b.type===Ar)&&(b.format=Pt,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),se){j.__webglFramebuffer=[];for(let A=0;A<6;A++)j.__webglFramebuffer[A]=n.createFramebuffer()}else if(j.__webglFramebuffer=n.createFramebuffer(),he)if(a){j.__webglMultisampledFramebuffer=n.createFramebuffer(),j.__webglColorRenderbuffer=n.createRenderbuffer(),n.bindRenderbuffer(36161,j.__webglColorRenderbuffer);const A=s.convert(b.format),w=s.convert(b.type),V=L(b.internalFormat,A,w),re=Te(S);n.renderbufferStorageMultisample(36161,re,V,S.width,S.height),t.bindFramebuffer(36160,j.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064,36161,j.__webglColorRenderbuffer),n.bindRenderbuffer(36161,null),S.depthBuffer&&(j.__webglDepthRenderbuffer=n.createRenderbuffer(),De(j.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(se){t.bindTexture(34067,X.__webglTexture),ae(34067,b,ge);for(let A=0;A<6;A++)G(j.__webglFramebuffer[A],S,36064,34069+A);T(b,ge)&&E(34067,b,S.width,S.height),t.bindTexture(34067,null)}else{let A=3553;Pe&&(a?A=b.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),t.bindTexture(A,X.__webglTexture),ae(A,b,ge),G(j.__webglFramebuffer,S,36064,A),T(b,ge)&&E(3553,b,S.width,S.height),t.bindTexture(3553,null)}S.depthBuffer&&_e(S)}function Ie(S){const b=S.texture,j=g(S)||a;if(T(b,j)){const X=S.isWebGLCubeRenderTarget?34067:3553,se=i.get(b).__webglTexture;t.bindTexture(X,se),E(X,b,S.width,S.height),t.bindTexture(X,null)}}function Se(S){if(S.isWebGLMultisampleRenderTarget)if(a){const b=i.get(S);t.bindFramebuffer(36008,b.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,b.__webglFramebuffer);const j=S.width,X=S.height;let se=16384;S.depthBuffer&&(se|=256),S.stencilBuffer&&(se|=1024),n.blitFramebuffer(0,0,j,X,0,0,j,X,se,9728),t.bindFramebuffer(36160,b.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function Te(S){return a&&S.isWebGLMultisampleRenderTarget?Math.min(h,S.samples):0}function $(S){const b=o.render.frame;d.get(S)!==b&&(d.set(S,b),S.update())}let K=!1,te=!1;function ce(S,b){S&&S.isWebGLRenderTarget&&(K===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),K=!0),S=S.texture),C(S,b)}function ie(S,b){S&&S.isWebGLCubeRenderTarget&&(te===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),te=!0),S=S.texture),Y(S,b)}this.allocateTextureUnit=R,this.resetTextureUnits=Z,this.setTexture2D=C,this.setTexture2DArray=I,this.setTexture3D=D,this.setTextureCube=Y,this.setupRenderTarget=pe,this.updateRenderTargetMipmap=Ie,this.updateMultisampleRenderTarget=Se,this.safeSetTexture2D=ce,this.safeSetTextureCube=ie}function Cm(n,e,t){const i=t.isWebGL2;function r(s){let o;if(s===ho)return 5121;if(s===ah)return 32819;if(s===lh)return 32820;if(s===ch)return 33635;if(s===rh)return 5120;if(s===sh)return 5122;if(s===Tr)return 5123;if(s===oh)return 5124;if(s===Er)return 5125;if(s===on)return 5126;if(s===Ar)return i?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===hh)return 6406;if(s===vn)return 6407;if(s===Pt)return 6408;if(s===uh)return 6409;if(s===dh)return 6410;if(s===qn)return 6402;if(s===Ri)return 34041;if(s===fh)return 6403;if(s===ph)return 36244;if(s===mh)return 33319;if(s===gh)return 33320;if(s===_h)return 36248;if(s===vh)return 36249;if(s===Yo||s===Zo||s===Jo||s===$o)if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Yo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Zo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Jo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===$o)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Qo||s===Ko||s===ea||s===ta)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Qo)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ko)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ea)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ta)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===yh)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if((s===na||s===ia)&&(o=e.get("WEBGL_compressed_texture_etc"),o!==null)){if(s===na)return o.COMPRESSED_RGB8_ETC2;if(s===ia)return o.COMPRESSED_RGBA8_ETC2_EAC}if(s===xh||s===bh||s===wh||s===Mh||s===Sh||s===Eh||s===Th||s===Ah||s===Lh||s===Ch||s===Rh||s===Ph||s===Dh||s===Ih||s===Fh||s===Oh||s===Bh||s===zh||s===kh||s===Hh||s===Uh||s===Gh||s===Vh||s===Wh||s===jh||s===Xh||s===qh||s===Yh)return o=e.get("WEBGL_compressed_texture_astc"),o!==null?s:null;if(s===Nh)return o=e.get("EXT_texture_compression_bptc"),o!==null?s:null;if(s===Si)return i?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:r}}class Xl extends ft{constructor(e=[]){super(),this.cameras=e}}Xl.prototype.isArrayCamera=!0;class yi extends be{constructor(){super(),this.type="Group"}}yi.prototype.isGroup=!0;function Ei(){this._targetRay=null,this._grip=null,this._hand=null}Object.assign(Ei.prototype,{constructor:Ei,getHandSpace:function(){return this._hand===null&&(this._hand=new yi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand},getTargetRaySpace:function(){return this._targetRay===null&&(this._targetRay=new yi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1),this._targetRay},getGripSpace:function(){return this._grip===null&&(this._grip=new yi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1),this._grip},dispatchEvent:function(n){return this._targetRay!==null&&this._targetRay.dispatchEvent(n),this._grip!==null&&this._grip.dispatchEvent(n),this._hand!==null&&this._hand.dispatchEvent(n),this},disconnect:function(n){return this.dispatchEvent({type:"disconnected",data:n}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this},update:function(n,e,t){let i=null,r=null,s=null;const o=this._targetRay,a=this._grip,l=this._hand;if(n&&e.session.visibilityState!=="visible-blurred")if(o!==null&&(i=e.getPose(n.targetRaySpace,t),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale))),l&&n.hand){s=!0;for(const p of n.hand.values()){const _=e.getJointPose(p,t);if(l.joints[p.jointName]===void 0){const g=new yi;g.matrixAutoUpdate=!1,g.visible=!1,l.joints[p.jointName]=g,l.add(g)}const v=l.joints[p.jointName];_!==null&&(v.matrix.fromArray(_.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=_.radius),v.visible=_!==null}const c=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],h=c.position.distanceTo(u.position),d=.02,f=.005;l.inputState.pinching&&h>d+f?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:n.handedness,target:this})):!l.inputState.pinching&&h<=d-f&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:n.handedness,target:this}))}else a!==null&&n.gripSpace&&(r=e.getPose(n.gripSpace,t),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale)));return o!==null&&(o.visible=i!==null),a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),this}});function ql(n,e){const t=this,i=n.state;let r=null,s=1,o=null,a="local-floor",l=null;const c=[],u=new Map,h=new ft;h.layers.enable(1),h.viewport=new ke;const d=new ft;d.layers.enable(2),d.viewport=new ke;const f=[h,d],p=new Xl;p.layers.enable(1),p.layers.enable(2);let _=null,v=null;this.enabled=!1,this.isPresenting=!1,this.getController=function(P){let Z=c[P];return Z===void 0&&(Z=new Ei,c[P]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(P){let Z=c[P];return Z===void 0&&(Z=new Ei,c[P]=Z),Z.getGripSpace()},this.getHand=function(P){let Z=c[P];return Z===void 0&&(Z=new Ei,c[P]=Z),Z.getHandSpace()};function g(P){const Z=u.get(P.inputSource);Z&&Z.dispatchEvent({type:P.type,data:P.inputSource})}function m(){u.forEach(function(P,Z){P.disconnect(Z)}),u.clear(),_=null,v=null,i.bindXRFramebuffer(null),n.setRenderTarget(n.getRenderTarget()),q.stop(),t.isPresenting=!1,t.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(P){s=P,t.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(P){a=P,t.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o},this.getSession=function(){return r},this.setSession=async function(P){if(r=P,r!==null){r.addEventListener("select",g),r.addEventListener("selectstart",g),r.addEventListener("selectend",g),r.addEventListener("squeeze",g),r.addEventListener("squeezestart",g),r.addEventListener("squeezeend",g),r.addEventListener("end",m),r.addEventListener("inputsourceschange",T);const Z=e.getContextAttributes();Z.xrCompatible!==!0&&await e.makeXRCompatible();const R={antialias:Z.antialias,alpha:Z.alpha,depth:Z.depth,stencil:Z.stencil,framebufferScaleFactor:s},C=new XRWebGLLayer(r,e,R);r.updateRenderState({baseLayer:C}),o=await r.requestReferenceSpace(a),q.setContext(r),q.start(),t.isPresenting=!0,t.dispatchEvent({type:"sessionstart"})}};function T(P){const Z=r.inputSources;for(let R=0;R<c.length;R++)u.set(Z[R],c[R]);for(let R=0;R<P.removed.length;R++){const C=P.removed[R],I=u.get(C);I&&(I.dispatchEvent({type:"disconnected",data:C}),u.delete(C))}for(let R=0;R<P.added.length;R++){const C=P.added[R],I=u.get(C);I&&I.dispatchEvent({type:"connected",data:C})}}const E=new M,L=new M;function y(P,Z,R){E.setFromMatrixPosition(Z.matrixWorld),L.setFromMatrixPosition(R.matrixWorld);const C=E.distanceTo(L),I=Z.projectionMatrix.elements,D=R.projectionMatrix.elements,Y=I[14]/(I[10]-1),ee=I[14]/(I[10]+1),Q=(I[9]+1)/I[5],ae=(I[9]-1)/I[5],le=(I[8]-1)/I[0],me=(D[8]+1)/D[0],ve=Y*le,G=Y*me,De=C/(-le+me),Re=De*-le;Z.matrixWorld.decompose(P.position,P.quaternion,P.scale),P.translateX(Re),P.translateZ(De),P.matrixWorld.compose(P.position,P.quaternion,P.scale),P.matrixWorldInverse.copy(P.matrixWorld).invert();const _e=Y+De,pe=ee+De,Ie=ve-Re,Se=G+(C-Re),Te=Q*ee/pe*_e,$=ae*ee/pe*_e;P.projectionMatrix.makePerspective(Ie,Se,Te,$,_e,pe)}function O(P,Z){Z===null?P.matrixWorld.copy(P.matrix):P.matrixWorld.multiplyMatrices(Z.matrixWorld,P.matrix),P.matrixWorldInverse.copy(P.matrixWorld).invert()}this.getCamera=function(P){p.near=d.near=h.near=P.near,p.far=d.far=h.far=P.far,(_!==p.near||v!==p.far)&&(r.updateRenderState({depthNear:p.near,depthFar:p.far}),_=p.near,v=p.far);const Z=P.parent,R=p.cameras;O(p,Z);for(let I=0;I<R.length;I++)O(R[I],Z);P.matrixWorld.copy(p.matrixWorld),P.matrix.copy(p.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale);const C=P.children;for(let I=0,D=C.length;I<D;I++)C[I].updateMatrixWorld(!0);return R.length===2?y(p,h,d):p.projectionMatrix.copy(h.projectionMatrix),p};let k=null;function B(P,Z){if(l=Z.getViewerPose(o),l!==null){const C=l.views,I=r.renderState.baseLayer;i.bindXRFramebuffer(I.framebuffer);let D=!1;C.length!==p.cameras.length&&(p.cameras.length=0,D=!0);for(let Y=0;Y<C.length;Y++){const ee=C[Y],Q=I.getViewport(ee),ae=f[Y];ae.matrix.fromArray(ee.transform.matrix),ae.projectionMatrix.fromArray(ee.projectionMatrix),ae.viewport.set(Q.x,Q.y,Q.width,Q.height),Y===0&&p.matrix.copy(ae.matrix),D===!0&&p.cameras.push(ae)}}const R=r.inputSources;for(let C=0;C<c.length;C++){const I=c[C],D=R[C];I.update(D,Z,o)}k&&k(P,Z)}const q=new Dl;q.setAnimationLoop(B),this.setAnimationLoop=function(P){k=P},this.dispose=function(){}}Object.assign(ql.prototype,Ut.prototype);function Rm(n){function e(g,m){g.fogColor.value.copy(m.color),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function t(g,m,T,E){m.isMeshBasicMaterial?i(g,m):m.isMeshLambertMaterial?(i(g,m),l(g,m)):m.isMeshToonMaterial?(i(g,m),u(g,m)):m.isMeshPhongMaterial?(i(g,m),c(g,m)):m.isMeshStandardMaterial?(i(g,m),m.isMeshPhysicalMaterial?d(g,m):h(g,m)):m.isMeshMatcapMaterial?(i(g,m),f(g,m)):m.isMeshDepthMaterial?(i(g,m),p(g,m)):m.isMeshDistanceMaterial?(i(g,m),_(g,m)):m.isMeshNormalMaterial?(i(g,m),v(g,m)):m.isLineBasicMaterial?(r(g,m),m.isLineDashedMaterial&&s(g,m)):m.isPointsMaterial?o(g,m,T,E):m.isSpriteMaterial?a(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function i(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map),m.alphaMap&&(g.alphaMap.value=m.alphaMap),m.specularMap&&(g.specularMap.value=m.specularMap);const T=n.get(m).envMap;if(T){g.envMap.value=T,g.flipEnvMap.value=T.isCubeTexture&&T._needsFlipEnvMap?-1:1,g.reflectivity.value=m.reflectivity,g.refractionRatio.value=m.refractionRatio;const y=n.get(T).__maxMipLevel;y!==void 0&&(g.maxMipLevel.value=y)}m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity);let E;m.map?E=m.map:m.specularMap?E=m.specularMap:m.displacementMap?E=m.displacementMap:m.normalMap?E=m.normalMap:m.bumpMap?E=m.bumpMap:m.roughnessMap?E=m.roughnessMap:m.metalnessMap?E=m.metalnessMap:m.alphaMap?E=m.alphaMap:m.emissiveMap?E=m.emissiveMap:m.clearcoatMap?E=m.clearcoatMap:m.clearcoatNormalMap?E=m.clearcoatNormalMap:m.clearcoatRoughnessMap&&(E=m.clearcoatRoughnessMap),E!==void 0&&(E.isWebGLRenderTarget&&(E=E.texture),E.matrixAutoUpdate===!0&&E.updateMatrix(),g.uvTransform.value.copy(E.matrix));let L;m.aoMap?L=m.aoMap:m.lightMap&&(L=m.lightMap),L!==void 0&&(L.isWebGLRenderTarget&&(L=L.texture),L.matrixAutoUpdate===!0&&L.updateMatrix(),g.uv2Transform.value.copy(L.matrix))}function r(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity}function s(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function o(g,m,T,E){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*T,g.scale.value=E*.5,m.map&&(g.map.value=m.map),m.alphaMap&&(g.alphaMap.value=m.alphaMap);let L;m.map?L=m.map:m.alphaMap&&(L=m.alphaMap),L!==void 0&&(L.matrixAutoUpdate===!0&&L.updateMatrix(),g.uvTransform.value.copy(L.matrix))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map),m.alphaMap&&(g.alphaMap.value=m.alphaMap);let T;m.map?T=m.map:m.alphaMap&&(T=m.alphaMap),T!==void 0&&(T.matrixAutoUpdate===!0&&T.updateMatrix(),g.uvTransform.value.copy(T.matrix))}function l(g,m){m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap)}function c(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap),m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===tt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===tt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap),m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===tt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===tt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}function h(g,m){g.roughness.value=m.roughness,g.metalness.value=m.metalness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap),m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===tt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===tt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),n.get(m).envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m){h(g,m),g.reflectivity.value=m.reflectivity,g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.sheen&&g.sheen.value.copy(m.sheen),m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),g.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===tt&&g.clearcoatNormalScale.value.negate()),g.transmission.value=m.transmission,m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap)}function f(g,m){m.matcap&&(g.matcap.value=m.matcap),m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===tt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===tt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}function p(g,m){m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}function _(g,m){m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),g.referencePosition.value.copy(m.referencePosition),g.nearDistance.value=m.nearDistance,g.farDistance.value=m.farDistance}function v(g,m){m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===tt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===tt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function Pm(){const n=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");return n.style.display="block",n}function He(n){n=n||{};const e=n.canvas!==void 0?n.canvas:Pm(),t=n.context!==void 0?n.context:null,i=n.alpha!==void 0?n.alpha:!1,r=n.depth!==void 0?n.depth:!0,s=n.stencil!==void 0?n.stencil:!0,o=n.antialias!==void 0?n.antialias:!1,a=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,l=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,c=n.powerPreference!==void 0?n.powerPreference:"default",u=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let h=null,d=null;const f=[],p=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=Vi,this.physicallyCorrectLights=!1,this.toneMapping=Mi,this.toneMappingExposure=1;const _=this;let v=!1,g=0,m=0,T=null,E=-1,L=null;const y=new ke,O=new ke;let k=null,B=e.width,q=e.height,P=1,Z=null,R=null;const C=new ke(0,0,B,q),I=new ke(0,0,B,q);let D=!1;const Y=new Wr;let ee=!1,Q=!1;const ae=new de,le=new M,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ve(){return T===null?P:1}let G=t;function De(x,z){for(let N=0;N<x.length;N++){const U=x[N],oe=e.getContext(U,z);if(oe!==null)return oe}return null}try{const x={alpha:i,depth:r,stencil:s,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if(e.addEventListener("webglcontextlost",ue,!1),e.addEventListener("webglcontextrestored",Ce,!1),G===null){const z=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&z.shift(),G=De(z,x),G===null)throw De(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let Re,_e,pe,Ie,Se,Te,$,K,te,ce,ie,S,b,j,X,se,he,Pe,ge,A,w,V;function re(){Re=new tp(G),_e=new Qf(G,Re,n),Re.init(_e),w=new Cm(G,Re,_e),pe=new Am(G,Re,_e),Ie=new rp,Se=new mm,Te=new Lm(G,Re,pe,Se,_e,w,Ie),$=new ep(_),K=new Tu(G,_e),V=new Jf(G,Re,K,_e),te=new np(G,K,Ie,V),ce=new lp(G,te,K,Ie),Pe=new ap(G),X=new Kf(Se),ie=new pm(_,$,Re,_e,V,X),S=new Rm(Se),b=new vm(Se),j=new Sm(Re,_e),he=new Zf(_,$,pe,ce,a),se=new jl(_,ce,_e),ge=new $f(G,Re,Ie,_e),A=new ip(G,Re,Ie,_e),Ie.programs=ie.programs,_.capabilities=_e,_.extensions=Re,_.properties=Se,_.renderLists=b,_.shadowMap=se,_.state=pe,_.info=Ie}re();const H=new ql(_,G);this.xr=H,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const x=Re.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Re.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return P},this.setPixelRatio=function(x){x!==void 0&&(P=x,this.setSize(B,q,!1))},this.getSize=function(x){return x===void 0&&(console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),x=new J),x.set(B,q)},this.setSize=function(x,z,N){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=x,q=z,e.width=Math.floor(x*P),e.height=Math.floor(z*P),N!==!1&&(e.style.width=x+"px",e.style.height=z+"px"),this.setViewport(0,0,x,z)},this.getDrawingBufferSize=function(x){return x===void 0&&(console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),x=new J),x.set(B*P,q*P).floor()},this.setDrawingBufferSize=function(x,z,N){B=x,q=z,P=N,e.width=Math.floor(x*N),e.height=Math.floor(z*N),this.setViewport(0,0,x,z)},this.getCurrentViewport=function(x){return x===void 0&&(console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),x=new ke),x.copy(y)},this.getViewport=function(x){return x.copy(C)},this.setViewport=function(x,z,N,U){x.isVector4?C.set(x.x,x.y,x.z,x.w):C.set(x,z,N,U),pe.viewport(y.copy(C).multiplyScalar(P).floor())},this.getScissor=function(x){return x.copy(I)},this.setScissor=function(x,z,N,U){x.isVector4?I.set(x.x,x.y,x.z,x.w):I.set(x,z,N,U),pe.scissor(O.copy(I).multiplyScalar(P).floor())},this.getScissorTest=function(){return D},this.setScissorTest=function(x){pe.setScissorTest(D=x)},this.setOpaqueSort=function(x){Z=x},this.setTransparentSort=function(x){R=x},this.getClearColor=function(x){return x===void 0&&(console.warn("WebGLRenderer: .getClearColor() now requires a Color as an argument"),x=new fe),x.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor.apply(he,arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha.apply(he,arguments)},this.clear=function(x,z,N){let U=0;(x===void 0||x)&&(U|=16384),(z===void 0||z)&&(U|=256),(N===void 0||N)&&(U|=1024),G.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ue,!1),e.removeEventListener("webglcontextrestored",Ce,!1),b.dispose(),j.dispose(),Se.dispose(),$.dispose(),ce.dispose(),V.dispose(),H.dispose(),H.removeEventListener("sessionstart",Po),H.removeEventListener("sessionend",Do),fn.stop()};function ue(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function Ce(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const x=Ie.autoReset,z=se.enabled,N=se.autoUpdate,U=se.needsUpdate,oe=se.type;re(),Ie.autoReset=x,se.enabled=z,se.autoUpdate=N,se.needsUpdate=U,se.type=oe}function We(x){const z=x.target;z.removeEventListener("dispose",We),Nt(z)}function Nt(x){Oe(x),Se.remove(x)}function Oe(x){const z=Se.get(x).programs;z!==void 0&&z.forEach(function(N){ie.releaseProgram(N)})}function Qe(x,z){x.render(function(N){_.renderBufferImmediate(N,z)})}this.renderBufferImmediate=function(x,z){V.initAttributes();const N=Se.get(x);x.hasPositions&&!N.position&&(N.position=G.createBuffer()),x.hasNormals&&!N.normal&&(N.normal=G.createBuffer()),x.hasUvs&&!N.uv&&(N.uv=G.createBuffer()),x.hasColors&&!N.color&&(N.color=G.createBuffer());const U=z.getAttributes();x.hasPositions&&(G.bindBuffer(34962,N.position),G.bufferData(34962,x.positionArray,35048),V.enableAttribute(U.position),G.vertexAttribPointer(U.position,3,5126,!1,0,0)),x.hasNormals&&(G.bindBuffer(34962,N.normal),G.bufferData(34962,x.normalArray,35048),V.enableAttribute(U.normal),G.vertexAttribPointer(U.normal,3,5126,!1,0,0)),x.hasUvs&&(G.bindBuffer(34962,N.uv),G.bufferData(34962,x.uvArray,35048),V.enableAttribute(U.uv),G.vertexAttribPointer(U.uv,2,5126,!1,0,0)),x.hasColors&&(G.bindBuffer(34962,N.color),G.bufferData(34962,x.colorArray,35048),V.enableAttribute(U.color),G.vertexAttribPointer(U.color,3,5126,!1,0,0)),V.disableUnusedAttributes(),G.drawArrays(4,0,x.count),x.count=0},this.renderBufferDirect=function(x,z,N,U,oe,Ne){z===null&&(z=me);const ye=oe.isMesh&&oe.matrixWorld.determinant()<0,Ee=Bo(x,z,U,oe);pe.setMaterial(U,ye);let Ue=N.index;const we=N.attributes.position;if(Ue===null){if(we===void 0||we.count===0)return}else if(Ue.count===0)return;let Fe=1;U.wireframe===!0&&(Ue=te.getWireframeAttribute(N),Fe=2),(U.morphTargets||U.morphNormals)&&Pe.update(oe,N,U,Ee),V.setup(oe,U,Ee,N,Ue);let xe,ze=ge;Ue!==null&&(xe=K.get(Ue),ze=A,ze.setIndex(xe));const Ft=Ue!==null?Ue.count:we.count,dt=N.drawRange.start*Fe,pn=N.drawRange.count*Fe,Ke=Ne!==null?Ne.start*Fe:0,mn=Ne!==null?Ne.count*Fe:1/0,Je=Math.max(dt,Ke),Jr=Math.min(Ft,dt+pn,Ke+mn)-1,gt=Math.max(0,Jr-Je+1);if(gt!==0){if(oe.isMesh)U.wireframe===!0?(pe.setLineWidth(U.wireframeLinewidth*ve()),ze.setMode(1)):ze.setMode(4);else if(oe.isLine){let Vt=U.linewidth;Vt===void 0&&(Vt=1),pe.setLineWidth(Vt*ve()),oe.isLineSegments?ze.setMode(1):oe.isLineLoop?ze.setMode(2):ze.setMode(3)}else oe.isPoints?ze.setMode(0):oe.isSprite&&ze.setMode(4);if(oe.isInstancedMesh)ze.renderInstances(Je,gt,oe.count);else if(N.isInstancedBufferGeometry){const Vt=Math.min(N.instanceCount,N._maxInstanceCount);ze.renderInstances(Je,gt,Vt)}else ze.render(Je,gt)}},this.compile=function(x,z){d=j.get(x),d.init(),x.traverseVisible(function(N){N.isLight&&N.layers.test(z.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),d.setupLights(),x.traverse(function(N){const U=N.material;if(U)if(Array.isArray(U))for(let oe=0;oe<U.length;oe++){const Ne=U[oe];Zr(Ne,x,N)}else Zr(U,x,N)})};let Tt=null;function Sc(x){Tt&&Tt(x)}function Po(){fn.stop()}function Do(){fn.start()}const fn=new Dl;fn.setAnimationLoop(Sc),typeof window<"u"&&fn.setContext(window),this.setAnimationLoop=function(x){Tt=x,H.setAnimationLoop(x),x===null?fn.stop():fn.start()},H.addEventListener("sessionstart",Po),H.addEventListener("sessionend",Do),this.render=function(x,z){let N,U;if(arguments[2]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."),N=arguments[2]),arguments[3]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."),U=arguments[3]),z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;x.autoUpdate===!0&&x.updateMatrixWorld(),z.parent===null&&z.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(z=H.getCamera(z)),x.isScene===!0&&x.onBeforeRender(_,x,z,N||T),d=j.get(x,p.length),d.init(),p.push(d),ae.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Y.setFromProjectionMatrix(ae),Q=this.localClippingEnabled,ee=X.init(this.clippingPlanes,Q,z),h=b.get(x,f.length),h.init(),f.push(h),Io(x,z,0,_.sortObjects),h.finish(),_.sortObjects===!0&&h.sort(Z,R),ee===!0&&X.beginShadows();const oe=d.state.shadowsArray;se.render(oe,x,z),d.setupLights(),d.setupLightsView(z),ee===!0&&X.endShadows(),this.info.autoReset===!0&&this.info.reset(),N!==void 0&&this.setRenderTarget(N),he.render(h,x,z,U);const Ne=h.opaque,ye=h.transparent;Ne.length>0&&No(Ne,x,z),ye.length>0&&No(ye,x,z),T!==null&&(Te.updateRenderTargetMipmap(T),Te.updateMultisampleRenderTarget(T)),x.isScene===!0&&x.onAfterRender(_,x,z),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1),V.resetDefaultState(),E=-1,L=null,p.pop(),p.length>0?d=p[p.length-1]:d=null,f.pop(),f.length>0?h=f[f.length-1]:h=null};function Io(x,z,N,U){if(x.visible===!1)return;if(x.layers.test(z.layers)){if(x.isGroup)N=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(z);else if(x.isLight)d.pushLight(x),x.castShadow&&d.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Y.intersectsSprite(x)){U&&le.setFromMatrixPosition(x.matrixWorld).applyMatrix4(ae);const ye=ce.update(x),Ee=x.material;Ee.visible&&h.push(x,ye,Ee,N,le.z,null)}}else if(x.isImmediateRenderObject)U&&le.setFromMatrixPosition(x.matrixWorld).applyMatrix4(ae),h.push(x,null,x.material,N,le.z,null);else if((x.isMesh||x.isLine||x.isPoints)&&(x.isSkinnedMesh&&x.skeleton.frame!==Ie.render.frame&&(x.skeleton.update(),x.skeleton.frame=Ie.render.frame),!x.frustumCulled||Y.intersectsObject(x))){U&&le.setFromMatrixPosition(x.matrixWorld).applyMatrix4(ae);const ye=ce.update(x),Ee=x.material;if(Array.isArray(Ee)){const Ue=ye.groups;for(let we=0,Fe=Ue.length;we<Fe;we++){const xe=Ue[we],ze=Ee[xe.materialIndex];ze&&ze.visible&&h.push(x,ye,ze,N,le.z,xe)}}else Ee.visible&&h.push(x,ye,Ee,N,le.z,null)}}const Ne=x.children;for(let ye=0,Ee=Ne.length;ye<Ee;ye++)Io(Ne[ye],z,N,U)}function No(x,z,N){const U=z.isScene===!0?z.overrideMaterial:null;for(let oe=0,Ne=x.length;oe<Ne;oe++){const ye=x[oe],Ee=ye.object,Ue=ye.geometry,we=U===null?ye.material:U,Fe=ye.group;if(N.isArrayCamera){const xe=N.cameras;for(let ze=0,Ft=xe.length;ze<Ft;ze++){const dt=xe[ze];Ee.layers.test(dt.layers)&&(pe.viewport(y.copy(dt.viewport)),d.setupLightsView(dt),Fo(Ee,z,dt,Ue,we,Fe))}}else Fo(Ee,z,N,Ue,we,Fe)}}function Fo(x,z,N,U,oe,Ne){if(x.onBeforeRender(_,z,N,U,oe,Ne),x.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),x.isImmediateRenderObject){const ye=Bo(N,z,oe,x);pe.setMaterial(oe),V.reset(),Qe(x,ye)}else _.renderBufferDirect(N,z,U,oe,x,Ne);x.onAfterRender(_,z,N,U,oe,Ne)}function Zr(x,z,N){z.isScene!==!0&&(z=me);const U=Se.get(x),oe=d.state.lights,Ne=d.state.shadowsArray,ye=oe.state.version,Ee=ie.getParameters(x,oe.state,Ne,z,N),Ue=ie.getProgramCacheKey(Ee);let we=U.programs;U.environment=x.isMeshStandardMaterial?z.environment:null,U.fog=z.fog,U.envMap=$.get(x.envMap||U.environment),we===void 0&&(x.addEventListener("dispose",We),we=new Map,U.programs=we);let Fe=we.get(Ue);if(Fe!==void 0){if(U.currentProgram===Fe&&U.lightsStateVersion===ye)return Oo(x,Ee),Fe}else Ee.uniforms=ie.getUniforms(x),x.onBeforeCompile(Ee,_),Fe=ie.acquireProgram(Ee,Ue),we.set(Ue,Fe),U.uniforms=Ee.uniforms;const xe=U.uniforms;(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(xe.clippingPlanes=X.uniform),Oo(x,Ee),U.needsLights=Tc(x),U.lightsStateVersion=ye,U.needsLights&&(xe.ambientLightColor.value=oe.state.ambient,xe.lightProbe.value=oe.state.probe,xe.directionalLights.value=oe.state.directional,xe.directionalLightShadows.value=oe.state.directionalShadow,xe.spotLights.value=oe.state.spot,xe.spotLightShadows.value=oe.state.spotShadow,xe.rectAreaLights.value=oe.state.rectArea,xe.ltc_1.value=oe.state.rectAreaLTC1,xe.ltc_2.value=oe.state.rectAreaLTC2,xe.pointLights.value=oe.state.point,xe.pointLightShadows.value=oe.state.pointShadow,xe.hemisphereLights.value=oe.state.hemi,xe.directionalShadowMap.value=oe.state.directionalShadowMap,xe.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,xe.spotShadowMap.value=oe.state.spotShadowMap,xe.spotShadowMatrix.value=oe.state.spotShadowMatrix,xe.pointShadowMap.value=oe.state.pointShadowMap,xe.pointShadowMatrix.value=oe.state.pointShadowMatrix);const ze=Fe.getUniforms(),Ft=an.seqWithValue(ze.seq,xe);return U.currentProgram=Fe,U.uniformsList=Ft,Fe}function Oo(x,z){const N=Se.get(x);N.outputEncoding=z.outputEncoding,N.instancing=z.instancing,N.numClippingPlanes=z.numClippingPlanes,N.numIntersection=z.numClipIntersection,N.vertexAlphas=z.vertexAlphas}function Bo(x,z,N,U){z.isScene!==!0&&(z=me),Te.resetTextureUnits();const oe=z.fog,Ne=N.isMeshStandardMaterial?z.environment:null,ye=T===null?_.outputEncoding:T.texture.encoding,Ee=$.get(N.envMap||Ne),Ue=N.vertexColors===!0&&U.geometry.attributes.color&&U.geometry.attributes.color.itemSize===4,we=Se.get(N),Fe=d.state.lights;if(ee===!0&&(Q===!0||x!==L)){const Je=x===L&&N.id===E;X.setState(N,x,Je)}let xe=!1;N.version===we.__version?(we.needsLights&&we.lightsStateVersion!==Fe.state.version||we.outputEncoding!==ye||U.isInstancedMesh&&we.instancing===!1||!U.isInstancedMesh&&we.instancing===!0||we.envMap!==Ee||N.fog&&we.fog!==oe||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==X.numPlanes||we.numIntersection!==X.numIntersection)||we.vertexAlphas!==Ue)&&(xe=!0):(xe=!0,we.__version=N.version);let ze=we.currentProgram;xe===!0&&(ze=Zr(N,z,U));let Ft=!1,dt=!1,pn=!1;const Ke=ze.getUniforms(),mn=we.uniforms;if(pe.useProgram(ze.program)&&(Ft=!0,dt=!0,pn=!0),N.id!==E&&(E=N.id,dt=!0),Ft||L!==x){if(Ke.setValue(G,"projectionMatrix",x.projectionMatrix),_e.logarithmicDepthBuffer&&Ke.setValue(G,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),L!==x&&(L=x,dt=!0,pn=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){const Je=Ke.map.cameraPosition;Je!==void 0&&Je.setValue(G,le.setFromMatrixPosition(x.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&Ke.setValue(G,"isOrthographic",x.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||N.skinning)&&Ke.setValue(G,"viewMatrix",x.matrixWorldInverse)}if(N.skinning){Ke.setOptional(G,U,"bindMatrix"),Ke.setOptional(G,U,"bindMatrixInverse");const Je=U.skeleton;if(Je){const Jr=Je.bones;if(_e.floatVertexTextures){if(Je.boneTexture===null){let gt=Math.sqrt(Jr.length*4);gt=Me.ceilPowerOfTwo(gt),gt=Math.max(gt,4);const Vt=new Float32Array(gt*gt*4);Vt.set(Je.boneMatrices);const Ac=new _o(Vt,gt,gt,Pt,on);Je.boneMatrices=Vt,Je.boneTexture=Ac,Je.boneTextureSize=gt}Ke.setValue(G,"boneTexture",Je.boneTexture,Te),Ke.setValue(G,"boneTextureSize",Je.boneTextureSize)}else Ke.setOptional(G,Je,"boneMatrices")}}return(dt||we.receiveShadow!==U.receiveShadow)&&(we.receiveShadow=U.receiveShadow,Ke.setValue(G,"receiveShadow",U.receiveShadow)),dt&&(Ke.setValue(G,"toneMappingExposure",_.toneMappingExposure),we.needsLights&&Ec(mn,pn),oe&&N.fog&&S.refreshFogUniforms(mn,oe),S.refreshMaterialUniforms(mn,N,P,q),an.upload(G,we.uniformsList,mn,Te)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(an.upload(G,we.uniformsList,mn,Te),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&Ke.setValue(G,"center",U.center),Ke.setValue(G,"modelViewMatrix",U.modelViewMatrix),Ke.setValue(G,"normalMatrix",U.normalMatrix),Ke.setValue(G,"modelMatrix",U.matrixWorld),ze}function Ec(x,z){x.ambientLightColor.needsUpdate=z,x.lightProbe.needsUpdate=z,x.directionalLights.needsUpdate=z,x.directionalLightShadows.needsUpdate=z,x.pointLights.needsUpdate=z,x.pointLightShadows.needsUpdate=z,x.spotLights.needsUpdate=z,x.spotLightShadows.needsUpdate=z,x.rectAreaLights.needsUpdate=z,x.hemisphereLights.needsUpdate=z}function Tc(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return m},this.getRenderTarget=function(){return T},this.setRenderTarget=function(x,z=0,N=0){T=x,g=z,m=N,x&&Se.get(x).__webglFramebuffer===void 0&&Te.setupRenderTarget(x);let U=null,oe=!1,Ne=!1;if(x){const ye=x.texture;(ye.isDataTexture3D||ye.isDataTexture2DArray)&&(Ne=!0);const Ee=Se.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(U=Ee[z],oe=!0):x.isWebGLMultisampleRenderTarget?U=Se.get(x).__webglMultisampledFramebuffer:U=Ee,y.copy(x.viewport),O.copy(x.scissor),k=x.scissorTest}else y.copy(C).multiplyScalar(P).floor(),O.copy(I).multiplyScalar(P).floor(),k=D;if(pe.bindFramebuffer(36160,U),pe.viewport(y),pe.scissor(O),pe.setScissorTest(k),oe){const ye=Se.get(x.texture);G.framebufferTexture2D(36160,36064,34069+z,ye.__webglTexture,N)}else if(Ne){const ye=Se.get(x.texture),Ee=z||0;G.framebufferTextureLayer(36160,36064,ye.__webglTexture,N||0,Ee)}},this.readRenderTargetPixels=function(x,z,N,U,oe,Ne,ye){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Se.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ye!==void 0&&(Ee=Ee[ye]),Ee){pe.bindFramebuffer(36160,Ee);try{const Ue=x.texture,we=Ue.format,Fe=Ue.type;if(we!==Pt&&w.convert(we)!==G.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const xe=Fe===Ar&&(Re.has("EXT_color_buffer_half_float")||_e.isWebGL2&&Re.has("EXT_color_buffer_float"));if(Fe!==ho&&w.convert(Fe)!==G.getParameter(35738)&&!(Fe===on&&(_e.isWebGL2||Re.has("OES_texture_float")||Re.has("WEBGL_color_buffer_float")))&&!xe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G.checkFramebufferStatus(36160)===36053?z>=0&&z<=x.width-U&&N>=0&&N<=x.height-oe&&G.readPixels(z,N,U,oe,w.convert(we),w.convert(Fe),Ne):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{const Ue=T!==null?Se.get(T).__webglFramebuffer:null;pe.bindFramebuffer(36160,Ue)}}},this.copyFramebufferToTexture=function(x,z,N=0){const U=Math.pow(2,-N),oe=Math.floor(z.image.width*U),Ne=Math.floor(z.image.height*U),ye=w.convert(z.format);Te.setTexture2D(z,0),G.copyTexImage2D(3553,N,ye,x.x,x.y,oe,Ne,0),pe.unbindTexture()},this.copyTextureToTexture=function(x,z,N,U=0){const oe=z.image.width,Ne=z.image.height,ye=w.convert(N.format),Ee=w.convert(N.type);Te.setTexture2D(N,0),G.pixelStorei(37440,N.flipY),G.pixelStorei(37441,N.premultiplyAlpha),G.pixelStorei(3317,N.unpackAlignment),z.isDataTexture?G.texSubImage2D(3553,U,x.x,x.y,oe,Ne,ye,Ee,z.image.data):z.isCompressedTexture?G.compressedTexSubImage2D(3553,U,x.x,x.y,z.mipmaps[0].width,z.mipmaps[0].height,ye,z.mipmaps[0].data):G.texSubImage2D(3553,U,x.x,x.y,ye,Ee,z.image),U===0&&N.generateMipmaps&&G.generateMipmap(3553),pe.unbindTexture()},this.copyTextureToTexture3D=function(x,z,N,U,oe=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const{width:Ne,height:ye,data:Ee}=N.image,Ue=w.convert(U.format),we=w.convert(U.type);let Fe;if(U.isDataTexture3D)Te.setTexture3D(U,0),Fe=32879;else if(U.isDataTexture2DArray)Te.setTexture2DArray(U,0),Fe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(37440,U.flipY),G.pixelStorei(37441,U.premultiplyAlpha),G.pixelStorei(3317,U.unpackAlignment);const xe=G.getParameter(3314),ze=G.getParameter(32878),Ft=G.getParameter(3316),dt=G.getParameter(3315),pn=G.getParameter(32877);G.pixelStorei(3314,Ne),G.pixelStorei(32878,ye),G.pixelStorei(3316,x.min.x),G.pixelStorei(3315,x.min.y),G.pixelStorei(32877,x.min.z),G.texSubImage3D(Fe,oe,z.x,z.y,z.z,x.max.x-x.min.x+1,x.max.y-x.min.y+1,x.max.z-x.min.z+1,Ue,we,Ee),G.pixelStorei(3314,xe),G.pixelStorei(32878,ze),G.pixelStorei(3316,Ft),G.pixelStorei(3315,dt),G.pixelStorei(32877,pn),oe===0&&U.generateMipmaps&&G.generateMipmap(Fe),pe.unbindTexture()},this.initTexture=function(x){Te.setTexture2D(x,0),pe.unbindTexture()},this.resetState=function(){g=0,m=0,T=null,pe.reset(),V.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Dm extends He{}Dm.prototype.isWebGL1Renderer=!0;class vo extends be{constructor(){super(),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.background!==null&&(t.object.background=this.background.toJSON(e)),this.environment!==null&&(t.object.environment=this.environment.toJSON(e)),this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}vo.prototype.isScene=!0;function bt(n,e){this.array=n,this.stride=e,this.count=n!==void 0?n.length/e:0,this.usage=Wi,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Me.generateUUID()}Object.defineProperty(bt.prototype,"needsUpdate",{set:function(n){n===!0&&this.version++}});Object.assign(bt.prototype,{isInterleavedBuffer:!0,onUploadCallback:function(){},setUsage:function(n){return this.usage=n,this},copy:function(n){return this.array=new n.array.constructor(n.array),this.count=n.count,this.stride=n.stride,this.usage=n.usage,this},copyAt:function(n,e,t){n*=this.stride,t*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[n+i]=e.array[t+i];return this},set:function(n,e=0){return this.array.set(n,e),this},clone:function(n){n.arrayBuffers===void 0&&(n.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Me.generateUUID()),n.arrayBuffers[this.array.buffer._uuid]===void 0&&(n.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(n.arrayBuffers[this.array.buffer._uuid]),t=new bt(e,this.stride);return t.setUsage(this.usage),t},onUpload:function(n){return this.onUploadCallback=n,this},toJSON:function(n){return n.arrayBuffers===void 0&&(n.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Me.generateUUID()),n.arrayBuffers[this.array.buffer._uuid]===void 0&&(n.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}});const Ze=new M;function Ni(n,e,t,i){this.name="",this.data=n,this.itemSize=e,this.offset=t,this.normalized=i===!0}Object.defineProperties(Ni.prototype,{count:{get:function(){return this.data.count}},array:{get:function(){return this.data.array}},needsUpdate:{set:function(n){this.data.needsUpdate=n}}});Object.assign(Ni.prototype,{isInterleavedBufferAttribute:!0,applyMatrix4:function(n){for(let e=0,t=this.data.count;e<t;e++)Ze.x=this.getX(e),Ze.y=this.getY(e),Ze.z=this.getZ(e),Ze.applyMatrix4(n),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this},applyNormalMatrix:function(n){for(let e=0,t=this.count;e<t;e++)Ze.x=this.getX(e),Ze.y=this.getY(e),Ze.z=this.getZ(e),Ze.applyNormalMatrix(n),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this},transformDirection:function(n){for(let e=0,t=this.count;e<t;e++)Ze.x=this.getX(e),Ze.y=this.getY(e),Ze.z=this.getZ(e),Ze.transformDirection(n),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this},setX:function(n,e){return this.data.array[n*this.data.stride+this.offset]=e,this},setY:function(n,e){return this.data.array[n*this.data.stride+this.offset+1]=e,this},setZ:function(n,e){return this.data.array[n*this.data.stride+this.offset+2]=e,this},setW:function(n,e){return this.data.array[n*this.data.stride+this.offset+3]=e,this},getX:function(n){return this.data.array[n*this.data.stride+this.offset]},getY:function(n){return this.data.array[n*this.data.stride+this.offset+1]},getZ:function(n){return this.data.array[n*this.data.stride+this.offset+2]},getW:function(n){return this.data.array[n*this.data.stride+this.offset+3]},setXY:function(n,e,t){return n=n*this.data.stride+this.offset,this.data.array[n+0]=e,this.data.array[n+1]=t,this},setXYZ:function(n,e,t,i){return n=n*this.data.stride+this.offset,this.data.array[n+0]=e,this.data.array[n+1]=t,this.data.array[n+2]=i,this},setXYZW:function(n,e,t,i,r){return n=n*this.data.stride+this.offset,this.data.array[n+0]=e,this.data.array[n+1]=t,this.data.array[n+2]=i,this.data.array[n+3]=r,this},clone:function(n){if(n===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const e=[];for(let t=0;t<this.count;t++){const i=t*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Ae(new this.array.constructor(e),this.itemSize,this.normalized)}else return n.interleavedBuffers===void 0&&(n.interleavedBuffers={}),n.interleavedBuffers[this.data.uuid]===void 0&&(n.interleavedBuffers[this.data.uuid]=this.data.clone(n)),new Ni(n.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)},toJSON:function(n){if(n===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const e=[];for(let t=0;t<this.count;t++){const i=t*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return n.interleavedBuffers===void 0&&(n.interleavedBuffers={}),n.interleavedBuffers[this.data.uuid]===void 0&&(n.interleavedBuffers[this.data.uuid]=this.data.toJSON(n)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}});class Yl extends Ye{constructor(e){super(),this.type="SpriteMaterial",this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}}Yl.prototype.isSpriteMaterial=!0;let On;const hi=new M,Bn=new M,zn=new M,kn=new J,ui=new J,Zl=new de,ur=new M,di=new M,dr=new M,Ra=new J,Ms=new J,Pa=new J;class Im extends be{constructor(e){if(super(),this.type="Sprite",On===void 0){On=new Be;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new bt(t,5);On.setIndex([0,1,2,0,2,3]),On.setAttribute("position",new Ni(i,3,0,!1)),On.setAttribute("uv",new Ni(i,2,3,!1))}this.geometry=On,this.material=e!==void 0?e:new Yl,this.center=new J(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Bn.setFromMatrixScale(this.matrixWorld),Zl.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),zn.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Bn.multiplyScalar(-zn.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;fr(ur.set(-.5,-.5,0),zn,o,Bn,r,s),fr(di.set(.5,-.5,0),zn,o,Bn,r,s),fr(dr.set(.5,.5,0),zn,o,Bn,r,s),Ra.set(0,0),Ms.set(1,0),Pa.set(1,1);let a=e.ray.intersectTriangle(ur,di,dr,!1,hi);if(a===null&&(fr(di.set(-.5,.5,0),zn,o,Bn,r,s),Ms.set(0,1),a=e.ray.intersectTriangle(ur,dr,di,!1,hi),a===null))return;const l=e.ray.origin.distanceTo(hi);l<e.near||l>e.far||t.push({distance:l,point:hi.clone(),uv:$e.getUV(hi,ur,di,dr,Ra,Ms,Pa,new J),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}Im.prototype.isSprite=!0;function fr(n,e,t,i,r,s){kn.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(ui.x=s*kn.x-r*kn.y,ui.y=r*kn.x+s*kn.y):ui.copy(kn),n.copy(e),n.x+=ui.x,n.y+=ui.y,n.applyMatrix4(Zl)}const Da=new M,Ia=new ke,Na=new ke,Nm=new M,Fa=new de;function Us(n,e){at.call(this,n,e),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new de,this.bindMatrixInverse=new de}Us.prototype=Object.assign(Object.create(at.prototype),{constructor:Us,isSkinnedMesh:!0,copy:function(n){return at.prototype.copy.call(this,n),this.bindMode=n.bindMode,this.bindMatrix.copy(n.bindMatrix),this.bindMatrixInverse.copy(n.bindMatrixInverse),this.skeleton=n.skeleton,this},bind:function(n,e){this.skeleton=n,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()},pose:function(){this.skeleton.pose()},normalizeSkinWeights:function(){const n=new ke,e=this.geometry.attributes.skinWeight;for(let t=0,i=e.count;t<i;t++){n.x=e.getX(t),n.y=e.getY(t),n.z=e.getZ(t),n.w=e.getW(t);const r=1/n.manhattanLength();r!==1/0?n.multiplyScalar(r):n.set(1,0,0,0),e.setXYZW(t,n.x,n.y,n.z,n.w)}},updateMatrixWorld:function(n){at.prototype.updateMatrixWorld.call(this,n),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)},boneTransform:function(n,e){const t=this.skeleton,i=this.geometry;Ia.fromBufferAttribute(i.attributes.skinIndex,n),Na.fromBufferAttribute(i.attributes.skinWeight,n),Da.fromBufferAttribute(i.attributes.position,n).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const s=Na.getComponent(r);if(s!==0){const o=Ia.getComponent(r);Fa.multiplyMatrices(t.bones[o].matrixWorld,t.boneInverses[o]),e.addScaledVector(Nm.copy(Da).applyMatrix4(Fa),s)}}return e.applyMatrix4(this.bindMatrixInverse)}});function Oa(){be.call(this),this.type="Bone"}Oa.prototype=Object.assign(Object.create(be.prototype),{constructor:Oa,isBone:!0});const Ba=new de,za=new de,pr=[],fi=new at;function ka(n,e,t){at.call(this,n,e),this.instanceMatrix=new Ae(new Float32Array(t*16),16),this.instanceColor=null,this.count=t,this.frustumCulled=!1}ka.prototype=Object.assign(Object.create(at.prototype),{constructor:ka,isInstancedMesh:!0,copy:function(n){return at.prototype.copy.call(this,n),this.instanceMatrix.copy(n.instanceMatrix),n.instanceColor!==null&&(this.instanceColor=n.instanceColor.clone()),this.count=n.count,this},getColorAt:function(n,e){e.fromArray(this.instanceColor.array,n*3)},getMatrixAt:function(n,e){e.fromArray(this.instanceMatrix.array,n*16)},raycast:function(n,e){const t=this.matrixWorld,i=this.count;if(fi.geometry=this.geometry,fi.material=this.material,fi.material!==void 0)for(let r=0;r<i;r++){this.getMatrixAt(r,Ba),za.multiplyMatrices(t,Ba),fi.matrixWorld=za,fi.raycast(n,pr);for(let s=0,o=pr.length;s<o;s++){const a=pr[s];a.instanceId=r,a.object=this,e.push(a)}pr.length=0}},setColorAt:function(n,e){this.instanceColor===null&&(this.instanceColor=new Ae(new Float32Array(this.count*3),3)),e.toArray(this.instanceColor.array,n*3)},setMatrixAt:function(n,e){e.toArray(this.instanceMatrix.array,n*16)},updateMorphTargets:function(){},dispose:function(){this.dispatchEvent({type:"dispose"})}});class ji extends Ye{constructor(e){super(),this.type="LineBasicMaterial",this.color=new fe(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.morphTargets=e.morphTargets,this}}ji.prototype.isLineBasicMaterial=!0;const Ha=new M,Ua=new M,Ga=new de,Ss=new bn,mr=new ei;function Fi(n=new Be,e=new ji){be.call(this),this.type="Line",this.geometry=n,this.material=e,this.updateMorphTargets()}Fi.prototype=Object.assign(Object.create(be.prototype),{constructor:Fi,isLine:!0,copy:function(n){return be.prototype.copy.call(this,n),this.material=n.material,this.geometry=n.geometry,this},computeLineDistances:function(){const n=this.geometry;if(n.isBufferGeometry)if(n.index===null){const e=n.attributes.position,t=[0];for(let i=1,r=e.count;i<r;i++)Ha.fromBufferAttribute(e,i-1),Ua.fromBufferAttribute(e,i),t[i]=t[i-1],t[i]+=Ha.distanceTo(Ua);n.setAttribute("lineDistance",new Xe(t,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else n.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this},raycast:function(n,e){const t=this.geometry,i=this.matrixWorld,r=n.params.Line.threshold,s=t.drawRange;if(t.boundingSphere===null&&t.computeBoundingSphere(),mr.copy(t.boundingSphere),mr.applyMatrix4(i),mr.radius+=r,n.ray.intersectsSphere(mr)===!1)return;Ga.copy(i).invert(),Ss.copy(n.ray).applyMatrix4(Ga);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),a=o*o,l=new M,c=new M,u=new M,h=new M,d=this.isLineSegments?2:1;if(t.isBufferGeometry){const f=t.index,_=t.attributes.position;if(f!==null){const v=Math.max(0,s.start),g=Math.min(f.count,s.start+s.count);for(let m=v,T=g-1;m<T;m+=d){const E=f.getX(m),L=f.getX(m+1);if(l.fromBufferAttribute(_,E),c.fromBufferAttribute(_,L),Ss.distanceSqToSegment(l,c,h,u)>a)continue;h.applyMatrix4(this.matrixWorld);const O=n.ray.origin.distanceTo(h);O<n.near||O>n.far||e.push({distance:O,point:u.clone().applyMatrix4(this.matrixWorld),index:m,face:null,faceIndex:null,object:this})}}else{const v=Math.max(0,s.start),g=Math.min(_.count,s.start+s.count);for(let m=v,T=g-1;m<T;m+=d){if(l.fromBufferAttribute(_,m),c.fromBufferAttribute(_,m+1),Ss.distanceSqToSegment(l,c,h,u)>a)continue;h.applyMatrix4(this.matrixWorld);const L=n.ray.origin.distanceTo(h);L<n.near||L>n.far||e.push({distance:L,point:u.clone().applyMatrix4(this.matrixWorld),index:m,face:null,faceIndex:null,object:this})}}}else t.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")},updateMorphTargets:function(){const n=this.geometry;if(n.isBufferGeometry){const e=n.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const e=n.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}});const Va=new M,Wa=new M;function Dr(n,e){Fi.call(this,n,e),this.type="LineSegments"}Dr.prototype=Object.assign(Object.create(Fi.prototype),{constructor:Dr,isLineSegments:!0,computeLineDistances:function(){const n=this.geometry;if(n.isBufferGeometry)if(n.index===null){const e=n.attributes.position,t=[];for(let i=0,r=e.count;i<r;i+=2)Va.fromBufferAttribute(e,i),Wa.fromBufferAttribute(e,i+1),t[i]=i===0?0:t[i-1],t[i+1]=t[i]+Va.distanceTo(Wa);n.setAttribute("lineDistance",new Xe(t,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else n.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}});class Fm extends Fi{constructor(e,t){super(e,t),this.type="LineLoop"}}Fm.prototype.isLineLoop=!0;class Jl extends Ye{constructor(e){super(),this.type="PointsMaterial",this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.morphTargets=e.morphTargets,this}}Jl.prototype.isPointsMaterial=!0;const ja=new de,Gs=new bn,gr=new ei,_r=new M;function Vs(n=new Be,e=new Jl){be.call(this),this.type="Points",this.geometry=n,this.material=e,this.updateMorphTargets()}Vs.prototype=Object.assign(Object.create(be.prototype),{constructor:Vs,isPoints:!0,copy:function(n){return be.prototype.copy.call(this,n),this.material=n.material,this.geometry=n.geometry,this},raycast:function(n,e){const t=this.geometry,i=this.matrixWorld,r=n.params.Points.threshold,s=t.drawRange;if(t.boundingSphere===null&&t.computeBoundingSphere(),gr.copy(t.boundingSphere),gr.applyMatrix4(i),gr.radius+=r,n.ray.intersectsSphere(gr)===!1)return;ja.copy(i).invert(),Gs.copy(n.ray).applyMatrix4(ja);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),a=o*o;if(t.isBufferGeometry){const l=t.index,u=t.attributes.position;if(l!==null){const h=Math.max(0,s.start),d=Math.min(l.count,s.start+s.count);for(let f=h,p=d;f<p;f++){const _=l.getX(f);_r.fromBufferAttribute(u,_),Xa(_r,_,a,i,n,e,this)}}else{const h=Math.max(0,s.start),d=Math.min(u.count,s.start+s.count);for(let f=h,p=d;f<p;f++)_r.fromBufferAttribute(u,f),Xa(_r,f,a,i,n,e,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")},updateMorphTargets:function(){const n=this.geometry;if(n.isBufferGeometry){const e=n.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const e=n.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}});function Xa(n,e,t,i,r,s,o){const a=Gs.distanceSqToPoint(n);if(a<t){const l=new M;Gs.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Om extends lt{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.format=a!==void 0?a:vn,this.minFilter=o!==void 0?o:rt,this.magFilter=s!==void 0?s:rt,this.generateMipmaps=!1;const u=this;function h(){u.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}Om.prototype.isVideoTexture=!0;class $l extends lt{constructor(e,t,i,r,s,o,a,l,c,u,h,d){super(null,o,a,l,c,u,r,s,h,d),this.image={width:t,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}$l.prototype.isCompressedTexture=!0;class Bm extends lt{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.needsUpdate=!0}}Bm.prototype.isCanvasTexture=!0;class zm extends lt{constructor(e,t,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:qn,u!==qn&&u!==Ri)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===qn&&(i=Tr),i===void 0&&u===Ri&&(i=Si),super(null,r,s,o,a,l,u,i,c),this.image={width:e,height:t},this.magFilter=a!==void 0?a:pt,this.minFilter=l!==void 0?l:pt,this.flipY=!1,this.generateMipmaps=!1}}zm.prototype.isDepthTexture=!0;new M;new M;new M;new $e;const km={triangulate:function(n,e,t){t=t||2;const i=e&&e.length,r=i?e[0]*t:n.length;let s=Ql(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,h,d,f;if(i&&(s=Wm(n,e,s,t)),n.length>80*t){a=c=n[0],l=u=n[1];for(let p=t;p<r;p+=t)h=n[p],d=n[p+1],h<a&&(a=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);f=Math.max(c-a,u-l),f=f!==0?1/f:0}return Oi(s,o,t,a,l,f),o}};function Ql(n,e,t,i,r){let s,o;if(r===tg(n,e,t,i)>0)for(s=e;s<t;s+=i)o=qa(s,n[s],n[s+1],o);else for(s=t-i;s>=e;s-=i)o=qa(s,n[s],n[s+1],o);return o&&jr(o,o.next)&&(zi(o),o=o.next),o}function ln(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(jr(t,t.next)||qe(t.prev,t,t.next)===0)){if(zi(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Oi(n,e,t,i,r,s,o){if(!n)return;!o&&s&&Zm(n,i,r,s);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,s?Um(n,i,r,s):Hm(n)){e.push(l.i/t),e.push(n.i/t),e.push(c.i/t),zi(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Gm(ln(n),e,t),Oi(n,e,t,i,r,s,2)):o===2&&Vm(n,e,t,i,r,s):Oi(ln(n),e,t,i,r,s,1);break}}}function Hm(n){const e=n.prev,t=n,i=n.next;if(qe(e,t,i)>=0)return!1;let r=n.next.next;for(;r!==n.prev;){if(jn(e.x,e.y,t.x,t.y,i.x,i.y,r.x,r.y)&&qe(r.prev,r,r.next)>=0)return!1;r=r.next}return!0}function Um(n,e,t,i){const r=n.prev,s=n,o=n.next;if(qe(r,s,o)>=0)return!1;const a=r.x<s.x?r.x<o.x?r.x:o.x:s.x<o.x?s.x:o.x,l=r.y<s.y?r.y<o.y?r.y:o.y:s.y<o.y?s.y:o.y,c=r.x>s.x?r.x>o.x?r.x:o.x:s.x>o.x?s.x:o.x,u=r.y>s.y?r.y>o.y?r.y:o.y:s.y>o.y?s.y:o.y,h=Ws(a,l,e,t,i),d=Ws(c,u,e,t,i);let f=n.prevZ,p=n.nextZ;for(;f&&f.z>=h&&p&&p.z<=d;){if(f!==n.prev&&f!==n.next&&jn(r.x,r.y,s.x,s.y,o.x,o.y,f.x,f.y)&&qe(f.prev,f,f.next)>=0||(f=f.prevZ,p!==n.prev&&p!==n.next&&jn(r.x,r.y,s.x,s.y,o.x,o.y,p.x,p.y)&&qe(p.prev,p,p.next)>=0))return!1;p=p.nextZ}for(;f&&f.z>=h;){if(f!==n.prev&&f!==n.next&&jn(r.x,r.y,s.x,s.y,o.x,o.y,f.x,f.y)&&qe(f.prev,f,f.next)>=0)return!1;f=f.prevZ}for(;p&&p.z<=d;){if(p!==n.prev&&p!==n.next&&jn(r.x,r.y,s.x,s.y,o.x,o.y,p.x,p.y)&&qe(p.prev,p,p.next)>=0)return!1;p=p.nextZ}return!0}function Gm(n,e,t){let i=n;do{const r=i.prev,s=i.next.next;!jr(r,s)&&Kl(r,i,i.next,s)&&Bi(r,s)&&Bi(s,r)&&(e.push(r.i/t),e.push(i.i/t),e.push(s.i/t),zi(i),zi(i.next),i=n=s),i=i.next}while(i!==n);return ln(i)}function Vm(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Qm(o,a)){let l=ec(o,a);o=ln(o,o.next),l=ln(l,l.next),Oi(o,e,t,i,r,s),Oi(l,e,t,i,r,s);return}a=a.next}o=o.next}while(o!==n)}function Wm(n,e,t,i){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:n.length,c=Ql(n,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push($m(c));for(r.sort(jm),s=0;s<r.length;s++)Xm(r[s],t),t=ln(t,t.next);return t}function jm(n,e){return n.x-e.x}function Xm(n,e){if(e=qm(n,e),e){const t=ec(e,n);ln(e,e.next),ln(t,t.next)}}function qm(n,e){let t=e;const i=n.x,r=n.y;let s=-1/0,o;do{if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const d=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>s){if(s=d,d===i){if(r===t.y)return t;if(r===t.next.y)return t.next}o=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!o)return null;if(i===s)return o;const a=o,l=o.x,c=o.y;let u=1/0,h;t=o;do i>=t.x&&t.x>=l&&i!==t.x&&jn(r<c?i:s,r,l,c,r<c?s:i,r,t.x,t.y)&&(h=Math.abs(r-t.y)/(i-t.x),Bi(t,n)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&Ym(o,t)))&&(o=t,u=h)),t=t.next;while(t!==a);return o}function Ym(n,e){return qe(n.prev,n,e.prev)<0&&qe(e.next,n,n.next)<0}function Zm(n,e,t,i){let r=n;do r.z===null&&(r.z=Ws(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,Jm(r)}function Jm(n){let e,t,i,r,s,o,a,l,c=1;do{for(t=n,n=null,s=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;t=i}s.nextZ=null,c*=2}while(o>1);return n}function Ws(n,e,t,i,r){return n=32767*(n-t)*r,e=32767*(e-i)*r,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function $m(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function jn(n,e,t,i,r,s,o,a){return(r-o)*(e-a)-(n-o)*(s-a)>=0&&(n-o)*(i-a)-(t-o)*(e-a)>=0&&(t-o)*(s-a)-(r-o)*(i-a)>=0}function Qm(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Km(n,e)&&(Bi(n,e)&&Bi(e,n)&&eg(n,e)&&(qe(n.prev,n,e.prev)||qe(n,e.prev,e))||jr(n,e)&&qe(n.prev,n,n.next)>0&&qe(e.prev,e,e.next)>0)}function qe(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function jr(n,e){return n.x===e.x&&n.y===e.y}function Kl(n,e,t,i){const r=yr(qe(n,e,t)),s=yr(qe(n,e,i)),o=yr(qe(t,i,n)),a=yr(qe(t,i,e));return!!(r!==s&&o!==a||r===0&&vr(n,t,e)||s===0&&vr(n,i,e)||o===0&&vr(t,n,i)||a===0&&vr(t,e,i))}function vr(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function yr(n){return n>0?1:n<0?-1:0}function Km(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Kl(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Bi(n,e){return qe(n.prev,n,n.next)<0?qe(n,e,n.next)>=0&&qe(n,n.prev,e)>=0:qe(n,e,n.prev)<0||qe(n,n.next,e)<0}function eg(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function ec(n,e){const t=new js(n.i,n.x,n.y),i=new js(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function qa(n,e,t,i){const r=new js(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function zi(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function js(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function tg(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}const xn={area:function(n){const e=n.length;let t=0;for(let i=e-1,r=0;r<e;i=r++)t+=n[i].x*n[r].y-n[r].x*n[i].y;return t*.5},isClockWise:function(n){return xn.area(n)<0},triangulateShape:function(n,e){const t=[],i=[],r=[];Ya(n),Za(t,n);let s=n.length;e.forEach(Ya);for(let a=0;a<e.length;a++)i.push(s),s+=e[a].length,Za(t,e[a]);const o=km.triangulate(t,i);for(let a=0;a<o.length;a+=3)r.push(o.slice(a,a+3));return r}};function Ya(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Za(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Xr extends Be{constructor(e,t){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new Xe(r,3)),this.setAttribute("uv",new Xe(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1;let h=t.depth!==void 0?t.depth:100,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:6,p=t.bevelSize!==void 0?t.bevelSize:f-2,_=t.bevelOffset!==void 0?t.bevelOffset:0,v=t.bevelSegments!==void 0?t.bevelSegments:3;const g=t.extrudePath,m=t.UVGenerator!==void 0?t.UVGenerator:ng;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),h=t.amount);let T,E=!1,L,y,O,k;g&&(T=g.getSpacedPoints(u),E=!0,d=!1,L=g.computeFrenetFrames(u,!1),y=new M,O=new M,k=new M),d||(v=0,f=0,p=0,_=0);const B=a.extractPoints(c);let q=B.shape;const P=B.holes;if(!xn.isClockWise(q)){q=q.reverse();for(let $=0,K=P.length;$<K;$++){const te=P[$];xn.isClockWise(te)&&(P[$]=te.reverse())}}const R=xn.triangulateShape(q,P),C=q;for(let $=0,K=P.length;$<K;$++){const te=P[$];q=q.concat(te)}function I($,K,te){return K||console.error("THREE.ExtrudeGeometry: vec does not exist"),K.clone().multiplyScalar(te).add($)}const D=q.length,Y=R.length;function ee($,K,te){let ce,ie,S;const b=$.x-K.x,j=$.y-K.y,X=te.x-$.x,se=te.y-$.y,he=b*b+j*j,Pe=b*se-j*X;if(Math.abs(Pe)>Number.EPSILON){const ge=Math.sqrt(he),A=Math.sqrt(X*X+se*se),w=K.x-j/ge,V=K.y+b/ge,re=te.x-se/A,H=te.y+X/A,ue=((re-w)*se-(H-V)*X)/(b*se-j*X);ce=w+b*ue-$.x,ie=V+j*ue-$.y;const Ce=ce*ce+ie*ie;if(Ce<=2)return new J(ce,ie);S=Math.sqrt(Ce/2)}else{let ge=!1;b>Number.EPSILON?X>Number.EPSILON&&(ge=!0):b<-Number.EPSILON?X<-Number.EPSILON&&(ge=!0):Math.sign(j)===Math.sign(se)&&(ge=!0),ge?(ce=-j,ie=b,S=Math.sqrt(he)):(ce=b,ie=j,S=Math.sqrt(he/2))}return new J(ce/S,ie/S)}const Q=[];for(let $=0,K=C.length,te=K-1,ce=$+1;$<K;$++,te++,ce++)te===K&&(te=0),ce===K&&(ce=0),Q[$]=ee(C[$],C[te],C[ce]);const ae=[];let le,me=Q.concat();for(let $=0,K=P.length;$<K;$++){const te=P[$];le=[];for(let ce=0,ie=te.length,S=ie-1,b=ce+1;ce<ie;ce++,S++,b++)S===ie&&(S=0),b===ie&&(b=0),le[ce]=ee(te[ce],te[S],te[b]);ae.push(le),me=me.concat(le)}for(let $=0;$<v;$++){const K=$/v,te=f*Math.cos(K*Math.PI/2),ce=p*Math.sin(K*Math.PI/2)+_;for(let ie=0,S=C.length;ie<S;ie++){const b=I(C[ie],Q[ie],ce);_e(b.x,b.y,-te)}for(let ie=0,S=P.length;ie<S;ie++){const b=P[ie];le=ae[ie];for(let j=0,X=b.length;j<X;j++){const se=I(b[j],le[j],ce);_e(se.x,se.y,-te)}}}const ve=p+_;for(let $=0;$<D;$++){const K=d?I(q[$],me[$],ve):q[$];E?(O.copy(L.normals[0]).multiplyScalar(K.x),y.copy(L.binormals[0]).multiplyScalar(K.y),k.copy(T[0]).add(O).add(y),_e(k.x,k.y,k.z)):_e(K.x,K.y,0)}for(let $=1;$<=u;$++)for(let K=0;K<D;K++){const te=d?I(q[K],me[K],ve):q[K];E?(O.copy(L.normals[$]).multiplyScalar(te.x),y.copy(L.binormals[$]).multiplyScalar(te.y),k.copy(T[$]).add(O).add(y),_e(k.x,k.y,k.z)):_e(te.x,te.y,h/u*$)}for(let $=v-1;$>=0;$--){const K=$/v,te=f*Math.cos(K*Math.PI/2),ce=p*Math.sin(K*Math.PI/2)+_;for(let ie=0,S=C.length;ie<S;ie++){const b=I(C[ie],Q[ie],ce);_e(b.x,b.y,h+te)}for(let ie=0,S=P.length;ie<S;ie++){const b=P[ie];le=ae[ie];for(let j=0,X=b.length;j<X;j++){const se=I(b[j],le[j],ce);E?_e(se.x,se.y+T[u-1].y,T[u-1].x+te):_e(se.x,se.y,h+te)}}}G(),De();function G(){const $=r.length/3;if(d){let K=0,te=D*K;for(let ce=0;ce<Y;ce++){const ie=R[ce];pe(ie[2]+te,ie[1]+te,ie[0]+te)}K=u+v*2,te=D*K;for(let ce=0;ce<Y;ce++){const ie=R[ce];pe(ie[0]+te,ie[1]+te,ie[2]+te)}}else{for(let K=0;K<Y;K++){const te=R[K];pe(te[2],te[1],te[0])}for(let K=0;K<Y;K++){const te=R[K];pe(te[0]+D*u,te[1]+D*u,te[2]+D*u)}}i.addGroup($,r.length/3-$,0)}function De(){const $=r.length/3;let K=0;Re(C,K),K+=C.length;for(let te=0,ce=P.length;te<ce;te++){const ie=P[te];Re(ie,K),K+=ie.length}i.addGroup($,r.length/3-$,1)}function Re($,K){let te=$.length;for(;--te>=0;){const ce=te;let ie=te-1;ie<0&&(ie=$.length-1);for(let S=0,b=u+v*2;S<b;S++){const j=D*S,X=D*(S+1),se=K+ce+j,he=K+ie+j,Pe=K+ie+X,ge=K+ce+X;Ie(se,he,Pe,ge)}}}function _e($,K,te){l.push($),l.push(K),l.push(te)}function pe($,K,te){Se($),Se(K),Se(te);const ce=r.length/3,ie=m.generateTopUV(i,r,ce-3,ce-2,ce-1);Te(ie[0]),Te(ie[1]),Te(ie[2])}function Ie($,K,te,ce){Se($),Se(K),Se(ce),Se(K),Se(te),Se(ce);const ie=r.length/3,S=m.generateSideWallUV(i,r,ie-6,ie-3,ie-2,ie-1);Te(S[0]),Te(S[1]),Te(S[3]),Te(S[1]),Te(S[2]),Te(S[3])}function Se($){r.push(l[$*3+0]),r.push(l[$*3+1]),r.push(l[$*3+2])}function Te($){s.push($.x),s.push($.y)}}}toJSON(){const e=Be.prototype.toJSON.call(this),t=this.parameters.shapes,i=this.parameters.options;return ig(t,i,e)}}const ng={generateTopUV:function(n,e,t,i,r){const s=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new J(s,o),new J(a,l),new J(c,u)]},generateSideWallUV:function(n,e,t,i,r,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],h=e[i*3+2],d=e[r*3],f=e[r*3+1],p=e[r*3+2],_=e[s*3],v=e[s*3+1],g=e[s*3+2];return Math.abs(a-u)<.01?[new J(o,1-l),new J(c,1-h),new J(d,1-p),new J(_,1-g)]:[new J(a,1-l),new J(u,1-h),new J(f,1-p),new J(v,1-g)]}};function ig(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}function Xs(n,e,t){Be.call(this),this.type="ParametricGeometry",this.parameters={func:n,slices:e,stacks:t};const i=[],r=[],s=[],o=[],a=1e-5,l=new M,c=new M,u=new M,h=new M,d=new M;n.length<3&&console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");const f=e+1;for(let p=0;p<=t;p++){const _=p/t;for(let v=0;v<=e;v++){const g=v/e;n(g,_,c),r.push(c.x,c.y,c.z),g-a>=0?(n(g-a,_,u),h.subVectors(c,u)):(n(g+a,_,u),h.subVectors(u,c)),_-a>=0?(n(g,_-a,u),d.subVectors(c,u)):(n(g,_+a,u),d.subVectors(u,c)),l.crossVectors(h,d).normalize(),s.push(l.x,l.y,l.z),o.push(g,_)}}for(let p=0;p<t;p++)for(let _=0;_<e;_++){const v=p*f+_,g=p*f+_+1,m=(p+1)*f+_+1,T=(p+1)*f+_;i.push(v,g,T),i.push(g,m,T)}this.setIndex(i),this.setAttribute("position",new Xe(r,3)),this.setAttribute("normal",new Xe(s,3)),this.setAttribute("uv",new Xe(o,2))}Xs.prototype=Object.create(Be.prototype);Xs.prototype.constructor=Xs;class rg extends Be{constructor(e,t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],r=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Xe(r,3)),this.setAttribute("normal",new Xe(s,3)),this.setAttribute("uv",new Xe(o,2));function c(u){const h=r.length/3,d=u.extractPoints(t);let f=d.shape;const p=d.holes;xn.isClockWise(f)===!1&&(f=f.reverse());for(let v=0,g=p.length;v<g;v++){const m=p[v];xn.isClockWise(m)===!0&&(p[v]=m.reverse())}const _=xn.triangulateShape(f,p);for(let v=0,g=p.length;v<g;v++){const m=p[v];f=f.concat(m)}for(let v=0,g=f.length;v<g;v++){const m=f[v];r.push(m.x,m.y,0),s.push(0,0,1),o.push(m.x,m.y)}for(let v=0,g=_.length;v<g;v++){const m=_[v],T=m[0]+h,E=m[1]+h,L=m[2]+h;i.push(T,E,L),l+=3}}}toJSON(){const e=Be.prototype.toJSON.call(this),t=this.parameters.shapes;return sg(t,e)}}function sg(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}class og extends Ye{constructor(e){super(),this.type="ShadowMaterial",this.color=new fe(0),this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this}}og.prototype.isShadowMaterial=!0;class tc extends St{constructor(e){super(e),this.type="RawShaderMaterial"}}tc.prototype.isRawShaderMaterial=!0;function cn(n){Ye.call(this),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qn,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.vertexTangents=!1,this.setValues(n)}cn.prototype=Object.create(Ye.prototype);cn.prototype.constructor=cn;cn.prototype.isMeshStandardMaterial=!0;cn.prototype.copy=function(n){return Ye.prototype.copy.call(this,n),this.defines={STANDARD:""},this.color.copy(n.color),this.roughness=n.roughness,this.metalness=n.metalness,this.map=n.map,this.lightMap=n.lightMap,this.lightMapIntensity=n.lightMapIntensity,this.aoMap=n.aoMap,this.aoMapIntensity=n.aoMapIntensity,this.emissive.copy(n.emissive),this.emissiveMap=n.emissiveMap,this.emissiveIntensity=n.emissiveIntensity,this.bumpMap=n.bumpMap,this.bumpScale=n.bumpScale,this.normalMap=n.normalMap,this.normalMapType=n.normalMapType,this.normalScale.copy(n.normalScale),this.displacementMap=n.displacementMap,this.displacementScale=n.displacementScale,this.displacementBias=n.displacementBias,this.roughnessMap=n.roughnessMap,this.metalnessMap=n.metalnessMap,this.alphaMap=n.alphaMap,this.envMap=n.envMap,this.envMapIntensity=n.envMapIntensity,this.refractionRatio=n.refractionRatio,this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this.wireframeLinecap=n.wireframeLinecap,this.wireframeLinejoin=n.wireframeLinejoin,this.skinning=n.skinning,this.morphTargets=n.morphTargets,this.morphNormals=n.morphNormals,this.flatShading=n.flatShading,this.vertexTangents=n.vertexTangents,this};function Jn(n){cn.call(this),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoat=0,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new J(1,1),this.clearcoatNormalMap=null,this.reflectivity=.5,Object.defineProperty(this,"ior",{get:function(){return(1+.4*this.reflectivity)/(1-.4*this.reflectivity)},set:function(e){this.reflectivity=Me.clamp(2.5*(e-1)/(e+1),0,1)}}),this.sheen=null,this.transmission=0,this.transmissionMap=null,this.setValues(n)}Jn.prototype=Object.create(cn.prototype);Jn.prototype.constructor=Jn;Jn.prototype.isMeshPhysicalMaterial=!0;Jn.prototype.copy=function(n){return cn.prototype.copy.call(this,n),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=n.clearcoat,this.clearcoatMap=n.clearcoatMap,this.clearcoatRoughness=n.clearcoatRoughness,this.clearcoatRoughnessMap=n.clearcoatRoughnessMap,this.clearcoatNormalMap=n.clearcoatNormalMap,this.clearcoatNormalScale.copy(n.clearcoatNormalScale),this.reflectivity=n.reflectivity,n.sheen?this.sheen=(this.sheen||new fe).copy(n.sheen):this.sheen=null,this.transmission=n.transmission,this.transmissionMap=n.transmissionMap,this};class ag extends Ye{constructor(e){super(),this.type="MeshPhongMaterial",this.color=new fe(16777215),this.specular=new fe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qn,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ur,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}}ag.prototype.isMeshPhongMaterial=!0;class lg extends Ye{constructor(e){super(),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new fe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qn,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this}}lg.prototype.isMeshToonMaterial=!0;class cg extends Ye{constructor(e){super(),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qn,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}}cg.prototype.isMeshNormalMaterial=!0;class hg extends Ye{constructor(e){super(),this.type="MeshLambertMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ur,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this}}hg.prototype.isMeshLambertMaterial=!0;class ug extends Ye{constructor(e){super(),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new fe(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qn,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}}ug.prototype.isMeshMatcapMaterial=!0;class dg extends ji{constructor(e){super(),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}dg.prototype.isLineDashedMaterial=!0;const je={arraySlice:function(n,e,t){return je.isTypedArray(n)?new n.constructor(n.subarray(e,t!==void 0?t:n.length)):n.slice(e,t)},convertArray:function(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)},isTypedArray:function(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)},getKeyframeOrder:function(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i},sortedArray:function(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=n[a+l]}return r},flattenJSON:function(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)},subclip:function(n,e,t,i,r=30){const s=n.clone();s.name=e;const o=[];for(let l=0;l<s.tracks.length;++l){const c=s.tracks[l],u=c.getValueSize(),h=[],d=[];for(let f=0;f<c.times.length;++f){const p=c.times[f]*r;if(!(p<t||p>=i)){h.push(c.times[f]);for(let _=0;_<u;++_)d.push(c.values[f*u+_])}}h.length!==0&&(c.times=je.convertArray(h,c.times.constructor),c.values=je.convertArray(d,c.values.constructor),o.push(c))}s.tracks=o;let a=1/0;for(let l=0;l<s.tracks.length;++l)a>s.tracks[l].times[0]&&(a=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*a);return s.resetDuration(),s},makeClipAdditive:function(n,e=0,t=n,i=30){i<=0&&(i=30);const r=t.tracks.length,s=e/i;for(let o=0;o<r;++o){const a=t.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;const c=n.tracks.find(function(g){return g.name===a.name&&g.ValueTypeName===l});if(c===void 0)continue;let u=0;const h=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let d=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);const p=a.times.length-1;let _;if(s<=a.times[0]){const g=u,m=h-u;_=je.arraySlice(a.values,g,m)}else if(s>=a.times[p]){const g=p*h+u,m=g+h-u;_=je.arraySlice(a.values,g,m)}else{const g=a.createInterpolant(),m=u,T=h-u;g.evaluate(s),_=je.arraySlice(g.resultBuffer,m,T)}l==="quaternion"&&new ot().fromArray(_).normalize().conjugate().toArray(_);const v=c.times.length;for(let g=0;g<v;++g){const m=g*f+d;if(l==="quaternion")ot.multiplyQuaternionsFlat(c.values,m,_,0,c.values,m);else{const T=f-d*2;for(let E=0;E<T;++E)c.values[m+E]-=_[E]}}}return n.blendMode=Al,n}};function wt(n,e,t,i){this.parameterPositions=n,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(t),this.sampleValues=e,this.valueSize=t}Object.assign(wt.prototype,{evaluate:function(n){const e=this.parameterPositions;let t=this._cachedIndex,i=e[t],r=e[t-1];e:{t:{let s;n:{i:if(!(n<i)){for(let o=t+2;;){if(i===void 0){if(n<r)break i;return t=e.length,this._cachedIndex=t,this.afterEnd_(t-1,n,r)}if(t===o)break;if(r=i,i=e[++t],n<i)break t}s=e.length;break n}if(!(n>=r)){const o=e[1];n<o&&(t=2,r=o);for(let a=t-2;;){if(r===void 0)return this._cachedIndex=0,this.beforeStart_(0,n,i);if(t===a)break;if(i=r,r=e[--t-1],n>=r)break t}s=t,t=0;break n}break e}for(;t<s;){const o=t+s>>>1;n<e[o]?s=o:t=o+1}if(i=e[t],r=e[t-1],r===void 0)return this._cachedIndex=0,this.beforeStart_(0,n,i);if(i===void 0)return t=e.length,this._cachedIndex=t,this.afterEnd_(t-1,r,n)}this._cachedIndex=t,this.intervalChanged_(t,r,i)}return this.interpolate_(t,r,n,i)},settings:null,DefaultSettings_:{},getSettings_:function(){return this.settings||this.DefaultSettings_},copySampleValue_:function(n){const e=this.resultBuffer,t=this.sampleValues,i=this.valueSize,r=n*i;for(let s=0;s!==i;++s)e[s]=t[r+s];return e},interpolate_:function(){throw new Error("call to abstract method")},intervalChanged_:function(){}});Object.assign(wt.prototype,{beforeStart_:wt.prototype.copySampleValue_,afterEnd_:wt.prototype.copySampleValue_});function qs(n,e,t,i){wt.call(this,n,e,t,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0}qs.prototype=Object.assign(Object.create(wt.prototype),{constructor:qs,DefaultSettings_:{endingStart:Vn,endingEnd:Vn},intervalChanged_:function(n,e,t){const i=this.parameterPositions;let r=n-2,s=n+1,o=i[r],a=i[s];if(o===void 0)switch(this.getSettings_().endingStart){case Wn:r=n,o=2*e-t;break;case Rr:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=n,o=t}if(a===void 0)switch(this.getSettings_().endingEnd){case Wn:s=n,a=2*t-e;break;case Rr:s=1,a=t+i[1]-i[0];break;default:s=n-1,a=e}const l=(t-e)*.5,c=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(a-t),this._offsetPrev=r*c,this._offsetNext=s*c},interpolate_:function(n,e,t,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=n*o,l=a-o,c=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,d=this._weightNext,f=(t-e)/(i-e),p=f*f,_=p*f,v=-h*_+2*h*p-h*f,g=(1+h)*_+(-1.5-2*h)*p+(-.5+h)*f+1,m=(-1-d)*_+(1.5+d)*p+.5*f,T=d*_-d*p;for(let E=0;E!==o;++E)r[E]=v*s[c+E]+g*s[l+E]+m*s[a+E]+T*s[u+E];return r}});function Ir(n,e,t,i){wt.call(this,n,e,t,i)}Ir.prototype=Object.assign(Object.create(wt.prototype),{constructor:Ir,interpolate_:function(n,e,t,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=n*o,l=a-o,c=(t-e)/(i-e),u=1-c;for(let h=0;h!==o;++h)r[h]=s[l+h]*u+s[a+h]*c;return r}});function Ys(n,e,t,i){wt.call(this,n,e,t,i)}Ys.prototype=Object.assign(Object.create(wt.prototype),{constructor:Ys,interpolate_:function(n){return this.copySampleValue_(n-1)}});class Gt{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=je.convertArray(t,this.TimeBufferType),this.values=je.convertArray(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:je.convertArray(e.times,Array),values:je.convertArray(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ys(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ir(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new qs(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Lr:t=this.InterpolantFactoryMethodDiscrete;break;case Cr:t=this.InterpolantFactoryMethodLinear;break;case $r:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Lr;case this.InterpolantFactoryMethodLinear:return Cr;case this.InterpolantFactoryMethodSmooth:return $r}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=je.arraySlice(i,s,o),this.values=je.arraySlice(this.values,s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&je.isTypedArray(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=je.arraySlice(this.times),t=je.arraySlice(this.values),i=this.getValueSize(),r=this.getInterpolation()===$r,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const h=a*i,d=h-i,f=h+i;for(let p=0;p!==i;++p){const _=t[h+p];if(_!==t[d+p]||_!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*i,d=o*i;for(let f=0;f!==i;++f)t[d+f]=t[h+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=je.arraySlice(e,0,o),this.values=je.arraySlice(t,0,o*i)):(this.times=e,this.values=t),this}clone(){const e=je.arraySlice(this.times,0),t=je.arraySlice(this.values,0),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}Gt.prototype.TimeBufferType=Float32Array;Gt.prototype.ValueBufferType=Float32Array;Gt.prototype.DefaultInterpolation=Cr;class ii extends Gt{}ii.prototype.ValueTypeName="bool";ii.prototype.ValueBufferType=Array;ii.prototype.DefaultInterpolation=Lr;ii.prototype.InterpolantFactoryMethodLinear=void 0;ii.prototype.InterpolantFactoryMethodSmooth=void 0;class nc extends Gt{}nc.prototype.ValueTypeName="color";class Nr extends Gt{}Nr.prototype.ValueTypeName="number";function Zs(n,e,t,i){wt.call(this,n,e,t,i)}Zs.prototype=Object.assign(Object.create(wt.prototype),{constructor:Zs,interpolate_:function(n,e,t,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=(t-e)/(i-e);let l=n*o;for(let c=l+o;l!==c;l+=4)ot.slerpFlat(r,0,s,l-o,s,l,a);return r}});class Xi extends Gt{InterpolantFactoryMethodLinear(e){return new Zs(this.times,this.values,this.getValueSize(),e)}}Xi.prototype.ValueTypeName="quaternion";Xi.prototype.DefaultInterpolation=Cr;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;class ri extends Gt{}ri.prototype.ValueTypeName="string";ri.prototype.ValueBufferType=Array;ri.prototype.DefaultInterpolation=Lr;ri.prototype.InterpolantFactoryMethodLinear=void 0;ri.prototype.InterpolantFactoryMethodSmooth=void 0;class Fr extends Gt{}Fr.prototype.ValueTypeName="vector";class Ja{constructor(e,t=-1,i,r=uo){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=Me.generateUUID(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(pg(i[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(Gt.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=je.getKeyframeOrder(l);l=je.sortedArray(l,1,u),c=je.sortedArray(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Nr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let d=r[h];d||(r[h]=d=[]),d.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,d,f,p,_){if(f.length!==0){const v=[],g=[];je.flattenJSON(f,v,g,p),v.length!==0&&_.push(new h(d,v,g))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let _=0;_<d[p].morphTargets.length;_++)f[d[p].morphTargets[_]]=-1;for(const _ in f){const v=[],g=[];for(let m=0;m!==d[p].morphTargets.length;++m){const T=d[p];v.push(T.time),g.push(T.morphTarget===_?1:0)}r.push(new Nr(".morphTargetInfluence["+_+"]",v,g))}l=f.length*(o||1)}else{const f=".bones["+t[h].name+"]";i(Fr,f+".position",d,"pos",r),i(Xi,f+".quaternion",d,"rot",r),i(Fr,f+".scale",d,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function fg(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Nr;case"vector":case"vector2":case"vector3":case"vector4":return Fr;case"color":return nc;case"quaternion":return Xi;case"bool":case"boolean":return ii;case"string":return ri}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function pg(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=fg(n.type);if(n.times===void 0){const t=[],i=[];je.flattenJSON(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const $n={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function mg(n,e,t){const i=this;let r=!1,s=0,o=0,a;const l=[];this.onStart=void 0,this.onLoad=n,this.onProgress=e,this.onError=t,this.itemStart=function(c){o++,r===!1&&i.onStart!==void 0&&i.onStart(c,s,o),r=!0},this.itemEnd=function(c){s++,i.onProgress!==void 0&&i.onProgress(c,s,o),s===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(c){i.onError!==void 0&&i.onError(c)},this.resolveURL=function(c){return a?a(c):c},this.setURLModifier=function(c){return a=c,this},this.addHandler=function(c,u){return l.push(c,u),this},this.removeHandler=function(c){const u=l.indexOf(c);return u!==-1&&l.splice(u,2),this},this.getHandler=function(c){for(let u=0,h=l.length;u<h;u+=2){const d=l[u],f=l[u+1];if(d.global&&(d.lastIndex=0),d.test(c))return f}return null}}const gg=new mg;function ut(n){this.manager=n!==void 0?n:gg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}Object.assign(ut.prototype,{load:function(){},loadAsync:function(n,e){const t=this;return new Promise(function(i,r){t.load(n,i,e,r)})},parse:function(){},setCrossOrigin:function(n){return this.crossOrigin=n,this},setWithCredentials:function(n){return this.withCredentials=n,this},setPath:function(n){return this.path=n,this},setResourcePath:function(n){return this.resourcePath=n,this},setRequestHeader:function(n){return this.requestHeader=n,this}});const Rt={};function ki(n){ut.call(this,n)}ki.prototype=Object.assign(Object.create(ut.prototype),{constructor:ki,load:function(n,e,t,i){n===void 0&&(n=""),this.path!==void 0&&(n=this.path+n),n=this.manager.resolveURL(n);const r=this,s=$n.get(n);if(s!==void 0)return r.manager.itemStart(n),setTimeout(function(){e&&e(s),r.manager.itemEnd(n)},0),s;if(Rt[n]!==void 0){Rt[n].push({onLoad:e,onProgress:t,onError:i});return}const o=/^data:(.*?)(;base64)?,(.*)$/,a=n.match(o);let l;if(a){const c=a[1],u=!!a[2];let h=a[3];h=decodeURIComponent(h),u&&(h=atob(h));try{let d;const f=(this.responseType||"").toLowerCase();switch(f){case"arraybuffer":case"blob":const p=new Uint8Array(h.length);for(let v=0;v<h.length;v++)p[v]=h.charCodeAt(v);f==="blob"?d=new Blob([p.buffer],{type:c}):d=p.buffer;break;case"document":d=new DOMParser().parseFromString(h,c);break;case"json":d=JSON.parse(h);break;default:d=h;break}setTimeout(function(){e&&e(d),r.manager.itemEnd(n)},0)}catch(d){setTimeout(function(){i&&i(d),r.manager.itemError(n),r.manager.itemEnd(n)},0)}}else{Rt[n]=[],Rt[n].push({onLoad:e,onProgress:t,onError:i}),l=new XMLHttpRequest,l.open("GET",n,!0),l.addEventListener("load",function(c){const u=this.response,h=Rt[n];if(delete Rt[n],this.status===200||this.status===0){this.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),$n.add(n,u);for(let d=0,f=h.length;d<f;d++){const p=h[d];p.onLoad&&p.onLoad(u)}r.manager.itemEnd(n)}else{for(let d=0,f=h.length;d<f;d++){const p=h[d];p.onError&&p.onError(c)}r.manager.itemError(n),r.manager.itemEnd(n)}},!1),l.addEventListener("progress",function(c){const u=Rt[n];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onProgress&&f.onProgress(c)}},!1),l.addEventListener("error",function(c){const u=Rt[n];delete Rt[n];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}r.manager.itemError(n),r.manager.itemEnd(n)},!1),l.addEventListener("abort",function(c){const u=Rt[n];delete Rt[n];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}r.manager.itemError(n),r.manager.itemEnd(n)},!1),this.responseType!==void 0&&(l.responseType=this.responseType),this.withCredentials!==void 0&&(l.withCredentials=this.withCredentials),l.overrideMimeType&&l.overrideMimeType(this.mimeType!==void 0?this.mimeType:"text/plain");for(const c in this.requestHeader)l.setRequestHeader(c,this.requestHeader[c]);l.send(null)}return r.manager.itemStart(n),l},setResponseType:function(n){return this.responseType=n,this},setMimeType:function(n){return this.mimeType=n,this}});function $a(n){ut.call(this,n)}$a.prototype=Object.assign(Object.create(ut.prototype),{constructor:$a,load:function(n,e,t,i){const r=this,s=[],o=new $l,a=new ki(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(r.withCredentials);let l=0;function c(u){a.load(n[u],function(h){const d=r.parse(h,!0);s[u]={width:d.width,height:d.height,format:d.format,mipmaps:d.mipmaps},l+=1,l===6&&(d.mipmapCount===1&&(o.minFilter=rt),o.image=s,o.format=d.format,o.needsUpdate=!0,e&&e(o))},t,i)}if(Array.isArray(n))for(let u=0,h=n.length;u<h;++u)c(u);else a.load(n,function(u){const h=r.parse(u,!0);if(h.isCubemap){const d=h.mipmaps.length/h.mipmapCount;for(let f=0;f<d;f++){s[f]={mipmaps:[]};for(let p=0;p<h.mipmapCount;p++)s[f].mipmaps.push(h.mipmaps[f*h.mipmapCount+p]),s[f].format=h.format,s[f].width=h.width,s[f].height=h.height}o.image=s}else o.image.width=h.width,o.image.height=h.height,o.mipmaps=h.mipmaps;h.mipmapCount===1&&(o.minFilter=rt),o.format=h.format,o.needsUpdate=!0,e&&e(o)},t,i);return o}});class ic extends ut{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=$n.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=document.createElementNS("http://www.w3.org/1999/xhtml","img");function l(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1),$n.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1),r&&r(u),s.manager.itemError(e),s.manager.itemEnd(e)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class _g extends ut{constructor(e){super(e)}load(e,t,i,r){const s=new Vr,o=new ic(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(e[c],function(u){s.images[c]=u,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,r)}for(let c=0;c<e.length;++c)l(c);return s}}function Qa(n){ut.call(this,n)}Qa.prototype=Object.assign(Object.create(ut.prototype),{constructor:Qa,load:function(n,e,t,i){const r=this,s=new _o,o=new ki(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(n,function(a){const l=r.parse(a);l&&(l.image!==void 0?s.image=l.image:l.data!==void 0&&(s.image.width=l.width,s.image.height=l.height,s.image.data=l.data),s.wrapS=l.wrapS!==void 0?l.wrapS:xt,s.wrapT=l.wrapT!==void 0?l.wrapT:xt,s.magFilter=l.magFilter!==void 0?l.magFilter:rt,s.minFilter=l.minFilter!==void 0?l.minFilter:rt,s.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.encoding!==void 0&&(s.encoding=l.encoding),l.flipY!==void 0&&(s.flipY=l.flipY),l.format!==void 0&&(s.format=l.format),l.type!==void 0&&(s.type=l.type),l.mipmaps!==void 0&&(s.mipmaps=l.mipmaps,s.minFilter=Gr),l.mipmapCount===1&&(s.minFilter=rt),l.generateMipmaps!==void 0&&(s.generateMipmaps=l.generateMipmaps),s.needsUpdate=!0,e&&e(s,l))},t,i),s}});function Or(n){ut.call(this,n)}Or.prototype=Object.assign(Object.create(ut.prototype),{constructor:Or,load:function(n,e,t,i){const r=new lt,s=new ic(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(n,function(o){r.image=o;const a=n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0;r.format=a?vn:Pt,r.needsUpdate=!0,e!==void 0&&e(r)},t,i),r}});function _t(){this.type="Curve",this.arcLengthDivisions=200}Object.assign(_t.prototype,{getPoint:function(){return console.warn("THREE.Curve: .getPoint() not implemented."),null},getPointAt:function(n,e){const t=this.getUtoTmapping(n);return this.getPoint(t,e)},getPoints:function(n=5){const e=[];for(let t=0;t<=n;t++)e.push(this.getPoint(t/n));return e},getSpacedPoints:function(n=5){const e=[];for(let t=0;t<=n;t++)e.push(this.getPointAt(t/n));return e},getLength:function(){const n=this.getLengths();return n[n.length-1]},getLengths:function(n){if(n===void 0&&(n=this.arcLengthDivisions),this.cacheArcLengths&&this.cacheArcLengths.length===n+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let t,i=this.getPoint(0),r=0;e.push(0);for(let s=1;s<=n;s++)t=this.getPoint(s/n),r+=t.distanceTo(i),e.push(r),i=t;return this.cacheArcLengths=e,e},updateArcLengths:function(){this.needsUpdate=!0,this.getLengths()},getUtoTmapping:function(n,e){const t=this.getLengths();let i=0;const r=t.length;let s;e?s=e:s=n*t[r-1];let o=0,a=r-1,l;for(;o<=a;)if(i=Math.floor(o+(a-o)/2),l=t[i]-s,l<0)o=i+1;else if(l>0)a=i-1;else{a=i;break}if(i=a,t[i]===s)return i/(r-1);const c=t[i],h=t[i+1]-c,d=(s-c)/h;return(i+d)/(r-1)},getTangent:function(n,e){let i=n-1e-4,r=n+1e-4;i<0&&(i=0),r>1&&(r=1);const s=this.getPoint(i),o=this.getPoint(r),a=e||(s.isVector2?new J:new M);return a.copy(o).sub(s).normalize(),a},getTangentAt:function(n,e){const t=this.getUtoTmapping(n);return this.getTangent(t,e)},computeFrenetFrames:function(n,e){const t=new M,i=[],r=[],s=[],o=new M,a=new de;for(let d=0;d<=n;d++){const f=d/n;i[d]=this.getTangentAt(f,new M),i[d].normalize()}r[0]=new M,s[0]=new M;let l=Number.MAX_VALUE;const c=Math.abs(i[0].x),u=Math.abs(i[0].y),h=Math.abs(i[0].z);c<=l&&(l=c,t.set(1,0,0)),u<=l&&(l=u,t.set(0,1,0)),h<=l&&t.set(0,0,1),o.crossVectors(i[0],t).normalize(),r[0].crossVectors(i[0],o),s[0].crossVectors(i[0],r[0]);for(let d=1;d<=n;d++){if(r[d]=r[d-1].clone(),s[d]=s[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const f=Math.acos(Me.clamp(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(a.makeRotationAxis(o,f))}s[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(Me.clamp(r[0].dot(r[n]),-1,1));d/=n,i[0].dot(o.crossVectors(r[0],r[n]))>0&&(d=-d);for(let f=1;f<=n;f++)r[f].applyMatrix4(a.makeRotationAxis(i[f],d*f)),s[f].crossVectors(i[f],r[f])}return{tangents:i,normals:r,binormals:s}},clone:function(){return new this.constructor().copy(this)},copy:function(n){return this.arcLengthDivisions=n.arcLengthDivisions,this},toJSON:function(){const n={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return n.arcLengthDivisions=this.arcLengthDivisions,n.type=this.type,n},fromJSON:function(n){return this.arcLengthDivisions=n.arcLengthDivisions,this}});class qr extends _t{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const i=t||new J,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}qr.prototype.isEllipseCurve=!0;class rc extends qr{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.type="ArcCurve"}}rc.prototype.isArcCurve=!0;function yo(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let d=(o-s)/c-(a-s)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,r(o,a,d,f)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const xr=new M,Es=new yo,Ts=new yo,As=new yo;class sc extends _t{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new M){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(xr.subVectors(r[0],r[1]).add(r[0]),c=xr);const h=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(xr.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=xr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),p<1e-4&&(p=_),v<1e-4&&(v=_),Es.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,p,_,v),Ts.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,p,_,v),As.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,p,_,v)}else this.curveType==="catmullrom"&&(Es.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Ts.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),As.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return i.set(Es.calc(l),Ts.calc(l),As.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new M().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}sc.prototype.isCatmullRomCurve3=!0;function Ka(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function vg(n,e){const t=1-n;return t*t*e}function yg(n,e){return 2*(1-n)*n*e}function xg(n,e){return n*n*e}function Ti(n,e,t,i){return vg(n,e)+yg(n,t)+xg(n,i)}function bg(n,e){const t=1-n;return t*t*t*e}function wg(n,e){const t=1-n;return 3*t*t*n*e}function Mg(n,e){return 3*(1-n)*n*n*e}function Sg(n,e){return n*n*n*e}function Ai(n,e,t,i,r){return bg(n,e)+wg(n,t)+Mg(n,i)+Sg(n,r)}class xo extends _t{constructor(e=new J,t=new J,i=new J,r=new J){super(),this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new J){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ai(e,r.x,s.x,o.x,a.x),Ai(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}xo.prototype.isCubicBezierCurve=!0;class oc extends _t{constructor(e=new M,t=new M,i=new M,r=new M){super(),this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new M){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ai(e,r.x,s.x,o.x,a.x),Ai(e,r.y,s.y,o.y,a.y),Ai(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}oc.prototype.isCubicBezierCurve3=!0;class Yr extends _t{constructor(e=new J,t=new J){super(),this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new J){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const i=t||new J;return i.copy(this.v2).sub(this.v1).normalize(),i}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Yr.prototype.isLineCurve=!0;class Eg extends _t{constructor(e=new M,t=new M){super(),this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new M){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class bo extends _t{constructor(e=new J,t=new J,i=new J){super(),this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new J){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Ti(e,r.x,s.x,o.x),Ti(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}bo.prototype.isQuadraticBezierCurve=!0;class ac extends _t{constructor(e=new M,t=new M,i=new M){super(),this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new M){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Ti(e,r.x,s.x,o.x),Ti(e,r.y,s.y,o.y),Ti(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}ac.prototype.isQuadraticBezierCurve3=!0;class wo extends _t{constructor(e=[]){super(),this.type="SplineCurve",this.points=e}getPoint(e,t=new J){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(Ka(a,l.x,c.x,u.x,h.x),Ka(a,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new J().fromArray(r))}return this}}wo.prototype.isSplineCurve=!0;var Tg=Object.freeze({__proto__:null,ArcCurve:rc,CatmullRomCurve3:sc,CubicBezierCurve:xo,CubicBezierCurve3:oc,EllipseCurve:qr,LineCurve:Yr,LineCurve3:Eg,QuadraticBezierCurve:bo,QuadraticBezierCurve3:ac,SplineCurve:wo});class Ag extends _t{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Yr(t,e))}getPoint(e){const t=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=t){const s=i[r]-t,o=this.curves[r],a=o.getLength(),l=a===0?0:1-s/a;return o.getPointAt(l)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o&&o.isEllipseCurve?e*2:o&&(o.isLineCurve||o.isLineCurve3)?1:o&&o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new Tg[r.type]().fromJSON(r))}return this}}class Js extends Ag{constructor(e){super(),this.type="Path",this.currentPoint=new J,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Yr(this.currentPoint.clone(),new J(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new bo(this.currentPoint.clone(),new J(e,t),new J(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new xo(this.currentPoint.clone(),new J(e,t),new J(i,r),new J(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new wo(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,r,s,o,a,l),this}absellipse(e,t,i,r,s,o,a,l){const c=new qr(e,t,i,r,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Mo extends Js{constructor(e){super(e),this.uuid=Me.generateUUID(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new Js().fromJSON(r))}return this}}class Ht extends be{constructor(e,t=1){super(),this.type="Light",this.color=new fe(e),this.intensity=t}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}Ht.prototype.isLight=!0;class Lg extends Ht{constructor(e,t,i){super(e,i),this.type="HemisphereLight",this.position.copy(be.DefaultUp),this.updateMatrix(),this.groundColor=new fe(t)}copy(e){return Ht.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}}Lg.prototype.isHemisphereLight=!0;const el=new de,tl=new M,nl=new M;class So{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.mapSize=new J(512,512),this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wr,this._frameExtents=new J(1,1),this._viewportCount=1,this._viewports=[new ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;tl.setFromMatrixPosition(e.matrixWorld),t.position.copy(tl),nl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(nl),t.updateMatrixWorld(),el.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(el),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(t.projectionMatrix),i.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class lc extends So{constructor(){super(new ft(50,1,.5,500)),this.focus=1}updateMatrices(e){const t=this.camera,i=Me.RAD2DEG*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}lc.prototype.isSpotLightShadow=!0;class Cg extends Ht{constructor(e,t,i=0,r=Math.PI/3,s=0,o=1){super(e,t),this.type="SpotLight",this.position.copy(be.DefaultUp),this.updateMatrix(),this.target=new be,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.shadow=new lc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}Cg.prototype.isSpotLight=!0;const il=new de,pi=new M,Ls=new M;class cc extends So{constructor(){super(new ft(90,1,.5,500)),this._frameExtents=new J(4,2),this._viewportCount=6,this._viewports=[new ke(2,1,1,1),new ke(0,1,1,1),new ke(3,1,1,1),new ke(1,1,1,1),new ke(3,0,1,1),new ke(1,0,1,1)],this._cubeDirections=[new M(1,0,0),new M(-1,0,0),new M(0,0,1),new M(0,0,-1),new M(0,1,0),new M(0,-1,0)],this._cubeUps=[new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,0,1),new M(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),pi.setFromMatrixPosition(e.matrixWorld),i.position.copy(pi),Ls.copy(i.position),Ls.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Ls),i.updateMatrixWorld(),r.makeTranslation(-pi.x,-pi.y,-pi.z),il.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(il)}}cc.prototype.isPointLightShadow=!0;class Rg extends Ht{constructor(e,t,i=0,r=1){super(e,t),this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new cc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}Rg.prototype.isPointLight=!0;class hc extends Zn{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=be.prototype.toJSON.call(this,e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}hc.prototype.isOrthographicCamera=!0;class uc extends So{constructor(){super(new hc(-5,5,5,-5,.5,500))}}uc.prototype.isDirectionalLightShadow=!0;class Pg extends Ht{constructor(e,t){super(e,t),this.type="DirectionalLight",this.position.copy(be.DefaultUp),this.updateMatrix(),this.target=new be,this.shadow=new uc}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}Pg.prototype.isDirectionalLight=!0;class Dg extends Ht{constructor(e,t){super(e,t),this.type="AmbientLight"}}Dg.prototype.isAmbientLight=!0;class Ig extends Ht{constructor(e,t,i=10,r=10){super(e,t),this.type="RectAreaLight",this.width=i,this.height=r}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}Ig.prototype.isRectAreaLight=!0;class dc{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new M)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const i=e.x,r=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*r),t.addScaledVector(o[2],.488603*s),t.addScaledVector(o[3],.488603*i),t.addScaledVector(o[4],1.092548*(i*r)),t.addScaledVector(o[5],1.092548*(r*s)),t.addScaledVector(o[6],.315392*(3*s*s-1)),t.addScaledVector(o[7],1.092548*(i*s)),t.addScaledVector(o[8],.546274*(i*i-r*r)),t}getIrradianceAt(e,t){const i=e.x,r=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*r),t.addScaledVector(o[2],2*.511664*s),t.addScaledVector(o[3],2*.511664*i),t.addScaledVector(o[4],2*.429043*i*r),t.addScaledVector(o[5],2*.429043*r*s),t.addScaledVector(o[6],.743125*s*s-.247708),t.addScaledVector(o[7],2*.429043*i*s),t.addScaledVector(o[8],.429043*(i*i-r*r)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(e.coefficients[i],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let i=0;i<9;i++)this.coefficients[i].lerp(e.coefficients[i],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const i=this.coefficients;for(let r=0;r<9;r++)i[r].fromArray(e,t+r*3);return this}toArray(e=[],t=0){const i=this.coefficients;for(let r=0;r<9;r++)i[r].toArray(e,t+r*3);return e}static getBasisAt(e,t){const i=e.x,r=e.y,s=e.z;t[0]=.282095,t[1]=.488603*r,t[2]=.488603*s,t[3]=.488603*i,t[4]=1.092548*i*r,t[5]=1.092548*r*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*i*s,t[8]=.546274*(i*i-r*r)}}dc.prototype.isSphericalHarmonics3=!0;class Eo extends Ht{constructor(e=new dc,t=1){super(void 0,t),this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}Eo.prototype.isLightProbe=!0;const Ng={decodeText:function(n){if(typeof TextDecoder<"u")return new TextDecoder().decode(n);let e="";for(let t=0,i=n.length;t<i;t++)e+=String.fromCharCode(n[t]);try{return decodeURIComponent(escape(e))}catch{return e}},extractUrlBase:function(n){const e=n.lastIndexOf("/");return e===-1?"./":n.substr(0,e+1)}};function $s(){Be.call(this),this.type="InstancedBufferGeometry",this.instanceCount=1/0}$s.prototype=Object.assign(Object.create(Be.prototype),{constructor:$s,isInstancedBufferGeometry:!0,copy:function(n){return Be.prototype.copy.call(this,n),this.instanceCount=n.instanceCount,this},clone:function(){return new this.constructor().copy(this)},toJSON:function(){const n=Be.prototype.toJSON.call(this);return n.instanceCount=this.instanceCount,n.isInstancedBufferGeometry=!0,n}});function rl(n,e,t,i){typeof t=="number"&&(i=t,t=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),Ae.call(this,n,e,t),this.meshPerAttribute=i||1}rl.prototype=Object.assign(Object.create(Ae.prototype),{constructor:rl,isInstancedBufferAttribute:!0,copy:function(n){return Ae.prototype.copy.call(this,n),this.meshPerAttribute=n.meshPerAttribute,this},toJSON:function(){const n=Ae.prototype.toJSON.call(this);return n.meshPerAttribute=this.meshPerAttribute,n.isInstancedBufferAttribute=!0,n}});function sl(n){typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),ut.call(this,n),this.options={premultiplyAlpha:"none"}}sl.prototype=Object.assign(Object.create(ut.prototype),{constructor:sl,isImageBitmapLoader:!0,setOptions:function(e){return this.options=e,this},load:function(n,e,t,i){n===void 0&&(n=""),this.path!==void 0&&(n=this.path+n),n=this.manager.resolveURL(n);const r=this,s=$n.get(n);if(s!==void 0)return r.manager.itemStart(n),setTimeout(function(){e&&e(s),r.manager.itemEnd(n)},0),s;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(n,o).then(function(a){return a.blob()}).then(function(a){return createImageBitmap(a,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(a){$n.add(n,a),e&&e(a),r.manager.itemEnd(n)}).catch(function(a){i&&i(a),r.manager.itemError(n),r.manager.itemEnd(n)}),r.manager.itemStart(n)}});let br;const Fg={getContext:function(){return br===void 0&&(br=new(window.AudioContext||window.webkitAudioContext)),br},setContext:function(n){br=n}};class Og extends ut{constructor(e){super(e)}load(e,t,i,r){const s=this,o=new ki(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{const l=a.slice(0);Fg.getContext().decodeAudioData(l,function(u){t(u)})}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},i,r)}}class Bg extends Eo{constructor(e,t,i=1){super(void 0,i);const r=new fe().set(e),s=new fe().set(t),o=new M(r.r,r.g,r.b),a=new M(s.r,s.g,s.b),l=Math.sqrt(Math.PI),c=l*Math.sqrt(.75);this.sh.coefficients[0].copy(o).add(a).multiplyScalar(l),this.sh.coefficients[1].copy(o).sub(a).multiplyScalar(c)}}Bg.prototype.isHemisphereLightProbe=!0;class zg extends Eo{constructor(e,t=1){super(void 0,t);const i=new fe().set(e);this.sh.coefficients[0].set(i.r,i.g,i.b).multiplyScalar(2*Math.sqrt(Math.PI))}}zg.prototype.isAmbientLightProbe=!0;new de;new de;class kg{constructor(e){this.autoStart=e!==void 0?e:!0,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ol(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ol();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ol(){return(typeof performance>"u"?Date:performance).now()}class Hg extends be{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}class Ug{constructor(e,t,i){this.binding=e,this.valueSize=i;let r,s,o;switch(t){case"quaternion":r=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":r=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:r=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,r=this.valueSize,s=e*r+r;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==r;++a)i[s+a]=i[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(i,s,0,a,r)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,r=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,r=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(i,r,l,1-s,t)}o>0&&this._mixBufferRegionAdditive(i,r,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){a.setValue(i,r);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,r=i*this._origIndex;e.getValue(t,r);for(let s=i,o=r;s!==o;++s)t[s]=t[r+s%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,r,s){if(r>=.5)for(let o=0;o!==s;++o)e[t+o]=e[i+o]}_slerp(e,t,i,r){ot.slerpFlat(e,t,e,t,e,i,r)}_slerpAdditive(e,t,i,r,s){const o=this._workIndex*s;ot.multiplyQuaternionsFlat(e,o,e,t,e,i),ot.slerpFlat(e,t,e,t,e,o,r)}_lerp(e,t,i,r,s){const o=1-r;for(let a=0;a!==s;++a){const l=t+a;e[l]=e[l]*o+e[i+a]*r}}_lerpAdditive(e,t,i,r,s){for(let o=0;o!==s;++o){const a=t+o;e[a]=e[a]+e[i+o]*r}}}const To="\\[\\]\\.:\\/",Gg=new RegExp("["+To+"]","g"),Ao="[^"+To+"]",Vg="[^"+To.replace("\\.","")+"]",Wg=/((?:WC+[\/:])*)/.source.replace("WC",Ao),jg=/(WCOD+)?/.source.replace("WCOD",Vg),Xg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ao),qg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ao),Yg=new RegExp("^"+Wg+jg+Xg+qg+"$"),Zg=["material","materials","bones"];function fc(n,e,t){const i=t||Mt.parseTrackName(e);this._targetGroup=n,this._bindings=n.subscribe_(e,i)}Object.assign(fc.prototype,{getValue:function(n,e){this.bind();const t=this._targetGroup.nCachedObjects_,i=this._bindings[t];i!==void 0&&i.getValue(n,e)},setValue:function(n,e){const t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=t.length;i!==r;++i)t[i].setValue(n,e)},bind:function(){const n=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=n.length;e!==t;++e)n[e].bind()},unbind:function(){const n=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=n.length;e!==t;++e)n[e].unbind()}});function Mt(n,e,t){this.path=e,this.parsedPath=t||Mt.parseTrackName(e),this.node=Mt.findNode(n,this.parsedPath.nodeName)||n,this.rootNode=n}Object.assign(Mt,{Composite:fc,create:function(n,e,t){return n&&n.isAnimationObjectGroup?new Mt.Composite(n,e,t):new Mt(n,e,t)},sanitizeNodeName:function(n){return n.replace(/\s/g,"_").replace(Gg,"")},parseTrackName:function(n){const e=Yg.exec(n);if(!e)throw new Error("PropertyBinding: Cannot parse trackName: "+n);const t={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=t.nodeName&&t.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=t.nodeName.substring(i+1);Zg.indexOf(r)!==-1&&(t.nodeName=t.nodeName.substring(0,i),t.objectName=r)}if(t.propertyName===null||t.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+n);return t},findNode:function(n,e){if(!e||e===""||e==="."||e===-1||e===n.name||e===n.uuid)return n;if(n.skeleton){const t=n.skeleton.getBoneByName(e);if(t!==void 0)return t}if(n.children){const t=function(r){for(let s=0;s<r.length;s++){const o=r[s];if(o.name===e||o.uuid===e)return o;const a=t(o.children);if(a)return a}return null},i=t(n.children);if(i)return i}return null}});Object.assign(Mt.prototype,{_getValue_unavailable:function(){},_setValue_unavailable:function(){},BindingType:{Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Versioning:{None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},GetterByBindingType:[function(e,t){e[t]=this.node[this.propertyName]},function(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]},function(e,t){e[t]=this.resolvedProperty[this.propertyIndex]},function(e,t){this.resolvedProperty.toArray(e,t)}],SetterByBindingTypeAndVersioning:[[function(e,t){this.targetObject[this.propertyName]=e[t]},function(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0},function(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]},function(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0},function(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(e,t){this.resolvedProperty[this.propertyIndex]=e[t]},function(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0},function(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(e,t){this.resolvedProperty.fromArray(e,t)},function(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0},function(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}]],getValue:function(e,t){this.bind(),this.getValue(e,t)},setValue:function(e,t){this.bind(),this.setValue(e,t)},bind:function(){let n=this.node;const e=this.parsedPath,t=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(n||(n=Mt.findNode(this.rootNode,e.nodeName)||this.rootNode,this.node=n),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!n){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(t){let l=e.objectIndex;switch(t){case"materials":if(!n.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!n.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}n=n.material.materials;break;case"bones":if(!n.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}n=n.skeleton.bones;for(let c=0;c<n.length;c++)if(n[c].name===l){l=c;break}break;default:if(n[t]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}n=n[t]}if(l!==void 0){if(n[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,n);return}n=n[l]}}const s=n[i];if(s===void 0){const l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",n);return}let o=this.Versioning.None;this.targetObject=n,n.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:n.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let a=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!n.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(n.geometry.isBufferGeometry){if(!n.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}n.morphTargetDictionary[r]!==void 0&&(r=n.morphTargetDictionary[r])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}a=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(a=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(a=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][o]},unbind:function(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}});Object.assign(Mt.prototype,{_getValue_unbound:Mt.prototype.getValue,_setValue_unbound:Mt.prototype.setValue});class Jg{constructor(e,t,i=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=r;const s=t.tracks,o=s.length,a=new Array(o),l={endingStart:Vn,endingEnd:Vn};for(let c=0;c!==o;++c){const u=s[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Jh,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){const r=this._clip.duration,s=e._clip.duration,o=s/r,a=r/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const r=this._mixer,s=r.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=r._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+i,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,r){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*i;if(l<0||i===0)return;this._startTime=null,t=i*l}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Al:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case uo:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulate(r,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const r=i.evaluate(e)[0];t*=r,e>i.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const r=i.evaluate(e)[0];t*=r,e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let r=this.time+e,s=this._loopCount;const o=i===$h;if(e===0)return s===-1?r:o&&(s&1)===1?t-r:r;if(i===Zh){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),r>=t||r<0){const a=Math.floor(r/t);r-=t*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=r;if(o&&(s&1)===1)return t-r}return r}_setEndings(e,t,i){const r=this._interpolantSettings;i?(r.endingStart=Wn,r.endingEnd=Wn):(e?r.endingStart=this.zeroSlopeAtStart?Wn:Vn:r.endingStart=Rr,t?r.endingEnd=this.zeroSlopeAtEnd?Wn:Vn:r.endingEnd=Rr)}_scheduleFading(e,t,i){const r=this._mixer,s=r.time;let o=this._weightInterpolant;o===null&&(o=r._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=i,this}}class $g extends Ut{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const i=e._localRoot||this._root,r=e._clip.tracks,s=r.length,o=e._propertyBindings,a=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==s;++h){const d=r[h],f=d.name;let p=u[f];if(p!==void 0)o[h]=p;else{if(p=o[h],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,f));continue}const _=t&&t._propertyBindings[h].binding.parsedPath;p=new Ug(Mt.create(i,f,_),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,f),o[h]=p}a[h].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,r=e._clip.uuid,s=this._actionsByClip[r];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,r,i)}const t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){const s=t[i];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){const s=t[i];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const r=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=r.length,r.push(e),o.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],r=e._cacheIndex;i._cacheIndex=r,t[r]=i,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){const s=t[i];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,r=this._nActiveActions++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,r=--this._nActiveActions,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_addInactiveBinding(e,t,i){const r=this._bindingsByRootAndName,s=this._bindings;let o=r[t];o===void 0&&(o={},r[t]=o),o[i]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,r=i.rootNode.uuid,s=i.path,o=this._bindingsByRootAndName,a=o[r],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[r]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,r=this._nActiveBindings++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,r=--this._nActiveBindings,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new Ir(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,r=--this._nActiveControlInterpolants,s=t[r];e.__cacheIndex=r,t[r]=e,s.__cacheIndex=i,t[i]=s}clipAction(e,t,i){const r=t||this._root,s=r.uuid;let o=typeof e=="string"?Ja.findByName(r,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(i===void 0&&(o!==null?i=o.blendMode:i=uo),l!==void 0){const h=l.actionByRoot[s];if(h!==void 0&&h.blendMode===i)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const u=new Jg(this,o,t,i);return this._bindAction(u,c),this._addInactiveAction(u,a,s),u}existingAction(e,t){const i=t||this._root,r=i.uuid,s=typeof e=="string"?Ja.findByName(i,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[r]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,r=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(r,e,s,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,r=this._actionsByClip,s=r[i];if(s!==void 0){const o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete r[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const o in i){const a=i[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const r=this._bindingsByRootAndName,s=r[t];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}$g.prototype._controlInterpolantsResultBuffer=new Float32Array(1);function al(n,e,t){bt.call(this,n,e),this.meshPerAttribute=t||1}al.prototype=Object.assign(Object.create(bt.prototype),{constructor:al,isInstancedInterleavedBuffer:!0,copy:function(n){return bt.prototype.copy.call(this,n),this.meshPerAttribute=n.meshPerAttribute,this},clone:function(n){const e=bt.prototype.clone.call(this,n);return e.meshPerAttribute=this.meshPerAttribute,e},toJSON:function(n){const e=bt.prototype.toJSON.call(this,n);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}});function pc(n,e,t,i,r){this.buffer=n,this.type=e,this.itemSize=t,this.elementSize=i,this.count=r,this.version=0}Object.defineProperty(pc.prototype,"needsUpdate",{set:function(n){n===!0&&this.version++}});Object.assign(pc.prototype,{isGLBufferAttribute:!0,setBuffer:function(n){return this.buffer=n,this},setType:function(n,e){return this.type=n,this.elementSize=e,this},setItemSize:function(n){return this.itemSize=n,this},setCount:function(n){return this.count=n,this}});function mc(n,e,t=0,i=1/0){this.ray=new bn(n,e),this.near=t,this.far=i,this.camera=null,this.layers=new Ll,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}},Object.defineProperties(this.params,{PointCloud:{get:function(){return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."),this.Points}}})}function ll(n,e){return n.distance-e.distance}function Qs(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let s=0,o=r.length;s<o;s++)Qs(r[s],e,t,!0)}}Object.assign(mc.prototype,{set:function(n,e){this.ray.set(n,e)},setFromCamera:function(n,e){e&&e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(n.x,n.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e&&e.isOrthographicCamera?(this.ray.origin.set(n.x,n.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)},intersectObject:function(n,e=!1,t=[]){return Qs(n,this,t,e),t.sort(ll),t},intersectObjects:function(n,e=!1,t=[]){for(let i=0,r=n.length;i<r;i++)Qs(n[i],this,t,e);return t.sort(ll),t}});class cl{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Me.clamp(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}function Br(n){be.call(this),this.material=n,this.render=function(){},this.hasPositions=!1,this.hasNormals=!1,this.hasColors=!1,this.hasUvs=!1,this.positionArray=null,this.normalArray=null,this.colorArray=null,this.uvArray=null,this.count=0}Br.prototype=Object.create(be.prototype);Br.prototype.constructor=Br;Br.prototype.isImmediateRenderObject=!0;const nn=new M,wr=new de,Cs=new de;class Qg extends Dr{constructor(e){const t=gc(e),i=new Be,r=[],s=[],o=new fe(0,0,1),a=new fe(0,1,0);for(let c=0;c<t.length;c++){const u=t[c];u.parent&&u.parent.isBone&&(r.push(0,0,0),r.push(0,0,0),s.push(o.r,o.g,o.b),s.push(a.r,a.g,a.b))}i.setAttribute("position",new Xe(r,3)),i.setAttribute("color",new Xe(s,3));const l=new ji({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(i,l),this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,i=this.geometry,r=i.getAttribute("position");Cs.copy(this.root.matrixWorld).invert();for(let s=0,o=0;s<t.length;s++){const a=t[s];a.parent&&a.parent.isBone&&(wr.multiplyMatrices(Cs,a.matrixWorld),nn.setFromMatrixPosition(wr),r.setXYZ(o,nn.x,nn.y,nn.z),wr.multiplyMatrices(Cs,a.parent.matrixWorld),nn.setFromMatrixPosition(wr),r.setXYZ(o+1,nn.x,nn.y,nn.z),o+=2)}i.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}}function gc(n){const e=[];n&&n.isBone&&e.push(n);for(let t=0;t<n.children.length;t++)e.push.apply(e,gc(n.children[t]));return e}class Kg extends Dr{constructor(e=10,t=10,i=4473924,r=8947848){i=new fe(i),r=new fe(r);const s=t/2,o=e/t,a=e/2,l=[],c=[];for(let d=0,f=0,p=-a;d<=t;d++,p+=o){l.push(-a,0,p,a,0,p),l.push(p,0,-a,p,0,a);const _=d===s?i:r;_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3}const u=new Be;u.setAttribute("position",new Xe(l,3)),u.setAttribute("color",new Xe(c,3));const h=new ji({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}}const e_=new Float32Array(1);new Int32Array(e_.buffer);const t_=new po({side:tt,depthWrite:!1,depthTest:!1});new at(new mo,t_);_t.create=function(n,e){return console.log("THREE.Curve.create() has been deprecated"),n.prototype=Object.create(_t.prototype),n.prototype.constructor=n,n.prototype.getPoint=e,n};Js.prototype.fromPoints=function(n){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(n)};Kg.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};Qg.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};ut.prototype.extractUrlBase=function(n){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),Ng.extractUrlBase(n)};ut.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};Et.prototype.center=function(n){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(n)};Et.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Et.prototype.isIntersectionBox=function(n){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(n)};Et.prototype.isIntersectionSphere=function(n){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(n)};Et.prototype.size=function(n){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(n)};ei.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Wr.prototype.setFromMatrix=function(n){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(n)};Me.random16=function(){return console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead."),Math.random()};Me.nearestPowerOfTwo=function(n){return console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."),Me.floorPowerOfTwo(n)};Me.nextPowerOfTwo=function(n){return console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."),Me.ceilPowerOfTwo(n)};st.prototype.flattenToArrayOffset=function(n,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(n,e)};st.prototype.multiplyVector3=function(n){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),n.applyMatrix3(this)};st.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};st.prototype.applyToBufferAttribute=function(n){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),n.applyMatrix3(this)};st.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};st.prototype.getInverse=function(n){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(n).invert()};de.prototype.extractPosition=function(n){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(n)};de.prototype.flattenToArrayOffset=function(n,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(n,e)};de.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new M().setFromMatrixColumn(this,3)};de.prototype.setRotationFromQuaternion=function(n){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(n)};de.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};de.prototype.multiplyVector3=function(n){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),n.applyMatrix4(this)};de.prototype.multiplyVector4=function(n){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),n.applyMatrix4(this)};de.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};de.prototype.rotateAxis=function(n){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),n.transformDirection(this)};de.prototype.crossVector=function(n){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),n.applyMatrix4(this)};de.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};de.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};de.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};de.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};de.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};de.prototype.applyToBufferAttribute=function(n){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),n.applyMatrix4(this)};de.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};de.prototype.makeFrustum=function(n,e,t,i,r,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(n,e,i,t,r,s)};de.prototype.getInverse=function(n){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(n).invert()};zt.prototype.isIntersectionLine=function(n){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(n)};ot.prototype.multiplyVector3=function(n){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),n.applyQuaternion(this)};ot.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};bn.prototype.isIntersectionBox=function(n){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(n)};bn.prototype.isIntersectionPlane=function(n){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(n)};bn.prototype.isIntersectionSphere=function(n){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(n)};$e.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};$e.prototype.barycoordFromPoint=function(n,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(n,e)};$e.prototype.midpoint=function(n){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(n)};$e.prototypenormal=function(n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(n)};$e.prototype.plane=function(n){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(n)};$e.barycoordFromPoint=function(n,e,t,i,r){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),$e.getBarycoord(n,e,t,i,r)};$e.normal=function(n,e,t,i){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),$e.getNormal(n,e,t,i)};Mo.prototype.extractAllPoints=function(n){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(n)};Mo.prototype.extrude=function(n){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new Xr(this,n)};Mo.prototype.makeGeometry=function(n){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new rg(this,n)};J.prototype.fromAttribute=function(n,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(n,e,t)};J.prototype.distanceToManhattan=function(n){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(n)};J.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};M.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};M.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};M.prototype.getPositionFromMatrix=function(n){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(n)};M.prototype.getScaleFromMatrix=function(n){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(n)};M.prototype.getColumnFromMatrix=function(n,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,n)};M.prototype.applyProjection=function(n){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(n)};M.prototype.fromAttribute=function(n,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(n,e,t)};M.prototype.distanceToManhattan=function(n){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(n)};M.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};ke.prototype.fromAttribute=function(n,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(n,e,t)};ke.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};be.prototype.getChildByName=function(n){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(n)};be.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};be.prototype.translate=function(n,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,n)};be.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};be.prototype.applyMatrix=function(n){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(n)};Object.defineProperties(be.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(n){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=n}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});at.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(at.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),Qh},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});Us.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};Object.defineProperty(_t.prototype,"__arcLengthDivisions",{get:function(){return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions},set:function(n){console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions=n}});ft.prototype.setLens=function(n,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(n)};Object.defineProperties(Ht.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(n){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=n}},shadowCameraLeft:{set:function(n){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=n}},shadowCameraRight:{set:function(n){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=n}},shadowCameraTop:{set:function(n){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=n}},shadowCameraBottom:{set:function(n){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=n}},shadowCameraNear:{set:function(n){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=n}},shadowCameraFar:{set:function(n){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=n}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(n){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=n}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(n){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=n}},shadowMapHeight:{set:function(n){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=n}}});Object.defineProperties(Ae.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===Pi},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(Pi)}}});Ae.prototype.setDynamic=function(n){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(n===!0?Pi:Wi),this};Ae.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},Ae.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Be.prototype.addIndex=function(n){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(n)};Be.prototype.addAttribute=function(n,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(n,new Ae(arguments[1],arguments[2]))):n==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(n,e)};Be.prototype.addDrawCall=function(n,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(n,e)};Be.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};Be.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};Be.prototype.removeAttribute=function(n){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(n)};Be.prototype.applyMatrix=function(n){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(n)};Object.defineProperties(Be.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});Object.defineProperties($s.prototype,{maxInstancedCount:{get:function(){return console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."),this.instanceCount},set:function(n){console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."),this.instanceCount=n}}});Object.defineProperties(mc.prototype,{linePrecision:{get:function(){return console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."),this.params.Line.threshold},set:function(n){console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."),this.params.Line.threshold=n}}});Object.defineProperties(bt.prototype,{dynamic:{get:function(){return console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."),this.usage===Pi},set:function(n){console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."),this.setUsage(n)}}});bt.prototype.setDynamic=function(n){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(n===!0?Pi:Wi),this};bt.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Xr.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};Xr.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};Xr.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};vo.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};Object.defineProperties(Ye.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new fe}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(n){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===Ml}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(n){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=n}}});Object.defineProperties(Jn.prototype,{transparency:{get:function(){return console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."),this.transmission},set:function(n){console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."),this.transmission=n}}});Object.defineProperties(St.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(n){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=n}}});He.prototype.clearTarget=function(n,e,t,i){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(n),this.clear(e,t,i)};He.prototype.animate=function(n){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(n)};He.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};He.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};He.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};He.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};He.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};He.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};He.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};He.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};He.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};He.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};He.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};He.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};He.prototype.enableScissorTest=function(n){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(n)};He.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};He.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};He.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};He.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};He.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};He.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};He.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};He.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};He.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};He.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(He.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(n){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=n}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(n){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=n}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(n){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=n===!0?fo:Vi}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}});Object.defineProperties(jl.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(yn.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(n){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=n}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(n){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=n}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(n){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=n}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(n){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=n}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(n){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=n}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(n){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=n}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(n){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=n}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(n){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=n}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(n){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=n}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(n){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=n}}});Hg.prototype.load=function(n){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const e=this;return new Og().load(n,function(i){e.setBuffer(i)}),this};go.prototype.updateCubeMap=function(n,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(n,e)};go.prototype.clear=function(n,e,t,i){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(n,e,t,i)};Kn.crossOrigin=void 0;Kn.loadTexture=function(n,e,t,i){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const r=new Or;r.setCrossOrigin(this.crossOrigin);const s=r.load(n,t,void 0,i);return e&&(s.mapping=e),s};Kn.loadTextureCube=function(n,e,t,i){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const r=new _g;r.setCrossOrigin(this.crossOrigin);const s=r.load(n,t,void 0,i);return e&&(s.mapping=e),s};Kn.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};Kn.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bl);var Hi=function(n,e){e===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),e===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=n,this.domElement=e,this.enabled=!0,this.target=new M,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:rn.ROTATE,MIDDLE:rn.DOLLY,RIGHT:rn.PAN},this.touches={ONE:sn.ROTATE,TWO:sn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return c.phi},this.getAzimuthalAngle=function(){return c.theta},this.listenToKeyEvents=function(w){w.addEventListener("keydown",se),this._domElementKeyEvents=w},this.saveState=function(){t.target0.copy(t.target),t.position0.copy(t.object.position),t.zoom0=t.object.zoom},this.reset=function(){t.target.copy(t.target0),t.object.position.copy(t.position0),t.object.zoom=t.zoom0,t.object.updateProjectionMatrix(),t.dispatchEvent(i),t.update(),a=o.NONE},this.update=function(){var w=new M,V=new ot().setFromUnitVectors(n.up,new M(0,1,0)),re=V.clone().invert(),H=new M,ue=new ot,Ce=2*Math.PI;return function(){var Nt=t.object.position;w.copy(Nt).sub(t.target),w.applyQuaternion(V),c.setFromVector3(w),t.autoRotate&&a===o.NONE&&B(O()),t.enableDamping?(c.theta+=u.theta*t.dampingFactor,c.phi+=u.phi*t.dampingFactor):(c.theta+=u.theta,c.phi+=u.phi);var Oe=t.minAzimuthAngle,Qe=t.maxAzimuthAngle;return isFinite(Oe)&&isFinite(Qe)&&(Oe<-Math.PI?Oe+=Ce:Oe>Math.PI&&(Oe-=Ce),Qe<-Math.PI?Qe+=Ce:Qe>Math.PI&&(Qe-=Ce),Oe<=Qe?c.theta=Math.max(Oe,Math.min(Qe,c.theta)):c.theta=c.theta>(Oe+Qe)/2?Math.max(Oe,c.theta):Math.min(Qe,c.theta)),c.phi=Math.max(t.minPolarAngle,Math.min(t.maxPolarAngle,c.phi)),c.makeSafe(),c.radius*=h,c.radius=Math.max(t.minDistance,Math.min(t.maxDistance,c.radius)),t.enableDamping===!0?t.target.addScaledVector(d,t.dampingFactor):t.target.add(d),w.setFromSpherical(c),w.applyQuaternion(re),Nt.copy(t.target).add(w),t.object.lookAt(t.target),t.enableDamping===!0?(u.theta*=1-t.dampingFactor,u.phi*=1-t.dampingFactor,d.multiplyScalar(1-t.dampingFactor)):(u.set(0,0,0),d.set(0,0,0)),h=1,f||H.distanceToSquared(t.object.position)>l||8*(1-ue.dot(t.object.quaternion))>l?(t.dispatchEvent(i),H.copy(t.object.position),ue.copy(t.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){t.domElement.removeEventListener("contextmenu",A),t.domElement.removeEventListener("pointerdown",te),t.domElement.removeEventListener("wheel",X),t.domElement.removeEventListener("touchstart",he),t.domElement.removeEventListener("touchend",ge),t.domElement.removeEventListener("touchmove",Pe),t.domElement.ownerDocument.removeEventListener("pointermove",ce),t.domElement.ownerDocument.removeEventListener("pointerup",ie),t._domElementKeyEvents!==null&&t._domElementKeyEvents.removeEventListener("keydown",se)};var t=this,i={type:"change"},r={type:"start"},s={type:"end"},o={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},a=o.NONE,l=1e-6,c=new cl,u=new cl,h=1,d=new M,f=!1,p=new J,_=new J,v=new J,g=new J,m=new J,T=new J,E=new J,L=new J,y=new J;function O(){return 2*Math.PI/60/60*t.autoRotateSpeed}function k(){return Math.pow(.95,t.zoomSpeed)}function B(w){u.theta-=w}function q(w){u.phi-=w}var P=function(){var w=new M;return function(re,H){w.setFromMatrixColumn(H,0),w.multiplyScalar(-re),d.add(w)}}(),Z=function(){var w=new M;return function(re,H){t.screenSpacePanning===!0?w.setFromMatrixColumn(H,1):(w.setFromMatrixColumn(H,0),w.crossVectors(t.object.up,w)),w.multiplyScalar(re),d.add(w)}}(),R=function(){var w=new M;return function(re,H){var ue=t.domElement;if(t.object.isPerspectiveCamera){var Ce=t.object.position;w.copy(Ce).sub(t.target);var We=w.length();We*=Math.tan(t.object.fov/2*Math.PI/180),P(2*re*We/ue.clientHeight,t.object.matrix),Z(2*H*We/ue.clientHeight,t.object.matrix)}else t.object.isOrthographicCamera?(P(re*(t.object.right-t.object.left)/t.object.zoom/ue.clientWidth,t.object.matrix),Z(H*(t.object.top-t.object.bottom)/t.object.zoom/ue.clientHeight,t.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),t.enablePan=!1)}}();function C(w){t.object.isPerspectiveCamera?h/=w:t.object.isOrthographicCamera?(t.object.zoom=Math.max(t.minZoom,Math.min(t.maxZoom,t.object.zoom*w)),t.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),t.enableZoom=!1)}function I(w){t.object.isPerspectiveCamera?h*=w:t.object.isOrthographicCamera?(t.object.zoom=Math.max(t.minZoom,Math.min(t.maxZoom,t.object.zoom/w)),t.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),t.enableZoom=!1)}function D(w){p.set(w.clientX,w.clientY)}function Y(w){E.set(w.clientX,w.clientY)}function ee(w){g.set(w.clientX,w.clientY)}function Q(w){_.set(w.clientX,w.clientY),v.subVectors(_,p).multiplyScalar(t.rotateSpeed);var V=t.domElement;B(2*Math.PI*v.x/V.clientHeight),q(2*Math.PI*v.y/V.clientHeight),p.copy(_),t.update()}function ae(w){L.set(w.clientX,w.clientY),y.subVectors(L,E),y.y>0?C(k()):y.y<0&&I(k()),E.copy(L),t.update()}function le(w){m.set(w.clientX,w.clientY),T.subVectors(m,g).multiplyScalar(t.panSpeed),R(T.x,T.y),g.copy(m),t.update()}function me(w){w.deltaY<0?I(k()):w.deltaY>0&&C(k()),t.update()}function ve(w){var V=!1;switch(w.code){case t.keys.UP:R(0,t.keyPanSpeed),V=!0;break;case t.keys.BOTTOM:R(0,-t.keyPanSpeed),V=!0;break;case t.keys.LEFT:R(t.keyPanSpeed,0),V=!0;break;case t.keys.RIGHT:R(-t.keyPanSpeed,0),V=!0;break}V&&(w.preventDefault(),t.update())}function G(w){if(w.touches.length==1)p.set(w.touches[0].pageX,w.touches[0].pageY);else{var V=.5*(w.touches[0].pageX+w.touches[1].pageX),re=.5*(w.touches[0].pageY+w.touches[1].pageY);p.set(V,re)}}function De(w){if(w.touches.length==1)g.set(w.touches[0].pageX,w.touches[0].pageY);else{var V=.5*(w.touches[0].pageX+w.touches[1].pageX),re=.5*(w.touches[0].pageY+w.touches[1].pageY);g.set(V,re)}}function Re(w){var V=w.touches[0].pageX-w.touches[1].pageX,re=w.touches[0].pageY-w.touches[1].pageY,H=Math.sqrt(V*V+re*re);E.set(0,H)}function _e(w){t.enableZoom&&Re(w),t.enablePan&&De(w)}function pe(w){t.enableZoom&&Re(w),t.enableRotate&&G(w)}function Ie(w){if(w.touches.length==1)_.set(w.touches[0].pageX,w.touches[0].pageY);else{var V=.5*(w.touches[0].pageX+w.touches[1].pageX),re=.5*(w.touches[0].pageY+w.touches[1].pageY);_.set(V,re)}v.subVectors(_,p).multiplyScalar(t.rotateSpeed);var H=t.domElement;B(2*Math.PI*v.x/H.clientHeight),q(2*Math.PI*v.y/H.clientHeight),p.copy(_)}function Se(w){if(w.touches.length==1)m.set(w.touches[0].pageX,w.touches[0].pageY);else{var V=.5*(w.touches[0].pageX+w.touches[1].pageX),re=.5*(w.touches[0].pageY+w.touches[1].pageY);m.set(V,re)}T.subVectors(m,g).multiplyScalar(t.panSpeed),R(T.x,T.y),g.copy(m)}function Te(w){var V=w.touches[0].pageX-w.touches[1].pageX,re=w.touches[0].pageY-w.touches[1].pageY,H=Math.sqrt(V*V+re*re);L.set(0,H),y.set(0,Math.pow(L.y/E.y,t.zoomSpeed)),C(y.y),E.copy(L)}function $(w){t.enableZoom&&Te(w),t.enablePan&&Se(w)}function K(w){t.enableZoom&&Te(w),t.enableRotate&&Ie(w)}function te(w){if(t.enabled!==!1)switch(w.pointerType){case"mouse":case"pen":S(w);break}}function ce(w){if(t.enabled!==!1)switch(w.pointerType){case"mouse":case"pen":b(w);break}}function ie(w){switch(w.pointerType){case"mouse":case"pen":j();break}}function S(w){w.preventDefault(),t.domElement.focus?t.domElement.focus():window.focus();var V;switch(w.button){case 0:V=t.mouseButtons.LEFT;break;case 1:V=t.mouseButtons.MIDDLE;break;case 2:V=t.mouseButtons.RIGHT;break;default:V=-1}switch(V){case rn.DOLLY:if(t.enableZoom===!1)return;Y(w),a=o.DOLLY;break;case rn.ROTATE:if(w.ctrlKey||w.metaKey||w.shiftKey){if(t.enablePan===!1)return;ee(w),a=o.PAN}else{if(t.enableRotate===!1)return;D(w),a=o.ROTATE}break;case rn.PAN:if(w.ctrlKey||w.metaKey||w.shiftKey){if(t.enableRotate===!1)return;D(w),a=o.ROTATE}else{if(t.enablePan===!1)return;ee(w),a=o.PAN}break;default:a=o.NONE}a!==o.NONE&&(t.domElement.ownerDocument.addEventListener("pointermove",ce),t.domElement.ownerDocument.addEventListener("pointerup",ie),t.dispatchEvent(r))}function b(w){if(t.enabled!==!1)switch(w.preventDefault(),a){case o.ROTATE:if(t.enableRotate===!1)return;Q(w);break;case o.DOLLY:if(t.enableZoom===!1)return;ae(w);break;case o.PAN:if(t.enablePan===!1)return;le(w);break}}function j(w){t.domElement.ownerDocument.removeEventListener("pointermove",ce),t.domElement.ownerDocument.removeEventListener("pointerup",ie),t.enabled!==!1&&(t.dispatchEvent(s),a=o.NONE)}function X(w){t.enabled===!1||t.enableZoom===!1||a!==o.NONE&&a!==o.ROTATE||(w.preventDefault(),t.dispatchEvent(r),me(w),t.dispatchEvent(s))}function se(w){t.enabled===!1||t.enablePan===!1||ve(w)}function he(w){if(t.enabled!==!1){switch(w.preventDefault(),w.touches.length){case 1:switch(t.touches.ONE){case sn.ROTATE:if(t.enableRotate===!1)return;G(w),a=o.TOUCH_ROTATE;break;case sn.PAN:if(t.enablePan===!1)return;De(w),a=o.TOUCH_PAN;break;default:a=o.NONE}break;case 2:switch(t.touches.TWO){case sn.DOLLY_PAN:if(t.enableZoom===!1&&t.enablePan===!1)return;_e(w),a=o.TOUCH_DOLLY_PAN;break;case sn.DOLLY_ROTATE:if(t.enableZoom===!1&&t.enableRotate===!1)return;pe(w),a=o.TOUCH_DOLLY_ROTATE;break;default:a=o.NONE}break;default:a=o.NONE}a!==o.NONE&&t.dispatchEvent(r)}}function Pe(w){if(t.enabled!==!1)switch(w.preventDefault(),a){case o.TOUCH_ROTATE:if(t.enableRotate===!1)return;Ie(w),t.update();break;case o.TOUCH_PAN:if(t.enablePan===!1)return;Se(w),t.update();break;case o.TOUCH_DOLLY_PAN:if(t.enableZoom===!1&&t.enablePan===!1)return;$(w),t.update();break;case o.TOUCH_DOLLY_ROTATE:if(t.enableZoom===!1&&t.enableRotate===!1)return;K(w),t.update();break;default:a=o.NONE}}function ge(w){t.enabled!==!1&&(t.dispatchEvent(s),a=o.NONE)}function A(w){t.enabled!==!1&&w.preventDefault()}t.domElement.addEventListener("contextmenu",A),t.domElement.addEventListener("pointerdown",te),t.domElement.addEventListener("wheel",X),t.domElement.addEventListener("touchstart",he),t.domElement.addEventListener("touchend",ge),t.domElement.addEventListener("touchmove",Pe),this.update()};Hi.prototype=Object.create(Ut.prototype);Hi.prototype.constructor=Hi;var Ks=function(n,e){Hi.call(this,n,e),this.screenSpacePanning=!1,this.mouseButtons.LEFT=rn.PAN,this.mouseButtons.RIGHT=rn.ROTATE,this.touches.ONE=sn.PAN,this.touches.TWO=sn.DOLLY_ROTATE};Ks.prototype=Object.create(Ut.prototype);Ks.prototype.constructor=Ks;function n_(n){if(n&&!(typeof window>"u")){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=n,document.head.appendChild(e),n}}function Xn(n,e){var t=n.__state.conversionName.toString(),i=Math.round(n.r),r=Math.round(n.g),s=Math.round(n.b),o=n.a,a=Math.round(n.h),l=n.s.toFixed(1),c=n.v.toFixed(1);if(e||t==="THREE_CHAR_HEX"||t==="SIX_CHAR_HEX"){for(var u=n.hex.toString(16);u.length<6;)u="0"+u;return"#"+u}else{if(t==="CSS_RGB")return"rgb("+i+","+r+","+s+")";if(t==="CSS_RGBA")return"rgba("+i+","+r+","+s+","+o+")";if(t==="HEX")return"0x"+n.hex.toString(16);if(t==="RGB_ARRAY")return"["+i+","+r+","+s+"]";if(t==="RGBA_ARRAY")return"["+i+","+r+","+s+","+o+"]";if(t==="RGB_OBJ")return"{r:"+i+",g:"+r+",b:"+s+"}";if(t==="RGBA_OBJ")return"{r:"+i+",g:"+r+",b:"+s+",a:"+o+"}";if(t==="HSV_OBJ")return"{h:"+a+",s:"+l+",v:"+c+"}";if(t==="HSVA_OBJ")return"{h:"+a+",s:"+l+",v:"+c+",a:"+o+"}"}return"unknown format"}var hl=Array.prototype.forEach,mi=Array.prototype.slice,W={BREAK:{},extend:function(e){return this.each(mi.call(arguments,1),function(t){var i=this.isObject(t)?Object.keys(t):[];i.forEach(function(r){this.isUndefined(t[r])||(e[r]=t[r])}.bind(this))},this),e},defaults:function(e){return this.each(mi.call(arguments,1),function(t){var i=this.isObject(t)?Object.keys(t):[];i.forEach(function(r){this.isUndefined(e[r])&&(e[r]=t[r])}.bind(this))},this),e},compose:function(){var e=mi.call(arguments);return function(){for(var t=mi.call(arguments),i=e.length-1;i>=0;i--)t=[e[i].apply(this,t)];return t[0]}},each:function(e,t,i){if(e){if(hl&&e.forEach&&e.forEach===hl)e.forEach(t,i);else if(e.length===e.length+0){var r=void 0,s=void 0;for(r=0,s=e.length;r<s;r++)if(r in e&&t.call(i,e[r],r)===this.BREAK)return}else for(var o in e)if(t.call(i,e[o],o)===this.BREAK)return}},defer:function(e){setTimeout(e,0)},debounce:function(e,t,i){var r=void 0;return function(){var s=this,o=arguments;function a(){r=null,i||e.apply(s,o)}var l=i||!r;clearTimeout(r),r=setTimeout(a,t),l&&e.apply(s,o)}},toArray:function(e){return e.toArray?e.toArray():mi.call(e)},isUndefined:function(e){return e===void 0},isNull:function(e){return e===null},isNaN:function(n){function e(t){return n.apply(this,arguments)}return e.toString=function(){return n.toString()},e}(function(n){return isNaN(n)}),isArray:Array.isArray||function(n){return n.constructor===Array},isObject:function(e){return e===Object(e)},isNumber:function(e){return e===e+0},isString:function(e){return e===e+""},isBoolean:function(e){return e===!1||e===!0},isFunction:function(e){return e instanceof Function}},i_=[{litmus:W.isString,conversions:{THREE_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString()+t[1].toString()+t[2].toString()+t[2].toString()+t[3].toString()+t[3].toString(),0)}},write:Xn},SIX_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9]{6})$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString(),0)}},write:Xn},CSS_RGB:{read:function(e){var t=e.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3])}},write:Xn},CSS_RGBA:{read:function(e){var t=e.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3]),a:parseFloat(t[4])}},write:Xn}}},{litmus:W.isNumber,conversions:{HEX:{read:function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},write:function(e){return e.hex}}}},{litmus:W.isArray,conversions:{RGB_ARRAY:{read:function(e){return e.length!==3?!1:{space:"RGB",r:e[0],g:e[1],b:e[2]}},write:function(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function(e){return e.length!==4?!1:{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},write:function(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:W.isObject,conversions:{RGBA_OBJ:{read:function(e){return W.isNumber(e.r)&&W.isNumber(e.g)&&W.isNumber(e.b)&&W.isNumber(e.a)?{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function(e){return W.isNumber(e.r)&&W.isNumber(e.g)&&W.isNumber(e.b)?{space:"RGB",r:e.r,g:e.g,b:e.b}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function(e){return W.isNumber(e.h)&&W.isNumber(e.s)&&W.isNumber(e.v)&&W.isNumber(e.a)?{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function(e){return W.isNumber(e.h)&&W.isNumber(e.s)&&W.isNumber(e.v)?{space:"HSV",h:e.h,s:e.s,v:e.v}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v}}}}}],gi=void 0,Mr=void 0,eo=function(){Mr=!1;var e=arguments.length>1?W.toArray(arguments):arguments[0];return W.each(i_,function(t){if(t.litmus(e))return W.each(t.conversions,function(i,r){if(gi=i.read(e),Mr===!1&&gi!==!1)return Mr=gi,gi.conversionName=r,gi.conversion=i,W.BREAK}),W.BREAK}),Mr},ul=void 0,zr={hsv_to_rgb:function(e,t,i){var r=Math.floor(e/60)%6,s=e/60-Math.floor(e/60),o=i*(1-t),a=i*(1-s*t),l=i*(1-(1-s)*t),c=[[i,l,o],[a,i,o],[o,i,l],[o,a,i],[l,o,i],[i,o,a]][r];return{r:c[0]*255,g:c[1]*255,b:c[2]*255}},rgb_to_hsv:function(e,t,i){var r=Math.min(e,t,i),s=Math.max(e,t,i),o=s-r,a=void 0,l=void 0;if(s!==0)l=o/s;else return{h:NaN,s:0,v:0};return e===s?a=(t-i)/o:t===s?a=2+(i-e)/o:a=4+(e-t)/o,a/=6,a<0&&(a+=1),{h:a*360,s:l,v:s/255}},rgb_to_hex:function(e,t,i){var r=this.hex_with_component(0,2,e);return r=this.hex_with_component(r,1,t),r=this.hex_with_component(r,0,i),r},component_from_hex:function(e,t){return e>>t*8&255},hex_with_component:function(e,t,i){return i<<(ul=t*8)|e&~(255<<ul)}},r_=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Dt=function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")},It=function(){function n(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}}(),hn=function n(e,t,i){e===null&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(r===void 0){var s=Object.getPrototypeOf(e);return s===null?void 0:n(s,t,i)}else{if("value"in r)return r.value;var o=r.get;return o===void 0?void 0:o.call(i)}},un=function(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)},dn=function(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:n},nt=function(){function n(){if(Dt(this,n),this.__state=eo.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return It(n,[{key:"toString",value:function(){return Xn(this)}},{key:"toHexString",value:function(){return Xn(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),n}();function Lo(n,e,t){Object.defineProperty(n,e,{get:function(){return this.__state.space==="RGB"?this.__state[e]:(nt.recalculateRGB(this,e,t),this.__state[e])},set:function(r){this.__state.space!=="RGB"&&(nt.recalculateRGB(this,e,t),this.__state.space="RGB"),this.__state[e]=r}})}function Co(n,e){Object.defineProperty(n,e,{get:function(){return this.__state.space==="HSV"?this.__state[e]:(nt.recalculateHSV(this),this.__state[e])},set:function(i){this.__state.space!=="HSV"&&(nt.recalculateHSV(this),this.__state.space="HSV"),this.__state[e]=i}})}nt.recalculateRGB=function(n,e,t){if(n.__state.space==="HEX")n.__state[e]=zr.component_from_hex(n.__state.hex,t);else if(n.__state.space==="HSV")W.extend(n.__state,zr.hsv_to_rgb(n.__state.h,n.__state.s,n.__state.v));else throw new Error("Corrupted color state")};nt.recalculateHSV=function(n){var e=zr.rgb_to_hsv(n.r,n.g,n.b);W.extend(n.__state,{s:e.s,v:e.v}),W.isNaN(e.h)?W.isUndefined(n.__state.h)&&(n.__state.h=0):n.__state.h=e.h};nt.COMPONENTS=["r","g","b","h","s","v","hex","a"];Lo(nt.prototype,"r",2);Lo(nt.prototype,"g",1);Lo(nt.prototype,"b",0);Co(nt.prototype,"h");Co(nt.prototype,"s");Co(nt.prototype,"v");Object.defineProperty(nt.prototype,"a",{get:function(){return this.__state.a},set:function(e){this.__state.a=e}});Object.defineProperty(nt.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=zr.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(e){this.__state.space="HEX",this.__state.hex=e}});var wn=function(){function n(e,t){Dt(this,n),this.initialValue=e[t],this.domElement=document.createElement("div"),this.object=e,this.property=t,this.__onChange=void 0,this.__onFinishChange=void 0}return It(n,[{key:"onChange",value:function(t){return this.__onChange=t,this}},{key:"onFinishChange",value:function(t){return this.__onFinishChange=t,this}},{key:"setValue",value:function(t){return this.object[this.property]=t,this.__onChange&&this.__onChange.call(this,t),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),n}(),s_={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},_c={};W.each(s_,function(n,e){W.each(n,function(t){_c[t]=e})});var o_=/(\d+(\.\d+)?)px/;function Bt(n){if(n==="0"||W.isUndefined(n))return 0;var e=n.match(o_);return W.isNull(e)?0:parseFloat(e[1])}var F={makeSelectable:function(e,t){e===void 0||e.style===void 0||(e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?"auto":"none",e.style.KhtmlUserSelect=t?"auto":"none",e.unselectable=t?"on":"off")},makeFullscreen:function(e,t,i){var r=i,s=t;W.isUndefined(s)&&(s=!0),W.isUndefined(r)&&(r=!0),e.style.position="absolute",s&&(e.style.left=0,e.style.right=0),r&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function(e,t,i,r){var s=i||{},o=_c[t];if(!o)throw new Error("Event type "+t+" not supported.");var a=document.createEvent(o);switch(o){case"MouseEvents":{var l=s.x||s.clientX||0,c=s.y||s.clientY||0;a.initMouseEvent(t,s.bubbles||!1,s.cancelable||!0,window,s.clickCount||1,0,0,l,c,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var u=a.initKeyboardEvent||a.initKeyEvent;W.defaults(s,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),u(t,s.bubbles||!1,s.cancelable,window,s.ctrlKey,s.altKey,s.shiftKey,s.metaKey,s.keyCode,s.charCode);break}default:{a.initEvent(t,s.bubbles||!1,s.cancelable||!0);break}}W.defaults(a,r),e.dispatchEvent(a)},bind:function(e,t,i,r){var s=r||!1;return e.addEventListener?e.addEventListener(t,i,s):e.attachEvent&&e.attachEvent("on"+t,i),F},unbind:function(e,t,i,r){var s=r||!1;return e.removeEventListener?e.removeEventListener(t,i,s):e.detachEvent&&e.detachEvent("on"+t,i),F},addClass:function(e,t){if(e.className===void 0)e.className=t;else if(e.className!==t){var i=e.className.split(/ +/);i.indexOf(t)===-1&&(i.push(t),e.className=i.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return F},removeClass:function(e,t){if(t)if(e.className===t)e.removeAttribute("class");else{var i=e.className.split(/ +/),r=i.indexOf(t);r!==-1&&(i.splice(r,1),e.className=i.join(" "))}else e.className=void 0;return F},hasClass:function(e,t){return new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)").test(e.className)||!1},getWidth:function(e){var t=getComputedStyle(e);return Bt(t["border-left-width"])+Bt(t["border-right-width"])+Bt(t["padding-left"])+Bt(t["padding-right"])+Bt(t.width)},getHeight:function(e){var t=getComputedStyle(e);return Bt(t["border-top-width"])+Bt(t["border-bottom-width"])+Bt(t["padding-top"])+Bt(t["padding-bottom"])+Bt(t.height)},getOffset:function(e){var t=e,i={left:0,top:0};if(t.offsetParent)do i.left+=t.offsetLeft,i.top+=t.offsetTop,t=t.offsetParent;while(t);return i},isActive:function(e){return e===document.activeElement&&(e.type||e.href)}},vc=function(n){un(e,n);function e(t,i){Dt(this,e);var r=dn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),s=r;r.__prev=r.getValue(),r.__checkbox=document.createElement("input"),r.__checkbox.setAttribute("type","checkbox");function o(){s.setValue(!s.__prev)}return F.bind(r.__checkbox,"change",o,!1),r.domElement.appendChild(r.__checkbox),r.updateDisplay(),r}return It(e,[{key:"setValue",value:function(i){var r=hn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),r}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),hn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(wn),a_=function(n){un(e,n);function e(t,i,r){Dt(this,e);var s=dn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),o=r,a=s;if(s.__select=document.createElement("select"),W.isArray(o)){var l={};W.each(o,function(c){l[c]=c}),o=l}return W.each(o,function(c,u){var h=document.createElement("option");h.innerHTML=u,h.setAttribute("value",c),a.__select.appendChild(h)}),s.updateDisplay(),F.bind(s.__select,"change",function(){var c=this.options[this.selectedIndex].value;a.setValue(c)}),s.domElement.appendChild(s.__select),s}return It(e,[{key:"setValue",value:function(i){var r=hn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),r}},{key:"updateDisplay",value:function(){return F.isActive(this.__select)?this:(this.__select.value=this.getValue(),hn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this))}}]),e}(wn),l_=function(n){un(e,n);function e(t,i){Dt(this,e);var r=dn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),s=r;function o(){s.setValue(s.__input.value)}function a(){s.__onFinishChange&&s.__onFinishChange.call(s,s.getValue())}return r.__input=document.createElement("input"),r.__input.setAttribute("type","text"),F.bind(r.__input,"keyup",o),F.bind(r.__input,"change",o),F.bind(r.__input,"blur",a),F.bind(r.__input,"keydown",function(l){l.keyCode===13&&this.blur()}),r.updateDisplay(),r.domElement.appendChild(r.__input),r}return It(e,[{key:"updateDisplay",value:function(){return F.isActive(this.__input)||(this.__input.value=this.getValue()),hn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(wn);function dl(n){var e=n.toString();return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}var yc=function(n){un(e,n);function e(t,i,r){Dt(this,e);var s=dn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),o=r||{};return s.__min=o.min,s.__max=o.max,s.__step=o.step,W.isUndefined(s.__step)?s.initialValue===0?s.__impliedStep=1:s.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(s.initialValue))/Math.LN10))/10:s.__impliedStep=s.__step,s.__precision=dl(s.__impliedStep),s}return It(e,[{key:"setValue",value:function(i){var r=i;return this.__min!==void 0&&r<this.__min?r=this.__min:this.__max!==void 0&&r>this.__max&&(r=this.__max),this.__step!==void 0&&r%this.__step!==0&&(r=Math.round(r/this.__step)*this.__step),hn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,r)}},{key:"min",value:function(i){return this.__min=i,this}},{key:"max",value:function(i){return this.__max=i,this}},{key:"step",value:function(i){return this.__step=i,this.__impliedStep=i,this.__precision=dl(i),this}}]),e}(wn);function c_(n,e){var t=Math.pow(10,e);return Math.round(n*t)/t}var kr=function(n){un(e,n);function e(t,i,r){Dt(this,e);var s=dn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,r));s.__truncationSuspended=!1;var o=s,a=void 0;function l(){var p=parseFloat(o.__input.value);W.isNaN(p)||o.setValue(p)}function c(){o.__onFinishChange&&o.__onFinishChange.call(o,o.getValue())}function u(){c()}function h(p){var _=a-p.clientY;o.setValue(o.getValue()+_*o.__impliedStep),a=p.clientY}function d(){F.unbind(window,"mousemove",h),F.unbind(window,"mouseup",d),c()}function f(p){F.bind(window,"mousemove",h),F.bind(window,"mouseup",d),a=p.clientY}return s.__input=document.createElement("input"),s.__input.setAttribute("type","text"),F.bind(s.__input,"change",l),F.bind(s.__input,"blur",u),F.bind(s.__input,"mousedown",f),F.bind(s.__input,"keydown",function(p){p.keyCode===13&&(o.__truncationSuspended=!0,this.blur(),o.__truncationSuspended=!1,c())}),s.updateDisplay(),s.domElement.appendChild(s.__input),s}return It(e,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():c_(this.getValue(),this.__precision),hn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(yc);function fl(n,e,t,i,r){return i+(r-i)*((n-e)/(t-e))}var to=function(n){un(e,n);function e(t,i,r,s,o){Dt(this,e);var a=dn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,{min:r,max:s,step:o})),l=a;a.__background=document.createElement("div"),a.__foreground=document.createElement("div"),F.bind(a.__background,"mousedown",c),F.bind(a.__background,"touchstart",d),F.addClass(a.__background,"slider"),F.addClass(a.__foreground,"slider-fg");function c(_){document.activeElement.blur(),F.bind(window,"mousemove",u),F.bind(window,"mouseup",h),u(_)}function u(_){_.preventDefault();var v=l.__background.getBoundingClientRect();return l.setValue(fl(_.clientX,v.left,v.right,l.__min,l.__max)),!1}function h(){F.unbind(window,"mousemove",u),F.unbind(window,"mouseup",h),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}function d(_){_.touches.length===1&&(F.bind(window,"touchmove",f),F.bind(window,"touchend",p),f(_))}function f(_){var v=_.touches[0].clientX,g=l.__background.getBoundingClientRect();l.setValue(fl(v,g.left,g.right,l.__min,l.__max))}function p(){F.unbind(window,"touchmove",f),F.unbind(window,"touchend",p),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}return a.updateDisplay(),a.__background.appendChild(a.__foreground),a.domElement.appendChild(a.__background),a}return It(e,[{key:"updateDisplay",value:function(){var i=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=i*100+"%",hn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(yc),xc=function(n){un(e,n);function e(t,i,r){Dt(this,e);var s=dn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),o=s;return s.__button=document.createElement("div"),s.__button.innerHTML=r===void 0?"Fire":r,F.bind(s.__button,"click",function(a){return a.preventDefault(),o.fire(),!1}),F.addClass(s.__button,"button"),s.domElement.appendChild(s.__button),s}return It(e,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),e}(wn),no=function(n){un(e,n);function e(t,i){Dt(this,e);var r=dn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i));r.__color=new nt(r.getValue()),r.__temp=new nt(0);var s=r;r.domElement=document.createElement("div"),F.makeSelectable(r.domElement,!1),r.__selector=document.createElement("div"),r.__selector.className="selector",r.__saturation_field=document.createElement("div"),r.__saturation_field.className="saturation-field",r.__field_knob=document.createElement("div"),r.__field_knob.className="field-knob",r.__field_knob_border="2px solid ",r.__hue_knob=document.createElement("div"),r.__hue_knob.className="hue-knob",r.__hue_field=document.createElement("div"),r.__hue_field.className="hue-field",r.__input=document.createElement("input"),r.__input.type="text",r.__input_textShadow="0 1px 1px ",F.bind(r.__input,"keydown",function(_){_.keyCode===13&&h.call(this)}),F.bind(r.__input,"blur",h),F.bind(r.__selector,"mousedown",function(){F.addClass(this,"drag").bind(window,"mouseup",function(){F.removeClass(s.__selector,"drag")})}),F.bind(r.__selector,"touchstart",function(){F.addClass(this,"drag").bind(window,"touchend",function(){F.removeClass(s.__selector,"drag")})});var o=document.createElement("div");W.extend(r.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),W.extend(r.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:r.__field_knob_border+(r.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),W.extend(r.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),W.extend(r.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),W.extend(o.style,{width:"100%",height:"100%",background:"none"}),pl(o,"top","rgba(0,0,0,0)","#000"),W.extend(r.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),u_(r.__hue_field),W.extend(r.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:r.__input_textShadow+"rgba(0,0,0,0.7)"}),F.bind(r.__saturation_field,"mousedown",a),F.bind(r.__saturation_field,"touchstart",a),F.bind(r.__field_knob,"mousedown",a),F.bind(r.__field_knob,"touchstart",a),F.bind(r.__hue_field,"mousedown",l),F.bind(r.__hue_field,"touchstart",l);function a(_){f(_),F.bind(window,"mousemove",f),F.bind(window,"touchmove",f),F.bind(window,"mouseup",c),F.bind(window,"touchend",c)}function l(_){p(_),F.bind(window,"mousemove",p),F.bind(window,"touchmove",p),F.bind(window,"mouseup",u),F.bind(window,"touchend",u)}function c(){F.unbind(window,"mousemove",f),F.unbind(window,"touchmove",f),F.unbind(window,"mouseup",c),F.unbind(window,"touchend",c),d()}function u(){F.unbind(window,"mousemove",p),F.unbind(window,"touchmove",p),F.unbind(window,"mouseup",u),F.unbind(window,"touchend",u),d()}function h(){var _=eo(this.value);_!==!1?(s.__color.__state=_,s.setValue(s.__color.toOriginal())):this.value=s.__color.toString()}function d(){s.__onFinishChange&&s.__onFinishChange.call(s,s.__color.toOriginal())}r.__saturation_field.appendChild(o),r.__selector.appendChild(r.__field_knob),r.__selector.appendChild(r.__saturation_field),r.__selector.appendChild(r.__hue_field),r.__hue_field.appendChild(r.__hue_knob),r.domElement.appendChild(r.__input),r.domElement.appendChild(r.__selector),r.updateDisplay();function f(_){_.type.indexOf("touch")===-1&&_.preventDefault();var v=s.__saturation_field.getBoundingClientRect(),g=_.touches&&_.touches[0]||_,m=g.clientX,T=g.clientY,E=(m-v.left)/(v.right-v.left),L=1-(T-v.top)/(v.bottom-v.top);return L>1?L=1:L<0&&(L=0),E>1?E=1:E<0&&(E=0),s.__color.v=L,s.__color.s=E,s.setValue(s.__color.toOriginal()),!1}function p(_){_.type.indexOf("touch")===-1&&_.preventDefault();var v=s.__hue_field.getBoundingClientRect(),g=_.touches&&_.touches[0]||_,m=g.clientY,T=1-(m-v.top)/(v.bottom-v.top);return T>1?T=1:T<0&&(T=0),s.__color.h=T*360,s.setValue(s.__color.toOriginal()),!1}return r}return It(e,[{key:"updateDisplay",value:function(){var i=eo(this.getValue());if(i!==!1){var r=!1;W.each(nt.COMPONENTS,function(a){if(!W.isUndefined(i[a])&&!W.isUndefined(this.__color.__state[a])&&i[a]!==this.__color.__state[a])return r=!0,{}},this),r&&W.extend(this.__color.__state,i)}W.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var s=this.__color.v<.5||this.__color.s>.5?255:0,o=255-s;W.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+s+","+s+","+s+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,pl(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),W.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+s+","+s+","+s+")",textShadow:this.__input_textShadow+"rgba("+o+","+o+","+o+",.7)"})}}]),e}(wn),h_=["-moz-","-o-","-webkit-","-ms-",""];function pl(n,e,t,i){n.style.background="",W.each(h_,function(r){n.style.cssText+="background: "+r+"linear-gradient("+e+", "+t+" 0%, "+i+" 100%); "})}function u_(n){n.style.background="",n.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",n.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",n.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",n.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",n.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var d_={load:function(e,t){var i=t||document,r=i.createElement("link");r.type="text/css",r.rel="stylesheet",r.href=e,i.getElementsByTagName("head")[0].appendChild(r)},inject:function(e,t){var i=t||document,r=document.createElement("style");r.type="text/css",r.innerHTML=e;var s=i.getElementsByTagName("head")[0];try{s.appendChild(r)}catch{}}},f_=`<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,p_=function(e,t){var i=e[t];return W.isArray(arguments[2])||W.isObject(arguments[2])?new a_(e,t,arguments[2]):W.isNumber(i)?W.isNumber(arguments[2])&&W.isNumber(arguments[3])?W.isNumber(arguments[4])?new to(e,t,arguments[2],arguments[3],arguments[4]):new to(e,t,arguments[2],arguments[3]):W.isNumber(arguments[4])?new kr(e,t,{min:arguments[2],max:arguments[3],step:arguments[4]}):new kr(e,t,{min:arguments[2],max:arguments[3]}):W.isString(i)?new l_(e,t):W.isFunction(i)?new xc(e,t,""):W.isBoolean(i)?new vc(e,t):null};function m_(n){setTimeout(n,1e3/60)}var g_=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||m_,__=function(){function n(){Dt(this,n),this.backgroundElement=document.createElement("div"),W.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),F.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),W.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;F.bind(this.backgroundElement,"click",function(){e.hide()})}return It(n,[{key:"show",value:function(){var t=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),W.defer(function(){t.backgroundElement.style.opacity=1,t.domElement.style.opacity=1,t.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var t=this,i=function r(){t.domElement.style.display="none",t.backgroundElement.style.display="none",F.unbind(t.domElement,"webkitTransitionEnd",r),F.unbind(t.domElement,"transitionend",r),F.unbind(t.domElement,"oTransitionEnd",r)};F.bind(this.domElement,"webkitTransitionEnd",i),F.bind(this.domElement,"transitionend",i),F.bind(this.domElement,"oTransitionEnd",i),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-F.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-F.getHeight(this.domElement)/2+"px"}}]),n}(),v_=n_(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);d_.inject(v_);var ml="dg",gl=72,_l=20,Ui="Default",xi=function(){try{return!!window.localStorage}catch{return!1}}(),Li=void 0,vl=!0,Un=void 0,Rs=!1,bc=[],Ve=function n(e){var t=this,i=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),F.addClass(this.domElement,ml),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],i=W.defaults(i,{closeOnTop:!1,autoPlace:!0,width:n.DEFAULT_WIDTH}),i=W.defaults(i,{resizable:i.autoPlace,hideable:i.autoPlace}),W.isUndefined(i.load)?i.load={preset:Ui}:i.preset&&(i.load.preset=i.preset),W.isUndefined(i.parent)&&i.hideable&&bc.push(this),i.resizable=W.isUndefined(i.parent)&&i.resizable,i.autoPlace&&W.isUndefined(i.scrollable)&&(i.scrollable=!0);var r=xi&&localStorage.getItem(Gn(this,"isLocal"))==="true",s=void 0,o=void 0;if(Object.defineProperties(this,{parent:{get:function(){return i.parent}},scrollable:{get:function(){return i.scrollable}},autoPlace:{get:function(){return i.autoPlace}},closeOnTop:{get:function(){return i.closeOnTop}},preset:{get:function(){return t.parent?t.getRoot().preset:i.load.preset},set:function(d){t.parent?t.getRoot().preset=d:i.load.preset=d,w_(this),t.revert()}},width:{get:function(){return i.width},set:function(d){i.width=d,so(t,d)}},name:{get:function(){return i.name},set:function(d){i.name=d,o&&(o.innerHTML=i.name)}},closed:{get:function(){return i.closed},set:function(d){i.closed=d,i.closed?F.addClass(t.__ul,n.CLASS_CLOSED):F.removeClass(t.__ul,n.CLASS_CLOSED),this.onResize(),t.__closeButton&&(t.__closeButton.innerHTML=d?n.TEXT_OPEN:n.TEXT_CLOSED)}},load:{get:function(){return i.load}},useLocalStorage:{get:function(){return r},set:function(d){xi&&(r=d,d?F.bind(window,"unload",s):F.unbind(window,"unload",s),localStorage.setItem(Gn(t,"isLocal"),d))}}}),W.isUndefined(i.parent)){if(this.closed=i.closed||!1,F.addClass(this.domElement,n.CLASS_MAIN),F.makeSelectable(this.domElement,!1),xi&&r){t.useLocalStorage=!0;var a=localStorage.getItem(Gn(this,"gui"));a&&(i.load=JSON.parse(a))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=n.TEXT_CLOSED,F.addClass(this.__closeButton,n.CLASS_CLOSE_BUTTON),i.closeOnTop?(F.addClass(this.__closeButton,n.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(F.addClass(this.__closeButton,n.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),F.bind(this.__closeButton,"click",function(){t.closed=!t.closed})}else{i.closed===void 0&&(i.closed=!0);var l=document.createTextNode(i.name);F.addClass(l,"controller-name"),o=Ro(t,l);var c=function(d){return d.preventDefault(),t.closed=!t.closed,!1};F.addClass(this.__ul,n.CLASS_CLOSED),F.addClass(o,"title"),F.bind(o,"click",c),i.closed||(this.closed=!1)}i.autoPlace&&(W.isUndefined(i.parent)&&(vl&&(Un=document.createElement("div"),F.addClass(Un,ml),F.addClass(Un,n.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(Un),vl=!1),Un.appendChild(this.domElement),F.addClass(this.domElement,n.CLASS_AUTO_PLACE)),this.parent||so(t,i.width)),this.__resizeHandler=function(){t.onResizeDebounced()},F.bind(window,"resize",this.__resizeHandler),F.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),F.bind(this.__ul,"transitionend",this.__resizeHandler),F.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),i.resizable&&b_(this),s=function(){xi&&localStorage.getItem(Gn(t,"isLocal"))==="true"&&localStorage.setItem(Gn(t,"gui"),JSON.stringify(t.getSaveObject()))},this.saveToLocalStorageIfPossible=s;function u(){var h=t.getRoot();h.width+=1,W.defer(function(){h.width-=1})}i.parent||u()};Ve.toggleHide=function(){Rs=!Rs,W.each(bc,function(n){n.domElement.style.display=Rs?"none":""})};Ve.CLASS_AUTO_PLACE="a";Ve.CLASS_AUTO_PLACE_CONTAINER="ac";Ve.CLASS_MAIN="main";Ve.CLASS_CONTROLLER_ROW="cr";Ve.CLASS_TOO_TALL="taller-than-window";Ve.CLASS_CLOSED="closed";Ve.CLASS_CLOSE_BUTTON="close-button";Ve.CLASS_CLOSE_TOP="close-top";Ve.CLASS_CLOSE_BOTTOM="close-bottom";Ve.CLASS_DRAG="drag";Ve.DEFAULT_WIDTH=245;Ve.TEXT_CLOSED="Close Controls";Ve.TEXT_OPEN="Open Controls";Ve._keydownHandler=function(n){document.activeElement.type!=="text"&&(n.which===gl||n.keyCode===gl)&&Ve.toggleHide()};F.bind(window,"keydown",Ve._keydownHandler,!1);W.extend(Ve.prototype,{add:function(e,t){return Ci(this,e,t,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(e,t){return Ci(this,e,t,{color:!0})},remove:function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var t=this;W.defer(function(){t.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&Un.removeChild(this.domElement);var e=this;W.each(this.__folders,function(t){e.removeFolder(t)}),F.unbind(window,"keydown",Ve._keydownHandler,!1),yl(this)},addFolder:function(e){if(this.__folders[e]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+e+'"');var t={name:e,parent:this};t.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(t.closed=this.load.folders[e].closed,t.load=this.load.folders[e]);var i=new Ve(t);this.__folders[e]=i;var r=Ro(this,i.domElement);return F.addClass(r,"folder"),i},removeFolder:function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],yl(e);var t=this;W.each(e.__folders,function(i){e.removeFolder(i)}),W.defer(function(){t.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var e=this.getRoot();if(e.scrollable){var t=F.getOffset(e.__ul).top,i=0;W.each(e.__ul.childNodes,function(r){e.autoPlace&&r===e.__save_row||(i+=F.getHeight(r))}),window.innerHeight-t-_l<i?(F.addClass(e.domElement,Ve.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-t-_l+"px"):(F.removeClass(e.domElement,Ve.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&W.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},onResizeDebounced:W.debounce(function(){this.onResize()},50),remember:function(){if(W.isUndefined(Li)&&(Li=new __,Li.domElement.innerHTML=f_),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;W.each(Array.prototype.slice.call(arguments),function(t){e.__rememberedObjects.length===0&&x_(e),e.__rememberedObjects.indexOf(t)===-1&&e.__rememberedObjects.push(t)}),this.autoPlace&&so(this,this.width)},getRoot:function(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=Sr(this)),e.folders={},W.each(this.__folders,function(t,i){e.folders[i]=t.getSaveObject()}),e},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=Sr(this),io(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[Ui]=Sr(this,!0)),this.load.remembered[e]=Sr(this),this.preset=e,ro(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function(e){W.each(this.__controllers,function(t){this.getRoot().load.remembered?wc(e||this.getRoot(),t):t.setValue(t.initialValue),t.__onFinishChange&&t.__onFinishChange.call(t,t.getValue())},this),W.each(this.__folders,function(t){t.revert(t)}),e||io(this.getRoot(),!1)},listen:function(e){var t=this.__listening.length===0;this.__listening.push(e),t&&Mc(this.__listening)},updateDisplay:function(){W.each(this.__controllers,function(e){e.updateDisplay()}),W.each(this.__folders,function(e){e.updateDisplay()})}});function Ro(n,e,t){var i=document.createElement("li");return e&&i.appendChild(e),t?n.__ul.insertBefore(i,t):n.__ul.appendChild(i),n.onResize(),i}function yl(n){F.unbind(window,"resize",n.__resizeHandler),n.saveToLocalStorageIfPossible&&F.unbind(window,"unload",n.saveToLocalStorageIfPossible)}function io(n,e){var t=n.__preset_select[n.__preset_select.selectedIndex];e?t.innerHTML=t.value+"*":t.innerHTML=t.value}function y_(n,e,t){if(t.__li=e,t.__gui=n,W.extend(t,{options:function(o){if(arguments.length>1){var a=t.__li.nextElementSibling;return t.remove(),Ci(n,t.object,t.property,{before:a,factoryArgs:[W.toArray(arguments)]})}if(W.isArray(o)||W.isObject(o)){var l=t.__li.nextElementSibling;return t.remove(),Ci(n,t.object,t.property,{before:l,factoryArgs:[o]})}},name:function(o){return t.__li.firstElementChild.firstElementChild.innerHTML=o,t},listen:function(){return t.__gui.listen(t),t},remove:function(){return t.__gui.remove(t),t}}),t instanceof to){var i=new kr(t.object,t.property,{min:t.__min,max:t.__max,step:t.__step});W.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(s){var o=t[s],a=i[s];t[s]=i[s]=function(){var l=Array.prototype.slice.call(arguments);return a.apply(i,l),o.apply(t,l)}}),F.addClass(e,"has-slider"),t.domElement.insertBefore(i.domElement,t.domElement.firstElementChild)}else if(t instanceof kr){var r=function(o){if(W.isNumber(t.__min)&&W.isNumber(t.__max)){var a=t.__li.firstElementChild.firstElementChild.innerHTML,l=t.__gui.__listening.indexOf(t)>-1;t.remove();var c=Ci(n,t.object,t.property,{before:t.__li.nextElementSibling,factoryArgs:[t.__min,t.__max,t.__step]});return c.name(a),l&&c.listen(),c}return o};t.min=W.compose(r,t.min),t.max=W.compose(r,t.max)}else t instanceof vc?(F.bind(e,"click",function(){F.fakeEvent(t.__checkbox,"click")}),F.bind(t.__checkbox,"click",function(s){s.stopPropagation()})):t instanceof xc?(F.bind(e,"click",function(){F.fakeEvent(t.__button,"click")}),F.bind(e,"mouseover",function(){F.addClass(t.__button,"hover")}),F.bind(e,"mouseout",function(){F.removeClass(t.__button,"hover")})):t instanceof no&&(F.addClass(e,"color"),t.updateDisplay=W.compose(function(s){return e.style.borderLeftColor=t.__color.toString(),s},t.updateDisplay),t.updateDisplay());t.setValue=W.compose(function(s){return n.getRoot().__preset_select&&t.isModified()&&io(n.getRoot(),!0),s},t.setValue)}function wc(n,e){var t=n.getRoot(),i=t.__rememberedObjects.indexOf(e.object);if(i!==-1){var r=t.__rememberedObjectIndecesToControllers[i];if(r===void 0&&(r={},t.__rememberedObjectIndecesToControllers[i]=r),r[e.property]=e,t.load&&t.load.remembered){var s=t.load.remembered,o=void 0;if(s[n.preset])o=s[n.preset];else if(s[Ui])o=s[Ui];else return;if(o[i]&&o[i][e.property]!==void 0){var a=o[i][e.property];e.initialValue=a,e.setValue(a)}}}}function Ci(n,e,t,i){if(e[t]===void 0)throw new Error('Object "'+e+'" has no property "'+t+'"');var r=void 0;if(i.color)r=new no(e,t);else{var s=[e,t].concat(i.factoryArgs);r=p_.apply(n,s)}i.before instanceof wn&&(i.before=i.before.__li),wc(n,r),F.addClass(r.domElement,"c");var o=document.createElement("span");F.addClass(o,"property-name"),o.innerHTML=r.property;var a=document.createElement("div");a.appendChild(o),a.appendChild(r.domElement);var l=Ro(n,a,i.before);return F.addClass(l,Ve.CLASS_CONTROLLER_ROW),r instanceof no?F.addClass(l,"color"):F.addClass(l,r_(r.getValue())),y_(n,l,r),n.__controllers.push(r),r}function Gn(n,e){return document.location.href+"."+e}function ro(n,e,t){var i=document.createElement("option");i.innerHTML=e,i.value=e,n.__preset_select.appendChild(i),t&&(n.__preset_select.selectedIndex=n.__preset_select.length-1)}function xl(n,e){e.style.display=n.useLocalStorage?"block":"none"}function x_(n){var e=n.__save_row=document.createElement("li");F.addClass(n.domElement,"has-save"),n.__ul.insertBefore(e,n.__ul.firstChild),F.addClass(e,"save-row");var t=document.createElement("span");t.innerHTML="&nbsp;",F.addClass(t,"button gears");var i=document.createElement("span");i.innerHTML="Save",F.addClass(i,"button"),F.addClass(i,"save");var r=document.createElement("span");r.innerHTML="New",F.addClass(r,"button"),F.addClass(r,"save-as");var s=document.createElement("span");s.innerHTML="Revert",F.addClass(s,"button"),F.addClass(s,"revert");var o=n.__preset_select=document.createElement("select");if(n.load&&n.load.remembered?W.each(n.load.remembered,function(h,d){ro(n,d,d===n.preset)}):ro(n,Ui,!1),F.bind(o,"change",function(){for(var h=0;h<n.__preset_select.length;h++)n.__preset_select[h].innerHTML=n.__preset_select[h].value;n.preset=this.value}),e.appendChild(o),e.appendChild(t),e.appendChild(i),e.appendChild(r),e.appendChild(s),xi){var a=document.getElementById("dg-local-explain"),l=document.getElementById("dg-local-storage"),c=document.getElementById("dg-save-locally");c.style.display="block",localStorage.getItem(Gn(n,"isLocal"))==="true"&&l.setAttribute("checked","checked"),xl(n,a),F.bind(l,"change",function(){n.useLocalStorage=!n.useLocalStorage,xl(n,a)})}var u=document.getElementById("dg-new-constructor");F.bind(u,"keydown",function(h){h.metaKey&&(h.which===67||h.keyCode===67)&&Li.hide()}),F.bind(t,"click",function(){u.innerHTML=JSON.stringify(n.getSaveObject(),void 0,2),Li.show(),u.focus(),u.select()}),F.bind(i,"click",function(){n.save()}),F.bind(r,"click",function(){var h=prompt("Enter a new preset name.");h&&n.saveAs(h)}),F.bind(s,"click",function(){n.revert()})}function b_(n){var e=void 0;n.__resize_handle=document.createElement("div"),W.extend(n.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function t(s){return s.preventDefault(),n.width+=e-s.clientX,n.onResize(),e=s.clientX,!1}function i(){F.removeClass(n.__closeButton,Ve.CLASS_DRAG),F.unbind(window,"mousemove",t),F.unbind(window,"mouseup",i)}function r(s){return s.preventDefault(),e=s.clientX,F.addClass(n.__closeButton,Ve.CLASS_DRAG),F.bind(window,"mousemove",t),F.bind(window,"mouseup",i),!1}F.bind(n.__resize_handle,"mousedown",r),F.bind(n.__closeButton,"mousedown",r),n.domElement.insertBefore(n.__resize_handle,n.domElement.firstElementChild)}function so(n,e){n.domElement.style.width=e+"px",n.__save_row&&n.autoPlace&&(n.__save_row.style.width=e+"px"),n.__closeButton&&(n.__closeButton.style.width=e+"px")}function Sr(n,e){var t={};return W.each(n.__rememberedObjects,function(i,r){var s={},o=n.__rememberedObjectIndecesToControllers[r];W.each(o,function(a,l){s[l]=e?a.initialValue:a.getValue()}),t[r]=s}),t}function w_(n){for(var e=0;e<n.__preset_select.length;e++)n.__preset_select[e].value===n.preset&&(n.__preset_select.selectedIndex=e)}function Mc(n){n.length!==0&&g_.call(window,function(){Mc(n)}),W.each(n,function(e){e.updateDisplay()})}var M_=Ve,S_=`precision mediump float;
uniform sampler2D picture;
varying vec2 vUv;
varying vec3 vPosition;
void main(){
    vec4 tt = texture2D(picture,vUv);
    gl_FragColor = vec4(vUv,0.,1.);
    gl_FragColor =  tt;
    if(gl_FragColor.r < 0.1 && gl_FragColor.b < 0.1 && gl_FragColor.g < 0.1)discard;
}`,E_=`uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;
varying vec2 vUv;
attribute vec3 position;
attribute vec2 uv;
varying vec3 vPosition;
uniform float time;
uniform float distortion;

vec4 permute(vec4 x){return mod(x*x*34.+x,289.);}
float snoise(vec3 v){
  const vec2 C = 1./vec2(6,3);
  const vec4 D = vec4(0,.5,1,2);
  vec3 i  = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1. - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );
  vec3 x1 = x0 - i1 + C.x;
  vec3 x2 = x0 - i2 + C.y;
  vec3 x3 = x0 - D.yyy;
  i = mod(i,289.);
  vec4 p = permute( permute( permute(
	  i.z + vec4(0., i1.z, i2.z, 1.))
	+ i.y + vec4(0., i1.y, i2.y, 1.))
	+ i.x + vec4(0., i1.x, i2.x, 1.));
  vec3 ns = .142857142857 * D.wyz - D.xzx;
  vec4 j = p - 49. * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = floor(j - 7. * x_ ) *ns.x + ns.yyyy;
  vec4 h = 1. - abs(x) - abs(y);
  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );
  vec4 sh = -step(h, vec4(0));
  vec4 a0 = b0.xzyw + (floor(b0)*2.+ 1.).xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + (floor(b1)*2.+ 1.).xzyw*sh.zzww ;
  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);
  vec4 norm = inversesqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;
  vec4 m = max(.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.);
  return .5 + 12. * dot( m * m * m, vec4( dot(p0,x0), dot(p1,x1),dot(p2,x2), dot(p3,x3) ) );
}

vec3 snoiseVec3( vec3 x ){
  return vec3(  snoise(vec3( x )*2.-1.),
								snoise(vec3( x.y - 19.1 , x.z + 33.4 , x.x + 47.2 ))*2.-1.,
								snoise(vec3( x.z + 74.2 , x.x - 124.5 , x.y + 99.4 )*2.-1.)
	);
}

vec3 curlNoise( vec3 p ){
  const float e = .1;
  vec3 dx = vec3( e   , 0.0 , 0.0 );
  vec3 dy = vec3( 0.0 , e   , 0.0 );
  vec3 dz = vec3( 0.0 , 0.0 , e   );

  vec3 p_x0 = snoiseVec3( p - dx );
  vec3 p_x1 = snoiseVec3( p + dx );
  vec3 p_y0 = snoiseVec3( p - dy );
  vec3 p_y1 = snoiseVec3( p + dy );
  vec3 p_z0 = snoiseVec3( p - dz );
  vec3 p_z1 = snoiseVec3( p + dz );

  float x = p_y1.z - p_y0.z - p_z1.y + p_z0.y;
  float y = p_z1.x - p_z0.x - p_x1.z + p_x0.z;
  float z = p_x1.y - p_x0.y - p_y1.x + p_y0.x;

  const float divisor = 1.0 / ( 2.0 * e );
  return normalize( vec3( x , y , z ) * divisor );
}

void main(){
    vUv = uv;
    vPosition=position;

    vec3 distortion1 = vec3(position.x*2.,position.y,1.)*curlNoise(vec3(
        position.x*0.002 + time * 0.01,
        position.y*0.008 + time * 0.01 ,
        (position.x + position.y) * 0.02
    ))*distortion;
    vec3 finalposition = position + distortion1;

    vec4 mvPosition = modelMatrix * viewMatrix * vec4(finalposition,1.0);
    gl_PointSize = .2;
    gl_Position = projectionMatrix * mvPosition;
}`;class T_{constructor(e){this.gui=new M_,this.scene=new vo,this.container=e.dom,this.width=this.container.offsetWidth,this.height=this.container.offsetHeight,this.renderer=new He,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1)),this.renderer.setSize(this.width,this.height),this.renderer.setClearColor(0,1),this.renderer.physicallyCorrectLights=!0,this.renderer.outputEncoding=fo,this.container.appendChild(this.renderer.domElement),this.camera=new ft(75,this.width/this.height,.001,1500),this.camera.position.z=500,this.controls=new Hi(this.camera,this.renderer.domElement),this.controls.listenToKeyEvents(window),this.clock=new kg,this.dt,this.material,this.time=0,this.distortion=0,this.controls.minDistance=0,this.controls.maxDistance=2e3,this.controls.maxPolarAngle=Math.PI/2,this.addObjects(),this.render()}render(){this.time+=.05,this.camera&&this.renderer.render(this.scene,this.camera),this.controls&&this.controls.update(),this.material&&(this.material.uniforms.time.value=this.time,this.material.uniforms.distortion.value=this.distortion),window.requestAnimationFrame(this.render.bind(this))}addObjects(){const e=new Il(336,512,336,512);this.material=new tc({vertexShader:E_,fragmentShader:S_,uniforms:{time:{type:"f",value:0},distortion:{type:"f",value:0},picture:{type:"t",value:new Or().load("./test.jpg")}},side:Gi}),this.cube=new Vs(e,this.material),this.scene.add(this.cube),this.gui.add(this,"distortion").step(.1)}}window.addEventListener("DOMContentLoaded",function(){new T_({dom:document.querySelector("#container")})});

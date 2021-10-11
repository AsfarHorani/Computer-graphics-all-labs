import { OrbitControls } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js";

const getCircleCoordinateList=()=>{
  let cirCod=[]
     //eq of circle x(t) = Rcos(t) and y(t)= Rsin(t) while R is radiius
    //let R=2
    const R =6
    for(var i= 0  ; i<Math.PI*2; i+=Math.PI/16)
    { 
        const x = R * Math.cos(i)
        const y = R * Math.sin(i)
        
        cirCod.push(new THREE.Vector3(x, y, 0))
    }
    return cirCod

}
let torusCor=[];
const getCirclePoints=(R)=>{
 //eq of circle x(t) = Rcos(t) and y(t)= Rsin(t) while R is radiius
 let cor=[]
 for(var i= 0  ; i<Math.PI*2; i+=Math.PI/4)
 { 
     const x = R * Math.cos(i)
     const z = R * Math.sin(i)
     cor.push(new THREE.Vector3(x,0,z))
     torusCor.push(new THREE.Vector3(x,0,z))
 }
 var geom = new THREE.BufferGeometry().setFromPoints(cor);
 var matPoints = new THREE.PointsMaterial({size: 0.3, color: "pink"});
 var points = new THREE.Points(geom, matPoints);
 var matLines = new THREE.LineBasicMaterial({color: "white"});
 var lines = new THREE.LineLoop(geom, matLines);

 
return lines

}



const createTorus =()=>{
  const torus = new THREE.Group()
 let R=2;
 let a = 0;
  const cord = getCircleCoordinateList();
  console.log(cord.length)
  for(let i=0; i<cord.length; i++)
  {
    
    const circle = getCirclePoints(R);
  
     circle.position.x = cord[i].x
     circle.position.y= cord[i].y;
     circle.position.z = cord[i].z
     
     circle.rotation.z= a
     a+= Math.PI/(cord.length/2)
     
    
    torus.add(circle);
  }

  return torus;
}

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 100);
camera.position.set(0, 5, 15);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);



var geom = new THREE.BufferGeometry().setFromPoints(getCircleCoordinateList());
var matPoints = new THREE.PointsMaterial({size: 0.3, color: "pink"});
var points = new THREE.Points(geom, matPoints);
scene.add(points);
const torus = createTorus();
scene.add(torus);



 var controls = new OrbitControls( camera, renderer.domElement );


 renderer.render( scene, camera );

const animate = function () {
   requestAnimationFrame( animate );
         

   controls.update();
        
          renderer.render( scene, camera );

       
};

animate()
	

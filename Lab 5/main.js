import { OrbitControls } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js";
let trees=[]
  let patches =[]
  let  birds=[]
const createCar=()=>{
  const car = new THREE.Group()
  const geometry = new THREE.BoxGeometry(80, 15, 30);
  const material = new THREE.MeshBasicMaterial( { color: "black"} );
  const base= new THREE.Mesh( geometry, material );
  base.position.y = 12;
  car.add(base)
  const wheel1 = createWheel()
  wheel1.position.y = 4;
  wheel1.position.x = -18;
  car.add(wheel1)
  const wheel2 = createWheel()
  wheel2.position.y = 4;
  wheel2.position.x = 18;
  car.add(wheel2)
  
 

  const roofL= createRoof()
  roofL.position.y=25
  roofL.position.x=7
  car.add(roofL)
  

 const line1 = createLine([1,1],[30,5],[17,17]);
 car.add(line1)
 
 const line2 = createLine([1,1],[30,5],[-17,-17]);
 car.add(line2)


 const backLightsl = createLights()
 car.add(backLightsl)
 backLightsl.position.y=12
 backLightsl.position.x=40
 backLightsl.position.z=8
 const backLightsr = createLights()
 car.add(backLightsr)
 backLightsr.position.y=12
 backLightsr.position.x=40
 backLightsr.position.z=-8

  return car
}

const createWheel=()=>{
  const geometry = new THREE.BoxBufferGeometry(12, 8, 33);
  const material = new THREE.MeshBasicMaterial( { color: "grey"} );
  const wheel = new THREE.Mesh(geometry, material);
  return wheel;
}

const createRoof=()=>{
  const geometry = new THREE.BoxBufferGeometry(40, 12, 31);
  const material = new THREE.MeshBasicMaterial( { color: "white"} );
  const roof = new THREE.Mesh(geometry, material);
  return roof
}

const createLine=([x1,x2],[y1,y2],[z1,z2])=>{
  const material = new THREE.LineBasicMaterial( { color: 'black' } );
  const points = [];
points.push( new THREE.Vector3( x1,y1, z1) );
points.push( new THREE.Vector3( x2, y2,z2 ) );


const geometry = new THREE.BufferGeometry().setFromPoints( points );
const line = new THREE.Line( geometry, material );
return line;
}
const createLights=()=>{
  const geometry = new THREE.BoxBufferGeometry(5, 4, 10);
  const material = new THREE.MeshBasicMaterial( { color: "red"} );
  const light = new THREE.Mesh(geometry, material);
  return light;
}

const createPatch=()=>{
  const geometry = new THREE.BoxBufferGeometry(20, 1, 3);
  const material = new THREE.MeshBasicMaterial( { color: "white"} );
  const patch = new THREE.Mesh(geometry, material);
  return patch
}

const ground=()=>{
  const ground = new THREE.Group()
  const geometry = new THREE.BoxBufferGeometry(4000, 5, 100);
  const material = new THREE.MeshBasicMaterial( { color: "#2E2E2E"} );
  const path = new THREE.Mesh(geometry, material);
  const grass = createGrass()
  grass.position.y = -5
  

ground.add(path,grass)

let x = 2000;
 for(var i = 0; i<=12; i++)
 {
 const ntree = createTrees()
  ntree.position.x = x
  ntree.position.y = 10
  ntree.position.z = 80
  
  const patch = createPatch()
  patch.position.x = x
  patch.position.y = 3
  patch.position.z = 0
  patches.push(patch)
 trees.push(ntree)
 const mtree = createTrees()
 mtree.position.x = x
 mtree.position.y = 10
 mtree.position.z = -80
 x-=300
trees.push(mtree)
 }
 ground.add(...trees, ...patches)
 const finishLine = createFinishLine()
 finishLine.position.x = -1800
 ground.add(finishLine)
 const pgeometry = new THREE.BoxBufferGeometry(4000, 4000, 5);
 const pmaterial = new THREE.MeshBasicMaterial( { color: "blue"} );
 const plane = new THREE.Mesh(pgeometry, pmaterial);
plane.position.z=-800
plane.position.y=2000

const plane3 = new THREE.Mesh(pgeometry, pmaterial);
plane3.position.z=800
plane3.position.y=2000

const pgeometry2 = new THREE.BoxBufferGeometry(5, 4000, 4000);
const pmaterial2 = new THREE.MeshBasicMaterial( { color: "blue"} );
const plane4 = new THREE.Mesh(pgeometry2, pmaterial2);
plane4.position.x=2009
plane4.position.y=1800

const plane5 = new THREE.Mesh(pgeometry2, pmaterial2);
plane5.position.x=-2009
plane5.position.y=1800
 
 ground.add( plane,plane3,plane4,plane5 );

  return ground
}


const createGrass=()=>{
  const geometry = new THREE.BoxBufferGeometry(4000, 5, 4000);
  const material = new THREE.MeshBasicMaterial( { color: "green"} );
  const grass = new THREE.Mesh(geometry, material);
  return grass
}

const createTrees=()=>{
  const tree = new THREE.Group()
  const geometry = new THREE.BoxBufferGeometry(5, 70, 5);
  const material = new THREE.MeshBasicMaterial( { color: "brown"} );
  const stem = new THREE.Mesh(geometry, material);
tree.add(stem)
const ggeometry = new THREE.SphereGeometry( 15, 32, 16 );
const gmaterial = new THREE.MeshBasicMaterial( { color:  "#009A17" } );
const sphere = new THREE.Mesh( ggeometry, gmaterial );
sphere.position.y = 45;
tree.add( sphere );
 return tree
}

const createFinishLine=()=>{
  const finish = new THREE.Group()
  const geometry = new THREE.BoxBufferGeometry(5, 50, 5);
  const material = new THREE.MeshBasicMaterial( { color: "red"} );
  const box = new THREE.Mesh(geometry, material);
  const box1 = new THREE.Mesh(geometry, material);
  const geometry2 = new THREE.BoxBufferGeometry(5, 20, 60);
  const material2 = new THREE.MeshBasicMaterial( { color: "red"} );
  const box2 = new THREE.Mesh(geometry2, material2);
  box2.position.y=34
  box1.position.z=30;
  box.position.z=-30;
  box1.position.y=30;
  box.position.y=30;
  finish.add(box,box1,box2)
  return finish
}

const createBird=()=>{
  const material = new THREE.LineBasicMaterial({
    color: 'yellow'
  });
  
  const points = [];
  points.push( new THREE.Vector3( - 10, 0, 0 ) );
  points.push( new THREE.Vector3( 0, 10, 0 ) );
  points.push( new THREE.Vector3( 10, 0, 0 ) );
  
  const geometry = new THREE.BufferGeometry().setFromPoints( points );
  
  const line = new THREE.Line( geometry, material );
  return line
}


function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 5000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
//camera.position.z =100;   
camera.position.y =40;  


const car = createCar();
const gr= ground();
gr.position.x =-1800  
scene.add(car,gr)

let x2 = 2000

 for(let i =0; i<=100; i++){
   const bird = createBird();
   
   bird.position.x = x2;
   bird.position.y = 100
   bird.position.z = getRandomArbitrary(-4000,4000)
    birds.push(bird)
    x2-=300
 }
 scene.add(...birds)
camera.position.x = car.position.x  - 75 * Math.cos( 600 );         
camera.position.y = car.position.z + 120 * Math.sin(610);
camera.lookAt( car.position.x  ,car.position.y ,car.position.z);
document.addEventListener('keydown', (event) => {

  console.log(event.key)
 
  if(event.key==='ArrowUp')
  {
    if(car.position.x <= -3500 )
    {
      console.log(car.position.x)
       return
    }
    camera.position.x -=5
    car.position.x -=5
    renderer.render( scene, camera );    
  }
  else if(event.key==='ArrowDown')
  {
    if(car.position.x >= 100 )
    {
      console.log(car.position.x)
       return
    }
    camera.position.x +=5
    car.position.x +=5
  
    renderer.render( scene, camera );     
  }  

  else if(event.key==='ArrowLeft' )
  {
    
   
   
    if(car.position.z >= 40 )
    {
      console.log(car.position.z)
       return
    }
    car.position.z +=5
    renderer.render( scene, camera );     
  } 
  else if(event.key==='ArrowRight')
  {
    

   
    if(car.position.z <= -40 )
    {
      console.log(car.position.z)
       return
    }
    car.position.z -=5
    renderer.render( scene, camera );     
  } 
  else if(event.key===" ")
  {
       autoRunCar();
  }
  else if(event.key.toLocaleLowerCase()==="f")
  {
       animateCamera();
  }
 else if(event.key==='w')
  {
    if(camera.position.x <= -3500 )
    {
      console.log(car.position.x)
       return
    }
    camera.position.x -=15
   
    renderer.render( scene, camera );    
  }
 else if(event.key==='s')
  {
    if(camera.position.x >= 100 )
    {
      console.log(car.position.x)
       return
    }
    camera.position.x +=50
   
    renderer.render( scene, camera );    
  }
  else if(event.key==='a')
  {
    if(camera.position.z >= 2000 )
    {
      console.log(car.position.x)
       return
    }
    camera.position.z +=50
   
    renderer.render( scene, camera );    
  }

  else if(event.key==='d')
  {
    if(camera.position.z <= -2000 )
    {
      console.log(car.position.x)
       return
    }
    camera.position.z -=50
   
    renderer.render( scene, camera );    
  }
   else if(event.key==='c')
  {
    if(camera.position.y >= 2000 )
    {
      console.log(car.position.y)
       return
    }
    camera.position.y +=50
   
    renderer.render( scene, camera );    
  }
  else if(event.key==='z')
  {
    if(camera.position.y <= 100 )
    {
      console.log(car.position.y)
       return
    }
    camera.position.y -=50
   
    renderer.render( scene, camera );    
  }

  renderer.render( scene, camera );         

}, false);

//  var controls = new OrbitControls( camera, renderer.domElement );




// const animate = function () {
//    requestAnimationFrame( animate );
         

//    controls.update();
        
//           renderer.render( scene, camera );

       
// };

let i = 0
//my seat number is 101021 i used c=2 and R =1 but if i put c=2 the helix formation is not detectible so i used 0.2
let c = 0.2;
 const R =4;

  const animateBirds = function () {
  requestAnimationFrame( animateBirds );
     //eq of helix x(t) = Rcos(t) and y(t)= Rsin(t) while R is radiius z = c*i and c is constant space along 
      
      const x =  R * Math.cos(i)
      const y = R * Math.sin(i)
      const z = c*i
      
      
        birds.forEach(bird=> {
        bird.position.x+=x
        bird.position.y+=y
        bird.position.z+=z
        
        
      })
     
     
     i+= Math.PI/16;
    
   
  renderer.render( scene, camera );
 
};
const animateCamera = function ()
{  camera.position.y=400;
  camera.lookAt( car.position.x -100 ,car.position.y ,car.position.z);
  requestAnimationFrame( animateCamera );
 
  if(camera.position.x <= -3400 )
  {
      console.log(camera.position.x)
      camera.position.x =  camera.position.x;

  }
  else
  {
    camera.position.x += -15;
  }
 

  if(car.position.x <= -3500 )
  {
    
  car.position.x =car.position.x ;
  }
  else
  {
    car.position.x += -17;
  }

  renderer.render( scene, camera );    
}
const  autoRunCar =()=>{
  requestAnimationFrame( autoRunCar );
  if(car.position.x <= -3500 )
  {
    console.log(car.position.x)
     return
  }
  else{
    camera.position.x -=5
    car.position.x -=5
  }
  renderer.render( scene, camera );    
}

//autoRunCar()
animateBirds()
//animate()
//animateCamera();
renderer.render( scene, camera ); 












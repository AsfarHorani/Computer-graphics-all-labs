



const createCar=()=>{
  const car = new THREE.Group()
  const geometry = new THREE.BoxGeometry(60, 15, 30);
  const material = new THREE.MeshBasicMaterial( { color: "white"} );
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
  

 const line1 = createLine([0,0],[30,5],[17,17]);
 car.add(line1)
 
 const line2 = createLine([0,0],[30,5],[-17,-17]);
 car.add(line2)

  
 const line3 = createLine([-18,18],[20,20],[-17,-17]);
 car.add(line3)
   
 const line4 = createLine([-18,18],[20,20],[17,17]);
 car.add(line4)
 const backLights = createLights()
 car.add(backLights)
 backLights.position.y=12
 backLights.position.x=30
 backLights.position.z=0
  return car
}

const createWheel=()=>{
  const geometry = new THREE.BoxBufferGeometry(12, 8, 33);
  const material = new THREE.MeshBasicMaterial( { color: "grey"} );
  const wheel = new THREE.Mesh(geometry, material);
  return wheel;
}

const createRoof=()=>{
  const geometry = new THREE.BoxBufferGeometry(40, 12, 33);
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
  const geometry = new THREE.BoxBufferGeometry(5, 8, 25);
  const material = new THREE.MeshBasicMaterial( { color: "red"} );
  const light = new THREE.Mesh(geometry, material);
  return light;
}

const ground=()=>{
  const ground = new THREE.Group()
  const geometry = new THREE.BoxBufferGeometry(4000, 5, 30);
  const material = new THREE.MeshBasicMaterial( { color: "#2E2E2E"} );
  const path = new THREE.Mesh(geometry, material);
  const grass = createGrass()
  grass.position.y = -5


ground.add(path,grass)
let trees=[]
let x = 2000;
 for(var i = 0; i<=40; i++)
 {
 const ntree = createTrees()
  ntree.position.x = x
  ntree.position.y = 10
  ntree.position.z = 50
  

  
 trees.push(ntree)
 const mtree = createTrees()
 mtree.position.x = x
 mtree.position.y = 10
 mtree.position.z = -50
 x-=100
trees.push(mtree)
 }
 ground.add(...trees)
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
const gmaterial = new THREE.MeshBasicMaterial( { color: 'green' } );
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

const animate = function () {
  requestAnimationFrame( animate );
         
                 car.rotation.x+=0.1
                 gr.rotation.x+=0.1
       
          
          renderer.render( scene, camera );
};






const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
camera.position.z =100;   
camera.position.y =40;  


camera.lookAt(0, 10, 5);

const car = createCar();
const gr= ground();
gr.position.x =-1800  
scene.add(car,gr)
document.addEventListener('keydown', (event) => {
  var name = event.key;
  var code = event.code;
  console.log(name,code)
  console.log(car.position.x)
  if(event.key==='ArrowLeft')
  {
    if(car.position.x <= -3500 )
    {
      console.log(car.position.x)
       return
    }
    camera.position.x -=10
    car.position.x -=10  
    renderer.render( scene, camera );    
  }
  else if(event.key==='ArrowRight')
  {
    camera.position.x +=10
    car.position.x +=10 
 
    renderer.render( scene, camera );     
  }  
 
           

}, false);
//animate()
renderer.render( scene, camera ); 












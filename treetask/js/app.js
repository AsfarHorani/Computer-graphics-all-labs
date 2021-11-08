const scene = new THREE.Scene();
const triangle = new THREE.Group()
var fac = new factory(0, 5, 50, 100); //factory arguments (position_X, position_Y, position_Y, Length)

var plane = new THREE.GridHelper(100, 10);
scene.add(plane);

initialize();

animate();
//Declare or Initialize variables here..
var point, initAngle = 0, t;

//Code your logic here..
function initialize() {

  point = new THREE.Vector2(0, 0);
  initAngle = 0;
 const t = new Navigator(point, initAngle);
   
 const shape = t.drawPath('-f[-f[-f]][+f]');
 
 shape.forEach(element => {
   if(element){
     triangle.add(element)
   }
 });
      scene.add(triangle)    
     
                                                        
}

function animate() {
  requestAnimationFrame(animate);
  
  fac.renderScene();
}


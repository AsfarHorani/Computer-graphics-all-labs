const scene = new THREE.Scene();

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
   
 const shape = t.drawPath('ff-ff-fff-fff-ff-fff-f');
 console.log(shape)

 shape.forEach(element => {
   if(element){
     scene.add(element)
   }
 });
                                                                   
}

function animate() {
  requestAnimationFrame(animate);

  fac.renderScene();
}


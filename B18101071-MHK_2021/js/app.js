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
  t = new Turtle(point, initAngle);

  t.turn(90);
  t.forward(15, true);
  t.turn(-180);
  t.forward(2.5, false);
  t.turn(90)
  t.forward(5, true);
  t.turn(90);
  t.forward(2.5, true);
  t.turn(-180);
  t.forward(15, true);
  scene.add(t.drawTurtle());
}

function animate() {
  requestAnimationFrame(animate);

  fac.renderScene();
}


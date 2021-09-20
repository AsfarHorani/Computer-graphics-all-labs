const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)

const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
// renderer.setClearColor('#e5e5e5')
document.body.appendChild(renderer.domElement)

const makeCube = (colorVal, width, scale, depth, x, y, z) => {
  const geometry = new THREE.BoxGeometry(width, scale, depth)
  //   const texture= new THREE.TextureLoader().load("circuit_pattern.png")
  const material = new THREE.MeshBasicMaterial({ color: colorVal })
  const cube = new THREE.Mesh(geometry, material)
  cube.position.x = x
  cube.position.y = y
  cube.position.z = z
  return cube
}

const makeSphere = function (colorVal, r, w, h, x, y, z) {
  const geometry = new THREE.SphereGeometry(r, w, h)
  const material = new THREE.MeshBasicMaterial({ color: colorVal })
  const sphere = new THREE.Mesh(geometry, material)
  sphere.position.x = x
  sphere.position.y = y
  sphere.position.z = z
  return sphere
}
const cube = makeCube(0xffffff, 2, 2, 2, 0, 0, 0)
const sphere_1 = makeSphere(0xff0000, 0.5, 100, 100, 1.5, 1, 1)
const sphere_2 = makeSphere(0xff0000, 0.5, 100, 100, 1.5, -1, 1)
const sphere_3 = makeSphere(0xff0000, 0.5, 100, 100, -1.5, 1, 1)
const sphere_4 = makeSphere(0xff0000, 0.5, 100, 100, -1.5, -1, 1)
const sphere_5 = makeSphere(0xff0000, 0.5, 100, 100, 1.5, 1, -1)
const sphere_6 = makeSphere(0xff0000, 0.5, 100, 100, 1.5, -1, -1)
const sphere_7 = makeSphere(0xff0000, 0.5, 100, 100, -1.5, 1, -1)
const sphere_8 = makeSphere(0xff0000, 0.5, 100, 100, -1.5, -1, -1)
scene.add(
  cube,
  sphere_1,
  sphere_2,
  sphere_3,
  sphere_4,
  sphere_5,
  sphere_6,
  sphere_7,
  sphere_8
)
const animate = function () {
  requestAnimationFrame( animate );

  sphere_1.rotation.x+=0.01
  sphere_1.rotation.y+=0.01
  sphere_2.rotation.x+=0.01
  sphere_2.rotation.y+=0.01 
  sphere_3.rotation.x+=0.01
  sphere_3.rotation.y+=0.01
   sphere_4.rotation.x+=0.01
  sphere_4.rotation.y+=0.01 
  sphere_5.rotation.x+=0.01
  sphere_5.rotation.y+=0.01
   sphere_6.rotation.x+=0.01
  sphere_6.rotation.y+=0.01 
  sphere_7.rotation.x+=0.01
  sphere_7.rotation.y+=0.01
   sphere_8.rotation.x+=0.01
  sphere_8.rotation.y+=0.01
  cube.rotation.x+=0.01
  cube.rotation.y+=0.01
          //   sphere.rotation.x+=0.01
          //   sphere.rotation.y+=0.01
          //   ring.rotation.x+=0.01
          //   ring.rotation.y+=0.01
  
  renderer.render( scene, camera );
};



    

animate();
     
camera.position.z = 5

renderer.render(scene, camera)

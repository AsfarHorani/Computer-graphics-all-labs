var scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 5000 );

camera.position.set(0, 5, 15);
camera.lookAt(0, 5, 5);
camera.up.set(0,0,1);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.render( scene, camera );

const createGrass=()=>{
    const geometry = new THREE.BoxBufferGeometry(4000, 5, 4000);
    const material = new THREE.MeshBasicMaterial( { color: "green"} );
    const grass = new THREE.Mesh(geometry, material);
    return grass
  }

const createBG=()=>{
    const pgeometry = new THREE.BoxBufferGeometry(4000, 4000, 5);
    const pmaterial = new THREE.MeshBasicMaterial( { color: "blue"} );
    const plane = new THREE.Mesh(pgeometry, pmaterial);
   plane.position.z=-100
    return plane
}

  const createDinos=(cor)=>{
    var dinos=[]

    for(var i =0; i<9; i++)
    {
        var dino = new Dino(cor).init();
        dino.position.x=Math.ceil(Math.random() * 8) * (Math.round(Math.random()) ? 1 : -1);
        dino.position.y= 4;
        dino.position.z= Math.random() * 10;
        dino.rotation.y = Math.random() * 10;
        
        dinos.push(dino);

    }

     
     
     return dinos
    
}

var grass = createGrass();
var BG = createBG()
scene.add(grass,BG)

renderer.render( scene, camera );

document.getElementById('inputfile').addEventListener('change', function() {

 var fr=new FileReader();
    fr.onload=function(){
        var   lines = fr.result.split("\r\n");
     var  cor = [];
 
for(var j=0; j < lines.length; j++)
{
  lines[j] = lines[j].replace(/["]/g,'');
  cor[j] = lines[j].split(",");

}







   var dinos = createDinos(cor);
  
   if(dinos.length>0){
    dinos.forEach(dino => {

        scene.add(dino)
    });
   }
   
console.log(dinos)
renderer.render( scene, camera );
          }
              
            fr.readAsText(this.files[0]);
        })

	


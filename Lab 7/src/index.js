import Dino from './dino';
import THREE from 'three'
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 100);
camera.position.set(0, 5, 15);
camera.lookAt(0, 5, 5);
camera.up.set(0,0,1);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.render( scene, camera );


document.getElementById('inputfile').addEventListener('change', function() {

 var fr=new FileReader();
    fr.onload=function(){
        var   lines = fr.result.split("\r\n");
     var  cor = [];
 
for(j=0; j < lines.length; j++)
{
  lines[j] = lines[j].replace(/["]/g,'');
  cor[j] = lines[j].split(",");

}



var dino1 = new Dino(cor).init();
var dino2 = new Dino(cor).init();
scene.add(dino1,dino2)

renderer.render( scene, camera );
          }
              
            fr.readAsText(this.files[0]);
        })

	


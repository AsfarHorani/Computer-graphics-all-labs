import { OrbitControls } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js";


document.getElementById('inputfile')
            .addEventListener('change', function() {
                let polylinesarr= [];
     var cor = [];
     let arrs=[];
            var fr=new FileReader();
            fr.onload=function(){
                var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 100);
camera.position.set(0, 5, 15);
camera.lookAt(0, 5, 5);
camera.up.set(0,0,1);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
console.log(arrs)
renderer.render( scene, camera );


var lines = fr.result.split("\r\n");
var polylines;
var pointsInPolylines;



for(j=0; j < lines.length; j++)
{
  lines[j] = lines[j].replace(/["]/g,'');
  cor[j] = lines[j].split(",");

 

}

for(var k =1; k<cor.length; k++ ){
    polylines =parseInt(cor[0][0]) ;
    
console.log(polylines)
    for(var i =0; i<polylines; i++ )
{
    pointsInPolylines = parseInt(cor[k][0]) 
    k++;
    console.log(pointsInPolylines)

    poipoly = [];
    for(j=0; j< pointsInPolylines;  j++)
    {
        const x = parseInt(cor[k][0].split(" ")[0] )  
        const y =parseInt(cor[k][0].split(" ")[1] )
        k++;
        x=x/100
        y=y/100
     poipoly.push(new THREE.Vector3(x, y,0));
     
    }  
    polylinesarr.push(poipoly);








}
console.log(polylinesarr);

for(var p=0; p<polylinesarr.length ; p++)
    {
      console.log(polylinesarr[p])
     const material = new THREE.LineBasicMaterial( { color: "white" } );
    const geometry = new THREE.BufferGeometry().setFromPoints( polylinesarr[p]);
    const line = new THREE.Line( geometry, material );
   
    scene.add(line);
    console.log(line)
    renderer.render( scene, camera );
    }
   
    renderer.render( scene, camera );
  
}


     
 
renderer.render( scene, camera );

          }
              
            fr.readAsText(this.files[0]);
        })

class Dino {
   constructor(cor){
        this.dino = new THREE.Group()
        this.cor=cor
        this.polylinesarr= [];
        this.polylines;
      }



 init(){
  for(var k =1; k<this.cor.length; k++ ){
        this.polylines =parseInt(this.cor[0][0]) ;
        console.log(this.polylines)
            for(var i =0; i<this.polylines; i++ )
        {
            let pointsInPolylines = parseInt(this.cor[k][0]) 
            k++;
            console.log(i+1,pointsInPolylines)
            let polyline=[]
    for(var j=0; j< pointsInPolylines;  j++)
    {
         let x = parseInt(this.cor[k][0].split(" ")[0] )  
        let y =parseInt(this.cor[k][0].split(" ")[1] )
        k++;
        x=x/200
        y=y/200
        polyline.push(new THREE.Vector3(x, y,0));
     
    } 
    
            this.polylinesarr.push(polyline);
        
        }
        console.log(this.polylinesarr);
        
          
    }


        for(var p=0; p<this.polylinesarr.length ; p++)
            {
            
             const material = new THREE.LineBasicMaterial( { color: "white" } );
            const geometry = new THREE.BufferGeometry().setFromPoints( this.polylinesarr[p]);
            const line = new THREE.Line( geometry, material );
           
            this.dino.add(line);
         
        
            }
          console.log(this.dino)
       
        return this.dino
      
 }




 

}
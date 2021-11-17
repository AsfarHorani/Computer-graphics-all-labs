class Fractal {
    constructor() {
     
        this.CP = 0;
        this.CD = 0;
        this.path = new THREE.Path();
        this.path.moveTo(this.CP.x, this.CP.y);
        this.points = this.path.getPoints();
        this.geometry = new THREE.BufferGeometry().setFromPoints(this.points);
        this.material = new THREE.LineBasicMaterial({ color: 0xffffff });
        this.line = new THREE.Line(this.geometry, this.material);
        this.minLenSq=100;
        this.factor=4;
        this.pointss=[]
    }
    frac(a, b, stdDeviation) {

       var xDif = a.x - b.x;
        var yDif = a.y - b.y;
        var c;
        if (Math.pow(xDif, 2) + Math.pow(yDif, 2) < this.minLenSq) {
           points.push(this.path.lineTo(b.x, b.y)) 
          
        }
        else {
            stdDeviation *= factor;
            var t = 0;
            for (let i = 0; i < 12; i++) {
                t += Math.random() / 32768.0;
                t = (t - 6) * stdDeviation;
                c.x = 0.5 * (a.x + b.x) + t * (b.y - a.y);
                c.y = 0.5 * (a.y + b.y) + t * (b.x - a.x);
                fractal(a, c, stdDeviation);
                fractal(c, b, stdDeviation);
            }
        }
    }
    draw() {
        //CURRENT PATHS
        this.path.moveTo(this.CP.x, this.CP.y);
        this.points = this.path.getPoints();
        this.geometry = this.geometry.setFromPoints(this.points);
        // this.material = new THREE.LineBasicMaterial({ color: 0xffffff });
        this.line = new THREE.Line(this.geometry, this.material);
        // return this.line;

        return this.line;
    }
}
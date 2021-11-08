
class Navigator extends Turtle
{ constructor(CP,CD)
    {
        super(CP,CD)

   }
//[a,a,a,a,a] = [b,b,b,b,b]

 drawPath(string){
    let strarr =[]
    let tempCd=[];
    let tempCp=[];
 strarr = string.split('').map(element => {
    switch(element){
   case('f'):
   console.log("f", this.CP,this.CD)
    this.forward(40,true);
    return this.drawTurtle()
   case('+'):
    this.turn(-90)
    
   return
   case('-'):
  this.turn(+90)

   return
   case('['):
  
   tempCp.push(this.CP)
   tempCd.push(this.CD)
   console.log(this.CP,tempCd)

   return
   case(']'):
   this.CP=tempCp.pop();
   this.CD=tempCd.pop()
   console.log(this.CP,tempCd)
   return
default:
return

    }

   
});
return strarr;
    }



}

class Navigator extends Turtle
{ constructor(CP,CD)
    {
        super(CP,CD)

   }
//[a,a,a,a,a] = [b,b,b,b,b]

 drawPath(string){
    let strarr =[]
 strarr = string.split('').map(element => {
    switch(element){
   case('f'):
   this.forward(10,true);
  
   return this.drawTurtle()
   case('+'):
   this.turn(-60)
   return
   case('-'):
   this.turn(+60)
   return
default:
return

    }

   
});
return strarr;
    }



}
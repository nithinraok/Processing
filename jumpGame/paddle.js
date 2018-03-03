// PADDLE class for moving paddle randomly and crewating indipendent
// paddles
var padSize = 40;
class Paddle {

  constructor(_x1,_y1,_x2){
    this.x1=_x1;
    this.y1=_y1;
    this.x2=_x2;


  }


drawPaddle(){
  stroke(0);
  fill(255,235,205);
	rect(this.x1,this.y1,padSize+10,20);

}

updatePaddle(pos){
  this.x1= this.x1 + 2*padSize;
  this.y1=this.y1-pos*manHeight;
  this.x2=this.x2+2*padSize;
}
}

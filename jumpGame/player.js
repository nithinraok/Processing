// PLAYER CLASS FOR ACCESING PLAYER FUNCTIONS

class Player{

  constructor(_name,_x,_y){
    this.name = _name;
    this.x = _x;
    this.y = _y;
    this.r = 5;
  }



  show(){
    image(playerImg,this.x,this.y,this.r*5,this.r*5);
  }

   jump(position){
    this.x = this.x+padSize*2;
    this.y = this.y-position*manHeight;
    playerJump.push(position);
    jumpSound.setVolume(0.5);
    if(playerJump[playerCount]==gameJump[playerCount]){
      jumpSound.play();
      playerScore+=1;
    }else{

      overSound.setVolume(0.5);
      overSound.play();
      print('GAME OVER');
      continueGame=false;

    }


  }

  myPosition(){
    return [this.x,this.y];
  }





}

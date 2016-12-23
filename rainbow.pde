
//Lotus Effect

int rad=400;
int degrees=0;
int sign=1;
float temp;
void setup(){
  size(640,480);
  background(50);
}


void draw(){
  //for(int i=0;i<100;i++){
  noFill();
  stroke(random(255),random(255),random(255));
  degrees=(degrees+sign*1)%360;  
  temp = radians(degrees);
  arc(width/2, height/2, rad, rad,PI+QUARTER_PI+temp, PI+3*QUARTER_PI+temp);
  arc(width/2, height/2, rad, rad,PI+QUARTER_PI-temp, PI+3*QUARTER_PI-temp);
  //if(degrees==0)
  if(rad<0 || rad >400){
    sign=sign*-1;
    background(50);
  }
    rad=rad+sign*1;
  //}
}
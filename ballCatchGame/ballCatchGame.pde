int a = int(random(width));
int b= int(random(height));
int startSec=second();
int startMin=minute();
int sec;
int min;
int score=0;

void setup() {
  size(640, 320);
  fill(255, 0, 0);
  ellipse(a, b, 25, 25);
}

void draw() {
  sec = second();
  min = minute();
  background(50);
  fill(255);
  //rectMode(CENTER);
  ellipse(width-mouseX, height-mouseY, 25, 25);
  fill(255, 0, 0);
  ellipse(a, b, 25, 25);
  if (min==startMin+1 && sec==startSec) {
    println("Your Score: "+score);
    exit();
  }
}

void mouseMoved() {

  if (width-mouseX<a+10 && width-mouseX>a-10) {
    if ((height-mouseY<b+10 && height-mouseY>b-10))
    {      
      a = int(random(width));
      b= int(random(height));
      score=score+1;
      //ellipse(100, 100, 25, 25);
    }
  }
}
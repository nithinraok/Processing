class Bubble {

  Bubble(float a, float b, float tempR) {
    circleX=a;
    circleY=b;
    startX=circleX;
    startY=circleY;
    radius=tempR;
  }
  private
    float circleX;
  float circleY;
  float checkMouse;
  float radius;
  float startX, startY;
  float speed=random(2, 6);
  int score=0;
  int Max=1;

  public
    void display() {
    fill(255);
    noStroke();
    ellipse(circleX, circleY, 2*radius, 2*radius);
    /*if (radius!=0) {
     line(startX, startY, circleX, circleY);
     }
     */
  }

  void update() {
    circleY=circleY-speed;
    //circleX=circleX+random(-2, 2);
  }

  void top() {
    
    if (circleY<=-radius) {
      circleY=height;
      circleX=random(width);
      radius=random(15, 40);
      Max=Max+1;
    }
  }


  void popup() {

    checkMouse=dist(mouseX, mouseY, circleX, circleY);
    if (checkMouse<=radius) {
      background(127);
      radius=0;
      score=score+1;
    }
  }


  boolean overlaps(Bubble other) {
    println("Distance: ", dist(circleX, circleY, other.circleX, other.circleY));
    if (dist(circleX, circleY, other.circleX, other.circleY)<=radius+other.radius) {
      return true;
    } else {
      return false;
    }
  }
}
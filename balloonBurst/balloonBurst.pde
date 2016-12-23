Bubble[] bub=new Bubble[4];
float score;
float maxScore;
String normalText, scoreText;

void setup() {
  size(640, 360,P3D);
  background(127);
  for (int i=0; i<bub.length; i++) {
    bub[i]=new Bubble(random(width), height, 25);
  }
  normalText="Your Score : ";
}

void draw() {
  
  background(127);
  for (int i=0; i<bub.length; i++) {
    bub[i].display();
    bub[i].update();
    bub[i].top();
  }

  if (millis()>=30*1000) {
    finalScore();                           
    scoreText=nf(score);
    textSize(25);
    fill(255, 100, 0);
    text(normalText+scoreText, width/2, height/2);
    println("Percentage of Bubbles bursted : ", int((score/maxScore)*100));
    exit();
  }
}

void mousePressed() {
  for (int i=0; i<bub.length; i++) {
    bub[i].popup();
  }
}


void finalScore() {
  for (int i=0; i<bub.length; i++) {
    score=score+bub[i].score;
    maxScore=maxScore+bub[i].Max;
  }
}

padSize = 40;
padStart=0;
padEnd = padStart+padSize;
padLoc = 600/2;
manHeight = 40;
pitch =0;
var gameJump=[];
var playerJump=[];
var playerCount=-1;
var gameCount=-1;
var sec;
var offSet;
var upDown  = [-1,1];
continueGame=true;
playerScore=0;

function preload(){
	backgroundImg = loadImage('background1.png');
	playerImg = loadImage('marioIcon.png');
	jumpSound = loadSound('jumpSound.mp3');
	overSound = loadSound('gameOver.mp3');
}
function setup(){
	createCanvas(1024,625);
	background(135,206,250);
	background(backgroundImg);
	startButton = createButton('UP');
	stopButton = createButton('DOWN');
	startButton.position(10, 65);
	stopButton.position(10,125);
	padLoc = 2*height/3;

	sec = second();
	var remSec = sec%5;
	offSet = 5-remSec;

	player = new Player('Nithin',padSize/2,padLoc-manHeight);
	paddle1 = new Paddle(padStart,padLoc,padEnd);

	startButton.mousePressed(startAudio);
	stopButton.mousePressed(stopAudio);

}

function draw(){


	noStroke();
	fill(135,206,250);
	rect(10, 20, 200, 40);
	if(continueGame){
		updateTime();
		paddle1.drawPaddle();
		player.show();
	}else{
		textSize(50);
		fill(0,255,0);
		text('Your Score : '+playerScore,width/4,height/4);
		fill(255,0,0);
		text('GAME OVER',width/4,height/2);
	}

}

function updateTime(){

	var actSec=second()+offSet;
	var secRem = 5-(actSec%5);
	textSize(32);
	fill(0);
	text("Time left is "+secRem,10,50);
	var mil =floor(millis()%1000);
	if(secRem==1 && mil<15){
		var pos = random(upDown);
		paddle1.updatePaddle(pos);
		gameJump.push(pos);
		gameCount+=1;

	}
}

function startAudio(){
	print("START RECORDING");
		playerCount+=1;
		player.jump(1);

}

function stopAudio(){
	print("STOP RECORDING");
	playerCount+=1;
	player.jump(-1);
}
function updatePitch(){

	return -1;

}

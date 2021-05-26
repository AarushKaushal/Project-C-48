var gameState=0;
var player;
var game;
var ground;
var bgImg;
var distance = 0;
var target=500;
var resetImg;
var restart;
function preload(){
  bgImg  = loadImage("images/Bg.png");
  resetImg = loadImage("images/reset.png");
}  

function setup() {
  createCanvas(windowWidth,windowHeight);
  player = new Player(100,windowHeight-50);
  ground = createSprite(windowWidth/2,windowHeight-20,windowWidth,20);
  ground.visible = false;
  game = new Game();
  restart = createSprite(width/2,height/2+100);
  restart.addImage(resetImg);
}

function draw() {
  background(255,255,255);
  image(bgImg,-500,0,width*6,height); 
  drawSprites();

  restart.visible=false;
  if(gameState === 0){
    game.start();
  }

  if(gameState === 1){
    game.play();
    textSize(30);
    fill("red");
    text("Distance: "+ distance, player.sprite.x,50);
    fill("black");
    text("Target: "+target,player.sprite.x+300,50)
  }

  if(gameState === 2){
    textSize(30);
    fill("red");
    text("Distance: "+ distance, player.sprite.x,50);
    fill("black");
    text("Target: "+target,player.sprite.x+300,50)
    game.end();
    restart.visible=true;
    if(mousePressedOver(restart)){
      reset();
    }
  }
  if(gameState === 3){
    game.win();
  }
 
}
function reset(){

}
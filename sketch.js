var database;
var gameState=0;
var playerCount;
var player1;
var form1;
var game1;
var allPlayers;
var rockets = [rocket1, rocket2];
var p;
var pVel;
var force;
var pos;
var fDirection;
var fireColor;
var playerColor;
var touch;
var rocket1, rocket2;
var forcePush;
var prImg1, prImg2;

function preload(){
prImg1 = loadImage("rocket.png");
prImg2 = loadImage("rocket.png");
}

function setup() {

    createCanvas(1900, 938);
    
    p=createVector(width/2,height/2)
    pVel=createVector(0,0);
    force=createVector(0,0);
    pos = 10;
    fDirection = 0;

    database = firebase.database();

    game1 = new Game();
    game1.getGameState();
    game1.start();

}

  function draw() {
  //background(80,80, 200);
  background(170);
   if(playerCount === 2){
     game1.updateGameState(1);   
   }
   if(gameState === 1){
    game1.play();
    console.log("games1");
   }
   if(gameState === 2){
    game1.end();
   }
  
} 

function keyPressed(){
  if(gameState === 1){
    if(keyCode === "UP_ARROW"){
    console.log("keyPressed");
    }
  } 
}
var backgroundImage,database,form,player,game, allPlayers;
var gameState=0;
var playerCount=0;

var cars;
var car1,car2,car3,car4;
var car1Img,car2Img,car3Img,car4Img;
var track;
var ground;

function preload(){
  car1Img=loadImage("Sprites/car1.png");
  car2Img=loadImage("Sprites/car2.png");
  car3Img=loadImage("Sprites/car3.png");
  car4Img=loadImage("Sprites/car4.png");
  track=loadImage("Sprites/track.jpg");
}


function setup(){
  var canvas=createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();

  game=new Game();
  game.getState();
  game.start();
  
}

function draw(){
  if(playerCount===4){
    game.update(1);
  }

  if(gameState===1){
    clear();
    game.play();
  }

  if(gameState===2){
    game.end();
  }

}


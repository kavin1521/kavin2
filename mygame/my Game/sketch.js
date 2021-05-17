var database;
var game;
var gameState=0;
var playerCount;
var bg1img;
var player;

function preload(){
bg1img=loadImage("bg/bg1.jpg");
}

function setup(){
    var canvas = createCanvas(displayWidth-20,displayHeight-30);
    database=firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background(0);
    imageMode(CENTER);
    image(bg1img,displayWidth/2,displayHeight/2,displayWidth-20,displayHeight-30)
   
    if(playerCount === 2){
        console.log("working");
        game.update(1);
    }
}
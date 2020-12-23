var database;
var gameState = 0;
var game, form, player, playerCount;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  game = new Game();
  game.getState();
  game.start();
  
}

function draw(){
  
}
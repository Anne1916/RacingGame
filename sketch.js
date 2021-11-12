let canvas, backgroundImage;

let gameState = 0;
let playerCount;
let allPlayers;
let distance = 0;
let database;

let form, player, game;

let cars, car1, car2, car3, car4;

function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight - 30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  if (playerCount === 4) {
    game.update(1);
  }
  if (gameState === 1) {
    clear();
    game.play();
  }
}

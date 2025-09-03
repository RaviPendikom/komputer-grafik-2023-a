let x = 300;
let y = 300;
let radius = 100;
let speedX = 10;
let speedY = 6;

function setup() {
  createCanvas(600, 600);
  background(132, 49, 120);
}

function draw() {
  fill(random(255), random(255), random(255), random(255));
  noStroke();
  circle(x, y, random(100));
  if (x + 50 >= 600 || x - 50 <= 0) {
    speedX *= -1;
  }

  if (y + 50 >= 600 || y - 50 <= 0) {
    speedY *= -1;
  }
  x += speedX;
  y += speedY;
}

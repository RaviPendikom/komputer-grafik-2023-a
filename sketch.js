let x = 300;
let y = 300;
let radius = 100;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(132, 49, 120);
  noStroke();
  fill(152, 200, 89);
  circle(x, y, radius);
  radius += 1;
}

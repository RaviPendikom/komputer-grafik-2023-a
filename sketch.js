// let x = 300;
// let y = 300;
// let radius = 100;

function setup() {
  createCanvas(600, 600);
  background(132, 49, 120);
}

function draw() {
  fill(random(255), random(255), random(255), random(255));
  noStroke();
  circle(random(600), random(600), random(100));
}

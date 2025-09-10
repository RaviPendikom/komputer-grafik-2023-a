function setup() {
  createCanvas(600, 600);
  background("#476EAE");
}

function draw() {
  rectMode(CENTER);
  fill(random(255), random(255), random(255), random(255));
  circle(mouseX, mouseY, 150);
  // line(300, 300, mouseX, mouseY);
}

let size = 150;

function setup() {
  createCanvas(600, 600);
  background("#476EAE");
}

function draw() {
  rectMode(CENTER);
  fill(random(255), random(255), random(255), random(255));
  circle(mouseX, mouseY, size);

  if (keyIsPressed) {
    size += 2;
  }

  if (mouseIsPressed) {
    size -= 2;
  }
}

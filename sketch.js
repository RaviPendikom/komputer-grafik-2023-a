let size = 150;

function setup() {
  createCanvas(600, 600);
  background("#476EAE");
}

function draw() {
  rectMode(CENTER);
  fill(random(255), random(255), random(255), random(255));
  circle(mouseX, mouseY, size);
  if (mouseIsPressed) {
    size -= 2;
    if (size <= 25) {
      size = 25;
    }
  }

  // line(300, 300, mouseX, mouseY);
}

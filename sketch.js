function setup() {
  createCanvas(600, 600);
  background("#476EAE");
}

function draw() {
  line(pmouseX, pmouseY, mouseX, mouseY);
}

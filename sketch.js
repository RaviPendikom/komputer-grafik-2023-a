let x = 300;
let y = 300;
let size = 50;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background("#476EAE");
  circle(x, y, size);
  if (keyIsPressed) {
    if (keyCode === LEFT_ARROW) {
      x -= 4;
    }
  }
}

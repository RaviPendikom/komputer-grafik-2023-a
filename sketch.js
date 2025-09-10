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
    } else if (keyCode === RIGHT_ARROW) {
      x += 4;
    } else if (keyCode === UP_ARROW) {
      y -= 4;
    } else if (keyCode === DOWN_ARROW) {
      y += 4;
    }
  }

  if (x - size / 2 >= width) {
    x = 0;
  }

  if (y - size / 2 >= height) {
    y = 0;
  }

  if (x + size / 2 <= 0) {
    x = width;
  }

  if (y + size / 2 <= 0) {
    y = width;
  }
}

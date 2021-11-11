let cloudArray;

let bg_h_div = 12; // Multiples of 4
let bg_minStrokeWidth = 5;
let bgNumShadows = 9;

function drawZoomBg(_counter) {
  cloudArray = [];
  createCanvas(1920, 1080);
  background(14);

  // Populate tiles array
  let stepX = width / bg_h_div;
  let stepY = width / bg_h_div;
  for (let i = 0; i < width / 2; i += stepX) {
    for (let j = 480; j < height; j += stepY) {
      cloudArray.push(
        new Cloud(i, j, stepX, stepY, bg_h_div, personArray[_counter])
      );
    }
  }

  cloudArray.forEach((item) => {
    item.show();
  });

  push();
  scale(-1, 1);
  translate(-width, 0);
  cloudArray.forEach((item) => {
    item.show();
  });
  pop();

  // Populate DI Logos
  image(dic_logo, 60, 60);
}

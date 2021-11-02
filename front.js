let diColors, quad;
let tileArray;

let h_div = 4; // Multiples of 4
let v_div = 4; // Multiples of 4
let bounds = 0;
let namebanner_h = 250;

let minStrokeWidth = 3.5;
let numShadows = 7;

function preload() {
  // DIC Logo
  dic_logo = loadImage('assets/dic-logo.png');
  
  // Preloading Roboto font
  roboto_bl = loadFont('fonts/Roboto-Black.ttf');
  roboto_bold = loadFont('fonts/Roboto-Bold.ttf');
  roboto_reg = loadFont('fonts/Roboto-Regular.ttf');
  roboto_med = loadFont('fonts/Roboto-Medium.ttf');
}

function setup() {
  createCanvas(800, 800 + namebanner_h);
  // randomSeed(274329);

  diColors = [
    color("#E3C766"), // yellow
    // color("#e19121"), // orange
    color("#d9707f"), // pink
    color("#37b5ac"), // kepel
    // color("#b16acf"), // purple
    color("#dddddd"), // white
  ];

  // Populate tiles array
  tileArray = [];
  let stepX = width / (2 * h_div);
  let stepY = width / (2 * v_div);
  for (let i = bounds; i < width / 2; i += stepX) {
    for (let j = bounds; j < width / 2; j += stepY) {
      tileArray.push(new Tile(i, j, stepX, stepY, h_div));
    }
  }
}

function draw() {
  background(14);

  tileArray.forEach((item) => {
    item.show();
  });
  mirror();
  
  popoulateNameBanner();
  populateLogos();
}

function popoulateNameBanner() {
  push();
  textAlign(LEFT, TOP);
  noStroke();
  let fontColor = color('#DEDEDE');
  
  textFont(roboto_bl);
  textSize(48);
  fill(fontColor);
  text("Sarwesh Shah", 48, width + 48);
  
  textFont(roboto_med);
  textSize(29);
  fill('#A9A9A9');
  text("Design Professional, UXG ValueLabs", 48, width + 48 + 54);
  
  fontColor.setAlpha(40);
  fill(fontColor);
  rect(48, width + 48 + 54 + 52, 172, 48, 8);
  
  fontColor.setAlpha(255);
  fill(fontColor);
  textFont(roboto_reg);
  textSize(32);
  fill(fontColor);
  text("Volunteer", 64, width + 48 + 60 + 51);
  
  pop();
}

function populateLogos() {
  image(dic_logo, width - 82 - 48, width + 48/2 + 60, 82, 100)
}

function mirror() {
  push();
  scale(-1, 1);
  translate(-width, 0);
  tileArray.forEach((item) => {
    item.show();
  });
  pop();

  push();
  scale(1, -1);
  translate(0, -height + namebanner_h);
  tileArray.forEach((item) => {
    item.show();
  });
  pop();

  push();
  scale(-1, -1);
  translate(-width, -height + namebanner_h);
  tileArray.forEach((item) => {
    item.show();
  });
  pop();
}

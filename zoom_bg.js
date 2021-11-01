let diColors;
let tileArray;

let h_div = 16; // Multiples of 4
let v_div = 9; // Multiples of 4
let bounds = 600; //280; // Multiples of 160

let minStrokeWidth = 4;
let numShadows = 9;

function preload() {
  // DIC Logo
  dic_logo = loadImage('assets/dic-logo.png');
}

function setup() {
  createCanvas(1920, 1080);
  // randomSeed(274329);

  diColors = [
    color("#E3C766"), // yellow
    color("#e19121"), // orange
    color("#d9707f"), // pink
    color("#37b5ac"), // kepel
    color("#b16acf"), // purple
    color("#dddddd"), // white
  ];

  // Populate tiles array
  tileArray = [];
  let stepX = width / h_div;
  let stepY = height / v_div;
  for (let i = 0; i < width / 2; i += stepX) {
    for (let j = bounds; j < height; j += stepY) {
      tileArray.push(new Cloud(i, j, stepX, stepY, h_div));
    }
  }
  
  background(14);

  tileArray.forEach((item) => {
    item.show();
  });
  
  mirror();
  populateLogos();
}

function mirror() {
  push();
  scale(-1, 1);
  translate(-width, 0);
  tileArray.forEach((item) => {
    item.show();
  });
  pop();
}

function populateLogos() {
  image(dic_logo, 60,  60)
}

class Cloud {
  constructor(_x, _y, _w, _h, _div) {
    this.div = _div;

    this.pos = createVector(_x, _y);
    this.size = createVector(_w, _h);

    // Colour of the line
    this.col = random(diColors);

    // Probability factor : Determines the direction of line drawn
    this.prob = random(0, 1);

    // No. of arc shadows in a tile
    this.numShadows = numShadows;
  }

  show() {
    strokeWeight(constrain(20 / this.div, minStrokeWidth, 4));
    strokeCap(SQUARE);

    this.showArc(this.prob);
  }

  showArc(prob) {
    noFill();
    this.col.setAlpha(map(this.pos.y, 500, height, 0, 300));
    let bgColor = color(red(this.col), green(this.col), blue(this.col), 10);
    push();
    if (prob >= 0 && this.prob < 0.40) {
      for (let i = 0; i < this.numShadows; i++) {
        // NE
        stroke(lerpColor(this.col, bgColor, map(i, 0, this.numShadows, 0, 1)));
        arc(
          this.pos.x, this.pos.y + this.size.y,
          map(i, 0, this.numShadows, 2 * this.size.x, 0),
          map(i, 0, this.numShadows, 2 * this.size.y, 0),
          -HALF_PI, 0
        );
      }
    } 
    else if (prob >= 0.55 && this.prob < 0.95) {
      for (let i = 0; i < this.numShadows; i++) {
        // NW
        stroke(lerpColor(this.col, bgColor, map(i, 0, this.numShadows, 0, 1)));
        arc(
          this.pos.x + this.size.x, this.pos.y + this.size.y,
          map(i, 0, this.numShadows, 2 * this.size.x, 0),
          map(i, 0, this.numShadows, 2 * this.size.y, 0),
          -PI, -HALF_PI
        );
      }
    }
    pop();
  }
}

function keyTyped() {
  if (key === "s") {
    save();
  } else if (key === "f") {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}


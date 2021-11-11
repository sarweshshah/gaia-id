let tileArray;

let f_h_div = 4; // Multiples of 4
let f_v_div = 4; // Multiples of 4
let bounds = 0;

let minStrokeWidth = 2.5;
let numShadows = 7;

function drawFrontCard(_counter) {
  canvas = createCanvas(800, 800 + namebanner_h);
  background(14);

  // Populate tiles array
  tileArray = [];
  let stepX = width / (2 * f_h_div);
  let stepY = width / (2 * f_v_div);
  for (let i = bounds; i < width / 2; i += stepX) {
    for (let j = bounds; j < width / 2; j += stepY) {
      tileArray.push(new Tile(i, j, stepX, stepY, f_h_div, personArray[_counter]));
    }
  }
  
  tileArray.forEach((item) => {
    item.show();
  });
  mirror();
  
  popoulateNameBanner(_counter);
  populateFrontLogos();
}


///////////////////////////////////////////////////////////////////////
////////////////////////// TEXT FUNCTIONS  ////////////////////////////

function popoulateNameBanner(_counter) {
  let person = personArray[_counter];
  push();

  textAlign(LEFT, TOP);
  noStroke();
  let fontColor = color("#DEDEDE");

  textFont(roboto_bl);
  textSize(46);
  fill(fontColor);
  text(person.name, 48, width + 40);

  textFont(roboto_med);
  textSize(29);
  fill("#A9A9A9");
  text(person.role, 48, width + 40 + 60);

  fontColor.setAlpha(40);
  fill(fontColor);
  rect(48, width + 48 + 54 + 52, textWidth("Attendee") + 48, 48, 8);

  fontColor.setAlpha(255);
  fill(fontColor);
  textFont(roboto_reg);
  textSize(32);
  fill(fontColor);
  text("Attendee", 64, width + 48 + 60 + 52);

  pop();
}

function populateFrontLogos() {
  image(dic_logo, width - 82 - 48, width + 48 / 2 + 60, 82, 100);
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
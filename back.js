let diColors, quad;
let tileArray;
let namebanner_h = 250;

function preload() {
  // DIC Logo
  dic_logo = loadImage("assets/dic-logo.png");

  // Preloading Roboto font
  roboto_bl = loadFont("fonts/Roboto-Black.ttf");
  roboto_bold = loadFont("fonts/Roboto-Bold.ttf");
  roboto_reg = loadFont("fonts/Roboto-Regular.ttf");
  roboto_med = loadFont("fonts/Roboto-Medium.ttf");
}

function setup() {
  createCanvas(800, 800 + namebanner_h);
  // randomSeed(274329);

  diColors = [
    color("#E3C766"), // yellow
    color("#e19121"), // orange
    color("#d9707f"), // pink
    // color("#c93b3b"), // red

    // color("#29b85d"), // green
    // color("#37b5ac"), // kepel
    // color("#b16acf"), // purple
  ];
}

function draw() {
  background(14);
  
  populateDate();
  populateText();

  populateIDNumber();
  popoulateUXGDetails();
  populateLogos();
}

function populateDate() {
  push();
  textAlign(CENTER, TOP);
  noStroke();
  let fontColor = color("#29b85d");//color("#DEDEDE");
  
  textFont(roboto_bl);
  textSize(36);
  fill(fontColor);
  text("Nov", width - 88, 60);
  
  
  textFont(roboto_reg);
  textSize(56);
  fill(fontColor);
  text("20", width - 88, 96);
  pop();
}

function populateText() {
  push();
  noStroke();
  let fontColor = color("#DEDEDE");
  
  textFont(roboto_reg);
  textSize(32);
  fill(fontColor);
  text("You are a\n" + "Design Professional", 60, 260 + 60);
  
  textFont(roboto_bl);
  textSize(72);
  fill(fontColor);
  textLeading(80);
  text("Thoughtful.\nOriginal.\nCreative.", 60, 260 + 60 + 120);
  pop();
}

function populateIDNumber() {
  push();
  textAlign(LEFT, TOP);
  noStroke();
  let fontColor = color("#DEDEDE");
  
  textFont(roboto_bl);
  textSize(36);
  fill(fontColor);
  text("Your Unique ID No.", 48, 60);
  
  textFont(roboto_bl);
  textSize(72);
  fill(color("#29b85d"));
  text("23113", 48, 60 + 36);
  pop();
}

function popoulateUXGDetails() {
  push();
  textAlign(LEFT, TOP);
  noStroke();
  let fontColor = color("#29b85d"); //color("#DEDEDE");
  
  textFont(roboto_bl);
  textSize(26);
  fill(fontColor);
  text("Design Inspire Conference 2021", 60, width + 100);

  textFont(roboto_med);
  textSize(22);
  fill("#A9A9A9");
  text("User Experience Group, ValueLabs\nHyderabad, India", 60, width + 100 + 32);

  pop();
}

function populateLogos() {
  image(dic_logo, width - 82 - 60, width + 48 / 2 + 76, 82, 100);
}

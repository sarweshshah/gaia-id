function drawBackCard(_counter) {
  canvas = createCanvas(800, 800 + namebanner_h);
  background(14);

  let person = personArray[_counter];

  populateDate(person);
  populateText(person);

  populateIDNumber(person);
  popoulateUXGDetails(person);
  populateBackLogos();
}

///////////////////////////////////////////////////////////////////////
/////////////////////////. TEXT FUNCTIONS  ////////////////////////////

function populateDate(person) {
  push();
  textAlign(CENTER, TOP);
  noStroke();
  let fontColor = person.colors[0]; //color("#DEDEDE");

  textFont(roboto_bl);
  textSize(36);
  fill(fontColor);
  text("Nov", width - 88, 60);

  textFont(roboto_bl);
  textSize(56);
  fill(fontColor);
  text("20", width - 88, 96);
  pop();
}

function populateText(person) {
  push();
  noStroke();
  let fontColor = color("#DEDEDE");

  textFont(roboto_reg);
  textSize(32);
  fill(fontColor);
  text(person.roleToString(person.role), 60, 260 + 60);

  textFont(roboto_bl);
  textSize(72);
  fill(fontColor);
  textLeading(80);
  text(person.qualities, 60, 260 + 60 + 120);
  pop();
}

function populateIDNumber(person) {
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
  fill(person.colors[0]);
  text(pad(person.id, 5), 48, 60 + 36);
  pop();
}

function popoulateUXGDetails(person) {
  push();
  textAlign(LEFT, TOP);
  noStroke();
  let fontColor = person.colors[0];

  textFont(roboto_bl);
  textSize(26);
  fill(fontColor);
  text("Design Inspire Conference 2021", 60, width + 100);

  textFont(roboto_med);
  textSize(22);
  fill("#A9A9A9");
  text(
    "User Experience Group, ValueLabs\nHyderabad, India",
    60,
    width + 100 + 32
  );

  pop();
}

function populateBackLogos() {
  image(dic_logo, width - 82 - 60, width + 48 / 2 + 76, 82, 100);
}

function pad(num, size) {
  num = num.toString();
  while (num.length < size) num = "0" + num;
  return num;
}

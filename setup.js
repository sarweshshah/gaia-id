let personArray = [];
let counter = 0;
let table, canvas;
let namebanner_h = 250;

function preload() {
  // Load the csv file before beginning
  table = loadTable("form.csv", "csv", "header", () => {
    print("CSV file Loaded!");
  });

  // DIC Logo
  dic_logo = loadImage("assets/dic-logo.png");

  // Preloading Roboto font
  roboto_bl = loadFont("fonts/Roboto-Black.ttf");
  roboto_bold = loadFont("fonts/Roboto-Bold.ttf");
  roboto_reg = loadFont("fonts/Roboto-Regular.ttf");
  roboto_med = loadFont("fonts/Roboto-Medium.ttf");
}

function setup() {
  // 1. Get a row from CSV file
  // 2. Parse it into an Indentity object
  // 3. Add to indentity array
  for (let r = 0; r < table.getRowCount(); r++) {
    let aRow = table.getRow(r);
    personArray.push(new Person(aRow.obj));
  }
}

function draw() { 
  // Set random seed for the participant
  randomSeed(personArray[counter % table.getRowCount()].id);
  
  // Render collatorals
  // drawFrontCard(counter % table.getRowCount());
  // drawBackCard(counter % table.getRowCount());
  drawZoomBg(counter % table.getRowCount());

  // Save all id cards as images
  // save(
  //   // 'shape_' +
  //   personArray[counter % table.getRowCount()].id + '.png'
  // );
  // counter++;
  // if (counter == table.getRowCount()) noLoop();
}

function keyPressed() {
  if (key == 'p') {
    save(personArray[counter % table.getRowCount()].id + '.png');
  }

  // Cycle through image on keypress
  if (keyCode === UP_ARROW || keyCode === RIGHT_ARROW) {
    counter++;
  } else if (keyCode === DOWN_ARROW || keyCode === LEFT_ARROW) {
    if (counter != 0) {
      counter--;
    } else {
      counter = table.getRowCount();
    }
  }
  
  // console.log(counter % table.getRowCount(), personArray[counter % table.getRowCount()].id);
}
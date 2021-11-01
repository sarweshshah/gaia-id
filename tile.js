class Tile {
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
    // this.showTileBorder();
  }

  showTileBorder() {
    push();
    stroke(125);
    strokeWeight(1);
    noFill();
    rect(this.pos.x, this.pos.y, this.size.x, this.size.y);
    pop();
  }

  showArc(prob) {
    noFill();
    let bgColor = color(red(this.col), green(this.col), blue(this.col), 10);
    push();
    if (prob < 0.35) {
      for (let i = 0; i < this.numShadows; i++) {
        // SE
        stroke(lerpColor(this.col, bgColor, map(i, 0, this.numShadows, 0, 1)));
        arc(
          this.pos.x, this.pos.y,
          map(i, 0, this.numShadows, 2 * this.size.x, 0),
          map(i, 0, this.numShadows, 2 * this.size.y, 0),
          0, HALF_PI
        );
      }
    } else if (prob >= 0.35 && this.prob < 0.45) {
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
    } else if (prob >= 0.5 && this.prob < 0.65) {
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
    } else if (prob >= 0.75 && this.prob < 1) {
      for (let i = 0; i < this.numShadows; i++) {
        // SW
        stroke(lerpColor(this.col, bgColor, map(i, 0, this.numShadows, 0, 1)));
        arc(
          this.pos.x + this.size.x, this.pos.y,
          map(i, 0, this.numShadows, 2 * this.size.x, 0),
          map(i, 0, this.numShadows, 2 * this.size.y, 0),
          HALF_PI, PI
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

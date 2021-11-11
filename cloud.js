class Cloud {
  constructor(_x, _y, _w, _h, _div, _person) {
    this.div = _div;
    this.person = _person;

    this.pos = createVector(_x, _y);
    this.size = createVector(_w, _h);

    // Colour of the line
    this.color = random(this.person.colors);

    // Probability factor : Determines the direction of line drawn
    this.prob = random(0, 1);

    // No. of arc shadows in a tile
    this.bgNumShadows = bgNumShadows;
  }

  show() {
    strokeWeight(constrain(20 / this.div, bg_minStrokeWidth, 4));
    strokeCap(SQUARE);

    this.showArc(this.prob);
  }

  showArc(prob) {
    noFill();
    let bgColor = color(red(this.color), green(this.color), blue(this.color), 10);

    push();
    this.color.setAlpha(map(this.pos.y, 300, height, 0, 300));
    
    if (prob >= 0 && this.prob < 0.45) {
      for (let i = 0; i < this.bgNumShadows; i++) {
        // NE
        stroke(lerpColor(this.color, bgColor, map(i, 0, this.bgNumShadows, 0, 1)));
        arc(
          this.pos.x, this.pos.y + this.size.y,
          map(i, 0, this.bgNumShadows, 2 * this.size.x, 0),
          map(i, 0, this.bgNumShadows, 2 * this.size.y, 0),
          -HALF_PI, 0
        );
      }
    } else if (prob >= 0.5 && this.prob < 0.95) {
      for (let i = 0; i < this.bgNumShadows; i++) {
        // NW
        stroke(lerpColor(this.color, bgColor, map(i, 0, this.bgNumShadows, 0, 1)));
        arc(
          this.pos.x + this.size.x, this.pos.y + this.size.y,
          map(i, 0, this.bgNumShadows, 2 * this.size.x, 0),
          map(i, 0, this.bgNumShadows, 2 * this.size.y, 0),
          -PI, -HALF_PI
        );
      }
    }
    pop();
  }
}
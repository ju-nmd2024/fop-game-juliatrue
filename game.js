let x = 200;
let y = 200;

function ladybug(x, y, flying) {
  angleMode(DEGREES);

  if (flying) {
    // black wings
    push();
    translate(x, y);
    stroke(50, 50, 50);
    fill(100, 80, 80);
    beginShape();
    vertex(0, 0);
    bezierVertex(-75, -70, -125, -95, -250, -90);
    bezierVertex(-240, -70, -140, -20, -20, 0);
    endShape();

    beginShape();
    vertex(0, 0);
    bezierVertex(75, -70, 125, -95, 250, -90);
    bezierVertex(240, -70, 140, -20, 20, 0);
    endShape();
    pop();

    // red wings
    push();
    fill(255, 0, 0);
    strokeWeight(5);
    stroke(255, 0, 0);
    translate(x, y - 70);
    beginShape();
    vertex(0, 0);
    bezierVertex(0, 5, -50, 0, -40, 75);
    bezierVertex(-110, 50, -160, -40, -150, -70);
    bezierVertex(-80, -90, -10, -60, 0, 0);
    endShape();

    beginShape();
    vertex(0, 0);
    bezierVertex(0, 5, 50, 0, 40, 75);
    bezierVertex(110, 50, 160, -40, 150, -70);
    bezierVertex(80, -90, 10, -60, 0, 0);
    endShape();

    //dots
    noStroke();
    fill(0, 0, 0);
    beginShape();
    vertex(-3, -20);
    bezierVertex(-10, -40, -30, -10, 2, 0);
    endShape();

    beginShape();
    vertex(3, -20);
    bezierVertex(10, -40, 30, -10, -2, 0);
    endShape();

    ellipse(-50, -50, 20, 20);
    ellipse(-40, -20, 10, 10);
    ellipse(-75, 15, 20, 20);
    ellipse(-100, -30, 20, 20);
    ellipse(-135, -55, 15, 17);

    ellipse(50, -50, 20, 20);
    ellipse(40, -20, 10, 10);
    ellipse(75, 15, 20, 20);
    ellipse(100, -30, 20, 20);
    ellipse(135, -55, 15, 17);

    pop();
  } else {
    // only red wings
    push();
    fill(255, 0, 0);
    strokeWeight(5);
    stroke(255, 0, 0);
    translate(x, y - 70);
    beginShape();
    vertex(0, 0);
    bezierVertex(0, 5, -50, 0, -40, 75);
    bezierVertex(-80, 100, -130, 10, -60, -45);
    bezierVertex(-50, -50, 30, -100, 0, 5);
    endShape();

    beginShape();
    vertex(0, 0);
    bezierVertex(0, 5, 50, 0, 40, 75);
    bezierVertex(80, 100, 130, 10, 60, -45);
    bezierVertex(50, -50, -30, -100, 0, 5);
    endShape();

    stroke(200, 0, 0);
    line(0, 10, 0, -58);

    //dots
    noStroke();
    fill(0, 0, 0);
    ellipse(0, -20, 30, 25);
    ellipse(-20, -50, 20, 15);
    ellipse(-40, -20, 10, 10);
    ellipse(-75, 15, 20, 20);

    ellipse(20, -50, 20, 15);
    ellipse(40, -20, 10, 10);
    ellipse(75, 15, 20, 20);

    push();
    translate(-70, -30);
    rotate(-45);
    ellipse(0, 0, 20, 15);
    pop();

    push();
    translate(70, -30);
    rotate(45);
    ellipse(0, 0, 20, 15);
    pop();

    pop();
  }

  // head
  fill(0, 0, 0);
  stroke(0, 0, 0);
  ellipse(x, y - 30, 120, 90);

  push();
  translate(x, y - 10);
  rotate(45);
  rect(-50, -50, 90, 90, 35);
  pop();

  // eyes
  push();
  translate(x, y - 15);
  fill(255, 255, 255);
  noStroke();
  ellipse(-30, 0, 25, 30);
  ellipse(30, 0, 25, 30);

  fill(0, 0, 0);
  ellipse(28, 0, 15, 20);
  ellipse(-28, 0, 15, 20);

  fill(255, 255, 255);
  ellipse(-32, -5, 10, 10);
  ellipse(-28, 5, 5, 5);

  ellipse(24, -5, 10, 10);
  ellipse(28, 5, 5, 5);
  pop();

  // legs, left then right
  push();
  translate(x, y);
  strokeWeight(10);
  line(-45, 0, -55, 10);
  line(-55, 10, -40, 40);
  line(-40, 40, -55, 45);

  line(-50, -5, -70, 0);
  line(-70, 0, -70, 25);
  line(-70, 25, -85, 30);

  line(45, 0, 55, 10);
  line(55, 10, 40, 40);
  line(40, 40, 55, 45);

  line(50, -5, 70, 0);
  line(70, 0, 70, 25);
  line(70, 25, 85, 30);
  pop();
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(131, 200, 240);

  push();
  translate(x + 200, y);
  scale(0.5);
  ladybug(0, 0, keyIsDown(32));
  pop();
}

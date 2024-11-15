let x = 200;
let y = 200;

let characterX = 400;
let characterY = 200;

let cloudsX = 100;
let cloudsY = 200;

// gravity variables
let velocityY = 0.2;
let acceleration = 0.2;

function setup() {
  createCanvas(800, 600);
}

function startScreen() {
  background(255, 227, 228);
  push();
  fill(194, 29, 34);
  strokeWeight(5);
  stroke(125, 5, 9);
  rect(300, 250, 200, 100, 10);
  rect(150, 120, 500, 100, 10);
  rect(330, 480, 140, 50, 10);

  noStroke();
  fill(255);
  textSize(35);
  textFont("Verdana");
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text("START", 300, 300, 200);

  fill(0);
  textSize(32);
  text("A Ladybugs Adventure!", 150, 170, 500);
  textSize(22);
  text("RULES", 330, 505, 140);

  fill(125, 5, 9);
  textSize(12);
  text("made by julia", 300, 550, 200);
  pop();
}

function flower(x, y) {
  push();
  translate(x - 50, y - 50);
  angleMode(DEGREES);

  fill(125, 5, 9);
  noStroke();
  ellipse(0, -30, 50, 60);

  push();
  rotate(70);
  ellipse(0, -30, 50, 60);
  rotate(70);
  ellipse(0, -30, 50, 60);
  rotate(73);
  ellipse(0, -30, 50, 60);
  rotate(75);
  ellipse(0, -30, 50, 60);
  pop();

  fill(194, 29, 34);
  stroke(194, 29, 34);
  strokeWeight(3);
  ellipse(0, 0, 40);

  pop();
}

function rulesScreen() {
  background(255, 227, 228);
  push();
  fill(194, 29, 34);
  strokeWeight(5);
  stroke(125, 5, 9);
  rect(200, 100, 400, 250, 10);
  rect(330, 480, 140, 50, 10);

  noStroke();
  fill(255);
  textSize(34);
  textStyle(BOLD);
  textFont("Verdana");
  textAlign(CENTER, CENTER);
  text("RULES", 200, 150, 400);

  textSize(16);
  text("Make sure that the ladybug safely lands on the leaf.", 210, 200, 380);
  text("Use the spacebar to fly.", 210, 245, 380);
  text("And control its movement with the left", 210, 280, 380);
  text("and right arrow keys.", 210, 300, 380);

  fill(0);
  textSize(22);
  text("BACK", 330, 505, 140);

  pop();
}

function ladybug(characterX, characterY, flying) {
  angleMode(DEGREES);

  if (flying) {
    // black wings
    push();
    translate(characterX, characterY);
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
    translate(characterX, characterY - 70);
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
    translate(characterX, characterY - 70);
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
  ellipse(characterX, characterY - 30, 120, 90);

  push();
  translate(characterX, characterY - 10);
  rotate(45);
  rect(-50, -50, 90, 90, 35);
  pop();

  // eyes
  push();
  translate(characterX, characterY - 15);
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
  translate(characterX, characterY);
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

function environment() {
  background(131, 200, 240);
  push();
  noStroke();
  fill(8, 117, 35);
  ellipse(50, 400, 250, 220);
  ellipse(200, 410, 200, 200);
  ellipse(300, 480, 150, 150);
  ellipse(420, 480, 250, 150);
  ellipse(620, 450, 250, 200);
  ellipse(750, 460, 150, 175);

  fill(5, 71, 42);
  ellipse(220, 560, 200, 200);
  ellipse(640, 570, 200, 200);
  ellipse(80, 520, 250, 250);
  ellipse(480, 570, 250, 200);
  ellipse(350, 560, 200, 200);
  ellipse(750, 590, 200, 300);
  pop();
}

function clouds(cloudsX, cloudsY) {
  fill(255, 255, 255);
  noStroke();
  push();
  translate(cloudsX, cloudsY);
  rect(0, -100, 180, 80, 50);
  ellipse(35, -65, 80, 85);
  ellipse(90, -80, 100, 105);
  pop();
}

function leafRight(x, y) {
  strokeWeight(3);
  stroke(21, 155, 22);
  fill(100, 222, 80);

  push();
  translate(x + 155, y + 200);
  beginShape();
  vertex(0, 0);
  bezierVertex(45, -20, 125, 50, 100, 400);
  bezierVertex(80, 450, 125, -20, -10, 10);
  endShape();
  pop();

  push();
  translate(x, y + 200);
  beginShape();
  vertex(-70, 20);
  bezierVertex(-25, 40, 200, 80, 155, 0);
  bezierVertex(200, -80, -25, -40, -70, 20);
  endShape();

  beginShape();
  vertex(-70, 20);
  bezierVertex(-15, -15, 140, -30, 155, 0);
  endShape();
  pop();
}

function youWin() {
  background(131, 200, 240);
  push();
  fill(255);
  stroke(18, 116, 181);
  strokeWeight(5);
  rect(280, 320, 240, 80, 10);
  rect(330, 420, 140, 80, 10);
  fill(227, 244, 255);
  rect(150, 120, 500, 150, 10);

  noStroke();
  fill(18, 116, 181);
  textStyle(BOLD);
  textFont("Verdana");
  textAlign(CENTER, CENTER);
  textSize(24);
  text("PLAY AGAIN", 280, 320, 240, 80);
  text("HOME", 330, 420, 140, 80);
  textSize(44);
  text("YOU WON", 150, 120, 500, 150);

  pop();
}

function youLose() {
  background(255, 227, 228);
  push();
  fill(194, 29, 34);
  stroke(125, 5, 9);
  strokeWeight(5);
  rect(280, 320, 240, 80, 10);
  rect(330, 420, 140, 80, 10);
  rect(150, 120, 500, 150, 10);

  noStroke();
  fill(0);
  textStyle(BOLD);
  textFont("Verdana");
  textAlign(CENTER, CENTER);
  textSize(24);
  text("TRY AGAIN", 280, 320, 240, 80);
  text("HOME", 330, 420, 140, 80);
  textSize(44);
  text("GAME OVER", 150, 120, 500, 150);

  pop();
}

let cloudSpeed = 0.7;
let state = "start";

function draw() {
  if (state === "start") {
    startScreen();
    flower(x - 30, y - 25);
    flower(x + 520, y + 50);
    flower(x + 50, y + 200);

    push();
    translate(600, 120);
    scale(0.3);
    ladybug(0, 0);
    pop();
  } else if (state === "game") {
    environment();
    clouds(cloudsX, cloudsY);
    clouds(cloudsX + 400, cloudsY + 20);

    leafRight(350, 300);

    push();
    translate(characterX, characterY);
    scale(0.4);
    ladybug(0, 0, keyIsDown(32));
    pop();

    if (keyIsDown(32)) {
      characterY = characterY - 1.2;
      velocityY = velocityY - 0.5;
    }

    if (keyIsDown(37)) {
      characterX = characterX - 2;
    } else if (keyIsDown(39)) {
      characterX = characterX + 2;
    }

    // gravity
    characterY = characterY + velocityY;
    velocityY = velocityY + acceleration;

    // clouds moving, and bouncing
    cloudsX = cloudsX + 0.7;
    if (cloudsX > 800) {
      cloudsX = -600;
    }

    cloudsY = cloudsY + cloudSpeed / 4;
    if (cloudsY > 200 || cloudsY < 170) {
      cloudSpeed = cloudSpeed * -1;
    }

    /* 
      win, if you land on the leaf with a certain speed 
      lose, if you go too fast, or miss the leaf
      resetting values for the game, to be able to play again
    */
    if (
      velocityY < 5 &&
      characterX >= 300 &&
      characterX <= 500 &&
      characterY >= 480 &&
      characterY <= 540
    ) {
      state = "youWin";
      velocityY = 0.2;
      characterY = 200;
    } else if (
      (velocityY > 5 &&
        characterX >= 300 &&
        characterX <= 500 &&
        characterY >= 480 &&
        characterY <= 540) ||
      characterY >= 600
    ) {
      state = "youLose";
      velocityY = 0.2;
      characterY = 200;
    }
  } else if (state === "rules") {
    rulesScreen();
    flower(650, 170);
  } else if (state === "youWin") {
    youWin();
  } else if (state === "youLose") {
    youLose();
  }
}

function mouseClicked() {
  if (
    state === "start" &&
    mouseX >= 300 &&
    mouseX <= 500 &&
    mouseY >= 250 &&
    mouseY <= 350
  ) {
    state = "game";
  } else if (
    state === "start" &&
    mouseX >= 330 &&
    mouseX <= 470 &&
    mouseY >= 480 &&
    mouseY <= 530
  ) {
    state = "rules";
  } else if (
    state === "rules" &&
    mouseX >= 330 &&
    mouseX <= 470 &&
    mouseY >= 480 &&
    mouseY <= 530
  ) {
    state = "start";
  } else if (
    (state === "youWin" &&
      mouseX >= 280 &&
      mouseX <= 520 &&
      mouseY >= 320 &&
      mouseY <= 400) ||
    (state === "youLose" &&
      mouseX >= 280 &&
      mouseX <= 520 &&
      mouseY >= 320 &&
      mouseY <= 400)
  ) {
    state = "game";
  } else if (
    (state === "youWin" &&
      mouseX >= 330 &&
      mouseX <= 470 &&
      mouseY >= 420 &&
      mouseY <= 500) ||
    (state === "youLose" &&
      mouseX >= 330 &&
      mouseX <= 470 &&
      mouseY >= 420 &&
      mouseY <= 500)
  ) {
    state = "start";
  }
}

var colors = [];

function setup() {
  var canvas = createCanvas(3000, 400);
  canvas.parent('hero-overlay');
  noFill();
  addColors();
  smooth(8);
  background(20);
	noLoop();
}

function addColors() {
  var c;
  // c = color(255, 204, 0, 120);
  c = color(74, 211, 186, 40);
  colors[0] = c;
  // c = color(0,161, 211, 120);
  c = color(92, 227, 175);
  colors[1] = c;
  // c = color(209, 49, 0, 120);
  c = color(74, 211, 186, 90);
  colors[2] = c;
}

function getRandomColor() {
  var i = Math.floor(random(colors.length));
  var c = colors[i];
  return c;
}

function draw() {
  makeRibbons();
}

function makeRibbons() {

  for (var i=0; i < random(3) + 2; i++) {
  
    var strokeW = random(3) + 2;
    var amount = 500;
    var frequency = random(1.0) / 15;
    var offset = random(200) + 5;
    var col = getRandomColor();
    
    strokeWeight(strokeW);
    stroke(col,180);
    var startY = height/2;
    beginShape();
      vertex(0, startY);
       for (var c=1; c < amount; c++) {
         var sinoffset = sin(frequency*c);
         var sinX = c*(width/amount);
         var sinY = startY + (sinoffset*offset);
         bezierVertex(sinX,sinY,sinX,sinY-1,sinX,sinY);
       }
    endShape();
  }

}

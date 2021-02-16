var inc = 0.01;
var start = 0;

function setup() {
    createCanvas(400, 400);
}
  
function draw() {
    background(51);
    stroke(255);
    noFill();
    beginShape();
    var xoffset = start;
    for(var x = 0; x < width; x++) {
        stroke(255);
        var n = map(noise(xoffset), 0, 1, 0, height);
        var s = map(sin(xoffset), -1, 1, -50, 50);
        var y = n + s;
        vertex(x, y);
        xoffset += inc;
    }
    endShape();

    start += inc;
    
    //noLoop();
}
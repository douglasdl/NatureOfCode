
function setup() {
    createCanvas(400, 400);
}
  
function draw() {
    background(51);
    stroke(255);
    noFill();
    beginShape();
    for(var x = 0; x < width; x++) {
        stroke(255);
        vertex(x, random(height));
    }
    endShape();
    
    //noLoop();
}
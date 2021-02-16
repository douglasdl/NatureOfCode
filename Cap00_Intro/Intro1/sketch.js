var xoffset = 0;

function setup() {
    createCanvas(400, 400);
}
  
function draw() {
    background(51);
    var movement = "Perlin Noise";
    
    if(movement == "Perlin Noise") {
        var x = map(noise(xoffset), 0, 1, 0, width);
        xoffset += 0.01;
    } else {
        var x = random(width);
    }
    
    ellipse(x, 200, 24, 24);
}
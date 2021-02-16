var xoffset1 = 0;
var xoffset2 = 1000;


function setup() {
    createCanvas(400, 400);
}
  
function draw() {
    background(51);
    var movement = "Perlin Noise";
    
    if(movement == "Perlin Noise") {
        var x = map(noise(xoffset1), 0, 1, 0, width);
        var y = map(noise(xoffset2), 0, 1, 0, height);
        xoffset1 += 0.02;
        xoffset2 += 0.02;
    } else {
        var x = random(width);
    }
    
    ellipse(x, y, 24, 24);
}
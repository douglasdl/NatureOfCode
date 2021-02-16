var inc = 0.02;


function setup() {
    createCanvas(200, 200);
    pixelDensity(1);
}
  
function draw() {
    var xoffset = 0;
    
    loadPixels();
    for(var x = 0; x < width; x++) {
      var yoffset = 0;
      for(var y = 0; y < height; y++) {
        var index = (x + y * width) * 4;
        var r = noise(xoffset, yoffset) * 255;
        pixels[index + 0] = r;   // Red
        pixels[index + 1] = r;   // Green
        pixels[index + 2] = r;   // Blue
        pixels[index + 3] = 255; // Alpha
        yoffset += inc;
      }
      xoffset += inc;
    }
    updatePixels();
    //noLoop();
}
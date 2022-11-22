const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
    
function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // function invocations goes here:
    //drawCircle(100, 100, 50, 'red', 'blue');
    drawShape(100, 100, 150, '#db5461', '#102e4a');
    drawShape(200, 200, 75, '#102e4a', '#8093f1');
    drawShape(100, 325, 100, '#8093f1', '#7fb285');
    drawShape(250, 375, 125, '#7fb285', '#0bc9cd');
    drawShape(450, 200, 250, '#0bc9cd', '#db5461');


    drawGrid(canvasWidth, canvasHeight);
}


// function definition goes here:
function drawShape(x, y, size, color1, color2) {
    //let x = canvasWidth / 2;
    //let y = canvasHeight / 2;
    //let size = 50;
    
    fill (color1);
    stroke ('black');
    circle (x, y, size);

    fill (color2);
    circle (x, y, size / 2);


}
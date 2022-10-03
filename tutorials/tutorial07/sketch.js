function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // Exercise 1:
    drawCircle(100, 100, 100, 'hotpink');
    drawCircle(200, 100, 50, 'navy');
    drawCircle(300, 100, 100, 'teal');
    drawCircle(400, 100, 50, 'hotpink');

    // Exercise 2: 
    drawOval(100, 200, 100, 60, 'red');
    drawOval(200, 200, 60, 100, 'blue');
    drawOval(300, 200, 100, 60, 'red');
    drawOval(400, 200, 60, 100, 'blue');
    // Exercise 3:
    drawBullseye(100, 300, 100, 'orange', 'purple');
    drawBullseye(200, 300, 50, 'red', 'blue');
    drawBullseye(300, 300, 100, 'green', 'yellow');
    drawBullseye(400, 300, 50, 'pink', 'brown');

    // Exercise 4:
    drawFace(100, 400, 70);
    drawFace(200, 400, 100);
    drawFace(300, 400, 70);
    drawFace(400, 400, 100);

    drawGrid(canvasWidth, canvasHeight);
}


// modify this function so that it accepts and honors
// the following parameters: centerX, centerY, size, and fillColor
function drawCircle(centerX, centerY, size, fillColor) {
    fill(fillColor);
    circle(centerX, centerY, size);
}

// modify this function so that it accepts and honors
// the following parameters: centerX, centerY, sizeX, sizeY, and fillColor
function drawOval(centerX, centerY, sizeX, sizeY, fillColor) {
    fill(fillColor);
    ellipse(centerX, centerY, sizeX, sizeY);
}


// modify this function so that it accepts and honors
// the following 3 parameters: centerX, centerY, and size
function drawBullseye(centerX, centerY, size, color1, color2) {
    fill(color1);
    circle(centerX, centerY, size);
    fill(color2);
    circle(centerX, centerY, size * .75);  //convert to math fucntion
    fill(color1);
    circle(centerX, centerY, size * .5);
    fill(color2);
    circle(centerX, centerY, size * .25);
}

// modify this function so that it accepts and honors
// the following 3 parameters: centerX, centerY, and size
function drawFace(centerX, centerY, size) {
    fill('yellow');
    strokeWeight (size / 40)
    circle(centerX, centerY, size);
    fill('red');
    strokeWeight (size / 20)
    let eyeWidth = size / 7;
    let eyeDistance = size / 6;

    let eyeY = centerY - eyeWidth;
    let eye1X = centerX - eyeDistance;
    let eye2X = centerX + eyeDistance;

    let mouthSize = size / 2;
    let mouthY = centerY + size / 7;
    let mouthLeftX = centerX - mouthSize / 2.5;
    let mouthRightX = centerX + mouthSize / 2.5;
    
    circle(eye1X, eyeY, eyeWidth);  //left eye
    circle(eye2X, eyeY, eyeWidth);  //right eye

    strokeWeight (size / 20);
    line (mouthLeftX, mouthY, mouthRightX, mouthY)
    strokeWeight (size / 30);

    fill('red')
    curve(
        mouthLeftX, mouthY - size,       // control point
        mouthLeftX, mouthY, 
        mouthRightX, mouthY,
        mouthRightX, mouthY - size      // control point
    );

    

}

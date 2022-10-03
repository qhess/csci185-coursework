function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // Once you've created your drawCreature function, 
    // invoke drawCreature 5 times with the following arguments
    // (feel free to change the sizes, positions, and colors):
    
    drawCreature(100, 100, 100, '#5e6976', '#1b324d');
    drawCreature(487, 110, 101, '#bfdc65', '#abb880');
    drawCreature(454, 423, 141, '#aebb83', '#227876');
    drawCreature(333, 227, 200, '#94ba77', '#3f5364');
    drawCreature(117, 314, 91, '#648d8e', '#afc272');
    
    drawGrid(canvasWidth, canvasHeight);
}

// define your drawCreature function here:

function drawCreature(centerX, centerY, size, color1, color2) {
    fill (color1);
    stroke('black');
    circle(centerX, centerY, size, color1);
   
    let eyeWidth = size / 3.5;
    let eyeDistance = size / 2.8;

    let eyeY = centerY - eyeWidth / 2;
    let eyeX1 = centerX - eyeDistance / 2;
    let eyeX2 = centerX + eyeDistance / 2;

    fill ('black');
    circle(eyeX1, eyeY, eyeWidth);
    circle(eyeX2, eyeY, eyeWidth);
    fill (color2);
    circle(eyeX1 - size / 70, eyeY, eyeWidth / 1.7);
    circle(eyeX2 + size / 70, eyeY + size / 70, eyeWidth / 1.7);
    fill ('red');
    circle(eyeX1 - size / 70, eyeY, eyeWidth / 2.5);
    circle(eyeX2 + size / 70, eyeY + size / 70, eyeWidth / 2.5);
    fill (color2);
    circle(eyeX1 - size / 70, eyeY, eyeWidth / 6);
    circle(eyeX2 + size / 70, eyeY + size / 70, eyeWidth / 6);

    let noseSizeX = size / 20
    let noseSizeY = size / 20
    
    fill('black');
    beginShape();
    vertex(centerX, centerY - size / 15);
    vertex(centerX - noseSizeX, centerY + noseSizeY);
    vertex(centerX + noseSizeX, centerY + noseSizeY);
    endShape();

    let mouthSize = size / 1.2;
    let mouthY = centerY + size / 8;
    let mouthLeftX = centerX - mouthSize / 2.5;
    let mouthRightX = centerX + mouthSize / 2.5;

    fill('darkred')
    curve(
        mouthLeftX, mouthY - size,       
        mouthLeftX, mouthY, 
        mouthRightX, mouthY,
        mouthRightX, mouthY - size     
    );




}

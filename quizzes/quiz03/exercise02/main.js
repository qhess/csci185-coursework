const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // function invocations goes here:
    drawMonster(100, 100, 150, '#0bc9cd', false);
    drawMonster(300, 200, 75, '#8093f1', true);
    drawMonster(100, 325, 100, '#8093f1', false);
    drawMonster(250, 375, 125, '#7fb285', true);
    drawMonster(550, 200, 250, '#7fb285', false);

    drawGrid(canvasWidth, canvasHeight);
}

function drawMonster( x, y, size, color, isSuprised) {
    strokeWeight(1);
    fill(color);
    stroke('black');
    square(x-size/2, y-size/2 ,size);
    fill('black');
    if (isSuprised == false) {
        square( x-size/8, y+size/8, size/4);
    } else {
        rect( x-size/4, y+size/8, size/2, size/5);
    }
    let eye1WhitesX = x-size/4;
    let eyeWhitesY = y-size/4;
    let eye2WhitesX = x+size/12;
    let eyeSize = size/6;
    fill('white');
    square(eye1WhitesX, eyeWhitesY, eyeSize);
    square(eye2WhitesX, eyeWhitesY, eyeSize);
    fill('black');
    square(eye1WhitesX+eyeSize/4, eyeWhitesY+size/12, eyeSize/2);
    square(eye2WhitesX+eyeSize/4, eyeWhitesY+size/12, eyeSize/2);
    
}
// function definition goes here:

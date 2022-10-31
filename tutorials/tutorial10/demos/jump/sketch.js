const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

let x = 150;
let y = canvasHeight / 2 - 50;
let doJump = false;
let counter = 0;
let initialY = y;


const c1 = {
    x: canvasWidth - 200,
    y: canvasHeight / 2 - 20,
    width: 200,
    speed: -9,
    color: 'hotpink'
};

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    drawCreature(x, y, 75, '#ddcd9d', 'yellow');
    displayMessage();
}


function draw() {
    clear();
    
    if (doJump) {
        // animate for one Math.sin cycle, then 
        // turn doJump variable to false
        const jumpHeight = -12;
        const jumpSpeed = 8;
        y += jumpHeight * Math.sin(counter / jumpSpeed); 
        counter++;
        if (y > initialY) {
            doJump = false;
        }
    }
    c1.x += c1.speed;

    drawCar(c1.x, c1.y, c1.width, 'hotpink');

    drawCreature(x, y, 75, '#ddcd9d', 'yellow');

    // message:
    displayMessage();

}


function jump(ev) {
    console.log(ev.code);
    if (ev.code == 'Space') {
        doJump = true;
    }
    
    // message
   displayMessage();
}

function displayMessage() {
    fill('black');
     textAlign(CENTER);
     textSize(16);
     text("Press the spacebar to jump.", canvasWidth/2, canvasHeight/2);
}

// Add event listener on keydown
document.addEventListener('keydown', jump);

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
    
    fill('darkred');
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

function drawCar(x, y, size, fillColor, wheelColor='black') {
    strokeWeight(0);
    
    // body
    fill(fillColor);
    rect(x - size/4, y - (size/5 + size/7), size / 2, size/7); // top
    rect(x - size/2, y - size/5, size, size/5); // bottom

    // wheels:
    fill(wheelColor);
    circle(x - size / 4, y, size / 6);
    circle(x + size / 4, y, size / 6);
}
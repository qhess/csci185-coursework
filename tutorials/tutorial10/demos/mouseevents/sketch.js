const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

let currentX = 500;
let currentY = 300;

let isFollowing = false;

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // // message
    // fill('black');
    // textAlign(CENTER);
    // textSize(16);
    // text("Click or drag your mouse.", canvasWidth/2, canvasHeight/2);
    // noFill();

    //drawCreature(currentX, currentY, 50)
    drawCreature(currentX, currentY, 100, '#ddcd9d', 'yellow');
}


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

    


function mouseClicked() {
    if (isFollowing == false) {
        isFollowing = true;
    } else {
        isFollowing = false;


    }

}

// function mouseDragged() {
//     circle(mouseX, mouseY, Math.random()* 50 + 50);
// }

function mouseMoved() {
    console.log(mouseX, mouseY);
    if (isFollowing == true) {
        clear();
        drawCreature(mouseX, mouseY, 100, '#ddcd9d', 'yellow');
    }
}

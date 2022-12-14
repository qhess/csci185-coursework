

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

const circleData = [
    {x: 500, y: 50, d: 40, alive: true},
    {x: 300, y: 150, d: 50, alive: true},
    {x: 400, y: 400, d: 25, alive: true},
    {x: 40, y: 520, d: 80, alive: true},
    {x: 140, y: 120, d: 50, alive: true},
    {x: 350, y: 350, d: 70, alive: true}
];

let width = 50;
let fillColor = 'white';
let x = canvasWidth -100;
let y = canvasHeight / 2 - 50;

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    let rando = Math.random() * 100;
    console.log(rando);
    
    rando = Math.random() * 490 + 10;
    console.log(rando);

    
    fill('red');
    noFill();
    drawCreature(x, y, width, 'red', 'blue');

    displayMessage();
}

function draw() {
    
    
    clear();
    
    let i = 0;
    while (i < 300)  {

        strokeWeight(0);
        fill('white');
        const star = {
            x: randomIntFromInterval(0, canvasWidth),
            y: randomIntFromInterval(0, canvasHeight),
            width: randomIntFromInterval(.5, 3)

        };
        i++;
        circle(star.x, star.y, star.width);
    }
    
    strokeWeight(0);
    fill('white');
    
    noFill();
    
    
    drawLandscapeObject (canvasWidth / 1.7, canvasHeight / 3, 100, '#BCB573', '#958D46');
    drawLandscapeObject (canvasWidth / 5, canvasHeight / 2, 200, '#CC7B63', '#AD6B2A');
    drawLandscapeObject (canvasWidth - 100, canvasHeight / 1.2, 270, '#55A23C', '#4CF016');
    
    
    drawCreature(x, y, width, '#8E9F5B', '#F0DF21');

    for (let i = 0; i < circleData.length; i++) {

        let p = circleData [i];

        let intersected = checkIntersection (p, x, y, width) && p.alive;
        if (intersected) {
            p.alive = false
            width += p.d / 2
        }
         if (p.alive) {
        drawCreature (p.x, p.y, p.d, 'grey', 'violet');
        p.x += 1; 
         }
    }
    
    strokeWeight (0);
    displayMessage();
}

function moveController(ev) {
    console.log(ev.code);
    if (ev.code == 'ArrowUp') {
        console.log('up arrow!');
        y -= 4;
    } else if (ev.code == 'ArrowDown') {
        console.log('down arrow!');
        y += 4;
    } else if (ev.code == 'ArrowLeft') {
        console.log('left arrow!');
        x -= 4;
    } else if (ev.code == 'ArrowRight') {
        console.log('right arrow!');
        x += 4;
    } else if (ev.code == 'Space') {
        width += 2;
    } else if (ev.code == 'Escape') {
        width -= 2;
    }

    
}

function displayMessage() {
    strokeWeight (0);
    fill('red');
     textAlign(CENTER);
     textSize(16);
     text("Use the arrow keys to move, eat all of your friends!", canvasWidth/2, canvasHeight/2);
}


// Add event listener on keydown
document.addEventListener('keydown', moveController);

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function drawStars() {
    strokeWeight(0);
    fill('white');
    for (let i = 0; i < 1000; i++) {
        const x = Math.random() * canvasWidth;
        const y = Math.random() * canvasHeight;
        const width = Math.random() * 2 + 0.5;
        circle(x, y, width);
    }
}

function drawLandscapeObject(centerX, centerY, size, color1, color2) {
    strokeWeight (.5);
    
    let ringWidth = size / .5;
    let ringHeight = size / 2;

    fill(color2);
    ellipse(centerX, centerY, ringWidth, ringHeight);
    
    fill (color1);
    stroke ('black');
    circle (centerX, centerY, size, color);

    

}

function drawCreature(centerX, centerY, size, color1, color2) {
    strokeWeight (.5);
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
    strokeWeight (0);
}

function checkIntersection(victim, x, y, size) {
    const distance = dist(victim.x, victim.y, x, y);
    if (distance <= (victim.d/2 + size / 2)) {
        return true;
    } else {
        return false;
    }
}
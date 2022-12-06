let screennum = 1;
let scoreCount = 0;
let scoreCount2 = 0;
let button;

let arrows = [
    '⬅️', '➡️', '⬆️', '⬇️'
];

let arrow = arrows[3];

var diameter = 100;

let changeInterval = 100;
let counter = 0;

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

const circleData = [
    { x: 500, y: 50, d: 40, alive: true },
    { x: 300, y: 150, d: 50, alive: true },
    { x: 400, y: 400, d: 25, alive: true },
    { x: 40, y: 520, d: 80, alive: true },
    { x: 140, y: 120, d: 50, alive: true },
    { x: 350, y: 350, d: 70, alive: true },
    { x: -10, y: 200, d: 37, alive: true },
    { x: -60, y: 325, d: 87, alive: true },
    { x: -110, y: 564, d: 72, alive: true },
    { x: -160, y: 323, d: 91, alive: true },
    { x: -210, y: 158, d: 26, alive: true },
    { x: -260, y: 303, d: 61, alive: true },
    { x: -310, y: 121, d: 24, alive: true },
    { x: -360, y: 78, d: 69, alive: true },
    { x: -410, y: 254, d: 42, alive: true },
    { x: -460, y: 329, d: 28, alive: true },
    { x: -510, y: 377, d: 52, alive: true },
    { x: -560, y: 506, d: 80, alive: true },
    { x: -610, y: 430, d: 22, alive: true },
    { x: -660, y: 180, d: 57, alive: true }
];

const offspringData = [
    { x: canvasWidth / 2, y: canvasHeight / 2 - 50, d: diameter/2},
    { x: canvasWidth / 2 - 50, y: canvasHeight / 2 - 15, d: diameter/2},
    { x: canvasWidth / 2 + 50, y: canvasHeight / 2 - 15, d: diameter/2},
    { x: canvasWidth / 2 - 50, y: canvasHeight / 2 + 30, d: diameter/2},
    { x: canvasWidth / 2 + 50, y: canvasHeight / 2 + 30, d: diameter/2},
    { x: canvasWidth / 2, y: canvasHeight / 2 + 70, d: diameter/2}
];

let width = 50;
let fillColor = 'white';
let x = canvasWidth - 100;
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

    bg = loadImage('images/16279.jpg');
}

function draw() {

    clear();
    if (screennum == 1) {
        scene1();
    } else if (screennum == 2) {
        scene2();
    } else if (screennum == 3) {
        scene3();
    } else if (screennum == 4) {
        scene4();
    }
}

function scene1() {
    clear();
    background(bg);
    strokeWeight(0);
    fill('red');
    textAlign(CENTER);
    textSize(16);
    text("This is Glagnar. He is HUNGRY!!", canvasWidth / 2, canvasHeight / 2 + 100);
    text("He also needs to spread his genes throughout space!", canvasWidth / 2, canvasHeight / 2 + 120);
    text("Help him eat his fellow weirdos and grow stronger.", canvasWidth / 2, canvasHeight / 2 + 140);

    button = createButton('click me');
    button.position(50, 35);
    button.mousePressed(nextLevel);

    drawCreature(canvasWidth / 2, canvasHeight / 2 - 100, 50, '#8E9F5B', '#F0DF21');
}

function nextLevel() {
    if (screennum == 1) {
        screennum = 2;
    } else if (screennum == 2) {
        screennum = 3;
        width = canvasHeight / 3;
    } else if (screennum == 3) {
        screennum = 4;
    }
}

function scene2() {
    clear();
    let i = 0;

    while (i < 300) {

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


    drawLandscapeObject(canvasWidth / 1.7, canvasHeight / 3, 100, '#BCB573', '#958D46');
    drawLandscapeObject(canvasWidth / 5, canvasHeight / 2, 200, '#CC7B63', '#AD6B2A');
    drawLandscapeObject(canvasWidth - 100, canvasHeight / 1.2, 270, '#55A23C', '#4CF016');


    drawCreature(x, y, width, '#8E9F5B', '#F0DF21');

    for (let i = 0; i < circleData.length; i++) {

        let p = circleData[i];

        let intersected = checkIntersection(p, x, y, width) && p.alive;
        if (intersected) {
            p.alive = false
            width += p.d / 4
            scoreCount++;
        }
        if (p.alive) {
            drawCreature(p.x, p.y, p.d, 'grey', 'violet');
            p.x += .8;
        }
    }



    strokeWeight(0);
    displayMessage();

    textSize(32);
    fill('red');
    text(scoreCount, canvasWidth - 100, 50);

    if (scoreCount == 20) {
        nextLevel();
    }
}

function scene3() {
    if (counter % changeInterval == 0) {
        setArrow();

    }
    background(bg);
    drawCreature(canvasWidth / 2, canvasHeight / 2, diameter, '#8E9F5B', '#F0DF21');
    //<a href="https://www.freepik.com/free-vector/dark-cave-landscape_2722247.htm#query=cartoon%20cave&position=27&from_view=keyword">Image by brgfx</a> on Freepik
    textSize(32);
    fill('red');
    text(scoreCount2, canvasWidth - 100, 50);

    
    textSize(75);
    text(arrow, canvasWidth / 1.25, canvasHeight / 2)

    if (scoreCount2 == 30) {
        nextLevel();
    }
    textSize(20);
    text("Press the matching arrow keys to guide Glagnar's young into the world!", canvasWidth/2, 40);
    ++counter;
}

function scene4() {
    background(bg);
    for (let i = 0; i < offspringData.length; i++) {

        let p = offspringData[i];
            drawCreature(p.x, p.y, p.d, '#8E9F5B', '#F0DF21');
            p.x += 5;
            
        
    }
    fill ('yellow');
    textSize (60);
    text("Victory!",canvasWidth/2, canvasHeight/2);
    textSize (20);
    text("You have successfully fed Glagnar", canvasWidth/2, canvasHeight/2+50);
    text("and helped him birth his offspring!", canvasWidth/2, canvasHeight/2+80);
}

function moveController(ev) {
    console.log(ev.code);

    if (screennum == 2) {
        moveControllerScene2(ev);
    } else if (screennum == 3) {
        moveControllerScene3(ev);
    }


}

function moveControllerScene2(ev) {
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

    }
}
function moveControllerScene3(ev) {
    if (ev.code == 'ArrowUp') {
        if (arrow == '⬆️') {
            scoreCount2++;
            diameter += 15;
            
        } else {
            scoreCount2--;
            diameter -= 15;
        }
        setArrow();
    } else if (ev.code == 'ArrowDown') {
        if (arrow == '⬇️') {
            scoreCount2++;
            diameter += 15;
            
        } else {
            scoreCount2--;
            diameter -= 15;
        }
        setArrow();
    } else if (ev.code == 'ArrowLeft') {
        if (arrow == '⬅️') {
            scoreCount2++;
            diameter += 15;
            
        } else {
            scoreCount2--;
            diameter -= 15;
        }
        setArrow();
    } else if (ev.code == 'ArrowRight') {
        if (arrow == '➡️') {
            scoreCount2++;
            diameter += 15;
           
        } else {
            scoreCount2--;
            diameter -= 15;
        }
        setArrow();
    }
}
// '⬅️', '➡️', '⬆️', '⬇️'
function setArrow () {
    arrow = arrows[Math.floor(Math.random() * 4)]
    counter = 1;
}

function displayMessage() {
    strokeWeight(0);
    fill('red');
    textAlign(CENTER);
    textSize(16);
    text("Use the arrow keys to move, eat all of your friends!", canvasWidth / 2, 50);
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
    strokeWeight(.5);

    let ringWidth = size / .5;
    let ringHeight = size / 2;

    fill(color2);
    ellipse(centerX, centerY, ringWidth, ringHeight);

    fill(color1);
    stroke('black');
    circle(centerX, centerY, size, color);



}

function drawCreature(centerX, centerY, size, color1, color2) {
    strokeWeight(.5);
    fill(color1);
    stroke('black');
    circle(centerX, centerY, size, color1);

    let eyeWidth = size / 3.5;
    let eyeDistance = size / 2.8;

    let eyeY = centerY - eyeWidth / 2;
    let eyeX1 = centerX - eyeDistance / 2;
    let eyeX2 = centerX + eyeDistance / 2;

    fill('black');
    circle(eyeX1, eyeY, eyeWidth);
    circle(eyeX2, eyeY, eyeWidth);
    fill(color2);
    circle(eyeX1 - size / 70, eyeY, eyeWidth / 1.7);
    circle(eyeX2 + size / 70, eyeY + size / 70, eyeWidth / 1.7);
    fill('red');
    circle(eyeX1 - size / 70, eyeY, eyeWidth / 2.5);
    circle(eyeX2 + size / 70, eyeY + size / 70, eyeWidth / 2.5);
    fill(color2);
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
    strokeWeight(0);
}

function checkIntersection(victim, x, y, size) {
    const distance = dist(victim.x, victim.y, x, y);
    if (distance <= (victim.d / 2 + size / 2)) {
        return true;
    } else {
        return false;
    }
}
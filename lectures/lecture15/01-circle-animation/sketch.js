// const circleData = [
//     {x: 500, y: 50, d: 100, speedX: 3, speedY: 3},
//     {x: 300, y: 150, d: 50, speedX: 2, speedY: 0},
//     {x: 400, y: 400, d: 25, speedX: 0, speedY: 1},
//     {x: 40, y: 520, d: 80, speedX: 2, speedY: 0},
//     {x: 140, y: 120, d: 150, speedX: 0, speedY: -0.5},
//     {x: 350, y: 350, d: 70, speedX: 1, speedY: 1}
// ];

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

// set up the canvas:
function setup() {
    createCanvas(canvasWidth, canvasHeight);
    let i = 0;
    while(i < 100) {
        const ball = {
            x: randomIntFromInterval(450,500),
            y: randomIntFromInterval(0,canvasHeight),
            d: randomIntFromInterval(10,30),
            speedX: 3,
            speedY: 2
        };
        i++;
        circle(ball.x, ball.y, ball.d);
    }
}

// initialize variables outside of the function:
// let x = 0;
// let y = 0;
// let d = 50;
// let speedX = 3;
// let speedY = 2;

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const ball1 = {
    x: randomIntFromInterval(300,500),
    y: 0,
    d: randomIntFromInterval(100,200),
    speedX: 3,
    speedY: 2

}



// animate the circle by changing the x and y position
// every time the animation loop invokes the draw() function:
// function draw() {
//     clear();
//     fill('hotpink');
//     circle(ball1.x, ball1.y, ball1.d);
//     ball1.x += ball1.speedX;
//     ball1.y += ball1.speedY;
//     // ball1.d += ball1.speedX/4;
//     drawGrid(canvasWidth, canvasHeight);
// }
const palette = ['black','darkred','purple'];
function draw() {

    let i = 0;
    clear ();
    frameRate(3);
    while(i < 100) {
        const color = palette[randomIntFromInterval(0, 2)];
        fill (color);
        const ball = {
            x: randomIntFromInterval(0,canvasWidth),
            y: randomIntFromInterval(0,canvasHeight),
            d: randomIntFromInterval(10,60),
            speedX: 3,
            speedY: 2
        };
        i++;
        circle(ball.x, ball.y, ball.d);
    }
}
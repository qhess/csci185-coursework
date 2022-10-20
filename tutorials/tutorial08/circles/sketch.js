function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    noFill();
    let counter = 0;
    while (counter < 60) {
        if (counter % 2 == 0) {
            fill ('hotpink');
        } else if (counter % 3 == 0) {
            fill ('black');
        } else {
            fill ('yellow');
        }
        circle(400, 0 + counter*10, counter + counter);
        counter += 1;
    }
    //circle(100, 200, 50);
    //circle(100, 250, 50);
   // circle(100, 300, 50);
   // circle(100, 350, 50);
   // circle(100, 400, 50);

    drawGrid(canvasWidth, canvasHeight);
}

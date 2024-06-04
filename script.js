
function setup() {

    createCanvas(canvasWidth, canvasHeight);
    background("rgb(222, 133, 18)");
    patrat.initializare();
    humanbt = createButton("Jucator vs Jucator");
    computerbt = createButton("Jucator vs Calculator");
    humanbt.position(canvasWidth / 2 - 50, canvasHeight / 3);
    computerbt.position(canvasWidth / 2 - 60, canvasHeight / 1.5);

    humanbt.style('background-color', '#d3b7a1');
    humanbt.style('color', '#4a4846');
    humanbt.style('padding', '10px 20px');
    humanbt.style('border', 'none');
    humanbt.style('font-size', '16px');
    humanbt.style('font-family', "'Courier New', Courier, monospace");
    humanbt.style('border-radius', '5px');
    humanbt.style('box-shadow', '2px 2px 5px rgba(0, 0, 0, 0.2)');

    computerbt.style('background-color', '#d3b7a1');
    computerbt.style('color', '#4a4846');
    computerbt.style('padding', '10px 20px');
    computerbt.style('border', 'none');
    computerbt.style('font-size', '16px');
    computerbt.style('font-family', "'Courier New', Courier, monospace");
    computerbt.style('border-radius', '5px');
    computerbt.style('box-shadow', '2px 2px 5px rgba(0, 0, 0, 0.2)');

    humanbt.mousePressed(human);
    computerbt.mousePressed(computer);
}
function mouseClicked() {
    patrat.clicked();
}


function draw() {
    background("rgb(222, 133, 18)");
    patrat.winner();
    if (humanOrComputer == "null")
        fill("black");
    if (win == "" && humanOrComputer != "null")
        patrat.afisare(tableWidthSide, tableHeightSide);
    else text(win, canvasWidth / 2, canvasHeight / 2);
    textSize(50);

    fill("rgb(222, 133, 18)");
    textSize(32);
    textAlign(CENTER, CENTER);
    text(player1, 200, 150);

    fill("rgb(222, 133, 18)");
    textSize(32);
    textAlign(CENTER, CENTER);
    text(player2, 1100, 150);
}






function setup() {

    createCanvas(canvasWidth, canvasHeight);
    background("rgb(142, 109, 87)");
    patrat.initializare();
    humanbt = createButton("Jucator vs Jucator");
    computerbt = createButton("Jucator vs Calculator");
    humanbt.position(canvasWidth / 2 - 50, canvasHeight / 3);
    computerbt.position(canvasWidth / 2 - 60, canvasHeight / 1.5);
    humanbt.mousePressed(human);
    computerbt.mousePressed(computer);
}
function mouseClicked() {
    patrat.clicked();
}


function draw() {
    background("brown");
    patrat.winner();
    if (humanOrComputer == "null")
        fill("black");
    if (win == "" && humanOrComputer != "null")
        patrat.afisare(tableWidthSide, tableHeightSide);
    else text(win, canvasWidth / 2, canvasHeight / 2);
    textSize(50);

    fill("rgb(240, 168, 104)");
    textSize(32);
    textAlign(CENTER, CENTER);
    text(player1, 200, 150);

    fill("rgb(240, 168, 104)");
    textSize(32);
    textAlign(CENTER, CENTER);
    text(player2, 1100, 150);
}





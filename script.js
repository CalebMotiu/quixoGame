function setup() {
    createCanvas(displayWidth, displayHeight);
    background("pink");
    initBoxes();
    buttonSetup();
}
function draw() {

    creatBoard()
    creatBoxes()
    textAlign(RIGHT, TOP);
    textSize(20);
    fill(0);
    text(currentPlayer + "'s turn", width - 10, 10);
    overBox(0)
    overBox(4)
    overBoxColumn(0)
    overBoxColumn(4)
    colorBox()
    switchTurn();
}
function mouseClicked() {
    selectedBox()
}
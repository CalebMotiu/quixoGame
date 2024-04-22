let boxes = [[], [], [], [], []]

const boxesRow = 1;
const boxesColumn = 1;
const boardSize = 5;
const startingPosition = 25;
const margin = 20;
const borderSize = 1;
const side = (board.side - (margin * 2) - (2 * borderSize * (boardSize - 1))) / boardSize;
const distanceBetweenBoxes = 2;

function initBoxes() {
  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      boxes[i][j] = {
        x: i * side + margin + borderSize * i,
        y: j * side + margin + borderSize * j,
        color: "rgb(163, 90, 42)",
        side: side,
        txt: "",
        border: "black"
      }
    }
  }
}
function overBox(j) {
  let overBox = false;
  for (let i = 0; i < boardSize; i++) {
    if (
      mouseX > boxes[i][j].x &&
      mouseX < boxes[i][j].x + boxes[i][j].side &&
      mouseY > boxes[i][j].y &&
      mouseY < boxes[i][j].y + boxes[i][j].side
    ) {
      overBox = true;
      { boxes[i][j].border = "rgb(255, 193, 152)" }
    }
    else {
      { boxes[i][j].border = "black" }
      overBox = false;
    }
  }

}

function overBoxColumn(i) {
  let overBox = false;
  for (let j = 1; j < boardSize - 1; j++) {
    if (
      mouseX > boxes[i][j].x &&
      mouseX < boxes[i][j].x + boxes[i][j].side &&
      mouseY > boxes[i][j].y &&
      mouseY < boxes[i][j].y + boxes[i][j].side
    ) {
      overBox = true;
      { boxes[i][j].border = "rgb(255, 193, 152)" }
    }
    else {
      { boxes[i][j].border = "black" }
      overBox = false;
    }
  }

}


function creatBoxes() {
  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      stroke(boxes[i][j].border)
      fill(boxes[i][j].color)
      rect(boxes[i][j].x, boxes[i][j].y, boxes[i][j].side, boxes[i][j].side)
    }
  }
}



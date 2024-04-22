let boxes = [[], [], [], [], []]

const boxesRow = 1;
const boxesColumn = 1;
const boardSize = 5;
const startingPosition = 25;
const side = 100;
const distanceBetweenBoxes = 2;

function initBoxes() {
  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      boxes[i][j] = {
        x: i * side + distanceBetweenBoxes + startingPosition,
        y: j * side + distanceBetweenBoxes + startingPosition,
        color: "rgb(163, 90, 42)",
        side: side,
        txt: "",
      }
    }
  }
}

function creatBoxes() {
  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      fill(boxes[i][j].color)
      rect(boxes[i][j].x, boxes[i][j].y, boxes[i][j].side, boxes[i][j].side)
    }
  }
}



function forOverBox(i, j) {
    if (
      mouseX > boxes[i][j].x &&
      mouseX < boxes[i][j].x + boxes[i][j].side &&
      mouseY > boxes[i][j].y &&
      mouseY < boxes[i][j].y + boxes[i][j].side
    ) {
        boxes[i][j].overBox = true
    }
    else {
        boxes[i][j].overBox = false
    }
  }
  
  
  function overBox(j) {
    for (let i = 0; i < boardSize; i++) {
      forOverBox(i, j)
    }
  
  }
  function overBoxColumn(i) {
    for (let j = 1; j < boardSize - 1; j++) {
      forOverBox(i, j)
    }
  
  }
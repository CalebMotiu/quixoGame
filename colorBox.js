function colorBox(){
    for (let i = 0; i < boardSize; i++) {
      for (let j = 0; j < boardSize; j++) {
        if (boxes[i][j].locked)
          boxes[i][j].border = "rgb(7, 255, 255)";
        else if (boxes[i][j].overBox)
          boxes[i][j].border = "rgb(255, 193, 152)"
        else
        boxes[i][j].border = "black"
      }
    }
  }
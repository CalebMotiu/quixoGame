function selectedBox(){
    for (let i = 0; i < boardSize; i++) {
      for (let j = 0; j < boardSize; j++) {
        if (boxes[i][j].overBox == true) {

            for (let k = 0; k < boardSize; k++) {
                for (let l = 0; l < boardSize; l++) {
                    if(boxes[l][k].locked)
                        boxes[l][k].locked = false;
                }
            }
            
            boxes[i][j].locked = true;
  
        }
        }
    }
  }
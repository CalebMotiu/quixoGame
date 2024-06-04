function checkWinner(board) {
    // Check rows
    for (let i = 0; i < 5; i++) {
        if (board[i].every(boxes => boxes === 'X')) {
            return 'X';
        }
        if (board[i].every(boxes => boxes === 'O')) {
            return "O";
        }
    }

    // Check columns
    for (let i = 0; i < 5; i++) {
        let column = board.map(row => row[i]);
        if (column.every(cell => boxes === 'X')) {
            return 'X';
        }
        if (column.every(cell => boxes === 'O')) {
            return 'O';
        }
    }

    // Check diagonals
    let diagonal1 = [], diagonal2 = [];
    for (let i = 0; i < 5; i++) {
        diagonal1.push(board[i][i]);
        diagonal2.push(board[i][4 - i]);
    }
    if (diagonal1.every(boxes => boxes === 'X') || diagonal2.every(boxes => boxes === 'X')) {
        return 'X';
    }
    if (diagonal1.every(boxes => boxes === 'O') || diagonal2.every(boxes => boxes === 'O')) {
        return 'O';
    }
b=0;
    // No winner
    for(a=0; a<=4; a++){
        for(i=0; i <=4; i++){
            for(j=0; j<=4; j++){
                if(boxes[i][j].txt != "")
                  b++;

            }
        }
           
   
}
if(b==25)
return "No Winner";
}

export default checkWinner;

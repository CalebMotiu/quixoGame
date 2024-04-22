let board = {
    x: 1,
    y: 1,
    side: 500,
    color: "rgb(142, 109, 87)"
}

function creatBoard() {
    fill(board.color)
    square(board.x, board.y, board.side)
}
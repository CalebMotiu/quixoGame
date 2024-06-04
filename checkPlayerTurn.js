let currentPlayerText = "x";

function switchTurn() {
    currentPlayerText = currentPlayerText === "x" ? "o" : "x";
    currentPlayer = currentPlayer === name1 ? name2 : name1;
}

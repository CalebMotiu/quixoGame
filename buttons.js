function createNameInput() {
    name1inp = createInput("Player O");
    name1inp.position(
        tableWidthSide + cubeSize * 1.5,
        tableHeightSide - cubeSize / 2
    );
    name1inp.size(cubeSize * 2, 10);
    name2inp = createInput("Player X");
    name2inp.position(
        tableWidthSide + cubeSize * 1.5,
        tableHeightSide + cubeSize * 5.5
    );
    name2inp.size(cubeSize * 2, 10);
    name1bt = createButton("Add name");
    name1bt.position(
        tableWidthSide + cubeSize * 1.5 + cubeSize - 8,
        tableHeightSide - cubeSize / 3
    );
    name2bt = createButton("Add name");
    name2bt.position(
        tableWidthSide + cubeSize * 1.5 + cubeSize - 8,
        tableHeightSide + cubeSize * 5.7
    );
    name1bt.mousePressed(name1);
    name2bt.mousePressed(name2);
    resetbt = createButton("RESET");
    resetbt.position(100, 25);
    resetbt.size(90, 55);
    resetbt.mousePressed(reset);
    resetbt.style("background-color", "rgb(240, 168, 104)");
}

function reset() {
    patrat.reset();
    player1 = "";
    player2 = "";
    name1bt.show();
    name1inp.show();
    name2bt.show();
    name2inp.show();
}

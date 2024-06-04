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
    name1inp.style('background-color', '#d3b7a1');
    name1inp.style('color', '#4a4846');
    name1inp.style('padding', '10px 20px');
    name1inp.style('border', 'none');
    name1inp.style('font-size', '16px');
    name1inp.style('font-family', "'Courier New', Courier, monospace");
    name1inp.style('border-radius', '5px');
    name1inp.style('box-shadow', '2px 2px 5px rgba(0, 0, 0, 0.2)');

    name2inp.style('background-color', '#d3b7a1');
    name2inp.style('color', '#4a4846');
    name2inp.style('padding', '10px 20px');
    name2inp.style('border', 'none');
    name2inp.style('font-size', '16px');
    name2inp.style('font-family', "'Courier New', Courier, monospace");
    name2inp.style('border-radius', '5px');
    name2inp.style('box-shadow', '2px 2px 5px rgba(0, 0, 0, 0.2)');
   
    name1bt.style('background-color', '#d3b7a1');
    name1bt.style('color', '#4a4846');
    name1bt.style('padding', '10px 20px');
    name1bt.style('border', 'none');
    name1bt.style('font-size', '16px');
    name1bt.style('font-family', "'Courier New', Courier, monospace");
    name1bt.style('border-radius', '5px');
    name1bt.style('box-shadow', '2px 2px 5px rgba(0, 0, 0, 0.2)');
    
    name2bt.style('background-color', '#d3b7a1');
    name2bt.style('color', '#4a4846');
    name2bt.style('padding', '10px 20px');
    name2bt.style('border', 'none');
    name2bt.style('font-size', '16px');
    name2bt.style('font-family', "'Courier New', Courier, monospace");
    name2bt.style('border-radius', '5px');
    name2bt.style('box-shadow', '2px 2px 5px rgba(0, 0, 0, 0.2)');
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

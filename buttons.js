function buttonSetup() {
    let button = createButton('RESET');
    button.position(board.side / 2 - 35, 530);
    let inputPlayer1 = createInput();
    inputPlayer1.attribute('placeholder', 'Player1')
    inputPlayer1.position(displayWidth / 2, displayHeight / 20);
    let inputPlayer2 = createInput();
    inputPlayer2.attribute('placeholder', 'Player2')
    inputPlayer2.position(displayWidth / 2, displayHeight / 10);
    inputPlayer1.style('background-color', '#d3b7a1');
    inputPlayer1.style('color', '#4a4846');
    inputPlayer1.style('padding', '10px 20px');
    inputPlayer1.style('border', 'none');
    inputPlayer1.style('font-size', '16px');
    inputPlayer1.style('font-family', "'Courier New', Courier, monospace");
    inputPlayer1.style('border-radius', '5px');
    inputPlayer1.style('box-shadow', '2px 2px 5px rgba(0, 0, 0, 0.2)');
    inputPlayer2.style('background-color', '#d3b7a1');
    inputPlayer2.style('color', '#4a4846');
    inputPlayer2.style('padding', '10px 20px');
    inputPlayer2.style('border', 'none');
    inputPlayer2.style('font-size', '16px');
    inputPlayer2.style('font-family', "'Courier New', Courier, monospace");
    inputPlayer2.style('border-radius', '5px');
    inputPlayer2.style('box-shadow', '2px 2px 5px rgba(0, 0, 0, 0.2)');
    saveButton = createButton('Play!');
    saveButton.position(displayWidth / 1.8, displayHeight / 6);
    saveButton.mousePressed(saveName);
}
function saveName() {
    let name1 = inputPlayer1.value();
    if (name1 === '') {
        name1 = 'Player 1'; // Default value
    }
    let name2 = inputPlayer2.value();
    if (name2 === '') {
        name2 = 'Player 2'; // This time for player2
    }
}
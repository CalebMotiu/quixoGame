function setup() {
    createCanvas(displayWidth, displayHeight);
    background("pink");
    initBoxes();
    buttonSetup();
}
function draw() {

    creatBoard()
    creatBoxes()

    overBox(0)
    overBox(4)
    overBoxColumn(0)
    overBoxColumn(4)

    function mousePressed() {
        for (let i = 0; i < boardSize; i++) {
          for (let j = 0; j < boardSize; j++) {
            if (boxes[i][j].overBox) {
              boxes[i][j].border = "rgb(7, 255, 255)";
              boxes[i][j].locked = true;
            }
            else{
              boxes[i][j].border = "black";
              boxes[i][j].locked = false;
              }
            }
        }
      }

}
button.addEventListener("click", function () {
    page.reload();
});
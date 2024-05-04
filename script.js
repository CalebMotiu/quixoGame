function setup() {
    createCanvas(displayWidth, displayHeight);
    background("pink");
    initBoxes();
    buttonSetup();
}
function draw() {


    overBox(0)
    overBox(4)
    overBoxColumn(0)
    overBoxColumn(4)
    creatBoard()
    creatBoxes()


    mousePressed()
}
button.addEventListener("click", function () {
    page.reload();
});
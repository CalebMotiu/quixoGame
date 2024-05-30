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
    colorBox()
}
/*button.addEventListener("click", function () {
    page.reload();
});*/
function mouseClicked() {
    selectedBox() 
 }
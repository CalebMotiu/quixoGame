function setup() {
    createCanvas(displayWidth, displayHeight);
    background("pink");
    initBoxes();
    buttonSetup();
}
function draw() {


    creatBoard()
    creatBoxes()


}
button.addEventListener("click", function () {
    page.reload();
});
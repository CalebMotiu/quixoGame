function setup(){
    createCanvas(650, 650,WEBGL);

}
function draw(){

  
    ambientLight(100, 60, 60);
    pointLight(255, 255, 0, 0, -100, 100);
    pointLight(255, 255, 255, 0, 10, 100);

  

    push()
    fill("green")
    rotateX(200);
    cylinder(300,30,50,50)
    pop()



   
}
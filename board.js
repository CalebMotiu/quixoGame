function setup(){
    createCanvas(650, 650,WEBGL);

}
function draw(){

  
    ambientLight(100, 60, 60);
    pointLight(255, 255, 255, 0, 0, 100);
  

    push()
    fill("green")
    translate(0,0,0)
    plane(400,400,50,50)
    ambientMaterial(250);
    fill("rgb(182, 81, 4)")
    torus(270,35,50)
    translate(220,0,0)
    plane(60,360,50,50)
    translate(-440,0,0)
    plane(60,360,50,50)
    translate(220,-220,0)
    plane(360,60,50,50)
    translate(0,440,0)
    plane(360,60,50,50)
    pop()

}
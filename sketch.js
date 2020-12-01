var bullet1,bullet2
var wall1,wall2


function setup() {
  createCanvas(900,400);
  bullet1=createSprite(50, 70, 50, 10);
  bullet1.shapeColor="white"
  bullet2=createSprite(50, 300, 50, 10);
  bullet2.shapeColor="white"
  
  wall1=createSprite(800,300,70,150)
  wall2=createSprite(800,100,40,150)
}

function draw() {
  background("black");  


  bullet1.velocityX=50;
  bullet2.velocityX=50;
  bullet1.weight=32;
  bullet2.weight=100;


  if(bullet1.isTouching(wall2)){
    wall2.shapeColor="red"
    bullet1.collide(wall2)
  }
  if(bullet2.isTouching(wall1)){
    wall1.shapeColor='green'
    bullet2.collide(wall1);
  }

  
  drawSprites();
}
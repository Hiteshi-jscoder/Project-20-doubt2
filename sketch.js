var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1500, 200, 60, 30);
 // wall.shapeColor=(80,80,80);
  car.shapeColor = (80, 80, 80);
  
}

function draw() {
  background(19,4,117);
  speed=random(55,90)
  weight=random(400,1500)
  car.velocityX=speed;
  wall.visible=true;

  if(wall.x-car.x < car.width/2+wall.width/2){
    car.velocityX=0;
  }
  drawSprites();
}
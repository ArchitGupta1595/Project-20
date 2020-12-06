var car, speed, weight, wall;

function setup() {
  createCanvas(1200,400);
  car=createSprite(50, 200, 50, 50);
  wall= createSprite(800,200,20,200);
  wall.shapeColor="silver"
  speed= Math.round(random(85,1200));
  weight= Math.round(random(100,1500));
  
}

function draw() {
  background(0); 
  
  if(keyDown("space")){
    car.x=50;
    car.velocityX=speed;
  }
 
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0;
    var deformation= weight*speed*speed/11250;
    if(deformation>180){
      car.shapeColor= color(255,0,0);
      textSize(29);
      fill("red");
      text("Speed too high. Danger!",400,200);
    }
    if(deformation<180 && deformation>100){
      car.shapeColor=color(230,230,0);
      textSize(26);
      fill("yellow")
      text("Moderate Danger. Drive carefully!",0,0)
    }
    if(deformation<100){
      car.shapeColor= color(0,255,0);
      textSize(26);
      fill("green")
      text("No danger. Enjoy your ride!",0,0)
    
  }
  }
  drawSprites();
}
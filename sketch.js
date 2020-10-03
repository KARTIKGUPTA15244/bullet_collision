//var lane1,lane2,lane3,lane4;
var damage;
var bullet;
var lwall,lbullet;
//var car1;
//var car2;
//var car3;
var wall,thickness,height;
//var speed,speed1,speed2,speed3, weight;

function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);
//lane1  = createSprite(400,90,800,10);
//lane2  = createSprite(400,180,800,10);
//lane3  = createSprite(400,270,800,10);
//lane4  = createSprite(400,360,800,10);
wall = createSprite(1200,200,thickness,height/2);
wall.shapeColor = "blue";
bullet = createSprite(80,200,30,30);
speed = random(223,321);
//car1 = createSprite(80,135,30,30);
//car2 = createSprite(80,225,30,30);
//car3= createSprite(80,315,30,30);

weight=random(30,52);

}

function draw() {
  background(0);  
  bullet.velocityX = 10;


  if(hascollided(wall,bullet)){
    bullet.velocityX = 0;
    if(damage<10){
      wall.shapeColor = "green"
    }
    if(damage>10){
      wall.shapeColor = "red"
    }
  }

  drawSprites();

}

function hascollided(lwall,lbullet){

  if (lwall.x - lbullet.x < lbullet.width/2 +lwall.width/2){
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    
    return true
    }
else{
  return false
}
}
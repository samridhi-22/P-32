var car ,wall;
var speed,weight;
var bg,backgroundImg;

function preload(){
  getBackgroundImage();

}

function setup() {
  createCanvas(1600,400);
 car= createSprite(50, 200, 50, 50);
wall=createSprite(1000,200,30,height/2);
wall.shapeColor=color(80,80,80);
  speed=random(55,90)
  weight=random(400,1500);
  car.velocityX=speed;
}


function draw() {
  if(backgroundImg){
    background(backgroundImg);  
  }
 
  if(wall.x- car.x<(car.width+wall.width)/2){
car.velocityX=0;
var deformation=0.5* weight*speed*speed/22509;
if (deformation>180){
  car.shapeColor=color(255,0,0);
}
if (deformation<180 && deformation>100);
car.shapeColor=color(230,230,0);
  } 
  if(deformation<100){
    car.shapeColor=color(0,255,0);
  }
  drawSprites();
}
async function getBackgroundImage(){
  var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJson=await response.json();
  var time=responseJson.datetime;
var hour=time.slice(11,13);
if (hour>=7 && hour<=17){
bg="bg.png";

}else{
  bg="bg2.jpg";
}
backgroundImg=loadImage(bg);
}
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0;
var ground,jungle,jungleImage;

function preload(){
jungleImage = loadImage("jungle.jpg");

  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
 
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(800,400);  

//creating monkey  
monkey  = createSprite(100,250,20,20);  
monkey.addAnimation("moving", monkey_running);  
monkey.scale = 0.1;  
  
ground = createSprite(100,320,1200,20);  
ground.velocityX = -4;  
ground.x = ground.width/2;
ground.visible = false;  
console.log(ground.x);  
  
jungle = createSprite(0,0,800,400);
jungle.addImage(jungleImage);  
jungle.x = jungle.width/2;
jungle.scale = 1.7;  
jungle.velocityX = -4;
  
foodGroup = new Group();  
obstacleGroup = new Group();  
}


function draw(){
background("white"); 

if(ground.x < 0)
{
ground.x = ground.width / 2;  
}  
  
if(jungle.x < 0)
{
jungle.x = jungle.width / 2;  
}  
  
if(keyDown("space"))
{
monkey.velocityY = -10;  
}  
monkey.velocityY = monkey.velocityY + 0.5;
  
  
if(foodGroup.isTouching(monkey))  
{
foodGroup.destroyEach();  
score = score + 2;  
}  
switch(score)
{
  case 10 : monkey.scale = 0.2;    
  break;  

  
  case 20 : monkey.scale = 0.3;    
  break;  

   case 30 : monkey.scale = 0.4;    
  break; 

   case 40 : monkey.scale = 0.5;    
  break; 

  default : break;
}  
  
if(obstacleGroup.isTouching(monkey))  
{
monkey.scale = 0.1; 



}  
monkey.collide(ground);  

 spawnFood();
 
 spawnObstacle(); 
  
drawSprites(); 

fill("white");  
textSize(20);
text("Score : " + score , 200 , 50);  
  
}

function spawnFood()
{
if(frameCount % 80 === 0)
{
banana  = createSprite(600,180,20,10);  
banana.addImage(bananaImage);
banana.scale = 0.1;  
banana.velocityX = -4; 
banana.y = Math.round(random(80,150));
banana.lifetime = 150;  
monkey.depth = banana.depth + 1;  
  
foodGroup.add(banana);  
}  
}

function spawnObstacle()
{
if(frameCount % 300 === 0)
{
obstacle  = createSprite(800,280,40,20);  
obstacle.addImage(obstacleImage);
obstacle.scale = 0.2;  
obstacle.velocityX = -4; 
obstacle.lifetime = 200;  

obstacleGroup.add(obstacle);  
}  
}


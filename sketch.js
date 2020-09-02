const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var player, goal, ball, goalKeeper, goalImg, rightSlide, leftSlide, stand, keeper;

function preload(){
  goalImg = loadImage("sprites/GoalImg2.png")
  keeper = loadAnimation("sprites/Stand.png",
  "sprites/Stand.png","sprites/Stand.png",
  "sprites/Stand.png","sprites/Stand.png",
  "sprites/Stand.png","sprites/Stand.png",
  "sprites/LeftSlide.png","sprites/LeftSlide.png",
  "sprites/LeftSlide.png","sprites/Stand.png",
  "sprites/Stand.png","sprites/Stand.png",
  "sprites/Stand.png","sprites/Stand.png",
  "sprites/Stand.png","sprites/Stand.png",
  "sprites/RightSlide.png","sprites/RightSlide.png",
  "sprites/RightSlide.png");
}

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  player = createSprite(400,600,40,40);
  ball = new Ball(400,550,20);
  goal = Bodies.rectangle(width/2, 100, 50, 50);
  World.add(world,goal);
  goalKeeper = createSprite(400, 200, 25, 25);
  goalKeeper.addAnimation("Keeper Animation",keeper)
  goalKeeper.scale = 0.6
}

function draw() {
  background("black");  
  drawSprites();
  ball.display();
  imageMode(CENTER)
  image(goalImg,goal.position.x,goal.position.y,width/2,200);
  //kick();
}

function keyPressed(){
  if(keyCode===32){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:10,y:10});
  }
}


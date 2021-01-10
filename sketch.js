const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;

function setup() {
  createCanvas(800,400);
  
  myEngine= Engine.create();
  myWorld= myEngine.world;

  var myProperties={
    isStatic:true
  }

  ground = Bodies.rectangle(400, 390, 800, 20, myProperties);
  World.add(myWorld, ground)
  pointa = ground.position;

  var ballProperties={
    restitution:0.5
  }

  ball = Bodies.circle(400, 50, 50, ballProperties)
  World.add(myWorld, ball)
  pointb = ball.position;

  console.log(ball)
}

function draw() {
  background("black");  
  
  Engine.update(myEngine);

  rectMode(CENTER);
  rect(pointa.x, pointa.y, 800, 20)

  ellipseMode(CENTER);
  ellipse(pointb.x, pointb.y, 100, 100)
}
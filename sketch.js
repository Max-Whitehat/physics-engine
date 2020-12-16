const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ball


function setup(){
  createCanvas(400,400)

  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic : true
  }

  var option = {
    restitution : 0.8
  }

  body = Bodies.rectangle(200,380,400,50,options)
    ball = Bodies.circle(200,200,20,option)

  World.add(world,body);
  World.add(world,ball);
 
}

function draw(){

  Engine.update(engine)

  background("red")

  rectMode(CENTER)
  ellipseMode(RADIUS)


rect(body.position.x,body.position.y,400,50)

ellipse(ball.position.x,ball.position.y,20,20)



  //rect(200,200,50,50);

}
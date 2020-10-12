const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball1,ball2,ball3,ball4,ball5;
var ceilling,d=20;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ball1 = new bob (400,500);
	ball2 = new bob (350,500);
	ball3 = new bob (300,500);
	ball4 = new bob (450,500);
	ball5 = new bob (500,500);
	ceilling = new pole (400,200,600,10)

	sling1 = new SlingShot(ball2.ball,ceilling.bar,-d*2,0);
	sling2 = new SlingShot(ball1.ball,ceilling.bar,-d*1,0);
	sling3 = new SlingShot(ball3.ball,ceilling.bar,-d*3,0);
	sling4 = new SlingShot(ball4.ball,ceilling.bar,-d*0,0);
	sling5 = new SlingShot(ball5.ball,ceilling.bar,-d*-1,0);
	

	var options={
		bodyA:ball1,
		bodyB:pole,
	}

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  ceilling.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
}



